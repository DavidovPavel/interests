import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagCloudModule } from 'angular-tag-cloud-module';
import { SharedModule } from '@app/shared/shared.module';

import { PagesRouterModule } from './router.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { InterestComponent } from './interest/interest.component';
import { ProfileComponent } from './profile/profile.component';
import { PostComponent } from './interest/post/post.component';
import { StarsComponent } from './interest/post/stars/stars.component';

@NgModule({
  imports: [CommonModule, PagesRouterModule, TagCloudModule, SharedModule],
  declarations: [HomeComponent, NotFoundComponent, InterestComponent, ProfileComponent, PostComponent, StarsComponent],
})
export class PagesModule {}
