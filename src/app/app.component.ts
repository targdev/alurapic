import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  photos = [
    {
      url: "https://i.pinimg.com/564x/53/b5/ba/53b5baa3421cc5dd2614c16a4e87da03.jpg",
      altUrl : "Personagem escrevendo"
    },
    {
      url: "https://i.pinimg.com/564x/e7/9a/c3/e79ac3e6b8c69a8f82a274be1d163c47.jpg",
      altUrl : "Personagem imaginando dragões"
    },
    {
      url: "https://i.pinimg.com/564x/17/56/84/175684eb2b637397fa4c1be05ebe0db0.jpg",
      altUrl : "Personagem com violino"
    }
  ]
}
