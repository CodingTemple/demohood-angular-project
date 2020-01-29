import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private authserv:AuthService) { }

  showUserData(){
    console.log(this.authserv.getUserInfo())
    console.log(this.authserv.getCurrentUser())
  }

  ngOnInit() {
  }

}
