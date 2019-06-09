import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

  public pokemon: object;

  constructor(private _pokemonService: PokemonService, 
    private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];

    this._pokemonService.getPokemonDetails(id)
    .subscribe(
      (data) => {
        this.pokemon = data;
        console.log(this.pokemon);
      }
    )
      
  }

}
