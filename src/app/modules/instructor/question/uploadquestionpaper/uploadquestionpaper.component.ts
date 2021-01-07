import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatPaginator, MatSort, MatSnackBar, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-uploadquestionpaper',
  templateUrl: './uploadquestionpaper.component.html',
  styleUrls: ['./uploadquestionpaper.component.scss']
})
export class UploadquestionpaperComponent implements OnInit {

  dataSource: any;
  displayedColumns: string[] = [
    "category",
    "course",
    "questionPaperTitle",
    "duration",
    "maxMarks",
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
    this.route.navigate(['home/userhome/adduser'])
  }

  routeToChapter() {
    this.route.navigate(['/home/managechapter'])
  }

  //for Add QuestionPaper popup Starts here
  openAddQuestionPaperDialog(): void {
    var printObj = {

    }
    const dialogRef = this.dialog.open(AddQuestionPaper, {
      width: "550px",
      // height: "500px",
      data: { pageValue: printObj }
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
    });
  }
  //for AddQuestionPaper popup ends here

  //for EditQuestionPaper popup Starts here
  openEditQuestionPaperDialog(): void {
    var printObj = {

    }
    const dialogRef = this.dialog.open(EditQuestionPaper, {
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

//AddQuestionPaper Starts Here
@Component({
  selector: "addquestionpaper",
  templateUrl: "addquestionpaper.html",
  styleUrls: ["./uploadquestionpaper.component.scss"],
})
export class AddQuestionPaper {


  printObj;
  addQuestionPaperForm: FormGroup;

  // Upload Question files
  questionPaperFile: FileList;
  questionPaperFileName: string;
  questionPapercvFile: string | Blob;
  questionPaperMessage: string;

  constructor(private route: ActivatedRoute,
    public dialog: MatDialog,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddQuestionPaper>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.printObj = data.pageValue;
    this.questionPaperFileName = "No File Chosen";

  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    this.addQuestionPaperFormBuilder();

  }

  addQuestionPaperFormBuilder() {
    this.addQuestionPaperForm = this.fb.group({
      category: [null, [Validators.required]],
      course: [null, [Validators.required]],
      questionPaperTitle: [null, [Validators.required]],
      duration: [null, [Validators.required]],
      maxMarks: [null, [Validators.required]],
      questionPaper: ''
    });
  }


  addQuestionPaperFormSubmit() {
    console.log(this.addQuestionPaperForm.value);
  }

  // for Question Paper file starts
  getQuestionPaperFile(questionPaperUpload: HTMLInputElement, event: any) {
    this.questionPaperFile = questionPaperUpload.files;
    if (this.questionPaperFile.length === 0)
      return;
    const questionPaperName = event.target.files[0].name;
    let mimeType = this.questionPaperFile[0].type;
    if (mimeType.match(/application\/pdf/) == null) {
      this.questionPaperMessage = "Only pdf files are supported.";
      this.questionPaperFileName = "No File Chosen";
      return;
    } else {
      this.questionPaperMessage = null;
      this.questionPaperFileName = questionPaperName;
      // var form_data = new FormData();
      this.questionPapercvFile = event.target.files[0];
      // this.saveAgreementFile();
      // form_data.append("file", event.target.files[0]);
      // this.thyroidcvFile = event.target.files[0];
    }
  }

  reset() {
    this.questionPaperFileName = "No File Chosen";
  }

  close() {
    this.dialogRef.close();
  }
}
//Add QuestionPaper ends Here

//editquestionpaper Starts Here
@Component({
  selector: "editquestionpaper",
  templateUrl: "editquestionpaper.html",
  styleUrls: ["./uploadquestionpaper.component.scss"],
})
export class EditQuestionPaper {


  printObj;
  editQuestionPaperForm: FormGroup;

   // Upload Question files
   questionPaperFile: FileList;
   questionPaperFileName: string;
   questionPapercvFile: string | Blob;
   questionPaperMessage: string;

  constructor(private route: ActivatedRoute,
    public dialog: MatDialog,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditQuestionPaper>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.printObj = data.pageValue;
    this.questionPaperFileName = "No File Chosen";

  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    this.editQuestionPaperFormBuilder();

  }
  editQuestionPaperFormBuilder() {
    this.editQuestionPaperForm = this.fb.group({
      category: [null, [Validators.required]],
      course: [null, [Validators.required]],
      questionPaperTitle: [null, [Validators.required]],
      duration: [null, [Validators.required]],
      maxMarks: [null, [Validators.required]],
      questionPaper: ''
    });
  }


  editQuestionPaperFormSubmit() {
    console.log(this.editQuestionPaperForm.value);
  }

  // for Question Paper file starts
  getQuestionPaperFile(questionPaperUpload: HTMLInputElement, event: any) {
    this.questionPaperFile = questionPaperUpload.files;
    if (this.questionPaperFile.length === 0)
      return;
    const questionPaperName = event.target.files[0].name;
    let mimeType = this.questionPaperFile[0].type;
    if (mimeType.match(/application\/pdf/) == null) {
      this.questionPaperMessage = "Only pdf files are supported.";
      this.questionPaperFileName = "No File Chosen";
      return;
    } else {
      this.questionPaperMessage = null;
      this.questionPaperFileName = questionPaperName;
      // var form_data = new FormData();
      this.questionPapercvFile = event.target.files[0];
      // this.saveAgreementFile();
      // form_data.append("file", event.target.files[0]);
      // this.thyroidcvFile = event.target.files[0];
    }
  }

  reset() {
    this.questionPaperFileName = "No File Chosen";
  }

  close() {
    this.dialogRef.close();
  }
}
//editquestionpaper ends Here
