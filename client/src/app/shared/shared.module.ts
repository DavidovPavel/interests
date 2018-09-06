import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { TopComponent } from './top/top.component';
import { MainComponent } from './main/main.component';
import { TagCloudModule } from 'angular-tag-cloud-module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    TagCloudModule,
  ],
  exports: [MaterialModule, TopComponent, MainComponent],
  declarations: [TopComponent, MainComponent]
})
export class SharedModule { }
