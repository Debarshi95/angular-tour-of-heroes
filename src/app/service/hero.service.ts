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
  getHeros(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
