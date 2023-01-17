import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/models/movie';


@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit{

  movieId: string | null = null;
  movies: Movie[] = [];
  
  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.movieId = params.get('id')
      console.log(this.movieId)
    })
    this.movies = this.moviesService.getAllMovies()
    if (this.movieId){
      console.log(this.moviesService.getMovieById(this.movieId))
    }
  }
}
