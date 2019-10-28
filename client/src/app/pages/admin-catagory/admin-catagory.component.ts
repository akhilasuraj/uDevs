import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/user/authentication.service';

@Component({
  selector: 'app-admin-catagory',
  templateUrl: './admin-catagory.component.html',
  styleUrls: ['./admin-catagory.component.css']
})
export class AdminCatagoryComponent implements OnInit {
  type:string
  constructor(private route: ActivatedRoute,private auth: AuthenticationService) { }

  ngOnInit() {

    
    this.route.params.subscribe(params=>{
      this.type=params['type'];
    });
  }


  logout() {
    if(window.confirm("Do you want to logout")){
    this.auth.logout()
    }
  }

}
