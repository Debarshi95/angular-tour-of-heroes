import { Injectable } from "@angular/core";
import { Hero } from "../class/hero";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { HEROES } from "../folder/mock-heroes";
import { MessageService } from "../service/message.service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class HeroService {
  url: string = "http://localhost:8000/api";
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };
  constructor(
    private httpClient: HttpClient,
    private messageService: MessageService
  ) {}

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.httpClient
      .post<Hero>(`${this.url}/heroes`, hero, this.httpOptions)
      .pipe(map(hero => hero["data"]));
  }
  getHeroes(): Observable<Hero[]> {
    return this.httpClient
      .get<Hero[]>(`${this.url}/heroes`)
      .pipe(map(heroes => heroes["data"]));
  }

  getHero(id: number): Observable<Hero> {
    console.log(this.url);
    return this.httpClient
      .get<Hero>(`${this.url}/heroes/${id}`)
      .pipe(map(hero => hero["data"]));
  }

  updateHero(hero: Hero): Observable<any> {
    return this.httpClient.put(
      `${this.url}/heroes/${hero.id}`,
      hero,
      this.httpOptions
    );
  }

  /** DELETE: delete the hero from the server */
  deleteHero(hero: Hero | number): Observable<Hero> {
    const id = typeof hero === "number" ? hero : hero.id;
    return this.httpClient.delete<Hero>(
      `${this.url}/heroes/${id}`,
      this.httpOptions
    );
  }
}
