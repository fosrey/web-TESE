import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-becas',
  templateUrl: './becas.component.html',
  styleUrls: ['./becas.component.css']
})
export class BecasComponent implements OnInit {

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