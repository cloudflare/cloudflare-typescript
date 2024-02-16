// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as BotsAPI from 'cloudflare/resources/radar/verified-bots/tops/bots';
import * as CategoriesAPI from 'cloudflare/resources/radar/verified-bots/tops/categories';

export class Tops extends APIResource {
  bots: BotsAPI.Bots = new BotsAPI.Bots(this._client);
  categories: CategoriesAPI.Categories = new CategoriesAPI.Categories(this._client);
}

export namespace Tops {
  export import Bots = BotsAPI.Bots;
  export import BotListResponse = BotsAPI.BotListResponse;
  export import BotListParams = BotsAPI.BotListParams;
  export import Categories = CategoriesAPI.Categories;
  export import CategoryListResponse = CategoriesAPI.CategoryListResponse;
  export import CategoryListParams = CategoriesAPI.CategoryListParams;
}
