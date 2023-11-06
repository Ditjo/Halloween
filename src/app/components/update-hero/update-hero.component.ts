import { formatDate } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Hero } from 'src/app/models/Hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-update-hero',
  templateUrl: './update-hero.component.html',
  styleUrls: ['./update-hero.component.css']
})
export class UpdateHeroComponent {

  constructor(private service:HeroService) 
  {
    
  }
  
  @Input() heroToUpdate:Hero = new Hero;
  @Output() CloseUpdate:Boolean = true;

  
  ngOnInit(){
    // this.heroToUpdate.debutYear = new Date(this.heroToUpdate.debutYear)
    this.updateHero.patchValue(this.heroToUpdate);
    console.log(" - ngOnInit");
    console.log(this.heroToUpdate);
    
    this.updateHero.patchValue(
      {
        heroName: this.heroToUpdate.heroName,
        realName: this.heroToUpdate.realName,
        place: this.heroToUpdate.place,
        debutYear: new Date(this.heroToUpdate.debutYear)
      }
      )
  }

  updateHero = new FormGroup({
    heroName: new FormControl(''),
    realName: new FormControl(''),
    place: new FormControl(''),
    debutYear: new FormControl()
  })

  Update(){
    let updatedHero:Hero = this.updateHero.value as unknown as Hero;
    updatedHero.id = this.heroToUpdate.id;
    this.service.Update(updatedHero).subscribe();
    // this.CloseUpdate = false;
  }

}

