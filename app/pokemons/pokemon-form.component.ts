import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonsService} from './pokemons.service';
import { Pokemon } from './pokemon';

@Component({
	selector: 'pokemon-form',
	templateUrl: 'app/pokemons/pokemon-form.component.html',
	styleUrls: ['app/pokemons/pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {

	@Input() pokemon: Pokemon; // propriété d'entrée du composant
	types: Array<string>; // types possible d'un pokémon : 'Eau', 'Feu', etc ...

	constructor(
		private pokemonsService: PokemonsService,
		private router: Router) { }

	ngOnInit() {
		// Initialisation de la propriété types
		this.types = this.pokemonsService.getPokemonTypes();
	}

	// Détermine si le type passé en paramètres appartient ou non au pokémon en cours d'édition.
	hasType(type: string): boolean {
		let index = this.pokemon.types.indexOf(type);
		if (~index) return true;
		return false;
	}

	// Méthode appelé lorsque l'utilisateur ajoute ou retire un type au pokémon en cours d'édition.
	selectType($event, type: string): void {
		let checked = $event.target.checked;
		if (checked) {
			this.pokemon.types.push(type);
		} else {
			let index = this.pokemon.types.indexOf(type);
			if (~index) {
				this.pokemon.types.splice(index, 1);
			}
		}
	}

	// valide le nombre de 1-3 types par pokémon
	isTypesValid(type: string): boolean {
		if (this.pokemon.types.length >= 3 && !this.hasType(type)) {
			return false;
		}
		return true;
	}

	// La méthode appelé lorsque le formulaire est soumis.
	onSubmit(): void {
		console.log("Submit form !");
		let link = ['/pokemon', this.pokemon.id];
		this.router.navigate(link);
	}

}