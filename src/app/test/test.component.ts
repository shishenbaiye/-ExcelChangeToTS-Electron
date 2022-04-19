import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-test",
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
    inputContent: string = '';
    configContent: string = 'none';
    labelPosition: 'newone' | 'newtwo' | 'oldone' = 'newone';
    ngOnInit(): void {
        let result = clickCreateConfig();
        this.inputContent = result;
        createList();
    }
    public clickbtn() {
        console.log(this.labelPosition);
        switch (this.labelPosition) {
            case 'newone': btnn(); break;
            case 'newtwo': btnnn(); break;
            case 'oldone': btn(); break;
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
        Opendir(this.inputContent);
    }

}

