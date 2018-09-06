import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagCloudModule } from 'angular-tag-cloud-module';

import { PagesRouterModule } from './router/router.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { InterestsComponent } from './interests/interests.component';
import { InteresComponent } from './interests/interes/interes.component';
import { AddComponent } from './add.component';

@NgModule({
  imports: [CommonModule, PagesRouterModule, TagCloudModule],
  declarations: [HomeComponent, NotFoundComponent, InterestsComponent, InteresComponent, AddComponent],
})
export class PagesModule {}
