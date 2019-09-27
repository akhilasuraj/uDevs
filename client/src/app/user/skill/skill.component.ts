import { Component, OnInit } from '@angular/core';
import { UserDetails, AuthenticationService, SkillPayload } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {



  constructor(private auth: AuthenticationService, private router: Router) { }

  skills = {
    user_ID: 0,
    data: [],
    other_skills: ''
  }

  technologies = {
    user_ID: 0,
    data: [],
    other_technologies: ''
  }

  ngOnInit() {
    
  }

  


  AddSkill(e, type) {
    if (e.target.checked) {
      this.skills.data.push(type);
    } else {
      const index: number = this.skills.data.indexOf(type);
      if (index !== -1) {
        this.skills.data.splice(index, 1);
      }
    }
  }

  AddTechnology(e, type) {
    if (e.target.checked) {
      this.technologies.data.push(type);
    } else {
      const index: number = this.technologies.data.indexOf(type);
      if (index !== -1) {
        this.technologies.data.splice(index, 1);
      }
    }
  }

  SaveSkills() {

    if (this.skills.data.length == 0 || this.technologies.data.length == 0) {
    
      window.alert("Skills and technologies must not be empty")
      
    } else {
      this.skills.user_ID = this.auth.getUserDetails().id;
      this.technologies.user_ID = this.auth.getUserDetails().id;
      
      this.auth.SaveSkill(this.skills).subscribe(
        result => {
          console.log(result)
        }
      )

      this.auth.SaveTechnology(this.technologies).subscribe(
        result => {
          console.log(result)
          window.location.reload();
        }
      )

    }

  }

}
