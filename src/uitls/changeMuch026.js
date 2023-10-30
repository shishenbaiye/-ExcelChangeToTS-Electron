var btnnn026 = function () {
    /**文件列表数组 */
    var allListArray = [];
    // Excel表格数据，一个元素就是一个Excel文件的数据
    var excelArray = [];
    /**数组内容 */
    var arrayContent = [];
    var arrayinterface = [];
    /** 读取到的文件名数组 */
    var _fileArray = [];
    // 数据类型的表头缓存，用于判断是否更改了类型
    var cacheTableHeadTypeMap = new Map();
    // 去掉不合适的之后的文件名数组
    var fileArray = []
    /**属性数组 */
    var objectArray = [];
    /**类型数组 */
    var methodArray = [];
    /**属性描述 */
    var describeArray = [];
    // 存的一行行的多语言代码
    var arrayLanguage = [];
    // 数据类型相关的缓存
    var dataTypeArrayCache = [];
    /**检查判断 */
    var checkreturn = false;
    /**下标 */
    var Sindex = 4;
    // 临时用数组
    var _selectFileNameArray = [];
    // 临时用来检查文件名重复的数组
    var _tempMulitMap = new Map()

    var dirExists = false

    try {
        _fileArray = fs.readdirSync(inputDir)
        let out = fs.readdirSync(outputDir)
    } catch {
        window.alert("请检查路径是否正确!!!")
        isreturn = true
    }

    initCache(cacheTableHeadTypeMap)

    console.log("看看多少个文件：" + _fileArray.length)

    _fileArray.forEach((item, index) => {
        console.log("文件遍历开始了：" + item + "  " + new Date().getTime() + "  临时文件：" + item.indexOf("~"))
        if (isreturn) {
            return
        }

        if (item.indexOf("~") != -1) {
            // 包含波浪线的文件都视为临时文件，直接处理下一个
            return
        }

        // 容错处理，有不是Excel文件的就不继续了
        if (item.indexOf(xlsxStr) == -1 && !item.indexOf(xlsStr) == -1) {
            window.alert(`存在非Excel文件(不是xls|xlsx结尾)`)
            isreturn = true
            return
        }

        // // 容错处理，文件名字中存在xlsx或者xls，容易误判，所以也提示改下
        // if ((item.indexOf(xlsxStr) != item.length - xlsxStr.length - 1)
        //     || ((item.indexOf(xlsStr) != item.length - xlsStr.length - 1) && (item.indexOf(xlsStr) != item.length - xlsStr.length - 2))) {
        //     window.alert(`文件名字中存在xls关键字，可能会导致后续逻辑出问题，请处理后重试 ` + item.length + "  " + item.indexOf(xlsxStr) + "  " + item.indexOf(xlsStr))
        //     console.log("文件名字中存在xls关键字，可能会导致后续逻辑出问题，请处理后重试 " + item.length + "  " + item.indexOf(xlsxStr) + "  " + item.indexOf(xlsStr));
        //     isreturn = true
        //     return
        // }

        // 临时记录下后缀，等文件名字切割完再加回去
        let tempXlsxStr = xlsStr
        if (item.indexOf(xlsxStr) != -1) {
            tempXlsxStr = xlsxStr
        }

        let fileName = item.replace(xlsxStr, "").replace(xlsStr, "")

        // 跟策划协定，下划线后面的可以随意，可以用中文，所以这里要专门切割掉
        if (fileName.match("_")) {
            fileArray.push(fileName.split("_")[0] + tempXlsxStr)

            // 用来存储生成代码中的引用部分
            _selectFileNameArray.push(fileName.split("_")[0])
        } else {
            fileArray.push(fileName + tempXlsxStr)

            // 用来存储生成代码中的引用部分
            _selectFileNameArray.push(fileName)
        }

        // 处理重复文件情况（去掉中文后缀之后，还存在重复的也不允许）
        if (_tempMulitMap.has(fileName)) {
            window.alert(`文件名字${fileName}重复（可能是下划线前面部分）！`)
            isreturn = true
            return
        } else {
            _tempMulitMap.set(fileName);
        }

        let startParseTime = new Date().getTime()



        console.log("文件遍历解析开始：" + item + "  " + startParseTime)
        // 都检查完一遍，就解析出来放到数据数组里面
        excelArray.push(xlsxFile.parse(`${inputDir}\\${item}`)[0].data)
        let endParseTime = new Date().getTime()
        console.log("文件遍历解析结束：" + item + "  " + endParseTime)
        if (endParseTime - startParseTime > 3000) {
            console.warn("解析超时(超过3秒)：" + item + "  耗时：" + (endParseTime - startParseTime))
        }
    })
    // 清理掉用来临时判断重复的map
    _tempMulitMap.clear()
    _tempMulitMap = null

    // 逻辑里面出现了不能继续往下执行的情况，这里直接返回
    if (isreturn) {
        isreturn = false;
        return
    }
    console.warn(excelArray);
    /**校验列表文件 */
    allListArray = _selectFileNameArray; // ChecktableList(_selectFileNameArray);
    console.log("开始清楚空行");
    /**清除空行 */
    excelArray.forEach((obj, index) => {
        let NewArray = [];
        // 这里的obj应该是一个Excel完整数据，下面的for是取的一个sheet
        obj.forEach((item, index1) => {
            // if (item[0] == "End") {
            //     // 跟策划商量，第一个格子是End就不继续了
            //     return
            // }
            if (index1 < 4) {
                // 这个为啥是小于4，是前四行是吗？
                NewArray.push(item)
            }
            if (index1 >= 4) {
                // 大于等于4行？
                if (index1 == 4) {
                    Sindex = 4;
                    // 这个赋值用来做什么？其实我看是固定的
                }
                if (item[0]) {
                    // 取的第一列吗？意思是第一列有值的话，就存起来？
                    NewArray.push(item)
                } else {

                }
            }
        })
        excelArray[index] = NewArray;
    })
    excelArray.forEach((obj, index) => {
        for (let i = 0; i < obj[0].length; i++) {
            if (!obj[0][i]) {
                for (let j = 0; j < obj.length; j++) {
                    delete excelArray[index][j][i]
                    let arr = [];
                    for (let k = 0; k < excelArray[index][0].length; k++) {
                        arr.push(excelArray[index][j][k]);
                    }
                    excelArray[index][j] = arr;
                }
            }
        }
    })


    if (isreturn) {
        isreturn = false;
        return
    }

    console.log("开始解析属性类型");
    
    //属性类型描述数组
    excelArray.forEach((obj, index) => {
        let object = "";
        let method = "";
        let describe = "";
        console.warn(obj);
        try {
            for (let i = 0; i < obj[0].length; i++) {
                if (i == obj[0].length - 1) {
                    try {
                        obj[0][i] = obj[0][i].toUpperCase()
                    } catch (error) {
                        window.alert(`文件：${fileArray[index]}第1行第${i + 1}列变量类型有误，请检查后再转换！`)
                        checkreturn = true
                        return;
                    }
                    if (obj.length > 3) {
                        if (obj[3][i] == `Language`) {
                            obj[0][i] = `STRING`
                        }
                        if (obj[3][i] != `ChildLanguage`) {
                            obj[1][i] = obj[1][i].trim();
                            object += `"${obj[1][i]}"`;
                            describe += `${obj[2][i]}`
                        }
                    }
                    if (obj[3][i] != `ChildLanguage`) {
                        switch (obj[0][i]) {
                            case "INT": method += `number`
                                break;
                            case "STRING": method += `string`
                                break;
                            case "VECTOR2": method += `Type.Vector2`
                                break;
                            case "VECTOR3": method += `Type.Vector`
                                break;
                            case "VECTOR4": method += `Type.Vector4`
                                break;
                            case "INT[]": method += `Array<number>`
                                break;
                            case "STRING[]": method += 'Array<string>'
                                break;
                            case "INT[][]": method += `Array<Array<number>>`
                                break;
                            case "STRING[][]": method += `Array<Array<string>>`
                                break;
                            case "FLOAT": method += `number`
                                break;
                            case "FLOAT[]": method += `Array<number>`
                                break;
                            case "FLOAT[][]": method += `Array<Array<number>>`
                                break;
                            case "BOOLEAN": method += `boolean`
                                break;
                            case "BOOLEAN[]": method += `Array<boolean>`
                                break;
                            case "BOOLEAN[][]": method += `Array<Array<boolean>>`
                                break;
                            case "VECTOR2[]": method += `Type.Vector2[],`
                                break;
                            case "VECTOR3[]": method += `Type.Vector[],`
                                break;
                            case "VECTOR4[]": method += `Type.Vector4[],`
                                break;
                            default:
                                window.alert(`文件：${fileArray[index]}第1行第${i + 1}列变量类型填写有误，请检查后再转换！`)
                                checkreturn = true
                                return;
                        }
                    }
                } else {
                    try {
                        obj[0][i] = obj[0][i].toUpperCase();
                    } catch (error) {
                        window.alert(`文件：${fileArray[index]}第1行第${i + 1}列变量类型有误，请检查后再转换！`)
                        checkreturn = true
                        return
                    }
                    if (obj.length > 3) {
                        if (obj[3][i] == `Language`) {
                            obj[0][i] = `STRING`
                        }
                        if (obj[3][i] != `ChildLanguage`) {
                            obj[1][i] = obj[1][i].trim();
                            object += `"${obj[1][i]}",`
                            describe += `${obj[2][i]},`
                        }
                    }
                    if (obj[3][i] != `ChildLanguage`) {
                        switch (obj[0][i]) {
                            case "INT": method += `number,`
                                break;
                            case "STRING": method += `string,`
                                break;
                            case "VECTOR2": method += `Type.Vector2,`
                                break;
                            case "VECTOR3": method += `Type.Vector,`
                                break;
                            case "VECTOR4": method += `Type.Vector4,`
                                break;
                            case "INT[]": method += `Array<number>,`
                                break;
                            case "STRING[]": method += 'Array<string>,'
                                break;
                            case "INT[][]": method += `Array<Array<number>>,`
                                break;
                            case "STRING[][]": method += `Array<Array<string>>,`
                                break;
                            case "FLOAT": method += `number,`
                                break;
                            case "FLOAT[]": method += `Array<number>,`
                                break;
                            case "FLOAT[][]": method += `Array<Array<number>>,`
                                break;
                            case "BOOLEAN": method += `boolean,`
                                break;
                            case "BOOLEAN[]": method += `Array<boolean>,`
                                break;
                            case "BOOLEAN[][]": method += `Array<Array<boolean>>,`
                                break;
                            case "VECTOR2[]": method += `Type.Vector2[],`
                                break;
                            case "VECTOR3[]": method += `Type.Vector[],`
                                break;
                            case "VECTOR4[]": method += `Type.Vector4[],`
                                break;
                            default:
                                window.alert(`文件：${fileArray[index]}第1行第${i + 1}列变量类型填写有误，请检查后再转换！`);
                                checkreturn = true
                                return
                        }
                    }
                }
            }
        }catch(error){
            window.alert(`文件：${fileArray[index]}表数据有误，请检查后再转换！`)
            checkreturn = true
            return
        }
        
        
        objectArray.push(object);
        methodArray.push(method);
        describeArray.push(describe);
    })

    if (checkreturn) {
        checkreturn = false;
        return
    }


    console.log("开始赋值操作！");

    /**修改原数组 */
    excelArray.forEach((excel, indexe) => {
        console.log(`开始赋值操作！${fileArray[indexe]}`)
        for (let j = 0; j < excel[0].length; j++) {

            if (excel[0][j] == "VECTOR2") {
                for (let i = Sindex; i < excel.length; i++) {
                    if (!excel[i][j]||excel[i][j] === "") {
                        excel[i][j] = null
                    } else {
                        excel[i][j] = excel[i][j].replace(/\|/g, ",");
                        excel[i][j] = "2$" + excel[i][j] + "$2";
                    }
                }
            }
            if (excel[0][j] == "VECTOR3") {
                for (let i = Sindex; i < excel.length; i++) {
                    if (!excel[i][j]||excel[i][j] === "") {
                        excel[i][j] = null
                    } else {
                        excel[i][j] = excel[i][j].replace(/\|/g, ",");
                        excel[i][j] = "3$" + excel[i][j] + "$3";
                    }
                }
            }
            if (excel[0][j] == "VECTOR4") {
                for (let i = Sindex; i < excel.length; i++) {
                    if (!excel[i][j]||excel[i][j] === "") {
                        excel[i][j] = null
                    } else {
                        excel[i][j] = excel[i][j].replace(/\|/g, ",");
                        excel[i][j] = "4$" + excel[i][j] + "$4";
                    }
                }
            }
            if (excel[0][j] == "BOOLEAN") {
                for (let i = Sindex; i < excel.length; i++) {
                    if (!excel[i][j] && excel[i][j] != 0 || excel[i][j] === "") {
                        excel[i][j] = null;
                    } else {
                        if (excel[i][j] == 1) {
                            excel[i][j] = true;
                        } else if (excel[i][j] == 0) {
                            excel[i][j] = false;
                        } else {
                            window.alert(`文件${fileArray[indexe]}中第${i + 1}行${j + 1}列布尔值填写有问题，请填写1或0！`);
                            checkreturn = true
                        }
                    }
                }
            }
            if (excel[0][j] == "BOOLEAN[]") {
                for (let i = Sindex; i < excel.length; i++) {
                    if (!excel[i][j] && excel[i][j] != 0||excel[i][j] === "") {
                        excel[i][j] = null
                    } else {
                        if (!!excel[i][j].toString().match(/\|/g)) {
                            excel[i][j] = excel[i][j].split("\|");
                            excel[i][j].forEach((item, index) => {
                                if (item == "1") {
                                    excel[i][j][index] = true;
                                } else if (item == "0") {
                                    excel[i][j][index] = false;
                                } else {
                                    window.alert(`文件${fileArray[indexe]}中第${i + 1}行${j + 1}列布尔值填写有问题，请填写1或0！`);
                                    checkreturn = true
                                }
                            })
                        } else {
                            let arr = [];
                            if (excel[i][j] == 1) {
                                arr.push(true);
                            } else if (excel[i][j] == 0) {
                                arr.push(false);
                            } else {
                                window.alert(`文件${fileArray[indexe]}中第${i + 1}行${j + 1}列布尔值填写有问题，请填写1或0！`);
                                checkreturn = true
                            }
                            excel[i][j] = arr;
                        }
                    }
                }
            }
            if (excel[0][j] == "BOOLEAN[][]") {
                for (let i = Sindex; i < excel.length; i++) {
                    if (!excel[i][j] && excel[i][j] != 0||excel[i][j] === "") {
                        excel[i][j] = null
                    } else {
                        excel[i][j] = excel[i][j].toString().split("\||");
                        excel[i][j].forEach((item, index) => {
                            excel[i][j][index] = item.split("\|");
                            excel[i][j][index].forEach((items, indexs) => {
                                if (items == "1") {
                                    excel[i][j][index][indexs] = true;
                                } else if (items == "0") {
                                    excel[i][j][index][indexs] = false;
                                } else {
                                    window.alert(`文件${fileArray[indexe]}中第${i + 1}行${j + 1}列布尔值填写有问题，请填写1或0！`);
                                    checkreturn = true
                                }
                            })
                        })
                    }
                }
            }
            if (excel[0][j] == "STRING") {
                for (let i = Sindex; i < excel.length; i++) {
                    if (!excel[i][j] && excel[i][j] != 0||excel[i][j] === "") {
                        excel[i][j] = null
                    } else {
                        excel[i][j] = excel[i][j].toString();
                    }
                }
            }
            if (excel[0][j] == "INT" || excel[0][j] == "FLOAT") {
                for (let i = Sindex; i < excel.length; i++) {
                    if (!excel[i][j] && excel[i][j] != 0 ||excel[i][j] === "") {
                        excel[i][j] = 0
                    }
                }
            }
            if (excel[0][j] == "INT[]" || excel[0][j] == "FLOAT[]") {
                for (let i = Sindex; i < excel.length; i++) {
                    if (!excel[i][j] && excel[i][j] != 0||excel[i][j] === "") {
                        excel[i][j] = null
                    } else {
                        if (!!excel[i][j].toString().match(/\|/g)) {
                            excel[i][j] = excel[i][j].split("\|")
                            excel[i][j].forEach((item, index) => {
                                excel[i][j][index] = Number(item);
                            })
                        } else {
                            let arr = [];
                            arr.push(Number(excel[i][j]));
                            excel[i][j] = arr;
                        }
                    }
                }
            }
            if (excel[0][j] == "STRING[]") {
                for (let i = Sindex; i < excel.length; i++) {
                    if (!excel[i][j]||excel[i][j] === "") {
                        excel[i][j] = null
                    } else {
                        if (!!excel[i][j].toString().match(/\|/g)) {
                            // excel[i][j] = excel[i][j].replace(/\|/g, ",");
                            excel[i][j] = "" + excel[i][j] + "";
                            excel[i][j] = excel[i][j].split("\|");
                        } else {
                            let arr = [];
                            arr.push(excel[i][j].toString());
                            excel[i][j] = arr;
                        }
                    }
                }
            }
            if (excel[0][j] == "VECTOR2[]" || excel[0][j] == "VECTOR3[]" || excel[0][j] == "VECTOR4[]") {
                for (let i = Sindex; i < excel.length; i++) {
                    if (!excel[i][j]||excel[i][j] === "") {
                        excel[i][j] = null
                    } else {
                        const tagNum = (excel[0][j])[6];
                        if (!!excel[i][j].toString().match(/\|/g)) {
                            excel[i][j] = excel[i][j].split("||");
                            for (let index = 0; index < excel[i][j].length; index++) {
                                excel[i][j][index] = excel[i][j][index].replace(/\|/g, ",");
                                excel[i][j][index] = tagNum + "$" + excel[i][j][index] + "$" + tagNum;
                            }
                        } else {
                            window.alert(`文件${fileArray[indexe]}中第${i + 1}行${j + 1}类型填写错误!`);
                            checkreturn = true
                        }
                    }
                }
            }
            if (excel[0][j] == "INT[][]" || excel[0][j] == "FLOAT[][]") {
                for (let i = Sindex; i < excel.length; i++) {
                    if (!excel[i][j]||excel[i][j] === "") {
                        excel[i][j] = null
                    } else {
                        excel[i][j] = excel[i][j].toString().split("\|\|");
                        excel[i][j].forEach((item, index) => {
                            excel[i][j][index] = item.toString().split("\|");
                            excel[i][j][index].forEach((items, indexs) => {
                                excel[i][j][index][indexs] = Number(items)
                            })
                        })
                    }
                }
            }
            if (excel[0][j] == "STRING[][]") {
                for (let i = Sindex; i < excel.length; i++) {
                    if (!excel[i][j]||excel[i][j] === "") {
                        excel[i][j] = null
                    } else {
                        // excel[i][j] = excel[i][j].toString().replace(/\|\|/g, ",");
                        excel[i][j] = excel[i][j].split("\|\|");
                        excel[i][j].forEach((item, index) => {
                            // excel[i][j][index] = item.replace(/\|/g, ",").split(",");
                            excel[i][j][index] = item.split("\|");
                        })
                    }
                }
            }
        }
    });
    //处理第四行空值
    excelArray.forEach((item, index) => {
        let len = item[0].length;
        item.forEach((items, indexs) => {
            if (indexs == 3) {
                for (let i = 0; i < len; i++) {
                    if (!items[i]) {
                        items[i] = ""
                    }
                }
            }
        })
    });

    fileArr = fileArray;
    checklist026(excelArray);
    if (isreturn) {
        isreturn = false;
        return
    }
    if (checkreturn) {
        checkreturn = false;
        return
    }

    console.log("开始修正所有表和类");
    /**修正所有表和类 */
    excelArray.forEach((excel, index) => {
        let tablecontent = [];
        for (let i = 1; i < excel.length; i++) {
            if (i != 2) {
                tablecontent.push(excel[i]);
            }
        }
        arrayContent.push(tablecontent);
        arrayinterface.push(createAllforOne2026(fileArray[index], objectArray[index], describeArray[index], methodArray[index]));
        arrayLanguage.push(createLanguageduo(excel, fileArray[index]));
        dataTypeArrayCache.push(creatTypeCache026(objectArray[index], fileArray[index], methodArray[index], cacheTableHeadTypeMap));
    })

    console.log("开始最终写文件步骤");

    fs.exists(outputDir, (isExists) => {
        if (!isExists) {
            window.alert("输出文件夹不存在！")
        }
    })
    /**创建configBase */
    creatConfigBase026();
    /**创建GameConfig */
    creatGameConfig026(allListArray);
    /**创建每个表文件 */
    creatTableFile026(fileArray, arrayContent, arrayinterface, arrayLanguage);
    /**创建表头类型缓存文件 */
    cacheTableType026(dataTypeArrayCache);
    content = "";
    window.alert("转换完成!感谢使用!")
}

