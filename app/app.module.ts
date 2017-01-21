
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { ShadowCardDirective } from './shadow-card.directive';

@NgModule({
	imports: [BrowserModule],
	declarations: [AppComponent, ShadowCardDirective],
	bootstrap: [AppComponent]
})
export class AppModule { }
