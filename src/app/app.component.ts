import { Component } from '@angular/core';
import { PwnedService } from "./pwned.service";
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public breached: any;
  public inMails: String;
  public inMailsParsed: String[];

  constructor(private pwnedService: PwnedService) {
    this.breached = [];
    this.inMails = "test@example.com";
    this.inMailsParsed = ["test@example.com"];
  }

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
