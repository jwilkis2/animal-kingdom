import { Injectable } from '@angular/core';
import { Animal } from './animal.model';

@Injectable()
export class BuildService {

  constructor() { }

  public getNumLevels(animalList: Animal[]): number[] {

    let levelArray: number[] = [];
    for (let i = 0; i < animalList.length; i++) {
      if (levelArray.indexOf(animalList[i].pyramidLevel) < 0) {
        levelArray.push(animalList[i].pyramidLevel);
      }
    }

    return levelArray;
  }

  public getAnimalsInLevel(level: number, animalList: Animal[]): Animal[] {

    let returnList: Animal[] = [];
    for(let i = 0; i < animalList.length; i++) {
      if(animalList[i].pyramidLevel === level) {
        returnList.push(animalList[i]);
      }
    }

    return returnList;
  }
}
