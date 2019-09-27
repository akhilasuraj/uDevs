import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {

  constructor(private route: ActivatedRoute,private auth: AuthenticationService,private router: Router) { }

  verify_details={
    verify_key : ''
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.verify_details.verify_key = params['verifyKey']
    });

    this.auth.verifyEmail(this.verify_details).subscribe(
      user=>{
        this.router.navigateByUrl('/')
      }
    )

    
  }

}
