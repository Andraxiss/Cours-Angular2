import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppareilService } from '../services/appareil-services';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss'],
})
export class AppareilViewComponent implements OnInit, OnDestroy {
  appareils: any[] = [];
  appareilSubscription: Subscription = new Subscription();
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(() => {
      resolve(date);
    }, 2000);
  });

  constructor(private appareilService: AppareilService) {}

  ngOnInit() {
    this.appareilSubscription = this.appareilService.appareilsSubject.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils;
      }
    );
    this.appareilService.emitAppareilSubject();
  }

  ngOnDestroy() {
    this.appareilSubscription.unsubscribe();
  }

  onAllumerAll() {
    this.appareilService.switchOnAll();
  }

  onEteindreAll() {
    if (confirm('Voulez vous vraiment tout éteindre ?')) {
      this.appareilService.switchOffAll();
    }
  }
}
