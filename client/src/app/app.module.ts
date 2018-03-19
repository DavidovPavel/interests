import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ApiService } from './api.service';
import { InterestsComponent } from './interests/interests.component';
import { InteresComponent } from './interests/interes/interes.component';

const routes: Routes = [
  { path: '', redirectTo: '/interests', pathMatch: 'full' },
  { path: 'interests', component: InterestsComponent },
  { path: 'interests/:id', component: InteresComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [AppComponent, NotFoundComponent, InterestsComponent, InteresComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
