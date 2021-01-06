import { ConfigService } from './../../../services/config.service';
import { CommonService } from './../../../services/common.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AdminLRegister } from 'src/Model/AdminRegister';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  adminRegsiter: AdminLRegister = new AdminLRegister();
  registerForm = new FormGroup({
    emailFormControl: new FormControl('',[
      Validators.required,
      Validators.email,
    ]),
    passWord: new FormControl(''),
    passWordAgain: new FormControl(''),
  });

  constructor(private configService: ConfigService) {}

  ngOnInit(): void {
    this.configService.GetProfile().subscribe((data) => {
      console.log(data);
    });
  }
  onSubmit() {
    console.warn(this.registerForm.value);
  }
}
