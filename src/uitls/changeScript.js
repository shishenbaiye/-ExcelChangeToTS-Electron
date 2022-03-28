const nodeXlsx = require('node-xlsx');
const ipc = require('electron').ipcRenderer;
const fs = require('fs');
const path = require('path');
/**导入路径 */
var inputDir = "";
/**导出路径 */
var outputDir = "";

var that = this;
 
var btn = function(){
    ClickChoose();
    console.log(`生成多个文件`);
    var excelArray = [];
    var ArrayJSON = [];
    /**文件名数组 */
    let filsArray = fs.readdirSync(inputDir);
    /**属性数组 */
    let objectArray = [];
    /**类型数组 */
    let methodArray = [];
    /**属性描述 */
    let describeArray = [];
    let iisreturn = false
    // 回调的方法，但是这种方法会出现回调坑，Sync只能同步返回的内容，但是回调并不会
    // fs.readdirSync("D:\\java\\Frontend\\Electron\\ng\\myapp\\electron\\excel",(err,files)=>{
    //     if (err) 
    //     console.log(err); 
    //     else{
    //         files.forEach(file => {  
    //             console.log(typeof nodeXlsx.parse(`D:\\java\\Frontend\\Electron\\ng\\myapp\\electron\\excel\\${file}`)[0].data); 
    //             excelArray.push(nodeXlsx.parse(`D:\\java\\Frontend\\Electron\\ng\\myapp\\electron\\excel\\${file}`)[0].data);
    //         }) 
    //     }
    // });
    /**遍历Excel数组 */
    filsArray.forEach((file,index)=>{
        if(file.match('.xlsx') || file.match('.xls')){
            if(file.match("~")){  
                console.log(file +" is a temporary file");  
                filsArray[index] = null; 
            }else{
                excelArray.push(nodeXlsx.parse(`${inputDir}\\${file}`)[0].data)    
            }
        }else{
            console.log(file+" is not a Excel file!");
        }
    })
    console.log(`asdasda${filsArray}`);
    excelArray.forEach((excel,index)=>{
        if(excel[1][0] == "ID"){
            window.alert(`多文件请用老版模板，新版模板的多文件导出敬请期待！`);
            iisreturn = true
        }
    })
    if(iisreturn){
        return
    }
    excelArray.forEach((obj,index)=>{
        let object = "";
        let method = "";
        let describe = "";
        for(let i = 0;i<obj[0].length;i++){
            if(i == obj[0].length - 1){
                object += `"${obj[0][i]}"`
                method += `${obj[1][i]}`
                describe += `${obj[2][i]}`
            }else{
                object += `"${obj[0][i]}",`
                method += `${obj[1][i]},`
                describe += `${obj[2][i]},`
            }
        }
        objectArray.push(object);
        methodArray.push(method);
        describeArray.push(describe);
    })
    /**拼接json */
    excelArray.forEach((excel,index)=>{
        var json = "";
        for (let i = 3;i<excel.length;i++){
           
            json += "{";
            for(let j = 0; j<excel[0].length;j++){
                if(excel[i][j] == null)
                        if(excel[i][0] == null){
                            continue;
                        }else{
                            excel[i][j] = null;
                        }  
                if(j == excel[0].length-1){
                    if(excel[1][j] == "string")
                        json += `\"${excel[0][j]}\":\"${excel[i][j]}\"`;
                    else
                        json += `\"${excel[0][j]}\":${excel[i][j]}`;
                }else{
                    if(excel[1][j] == "string")
                        json += `\"${excel[0][j]}\":\"${excel[i][j]}\",`;
                    else
                        json += `\"${excel[0][j]}\":${excel[i][j]},`;
                }
            }
            if(i == excel.length - 1){
                json += "}";
            }else{
                json += "},";
            }
            
        }
        // json += "]"; 
        ArrayJSON.push(json);
    });
    filsArray.forEach((fileName,index)=> {
        if(fileName != null){
            if(fileName.match(`.xlsx`)){
                // ts内容处理
                try{
                    console.log(`${fileName}`);
                    let content = that.CreateFileContent(ArrayJSON[index],fileName.replace(".xlsx",""),objectArray[index],describeArray[index],methodArray[index]);
                    fs.writeFileSync(`${outputDir}\\${fileName.replace(".xlsx",".ts")}`,content);
                    content = null;
                }catch{

                }
            }else{
                fs.writeFileSync(`${outputDir}\\${fileName.replace(".xls",".ts")}`,`const ${fileName.replace(".xlsx","")}Json = ${ArrayJSON[index]}`);
            } 
        }    
    });
    window.alert("转换完成!感谢使用!")
}
/**
 * 模板内容处理
 * @param {JSON数组} json 
 * @param {文件名} filename 
 * @param {属性对象数组} objectArray 
 * @param {属性描述数组} describeArray 
 * @param {属性类型数组} methodArray
 * @returns content
 */
