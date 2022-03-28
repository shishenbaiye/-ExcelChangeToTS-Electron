const xlsxFile = require('node-xlsx');
var fileArr = [];
var isreturn = false;
var btnn = function(){
    ClickChoose();
    /**数组内容拼接数组 */
    var AllExcelArray = [];
    var excelArray = [];
    /**数组内容 */
    var ArrayContent = [];
    var Arrayinterface = [];
    /**文件名数组 */
    var filsArray = fs.readdirSync(inputDir);
    /**属性数组 */
    let objectArray = [];
    /**类型数组 */
    let methodArray = [];
    /**属性描述 */
    let describeArray = [];
    let ArrayLanguage = [];
    /**检查判断 */
    let checkreturn = false;
    /**下标 */
    let Sindex = 4;
    /**遍历Excel数组 */
    filsArray.forEach((file,index)=>{
        if(file.match('.xlsx') || file.match('.xls')){
            if(file.match("~")){  
                console.log(file +" is a temporary file");  
                filsArray[index] = null; 
            }else{
                excelArray.push(xlsxFile.parse(`${inputDir}\\${file}`)[0].data)    
            }
        }else{
            window.alert('请将输入目录中不是excel文件移除！')
            isreturn = true;
        }
    })
    // console.log(excelArray[0]);
    // return
    /**文件名处理 */
    filsArray.forEach((filename,index)=>{
        let name = filename.replace(".xlsx","");
        if(name.match("_")){
            filsArray[index] = name.split("_")[0]+".xlsx"
        }else{
            filsArray[index] = name+".xlsx"
        }
    })
    /**重名检测 */
    let map = new Map()
    filsArray.forEach((item,index)=>{
            if(map.has(item)){
                let name = item.replace(".xlsx","")
                window.alert(`文件名字${name}重复！`)
                isreturn = true
            }else{
                map.set(item);
            }           
    })
    if(isreturn){
        isreturn = false;
        return
    }
    /**清除空行 */
    excelArray.forEach((obj,index)=>{
        let NewArray = [];
        obj.forEach((item,index1)=>{
            if(index1< 4){
                NewArray.push(item)
            }
            if(index1 >= 4){
                if(index1 == 4){
                    Sindex = 4;
                }
                if(item[0]){
                    NewArray.push(item)
                }else{  
                    
                }
            }
        })
        excelArray[index] = NewArray;
    })
    excelArray.forEach((obj,index)=>{
        for(let i = 0;i<obj[0].length;i++){
            if(!obj[0][i]){
                for(let j = 0;j<obj.length;j++){
                    delete excelArray[index][j][i]
                    let arr = [];
                    for(let k = 0;k<excelArray[index][0].length;k++){
                        arr.push(excelArray[index][j][k]);
                    }
                    excelArray[index][j] = arr;
                }
            }
        }
    })
  
    
    if(isreturn){
        isreturn = false;
        return
    }
   
    // console.log(excelArray[0]);
    // return
    //属性类型描述数组
    excelArray.forEach((obj,index)=>{
        let object = "";
        let method = "";
        let describe = "";
        for(let i = 0;i<obj[0].length;i++){
            if(i == obj[0].length - 1){
                obj[0][i] = obj[0][i].toUpperCase()
                if(obj[3][i] == `Language`){
                    obj[0][i] = `STRING`  
                }
                switch(obj[0][i]){
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
                    default:
                        window.alert(`文件：${filsArray[index]}第1行第${i+1}列变量类型填写有误，请检查后再转换！`)
                        checkreturn = true
                }
                if(obj[3][i] != `ChildLanguage`){
                    object += `"${obj[1][i]}"`
                    describe += `${obj[2][i]}`
                }
             
            }else{
                obj[0][i] = obj[0][i].toUpperCase();
                if(obj[3][i] == `Language`){
                    obj[0][i] = `STRING` 
                } 
                switch(obj[0][i]){
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
                    default:
                        window.alert(`文件：${filsArray[index]}第1行第${i+1}列变量类型填写有误，请检查后再转换！`);
                        checkreturn = true
                }
                if(obj[3][i] != `ChildLanguage`){
                    object += `"${obj[1][i]}",`
                    describe += `${obj[2][i]},`
                }      
            }
        }
        objectArray.push(object);
        methodArray.push(method);
        describeArray.push(describe);
    })
    if(checkreturn){
        checkreturn = false;
        return
    }
  /**修改原数组 */
  excelArray.forEach((excel,indexe)=>{
    for(let j = 0; j<excel[0].length;j++){
        if(excel[0][j] == "VECTOR2"){
            for(let i = Sindex;i<excel.length;i++){
                if(!excel[i][j]){
                    excel[i][j] = ""
                }else{
                    excel[i][j] = excel[i][j].replace(/\|/g,",");
                    excel[i][j] = "2$"+excel[i][j]+"$2";
                }  
            }
        }
        if(excel[0][j] == "VECTOR3"){
            for(let i = Sindex;i<excel.length;i++){
                if(!excel[i][j]){
                    excel[i][j] = ""
                }else{
                    excel[i][j] = excel[i][j].replace(/\|/g,",");
                    excel[i][j] = "3$"+excel[i][j]+"$3";
                }
            }
        }
        if(excel[0][j] == "VECTOR4"){
            for(let i = Sindex;i<excel.length;i++){
                if(!excel[i][j]){
                    excel[i][j] = ""
                }else{
                    excel[i][j] = excel[i][j].replace(/\|/g,",");
                    excel[i][j] = "4$"+excel[i][j]+"$4";
                }
            }
        }
        if(excel[0][j] == "BOOLEAN"){
            for(let i = Sindex;i<excel.length;i++){
                if(!excel[i][j] && excel[i][j] != 0){
                    excel[i][j] = 0
                }else{
                    if(excel[i][j] == 1){
                        excel[i][j] = true;
                    }else if(excel[i][j] == 0){
                        excel[i][j] = false;
                    }else{
                        window.alert(`文件${filsArray[indexe]}中第${i+1}行${j+1}列布尔值填写有问题，请填写1或0！`);
                        checkreturn = true
                    }
                }
            }
        }
        if(excel[0][j] == "BOOLEAN[]"){
            for(let i = Sindex;i<excel.length;i++){
                if(!excel[i][j] && excel[i][j] != 0){
                    excel[i][j] = ""
                }else{
                    if(!!excel[i][j].toString().match(/\|/g)){
                        excel[i][j] = excel[i][j].split("\|");
                        excel[i][j].forEach((item,index)=>{
                            if(item == "1"){
                                excel[i][j][index] = true;
                            }else if(item == "0"){
                                excel[i][j][index] = false;
                            }else{
                                window.alert(`文件${filsArray[indexe]}中第${i+1}行${j+1}列布尔值填写有问题，请填写1或0！`);
                                checkreturn = true
                            }
                        })
                    }else{
                        let arr = [];
                        if(excel[i][j] == 1){
                            arr.push(true);
                        }else if(excel[i][j] == 0){
                            arr.push(false);
                        }else{
                            window.alert(`文件${filsArray[indexe]}中第${i+1}行${j+1}列布尔值填写有问题，请填写1或0！`);
                            checkreturn = true
                        }
                        excel[i][j] = arr;
                    }
                }
            }
        }
        if(excel[0][j] == "BOOLEAN[][]"){
            for(let i = Sindex;i<excel.length;i++){
                if(!excel[i][j] && excel[i][j] != 0){
                    excel[i][j] = ""
                }else{
                    excel[i][j] = excel[i][j].split("\||");
                    excel[i][j].forEach((item,index)=>{
                        excel[i][j][index] = item.split("\|");
                        excel[i][j][index].forEach((items,indexs)=>{
                            if(items == "1"){
                                excel[i][j][index][indexs] = true;
                            }else if(items == "0"){
                                excel[i][j][index][indexs] = false;
                            }else{
                                window.alert(`文件${filsArray[indexe]}中第${i+1}行${j+1}列布尔值填写有问题，请填写1或0！`);
                                checkreturn = true;
                            }
                        })
                    })
                }
            }
        }
        if(excel[0][j] == "STRING"){
            for(let i = Sindex;i<excel.length;i++){
                if(!excel[i][j] && excel[i][j] != 0){
                    excel[i][j] = "";
                }else{
                    excel[i][j] = excel[i][j].toString();
                }
            }
        }
        if(excel[0][j] == "INT" || excel[0][j] == "FLOAT"){
            for(let i = Sindex;i<excel.length;i++){
                if(!excel[i][j] && excel[i][j] != 0){
                    excel[i][j] = 0;
                }
            } 
        }
        if(excel[0][j] == "INT[]" || excel[0][j] == "FLOAT[]"){
            for(let i = Sindex;i<excel.length;i++){
                if(!excel[i][j] && excel[i][j] != 0){
                    excel[i][j] = "";
                }else{
                    if(!!excel[i][j].toString().match(/\|/g)){
                        excel[i][j] = excel[i][j].split("\|")
                        excel[i][j].forEach((item,index)=>{
                            excel[i][j][index] = Number(item);
                        })
                    }else{
                        let arr = [];
                        arr.push(Number(excel[i][j]));
                        excel[i][j] = arr;
                    }
                }
            }
        }
        if(excel[0][j] == "STRING[]"){
            for(let i = Sindex;i<excel.length;i++){
                if(!excel[i][j]){
                    excel[i][j] = ""
                }else{
                    if(!!excel[i][j].toString().match(/\|/g)){
                        excel[i][j] = excel[i][j].replace(/\|/g,",");
                        excel[i][j] = ""+excel[i][j]+"";
                        excel[i][j] = excel[i][j].split(",")
                    }else{
                        let arr = [];
                        arr.push(excel[i][j].toString());
                        excel[i][j] = arr;
                    }
                }
            }
        }
        if(excel[0][j] == "INT[][]" || excel[0][j] == "FLOAT[][]"){
            for(let i = Sindex;i<excel.length;i++){
                if(!excel[i][j]){
                    excel[i][j] = ""
                }else{
                    excel[i][j] = excel[i][j].split("\|\|");
                    excel[i][j].forEach((item,index)=>{
                        excel[i][j][index] = item.split("\|");
                        excel[i][j][index].forEach((items,indexs)=>{
                            excel[i][j][index][indexs] = Number(items)
                        })
                    })
                }
            }
        }
        if(excel[0][j] == "STRING[][]"){
            for(let i = Sindex;i<excel.length;i++){
                if(!excel[i][j]){
                    excel[i][j] = ""
                }else{
                    excel[i][j] = excel[i][j].replace(/\|\|/g,",");
                    excel[i][j] = excel[i][j].split(",");
                    excel[i][j].forEach((item,index)=>{
                        excel[i][j][index] = item.replace(/\|/g,",").split(",");
                    })
                }
            }
        }
    }   
});
    //处理第四行空值
    excelArray.forEach((item,index)=>{
        let len = item[0].length;
        item.forEach((items,indexs)=>{ 
            if(indexs == 3){
                for(let i = 0;i<len;i++){
                    if(!items[i]){
                        items[i] = ""
                    }
                }
            }
        })
    });

    fileArr = filsArray;
    checklist(excelArray);
    if(isreturn){
        isreturn = false;
        return
    }
    if(checkreturn){
        checkreturn = false;
        return
    }
    /**创建所有表的数组 */
    excelArray.forEach((excel,index)=>{
        let tablecontent = [];
        for(let i = 1;i<excel.length;i++){
            if(i != 2){
                tablecontent.push(excel[i]);
            }
        }
        ArrayContent.push(tablecontent);
        Arrayinterface.push(CreateAllforOne(filsArray[index],objectArray[index],describeArray[index],methodArray[index]));
        ArrayLanguage.push(createLanguage(excel,filsArray[index]));
    })
    let content = CreateFinal(filsArray,ArrayContent,Arrayinterface,ArrayLanguage);
    fs.writeFileSync(`${outputDir}\\GameConfig.ts`,content);

    content = "";
    window.alert("转换完成!感谢使用!")
}






