import { HeaderService } from './../../../../services/componentservice/header.service';
import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { AdminProfile } from 'src/Model/AdminProfile';
@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css'],
})
export class AdminHeaderComponent implements OnInit {
  adminProfile: AdminProfile= new AdminProfile();
  @Output() ChangeTheme = new EventEmitter<Boolean>();
  isTrue: boolean = false;
  ChangeThemeFromHeader() {
    this.isTrue = !this.isTrue;
    this.ChangeTheme.emit(this.isTrue);
  }
  constructor(private headerService: HeaderService) {}

  ngOnInit(): void {
    this.headerService.GetProfile().subscribe((data) => {
      
      this.adminProfile= data;
      console.log(this.adminProfile.avatarLink);
    });
  }
}
