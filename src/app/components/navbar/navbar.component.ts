import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Observable } from 'rxjs';
import firebase from 'firebase';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  user: firebase.User = null;
  logeado: boolean = false;
  showLogIn: boolean = false;

  constructor(public authService: LoginService) {
    this.authService.getCurrentUser().subscribe(user => {
      this.user = user;
    })
  }

  ngOnInit(): void {

  }
  logIn() {
    this.showLogIn = !this.showLogIn;
  }

  logOut(){
    this.authService.logout();
  }
}
