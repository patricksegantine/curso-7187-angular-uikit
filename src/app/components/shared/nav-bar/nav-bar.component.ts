import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { Security } from 'src/app/shared/utils/security.util';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public usuario: Usuario;

  constructor(private router: Router) { }

  ngOnInit() {
    this.usuario = Security.getUser();
  }

  logout() {
    Security.clear();
    this.router.navigate(['/login']);
  }
}
