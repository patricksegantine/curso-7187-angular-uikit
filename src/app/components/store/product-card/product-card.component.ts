import { Component, OnInit, Input } from '@angular/core';
import { Produto } from 'src/app/models/produto.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() produto: Produto;

  constructor() { }

  ngOnInit() {
  }

}
