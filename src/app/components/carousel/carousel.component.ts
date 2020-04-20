import { Component, OnInit, Input, ViewChild, ElementRef } from "@angular/core";

enum Direction {
  UNKNOWN,
  NEXT,
  PREV,
}
@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"],
})
export class CarouselComponent implements OnInit {
  @Input() page = 0;
  @Input() itemsPerSlide = 1;
  // @ViewChild("ccc") ccc;
  @ViewChild("ccc") ccc: any;
  constructor() {}

  ngOnInit(): void {
    console.log(this.ccc);
  }

  ngAfterViewInit(): void {
    console.log(this.ccc);
  }

  ngOnChanges(changes): void {
    if (this.ccc) {
      this.ccc.move(Direction.NEXT);
    }
    console.log("this.page", this.page);
    console.log("this.itemsPerSlide", this.itemsPerSlide);
  }
}
