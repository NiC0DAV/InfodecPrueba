import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Promedio } from '../models/promedio';
import { global } from './global';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    public avg: Promedio;
    public url: string;
    public token: any;
    public identity: any;

    constructor(
        public _http: HttpClient
    ){
        this.url = global.url;
    }

    register(user): Observable<any>{

        let json = JSON.stringify(user);
        let params = "json="+json;
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.post(this.url+'/newAverage', params, { headers: headers });
    }

    getAverage():Observable<any>{

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.get(this.url+'/averages', { headers: headers });

    }

    delete(id){
        
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.delete(this.url+'/deleteAvg/' + id, { headers: headers });

    }
}
