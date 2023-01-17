import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { InicioComponent } from './Pages/inicio/inicio.component';
import { PeliculasComponent } from './Pages/peliculas/peliculas.component';
import { NoticiasComponent } from './Pages/noticias/noticias.component';
import { EstrenosComponent } from './Pages/estrenos/estrenos.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './Pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    InicioComponent,
    PeliculasComponent,
    NoticiasComponent,
    EstrenosComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
