import { Appareil } from "src/models/appareil-interface";

export class AppareilService {
  appareils: Appareil[] = [
    {
      id: 1,
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      id: 2,
      name: 'Frigo',
      status: 'allumé'
    },
    {
      id: 3,
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];

  switchOnAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'allumé';
    }
  }

  switchOffAll() {
    for (let appareil of this.appareils) {
      appareil.status = "éteint"
    }
  }

  switchOnOne(index: number) {
    this.appareils[index].status = "allumé";
  }

  switchOffOne(index: number) {
    this.appareils[index].status = 'éteint';
  }

  getAppareilById(id: number): Appareil {
    for (let appareil of this.appareils){
      if (appareil.id===id){
        return appareil;
      }
    }
    return {'id':0,'name':'null','status':'null'};
  }
}