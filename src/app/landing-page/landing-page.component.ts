import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  public title = 'PluginMusic';
  public slug = 'The place to find your favorite MAO plugins';
  public getScreenWidth: any;
  public getScreenHeight: any;
  public bkgImage = this.backgroundImage();

  initWidth() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }

  backgroundImage() {
    this.initWidth()
    return `https://images.unsplash.com/photo-1618609378039-b572f64c5b42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${this.getScreenWidth}&h=${this.getScreenHeight}&q=80`
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.bkgImage = this.backgroundImage();
  }

}
