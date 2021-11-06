import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './components/app.component';
import {TableBoardComponent} from './features/table-board/components/table-board/table-board.component';
import {MainMenuComponent} from './features/main-menu/components/main-menu/main-menu.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {StartingModalComponent} from './features/main-menu/components/starting-modal/starting-modal.component';
import {StoreModule} from "@ngrx/store";
import { PlayerBannerComponent } from './shared/components/player-banner/player-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    TableBoardComponent,
    MainMenuComponent,
    StartingModalComponent,
    PlayerBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
