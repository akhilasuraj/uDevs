import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials: TokenPayload = {
    id: 0,
    first_name: '',
    last_name: '',
    user_type:'',
    email: '',
    password: '',
    gender: '',
    contact_no:'',
    profile_img: '',
    isActivated: true
  }

  marked1 = false
  marked2 = false
  marked3 = true

  constructor(private auth: AuthenticationService, private router: Router) {}

  ngOnInit() {
    
    window.localStorage.removeItem('usertoken')
  }

  login() {
   
    this.auth.login(this.credentials).subscribe(
     user => {
        if(this.auth.getUserDetails().user_type == 'Developer')
          this.router.navigateByUrl('/devCatagory/profile')
        else  if(this.auth.getUserDetails().user_type == 'Client')
          this.router.navigateByUrl('/cliCatagory/profile')
        else  if(this.auth.getUserDetails().user_type == 'Admin')
          this.router.navigateByUrl('/adminCatagory/home')
        else
         window.alert(user.error.text)
    },
      err => {
        window.alert(err.error.text)
      }
    ) 
  }


  close(){
    this.marked3 = true
    this.marked1 = false
    this.marked2 = false
  }

  emailDetails={
    email: ''
  }

  forgotPassword(){

    this.emailDetails.email = this.credentials.email
    
    this.auth.forgotPassword(this.emailDetails).subscribe(
      res=>{
        
      }
    )
  }


}
