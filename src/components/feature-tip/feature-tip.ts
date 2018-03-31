import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';




@Component({
  selector: 'feature-tip',
  templateUrl: 'feature-tip.html',
  animations: [
    trigger('slideup', [

        state('original', style({
            
            transform: 'scale(1)',
            //display: 'none'
        })),
        state('expanded', style({                                                                                                   
            transform: 'scale(1)',
            
        })),
        
        transition('original <=> *', animate('1000ms ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
           style({opacity: 1, transform: 'translateY(35px)',  offset: 0.5}),
            style({opacity: 1, transform: 'translateY(0px)',     offset: 1.0})
          ]))),
        //transition('expanded => *', animate('1000ms ease-out', style({transform: 'translateY(-100%)'}))),
        transition('expanded => *', animate('1000ms ease-in', keyframes([
            style({opacity: 1, transform: 'translateY(35px)', offset: 0}),
           style({opacity: 0, transform: 'translateY(-75%)',  offset: 0.5}),
            style({opacity: 0, transform: 'translateY(0px)',     offset: 1.0})
          ]))),
          
    ]),
  ]
})
export class FeatureTipComponent implements OnInit {
    @Input() color: string = '#5CBCB9';
    @Input() show: boolean = false;
    @Input() expanded: boolean = false;
    @Output() showChange: EventEmitter<boolean>;
    @Output() expandedChange: EventEmitter<boolean>;
    state: string = 'original';

    

    constructor(private storage : Storage) {
        this.showChange = new EventEmitter<boolean>();
        this.expandedChange = new EventEmitter<boolean>();
        
    }

     ngOnInit(){
      
     }

    expand() {
        this.expanded = true;
        this.expandedChange.emit(true);
        this.animateMe();
        
    }
    
    close() {
        
        this.state='original';
        this.expanded = false;
        this.showChange.emit(false);
        this.expandedChange.emit(false);
        
    }

    animateMe() {
        
        this.state = (this.state === 'original' ? 'expanded' : 'original');
    }


    
    

}
