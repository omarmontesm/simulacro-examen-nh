import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBookPageComponent } from './pages/add-book-page/add-book-page.component';


const routes: Routes = [
  {
    path: 'add-book',
    component: AddBookPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
