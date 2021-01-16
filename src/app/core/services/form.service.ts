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

  getRegions(){
    return this.http.get(this.url+ 'Form');
  }

  uploadPhoto(data):Observable<any>{
    return this.http.post(this.url+ 'File/photo', data);
  }

  postFormData(data):Observable<any>{
    return this.http.post(this.url+'Form', data);
  }

  
  

}
