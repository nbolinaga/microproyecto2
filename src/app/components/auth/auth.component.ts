import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-auth-form',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  @Output() sendFormEvent = new EventEmitter();
  @Input() isRegister: boolean = false;

  constructor(
    private authService: LoginService,
    private router: Router

  ) { }

  ngOnInit(): void {
  }
  async googleLogin(){
    const user = await this.authService.loginGoogle();
    if (user) {
      this.router.navigate(['/lista']);
    }
  }
}
