import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarPesquisaComponent } from './telas/navbar-pesquisa/navbar-pesquisa.component';
import { CadastroComponent } from './telas/cadastro/cadastro.component';
import { HomeComponent } from './telas/home/home.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    NavbarPesquisaComponent,
    CadastroComponent,
    HomeComponent
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
