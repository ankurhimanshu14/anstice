import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username!: string;
  password!: string;
  loading: boolean;

  constructor(private http: HttpClient) {
    this.loading = true;
    this.http = http;
  }

  ngOnInit(): void {
  }

  login(u: HTMLInputElement, p: HTMLInputElement): void {
    this.loading = true;
    this.http.post('http://localhost:5000/api/v1/public/users/login',
    JSON.stringify({
      username: u.value,
      password: u.value,
    })
    ).subscribe(user => {
      console.log(user);
      this.loading = false;
    })
  }
}
