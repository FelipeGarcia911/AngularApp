import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { loginResponse } from '../../models/loginResponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  token: String = '';
  constructor(private loginService: LoginService) { }

  ngOnInit() {

  }

  onSubmit() {
    this.loginService.signIn(this.token).subscribe(
      response => this.onLoginSucces(response),
      error => this.onLoginFailure(error)
    );
  }

  onLoginSucces(response: loginResponse){
    this.token = ''
    console.log('Login Success!!')
  }

  onLoginFailure(error: any){
    console.log('LoginError!!!')
  }
}
