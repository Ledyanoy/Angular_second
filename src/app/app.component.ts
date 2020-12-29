import {Component, OnInit} from '@angular/core';

export interface PostInterface {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  title = 'second';
  postList: Array<PostInterface> = [
    {title: 'Jojoba', text: 'ajhfdskjghsdklfjghklsjdhfgk'},
    {title: 'MMMM', text: 'FFFFFFFFFFuuuuUUUUUUU'},
    {title: 'Vot', text: 'Tak Vot'},
  ];

  ngOnInit(): void {
  }

  updatePosts(post: PostInterface): void {
    this.postList.unshift(post);
  }

  removePost(title: string): void {
    this.postList = this.postList.filter(p => p.title !== title);
  }
}
