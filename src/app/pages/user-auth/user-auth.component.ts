import { Component, OnInit } from '@angular/core';
import { login, signup } from 'src/app/data';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {
  showLogin:boolean=true
constructor(private users:UsersService){}

  signup(data:signup){
 this.users.usersign(data)
  }
 

   ngOnInit(): void {
     this.users.userreload()
   }
   login(data:login){
  this.users.userlogin(data)
   }
   opensignup(){
  this.showLogin=false
   }
   openlogin(){
this.showLogin=true
   }
  }

