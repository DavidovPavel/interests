import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';

import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';


import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { PagesModule } from './pages/pages.module';
import { AngularFireAuthModule } from 'angularfire2/auth';

registerLocaleData(localeRu, 'ru');

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    BrowserAnimationsModule,
    CoreModule,
    PagesModule,
    SharedModule,
    RouterModule.forRoot([]),
  ],
  exports: [RouterModule, AngularFireModule, AngularFireAuthModule],
  providers: [{ provide: LOCALE_ID, useValue: 'ru' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
