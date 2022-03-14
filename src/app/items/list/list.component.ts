import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import {ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';

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
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getProducts()
  }


  getProducts(){
    this.productService.getProducts().subscribe((response:any)=>{
      if(response){
        this.productsList = response;
        this.loadListOfProducts(5);
      }
    })
  }

  addMoreElementoToList(loadNumber:number){
    
    loadNumber = loadNumber + this.aux
    let array = this.productsList.slice(this.aux,loadNumber)
    
    this.productsListAux.push.apply(this.productsListAux,array)
    this.aux =  loadNumber; 
  }

  loadListOfProducts(loadNumber: number){
    this.productsListAux = this.productsList.slice(this.aux,loadNumber)
    this.aux = this.aux + loadNumber; 
    }


    addTab( obj:any) {
      this.tabs.push(obj);
      
    }
  
    removeTab(index: number) {
      this.tabs.splice(index, 1);
    }
  


    onClick(product:any){
      this.addTab(product)
    }

    toForm(){
      this.router.navigate(['addProduct']);
    }
}
