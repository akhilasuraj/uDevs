import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-verify-new-email',
  templateUrl: './verify-new-email.component.html',
  styleUrls: ['./verify-new-email.component.css']
})
export class VerifyNewEmailComponent implements OnInit {

  constructor(private route: ActivatedRoute,private auth: AuthenticationService,private router: Router) { }

  verify_details={
    id:0,
    email:'',
    verify_key : '',

  }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      this.verify_details.verify_key = params['verifyKey']
      this.verify_details.id = params['id']
      this.verify_details.email = params['email']
    });

    this.auth.updateEmail(this.verify_details).subscribe(
      user=>{
        this.router.navigateByUrl('/')
      }
    )
  }

}
