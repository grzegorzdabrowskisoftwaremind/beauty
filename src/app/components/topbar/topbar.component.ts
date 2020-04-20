import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: "app-topbar",
  templateUrl: "./topbar.component.html",
  styleUrls: ["./topbar.component.scss"],
})
export class TopbarComponent implements OnInit {
  @Output() navigate: EventEmitter<number> = new EventEmitter<number>();
  @Output() pagesAmount: EventEmitter<number> = new EventEmitter<number>();
  @Input() page = 0;
  constructor() {}

  ngOnInit(): void {}

  goBack(): void {
    this.navigate.emit(-1);
  }

  goNext(): void {
    this.navigate.emit(1);
  }

  setPages(amount: number): void {
    this.pagesAmount.emit(amount);
  }

  openFullscreen(): void {
    const elem = document.documentElement as any;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE/Edge */
      elem.msRequestFullscreen();
    }
  }
}
