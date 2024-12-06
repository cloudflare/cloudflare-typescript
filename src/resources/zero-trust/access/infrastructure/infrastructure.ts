// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as TargetsAPI from './targets';
import {
  TargetBulkDeleteParams,
  TargetBulkUpdateParams,
  TargetBulkUpdateResponse,
  TargetCreateParams,
  TargetCreateResponse,
  TargetDeleteParams,
  TargetGetParams,
  TargetGetResponse,
  TargetListParams,
  TargetListResponse,
  TargetListResponsesV4PagePaginationArray,
  TargetUpdateParams,
  TargetUpdateResponse,
  Targets,
} from './targets';

export class Infrastructure extends APIResource {
  targets: TargetsAPI.Targets = new TargetsAPI.Targets(this._client);
}

Infrastructure.Targets = Targets;
Infrastructure.TargetListResponsesV4PagePaginationArray = TargetListResponsesV4PagePaginationArray;

export declare namespace Infrastructure {
  export {
    Targets as Targets,
    type TargetCreateResponse as TargetCreateResponse,
    type TargetUpdateResponse as TargetUpdateResponse,
    type TargetListResponse as TargetListResponse,
    type TargetBulkUpdateResponse as TargetBulkUpdateResponse,
    type TargetGetResponse as TargetGetResponse,
    TargetListResponsesV4PagePaginationArray as TargetListResponsesV4PagePaginationArray,
    type TargetCreateParams as TargetCreateParams,
    type TargetUpdateParams as TargetUpdateParams,
    type TargetListParams as TargetListParams,
    type TargetDeleteParams as TargetDeleteParams,
    type TargetBulkDeleteParams as TargetBulkDeleteParams,
    type TargetBulkUpdateParams as TargetBulkUpdateParams,
    type TargetGetParams as TargetGetParams,
  };
}
