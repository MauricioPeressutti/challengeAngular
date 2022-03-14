import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  productFormGroup: any;

  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.productFormGroup = this.fb.group({
      nameCtrl: ['', Validators.required],
      currencyCtrl: ['', Validators.required],
      priceCtrl: ['', Validators.required],
      fileCtrl:[[],]
    });
  }

  addProduct(){
    
    if(this.productFormGroup.valid){
      this._snackBar.open('No se encotro http://localhost:3000/addproduct' , 'Cerrar')
    }else{
      this._snackBar.open('Complete los campos del formulario' , 'Cerrar')
    }
  }

  //   {
  //     "SKU": "2342232",
  //     "code": 1203,
  //     "name": "Manzana Verde",
  //     "description": "Cajón Manzana verde - 20kg",
  //     "pictures": [
  //         "http://placekitten.com/200/200"
  //     ],
  //     "price": 92,
  //     "currency": ".s/",
  //     "__v": 0
  // }

}
