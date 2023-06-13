import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  public authorized: boolean = false;

  users: Array<string> = [];

  constructor(public router:Router,
    private fs:FormBuilder,
    public usersService:UsersService) {
      this.formLogin=this.fs.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
      });
     }

  ngOnInit(): void {
  }

  login(){
    this.usersService.login(this.formLogin.value).subscribe((message) => {
      this.authorized = true;
      this.router.navigateByUrl('/home');
    })

  }
}
