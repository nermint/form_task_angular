import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FormService {

  url = environment.httpRequestUrl;
  constructor(private http: HttpClient) { }

  uploadPhoto(data):Observable<any>{
    return this.http.post(this.url+ 'File/photo', data);
  }

  
  

}
