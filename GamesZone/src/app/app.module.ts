import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarPesquisaComponent } from './telas/navbar-pesquisa/navbar-pesquisa.component';
import { CadastroComponent } from './telas/cadastro/cadastro.component';
import { HomeComponent } from './telas/home/home.component';
import { LoginComponent } from './telas/login/login.component';
import { ChatComponent } from './telas/chat/chat.component';
import { CampeonatosComponent } from './telas/campeonatos/campeonatos.component';
import { JogadoresComponent } from './telas/jogadores/jogadores.component';
import { EquipesComponent } from './telas/equipes/equipes.component';
import { JogosdehojeComponent } from './telas/jogosdehoje/jogosdehoje.component';
import { NavbarLeagueComponent } from './telas/navbar-league/navbar-league.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarPesquisaComponent,
    CadastroComponent,
    HomeComponent,
    LoginComponent,
    ChatComponent,
    CampeonatosComponent,
    JogadoresComponent,
    EquipesComponent,
    JogosdehojeComponent,
    NavbarLeagueComponent,
  ],
  imports: [
    BrowserModule,  
    AppRoutingModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
