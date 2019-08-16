import { Injectable } from '@angular/core';
import { Hero } from '../class/hero';
import { HEROES } from '../folder/mock-heroes';
import { MessageService } from '../service/message.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) {

  }
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched Hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id))
  }
}
