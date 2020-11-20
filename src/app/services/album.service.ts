import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Album } from '../models/Album'

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  readonly URL_API = "http://localhost:5000/acme/api/albums";

  constructor(private http: HttpClient) { }

  createAlbum(name: string) {
          
    let token = localStorage.getItem('token');        
    return this.http.post(this.URL_API,{
      name,
      token
    } );
  }

  getAlbums() {       
    let header = new HttpHeaders().set(
      "Authorization",
       localStorage.getItem("token")
    );    
    return this.http.get<Album[]>(this.URL_API, {headers:header});
  }
}
