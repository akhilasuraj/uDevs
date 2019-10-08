import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AuthenticationService } from 'src/app/user/authentication.service';
import { Router } from '@angular/router';
import { Url } from 'url';


declare let paypal: any;

@Component({
  selector: 'app-dev-competition',
  templateUrl: './dev-competition.component.html',
  styleUrls: ['./dev-competition.component.css']
})
export class DevCompetitionComponent implements OnInit {

  constructor(private http: HttpClient, private auth: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  addScript: boolean = false;
  paypalLoad: boolean = true;
  
  finalAmount: number = 1;
 
  paypalConfig = {
    env: 'sandbox',
    client: {
      sandbox: 'Af8Sy1dWqC2jpYFk15zomB6IXHSqwOTf5en_Q2vSJfATs_uiTIfBw6NYqAUjTnwQytHMdTzGvdoWYsrR',
      production: '<your-production-key here>'
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            { amount: { total: this.finalAmount, currency: 'USD' } }
          ]
        }
      });
    },
    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) => {
        //Do something when payment is successful.
      })
    }
  };
 
  ngAfterViewChecked(): void {
    if (!this.addScript) {
      this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
        this.paypalLoad = false;
      })
    }
  }
  
  addPaypalScript() {
    this.addScript = true;
    return new Promise((resolve, reject) => {
      let scripttagElement = document.createElement('script');    
      scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement);
    })
  }

}


