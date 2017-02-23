import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';

@Injectable()
export class PokemonsService {

	constructor(private http: Http) { }

	// Retourne tous les pokémons
	getPokemons(): Promise<Pokemon[]> {
		return this.http.get('app/pokemons')
			.toPromise()
			.then(response => response.json().data as Pokemon[])
			.catch(this.handleError);
	}

	// Retourne le pokémon avec l'identifiant passé en paramètre
	getPokemon(id: number): Promise<Pokemon> {
		const url = 'app/pokemons/' + id;

		return this.http.get(url)
			.toPromise()
			.then(response => response.json().data as Pokemon)
			.catch(this.handleError);
	}

	// types de pokémons possible
	getPokemonTypes(): Array<string> {
		return [
			'Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik',
			'Poison', 'Fée', 'Vol', 'Combat', 'Psy'
		];
	}

	// modifier les propriétés d'un pokémon
	update(pokemon: Pokemon): Promise<Pokemon> {
		const url = `app/pokemons/${pokemon.id}`;
		let headers = new Headers({ 'Content-Type': 'application/json' });

		return this.http
			.put(url, JSON.stringify(pokemon), headers)
			.toPromise()
			.then(() => pokemon)
			.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		console.error('Error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}

}
