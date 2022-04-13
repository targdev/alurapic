import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class ApPhotosComponent implements OnInit {
  @Input() url = '';
  @Input() description = '';

  constructor() { }

  ngOnInit(): void {
  }

}
