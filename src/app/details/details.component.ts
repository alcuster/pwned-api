import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'account-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  @Input() public account: Array<any>;
  constructor() { }

  ngOnInit() {
  }

}
