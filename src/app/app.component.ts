import { Component } from '@angular/core';
import { PwnedService } from "./pwned.service";
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public breached: any = [];
  public inMails: String = "";
  public inMailsParsed: any[];

  constructor(private pwnedService: PwnedService) { }

  parseTextArea() {
     this.inMailsParsed = this.inMails.split(", ");
  }

  searchHIBP() {
    this.breached = [];
    this.pwnedService.getBreached(this.inMailsParsed)
      .subscribe(
        data => {
          this.breached.push(data);
        },
        error => {
          console.log(error);
        }
      );
  }
}
