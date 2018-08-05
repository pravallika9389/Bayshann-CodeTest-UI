import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.prod';
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs/Observable";


@Injectable()
export class AppService {

  // public user: Subject<any>;

  public userInfo: any = {};

  constructor(private http: HttpClient) { }

  public get(serviceName: string): Observable<any> {
    let serviceUrl: string = this.getServiceUrl(serviceName);
    return this.http.get(serviceUrl);
  }

  public post(serviceName: string, params: any): Observable<any> {
    let serviceUrl: string = this.getServiceUrl(serviceName);
    return this.http.post(serviceUrl, params);
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  private getServiceUrl(serviceName: string) {
    let url = environment.apiUrl + serviceName;
    console.log(url);
    return url;
  }

}


