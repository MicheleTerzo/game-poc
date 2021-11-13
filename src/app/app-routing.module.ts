import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TableBoardComponent} from "./features/table-board/components/table-board/table-board.component";
import {MainMenuComponent} from "./features/main-menu/components/main-menu/main-menu.component";
import {TestingComponent} from "./features/testing/testing/testing.component";

const routes: Routes = [
  {path: 'board', component: TableBoardComponent},
  {path: 'menu', component: MainMenuComponent},
  {path: 'testing', component: TestingComponent},
  {path: '', redirectTo: 'menu', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
