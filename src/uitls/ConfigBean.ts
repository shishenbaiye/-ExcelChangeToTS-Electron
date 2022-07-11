/*
 * @Author       : Shuai.Wang
 * @Date         : 2022-05-15 19:27:21
 * @LastEditors  : Shuai.Wang
 * @LastEditTime : 2022-07-10 16:54:06
 * @FilePath     : \ExcelChangeToTS-Electron-main\src\uitls\ConfigBean.ts
 * @Description  : 修改描述
 */
export class ConfigBean {
    constructor(projectName: string, projectRootPath: string, inputDir: string, outputDir: string) {
        this.projectName = projectName
        this.inputDir = inputDir
        this.outputDir = outputDir
        this.projectRootPath = projectRootPath
    }
    projectName = "";
    inputDir = "";
    outputDir = "";
    projectRootPath = "";
}