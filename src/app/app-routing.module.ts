import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterWordComponent } from './filter-word/filter-word.component';
import { BlacklistPipe } from './blacklist.pipe';

const routes: Routes = [
  {path:"filterWord",component:FilterWordComponent},
 {path:"blacklist",component:BlacklistPipe}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
