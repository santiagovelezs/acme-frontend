import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Photo } from '../models/Photo'

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  readonly URL_API = "http://localhost:5000/acme/api/photos";

  constructor(private http: HttpClient) { }

  createPhoto(title: string, photo: File) {
    const fd = new FormData();
    fd.append('title', title);
    /* 
      TODO: PASAR USUARIO LOGUEADO EN EL SISTEMA
        YA QUE ACA ESTAMOS PASANDO UN USUARIO FIJO   
    */
    fd.append('user', '5f8da3d291b38b003e7c0e19');
    fd.append('image', photo);
    return this.http.post(this.URL_API, fd);
  }

  getPhotos() {
    return this.http.get<Photo[]>(this.URL_API);
  }
}
