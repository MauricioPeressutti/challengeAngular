import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { BrowserModule } from '@angular/platform-browser';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import { ProductComponent } from './list/product/product.component';





@NgModule({
  declarations: [
    ListComponent,
    ProductComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MatTabsModule,
    MatButtonModule
  ],
  exports:[
    ListComponent,
  ]
})
export class ItemsModule { }
