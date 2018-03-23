import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { InterestsComponent } from './interests/interests.component';
import { InteresComponent } from './interests/interes/interes.component';

import { ApiService } from './api.service';

import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';

registerLocaleData(localeRu, 'ru');

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
  providers: [ApiService, { provide: LOCALE_ID, useValue: 'ru' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
