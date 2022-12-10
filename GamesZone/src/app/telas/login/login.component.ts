import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private session_service: SessionService,

  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.loginForm = this.fb.group({
      Email: new FormControl(null, [Validators.required, Validators.email]),
      Password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  login() {
    console.log("chegou aq")
    const emailControl = this.loginForm.get('Email');
    const email = emailControl!.value;
    const passwordControl = this.loginForm.get('Password');
    const password = passwordControl!.value;
    if (this.loginForm.valid) {
      this.session_service.login(email, password).subscribe({
        next: (result) => {
          if (result.DATA) {
            console.log(result);
            localStorage.setItem('token', result.DATA.firebaseUser.stsTokenManager.accessToken);
            localStorage.setItem('refreshToken', result.DATA.firebaseUser.stsTokenManager.refreshToken);
            localStorage.setItem('userId', result.DATA.userLoged.user.uid);
            this.router.navigate(['/home']);
          }
        },
        error:(err) => {
          window.alert("Dados de login invalidos!");
        },
      });
    } else {
      window.alert("Dados de login invalidos!");
    }
  }

  keyDownFunction(event: any) {
    if (event.keyCode === 13) {
      this.login();
    }
  }

}
