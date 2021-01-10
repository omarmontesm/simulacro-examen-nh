import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book-short-detail',
  templateUrl: './book-short-detail.component.html',
  styleUrls: ['./book-short-detail.component.scss']
})
export class BookShortDetailComponent implements OnInit {

  @Input() book;
  constructor() { }

  ngOnInit(): void {
  }

}
