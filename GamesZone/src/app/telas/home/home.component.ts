import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CampeonatoService } from 'src/app/services/campeonato.service';
import { PlayerService } from 'src/app/services/player.service';
import { TeamService } from 'src/app/services/team.service';
import { UserService } from 'src/app/services/user.service';
import { JogosService } from 'src/app/services/game.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  listPlayers: Array<any> = [];
  listCampeonatos: Array<any> = [];
  listTeams: Array<any> = [];
  listJogos: Array<any> = [];

  constructor(
    private jogos_service: JogosService,
    private campeonato_service: CampeonatoService,
    private user_service: UserService,
    private player_service: PlayerService,
    private team_service: TeamService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCurrentUser();
    this.getAllTeams();
    this.getAllCampeonatos();
    this.getAllPlayers();
    this.getAllJogos();
  }

  getCurrentUser() {
    this.user_service.getCurrentUser().subscribe({
      next: (result) => {
        localStorage.setItem('user', JSON.stringify(result.DATA));
      },
      error:(err) => {
        console.log(err);
      },
    });
  }

  getAllPlayers() {
    this.player_service.getAllPlayers().subscribe({
      next: (result) => {
        this.listPlayers = result.DATA;
        this.listPlayers.sort((a, b) => (a.MatchName > b.MatchName) ? 1 : -1)
        console.log(this.listPlayers)
      },
      error:(err) => {
        console.log(err);
      },
    });
  }

  getAllCampeonatos() {
    this.campeonato_service.getAllCampeonatos().subscribe({
      next: (result) => {
        this.listCampeonatos = result.DATA;
        // this.listPlayers.sort((a, b) => (a.MatchName > b.MatchName) ? 1 : -1)
        console.log(this.listCampeonatos)
      },
      error:(err) => {
        console.log(err);
      },
    });
  }

  getAllTeams() {
    this.team_service.getAllTeams().subscribe({
      next: (result) => {
        this.listTeams = result.DATA;
        // this.listPlayers.sort((a, b) => (a.MatchName > b.MatchName) ? 1 : -1)
        console.log(this.listTeams)
      },
      error:(err) => {
        console.log(err);
      },
    });
  }

  getAllJogos() {
    this.jogos_service.getAllJogos().subscribe({
      next: (result) => {
        this.listJogos = result.DATA;
        // this.listPlayers.sort((a, b) => (a.MatchName > b.MatchName) ? 1 : -1)
        console.log(this.listJogos)
      },
      error:(err) => {
        console.log(err);
      },
    });
  }
}