/**创建configBase */
var creatConfigBase026 = function () {
    let content =
        `\n//元素的基类` +
        `\nexport interface IElementBase{` +
        `\n\tid:number;` +
        `\n}` +
        `\n//配置的基类` +
        "\nexport class ConfigBase<T extends IElementBase>{" +
        "\n\tprivate static readonly TAG_KEY:string = 'Key';//读取键(除了ID之外的别名，带key的字段必须是string类型)" +
        "\n\tprivate static readonly TAG_LANGUAGE:string = 'Language';//关联语言表的id或key(如果有这个tag，导表工具要把数据生成为string类型，因为会自动进行值的转换)" +
        "\n\tprivate static readonly TAG_MAINLANGUAGE:string = 'MainLanguage';//主语言tag" +
        "\n\tprivate static readonly TAG_CHILDLANGUAGE:string = 'ChildLanguage';//子语言tag" +
        "\n" +
        "\n\tprivate readonly ELEMENTARR:Array<T> = [];" +
        "\n\tprivate readonly ELEMENTMAP:Map<number, T> = new Map<number, T>();" +
        "\n\tprivate readonly KEYMAP:Map<number | string, number> = new Map();" +
        "\n\tprivate static languageIndex:number = 0" +
        "\n\tprivate static getLanguage:(key:string|number)=>string;" +
        "\n" +
        "\n\tpublic constructor(excelData:Array<Array<any>>){" +
        "\n\t\tlet headerLine:number = 2;//表头的行数" +
        "\n\t\tthis.ELEMENTARR = new Array(excelData.length - headerLine);" +
        "\n\t\t" +
        "\n\t\tfor(let i = 0; i < this.ELEMENTARR.length; i++){" +
        "\n\t\t\tthis.ELEMENTARR[i] = {} as T" +
        "\n\t\t}" +
        "\n\t\tlet column = excelData[0].length;//列数" +
        "\n\t\tfor(let j = 0; j < column; j++){//遍历各列" +
        "\n\t\t\tlet name:string = excelData[0][j];" +
        "\n\t\t\tlet tags:Array<string> = excelData[1][j].split('|');" +
        "\n\t\t\tif(tags.includes(ConfigBase.TAG_CHILDLANGUAGE)) continue;" +
        "\n\t\t\tlet jOffect:number = 0;//列偏移量" +
        "\n\t\t\tif(tags.includes(ConfigBase.TAG_MAINLANGUAGE)){" +
        "\n\t\t\t\tlet index = j + ConfigBase.languageIndex;" +
        "\n\t\t\t\tlet targetTags:Array<string> = excelData[1][index].split('|');" +
        "\n\t\t\t\tif(index < column && targetTags.includes(ConfigBase.TAG_CHILDLANGUAGE)){" +
        "\n\t\t\t\t\tjOffect = ConfigBase.languageIndex;" +
        "\n\t\t\t\t}" +
        "\n\t\t\t}" +
        "\n\t\t\tlet hasTag_Key:boolean = tags.includes(ConfigBase.TAG_KEY);" +
        "\n\t\t\tlet hasTag_Language:boolean = tags.includes(ConfigBase.TAG_LANGUAGE);" +
        "\n\t\t\tfor(let i = 0; i < this.ELEMENTARR.length; i++){" +
        "\n\t\t\t\tlet ele = this.ELEMENTARR[i];" +
        "\n\t\t\t\tlet value = excelData[i + headerLine][j + jOffect];" +
        "\n\t\t\t\tif(j == 0){//ID" +
        "\n\t\t\t\t\tthis.ELEMENTMAP.set(value, ele);" +
        "\n\t\t\t\t}else{" +
        "\n\t\t\t\t\tif(hasTag_Key){" +
        "\n\t\t\t\t\t\tthis.KEYMAP.set(value, excelData[i + headerLine][0]);" +
        "\n\t\t\t\t\t}" +
        "\n\t\t\t\t\tif(hasTag_Language){" +
        "\n\t\t\t\t\t\tif(ConfigBase.getLanguage != null){" +
        "\n\t\t\t\t\t\t\tvalue = ConfigBase.getLanguage(value);" +
        "\n\t\t\t\t\t\t}else{" +
        `\n\t\t\t\t\t\t\tvalue = "unknow"` +
        "\n\t\t\t\t\t\t}" +
        "\n\t\t\t\t\t}" +
        "\n\t\t\t\t}" +
        "\n\t\t\t\tele[name] = value;" +
        "\n\t\t\t}" +
        "\n\t\t}" +
        "\n\t}" +
        "\n\t//设置获取语言的方法" +
        "\n\tpublic static initLanguage(languageIndex:number, getLanguageFun:(key:string|number)=>string){" +
        "\n\t\tConfigBase.languageIndex = languageIndex;" +
        "\n\t\tConfigBase.getLanguage = getLanguageFun;" +
        "\n\t\tif(ConfigBase.languageIndex < 0){" +
        "\n\t\t\tConfigBase.languageIndex = ConfigBase.getSystemLanguageIndex();" +
        "\n\t\t}" +
        "\n\t}" +
        "\n\t//获取系统语言索引" +
        "\n\tprivate static getSystemLanguageIndex():number{" +
        "\n\t\tlet language = Util.LocaleUtil.getDefaultLocale().toString().toLowerCase();" +
        "\n\t\tif (!!language.match(\"en\")) {" +
        "\n\t\t\treturn 0;" +
        "\n\t\t}" +
        "\n\t\tif (!!language.match(\"zh\")) {" +
        "\n\t\t\treturn 1;" +
        "\n\t\t}" +
        "\n\t\tif (!!language.match(\"ja\")) {" +
        "\n\t\t\treturn 2;" +
        "\n\t\t}" +
        "\n\t\tif (!!language.match(\"de\")) {" +
        "\n\t\t\treturn 3;" +
        "\n\t\t}" +
        "\n\t\treturn 0;" +
        "\n\t}" +

        "\n\t/**" +
        "\n\t* 根据id获取一个元素" +
        "\n\t* @param id id|key" +
        "\n\t* @returns Element" +
        "\n\t*/" +
        "\n\tpublic getElement(id:number|string): T {" +
        "\n\t\tlet ele = this.ELEMENTMAP.get(Number(id)) || this.ELEMENTMAP.get(this.KEYMAP.get(id));" +
        "\n\t\tif(ele == null){" +
        "\n\t\t\tconsole.warn(this.constructor.name + \"配置表中找不到元素 id:\" + id);" +
        "\n\t\t}" +
        "\n\t\treturn ele;" +
        "\n\t}" +

        "\n\t/**" +
        "\n\t* 根据字段名和字段值查找一个元素" +
        "\n\t* @param fieldName 字段名" +
        "\n\t* @param fieldValue 字段值" +
        "\n\t* @returns 第一个找到的Element" +
        "\n\t*/" +
        "\n\tpublic findElement(fieldName:string, fieldValue:any): T{" +
        "\n\t\tfor(let i = 0; i < this.ELEMENTARR.length; i++){" +
        "\n\t\t\tif(this.ELEMENTARR[i][fieldName] == fieldValue){" +
        "\n\t\t\t\treturn this.ELEMENTARR[i];" +
        "\n\t\t\t}" +
        "\n\t\t}" +
        "\n\t}" +

        "\n\t/**" +
        "\n\t* 根据字段名和字段值查找一组元素" +
        "\n\t* @param fieldName 字段名" +
        "\n\t* @param fieldValue 字段值" +
        "\n\t* @returns 所有符合要求的Element" +
        "\n\t*/" +
        "\n\tpublic findElements(fieldName:string,fieldValue:any):Array<T>{" +
        "\n\t\tlet arr:Array<T> = [];" +
        "\n\t\tfor(let i = 0;i < this.ELEMENTARR.length;i++){" +
        "\n\t\t\tif(this.ELEMENTARR[i][fieldName] == fieldValue){" +
        "\n\t\t\t\tarr.push(this.ELEMENTARR[i]);" +
        "\n\t\t\t}" +
        "\n\t\t}" +
        "\n\t\treturn arr;" +
        "\n\t}" +

        "\n\t/**获取所有元素*/" +
        "\n\tpublic getAllElement():Array<T>{" +
        "\n\t\treturn this.ELEMENTARR;" +
        "\n\t}" +
        "\n}";
    fs.writeFileSync(`${outputDir}\\ConfigBase.ts`, content);
    console.log("ConfigBase.ts生成完毕");
}
/**创建GameConfig */
var creatGameConfig026 = function (allfilename) {
    let content = "";
    content += "import {ConfigBase, IElementBase} from \"./ConfigBase\";\n"
    allfilename.forEach((filename) => {
        content += `import {${filename}Config} from "./${filename}";\n`;
    })
    content += "\nexport class GameConfig{\n" +
        "\tprivate static configMap:Map<string, ConfigBase<IElementBase>> = new Map();" +
        "\n\t/**\n\t* 多语言设置\n\t* @param languageIndex 语言索引(-1为系统默认语言)\n\t* @param getLanguageFun 根据key获取语言内容的方法\n\t*/" +
        "\n\tpublic static initLanguage(languageIndex:number, getLanguageFun:(key:string|number)=>string){" +
        "\n\t\tConfigBase.initLanguage(languageIndex, getLanguageFun);" +
        "\n\t\tthis.configMap.clear();" +
        "\n\t}" +
        "\n\tpublic static getConfig<T extends ConfigBase<IElementBase>>(ConfigClass: { new(): T }): T {" +
        "\n\t\tif (!this.configMap.has(ConfigClass.name)) {" +
        "\n\t\t\tthis.configMap.set(ConfigClass.name, new ConfigClass());" +
        "\n\t\t}" +
        "\n\t\treturn this.configMap.get(ConfigClass.name) as T;" +
        "\n\t}";
    allfilename.forEach((filename) => {
        content += `\n\tpublic static get ${filename}():${filename}Config{ return this.getConfig(${filename}Config) };`
    })
    content += "\n}"
    fs.writeFileSync(`${outputDir}\\GameConfig.ts`, content);
    console.log("GameConfig.ts生成完毕");
}
/**创建每个表文件 */
var creatTableFile026 = function (filsArray, arrayData, interfaceData, arrayLanguage) {
    //处理 坐标数组
    let arraydata = [];
    arrayData.forEach((item, index) => {
        let str = JSON.stringify(item);
        let req2q = /"2\$/g
        let req3q = /"3\$/g
        let req4q = /"4\$/g
        let req2h = /\$2"/g
        let req3h = /\$3"/g
        let req4h = /\$4"/g
        str = str.replace(req2q, "new Type.Vector2(");
        str = str.replace(req3q, "new Type.Vector(");
        str = str.replace(req4q, "new Type.Vector4(");
        str = str.replace(req2h, ")");
        str = str.replace(req3h, ")");
        str = str.replace(req4h, ")");
        // let datass = `const ${filsArray[index].replace(xlsxStr,"")}Table:Array<Array<any>> = ${str};`
        arraydata.push(str);
    })

    arrayData.forEach((item, index) => {
        let content = "";
        content += `import { ConfigBase, IElementBase } from "./ConfigBase";`
        content += `\nconst EXCELDATA:Array<Array<any>> = ${arraydata[index]};\n`
        content += interfaceData[index];
        content += `\nexport class ${filsArray[index].replace(xlsxStr, "")}Config extends ConfigBase<I${filsArray[index].replace(xlsxStr, "")}Element>{\n`;
        content += `\tconstructor(){\n\t\tsuper(EXCELDATA);\n\t}\n`;
        content += arrayLanguage[index];
        content += `\n}`
        fs.writeFileSync(`${outputDir}\\${filsArray[index].replace(xlsxStr, "")}.ts`, content);
        console.warn(`${filsArray[index].replace(xlsxStr, "")}.ts生成完毕`);
    })
}

