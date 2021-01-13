import { Login } from './../landingpage/landingpage.component';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import '../../../assets/js/login-animation.js';
import { Location } from '@angular/common';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  wrongPwd: boolean = false;

  constructor(private route: Router,
    public dialogRef: MatDialogRef<Login>,
    private locatio: Location) { }

  ngOnInit() {
    (window as any).initialize();
  }


  login() {
    if (this.email == "admin" && this.password == "admin@123") {
      this.route.navigate(['/home']);
      this.dialogRef.close();
    }
    else {
      this.wrongPwd = true;
    }
    console.log(`email: ${this.email} password: ${this.password}`)
    // alert(`Email: ${this.email} Password: ${this.password}`)
  }

  routeToHome() {
  }

}


