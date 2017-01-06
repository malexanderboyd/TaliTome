import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Characters } from '../pages/characters/characters';
import { Cards } from '../pages/cards/cards';
import { Home } from '../pages/home/home';
import { Tools } from '../pages/tools/tools';
@NgModule({
  declarations: [
    MyApp,
    Home,
    Cards,
    Characters,
    Tools
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    Cards,
    Characters,
    Tools
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
