import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { BrowserModule } from '@angular/platform-browser';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';





@NgModule({
  declarations: [
    ListComponent,
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
