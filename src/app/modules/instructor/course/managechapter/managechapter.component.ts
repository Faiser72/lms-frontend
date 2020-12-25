import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatPaginator, MatSort, MatSnackBar, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-managechapter',
  templateUrl: './managechapter.component.html',
  styleUrls: ['./managechapter.component.scss']
})
export class ManagechapterComponent implements OnInit {

  dataSource: any;
  displayedColumns: string[] = [
    "chapter",
    "title",
    "description",
    "action"
  ];

  userDetailsList: any;
  courseName:any="multithreading";
  url: string = "../../../../../assets/videos/saiyaara.webm";
  urlSafe: SafeResourceUrl;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private route: Router,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
    public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
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

  //for AddChapter popup Starts here
  openAddChapterDialog(): void {
    var printObj = {

    }
    const dialogRef = this.dialog.open(AddChapter, {
      width: "1000px",
      // height: "600px",
      data: { pageValue: printObj }
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
    });
  }
  //for AddChapter popup ends here

  //for EditChapter popup Starts here
  openEditChapterDialog(): void {
    var printObj = {

    }
    const dialogRef = this.dialog.open(EditChapter, {
      width: "1000px",
      // height: "600px",
      data: { pageValue: printObj }
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
    });
  }
  //for EditChapter popup ends here

}

//addchapter Starts Here
@Component({
  selector: "addchapter",
  templateUrl: "addchapter.html",
  styleUrls: ["./managechapter.component.scss"],
})
export class AddChapter {


  printObj;
  addChapterForm: FormGroup;

  constructor(private route: ActivatedRoute,
    public dialog: MatDialog,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddChapter>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.printObj = data.pageValue;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    this.addChapterFormBuilder();

  }

  addChapterFormBuilder() {
    this.addChapterForm = this.fb.group({
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
      chapterNo: [null, [Validators.required]],
      duration: [null, [Validators.required]],
    });
  }


  addChapterFormSubmit() {
    console.log(this.addChapterForm.value);
  }

  close() {
    this.dialogRef.close();
  }
}
//Add Chapter ends Here

//editchapter Starts Here
@Component({
  selector: "editchapter",
  templateUrl: "editchapter.html",
  styleUrls: ["./managechapter.component.scss"],
})
export class EditChapter {


  printObj;
  editChapterForm: FormGroup;

  constructor(private route: ActivatedRoute,
    public dialog: MatDialog,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditChapter>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.printObj = data.pageValue;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    this.editChapterFormBuilder();

  }
  editChapterFormBuilder() {
    this.editChapterForm = this.fb.group({
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
      sessionNo: [null, [Validators.required]],
    });
  }


  editChapterFormSubmit() {
    console.log(this.editChapterForm.value);
  }

  close() {
    this.dialogRef.close();
  }
}
//Edit Chapter ends Here