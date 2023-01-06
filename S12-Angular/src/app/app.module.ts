import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactTemplateComponent } from './contact-template/contact-template.component';
import { ContactReactiveComponent } from './contact-reactive/contact-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactTemplateComponent,
    ContactReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
