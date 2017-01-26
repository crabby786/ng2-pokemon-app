import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokemonRoutingModule } from './pokemons-routing.module';

import { ListPokemonComponent }   from './list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon.component';
import { EditPokemonComponent } from './edit-pokemon.component';
import { PokemonFormComponent } from './pokemon-form.component';
import { ShadowCardDirective }    from './shadow-card.directive';
import { PokemonTypeColorPipe }   from './pokemon-type-color.pipe';

import { PokemonsService } from './pokemons.service';

@NgModule({
	imports: [
		CommonModule,
		PokemonRoutingModule,
		FormsModule
	],
	declarations: [
		ListPokemonComponent,
		DetailPokemonComponent,
		EditPokemonComponent,
		PokemonFormComponent,
		ShadowCardDirective,
		PokemonTypeColorPipe
	],
	providers: [PokemonsService]
})
export class PokemonsModule { }
