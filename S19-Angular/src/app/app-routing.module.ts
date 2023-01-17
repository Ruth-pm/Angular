import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './Pages/inicio/inicio.component';
import { NoticiasComponent } from './Pages/noticias/noticias.component';
import { PeliculasComponent } from './Pages/peliculas/peliculas.component';
import { EstrenosComponent } from './Pages/estrenos/estrenos.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'inicio'
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'noticias',
    component: NoticiasComponent
  },
  // {
  //   path: 'peliculas/:id',
  //   component: PeliculasComponent
  // },
  {
    path: 'peliculas',
    component: PeliculasComponent
  },
  {
    path: 'estrenos',
    component: EstrenosComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
