import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { TeamComponent } from './components/team/team.component';
import { HttpClientModule} from '@angular/common/http';
import { InputboxComponent } from './components/inputbox/inputbox.component'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CreateNewHeroComponent } from './components/create-new-hero/create-new-hero.component';
import { UpdateHeroComponent } from './components/update-hero/update-hero.component'

@NgModule({
  //All our components and stuff
  declarations: [
    AppComponent,
    HeroComponent,
    TeamComponent,
    InputboxComponent,
    CreateNewHeroComponent,
    UpdateHeroComponent
  ],
  //This is for all "finished Modules"
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  //Ignore this for now
  providers: [],
  //App start
  bootstrap: [AppComponent]
})
export class AppModule { }
