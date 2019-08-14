import { Injectable } from '@angular/core';
import { Hero } from '../class/hero';
import { HEROES } from '../folder/mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  getHeros(): Hero[] {
    return HEROES;
  }
}
