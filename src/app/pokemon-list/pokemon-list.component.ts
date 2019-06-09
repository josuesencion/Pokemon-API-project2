import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  public pokemon: object;

  constructor(private _pokemonService: PokemonService, private router: Router) { }

  onSelect(pokemon){
    this.router.navigate(['/pokemonlist', pokemon.name])
  }

  ngOnInit() {
    this._pokemonService.getPokemonList()
      .subscribe((data) => {
        this.pokemon = data['results'];
        console.log(this.pokemon);
      });
      
  }

}
