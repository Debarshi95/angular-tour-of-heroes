import { Component, OnInit } from "@angular/core";
import { HEROES } from "../../folder/mock-heroes";
import { Heroes } from 'src/app/class/heroes';

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"]
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero: Heroes;
  constructor() { }

  ngOnInit() { }

  onSelect(hero: Heroes): void {
    this.selectedHero = hero;
  }
}
