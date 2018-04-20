import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = "SIGN IN To Chat Application";
  public formValidation : FormGroup;


  constructor() { }

  ngOnInit() {
    this.formValidation = new FormGroup({
        userid : new FormControl("",Validators.required),
        passwd : new FormControl("",Validators.required)
    });
  }
}
