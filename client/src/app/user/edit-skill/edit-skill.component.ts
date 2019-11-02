import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserDetails, SkillPayload, skillDetails } from '../authentication.service';
import { Router } from '@angular/router';
import { DevProfileComponent } from '../dev-profile/dev-profile.component';
import { e } from '@angular/core/src/render3';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {

  check1 = false
  check2 = false
  check3 = false
  check4 = false
  check5 = false
  check6 = false
  check7 = false
  check8 = false
  check9 = false
  check10 = false

  tcheck1 = false
  tcheck2 = false
  tcheck3 = false
  tcheck4 = false
  tcheck5 = false
  tcheck6 = false
  tcheck7 = false
  tcheck8 = false
  tcheck9 = false
  tcheck10 = false
  tcheck11 = false
  tcheck12 = false
  tcheck13 = false
  tcheck14 = false
  tcheck15 = false
  tcheck16 = false


  constructor(private auth: AuthenticationService, private router: Router, private devPro: DevProfileComponent) { }

  ngOnInit() {

    this.auth.skillprofile().subscribe(
      skill => {


        for (let skills of skill) {
          this.skills.data.push(skills.skill)

          if (skills.skill == "Web development") {
            this.check1 = true
          } else if (skills.skill == "Mobile development") {
            this.check2 = true
          } else if (skills.skill == "Data science") {
            this.check3 = true
          } else if (skills.skill == "Software development") {
            this.check4 = true
          } else if (skills.skill == "Block chain") {
            this.check5 = true
          } else if (skills.skill == "Machine learning") {
            this.check6 = true
          } else if (skills.skill == "Natural language processing") {
            this.check7 = true
          } else if (skills.skill == "Digital marketing") {
            this.check8 = true
          } else if (skills.skill == "Multimedia designing") {
            this.check9 = true
          } else if (skills.skill == "Robotics") {
            this.check10 = true
          } else {
            this.skills.other_skills = skills.skill

            const index: number = this.skills.data.indexOf(skills.skill);
            if (index !== -1) {
              this.skills.data.splice(index, 1);
            }
          }

        }

      }
    )



    this.auth.technoprofile().subscribe(
      techno => {


        for (let tech of techno) {
          this.technologies.data.push(tech.technology)

          if (tech.technology == "C") {
            this.tcheck1 = true
          } else if (tech.technology == "Java") {
            this.tcheck2 = true
          } else if (tech.technology == "Python") {
            this.tcheck3 = true
          } else if (tech.technology == "C++") {
            this.tcheck4 = true
          } else if (tech.technology == "JavaScript") {
            this.tcheck5 = true
          } else if (tech.technology == "Ruby") {
            this.tcheck6 = true
          } else if (tech.technology == "Swift") {
            this.tcheck7 = true
          } else if (tech.technology == "React/React native") {
            this.tcheck8 = true
          } else if (tech.technology == "C#") {
            this.tcheck9 = true
          } else if (tech.technology == "Spring/Struts/JHipster - Java Track") {
            this.tcheck10 = true
          } else if (tech.technology == "DotNet/DotNet Core - Microsoft Track") {
            this.tcheck11 = true
          } else if (tech.technology == "Laravel/Slim/YII - PHP Track") {
            this.tcheck12 = true
          } else if (tech.technology == "Mean Stack - JS Track") {
            this.tcheck13 = true
          } else if (tech.technology == "Firebase") {
            this.tcheck14 = true
          } else if (tech.technology == "Android") {
            this.tcheck15 = true
          } else if (tech.technology == "iOS") {
            this.tcheck16 = true
          } else {
            this.technologies.other_technologies = tech.technology

            const index: number = this.technologies.data.indexOf(tech.technology);
            if (index !== -1) {
              this.technologies.data.splice(index, 1);
            }
          }
        }
      }
    )
  }

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


  AddSkill(e, type) {
    if (e.target.checked) {
      this.skills.data.push(type);
    } else {
      const index: number = this.skills.data.indexOf(type);
      if (index !== -1) {
        this.skills.data.splice(index, 1);
      }
    }

    console.log(this.skills.data)
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


  UpdateSkills() {

    if(this.skills.data.length == 0 || this.technologies.data.length == 0){
      window.alert("Skills and technologies must not be empty")
    }else{

    this.skills.user_ID = this.auth.getUserDetails().id;
    this.technologies.user_ID = this.auth.getUserDetails().id;

    this.auth.updateSkill(this.skills).subscribe(
      result => {
        console.log(result)
      }
    )

    this.auth.updateTechnology(this.technologies).subscribe(
      result => {
        console.log(result)
        window.location.reload();
      }
    )

    
    }
  }

  cancleSkill(){
    this.devPro.showSkill = false
  }



}
