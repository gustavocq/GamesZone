import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './telas/login/login.component';
import { CadastroComponent } from './telas/cadastro/cadastro.component';
import { HomeComponent } from './telas/home/home.component';
import { NavbarPesquisaComponent } from './telas/navbar-pesquisa/navbar-pesquisa.component';
import { ChatComponent } from './telas/chat/chat.component';
import { CampeonatosComponent } from './telas/campeonatos/campeonatos.component';
import { JogadoresComponent } from './telas/jogadores/jogadores.component';
import { EquipesComponent } from './telas/equipes/equipes.component';
import { JogosdehojeComponent } from './telas/jogosdehoje/jogosdehoje.component';
import { ConfigComponent } from './telas/config/config.component';
import { PerfilComponent } from './telas/perfil/perfil.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'navbar', component: NavbarPesquisaComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'home', component: HomeComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'campeonatos', component: CampeonatosComponent },
  { path: 'jogadores', component: JogadoresComponent },
  { path: 'equipes', component: EquipesComponent },
  { path: 'jogoshoje', component: JogosdehojeComponent },
  { path: 'config', component: ConfigComponent },
  { path: 'perfil', component: PerfilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
