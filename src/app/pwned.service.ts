import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PwnedService {

  constructor( private http: Http ) {}

  public getBreached(addresses): Observable<any> {
    const apiObservables = [];

    for (let i of addresses) {
      let newCall = this.http.get('https://haveibeenpwned.com/api/v2/breachedaccount/' + i)
          .map(res => {
                        let body;
                        if (res.text()) {
                          body = {
                            user: i,
                            data: res.json()
                          };
                        }

                        //strip anchor tags
                        for (let j of body.data) {
                          if (j.Description) {
                            let replacedText = (j.Description).replace(/(<([^>]+)>)/ig,"");
                            j.Description = replacedText;
                          }
                        }

                        //new field for the number of times an account appears in the registry
                        body.breachCount = body.data.length;

                        return body || {};
                      }
                )
          .catch(function ignoreError(error) {
            return Observable.empty(); //if an email isn't found, keep going
          })
          .delay(1500); //1500ms wait to avoid incurring rate limit overflow
      apiObservables.push(newCall);
    }
    return Observable.concat(...apiObservables); // '...' is a workaround to make concat accept an array of Observables
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Observable.throw(errMsg);
  }

}
