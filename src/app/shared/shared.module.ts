import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookContainerComponent } from './components/book-container/book-container.component';
import { BookShortDetailComponent } from './components/book-short-detail/book-short-detail.component';



@NgModule({
  declarations: [
    BookContainerComponent,
    BookShortDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BookContainerComponent,
    BookShortDetailComponent
  ]
})
export class SharedModule { }