/**创建interface数组 */
var CreateAllforOne = function(filename,objectArray,describeArray,methodArray){
    var temp = `export interface ${filename.replace(".xlsx","")}Element extends ElementBase{\n //ElementAttribute } ` 
    var method = "";
    objectArray = objectArray.split(',');
    describeArray = describeArray.split(',');
    methodArray = methodArray.split(',');
    objectArray.forEach((item,index)=>{
        if(!!item){
            method += `\t/**${describeArray[index]}*/\n\t${item.replace(/"/g,"")}:${methodArray[index]}\n`
        }  
    })
    temp = temp.replace("//ElementAttribute",`${method}`);
    return temp;
}

/**创建最终文件 */
var CreateFinal = function(filsArray,arrayData,interfaceData,arrayLanguage){
    let content = "";
    //处理 export
    let publicContent = "export class GameConfig{\n"+
    "\tprivate static ConfigMap:Map<string, Config<ElementBase>> = new Map();"+
    "\n\tprivate static LanguageIndex:number = 0;//语言索引"+
    "\n\tpublic static GetLanguage:(key:string|number)=>string;"+
    "\n\tpublic static InitLanguage(LanguageIndex:number, GetLanguage:(key:string|number)=>string){"+
    "\n\t\tthis.LanguageIndex = LanguageIndex;"+
    "\n\t\tthis.GetLanguage = GetLanguage;"+
    "\n\t}"+
    "\n\tprivate static GetConfig<T extends Config<ElementBase>>(c:{new(excelData:Array<Array<any>>, languageIndex:number):T}):T{"+
    "\n\t\treturn this.ConfigMap.get(c.name) as T;"+
    "\n\t}"+
    "\n\tprivate static RegisterConfig<T extends Config<ElementBase>>(config:T){"+
    "\n\t\tthis.ConfigMap.set(config.constructor.name, config);"+   
    "\n\t\treturn config;"+
    "\n\t}"
    
    filsArray.forEach((fname,index)=>{
        let name = fname.replace(".xlsx","");
        publicContent += `\n\tpublic static get ${name}():${name}Config{ return this.GetConfig(${name}Config) || this.RegisterConfig(new ${name}Config(${name}Table, this.LanguageIndex)); }`
    })
    publicContent += "\n}"

    //处理 arrayData
    let arraydata = "";
    arrayData.forEach((item,index)=>{
        let str = JSON.stringify(item);
        let req2q = /"2\$/g
        let req3q = /"3\$/g
        let req4q = /"4\$/g
        let req2h = /\$2"/g
        let req3h = /\$3"/g
        let req4h = /\$4"/g
        str = str.replace(req2q,"new Type.Vector2(");
        str = str.replace(req3q,"new Type.Vector(");
        str = str.replace(req4q,"new Type.Vector4(");
        str = str.replace(req2h,")");
        str = str.replace(req3h,")");
        str = str.replace(req4h,")");
        let datass = `const ${filsArray[index].replace(".xlsx","")}Table:Array<Array<any>> = ${str};`
        arraydata += datass +"\n"
    })
    //处理 interface
    let interfaceContent = ""
    interfaceData.forEach((item,index)=>{
        interfaceContent += item+"\n"
    })
    // 处理接口
    let baseinterface = "interface ElementBase{\n\tID:number\n}\n"
    //处理 固定内容
    let initContent = 
    "\nclass Config<T extends ElementBase>{"+
    "\n\tprivate static readonly Tag_Key:string = 'Key';//读取键(除了ID之外的别名，带key的字段必须是string类型)"+
    "\n\tprivate static readonly Tag_Language:string = 'Language';//关联语言表的id或key(如果有这个tag，导表工具要把数据生成为string类型，因为会自动进行值的转换)"+
    "\n\tprivate static readonly Tag_MainLanguage:string = 'MainLanguage';//主语言tag"+
    "\n\tprivate static readonly Tag_ChildLanguage:string = 'ChildLanguage';//子语言tag"+
    "\n"+
    "\n\tprivate readonly ElementArr:Array<T> = [];"+
    "\n\tprivate readonly ElementMap:Map<number, T>  = new Map<number, T>();"+
    "\n\tprivate readonly KeyMap:Map<string, number> = new Map();"+
    "\n"+
    "\n\tpublic constructor(excelData:Array<Array<any>>, languageIndex:number){"+
    "\n\t\tlet headerLine:number = 2;//表头的行数"+
    "\n\t\tthis.ElementArr = new Array(excelData.length - headerLine);"+
    "\n\t\t"+
    "\n\t\tfor(let i = 0; i < this.ElementArr.length; i++){"+
    "\n\t\t\tthis.ElementArr[i] = {} as T"+
    "\n\t\t}"+  
    "\n\t\tlet column = excelData[0].length;//列数" +
    "\n\t\tfor(let j = 0; j < column; j++){//遍历各列"+
    "\n\t\t\tlet name:string = excelData[0][j];"+
    "\n\t\t\tlet tags:Array<string> = excelData[1][j].split('|');"+
    "\n\t\t\tif(tags.includes(Config.Tag_ChildLanguage)) continue;"+
    "\n\t\t\tlet jOffect:number = 0;//列偏移量"+
    "\n\t\t\tif(tags.includes(Config.Tag_MainLanguage)){"+
    "\n\t\t\t\tlet index = j + languageIndex;"+
    "\n\t\t\t\tlet targetTags:Array<string> = excelData[1][index].split('|');"+
    "\n\t\t\t\tif(index < column && targetTags.includes(Config.Tag_ChildLanguage)){"+
    "\n\t\t\t\t\tjOffect = languageIndex;"+
    "\n\t\t\t\t}"+
    "\n\t\t\t}"+
    "\n\t\t\tlet hasTag_Key:boolean = tags.includes(Config.Tag_Key);"+
    "\n\t\t\tlet hasTag_Language:boolean = tags.includes(Config.Tag_Language);"+
    "\n\t\t\tfor(let i = 0; i < this.ElementArr.length; i++){"+
    "\n\t\t\t\tlet ele = this.ElementArr[i];"+
    "\n\t\t\t\tlet value = excelData[i + headerLine][j + jOffect];"+
    "\n\t\t\t\tif(j == 0){//ID"+
    "\n\t\t\t\t\tthis.ElementMap.set(value, ele);"+
    "\n\t\t\t\t}else{"+
    "\n\t\t\t\t\tif(hasTag_Key){"+
    "\n\t\t\t\t\t\tthis.KeyMap.set(value, excelData[i + headerLine][0]);"+
    "\n\t\t\t\t\t}"+
    "\n\t\t\t\t\tif(hasTag_Language){"+
    "\n\t\t\t\t\t\tvalue = GameConfig.GetLanguage(value);"+
    "\n\t\t\t\t\t}"+
    "\n\t\t\t\t}"+
    "\n\t\t\t\tele[name] = value;"+
    "\n\t\t\t}"+
    "\n\t\t}"+
    "\n\t}"+

    "\n\t/**根据id获取一个元素*/"+
    "\n\tpublic GetElement(id:number|string): T {"+
    "\n\t\tlet ele = this.ElementMap.get(Number(id)) || this.ElementMap.get(this.KeyMap.get(String(id)));"+
    "\n\t\tif(ele == null){"+
    "\n\t\t\tconsole.error(\"配置表中找不到元素 id:\" + id);"+
    "\n\t\t}"+
    "\n\t\treturn ele;"+
    "\n\t}"+

    "\n\t/**根据key,value查找一个元素*/"+
    "\n\tpublic FindElement(key:string, value:any): T{"+
    "\n\t\tfor(let i = 0; i < this.ElementArr.length; i++){"+
    "\n\t\t\tif(this.ElementArr[i][key] == value){"+
    "\n\t\t\t\treturn this.ElementArr[i];"+
    "\n\t\t\t}"+
    "\n\t\t}"+
    "\n\t}"+

    "\n\t/**获取所有元素*/"+
    "\n\tpublic GetAllElement():Array<T>{"+
    "\n\t\treturn this.ElementArr;"+
    "\n\t}"+
    "\n}"

    // 表内容快速查找类
    let arrayKeyValue = ""
    arrayLanguage.forEach((item)=>{
        if(!!item){
            arrayKeyValue += item;
        }
    })
    
    // 总内容
    content = arraydata + baseinterface + interfaceContent  + initContent +"\n" +arrayKeyValue +"\n"+publicContent;
    return content;
}

