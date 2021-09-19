import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TableBoardComponent} from "./features/table-board/components/table-board/table-board.component";

const routes: Routes = [
  {path: 'board', component: TableBoardComponent},
  {path: '', redirectTo: 'board', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
