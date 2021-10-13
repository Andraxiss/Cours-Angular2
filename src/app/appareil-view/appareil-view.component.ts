import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil-services';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  isAuth: boolean = false;
  
  lastUpdate = new Promise<Date>((resolve, reject) => {
    const date = new Date();   
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  appareils: any[];

  constructor(private appareilService: AppareilService) {
    this.appareils=[];
    setTimeout(() => {
      this.isAuth = true;
    }, 2000
    );
  };
 
  ngOnInit() {
    this.appareils = this.appareilService.appareils;
  }


  onAllumerAll() {
    this.appareilService.switchOnAll();
  }

  onEteindreAll(){
    this.appareilService.switchOffAll();
  }

}
