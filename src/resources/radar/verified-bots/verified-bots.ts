// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as TopAPI from './top';

export class VerifiedBots extends APIResource {
  top: TopAPI.Top = new TopAPI.Top(this._client);
}

export namespace VerifiedBots {
  export import Top = TopAPI.Top;
  export type TopBotsResponse = TopAPI.TopBotsResponse;
  export type TopCategoriesResponse = TopAPI.TopCategoriesResponse;
  export type TopBotsParams = TopAPI.TopBotsParams;
  export type TopCategoriesParams = TopAPI.TopCategoriesParams;
}
