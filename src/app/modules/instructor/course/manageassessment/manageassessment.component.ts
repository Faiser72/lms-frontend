import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatSnackBar, MatDialog } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manageassessment',
  templateUrl: './manageassessment.component.html',
  styleUrls: ['./manageassessment.component.scss']
})
export class ManageassessmentComponent implements OnInit {

  dataSource: any;
  displayedColumns: string[] = [
    "name",
    "question",
    "user",
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

  routeToAddAssessment(){
    this.route.navigate(['createassessment'])
  }

  routeToDeleteUser(userDetails) {
  }


  routeToEditAssesment() {
    this.route.navigate(['editassessment'])
  }

}
