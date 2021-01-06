import { ConfigService } from './../config.service';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private httpClient: HttpClient, private configService: ConfigService) {}
  public GetProfile(): Observable<any> {
    const url = `${this.configService.REST_API_SERVER}/admin`;
    return this.httpClient
      .get<any>(url);
  }
}
