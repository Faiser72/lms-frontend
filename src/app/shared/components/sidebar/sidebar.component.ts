import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {


  currentUserAvatar;
  currentUserName;
  placeholder_path: string = "assets/imgs/student.png";
  userId: any;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }


  /* for submenu Start here... */
  showSubmenu: boolean = false;


  toggleSubmenu(submenu: string) {
    let element = document.getElementById(submenu);
    if (element.style.display == '' || element.style.display == 'none') {
      element.style.display = 'block';
    }
    else {
      element.style.display = 'none';
    }
  }

  /* Ends here. */

}
