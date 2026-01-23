import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  testimonials = [
    {
      quote: "Elena transformed our chaotic internal processes into a well-oiled machine. Her proactive approach is exactly what a fast-scaling tech startup needs.",
      author: "Founder, Tech Startup"
    },
    {
      quote: "As a creative, I used to get bogged down in admin. Elena handled everything with such precision that I finally had the space to create again.",
      author: "Creative Director"
    },
    {
      quote: "The level of detail and professionalism Elena brings is unmatched. She doesn't just follow instructions; she anticipates needs.",
      author: "CEO, Small Business"
    }
  ];

  expertise = [
    "Operations & Workflow Optimization",
    "Strategic Communications",
    "Project Management",
    "Technical Research & Data Management"
  ];

  toolkit = [
    "Google Workspace", "Slack", "Asana", "ChatGPT Plus", "Claude", "HubSpot", "Notion", "Zoom"
  ];

  currentYear = new Date().getFullYear();
}
