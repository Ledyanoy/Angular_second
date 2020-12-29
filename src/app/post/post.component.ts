import {Component, ContentChild, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {PostInterface} from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit, OnDestroy {
  @Input() post!: PostInterface;
  @Output() onRemove: EventEmitter<string> = new EventEmitter<string>();
  @ContentChild('postInfo', {static: true}) postInfoRef!: ElementRef;

  constructor() {
  }

  removePost(): void {
    this.onRemove.emit(this.post.title);
  }

  ngOnInit(): void {
    console.log(this.postInfoRef.nativeElement);
  }

  ngOnDestroy(): void {
    console.log('destroy');
  }
}
