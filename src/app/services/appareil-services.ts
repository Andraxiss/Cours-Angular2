import { Subject } from 'rxjs';
import { Appareil } from 'src/models/appareil-interface';

export class AppareilService {
  private appareils: Appareil[] = [
    {
      id: 1,
      name: 'Machine à laver',
      status: 'éteint',
    },
    {
      id: 2,
      name: 'Frigo',
      status: 'allumé',
    },
    {
      id: 3,
      name: 'Ordinateur',
      status: 'éteint',
    },
  ];

  appareilsSubject = new Subject<any[]>();

  emitAppareilSubject() {
    this.appareilsSubject.next(this.appareils.slice());
  }

  switchOnAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'allumé';
      this.emitAppareilSubject();
    }
  }

  switchOffAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'éteint';
      this.emitAppareilSubject();
    }
  }

  switchOnOne(index: number) {
    this.appareils[index].status = 'allumé';
    this.emitAppareilSubject();
  }

  switchOffOne(index: number) {
    this.appareils[index].status = 'éteint';
    this.emitAppareilSubject();
  }

  getAppareilById(id: number): Appareil {
    for (let appareil of this.appareils) {
      if (appareil.id === id) {
        return appareil;
      }
    }
    return { id: 0, name: 'null', status: 'null' };
  }
}
