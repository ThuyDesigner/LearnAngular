import { Component } from "@angular/core";
@Component({
    templateUrl:'./word.component.html',
    selector: 'app-word', 
    styleUrls:['./word.component.scss']
})
export class WordComponent{
    en: string ='hello';
    vn: string ='Viet Nam';
    forgot = false;

    toggleForgot(){
        this.forgot= !this.forgot;
    }
}