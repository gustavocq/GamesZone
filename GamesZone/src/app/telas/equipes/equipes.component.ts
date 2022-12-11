import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-equipes',
  templateUrl: './equipes.component.html',
  styleUrls: ['./equipes.component.css']
})
export class EquipesComponent implements OnInit {

  listTeams: Array<any> = [];

  constructor(
    private team_service: TeamService
  ) { }

  ngOnInit(): void {
    this.getAllTeams();
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

}
