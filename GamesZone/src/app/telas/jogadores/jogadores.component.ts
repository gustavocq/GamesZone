import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-jogadores',
  templateUrl: './jogadores.component.html',
  styleUrls: ['./jogadores.component.css']
})
export class JogadoresComponent implements OnInit {

  listPlayers: Array<any> = [];

  constructor(
    private player_service: PlayerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllPlayers();
  }

  getAllPlayers() {
    this.player_service.getAllPlayers().subscribe({
      next: (result) => {
        this.listPlayers = result.DATA;
        this.listPlayers.sort((a, b) => (a.MatchName > b.MatchName) ? 1 : -1)
      },
      error:(err) => {
        console.log(err);
      },
    });
  }

}
