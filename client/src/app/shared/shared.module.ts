import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { TopComponent } from './top/top.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule
    ],
  exports: [MaterialModule, ReactiveFormsModule, TopComponent],
  declarations: [TopComponent]
})
export class SharedModule { }
