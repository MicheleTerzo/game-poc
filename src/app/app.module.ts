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
import { CardDetailComponent } from './features/table-board/components/card-detail/card-detail.component';
import { PropertyCardComponent } from './features/table-board/components/property-card/property-card.component';
import { CompanyCardComponent } from './features/table-board/components/company-card/company-card.component';
import { StationCardComponent } from './features/table-board/components/station-card/station-card.component';
import { TestingComponent } from './features/testing/testing/testing.component';
import { MainButtonDirective } from './directives/main-button.directive';

@NgModule({
  declarations: [
    AppComponent,
    TableBoardComponent,
    MainMenuComponent,
    StartingModalComponent,
    PlayerBannerComponent,
    CardDetailComponent,
    PropertyCardComponent,
    CompanyCardComponent,
    StationCardComponent,
    TestingComponent,
    MainButtonDirective
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
