import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
export interface adminResponse{
  id:number;
  fullname:string;
  email:string;
  username:string;
  group_id:string;


}
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  getGroup(){
    return this.httpClient.get(`http://127.0.0.1:8000/api/group`)
  }
  constructor(private httpClient: HttpClient) { }
  getAdmins(){
    return this.httpClient.get(`http://127.0.0.1:8000/api/users`);
  }
}
