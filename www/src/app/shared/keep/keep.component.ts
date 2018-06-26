import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'keep',
  templateUrl: './keep.component.html',
  styleUrls: ['./keep.component.css']
})
export class KeepComponent implements OnInit {

  @Input() keepData: any;

  constructor() { }

  ngOnInit() {
  }

}
