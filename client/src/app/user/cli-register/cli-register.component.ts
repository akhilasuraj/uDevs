import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload, userID } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cli-register',
  templateUrl: './cli-register.component.html',
  styleUrls: ['./cli-register.component.css']
})
export class CliRegisterComponent implements OnInit {
  ngOnInit() {}

  marked = true

  credentials: TokenPayload = {
    id: 0,
    first_name: '',
    last_name: '',
    user_type:'Client',
    email: '',
    password: '',
    gender: '',
    contact_no:'',
    profile_img: '',
    isActivated: false
  };

  confirm_password:string = ''

  constructor(private auth: AuthenticationService, private router: Router) {}

  register() {
          this.auth.cli_register(this.credentials).subscribe(
            () => {
              this.marked = false
              this.auth.sendEmail(this.credentials).subscribe(
                msg =>{
                  console.log(msg)
                }
              )  
            },
            err => {
              console.error(err);
            }
          );

          
  }

  checkMatch(){
    if(this.credentials.password!=this.confirm_password){
      return true;
    }else{
      return false;
    }
  }



}
