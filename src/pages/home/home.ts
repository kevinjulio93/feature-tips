import { Component, OnInit } from '@angular/core';



@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage implements OnInit {


    constructor() {}

    showTip: boolean;
    aux : any;
    
        
    
    ngOnInit() {
        this.changestatus();
        
    }

    openTip(){
       this.showTip=true;
        
    }
    changestatus(){
        this.aux =localStorage.getItem('value');
        if (this.aux == null) {
            this.showTip=true;
            localStorage.setItem('value','1');
        }else{
            this.showTip=false
        } 
    }
}
    