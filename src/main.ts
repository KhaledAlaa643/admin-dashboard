import { enableProdMode, importProvidersFrom, InjectionToken } from '@angular/core';

import { environment } from './environments/environment';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppRoutingModule } from './app/app-routing.module';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';
import {  HttpClientModule } from '@angular/common/http';
import { DataServiceInterface } from './app/core/modal/data.interface';
import { DataService } from './app/core/services/data.service';
import { StatifcDataService } from './app/core/services/statifc-data.service';

export const DATA_SERVICE_TOKEN = new InjectionToken<DataServiceInterface>('DATA_SERVICE_TOKEN');

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(BrowserModule, AppRoutingModule,HttpClientModule), provideAnimations(),
    {
      provide: DATA_SERVICE_TOKEN,
      useClass: environment.useFakeData ? StatifcDataService : DataService
    }
  ]
}).catch((err) => console.error(err));
