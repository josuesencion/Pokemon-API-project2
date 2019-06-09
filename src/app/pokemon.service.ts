import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private _url: string  = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) { }

  getPokemonList(){
    return this.http.get(this._url);
  }

  getPokemonDetails(pNumber: number){
    let url = `${this._url}${pNumber}`;
    return this.http.get(url);
  }
}
