import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pets-page',
  templateUrl: './pets-page.component.html',
  styleUrls: ['./pets-page.component.css']
})
export class PetsPageComponent implements OnInit {
  public isBusy: boolean;

  constructor(
    private dataService: DataService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }

}
