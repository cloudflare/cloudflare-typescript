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
  export import IndicatorFeedCreateResponse = IndicatorFeedsAPI.IndicatorFeedCreateResponse;
  export import IndicatorFeedListResponse = IndicatorFeedsAPI.IndicatorFeedListResponse;
  export import IndicatorFeedDataResponse = IndicatorFeedsAPI.IndicatorFeedDataResponse;
  export import IndicatorFeedGetResponse = IndicatorFeedsAPI.IndicatorFeedGetResponse;
  export import IndicatorFeedPermissionsAddResponse = IndicatorFeedsAPI.IndicatorFeedPermissionsAddResponse;
  export import IndicatorFeedPermissionsRemoveResponse = IndicatorFeedsAPI.IndicatorFeedPermissionsRemoveResponse;
  export import IndicatorFeedPermissionsViewResponse = IndicatorFeedsAPI.IndicatorFeedPermissionsViewResponse;
  export import IndicatorFeedSnapshotResponse = IndicatorFeedsAPI.IndicatorFeedSnapshotResponse;
  export import IndicatorFeedCreateParams = IndicatorFeedsAPI.IndicatorFeedCreateParams;
  export import IndicatorFeedPermissionsAddParams = IndicatorFeedsAPI.IndicatorFeedPermissionsAddParams;
  export import IndicatorFeedPermissionsRemoveParams = IndicatorFeedsAPI.IndicatorFeedPermissionsRemoveParams;
  export import IndicatorFeedSnapshotParams = IndicatorFeedsAPI.IndicatorFeedSnapshotParams;
  export import Sinkholes = SinkholesAPI.Sinkholes;
  export import SinkholeListResponse = SinkholesAPI.SinkholeListResponse;
}