//创建语言表便捷查询方法
var createLanguage = function(excel,filename){
    console.log(excel);
    let is = excel[3];
    let index = null;
    if(!!is){
        is.forEach((item,indexs)=>{
            if(item.toString().match("ReadByName")){
                index = indexs;
            }
        })
    
        if(index != null){
            let content = `class ${filename.replace(".xlsx","")}Config extends Config<${filename.replace(".xlsx","")}Element>{\n`
            for(let i = 4;i<excel.length;i++){
                content += `\tget ${excel[i][index]}():${filename.replace(".xlsx","")}Element{return this.GetElement(${excel[i][0]})};\n`
            }
            content += `}\n`
            return content; 
        }else{
            let content = `class ${filename.replace(".xlsx","")}Config extends Config<${filename.replace(".xlsx","")}Element>{}\n`;
            return content;
        }
    }  
}

// /**检查数据类型是否正确 */
// var checklist = function(excelArray){
//     excelArray.forEach((excel,index)=>{
//         for(i=0;i<excel[0].length;i++){
//             switch(excel[0][i]){
//                 case "INT" : check("int",i,excel,index) 
//                 break;
//                 case "STRING" : check("string",i,excel,index)
//                 break;                  
//             }
//         }
//     })   
// }


// var check = function(method,index,excel,indexs){
//     if(method == "int"){
//         for(j = 4;j<excel.length;j++){ 
//             if((typeof excel[j][index]) == "number"){
//                 if(excel[j][index]%1 != 0){
//                     console.log(indexs,j,index);
//                     window.alert(`文件：${fileArr[indexs]}第${j+2}行第${index+1}列数据格式不匹配！请修改后再转换`)
//                     isreturn = true
//                 }
//             }
//         } 
//     }
//     if(method == "string"){
//         for(j = 4;j<excel.length;j++){ 
//             if((typeof excel[j][index]) != "string"){
//                 window.alert(`文件：${fileArr[indexs]}第${j+2}行第${index+1}列数据格式不匹配！请修改后再转换`)
//                 isreturn = true
//             } 
//         }
//     } 
// }