import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppareilService } from '../services/appareil-services';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  isAuth :boolean = false;

  constructor(private authService : AuthService, private router: Router) {
   }

  ngOnInit(): void {
    this.isAuth=this.authService.isAuth;
  }

  signIn(){
    this.authService.signIn().then(
      () => {
        console.log('Logged in!');
        this.isAuth=this.authService.isAuth;
        this.router.navigate(['appareils'])
      }
    );
  }

  signOut(){
    console.log('Logged out !')
    this.authService.signOut();
    this.isAuth=this.authService.isAuth;
  }

}
