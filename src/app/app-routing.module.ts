import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full',
  },
  {
    loadChildren: () => import('./pages/movies/movies.component').then((m) => m.MoviesComponent),
  },
  {
    path: 'movies/:id',
    loadChildren: () =>
      import('./pages/movie-details/movie-details.component').then((m) => m.MovieDetailsComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
