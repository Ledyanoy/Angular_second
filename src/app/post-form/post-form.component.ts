import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {PostInterface} from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  @Output() onAdd: EventEmitter<PostInterface> = new EventEmitter<PostInterface>();
  @ViewChild('titleInput') titleInputRef!: ElementRef;
  title = '';
  text = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  onButtonClick(): void {
    if (this.text.trim() && this.title.trim()) {
      const newPost: PostInterface = {
        title: this.title,
        text: this.text
      };
      this.onAdd.emit(newPost);
      this.title = this.text = '';
    }
  }

  focusTitle(): void {
    this.titleInputRef.nativeElement.focus();
  }

}
