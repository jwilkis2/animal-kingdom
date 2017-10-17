import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  animals: Animal[];

  /**
   * Level 1:
   * Lion
   * Tiger
   * Great White Shark
   * 
   * Level 2:
   * Cheetah
   * Hyena
   * Sea Lion
   * 
   * Level 3:
   * Gazelle
   * Antelope
   * Squid
   * 
   * Level 4:
   * Robin
   * Mouse
   * Spider
   * 
   * Level 5:
   * Ant
   * Fly
   * Krill
   * 
   */


  constructor() {
    this.animals = [
      new Animal(
        'Lionel',
        1,
        'Lion',
        '/assets/images/lion.jpeg'
      ),
      new Animal(
        'Tigger',
        1,
        'Tiger',
        '/assets/images/tiger.jpeg'
      ),
      new Animal(
        'Jaws',
        1,
        'Great White Shark',
        '/assets/images/GWS.jpeg'
      ),
      new Animal(
        'Chester',
        2,
        'Cheetah',
        '/assets/images/cheetah.jpeg'
      ),
      new Animal(
        'Shenzi',
        2,
        'Hyena',
        '/assets/images/hyena.jpeg'
      ),
      new Animal(
        'Steve',
        2,
        'Sea Lion',
        '/assets/images/sea lion.jpeg'
      ),
      new Animal(
        'Gabriel',
        3,
        'Gazelle',
        '/assets/images/gazelle.jpeg'
      ),
      new Animal(
        'Andrew',
        3,
        'Antelope',
        '/assets/images/antelope.jpeg'
      ),
      new Animal(
        'Inky',
        3,
        'Squid',
        '/assets/images/squid.jpeg'
      ),
      new Animal(
        'Dick',
        4,
        'Robin',
        '/assets/images/robin.jpeg'
      ),
      new Animal(
        'Jerry',
        4,
        'Mouse',
        '/assets/images/mouse.jpeg'
      ),
      new Animal(
        'Peter',
        4,
        'Spider',
        '/assets/images/spider.jpeg'
      ),
      new Animal(
        'Scott',
        5,
        'Ant',
        '/assets/images/ant.jpeg'
      ),
      new Animal(
        'Seth',
        5,
        'Fly',
        '/assets/images/fly.jpeg'
      ),
      new Animal(
        'Krilian',
        5,
        'Krill',
        '/assets/images/krill.jpeg'
      )
    ];
  }
}
