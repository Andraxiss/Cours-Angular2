import { Component, OnInit } from '@angular/core';
import { AppareilComponent } from './appareil/appareil.component';
import { AppareilService } from './services/appareil-services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
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
