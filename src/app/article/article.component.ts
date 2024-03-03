import { Component,Input} from '@angular/core';
import { Article } from "../models/article.model"
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
  public symbols:number = 250;
  @Input() article!: Article;
  @Input() articleDesc!: string;
  showReadMoreBtn: boolean = true;
  showHideBtn: boolean = false;
  articleDescLen:number;
  descToShow:string;
  imageIsShown: boolean = false;
  imageButtonTitle: string = "Show Image"
  constructor(){
    this.articleDescLen = 0;
    this.descToShow = "";
  }

  readMore(): void {
    this.articleDescLen += this.symbols
    if (this.articleDescLen >= this.articleDesc.length) {
        this.showHideBtn = true;
        this.showReadMoreBtn = false;
    }else {
      this.descToShow = this.articleDesc.substring(0,this.articleDescLen)
    }
  }
  toggleImage(): void {
    this.imageIsShown = !this.imageIsShown;
    this.imageButtonTitle = this.imageButtonTitle === "Hide Image" ? "Show Image" : "Hide Image"
  }

  hideDesc(): void {
    this.descToShow = ""
    this.articleDescLen = 0;
    this.showHideBtn = false;
    this.showReadMoreBtn = true;
  }
}
