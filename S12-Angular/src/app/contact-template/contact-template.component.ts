import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
interface ContactForm
{
  "name": string,
  "checkAdult": boolean;
  "department": string;
  "comment": string;
}

@Component({
  selector: 'app-contact-template',
  templateUrl: './contact-template.component.html',
  styleUrls: ['./contact-template.component.css']
})
export class ContactTemplateComponent implements OnInit {

  model = {
    name: '',
    checkAdult: false,
    department: '',
    comment: ''
  }
  ngOnInit(): void {
  }
  onSubmit(form: NgForm): void {
    console.log('Form values', form);
  }
}
