import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  constructor() { }
  
  @Input() appareilName : string = "";

  @Input() appareilStatus : string = "";

  ngOnInit(): void {
  }

  getStatus(){
    return this.appareilStatus;
  }

  getColor(){
    if(this.appareilStatus === "éteint"){
      return 'red';
    } else {
      return 'green';
    }
  }

}
