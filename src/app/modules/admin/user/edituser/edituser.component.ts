import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.scss']
})
export class EdituserComponent implements OnInit {


  editUserForm: FormGroup;
  phonePattern = "^[0-9_-]{10}$";
  minDate: any;
  maxDate: any;
  today: any;

  primaryRole = new FormControl();

  roleList: string[] = ['Admin', 'Instructor', 'Evaluator', 'Student'];


  constructor(private fb: FormBuilder,
    private router: Router,
    private appComponent: AppComponent,
    private location: Location) {
    // for date validation starts
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    this.today = yyyy + '-' + mm + '-' + dd;
    // for date validation ends
  }

  ngOnInit() {
    this.editUserFormBuilder();
  }

  editUserFormBuilder() {
    this.editUserForm = this.fb.group({
      userName: [null, [Validators.required, Validators.minLength(3)]],
      registrationNo: [null, [Validators.required, Validators.minLength(3)]],
      age: [null, [Validators.required]],
      gender: [null, [Validators.required]],
      primaryRole: [null,],
      emailId: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9._-]+@[a-zA-Z]+.[a-zA-Z]{2,4}$"),
        ]),],
      phoneNumber: [
        null,
        [Validators.required, Validators.pattern(this.phonePattern)],
      ],
      address: [null, [Validators.required, Validators.minLength(3)]],
      panNo: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}$"),
        ]),
      ],
      aadharNo: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern("^[0-9]{12}$"),
        ]),
      ],
    });
  }


  editUserFormSubmit() {
    console.log(this.editUserForm.value);
    console.log(this.primaryRole.value);
  }

  backToAppointmentList() {
    this.router.navigate(["/home/appointmenthome/listappointment"]);
  }

  back() {
    this.location.back();
  }
}
