import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { NotFoundComponent } from './pages/not-found/not-found.component';
import { InterestsComponent } from './pages/interests/interests.component';
import { InteresComponent } from './pages/interests/interes/interes.component';

import { TagCloudModule } from 'angular-tag-cloud-module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';


registerLocaleData(localeRu, 'ru');

const routes: Routes = [
  { path: '', redirectTo: '/interests', pathMatch: 'full' },
  { path: 'interests', component: InterestsComponent },
  { path: 'interests/:id', component: InteresComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [AppComponent, NotFoundComponent, InterestsComponent, InteresComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    TagCloudModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [{ provide: LOCALE_ID, useValue: 'ru' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
