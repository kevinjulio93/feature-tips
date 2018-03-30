import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'feature-tip',
  templateUrl: 'feature-tip.html'
})
export class FeatureTipComponent {
    @Input() color: string = '#5CBCB9';
    @Input() show: boolean = false;
    @Input() expanded: boolean = false;
    @Output() showChange: EventEmitter<boolean>;
    @Output() expandedChange: EventEmitter<boolean>;

    constructor(private storage : Storage) {
        this.showChange = new EventEmitter<boolean>();
        this.expandedChange = new EventEmitter<boolean>();
        
    }

     

    expand() {
        this.expanded = true;
        this.expandedChange.emit(true);
    }
    
    close() {
        
        this.expanded = false;

        this.showChange.emit(false);
        this.expandedChange.emit(false);
     
    }
}
