import { Component, OnInit } from '@angular/core';

import { CAROUSEL_DATA_ITEMS_BANNERP } from './contraloria-social/carousel';
import { ICarouselItem } from '../carousel/icarousel-item.metadata';
@Component({
  selector: 'app-normatividad',
  templateUrl: './normatividad.component.html',
  styleUrls: ['./normatividad.component.css']
})
export class NormatividadComponent implements OnInit {
  public carouselData: ICarouselItem[]=CAROUSEL_DATA_ITEMS_BANNERP;
  constructor() { }


  ngOnInit(): void {

    
  }
  onClick(){
    let full = document.getElementById('side');
    full.classList.toggle('active');
  }

  open(){
    let r = document.getElementById('right');
    r.classList.toggle('open');

    let l = document.getElementById('left');
    l.classList.toggle('open');
  }

}
