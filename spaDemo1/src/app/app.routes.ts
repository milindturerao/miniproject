import { Routes } from "@angular/router";
import authService from "./guards/auth.guards";
import { KidsComponent } from "./kids.component";
import { NikiComponent } from "./niki.component";
import { PantsComponent } from "./pants.component";
import { PoloComponent } from "./polo.component";
import { ShirtsComponent } from "./shirts.component";
import { SummerComponent } from "./summer.component";
export const appRoutes:Routes = [
    {path:"shirts/:p_id/:p_name/:p_cost",component:ShirtsComponent,children:[{path:"polo/:p_id/:p_name/:p_cost",component:PoloComponent}],canActivate:[authService]},
    {path:"pants/:p_id/:p_name/:p_cost",component:PantsComponent,children:[{path:"niki/:p_id/:p_name/:p_cost",component:NikiComponent}],canDeactivate:[authService]},
    {path:"kids/:p_id/:p_name/:p_cost",component:KidsComponent,children:[{path:"summer/:p_id/:p_name/:p_cost",component:SummerComponent}],canActivateChild:[authService]}
];
