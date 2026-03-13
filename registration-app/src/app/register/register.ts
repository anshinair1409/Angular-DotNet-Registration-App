import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  user = {
    name: '',
    email: '',
    password: '',
    phone: ''
  };

  message = '';

  constructor(private http: HttpClient) {}

  registerUser() {

    console.log("Sending Data:", this.user);

    this.http.post("https://localhost:7161/api/users/register", this.user)
    .subscribe({
      next: (response) => {

        console.log("Student registered", response);

        this.message = "Registration Successful!!";

        // Clear form
        this.user = {
          name: '',
          email: '',
          password: '',
          phone: ''
        };

      },
      error: (error) => {
        console.error("Error occurred:", error);
        this.message = "Registration Failed!!";
      }
    });

  }

}