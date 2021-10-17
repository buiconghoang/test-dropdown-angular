import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'savequery';

  queryList = [
    {
      "name": "query 1",
      "content": "content 1"
    },
    {
      "name": "query 2",
      "content": "content 1"
    },
    {
      "name": "query 3",
      "content": "content 1"
    },
    {
      "name": "query 4",
      "content": "content 1"
    },
    {
      "name": "query 5",
      "content": "content 1"
    },

    {
      "name": "query 6",
      "content": "content 1"
    },
    {
      "name": "query 7",
      "content": "content 1"
    },
    {
      "name": "query 8",
      "content": "content 1"
    },
    {
      "name": "query 8",
      "content": "content 1"
    },  {
      "name": "query 8",
      "content": "content 1"
    },  {
      "name": "query 8",
      "content": "content 1"
    },  {
      "name": "query 8",
      "content": "content 1"
    },  {
      "name": "query 8",
      "content": "content 1"
    },
  ]

  clickMenu(event: any) {
    console.log(event)
  }
}
