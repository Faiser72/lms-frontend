import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatSnackBar } from '@angular/material';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-managemedia',
  templateUrl: './managemedia.component.html',
  styleUrls: ['./managemedia.component.scss']
})
export class ManagemediaComponent implements OnInit {

  dataSource: any;
  displayedColumns: string[] = [
    "type",
    "courseName",
    "size",
    "mediaType",
  ];

  userDetailsList: any;
  url: string = "../../../../../assets/videos/saiyaara.webm";
  urlSafe: SafeResourceUrl;


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private route: Router,
    private _snackBar: MatSnackBar,
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
}


