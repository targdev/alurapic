import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  @Input() url = '';
  @Input() altUrl = '';

  constructor() { }

  ngOnInit(): void {
  }

}
