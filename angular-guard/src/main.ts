import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

const urlExample = 'example.url.com'
async function loadJson(url: string) {
  try{
    fetch(url).then((response)=> {
      if(!response.ok) {
        throw new Error('[Fetch error]')
      }
      return response.json()
    })
  } catch (error) {
    console.log('[We get an error]', error)
  } finally {
    console.log('Promise is settled')
  }
};

loadJson(urlExample).then((response) => {
  console.log('[value form try state]', response)
})
