import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {Router, NavigationStart} from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  @Output() goto = new EventEmitter<string>();
  constructor(private router: Router, private cookieService: CookieService){
    router.events.subscribe(event => {
        if(event instanceof NavigationStart) {
          if(!(event.url == '/' || event.url == '/home' || event.url == '/login'))
            this.loginCheck();
        }
    })
  }
  loggeIn: boolean = false;
  userName: string = '';
  loginCheck() {
    if(this.cookieService.get('userName')) {
      this.loggeIn = true;
      this.userName = this.cookieService.get('userName');
    } else {
      this.logOut();
    }
  }
  ngOnInit() {
  }
  gotoPath(path,params) {
  	this.goto.emit(path);
  }
  logOut() {
    this.loggeIn = false;
    this.cookieService.delete('userName');
    this.cookieService.delete('userType');
    this.goto.emit('home');
  }
}
