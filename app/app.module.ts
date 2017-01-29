
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { LoginRoutingModule } from './login-routing.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { PokemonsModule } from './pokemons/pokemons.module'
import './rxjs-extensions';

import { AppComponent }  from './app.component';
import { LoginComponent } from './login.component';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		InMemoryWebApiModule.forRoot(InMemoryDataService),
		PokemonsModule,
		LoginRoutingModule,
		AppRoutingModule
	],
	declarations: [
		AppComponent,
		LoginComponent,
		PageNotFoundComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
