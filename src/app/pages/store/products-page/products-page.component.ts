import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { Produto } from 'src/app/models/produto.model';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {
  public produtos$: Observable<Produto[]>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.carregarProdutos();
  }

  carregarProdutos() {
    this.produtos$ =  this.dataService.getProdutcs();
  }

}
