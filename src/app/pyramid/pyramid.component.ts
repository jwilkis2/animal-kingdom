import { Component, OnInit, Input, Output } from '@angular/core';
import { Animal } from '../animal.model';
import { BuildService } from '../build.service';

@Component({
  selector: 'app-pyramid',
  templateUrl: './pyramid.component.html',
  styleUrls: ['./pyramid.component.css']
})
export class PyramidComponent implements OnInit {

  @Input() animalList: Animal[];

  constructor(private buildService: BuildService) {  }

  ngOnInit() {
  }

  getNumLevels(): number[] {
    return this.buildService.getNumLevels(this.animalList);

  }

}
