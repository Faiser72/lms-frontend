import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, Inject, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AddCategory } from 'src/app/modules/instructor/category/managecategory/managecategory.component';


@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit {

  constructor(private route: Router,
    public dialog: MatDialog) { }

  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;
  cartCount: number = 0;

  card: any[] = [
    { id: 11, name: 'Course 1', cost: 1300 },
    { id: 12, name: 'Course 2', cost: 1240 },
    { id: 13, name: 'Course 3', cost: 2310 },
    { id: 14, name: 'Course 4', cost: 1200 },
    { id: 15, name: 'Course 5', cost: 1420 },
    { id: 16, name: 'Course 6', cost: 1290 },

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

    //===== Back to top

    // Show or hide the sticky footer button
    $(window).on('scroll', function (event) {
      if ($(this).scrollTop() > 600) {
        $('.back-to-top').fadeIn(200)
      } else {
        $('.back-to-top').fadeOut(200)
      }
    });


    //Animate the scroll to yop
    $('.back-to-top').on('click', function (event) {
      event.preventDefault();

      $('html, body').animate({
        scrollTop: 0,
      }, 100);
    });
  }

  routeToHome() {
    this.route.navigate(['/home'])
  }
  items = [];
  cartObject(cardObject) {
    this.items.push(cardObject);
    console.log(this.items);
    this.cartCount=this.cartCount+1;

    localStorage.setItem("cart", JSON.stringify(this.items))

  }

  //for Login popup Starts here
  openLoginDialog(): void {
    var printObj = {

    }
    const dialogRef = this.dialog.open(Login, {
      width: "400px",
      height: "600px",
      data: { pageValue: printObj }
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
    });
  }
  //for Login popup ends here


  //for Cart popup Starts here
  openCartDialog(): void {
    var printObj = {

    }
    const dialogRef = this.dialog.open(Cart, {
      width: "400px",
      height: "600px",
      data: { pageValue: printObj }
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
    });
  }
  //for Cart popup ends here

}


//Login Starts Here
@Component({
  selector: "login",
  templateUrl: "login.html",
  styleUrls: ["./landingpage.component.scss"],
})
export class Login {

  printObj;
  addCategoryForm: FormGroup;

  constructor(private route: ActivatedRoute,
    public dialog: MatDialog,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<Login>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.printObj = data.pageValue;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {

  }

  close() {
    this.dialogRef.close();
  }
}
//Login ends Here


//Cart Starts Here
@Component({
  selector: "cart",
  templateUrl: "cart.html",
  styleUrls: ["./landingpage.component.scss"],
})
export class Cart {

  printObj;
  addCategoryForm: FormGroup;

  constructor(private route: ActivatedRoute,
    public dialog: MatDialog,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<Cart>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.printObj = data.pageValue;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {

  }

  close() {
    this.dialogRef.close();
  }
}
//Cart ends Here
