import { Component, OnInit } from '@angular/core';
import { Feedback } from '../feedback';
import { Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedback = new Feedback();

  constructor(private router: Router,private service: RegistrationService) { }

  ngOnInit(): void {
    this.feedbackss()
  }

  feedbackss(){
    this.service.viewfeedbacks('sidshekh').subscribe(
      response => {
        console.log(response);
        this.feedback = response;
      }
    )
  }
}
