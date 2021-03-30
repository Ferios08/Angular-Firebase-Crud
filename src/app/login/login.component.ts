import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertsService } from 'angular-alert-module';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  emailExist: boolean;
  showMsg: boolean;
  msg = '';

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    public authService: AuthService,
    public userService: UserService
  ) { }

  ngOnInit() {

    this.initForm();
  }


  initForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }


  login() {
    console.log
    const formValue = this.loginForm.value;
    this.authService.SignIn(formValue['username'], formValue['password']);
    /*this.userService.createUser({
      id: this.userService.genID(5),
      username: formValue['username'],
      type: "user"
    })
    */
  }

  async accountDoesntExistAlert() {
    this.msg = 'User 404';
    this.showMsg = true;
  }

  async incorrectPass() {
    this.msg = 'Incorrect password';
    this.showMsg = true;
  }
  
}
