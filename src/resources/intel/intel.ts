// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as IndicatorFeedsAPI from 'cloudflare/resources/intel/indicator-feeds';
import * as SinkholesAPI from 'cloudflare/resources/intel/sinkholes';

export class Intel extends APIResource {
  indicatorFeeds: IndicatorFeedsAPI.IndicatorFeeds = new IndicatorFeedsAPI.IndicatorFeeds(this._client);
  sinkholes: SinkholesAPI.Sinkholes = new SinkholesAPI.Sinkholes(this._client);
}

export namespace Intel {
  export import IndicatorFeeds = IndicatorFeedsAPI.IndicatorFeeds;
  export import Sinkholes = SinkholesAPI.Sinkholes;
  export import SinkholeListResponse = SinkholesAPI.SinkholeListResponse;
}
