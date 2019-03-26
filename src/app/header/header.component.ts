import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  @Output() goto = new EventEmitter<string>();
  constructor(private cookieService: CookieService) { }
  loggeIn: boolean = false;
  userName: string = '';
  ngOnInit() {
    if(this.cookieService.get('userName')) {
      this.loggeIn = true;
      this.userName = this.cookieService.get('userName');
    }
  }
  gotoPath(path,params) {
  	this.goto.emit(path);
  }
  logOut() {
    this.cookieService.delete('userName');
    this.cookieService.delete('userType');
    this.goto.emit('home');
    window.location.reload();
  }
}
