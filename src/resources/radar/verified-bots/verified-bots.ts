// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as TopAPI from './top';

export class VerifiedBots extends APIResource {
  top: TopAPI.Top = new TopAPI.Top(this._client);
}

export namespace VerifiedBots {
  export import Top = TopAPI.Top;
  export import TopBotsResponse = TopAPI.TopBotsResponse;
  export import TopCategoriesResponse = TopAPI.TopCategoriesResponse;
  export import TopBotsParams = TopAPI.TopBotsParams;
  export import TopCategoriesParams = TopAPI.TopCategoriesParams;
}
