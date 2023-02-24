import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { login, signup } from '../data';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SellerService {
  isSellerLoggedIn = new BehaviorSubject<boolean>(false)
  isLoginError=new EventEmitter<boolean>(false)

  constructor(private http: HttpClient, private router: Router) { }
  usersignup(data: signup) {
    this.http.post("http://localhost:3000/seller", data, { observe: 'response' }).subscribe((result) => {
      console.log(result)
        if(result){

    localStorage.setItem('seller', JSON.stringify(result.body))
      this.router.navigate(['seller-home'])
      }
    })
  }

  reloadSeller() {
    if (localStorage.getItem('seller')) {
      this.isSellerLoggedIn.next(true)
      this.router.navigate(['seller-home'])
    }
  }
  userlogin(data: login) {
    console.log(data)
    //api call code will be

    this.http.get('http://localhost:3000/seller?email= ${data.email}&password=${data.password} ',
    { observe: 'response' }
    ).subscribe((result:any)=>{
      console.log(result)
      if(result && result.body && result.body.length){
        console.log("user Logged in")
        localStorage.setItem('seller', JSON.stringify(result.body))
      this.router.navigate(['seller-home'])
      } else{
        console.log("loging failed")
        this.isLoginError.emit(true)
      }
    })
   
  }

  }
