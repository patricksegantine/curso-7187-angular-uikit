import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {
  public form: FormGroup;
  public isBusy = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService,
    private toastr: ToastrService
  ) { 
    this.form = this.fb.group({
      nome: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required
      ])],
      documento: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required
      ])],
      email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      senha: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required
      ])]
    });
  }

  ngOnInit() {

  }

  registrar() {
    this.isBusy = true;
    this
      .userService
      .create(this.form.value)
      .subscribe(
        (data: any) => {
          this.isBusy = false;
          this.toastr.success(data.message, "Bem-vindo!");
          this.router.navigate(['/']);
        },
        (err) => {
          console.log(err);
          this.isBusy = false;
        }
      );
  }
}
