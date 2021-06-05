//GET PRODUCT
// GET PRODUCT SUCCESS
// GET PRODUCT FAIL

import { Action } from "@ngrx/store";
import { type } from "os";
import Product from "../modal/product.modal";

// enum data Type
export enum productAction{
  GetProducts = "[Products]Loading",
  GetProductsSuccess = "[Products]Loading Success",
  GetProductsFail = "[Products]Loading Fail"
}

export class GetProducts implements Action{
  public readonly type = productAction.GetProducts;
}

export class GetProductsSuccess implements Action{
  public readonly type = productAction.GetProductsSuccess;
  constructor(public product:Product[]){}
}

export class GetProductsFail implements Action{
  public readonly type = productAction.GetProductsFail;
  constructor(public error:string){}
}

export type productActionType = GetProducts|GetProductsSuccess|GetProductsFail;
