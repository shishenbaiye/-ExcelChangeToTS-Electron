// const fs = require('fs');

var tsTemp = `export class {ClsName} extends ViewBase {
{propertyStr}
    constructor() {
        super("{PATH}");
    }
    public buildSelf(): void {
{bindStr}
    }
}`;
var perfabMap = new Map();
var tsArr = [`//工具自动生成请勿修改
import { ViewBase } from "odin";`];
function startExport(path) {

    tsArr = [`//工具自动生成请勿修改
import { ViewBase } from "odin";`];
    tsArr.push("import { GameConfig } from \"./gameConfig/GameConfig\";\nexport namespace LanUtil {\n\texport function setUILanguage(ui: MWGameUI.MWUIButton | MWGameUI.MWUITextblock) {\n\t\tlet key: string = null;\n\t\tif (ui instanceof MWGameUI.MWUIButton) {\n\t\t\tkey = ui.getButtonString();\n\t\t}\n\t\telse {\n\t\t\tkey = ui.getText();\n\t\t}\n\n\t\tif (key) {\n\t\t\tlet lan = GameConfig.LangueConfig.getElement(key);\n\t\t\tif (lan) {\n\t\t\t\tif (ui instanceof MWGameUI.MWUIButton) {\n\t\t\t\t\tui.setButtonString(lan.Value)\n\t\t\t\t}\n\t\t\t\telse {\n\t\t\t\t\tui.setText(lan.Value);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n}");
    //console.log("当前路径:" + path);
    //     console.log("1.必须先手动创建UITemplate.ts\n");
    //     console.log("2.只会导出名字以m开头的组件.ts\n");
    checkWorkspace(path).then(function (fileList) {
        var strList = [];
        fileList.forEach(function (element) {
            ParseUIFile(element, strList);
        });
        var savePath = path + "\\JavaScripts\\" + "UITemplate.ts";
        fs.writeFile(savePath, tsArr.join("\n"), { encoding: "utf-8" }, function () {
            console.log("保存成功：" + savePath);
        });
        var lanArr = [];
        strList.forEach(function (obj) {
            console.log(obj.str, obj.name);
            lanArr.push(obj.str);
        });
    });
}

function checkWorkspace(proPath) {
    return new Promise(function (resolve, reject) {
        var ret = [];
        if (!fs.existsSync(proPath)) {
            console.error(proPath + "not exist");
            reject(ret);
            return;
        }
        var UIArr = ["/UI/"];
        var uiPath = proPath + UIArr[0];
        ret = ret.concat(GetUIFiles(uiPath));
        // check excel exist
        resolve(ret);
    });
}

function GetUIFiles(parentPath) {
    var ret = [];
    var files = fs.readdirSync(parentPath);
    for (var i = 0; i < files.length; ++i) {
        var currentPath = parentPath + "/" + files[i];
        if (fs.statSync(currentPath).isDirectory()) {
            ret = ret.concat(GetUIFiles(currentPath));
            continue;
        }
        var url = (parentPath + "/" + files[i]).replace("//", "/");
        if (files[i].endsWith(".uiprefab.meta") || files[i].endsWith(".ui.meta")) {
            ParseMetaFile(url);
            continue;
        }
        if (files[i].endsWith(".uiprefab") == false && files[i].endsWith(".ui") == false) {
            continue;
        }
        ret.push(url);
        //if (files[i].indexOf(".uiprefab") === -1 || files[i] === "Main.ui" || files[i].indexOf(".meta") != -1) continue;
    }
    return ret;
}


var NameMap = new Map();
NameMap.set("MWImage", "MWUIImage");
NameMap.set("MWCanvas", "MWUICanvas");
NameMap.set("MWButton", "MWUIButton");
NameMap.set("MWInputBox", "MWUIInputbox");
NameMap.set("MWPanelWidget", "MWUIPanelWidget");
NameMap.set("MWProgressBar", "MWUIProgressbar");
NameMap.set("MWTextBlock", "MWUITextblock");
NameMap.set("MWScrollBox", "MWUIScrollBox");
var DataPropty = /** @class */ (function () {
    function DataPropty(name, path, type, labStr) {
        this.name = name;
        this.path = path;
        this.type = type;
        this.labStr = labStr;
    }
    return DataPropty;
}());
function ParseObj(fileName, varMap, isFirst, parentPath, pkey, obj, strList) {
    var objArr = [];
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            var element = obj[key];
            if (element instanceof Object) {
                //ParseObj(fileName, varMap, isFirst, parentPath, key, element);
                objArr.push([element, key]);
            }
            else if (key == "名 字") {
                if (isFirst) {
                    isFirst = false;
                    continue;
                }
                if (parentPath == "") {
                    parentPath = element;
                }
                else {
                    parentPath += "/" + element;
                }
                if (String(element).charAt(0) == String(element).charAt(0).toLowerCase()) {
                    //if (String(element).startsWith("MW") == false) {
                    // varMap.push(new DataPropty(element, parentPath, pkey.split("_")[0], obj["文 本"]));
                    if (pkey.startsWith("Prefab_")) {
                        var type = pkey.substring(0, pkey.lastIndexOf("_"));
                        varMap.push(new DataPropty(element, parentPath, type, obj["文 本"]));
                    }
                    else {
                        varMap.push(new DataPropty(element, parentPath, pkey.split("_")[0], obj["文 本"]));
                    }
                }
                //console.log(parentPath, pkey);
            }
            else if (key == "文 本") {
                var labStr = obj["文 本"];
                if (labStr != "" && labStr != null) {
                    var name_1 = obj["名 字"];
                    if (true || name_1 && name_1.length > 0 && name_1.charAt(0) != "m") {
                        var cn = labStr.replace(/[\u4e00-\u9fa5]/g, "");
                        if (cn.length != labStr.length) {
                            strList.push({ str: labStr, name: fileName });
                        }
                    }
                }
            }
        }
    }
    objArr.forEach(function (element) {
        ParseObj(fileName, varMap, isFirst, parentPath, element[1], element[0], strList);
    });
}

