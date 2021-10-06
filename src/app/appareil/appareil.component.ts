import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../services/appareil-services';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  constructor(private appareilService: AppareilService) { }

  @Input() appareilName: string = "";

  @Input() appareilStatus: string = "";

  @Input() appareilIndex: number = 0;

  ngOnInit(): void {
  }

  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    if (this.appareilStatus === "éteint") {
      return 'red';
    } else {
      return 'green';
    }
  }

  onAllumerOne(){
    this.appareilService.switchOnOne(this.appareilIndex);
  }

  onEteindreOne(){
    this.appareilService.switchOffOne(this.appareilIndex);
  }

}
