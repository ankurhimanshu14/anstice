import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  email!: string;
  username!: string;
  password!: string;
  loading: boolean;

  constructor(private http: HttpClient) {
    this.loading = true;
    this.http = http;
  }

  ngOnInit(): void {
  }

  signUp(e: HTMLInputElement, u: HTMLInputElement, p: HTMLInputElement): void {
    this.loading = true;
    this.http.post('http://localhost:5000/api/v1/public/users/registration',
    JSON.stringify({
      email: e.value,
      username: u.value,
      password: u.value,
    })
    ).subscribe(user => {
      console.log(user);
      this.loading = false;
    })
  }
}