import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  url = 'https://images2.alphacoders.com/516/516664.jpg';
  altUrl = 'Personagens do anime "One Piece" - Sabo, Luffy e Ace';

  constructor() { }

  ngOnInit(): void {
  }

}
