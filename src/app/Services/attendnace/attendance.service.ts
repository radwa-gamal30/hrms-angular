import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  constructor(private httpClient:HttpClient) { }
  submitAttendance(inputs:any): Observable<any>{
   return this.httpClient.post(`http://127.0.0.1:8000/api/attendance`,inputs);
  }
}
