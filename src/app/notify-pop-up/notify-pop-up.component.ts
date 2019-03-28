import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'notify-pop-up',
  templateUrl: './notify-pop-up.component.html',
  styleUrls: ['./notify-pop-up.component.sass']
})
export class NotifyPopUpComponent implements OnInit {
  record = {
  	name: 'Anusha',
	summary: 'Anusha',
	custId: 'Anusha',
	number: 'Anusha',
	status: 'Anusha',
	isAlive: 'Anusha'
  }
  constructor() { }

  ngOnInit() {
  }

  saveNotification(form) {
  	console.log(form)
  }

}
