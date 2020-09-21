import { Component, OnInit } from '@angular/core';

import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Slider Images
  slides = [
    {'image': 'https://zug.net.br/wp-content/uploads/2019/07/alimentos-saudaveis-3-696x464.jpg'}, 
    {'image': 'https://www.clubefelicidade.com.br/dashboard/uploads/a00b05ff-f323-4976-ba9b-161b8b55e8fb/alimentacao-saudavel%20(1)%20(1).jpg'},
    {'image': 'https://blog.selfitacademias.com.br/wp-content/uploads/2020/05/shutterstock_1187108368.jpg'}
  ];


}
