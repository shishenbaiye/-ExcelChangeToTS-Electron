/*
 * @Author       : Shuai.Wang
 * @Date         : 2022-05-15 19:27:21
 * @LastEditors  : Shuai.Wang
 * @LastEditTime : 2022-05-15 19:55:07
 * @FilePath     : \ExcelChangeToTS-Electron-main\src\uitls\ConfigBean.ts
 * @Description  : 修改描述
 */
export class ConfigBean {
    constructor(projectName: string, inputDir: string, outputDir: string) {
        this.projectName = projectName
        this.inputDir = inputDir
        this.outputDir = outputDir
    }
    projectName = "";
    inputDir = "";
    outputDir = "";
}