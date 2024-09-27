// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as TargetsAPI from './targets';

export class Infrastructure extends APIResource {
  targets: TargetsAPI.Targets = new TargetsAPI.Targets(this._client);
}

export namespace Infrastructure {
  export import Targets = TargetsAPI.Targets;
  export import TargetCreateResponse = TargetsAPI.TargetCreateResponse;
  export import TargetUpdateResponse = TargetsAPI.TargetUpdateResponse;
  export import TargetListResponse = TargetsAPI.TargetListResponse;
  export import TargetGetResponse = TargetsAPI.TargetGetResponse;
  export import TargetListResponsesV4PagePaginationArray = TargetsAPI.TargetListResponsesV4PagePaginationArray;
  export import TargetCreateParams = TargetsAPI.TargetCreateParams;
  export import TargetUpdateParams = TargetsAPI.TargetUpdateParams;
  export import TargetListParams = TargetsAPI.TargetListParams;
  export import TargetDeleteParams = TargetsAPI.TargetDeleteParams;
  export import TargetGetParams = TargetsAPI.TargetGetParams;
}