function ParseUIFile(uiFilePath, strList) {
    console.log("###开始解析:" + uiFilePath);
    var data = fs.readFileSync(uiFilePath, { encoding: "utf-8" });
    if (data.charAt(0) == '�') {
        data = fs.readFileSync(uiFilePath, { encoding: "utf16le" });
    }
    if (data) {
        data = data.replace(/\t/g, "");
        data = data.replace(/\r/g, "");
        data = data.replace(/\n/g, "");
        try {
            var index = data.indexOf('{', 0);
            data = data.substring(index);
            var jsonData = JSON.parse(data);
            var varMap = [];
            var isFirst = true;
            var fileNameArr = uiFilePath.split("/");
            var fileName = fileNameArr[fileNameArr.length - 1];
            ParseObj(fileName, varMap, isFirst, "", null, jsonData, strList);
            WriteTSFile(uiFilePath, varMap);
        }
        catch (error) {
            console.log(uiFilePath + "\u7F16\u7801\u4E0D\u5BF9\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01");
        }
    }
}

function WriteTSFile(uiFilePath, varMap) {
    var path = uiFilePath.split("/UI/")[1].split(".")[0];
    if (path.startsWith("/")) {
        path = path.substring(1);
    }
    var ClsName = "UI_" + GetFileNameByPath(uiFilePath).split(".")[0];
    var propertyStr = "";
    //var bindStr = "\t\t\tlet base = this.UIObject as UE.MWUIWidgetBase;\n";
    var bindStr = "";
    var focusStr = "";
    var setText = "";
    varMap.forEach(function (element) {
        var newType = element.type;
        if (NameMap.has(element.type)) {
            newType = "MWGameUI." + NameMap.get(element.type);
        } else if (perfabMap.has(element.type)) {
            newType = perfabMap.get(element.type);
        }
        propertyStr += "\tpublic " + element.name + ": " + newType + ";\n";

        if (element.type == "MWButton") {
            bindStr += "\t\tthis." + element.name + " = this.findChildByPath(" + newType + ", \"" + element.path + "\");\n";

            focusStr += "\t\tthis." + element.name + ".onClicked().add(() => {\n\t\t\tEvents.dispatchLocal(\"PlayButtonClick\", \"" + element.name + "\");\n\t\t});\n";
            focusStr += `\t\tLanUtil.setUILanguage(this.${element.name});\n`
        }
        else if (element.type == "MWTextBlock") {

            bindStr += "\t\tthis." + element.name + " = this.findChildByPath(" + newType + ", \"" + element.path + "\");\n";
            focusStr += `\t\tLanUtil.setUILanguage(this.${element.name});\n`
        }
        else if (element.type.startsWith("Prefab")) {
            bindStr += "\t\tthis." + element.name + " = new " + newType + "();\n";
            bindStr += "\t\tthis." + element.name + "[\"prefab\"] = this.findChildByPath(MWGameUI.MWUIUserWidgetPrefab, \"" + element.path + "\");\n";
            bindStr += "\t\tthis." + element.name + ".buildSelf();\n";
        }
        else {
            bindStr += "\t\tthis." + element.name + " = this.findChildByPath(" + newType + ", \"" + element.path + "\");\n";
        }
    });
    bindStr += focusStr;
    //bindStr += setText;
    var clsStr = tsTemp.replace("{ClsName}", ClsName);
    clsStr = clsStr.replace("{propertyStr}", propertyStr);
    clsStr = clsStr.replace("{bindStr}", bindStr);
    clsStr = clsStr.replace("{PATH}", path);
    //let outPath = ClsName + ".ts";
    //console.log(clsStr);
    //console.log("开始保存:" + outPath);
    // writeFile(Consts.TSOutPath() + outPath, clsStr, { encoding: "utf-8" }, () => {
    //     console.log("保存成功");
    // })
    tsArr.push(clsStr);
}

function ParseMetaFile(uiFilePath) {
    console.log("###开始解析:" + uiFilePath);
    var data = fs.readFileSync(uiFilePath, { encoding: "utf-8" });
    if (data.charAt(0) == '�') {
        data = fs.readFileSync(uiFilePath, { encoding: "utf16le" });
    }
    if (data) {
        data = data.replace(/\t/g, "");
        data = data.replace(/\r/g, "");
        data = data.replace(/\n/g, "");
        try {
            var index = data.indexOf('{', 0);
            data = data.substring(index);
            var jsonData = JSON.parse(data);
            perfabMap.set("Prefab_" + jsonData["Guid"], "UI_" + jsonData["Name"].split(".")[0]);
        }
        catch (error) {
            console.log(uiFilePath + "\u7F16\u7801\u4E0D\u5BF9\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01");
        }
    }
}
function GetFileNameByPath(path) {
    var arr = path.split("/");
    if (arr) {
        return arr[arr.length - 1];
    }
    return "";
}