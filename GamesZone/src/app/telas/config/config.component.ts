import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  updateForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private user_service: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.updateForm = this.fb.group({
      Nome: new FormControl(null, [Validators.required]),
      Username: new FormControl(null, Validators.required),
      Email: new FormControl(null, [Validators.email])
    });
  }

  updateUser() {
    if (this.updateForm.valid) {
      const user = {
        email: this.updateForm.get('Email')?.value,
        displayName: this.updateForm.get('Nome')?.value,
        username: this.updateForm.get('Username')?.value,
      }
      this.user_service.updateUser(user).subscribe({
        next: (result) => {
          localStorage.setItem('user', JSON.stringify(result.DATA));
          window.alert("Usuário atualizado com sucesso.")
        },
        error: (err) => {
          window.alert("Um ou mais campos invalidos.")
        },
      });
    } else {
      window.alert("Complete corretamente os campos.")
    }
  }

  deleteUser(){
    const confirm = window.confirm("Tem certeza que deseja apagar seu usuário?");
    if (confirm) {
      this.user_service.deleteUser().subscribe({
        next: (result) => {
          localStorage.clear();
          this.router.navigate(['/']);
        },
        error:(err) => {
          window.alert("Erro ao deletar usuário!");
        },
      });
    }
  }

}
