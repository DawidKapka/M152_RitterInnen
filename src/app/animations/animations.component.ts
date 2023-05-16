import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss']
})
export class AnimationsComponent implements OnInit {

  private canvas: any;
  private ctx: any;
  private x = 50;
  private y = 50;
  private back: boolean = false

  constructor() { }

  ngOnInit(): void {
    const scrollAnimationDiv: HTMLElement = document.querySelector('.sc-animation')!;
    this.handleScroll();
    this.canvas = document.querySelector('canvas')
    this.ctx = this.canvas.getContext('2d')
    this.draw();
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    if (this.isScrollAnimationVisible()) {
      const scrollAnimationDiv = document.querySelector('.sc-animation');
      const fullScroll = scrollAnimationDiv!.clientHeight - 200;
      const scrolled = (window.innerHeight - 264) - scrollAnimationDiv!.getBoundingClientRect().top;
      const scrollPercentage = (100 / fullScroll) * scrolled;
      if (scrollPercentage <= 100 && scrollPercentage >= 0) {
        const animatedDiv: HTMLElement = document.querySelector('.animated-div')!;
        const animatedHeader: HTMLElement = document.querySelector('.animated-h1')!;
          if (scrollPercentage > 90) {
            animatedDiv.style.height = `${100 - ((scrollPercentage - 90) * 10)}%`;
          }
          else if  (scrollPercentage > 50) {
            animatedDiv.style.marginLeft = `${scrollPercentage - 50}%`
            animatedHeader.style.opacity = `${(scrollPercentage - 50) / 100}`
          } else {
            animatedDiv.style.marginLeft = '0'
            animatedDiv.style.width = `calc(${scrollPercentage}% - 128px)`
            animatedHeader.style.opacity = '0';
          }
      }
    }
  }

  private isScrollAnimationVisible() {
    const scrollAnimationDiv = document.querySelector('.sc-animation')
    const top = scrollAnimationDiv?.getBoundingClientRect().top || 0;
    return window.innerHeight - 200 > top;
  }

  private clearScreen() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  private drawSquare(x: number, y: number) {
    this.ctx.fillRect(x, y, 100, 100);
  }

  private draw() {
    this.clearScreen();
    this.drawSquare(this.x, this.y);
    if (this.x > 200) {
      this.back = true
    }
    if (this.x === 0) {
      this.back = false
    }
    this.x = this.back ? this.x - 5 : this.x + 5;
    setTimeout(() => this.draw(), 50);
  }
}
