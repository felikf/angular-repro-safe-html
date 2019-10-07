import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { Test2Component } from './test2/test2.component';

@NgModule({
  declarations: [
    AppComponent,
    Test2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    routing
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'cs' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
