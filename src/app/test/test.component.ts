import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { FormControl } from "@angular/forms";
import { ProgressInfo, UpdateDownloadedEvent, UpdateInfo } from "electron-updater";
import { ConfigBean } from "src/uitls/ConfigBean";
import { ElectronService } from "../provider/electron.service";
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from "../dialog/dialog.component";
import { UpdateDialogComponent } from "../updateDialog/updateDialog.component";
import configs from "../../../package.json"
const baseApi = "/api/v1/game";
@Component({
    selector: "app-test",
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

    version: string = configs.version;
    
    projectMap = new Map<string, ConfigBean>()
    toppings = new FormControl();
    toppingList: string[] = [];
    selectProject: string = "";
    inputContent: string = '';
    configPath: string = '';
    labelPosition: 'newone' | 'newtwo' | 'oldone' = 'newtwo';

    updateMessage:string = "检查更新ing...";
    updateProcessDialog: string = "";
    updateButtonState:string = 'none';
    newVersion:string = "";
    private _headers: HttpHeaders =
        new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
    
    constructor(private http: HttpClient,private electron:ElectronService,public ref:ChangeDetectorRef,public dialog:MatDialog) { }

    ngOnInit(): void {
        console.error("ngOnInit");
        // 获取版本号
        this.http.get(`http://api.abinsoft.com${baseApi}/syncvar?varname=version`, { headers: this._headers }).subscribe((data) => {
            let result = data as { code: number, msg: string, version: string }
            if (result.version) {
                console.error(`当前版本：`, this.version);
            } else {
                console.error(`接口错误！`);
            }

        })
        // 如果文件不存在，就创建配置文件

        this.configPath = clickCreateConfig();

        createList();

        this.refreshConfigInfo();
        this.updateVersion();
    }

    public excelToTS() {
        if (window.projectRootPath == null || window.projectRootPath === "") {
            window.alert("项目路径为空，请配置projectRootPath字段");
            return
        }
        startExport(window.projectRootPath)
        window.alert("导出项目完成，请确认项目路径：" + window.projectRootPath);

    }

    public refreshConfigInfo() {        // 获取配置文件的内容
        var configStr = ReadConfigJson()
        var configJson
        try {
            configJson = JSON.parse(configStr)
        } catch (error) {
            window.alert("未正确配置路径！");
            return
        }
        this.toppingList = [];
        for (let i = 0; i < configJson.length; i++) {
            const element = configJson[i];
            var projectName = element["projectName"]
            var projectRootPath = element["projectRootPath"]
            var inputDir2 = element["inputDir"]
            var outputDir2 = element["outputDir"]
            var bean = new ConfigBean(projectName, projectRootPath, inputDir2, outputDir2)
            this.projectMap.set(projectName, bean)
            this.projectSelectChange()
            // 把项目列表展示在UI上
            this.toppingList.push(projectName)
            console.log("projectName:", projectName, " inputDir:", inputDir2, " outputDir:", outputDir2);
        }
        window.alert("成功刷新" + this.toppingList.length + "条信息");
    }

    /**
     * 选择文件变动
     */
    projectSelectChange() {
        console.log("选择了一个选项555：" + this.selectProject);
        var configBean = this.projectMap.get(this.selectProject)
        console.log("这个项目的InputDir：", configBean?.inputDir, " outpuDir:", configBean?.outputDir);
        this.inputContent = "当前项目：" + this.selectProject
        window.inputDir = configBean?.inputDir
        window.outputDir = configBean?.outputDir
        window.projectRootPath = configBean?.projectRootPath
    }

    public clickbtn() {
        if (this.selectProject === "") {
            window.alert("请选择项目！");
            return
        }
        console.log(this.labelPosition);
        switch (this.labelPosition) {
            case 'newone': window['btnn'](); break;
            case 'newtwo': btnnn(); break;
            case 'oldone': window['btn'](); break;
            default: window.alert("请选择生成方式！"); break;
        }
    }

    public clickClose() {
        Close();
    }

    public clickRemove() {
        Taskbar();
    }

    public openConfigUrl() {
        openUrl('https://meta.feishu.cn/docs/doccnvjXMKZ7pfcxcZl9RnlW50e');
    }

    opendir() {
        Opendir(this.configPath);
    }

    clickUpdate() {
        // this.electron.send(`clickUpdate`,null);
        let dialogRef = this.dialog.open(DialogComponent,{data:{name:`发现新版本v${this.newVersion}，是否更新？`}});
        dialogRef.disableClose = true;
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.electron.send('updateNow',null);
                let updateProcessDialog = this.dialog.open(UpdateDialogComponent,{width: '300px'});
                updateProcessDialog.disableClose = true;
                this.updateProcessDialog = updateProcessDialog.id;
                this.reflashHtml();
            }else{
                this.updateMessage = `检查到有新版本请及时更新！`;
                this.updateButtonState = "";
                this.reflashHtml();
            }
        })
    }

    reflashHtml(){
        this.ref.markForCheck();
        this.ref.detectChanges();
    }
    updateVersion() {
        this.electron.onUpdate((message,data) => {
            switch (message) {
                /**更新出错 */
                case `error`: console.error((data as Error).message); this.updateMessage = `更新出错！`;this.reflashHtml();;break;
                /**检查更新 */
                case `checking-for-update`:{
                    console.error("检查更新",data); 
                    this.updateMessage = `检查更新ing...`; 
                    this.reflashHtml();
                    break;
                }
                /**需要更新 */
                case `update-available`: 
                    console.log(message); 
                    let datas = data as UpdateInfo;
                    console.error(`创建dialog`); 
                    this.updateMessage = `检查到有新版本！`;
                    this.updateButtonState = "";
                    this.newVersion = datas.version;
                    this.reflashHtml();
                    break; 
                /**不需要更新 */
                case `update-not-available`: {
                    console.log(message); 
                    let datas = data as UpdateInfo; 
                    this.updateMessage = `当前版本：${datas.version}，已是最新版本！`;
                    this.updateButtonState = "none";
                    this.reflashHtml();
                    break;
                }  
                /**下载过程 */
                case `download-Progress`:{
                    console.log(message);
                    let datas = data as ProgressInfo; 
                    break;
                } 
                /**下载完毕 */
                case `update-downloaded`: {
                    console.log(message); 
                    let datas = data as UpdateDownloadedEvent;
                    let dialog = this.dialog.getDialogById(this.updateProcessDialog) as MatDialogRef<UpdateDialogComponent>;
                    dialog.close();
                    this.reflashHtml();
                    this.electron.send(`quitAndInstall`,null);
                    break;
                }
                /**测试 */
                case `test`: {
                    console.log(message,data);break;
                }
                default: break;
            }
        })
    }

}
