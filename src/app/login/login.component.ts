import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {Router} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  users=[{name:'Admin',type:'admin'},{name:'Employee',type:'emp'},{name:'Lead',type:'lead'}]
  userName:string;
  userType:string;
  password:string;
  constructor(private router: Router, private cookieService: CookieService) {
  }

  ngOnInit() {
  }
  logIn() {
  	let success = true;
  	if(success) {
  		this.cookieService.set('userName', this.userName);
  		this.cookieService.set('usetType', this.userType);
      this.router.navigate(["/dashboard"]);
  	}
  }
}
