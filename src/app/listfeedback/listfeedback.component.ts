import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { Feedback } from '../feedback';
import { Router, ActivatedRoute } from '@angular/router';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-listfeedback',
  templateUrl: './listfeedback.component.html',
  styleUrls: ['./listfeedback.component.css']
})
export class ListfeedbackComponent implements OnInit {

  username=""
  c = new Customer();
  feedback = new Feedback();
  msg= "";
title = 'Star Rating';  
starList: boolean[] = [true,true,true,true,true];       // create a list which contains status of 5 stars
rating:number;  
//Create a function which receives the value counting of stars click, 
//and according to that value we do change the value of that star in list.
setStar(data:any){
      this.rating=data+1;                               
      for(var i=0;i<=4;i++){  
        if(i<=data){  
          this.starList[i]=false;  
        }  
        else{  
          this.starList[i]=true;  
        }  
     }  
    }
  constructor(private route:ActivatedRoute,private router: Router,private service: RegistrationService) { }

  ngOnInit(): void {
    this.username= this.route.snapshot.params['username']
  }
  userFeedback(){
    this.feedback.rating=this.rating
    console.log(this.feedback.rating)
    console.log(this.feedback.comment)
    this.service.feedbackUserFromRemote(this.feedback).subscribe(
      data =>{
      console.log("response recieved");
      this.router.navigate(['welcome'])
      },
      error =>{
      console.log("exception occured");
    }
    )
  }

}
