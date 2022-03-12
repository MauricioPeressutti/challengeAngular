import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondListComponent } from './second-list/second-list.component';



@NgModule({
  declarations: [
    SecondListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SecondListComponent,
  ]
})
export class SecondItemsModule { }
