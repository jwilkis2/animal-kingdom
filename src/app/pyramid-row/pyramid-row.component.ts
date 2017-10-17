import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Animal } from '../animal.model';

@Component({
  selector: 'pyramid-row',
  templateUrl: './pyramid-row.component.html',
  styleUrls: ['./pyramid-row.component.css']
})
export class PyramidRowComponent implements OnInit {
  //@HostBinding('attr.class') cssClass = 'row';
  @Input() animalList: Animal[];
  @Input() level: number;
  color: string;

  constructor() { 
    this.color = '#' + Math.random().toString(16).slice(2,8);
  }

  ngOnInit() {
  }


}
