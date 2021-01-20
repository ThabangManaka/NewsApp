import { NewsService } from './../service/news.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  articles: any;
  constructor(private newsService: NewsService ) {}
   
 
    ngOnInit() {
    this.loadNews();
  }
   loadNews() {
      this.newsService.getData('top-headlines?country=us').subscribe(news => {
   
        this.articles=news['articles']
      console.log(this.articles);
     })
   }
}
