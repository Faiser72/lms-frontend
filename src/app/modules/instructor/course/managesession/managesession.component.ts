import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatPaginator, MatSort, MatSnackBar, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-managesession',
  templateUrl: './managesession.component.html',
  styleUrls: ['./managesession.component.scss']
})
export class ManagesessionComponent implements OnInit {

  dataSource: any;
  displayedColumns: string[] = [
    "session",
    "title",
    "description",
    "action"
  ];

  userDetailsList: any;
  courseName:any="multithreading";

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

  routeToDeleteUser() {
  }


  routeToEditUser(userDetails: any) {
  }

  routeToAddUser() {
    this.route.navigate(['home/userhome/adduser'])
  }

  routeToChapter(){
    this.route.navigate(['/home/managechapter'])
  }

  //for Add Session popup Starts here
  openAddSessionDialog(): void {
    var printObj = {

    }
    const dialogRef = this.dialog.open(AddSession, {
      width: "450px",
      height: "500px",
      data: { pageValue: printObj }
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
    });
  }
  //for AddSession popup ends here

  //for Edit Session popup Starts here
  openEditSessionDialog(): void {
    var printObj = {

    }
    const dialogRef = this.dialog.open(EditSession, {
      width: "450px",
      height: "500px",
      data: { pageValue: printObj }
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
    });
  }
  //for EditSession popup ends here

}

//AddSession Starts Here
@Component({
  selector: "addsession",
  templateUrl: "addsession.html",
  styleUrls: ["./managesession.component.scss"],
})
export class AddSession {


  printObj;
  addSessionForm: FormGroup;

  constructor(private route: ActivatedRoute,
    public dialog: MatDialog,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddSession>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.printObj = data.pageValue;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    this.addSessionFormBuilder();

  }

  addSessionFormBuilder() {
    this.addSessionForm = this.fb.group({
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
      sessionNo: [null, [Validators.required]],
    });
  }


  addSessionFormSubmit() {
    console.log(this.addSessionForm.value);
  }

  close() {
    this.dialogRef.close();
  }
}
//Add Session ends Here

//EditSession Starts Here
@Component({
  selector: "editsession",
  templateUrl: "editsession.html",
  styleUrls: ["./managesession.component.scss"],
})
export class EditSession {


  printObj;
  editSessionForm: FormGroup;

  constructor(private route: ActivatedRoute,
    public dialog: MatDialog,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditSession>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.printObj = data.pageValue;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    this.editSessionFormBuilder();

  }
  editSessionFormBuilder() {
    this.editSessionForm = this.fb.group({
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
      sessionNo: [null, [Validators.required]],
    });
  }


  editSessionFormSubmit() {
    console.log(this.editSessionForm.value);
  }

  close() {
    this.dialogRef.close();
  }
}
//Edit Session ends Here
