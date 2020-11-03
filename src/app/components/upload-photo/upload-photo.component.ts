import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo.service';

@Component({
  selector: 'app-upload-photo',
  templateUrl: './upload-photo.component.html',
  styleUrls: ['./upload-photo.component.css']
})
export class UploadPhotoComponent implements OnInit {

  file: File;
  photoSelected: string | ArrayBuffer;

  constructor(private photoService: PhotoService, private router: Router) { }

  ngOnInit(): void {
  }

  onPhotoSelect(e): void {
    if(e.target.files && e.target.files[0]) {
      this.file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

  uploadPhoto(title: HTMLInputElement) {
    this.photoService.createPhoto(title.value, this.file)
      .subscribe(res => {
        this.router.navigate(['/galeria']);
        }, err => console.log(err)
      )
  }
  
}
