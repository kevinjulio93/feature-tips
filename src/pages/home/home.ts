import { Component } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    showTip: boolean = true;

    openTip() {
        this.showTip = true;
    }
}
