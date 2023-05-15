import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss']
})
export class AnimationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll(event: any) {
    if (this.isScrollAnimationVisible()) {
      const scrollAnimationDiv = document.querySelector('.sc-animation');
      const fullScroll = scrollAnimationDiv!.clientHeight - 200;
      const scrolled = (window.innerHeight - 264) - scrollAnimationDiv!.getBoundingClientRect().top;
      const scrollPercentage = (100 / fullScroll) * scrolled;
      if (scrollPercentage <= 100 && scrollPercentage >= 0) {
        const animatedDiv: HTMLElement = document.querySelector('.animated-div')!;
        const animatedHeader: HTMLElement = document.querySelector('.animated-h1')!;
          if  (scrollPercentage > 50) {
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
}
