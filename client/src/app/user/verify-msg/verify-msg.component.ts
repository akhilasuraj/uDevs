import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verify-msg',
  templateUrl: './verify-msg.component.html',
  styleUrls: ['./verify-msg.component.css']
})
export class VerifyMsgComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    if (window.localStorage) {
      if (!localStorage.getItem('firstLoad')) {
        localStorage['firstLoad'] = true;
        window.location.reload();
      }
      else
        localStorage.removeItem('firstLoad');
    }
  }

  

}
