import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  

  questionsList:any=[{
      "Question":"1. Father of Angular?",
       "option1":"Igor Minor",
       "option2":"Misko Hevery",
       "option3":"Brad Green",
       "option4":"Gausling",
       "Ans":"Misko Hevery"
    },
    {
      "Question":"2. Angular is based on?",
       "option1":"MVC Architecture",
       "option2":"MVVM Architecture",
       "option3":"Decorator pattern",
       "option4":"Observer Pattern",
       "Ans":"MVVM Architecture"
    },
    {
      "Question":"3. Angular 1.x is written in?",
       "option1":"C++",
       "option2":"Java",
       "option3":"Typescript",
       "option4":"Javascript",
       "Ans":"Javascript"
    },
    {
      "Question":"4. Which directive is used for form?",
       "option1":"ng-app",
       "option2":"ng-form",
       "option3":"ng-end",
       "option4":"ng-start",
       "Ans":"ng-form"
    },
    {
      "Question":"5. Angular directives are used in?",
       "option1":"Model",
       "option2":"Module",
       "option3":"View",
       "option4":"Controller",
       "Ans":"View"
    }
  ]
}
