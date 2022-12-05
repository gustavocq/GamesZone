import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavbarPesquisaComponent } from './telas/navbar-pesquisa/navbar-pesquisa.component';
import { CadastroComponent } from './telas/cadastro/cadastro.component';
import { HomeComponent } from './telas/home/home.component';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
    {path:'navbar', component:NavbarPesquisaComponent},
    {path: 'home', component:HomeComponent},
    {path:'cadastro', component:CadastroComponent},
    {path:'', component:AppComponent}
];

export const routing: ModuleWithProviders<any>  = RouterModule.forRoot(appRoutes);