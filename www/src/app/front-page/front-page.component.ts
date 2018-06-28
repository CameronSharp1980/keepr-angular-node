import { Component, OnInit } from '@angular/core';
import { keepService } from '../shared/keep/keep.service';
import { Ikeep } from '../shared/keep/keep';

@Component({
  selector: 'keepr-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {
  //setup service to pull in from database and replace mock data
  allKeeps: Ikeep[];
  errorMessage: string;

  constructor(private _keepService: keepService) { }

  ngOnInit() {
    this._keepService.getKeeps().subscribe(keeps => {
      this.allKeeps = keeps
      //Add code for initializing the initial state of search results here after getting all keeps
    },
      error => this.errorMessage = <any>error);
  }

}
