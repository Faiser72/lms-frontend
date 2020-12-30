import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatSnackBar, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { AddQuestionBank, EditQuestionBank } from '../../question/questionbank/questionbank.component';

@Component({
  selector: 'app-testlist',
  templateUrl: './testlist.component.html',
  styleUrls: ['./testlist.component.scss']
})
export class TestlistComponent implements OnInit {

  dataSource: any;
  displayedColumns: string[] = [
    "courseName",
    "testName",
    "maxScore",
    "registrants",
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

  routeToEditTest(){
    this.route.navigate(['/edittest'])
  }

  routeToCreateTest(){
    this.route.navigate(['/createtest'])
  }
}