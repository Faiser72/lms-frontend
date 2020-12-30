import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatPaginator, MatSort, MatSnackBar, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-scheduletest',
  templateUrl: './scheduletest.component.html',
  styleUrls: ['./scheduletest.component.scss']
})
export class ScheduletestComponent implements OnInit {

  dataSource: any;
  displayedColumns: string[] = [
    "courseName",
    "testTitle",
    "questionPaperType",
    "startDate",
    "endDate",
    "users",
    "action"
  ];

  userDetailsList: any;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private route: Router,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,) { }

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

  routeToAddStudent(){
    this.route.navigate(['/manageassignment'])
  }

  //for AddScheduleTest popup Starts here
  openAddScheduleTestDialog(): void {
    var printObj = {

    }
    const dialogRef = this.dialog.open(AddScheduleTest, {
      width: "500px",
      // height: "500px",
      data: { pageValue: printObj }
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
    });
  }
  //for AddScheduleTest popup ends here

  //for EditScheduleTest popup Starts here
  openEditScheduleTestDialog(): void {
    var printObj = {

    }
    const dialogRef = this.dialog.open(EditScheduleTest, {
      width: "500px",
      // height: "700px",
      data: { pageValue: printObj }
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
    });
  }
  //for EditScheduleTest popup ends here

}

//AddScheduleTest Starts Here
@Component({
  selector: "addscheduletest",
  templateUrl: "addscheduletest.html",
  styleUrls: ["./scheduletest.component.scss"],
})
export class AddScheduleTest {


  printObj;
  addScheduleForm: FormGroup;

  constructor(private route: ActivatedRoute,
    public dialog: MatDialog,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddScheduleTest>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.printObj = data.pageValue;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    this.addScheduleFormBuilder();

  }
  addScheduleFormBuilder() {
    this.addScheduleForm = this.fb.group({
      courseName: [null, [Validators.required]],
      testTitle: [null, [Validators.required]],
      startDate: [null, [Validators.required]],
      endDate: [null, [Validators.required]],
    });
  }


  addScheduleFormSubmit() {
    console.log(this.addScheduleForm.value);
  }

  close() {
    this.dialogRef.close();
  }
}
//AddScheduleTest ends Here


//EditScheduleTest Starts Here
@Component({
  selector: "editscheduletest",
  templateUrl: "editscheduletest.html",
  styleUrls: ["./scheduletest.component.scss"],
})
export class EditScheduleTest {


  printObj;
  editScheduleForm: FormGroup;

  constructor(private route: ActivatedRoute,
    public dialog: MatDialog,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditScheduleTest>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.printObj = data.pageValue;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    this.editScheduleFormBuilder();

  }
  editScheduleFormBuilder() {
    this.editScheduleForm = this.fb.group({
      courseName: [null, [Validators.required]],
      testTitle: [null, [Validators.required]],
      startDate: [null, [Validators.required]],
      endDate: [null, [Validators.required]],
    });
  }


  editScheduleFormSubmit() {
    console.log(this.editScheduleForm.value);
  }

  close() {
    this.dialogRef.close();
  }
}
//EditScheduleTest ends Here