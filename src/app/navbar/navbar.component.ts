import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  @Output() gotoPath = new EventEmitter<string>();
  constructor(private router:Router) { }

  ngOnInit() {
    console.log()
  }
  goTo(path){
  	this.gotoPath.emit(path);
  }
  getActiveTab(path){
    return (path === this.router.routerState.snapshot.url);
  }
}
