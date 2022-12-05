import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './telas/cadastro/cadastro.component';
import { HomeComponent } from './telas/home/home.component';
import { NavbarPesquisaComponent } from './telas/navbar-pesquisa/navbar-pesquisa.component';

const routes: Routes = [
  { path: 'login', component: CadastroComponent },
  { path: 'navbar', component: NavbarPesquisaComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
