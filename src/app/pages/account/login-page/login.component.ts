import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Security } from 'src/app/shared/utils/security.util';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginPageComponent implements OnInit {
  public form: FormGroup;
  public showLoading: boolean = false;

  constructor (
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.form = this.fb.group({
      username: ['', Validators.compose([
        Validators.minLength(3),
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required
      ])]
    });
  }

  ngOnInit() {
    const token = Security.getToken();
    if (token) {
      this.showLoading = true;
      this
        .userService
        .refreshToken()
        .subscribe(
          (data: any) => {
            this.showLoading = false;
            this.setUser(data.customer, data.token);
          },
          (err) => {
            Security.clear();
            this.showLoading = false;
          });
    }
  }

  login() {
    this.showLoading = true;
    this
      .userService
      .authenticate(this.form.value)
      .subscribe(
        (data: any) => {
          this.showLoading = false;
          this.setUser(data.customer, data.token);
        },
        (error) => {
          console.log(error);
        });
  }

  setUser(user, token) {
    Security.set(user, token);
    this.router.navigate(['/']);
  }

}
