import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book-container',
  templateUrl: './book-container.component.html',
  styleUrls: ['./book-container.component.scss']
})
export class BookContainerComponent implements OnInit {

  @Input() typeShow: 'all' | 'featured' = 'all';
  books = [];
  constructor() { }

  ngOnInit(): void {
  }

}
