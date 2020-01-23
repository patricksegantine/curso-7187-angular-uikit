import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Produto } from '../models/produto.model';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private url = environment.variables.api;

    constructor(private http: HttpClient) {
        
    }

    getProdutcs() {
        return this.http.get<Produto[]>(`${this.url}/products`);
    }

    
}