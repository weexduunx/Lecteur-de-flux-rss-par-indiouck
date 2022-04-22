import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  readonly url = 'https://api.rss2json.com/v1/api.json?rss_url=https://www.lemonde.fr/rss/en_continu.xml';
  totalLenght : any ;
  page : number = 1 ;
  varrr : string = "ps"; 
  feeds : any ;
  title! : string ;
  description! : string ;
  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.http.get(this.url).subscribe((data: any) =>{
      console.log("data", data.items) ;
      this.totalLenght = data.items.lenght ;
      this.feeds = data.items ;
      this.title = data.feed.title ;
      this.description = data.feed.description ;
    })
  }
  changeTitle(post:any) {
    post.title = "title modifer";
  }

  changeContent(post:any) {
    post.content = "contenu modifer";
  }

  onSubmitForm() {
    console.log("titre modifier")
  }

}
