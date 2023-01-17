import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  movies: Movie[] =[
    {
      id: '1',
      img: "https://cuevana3.nu/wp-content/uploads/2023/01/rHyB15bJiZKZUR6ZNgvcUxy9pVq-200x300.jpg",
      title: 'Avatar: El camino del agua',
      description: 'La historia de la familia Sully (Jake, Neytiri y sus hijos), los problemas que les persiguen, lo que hacen para mantenerse a salvo, las batallas que libran para seguir vivos y las tragedias que soportan.',
      genero: 'Acción, Aventura, Ciencia ficción',
    },
    {
      id: '2',
      img: "https://cuevana3.nu/wp-content/uploads/2022/12/emancipacion-4K-3-200x300.jpg",
      title: 'Emancipación',
      description: 'Inspirada en la conmovedora historia real de un hombre dispuesto a cualquier cosa por su familia, y por la libertad. Peter, arriesga su vida por escapar y regresar con su familia, se embarca en una peligrosa travesía de amor y resiliencia.',
      genero: '4K UHD, Acción, Drama, Historia, Suspenso',
    },
    {
      id: '3',
      img: "https://cuevana3.nu/wp-content/uploads/2022/12/gBBCBMXKzWRADtliUYfV69aVIcz-200x300.jpg",
      title: 'Huevitos Congelados',
      description: 'En esta nueva aventura Toto y su familia tendrán que viajar al Polo Sur para cumplir la promesa que le hace a su madre antes de morir; para lograrlo, tendrán que vencer algunos obstáculos que les enseñaran lo importante que es el trabajo en equipo.',
      genero: 'Animación, Aventura, Comedia',
    },
    {
      id: '4',
      img: "https://cuevana3.nu/wp-content/uploads/2022/12/dvjo3PsVWvMaI1gIBHGWKwQykgr-200x300.jpg",
      title: 'La Maldición',
      description: 'Un misterioso caso de asesinatos en serie tiene lugar por jaechaui (cadáveres que se han levantado de entre los muertos y pueden hablar). Pero estos cuerpos son manipulados por alguien.',
      genero: 'Misterio, Suspenso, Terror',
    }
  ]
  
  constructor() { }

  createMovie(movie: Movie){
    this.movies.push(movie)
  }

  getAllMovies(){
    return this.movies
  }

  getMovieById(id: string){
    return this.movies.find(movie => movie.id === id)
  }
}
