import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-verify-forgotpwd',
  templateUrl: './verify-forgotpwd.component.html',
  styleUrls: ['./verify-forgotpwd.component.css']
})
export class VerifyForgotpwdComponent implements OnInit {

  constructor(private route: ActivatedRoute,private auth: AuthenticationService,private router: Router) { }

  verify_details={
    verify_key : ''
  }

  show = false

  credentials={
    email:'',
    password: '',
  };

  confirm_password:string = ''

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      this.verify_details.verify_key = params['verifyKey']
    });

    this.auth.verifyEmail(this.verify_details).subscribe(
      user=>{
        this.show = true
      }
    )
  }

  checkMatch(){
    if(this.credentials.password!=this.confirm_password){
      return true;
    }else{
      return false;
    }
  }

  newPassword(){

    this.route.queryParams.subscribe(params => {
      this.credentials.email = params['email']
    });

    

    this.auth.newPassword(this.credentials).subscribe(
      user=>{
        this.router.navigateByUrl('/')
      }
    )

  }

}
