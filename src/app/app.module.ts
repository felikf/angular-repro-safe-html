import { registerLocaleData } from '@angular/common';
import localeCsExtra from '@angular/common/locales/extra/cs';
import localeCs from '@angular/common/locales/cs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { routing } from './app.routing';

registerLocaleData(localeCs, 'cs', localeCsExtra);

// with cache buster - https://github.com/ngx-translate/http-loader/issues/25
const httpLoaderFactory = (http: HttpClient) => new TranslateHttpLoader(http, './assets/i18n/', `.json?cb=${new Date().getTime()}`);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    routing,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'cs' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private readonly translate: TranslateService) {
    translate.setDefaultLang('cz');
  }
}
