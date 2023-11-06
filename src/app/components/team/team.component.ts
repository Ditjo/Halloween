import { Component } from '@angular/core';
import { Team } from 'src/app/models/Team';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {

  teamlist:Team[] = []

  /**
   *
   */
  constructor(private service:TeamService) {

  }

  GetAll(){
    this.service.GetAll().subscribe(
      (data) =>
      {
        this.teamlist = data;
        console.log(this.teamlist);
      }
    )
  }

  GetById(id:number):Team{
    let teamTemp:Team = new Team;
    this.service.GetById(id).subscribe(
      (data) => 
      {
        teamTemp = data;
        console.log(teamTemp);
      }
    )
    return teamTemp;
  }

  Delete(id:number):void{

  }

  Update(team:Team):Team{
    return team;
  }

  Create(team:Team):void{

  }
}
