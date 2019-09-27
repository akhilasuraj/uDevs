import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserDetails, skillDetails, userID } from '../authentication.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Url } from 'url';

@Component({
  selector: 'app-dev-profile',
  templateUrl: './dev-profile.component.html',
  styleUrls: ['./dev-profile.component.css']
})
export class DevProfileComponent implements OnInit {

  details: UserDetails

  marked1 = true
  marked2 = false
  show = false
  showSkill = true

  profileImage: File = null
  id: number
  fileUrl: Url

  userData: userID = {
    user_ID: 0,
    image_name: ''
  }

  skills
  technologies
  count1:number
  count2:number

  constructor(private auth: AuthenticationService, private router: Router) { }

  ngOnInit() {

    if (localStorage.getItem('usertoken')) {
      this.marked1 = true
      this.marked2 = false
      this.auth.profile().subscribe(
        user => {
          this.details = user
        },
        err => {
          console.error(err)
        })

      this.auth.skillprofile().subscribe(
        skill => {
          this.skills = skill
          if(skill.length==0){
            this.show = true

            if (window.localStorage) {
              if (!localStorage.getItem('firstLoad')) {
                localStorage['firstLoad'] = true;
                window.location.reload();
              }
              else
                localStorage.removeItem('firstLoad');
            }
          }
        },
        err => {
          console.error(err)
        }
      )

      this.auth.technoprofile().subscribe(
        techno => {
          this.technologies = techno
          if(techno.length==0){
            this.show = true
          }
        },
        err => {
          console.error(err)
        }
      )


    } else {
      this.router.navigateByUrl("/home/login");
    }
  }

  updateSkills(){
    this.showSkill = false
  }

  cancleEditSkills(marked){
    this.showSkill = marked
  }



  showEditProf() {
    this.marked1 = false
    this.marked2 = true
  }

  cancleEditProfile(marked1, marked2) {
    this.marked1 = marked1
    this.marked2 = marked2
  }

  onFileSelected(event) {
    this.profileImage = <File>event.target.files[0]

    this.userData.user_ID = this.auth.getUserDetails().id;
    this.userData.image_name = this.details.profile_img
    console.log(this.userData)
    const fd = new FormData()
    fd.append('profileImage', this.profileImage, this.profileImage.name)

    this.auth.sendUserID(this.userData).subscribe(
      res => {

      }
    )

    this.auth.uploadProfileImage(fd).subscribe(
      user => {
        window.location.reload()
      }
    )
  }


}
