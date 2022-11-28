import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import accessibilityColorSelector from './app/shared/utils';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

onload = (event) => {
  for (let element of Array.from(document.querySelectorAll('.accessibilityCheck'))) {
    try{
      const relatedImg = Array.of(document.querySelector('.accessibilityCheckImg')!)
        .filter((img) => (img as HTMLElement).dataset['num'] === (element as HTMLElement).dataset['num'])[0] as HTMLImageElement;
      (element as HTMLElement).style.color = accessibilityColorSelector({
        imageLink: relatedImg.src, position: (element as HTMLElement).dataset['position'] });
    } catch(e) {
      console.error(e);
    }
  }
};





