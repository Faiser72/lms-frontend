import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator, MatSort, MatSnackBar, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-managecategory',
  templateUrl: './managecategory.component.html',
  styleUrls: ['./managecategory.component.scss']
})
export class ManagecategoryComponent implements OnInit {

  dataSource: any;
  displayedColumns: string[] = [
    "name",
    "description",
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

  //for Add Category popup Starts here
  openAddCategoryDialog(): void {
    var printObj = {

    }
    const dialogRef = this.dialog.open(AddCategory, {
      width: "450px",
      height: "500px",
      data: { pageValue: printObj }
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
    });
  }
  //for Add Category popup ends here

  //for Edit Category popup Starts here
  openEditCategoryDialog(): void {
    var printObj = {

    }
    const dialogRef = this.dialog.open(EditCategory, {
      width: "450px",
      height: "500px",
      data: { pageValue: printObj }
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
    });
  }
  //for Edit Category popup ends here

}

//Add Category Starts Here
@Component({
  selector: "addcategory",
  templateUrl: "addcategory.html",
  styleUrls: ["./managecategory.component.scss"],
})
export class AddCategory {


  printObj;
  addCategoryForm: FormGroup;

  constructor(private route: ActivatedRoute,
    public dialog: MatDialog,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddCategory>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.printObj = data.pageValue;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    this.addCategoryFormBuilder();

  }
  addCategoryFormBuilder() {
    this.addCategoryForm = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      description: [null, [Validators.required, Validators.minLength(3)]],
    });
  }


  addCategoryFormSubmit() {
    console.log(this.addCategoryForm.value);
  }

  close() {
    this.dialogRef.close();
  }
}
//Add Category ends Here


//Edit Category Starts Here
@Component({
  selector: "editcategory",
  templateUrl: "editcategory.html",
  styleUrls: ["./managecategory.component.scss"],
})
export class EditCategory {


  printObj;
  editCategoryForm: FormGroup;

  constructor(private route: ActivatedRoute,
    public dialog: MatDialog,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditCategory>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.printObj = data.pageValue;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    this.editCategoryFormBuilder();

  }
  editCategoryFormBuilder() {
    this.editCategoryForm = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      description: [null, [Validators.required, Validators.minLength(3)]],
    });
  }


  editCategoryFormSubmit() {
    console.log(this.editCategoryForm.value);
  }

  close() {
    this.dialogRef.close();
  }
}
//Edit Category ends Here

