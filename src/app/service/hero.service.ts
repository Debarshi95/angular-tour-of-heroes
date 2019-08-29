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
    console.log(hero, this.httpOptions);
    return this.httpClient.post<Hero>(
      this.url + "/heroes",
      hero,
      this.httpOptions
    );
  }
  getHeroes(): Observable<Hero[]> {
    return this.httpClient
      .get<Hero[]>(this.url + "/heroes")
      .pipe(map(heroes => heroes["data"]));
  }

  getHero(id: number): Observable<Hero> {
    console.log(this.url);
    return this.httpClient
      .get<Hero>(this.url + `/heroes/${id}`)
      .pipe(map(heroes => heroes["data"]));
  }
}
