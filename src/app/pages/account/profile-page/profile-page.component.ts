import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
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
          Validators.maxLength(80),
          Validators.required
      ])],
      documento: [{ value: '', disabled: true }],
      email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])]
    });
   }

  ngOnInit() {
    this.obterDadosUsuario();
  }

  obterDadosUsuario () {
    this.isBusy = true;
    this
      .userService
      .getProfile()
      .subscribe(
        (data: any) => {
          this.isBusy = false;
          this.form.patchValue({
            nome: data.nome,
            documento: data.documento,
            email: data.email
          });
        },
        (err) => {
          this.isBusy = false;
          this.toastr.error(err);
        }
      )

  }

  atualizarDadosUsuario() {
    this.isBusy = true;
    this
      .userService
      .updateProfile(this.form.value)
      .subscribe(
        (data: any) => {
          this.isBusy = false;

        },
        (err) => {
          this.isBusy = false;
          
        }
      )
  }

}
