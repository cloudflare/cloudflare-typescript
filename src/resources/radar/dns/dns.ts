// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as TopAPI from './top';

export class DNS extends APIResource {
  top: TopAPI.Top = new TopAPI.Top(this._client);
}

export namespace DNS {
  export import Top = TopAPI.Top;
  export import TopAsesResponse = TopAPI.TopAsesResponse;
  export import TopLocationsResponse = TopAPI.TopLocationsResponse;
  export import TopAsesParams = TopAPI.TopAsesParams;
  export import TopLocationsParams = TopAPI.TopLocationsParams;
}
