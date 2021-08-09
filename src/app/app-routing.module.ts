import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module')
      .then(module => module.HomeModule)
  },
  {
    path: 'docs',
    loadChildren: () => import('./docs/docs.module')
      .then(module => module.DocsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
