import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatPaginator, MatSort } from '@angular/material';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-edittest',
  templateUrl: './edittest.component.html',
  styleUrls: ['./edittest.component.scss']
})
export class EdittestComponent implements OnInit {

  editTestForm: FormGroup;
  phonePattern = "^[0-9_-]{10}$";
  minDate: any;
  maxDate: any;
  today: any;
  isChecked: any;

  primaryRole = new FormControl();

  roleList: string[] = ['Admin', 'Instructor', 'Evaluator', 'Student'];

  dataSource: any;
  displayedColumns: string[] = [
    "question",
    "questionBank",
    "questionType",
    "answerType",
    "marks",
    "complexity"
  ];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private fb: FormBuilder,
    private router: Router,
    private appComponent: AppComponent) {
    // for date validation starts
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    this.today = yyyy + '-' + mm + '-' + dd;
    // for date validation ends
  }

  ngOnInit() {
    this.editTestFormBuilder();
  }

  customFilter() {
    this.dataSource.filterPredicate = (data, filter) => {
      const dataStr = data.patientNumber.patientNumber + data.doctorName.doctorName + data.patientName + data.phoneNumber + data.appointmentDate + data.appointmentTime;
      return dataStr.trim().toLowerCase().indexOf(filter) != -1;
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  showOptions(value) {
    this.isChecked = value.checked;
  }

  editTestFormBuilder() {
    this.editTestForm = this.fb.group({
      courseName: [null, [Validators.required]],
      testName: [null, [Validators.required]],
      maxScore: [null, [Validators.required]],
    });
  }


  editTestFormSubmit() {
    console.log(this.editTestForm.value);
    console.log(this.primaryRole.value);
  }

  backToAppointmentList() {
    this.router.navigate(["/home/appointmenthome/listappointment"]);
  }

  reset() {

  }
}
