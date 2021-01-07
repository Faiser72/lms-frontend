import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit {

  constructor(private route: Router) { }

  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;

  card:any[] = [
    { id: 11, name: 'Course 1', cost:1300 },
    { id: 12, name: 'Course 2', cost:1240 },
    { id: 13, name: 'Course 3', cost:2310 },
    { id: 14, name: 'Course 4', cost:1200 },
    { id: 15, name: 'Course 5', cost:1420 },
    { id: 16, name: 'Course 6', cost:1290 },

  ];


  ngOnInit() {

    $(window).on('scroll', function (event) {
      var scroll = $(window).scrollTop();
      if (scroll < 20) {
          $(".navbar-area").removeClass("sticky");
          $(".navbar .navbar-brand img").attr("src", "assets/images/logo.svg");
      } else {
          $(".navbar-area").addClass("sticky"); 
          $(".navbar .navbar-brand img").attr("src", "assets/images/logo-2.svg");
      }
  });

    this.myStyle = {
      'position': 'absolute',
      'width': '100%',
      'height': '70%',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
    };

    this.myParams = {
      particles: {
        number: {
          value: 100,
        },
        color: {
          value: '#ff0000'
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: "#000000"
          },
          polygon: {
            nb_sides: 5
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100
          }
        },
        bubble: {
          distance: 800,
          size: 80,
          duration: 2,
          opacity: 0.8,
          speed: 3
        },
      }
    };
  }

  routeToHome() {
    this.route.navigate(['/home'])
  }

}
