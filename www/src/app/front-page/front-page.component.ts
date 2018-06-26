import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'keepr-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {
  //setup service to pull in from database and replace mock data
  mockData: any[] = [
    {
      title: "Title 1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis dapibus mi nec sagittis. Nulla ullamcorper metus eget placerat luctus. Nullam pulvinar est at est lacinia bibendum. Curabitur feugiat felis.",
      imageUrl: "//placehold.it/100x100",
      tags: "1, 2, 3, 4, 5"
    },
    {
      title: "Title 2",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis dapibus mi nec sagittis. Nulla ullamcorper metus eget placerat luctus. Nullam pulvinar est at est lacinia bibendum. Curabitur feugiat felis.",
      imageUrl: "//placehold.it/200x200",
      tags: "1, 2, 3, 4, 5"
    },
    {
      title: "Title 3",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis dapibus mi nec sagittis. Nulla ullamcorper metus eget placerat luctus. Nullam pulvinar est at est lacinia bibendum. Curabitur feugiat felis.",
      imageUrl: "//placehold.it/300x300",
      tags: "1, 2, 3, 4, 5"
    },
    {
      title: "Title 4",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis dapibus mi nec sagittis. Nulla ullamcorper metus eget placerat luctus. Nullam pulvinar est at est lacinia bibendum. Curabitur feugiat felis.",
      imageUrl: "//placehold.it/400x400",
      tags: "1, 2, 3, 4, 5"
    },
    {
      title: "Title 5",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis dapibus mi nec sagittis. Nulla ullamcorper metus eget placerat luctus. Nullam pulvinar est at est lacinia bibendum. Curabitur feugiat felis.",
      imageUrl: "//placehold.it/500x500",
      tags: "1, 2, 3, 4, 5"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