var CreateFileContent = function(json,filename,objectArray,describeArray,methodArray){
    var temp = "const ElementArr:Array<$ExcelName$Element> =[ //JsonDataMap];\nconst ElementMap:Map<number, $ExcelName$Element>  = new Map<number, $ExcelName$Element>();\nElementArr.forEach(item =>{ElementMap.set(item.ID,item)})\n\nexport interface $ExcelName$Element {\n//ElementAttribute\n}\nexport class $ExcelName$ {\n\t/**根据id获取一个元素*/\n\tpublic static GetDataById(id: number): $ExcelName$Element {\n\t\treturn ElementMap.get(id);\n\t}\n\t/**根据key,value查找一个元素*/\n\tpublic static FindElement(key:string, value:any): $ExcelName$Element{\n\t\tlet id: number;\n\t\tElementMap.forEach(element => {\n\t\t\tif(element[key] == value){\n\t\t\t\tid = element[\"ID\"];\n\t\t\t}\n\t\t});\n\t\treturn ElementMap.get(id);\n\t}\n\t/**获取所有元素*/\n\tpublic static GetAllElement():Array<$ExcelName$Element>{\n\t\tif(ElementArr == null){\n\t\t\tElementMap.forEach(element => {\n\t\t\t\tElementArr.push(element);\n\t\t\t});\n\t\t}\n\t\treturn ElementArr;\n\t}\n}"
    var method = "";
    objectArray = objectArray.split(',');
    describeArray = describeArray.split(',');
    methodArray = methodArray.split(',');
    objectArray.forEach((item,index)=>{
        method += `/**${describeArray[index]}*/\n${item.replace(/"/g,"")}:${methodArray[index]}\n`
    })
    

    let req = /\$ExcelName\$/g;
    temp = temp.replace("//JsonDataMap",`${json}`);
    temp = temp.replace("//ElementAttribute",`${method}`);
    temp = temp.replace(req,`${filename}`);
    return temp;
}

/**读取配置文件 */
var ClickChoose = function(){
    try {
        let Path =  path.join(__dirname, '../../../../');
        let content = JSON.parse(fs.readFileSync(`${Path}Config\\Config.json`,'utf8', (err)=>{
            if(err){
                console.log(`出错了`);
                window.alert(err);
            }
        }));
        inputDir = content['inputDir'];
        outputDir = content['outputDir'];
    } catch (error) {
        window.alert(`请先按要求修改配置文件后再转换!`)
    } 
}
/**创建配置文件 */
var clickCreateConfig = function(){
    try {
        var content = "\n这是一个示例，请修改成对应的目录,修改完后删除所有文字内容。\n\n注意！\"\\\" 一定要用双斜杠!\n\n{\n\t\"inputDir\":\"C:\\\\Users\\\\Admin\\\\Desktop\\\\ConfigTable\",\n\t\"outputDir\":\"C:\\\\Users\\\\Admin\\\\Desktop\\\\ts\"\n}"
        let Path =  path.join(__dirname, '../../../../');
        fs.mkdirSync(`${Path}Config`);
        fs.writeFileSync(`${Path}Config\\Config.json`,content);
        window.alert(`配置文件创建成功!\n位置在${Path}Config\n请修改配置文件后再转换！`)
        return `${Path}Config`
    } catch (error) {
        let Path =  path.join(__dirname, '../../../../');
        return `${Path}Config`
    }
}

var Opendir = function(dir){
    require('child_process').exec(`start "" "${dir}"`);
}


var Close = function(){
    ipc.send("close-win");
}

var Taskbar = function(){
    ipc.send("hide-win");
}

var createList = function(){
    console.log(`开始创建列表`);
    try {
        let content = "[]";
        let Path =  path.join(__dirname, '../../../../');
        fs.writeFileSync(`${Path}Config\\tableList.json`,content);
    } catch (error) { 

    }
}





