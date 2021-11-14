import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { interval } from 'rxjs';
import { AppareilComponent } from './appareil/appareil.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  constructor() {}

  counterSubscription: Subscription = new Subscription();
  secondes: number = 0;

  ngOnInit() {
    const counter = interval(1000); //Ceci est un observable
    this.counterSubscription = counter.subscribe(
      (value) => {
        this.secondes = value;
      },
      (error) => {
        console.log('Oups There is an error ! ' + error);
      },
      () => {
        console.log('Mission complete !');
      }
    );
  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }
}