var cacheTableType026 = function (ArrayCache) {
    fs.writeFileSync(`${outputDir}\\ConfigCache.json`, JSON.stringify(ArrayCache));
    console.warn(`CacheConfig.json生成完毕`);
}

/**创建interface数组 */
var createAllforOne2026 = function (filename, objectArray, describeArray, methodArray) {
    var temp = `export interface I${filename.replace(xlsxStr, "")}Element extends IElementBase{\n //ElementAttribute } `
    var method = "";
    objectArray = objectArray.split(',');
    describeArray = describeArray.split(',');
    methodArray = methodArray.split(',');
    objectArray.forEach((item, index) => {
        if (!!item) {
            method += `\t/**${describeArray[index]}*/\n\t${item.replace(/"/g, "")}:${methodArray[index]}\n`
        }
    });
    temp = temp.replace("//ElementAttribute", `${method}`);
    return temp;
}

/**创建表头类型数组 */
var creatTypeCache026 = function (objectArray, filename, methodArray, cacheMap) {
    console.log(`====== creatTypeCache`);
    // cacheMap.forEach((data,index)=>{
    //     console.log(`cacheMap ==== ${data}`);
    // })
    var cacheArray = [];
    var names = [];
    var table = filename.replace(xlsxStr, "");
    methodArray = methodArray.split(',');
    objectArray = objectArray.split(',');
    cacheArray.push(table); //表名
    objectArray.forEach((item, index) => {
        if (!!item) {
            let name = item.replace(/"/g, "");
            names.push(name);
            if (cacheMap.get(table + name) && cacheMap.get(table + name) != methodArray[index]) {
                // window.alert(`注意！表${table}的${name}列类型有变化,从${cacheMap.get(table + name)}类型变为了${methodArray[index]}类型`);
                console.warn(`注意！表${table}的${name}列类型有变化,从${cacheMap.get(table + name)}类型变为了${methodArray[index]}类型`);
            }
        }
    });
    cacheArray.push(names); //列名
    cacheArray.push(methodArray); //列类型
    return cacheArray;
}

/**检查数据类型是否正确 */
var checklist026 = function (excelArray) {
    console.log(`====== checklist`);
    excelArray.forEach((excel, index) => {
        if (excel.length < 4) { return }
        for (i = 0; i < excel[0].length; i++) {
            switch (excel[0][i]) {
                case "INT": check026("int", i, excel, index);
                    break;
                case "STRING": check026("string", i, excel, index);
                    break;
                case "FLOAT": check026("float", i, excel, index);
            }
        }
        let map = new Map();
        for (let i = 4; i < excel.length; i++) {
            if (map.has(excel[i][0])) {
                window.alert(`表${fileArr[index]}的第${1}列数据${excel[i][0]}重复`);
                isreturn = true;
                return;
            } else {
                map.set(excel[i][0], 1);
            }
        }
        map.clear();

        let xiabiao = null;
        for (let i = 0; i < excel[3].length; i++) {
            if (excel[3][i].toString().match(`Key`)) {
                xiabiao = i;
            }
        }
        if (xiabiao != null) {
            for (let i = 4; i < excel.length; i++) {
                if (map.has(excel[i][xiabiao])) {
                    window.alert(`表${fileArr[index]}的第${xiabiao + 1}列数据${excel[i][xiabiao]}重复`);
                    isreturn = true;
                    return;
                } else {
                    map.set(excel[i][xiabiao], 1);
                }
            }
        }
        map.clear();
    })
}

var check026 = function (method, index, excel, indexs) {
    if (method == "int") {
        for (j = 4; j < excel.length; j++) {
            if ((typeof excel[j][index]) == "number" || excel[j][index] == null) {
                if (excel[j][index] % 1 != 0 && excel[j][index] != null) {
                    console.log(typeof excel[j][index]);
                    console.log(indexs, j, index);
                    window.alert(`文件：${fileArr[indexs]}第${j + 1}行第${index + 1}列数据格式不匹配！请修改后再转换`);
                    isreturn = true;
                    return;
                }
            } else {
                console.log(indexs, j, index);
                console.log(typeof excel[j][index]);
                window.alert(`文件：${fileArr[indexs]}第${j + 1}行第${index + 1}列数据格式不匹配！请修改后再转换`)
                isreturn = true;
                return;
            }
        }
    }
    if (method == "string") {
        for (j = 4; j < excel.length; j++) {
            if ((typeof excel[j][index]) != "string" && excel[j][index] != null) {
                window.alert(`文件：${fileArr[indexs]}第${j + 1}行第${index + 1}列数据格式不匹配！请修改后再转换`)
                isreturn = true;
                return;
            }
        }
    }
    if(method == "float"){
        for (j = 4; j < excel.length; j++) {
            if ((typeof excel[j][index]) != "number" && excel[j][index] != null) {
                window.alert(`文件：${fileArr[indexs]}第${j + 1}行第${index + 1}列数据格式不匹配！请修改后再转换`)
                isreturn = true;
                return;
            }
        }
    }
    return true;
}

console.log("这里注册一下btnnn-changeMuch");