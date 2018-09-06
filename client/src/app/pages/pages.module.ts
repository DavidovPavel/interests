import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRouterModule } from './router/router.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { InterestsComponent } from './interests/interests.component';
import { InteresComponent } from './interests/interes/interes.component';


@NgModule({
  imports: [CommonModule, PagesRouterModule],
  declarations: [HomeComponent, NotFoundComponent, InterestsComponent, InteresComponent],
})
export class PagesModule {}
