import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Appareil } from 'src/models/appareil-interface';
import { AppareilService } from '../services/appareil-services';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {

  name: String = 'Appareil';
  status: String = 'Status';
 
  constructor(private appareilService: AppareilService, private route : ActivatedRoute) { 

  }

  ngOnInit(): void {
    const id=this.route.snapshot.params['id'];
    this.name=this.appareilService.getAppareilById(+id).name;
    this.status=this.appareilService.getAppareilById(+id).status;
  }

}
