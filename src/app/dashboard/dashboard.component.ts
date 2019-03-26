import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  data = [{companyName:'company1',phoneNumber: 9876543210,description: 'desc1',otherInfo: 'Other Information'}];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  goTo(path){
    this.router.navigate(["/"+path]);
  }
}
