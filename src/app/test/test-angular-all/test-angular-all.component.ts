import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  DoCheck,
  OnChanges,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { AdminLogin } from 'src/Model/AdminLogin';

@Component({
  selector: 'app-test-angular-all',
  templateUrl: './test-angular-all.component.html',
  styleUrls: ['./test-angular-all.component.css'],
})
export class TestAngularAllComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentChecked,
    AfterContentInit,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  adminLogin: AdminLogin;
  age: number;
  constructor(private commonService: CommonService) {
    this.adminLogin = commonService.adminLogin;
    this.age = commonService.age;
  }
  login() {
    alert('press login');
  }
  AddAge() {
    this.commonService.age++;
    this.age = this.commonService.age;
  }
  inputUserName() {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
  ngOnInit(): void {
    console.log('ngOnInit');
  }
}
