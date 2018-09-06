import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { TopComponent } from './top/top.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule
    ],
  exports: [MaterialModule, TopComponent],
  declarations: [TopComponent]
})
export class SharedModule { }
