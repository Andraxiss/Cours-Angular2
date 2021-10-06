import { Component } from '@angular/core';
import { AppareilComponent } from './appareil/appareil.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth :  boolean = false;
  
  lastUpdate = new Promise<Date>((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });


  appareils = [
    {
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      name: 'Frigo',
      status: 'allumé'
    },
    {
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];

  constructor(){
    setTimeout( () => {
      this.isAuth = true;
    }, 4000
    ); 
  }
  
  onAllumer(){
    console.log("On allume tout !");
    for (let appareil of this.appareils){
      appareil.status="allumé";
    }    
  }
 
}
