import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { metaReducers, reducers } from './reducers';

import { AppEffects } from './app.effects';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { CounterModule } from './common/counter/counter.module';
import { CounterEffects } from './effects/counter.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    EffectsModule.forRoot([AppEffects]),
    EffectsModule.forFeature([CounterEffects]),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    CounterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
