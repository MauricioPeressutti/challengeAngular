import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: any = {};
  constructor(
    private loginService: LoginService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  login(){
    this.loginService.login(this.user).subscribe((response:any)=>{
      if(response){
        localStorage.setItem('currentToken' , response.token)
        this.router.navigate(['list']);
      }
    },(error: any)  =>{
      if(error.status == 400){
        this._snackBar.open(error.error.msg ? error.error.msg : 'Error al logear' , 'Cerrar')
      }else{
        this._snackBar.open('Error')
      }
    })
  }
}
