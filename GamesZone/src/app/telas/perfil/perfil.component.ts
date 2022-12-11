import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  user: any;

  constructor() { }

  ngOnInit(): void {
    const userStr: string | null = localStorage.getItem("user");
    if (userStr) {
      this.user = JSON.parse(userStr);
    }
    console.log(this.user)
  }

}
