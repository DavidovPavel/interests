import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagCloudModule } from 'angular-tag-cloud-module';

import { PagesRouterModule } from './router.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { InterestComponent } from './interest/interest.component';

@NgModule({
  imports: [CommonModule, PagesRouterModule, TagCloudModule],
  declarations: [HomeComponent, NotFoundComponent, InterestComponent],
})
export class PagesModule {}
