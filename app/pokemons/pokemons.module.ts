import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokemonRoutingModule } from './pokemons-routing.module';

import { ListPokemonComponent }   from './list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon.component';
import { EditPokemonComponent } from './edit-pokemon.component';
import { PokemonFormComponent } from './pokemon-form.component';
import { PokemonSearchComponent } from './pokemon-search.component';
import { LoaderComponent } from './loader.component';
import { ShadowCardDirective }    from './shadow-card.directive';
import { PokemonTypeColorPipe }   from './pokemon-type-color.pipe';

import { PokemonsService } from './pokemons.service';
import { AuthGuard } from '../auth-guard.service';

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
		PokemonSearchComponent,
		LoaderComponent,
		ShadowCardDirective,
		PokemonTypeColorPipe
	],
	providers: [PokemonsService, AuthGuard]
})
export class PokemonsModule { }
