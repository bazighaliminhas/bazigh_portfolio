import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  Experiences: any[] = [
    // {
    //   Tab: 'iSchoolTech',
    //   Title: 'Instructor',
    //   Date: 'Sep 2023 – present',
    //   Description: [
    //     'instructor at iSchoolTech, teaching programming to students of various grades remotely',
    //     'Skilled in delivering engaging lessons and encouraging hands-on learning, ensuring students grasp fundamental programming concepts with enthusiasm',
        
    //   ]
    // },


    {
      Tab: 'eSoftage Solution',
      Title: 'Angular Developer',
      Date: '2024',
      Description: [
        `Designed and implemented reusable, modular components in Angular, enhancing code maintainability and reducing future development effort.`,
        `Efficiently handled routing between different components, ensuring a smooth and intuitive user experience.`,
        `Ensured complete responsiveness of the web components across a variety of screen sizes and devices, resulting in improved user engagement.`,
        `Contributed to detailed project documentation, clearly outlining the system's functionalities and providing guidelines for future maintenance.`,
        'Actively participated in team discussions and contributed to feature development and bug fixing, ensuring timely delivery of the project.'
      
      
      
      ]
    },




    {
      Tab: 'VU360 Solutions',
      Title: 'Front-end developer',
      Date: 'July 2023 - December 2023',
      Description: [
        'Dynamic Forms : The system is able to create forms and allows the user to control validation, input types, design without write code. ',
        'Implementing continuous improvements, working on frontend',
        'Functional programming in templates and plugins to add the necessary monitoring features.'
      ]
    },
    {
      Tab: 'Education',
      Title: 'Bachelor of Science in Computer Science (BSCS)',
      Date: 'University of South Asia, Lahore, Pakistan (2018 – 2022)',
      Description: [
        'Graduated with a strong foundation in software engineering concepts and principles.',
        'Successfully completed a comprehensive graduation project focused on software development and problem-solving.'
      ]
    },


    



  ];
  active = 0
  
  constructor(
    public analyticsService: AnalyticsService
  ) { }

  ngOnInit(): void {
  }

}
