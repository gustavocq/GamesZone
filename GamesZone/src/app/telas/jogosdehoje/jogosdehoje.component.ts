import { Component, OnInit } from '@angular/core';
import { JogosService } from 'src/app/services/game.service';

@Component({
  selector: 'app-jogosdehoje',
  templateUrl: './jogosdehoje.component.html',
  styleUrls: ['./jogosdehoje.component.css']
})
export class JogosdehojeComponent implements OnInit {

  listJogos: Array<any> = [];

  constructor(
    private jogos_service: JogosService
    ) {}

  ngOnInit(): void {
    this.getAllJogos();
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
