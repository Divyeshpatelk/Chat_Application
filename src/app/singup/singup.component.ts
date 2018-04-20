import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  constructor() { }
 public formValidation : FormGroup;
         
  ngOnInit() {
  this.formValidation = new FormGroup({
      fName : new FormControl("",Validators.required),
      lName : new FormControl("",Validators.required),
      email : new FormControl("",Validators.required),
      password : new FormControl("",Validators.required)
    }); 

  }

}
