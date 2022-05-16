import { Component, OnInit } from '@angular/core';
import { IonicAuthService } from '../Services/ionic-auth.service';
@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.page.html',
  styleUrls: ['./verify-email.page.scss'],
})
export class VerifyEmailPage implements OnInit {
  public IonicAuthService: IonicAuthService 
  constructor() { 

  }

  ngOnInit() {
  }

}
