import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  emailExist: boolean;
  showMsg: boolean;
  msg = '';
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    public authService: AuthService,
    public userService: UserService

  ) { }

  initForm() {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.initForm();
  }

  register() {
    const formValue = this.registerForm.value;
    this.authService.SignUp(formValue['username'], formValue['password'])
    this.userService.createUser({
      id: this.userService.genID(5),
      username: formValue['username'],
      type: "user"
    })


  }

}
