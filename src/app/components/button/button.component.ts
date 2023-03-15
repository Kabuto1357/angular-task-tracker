import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
    
  @Input() text: string;
  @Input() color: string;
  
  constructor(){
    // need to define default values in case no input is passed
    this.text = "[UNTITLED]";
    this.color = "#000000";
  }
    
    ngOnInit(): void {}
}
