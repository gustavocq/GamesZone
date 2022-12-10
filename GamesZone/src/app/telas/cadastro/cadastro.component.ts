import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  cadastroForm!: FormGroup;

  constructor(
    private session_service: SessionService,
    private fb: FormBuilder,
    private router: Router,
  ) { 

  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.cadastroForm = this.fb.group({
      Nome: new FormControl(null, [Validators.required]),
      Username: new FormControl(null, Validators.required),
      Email: new FormControl(null, [Validators.required, Validators.email]),
      Password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      ConfirmPassword: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  createUser() {
    if (this.cadastroForm.valid) {
      const passwordControl = this.cadastroForm.get('Password');
      const password = passwordControl!.value;
      const confirmPasswordControl = this.cadastroForm.get('Password');
      const confirmPassword = confirmPasswordControl!.value;
      if (password == confirmPassword) {
        const user = {
          email: this.cadastroForm.get('Email')?.value,
          password: this.cadastroForm.get('Password')?.value,
          displayName: this.cadastroForm.get('Nome')?.value,
          username: this.cadastroForm.get('Username')?.value,
        }
        this.session_service.createUser(user).subscribe({
          next: (result) => {
            window.alert("Usuário criado com sucesso, favor realizar login.")
            this.router.navigate(['/']);
          },
          error:(err) => {
            window.alert("Um ou mais campos invalidos.")
          },
        });
      } else {
        window.alert("As senhas devem ser iguais.")
      }
      
    } else {
      window.alert("Complete corretamente os campos.")
    }
  }

}
