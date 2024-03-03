import { Component,OnInit } from '@angular/core';
import { ArticleData } from '../data/data';
import { Article } from '../models/article.model'
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent implements OnInit {
    articles! : Article [];
    // non-null assertion operator
    constructor() {}
    ngOnInit() {
        this.articles = new ArticleData().getData()
    }
}
