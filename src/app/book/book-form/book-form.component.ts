import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookForm implements OnInit {
  bookForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.bookForm = this.fb.group({
      isbn: ['', [Validators.required, Validators.minLength(5)]],
      title: ['']
    });
  }

  submitBook() {
    console.log(this.bookForm.value);
  }
}
