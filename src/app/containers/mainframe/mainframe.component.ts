import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-mainframe",
  templateUrl: "./mainframe.component.html",
  styleUrls: ["./mainframe.component.scss"],
})
export class MainframeComponent implements OnInit {
  showCarousel = false;
  page = 0;
  pagesPerView = 1;
  constructor() {}

  ngOnInit(): void {
    this.showCarousel = true;
  }

  onNavigate(page: number) {
    const newPage = this.page + page;
    if (newPage >= 0 && newPage < 4) {
      this.page = this.page + page;
    }
  }

  onPageAmount(amount: number) {
    this.showCarousel = false;
    this.pagesPerView = amount;
    setTimeout(() => {
      this.showCarousel = true;
    }, 0);
  }
}
