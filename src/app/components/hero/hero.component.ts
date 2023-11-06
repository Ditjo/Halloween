import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Hero } from 'src/app/models/Hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

CurrentItem = 'InfoInsert';

heroToUpdate:Hero = new Hero;

//hero array
// herolist:Hero[] = [
//     {Id:2, Name:"Bo", Place:"Path of Destiny", RealName:"Killer", DebutYear:new Date()},
//     {Id:12, Name:"Mr. Ac/Dc", Place:"Stairway to Heaven", RealName:"Killer", DebutYear:new Date()},
//     {Id:22, Name:"Mr. Led Zepp Elin", Place:"Highway to hell", RealName:"Killer", DebutYear:new Date()},
// ];
herolist:Hero[] = [];
/**
 * this line tells us that we have a prop called services - it's a design Pattern
 */
constructor(private service:HeroService) {
  
    
}

//CRUD GetAll, GetById, Delete, Update, Create
//Version 1
// GetAll():Hero[]{
//   console.log(this.herolist); //test
//   return this.herolist
// }
//Version 2
// GetAll():Hero[]{
//   let data = this.service.GetAllHardCoded()
//   console.log(data)
//   return data;
// }
GetAll(){
  this.service.GetAll().subscribe(
    (data) => //Call back function
    {
      // console.log(data);
      this.herolist = data;
      console.log(this.herolist)
    }
  )
}
//Version 1
// GetById(id:number):Hero{
//   let found = this.herolist.filter(element => element.id == id); //PK and there is always only 1
//   console.log(found);
//   return found[0];
// }

inputId = new FormControl();

GetById(id:number):Hero{
  let heroTemp:Hero = new Hero;
  this.service.GetById(id).subscribe(
    (data) =>
    {
      heroTemp = data;
      console.log(heroTemp);
      //Need container for this data
    }
  )
    return heroTemp
}
//Version 1
// Delete(id:number):void{
//   let index = this.herolist.findIndex(heroObj => heroObj.id == id);
//   let found = this.herolist.splice(index,1);
//   //Debug: 
//   console.log(found);
//   this.herolist.forEach(hero => 
//     console.log(hero)
//     )
// }

Delete(id:number):void{
  this.service.Delete(id).subscribe();
  let i = this.herolist.findIndex(heroObj => heroObj.id == id);
  this.herolist.splice(i,1);
}

updateIsVisible:boolean = false;

Update(hero:Hero):void{
  this.heroToUpdate = hero;
  if(this.updateIsVisible == true) {this.updateIsVisible = false;}
  this.updateIsVisible = true;

  console.log(hero + " Update Call")
}

Create(hero:Hero):void{
  console.log(hero)
}

}
