import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatPaginator, MatSort, MatSnackBar, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-questionbank',
  templateUrl: './questionbank.component.html',
  styleUrls: ['./questionbank.component.scss']
})
export class QuestionbankComponent implements OnInit {

  dataSource: any;
  displayedColumns: string[] = [
    "category",
    "course",
    "questionBankName",
    "action"
  ];

  userDetailsList: any;
  courseName: any = "multithreading";

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
    this.route.navigate(['userhome/adduser'])
  }

  routeToChapter() {
    this.route.navigate(['/managechapter'])
  }

  routeToManageQuestion(){
    this.route.navigate(['/managequestion'])
  }

  //for Add QuestionPaper popup Starts here
  openAddQuestionBankDialog(): void {
    var printObj = {

    }
    const dialogRef = this.dialog.open(AddQuestionBank, {
      width: "500px",
      // height: "500px",
      data: { pageValue: printObj }
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
    });
  }
  //for AddQuestionPaper popup ends here

  //for EditQuestionPaper popup Starts here
  openEditQuestionBankDialog(): void {
    var printObj = {

    }
    const dialogRef = this.dialog.open(EditQuestionBank, {
      width: "550px",
      // height: "500px",
      data: { pageValue: printObj }
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
    });
  }
  //for EditQuestionPaper popup ends here

}

//addquestionbank Starts Here
@Component({
  selector: "addquestionbank",
  templateUrl: "addquestionbank.html",
  styleUrls: ["./questionbank.component.scss"],
})
export class AddQuestionBank {


  printObj;
  addQuestionBankForm: FormGroup;

  constructor(private route: ActivatedRoute,
    public dialog: MatDialog,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddQuestionBank>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.printObj = data.pageValue;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    this.addQuestionBankFormBuilder();

  }

  addQuestionBankFormBuilder() {
    this.addQuestionBankForm = this.fb.group({
      category: [null, [Validators.required]],
      course: [null, [Validators.required]],
      questionBankName: [null, [Validators.required]],
      description: [null, [Validators.required]],
    });
  }

  addQuestionBankFormSubmit() {
    console.log(this.addQuestionBankForm.value);
  }

  close() {
    this.dialogRef.close();
  }
}
//addquestionbank ends Here

//editquestionbank Starts Here
@Component({
  selector: "editquestionbank",
  templateUrl: "editquestionbank.html",
  styleUrls: ["./questionbank.component.scss"],
})
export class EditQuestionBank {


  printObj;
  editQuestionBankForm: FormGroup;

  constructor(private route: ActivatedRoute,
    public dialog: MatDialog,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditQuestionBank>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.printObj = data.pageValue;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    this.editQuestionBankFormBuilder();

  }
  editQuestionBankFormBuilder() {
    this.editQuestionBankForm = this.fb.group({
      category: [null, [Validators.required]],
      course: [null, [Validators.required]],
      questionBankName: [null, [Validators.required]],
      description: [null, [Validators.required]],
    });
  }

  editQuestionBankFormSubmit() {
    console.log(this.editQuestionBankForm.value);
  }

  close() {
    this.dialogRef.close();
  }
}
//editquestionbank ends Here
