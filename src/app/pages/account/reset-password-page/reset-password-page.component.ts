import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-reset-password-page',
  templateUrl: './reset-password-page.component.html',
  styleUrls: ['./reset-password-page.component.css']
})
export class ResetPasswordPageComponent implements OnInit {
  public form: FormGroup;
  public isBusy: boolean;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService,
    private toastr: ToastrService
  ) {
    this.form = this.fb.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])]
    });
  }

  ngOnInit() {
  }

  submit() {
    this.isBusy = true;
    this
      .userService
      .resetPassword(this.form.value)
      .subscribe(
        (data: any) => {
          this.isBusy = false;
          this.toastr.success(data.message, 'Senha restaurada');
          this.router.navigate(['/login']);
        },
        (err) => {
          this.toastr.error(err.message);
          this.isBusy = false;
        }
      );
  }
}
