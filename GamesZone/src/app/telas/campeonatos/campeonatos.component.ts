import { Component, OnInit } from '@angular/core';
import { CampeonatoService } from 'src/app/services/campeonato.service';

@Component({
  selector: 'app-campeonatos',
  templateUrl: './campeonatos.component.html',
  styleUrls: ['./campeonatos.component.css']
})
export class CampeonatosComponent implements OnInit {

  listCampeonatos: Array<any> = [];

  constructor(
    private campeonato_service: CampeonatoService
  ) { }

  ngOnInit(): void {
    this.getAllCampeonatos();

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
}
