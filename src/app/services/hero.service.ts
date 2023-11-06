import { Injectable } from '@angular/core';
import { Hero } from '../models/Hero';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../Environment/Environment';
import { Observable } from 'rxjs';

//TCP/IP protocol og ip adresses
const httpOptions={
  headers: new HttpHeaders({
    'content-type' : 'application/json'
  })
}

//Decorator
@Injectable({
  providedIn: 'root'
})
//class
export class HeroService {

//   herolist:Hero[] = [
//     {id:2, heroName:"Bo", Place:"Path of Destiny", RealName:"Killer", DebutYear:new Date()},
//     {id:12, heroName:"Mr. Ac/Dc", Place:"Stairway to Heaven", RealName:"Killer", DebutYear:new Date()},
//     {id:22, heroName:"Mr. Led Zepp Elin", Place:"Highway to hell", RealName:"Killer", DebutYear:new Date()},
// ];
  private readonly apiUrl=environment.apiUrl+"SuperHero/";
  constructor(private http:HttpClient) { }

//   GetAllHardCoded():Hero[]{
//     return this.herolist;
//   }

  // Observable is something that listen "on the cobber" for data - async
  GetAll():Observable<Hero[]>{
    return this.http.get<Hero[]>(this.apiUrl);
  }
  
  GetById(id:number):Observable<Hero>{
    //https://localhost:7078/api/SuperHero/12
    return this.http.get<Hero>(this.apiUrl+id);
  }
  
  Delete(id:number):Observable<void>{
    console.log("in service delete");
    let i =  this.http.delete<void>(this.apiUrl+id);
    return i;

  }

  Create(hero:Hero):Observable<void>{
    console.log("in Service Create");
    return this.http.post<void>(this.apiUrl, hero, httpOptions)
  }

  Update(hero:Hero):Observable<void>{
    return this.http.put<void>(this.apiUrl+hero.id, hero, httpOptions)
  }
}

// connection to a server... it happens like this
// cobber => XMLHttpRequest => Ajax => Then a lot of other libraries
// 
