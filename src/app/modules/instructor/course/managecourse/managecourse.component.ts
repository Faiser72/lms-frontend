import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatPaginator, MatSort, MatSnackBar, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-managecourse',
  templateUrl: './managecourse.component.html',
  styleUrls: ['./managecourse.component.scss']
})
export class ManagecourseComponent implements OnInit {

  dataSource: any;
  displayedColumns: string[] = [
    "category",
    "course",
    "session",
    "modifiedOn",
    "status",
    "action"
  ];

  userDetailsList: any;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private route: Router,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog) { }

  ngOnInit() {
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

  routeToDeleteUser(userDetails) {
  }


  routeToEditUser(userDetails: any) {
  }

  routeToAddUser() {
    this.route.navigate(['userhome/adduser'])
  }

  //for Add Course popup Starts here
  openAddCourseDialog(): void {
    var printObj = {

    }
    const dialogRef = this.dialog.open(AddCourse, {
      width: "1000px",
      // height: "600px",
      data: { pageValue: printObj }
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
    });
  }
  //for AddCourse popup ends here
}

//AddCourse Starts Here
@Component({
  selector: "addcourse",
  templateUrl: "addcourse.html",
  styleUrls: ["./managecourse.component.scss"],
})
export class AddCourse {


  printObj;
  addCourseForm: FormGroup;

  constructor(private route: ActivatedRoute,
    public dialog: MatDialog,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddCourse>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.printObj = data.pageValue;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    this.addCourseFormBuilder();

  }
  addCourseFormBuilder() {
    this.addCourseForm = this.fb.group({
      title: [null, [Validators.required, Validators.minLength(3)]],
      category: [null, [Validators.required]],
      author: [null, [Validators.required,]],
      cost: [null, [Validators.required,]],
      description: [null, [Validators.required]],
      whatYouLearn: [null, [Validators.required]],
      whoShouldTakeCourse: [null, [Validators.required]],
    });
  }


  addCourseFormSubmit() {
    console.log(this.addCourseForm.value);
  }

  close() {
    this.dialogRef.close();
  }
}
//Add Course ends Here