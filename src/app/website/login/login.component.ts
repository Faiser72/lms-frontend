import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import '../../../assets/js/login-animation.js';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private route: Router,
    private locatio:Location) { }

  ngOnInit() {
    (window as any).initialize();
  }


  login() {
    console.log(`email: ${this.email} password: ${this.password}`)
    // alert(`Email: ${this.email} Password: ${this.password}`)
  }

  routeToHome() {
    this.route.navigate(['/home']);
  }

}


