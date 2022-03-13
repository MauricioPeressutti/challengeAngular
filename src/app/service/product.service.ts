import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http : ApiService,
  ) { }


  getProducts(){
    return this.http.get('products');
  }

}
