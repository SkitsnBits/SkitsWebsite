import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-collage',
  imports: [],
  templateUrl: './collage.component.html',
  styleUrl: './collage.component.scss'
})
export class CollageComponent {
  public collageLinks = input<string[]>([])
  public collageList = signal<CollageImage[]>([]);
  public collageReady = signal<boolean>(false);

  ngOnInit(): void {
    this.preloadImages(this.collageLinks()).then(() => {
      this.collageReady.set(true);
    });
    this.generateCollageImages()
  }

  private preloadImages(urls: string[]): Promise<void> {
    let loaded = 0;
    return new Promise(resolve => {
      for (const url of urls) {
        const img = new Image();
        img.onload = img.onerror = () => {
          loaded++;
          if (loaded === urls.length) resolve();
        };
        img.src = url;
      }
    });
  }

  private generateCollageImages() {
    let _collageLinks = this.collageLinks().sort(() => Math.random() - 0.5)
    for (let link of _collageLinks) {
      this.collageList().push(
        new CollageImage(link)
      )
    }
  }

}

class CollageImage {
  url: string = ""
  size: string = `${this.randomBetween(100, 200)}%`
  position: string = `${this.randomBetween(40, 60)}% ${this.randomBetween(40, 60)}%`
  translateY: string = `${this.randomBetween(-30,30)}px`
  scale: number = this.randomBetween(100, 130) / 100
  zIndex: number = this.randomBetween(1, 10)

  constructor(url: string) {
    this.url = url
  }

  private randomBetween(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
