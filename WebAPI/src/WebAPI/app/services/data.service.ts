﻿import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import './rxjs-operators';

@Injectable()
export class DataService {
    constructor(private http: Http) {
    }

    getDataObservable(url: string): Observable<string> {
        return this.http.get(url).map(response => response.json()).catch(this.handleErrors);
    }

    handleErrors(error: any) {
        let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}