import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './telas/login/login.component';
import { CadastroComponent } from './telas/cadastro/cadastro.component';
import { HomeComponent } from './telas/home/home.component';
import { NavbarPesquisaComponent } from './telas/navbar-pesquisa/navbar-pesquisa.component';
import { ChatComponent } from './telas/chat/chat.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'navbar', component: NavbarPesquisaComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'home', component: HomeComponent },
  { path: 'chat', component: ChatComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
