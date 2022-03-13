import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListComponent implements OnInit {
  productsList: any[] = [];
  aux: number = 0;
  productsListAux: any[] = [];
  tabs: any[] = [];
  colorTab = 'primary';

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getProducts()
  }


  getProducts(){
    this.productService.getProducts().subscribe((response:any)=>{
      if(response){
        this.productsList = response;
        this.loadListOfProducts(3);
      }
    })
  }

  loadListOfProducts(loadNumber: number){
    this.productsListAux = this.productsList.slice(this.aux,loadNumber)
    this.aux = this.aux + loadNumber; 
    }


    addTab( obj:any) {
      this.tabs.push(obj.name);
      
    }
  
    removeTab(index: number) {
      this.tabs.splice(index, 1);
    }
  


    onClick(product:any){
      debugger
      this.addTab(product)
    }

    
}
