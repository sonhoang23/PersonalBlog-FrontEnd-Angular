import { Injectable } from '@angular/core';
import { AdminLogin } from 'src/Model/AdminLogin';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  adminLogin: AdminLogin = new AdminLogin();
  age: number = 0;
  constructor() {}

  ngOnInit(): void {}
  login() {
    alert('press login');
  }
  AddAge() {
    this.age++;
  }
  inputUserName() {}
}
