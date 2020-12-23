import { NavigationExtras, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatSnackBar, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.scss']
})
export class ListuserComponent implements OnInit {

  dataSource: any;
  displayedColumns: string[] = [
    "slNo",
    "userName",
    "emailId",
    "primaryRoles",
    "role",
    "registerNo",
    "action"
  ];

  userDetailsList: any;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private route: Router,
    private _snackBar: MatSnackBar) { }

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
}
