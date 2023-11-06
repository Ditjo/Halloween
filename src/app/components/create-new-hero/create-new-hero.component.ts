import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Hero } from 'src/app/models/Hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-create-new-hero',
  templateUrl: './create-new-hero.component.html',
  styleUrls: ['./create-new-hero.component.css']
})
export class CreateNewHeroComponent {

  constructor(private service:HeroService) {}

  @Input() item = '';

  createNewHero = new FormGroup({
    heroName: new FormControl(''),
    realName: new FormControl(''),
    place: new FormControl(''),
    debutYear: new FormControl(new Date())
  })
  // SetBo(){
  //   this.createNewHero.setValue({heroName:"bo", realName:"bob", place:"bobington", debutYear: new Date()});
  //   console.log("bolog");
    
  // }
  Create(){
    let newHero:Hero = this.createNewHero.value as unknown as Hero;
    // console.log(newHero);
    // console.log(this.createNewHero.value.heroName+"HeroName");
    // newHero.debutYear.setHours(0,0,0,0)
    let t:Date = new Date(newHero.debutYear);
    let i = t.toDateString()
    console.log(i);
    
    newHero.debutYear = new Date(i)
    console.log(newHero)
    this.service.Create(newHero).subscribe();
  }
}
