import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatSnackBar } from '@angular/material';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-managequestion',
  templateUrl: './managequestion.component.html',
  styleUrls: ['./managequestion.component.scss']
})
export class ManagequestionComponent implements OnInit {

  dataSource: any;
  displayedColumns: string[] = [
    "session",
    "question",
    "questionType",
    "answerType",
    "action"
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

  routeToAddQuestion() {
    this.route.navigate(['/home/addquestion'])
  }

  routeToEditQuestion(){
    this.route.navigate(['/home/editquestion'])
  }
}