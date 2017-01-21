
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { ShadowCardDirective } from './shadow-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';

@NgModule({
	imports: [BrowserModule],
	declarations: [AppComponent, ShadowCardDirective, PokemonTypeColorPipe],
	bootstrap: [AppComponent]
})
export class AppModule { }
