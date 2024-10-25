// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as TargetsAPI from './targets';

export class Infrastructure extends APIResource {
  targets: TargetsAPI.Targets = new TargetsAPI.Targets(this._client);
}

export namespace Infrastructure {
  export import Targets = TargetsAPI.Targets;
  export type TargetCreateResponse = TargetsAPI.TargetCreateResponse;
  export type TargetUpdateResponse = TargetsAPI.TargetUpdateResponse;
  export type TargetListResponse = TargetsAPI.TargetListResponse;
  export type TargetGetResponse = TargetsAPI.TargetGetResponse;
  export import TargetListResponsesV4PagePaginationArray = TargetsAPI.TargetListResponsesV4PagePaginationArray;
  export type TargetCreateParams = TargetsAPI.TargetCreateParams;
  export type TargetUpdateParams = TargetsAPI.TargetUpdateParams;
  export type TargetListParams = TargetsAPI.TargetListParams;
  export type TargetDeleteParams = TargetsAPI.TargetDeleteParams;
  export type TargetGetParams = TargetsAPI.TargetGetParams;
}
