import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { ConfigBean } from "src/uitls/ConfigBean";


@Component({
    selector: "app-test",
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

    projectMap = new Map<string, ConfigBean>()
    toppings = new FormControl();
    toppingList: string[] = [];
    selectProject: string = "";
    inputContent: string = '';
    configPath: string = '';
    configContent: string = 'none';
    labelPosition: 'newone' | 'newtwo' | 'oldone' = 'newone';
    ngOnInit(): void {
        // 如果文件不存在，就创建配置文件

        this.configPath = clickCreateConfig();

        createList();

        this.refreshConfigInfo()
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
            var inputDir2 = element["inputDir"]
            var outputDir2 = element["outputDir"]
            var bean = new ConfigBean(projectName, inputDir2, outputDir2)
            this.projectMap.set(projectName, bean)

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

    opendir() {
        Opendir(this.configPath);
    }

}

