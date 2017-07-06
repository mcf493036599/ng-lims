import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  username = new FormControl('');
  password = new FormControl('');

  signInForm: FormGroup = this.formBuilder.group({
    username: this.username,
    password: this.password
  })
  ngOnInit() {
  }

  signIn(){
    console.log(`${this.username.value} signed in.`)
  }

}
