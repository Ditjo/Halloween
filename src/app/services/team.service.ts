import { Injectable } from '@angular/core';
import { environment } from '../Environment/Environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from '../models/Team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private readonly apiUrl=environment.apiUrl+"Team/";
  constructor(private http:HttpClient) { }

  GetAll():Observable<Team[]>{
    return this.http.get<Team[]>(this.apiUrl)
  }
  GetById(id:number):Observable<Team>{
    return this.http.get<Team>(this.apiUrl+id)
  }

  Delete(id:number):void{
    this.http.delete(this.apiUrl+id)
  }
}
