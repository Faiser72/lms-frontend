import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatSnackBar, MatDialog } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courseapproved',
  templateUrl: './courseapproved.component.html',
  styleUrls: ['./courseapproved.component.scss']
})
export class CourseapprovedComponent implements OnInit {

  dataSource: any;
  displayedColumns: string[] = [
    "courseenrolled",
    "enrolleddate",
    "status",
    "approveddate",
    // "action"
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

}
