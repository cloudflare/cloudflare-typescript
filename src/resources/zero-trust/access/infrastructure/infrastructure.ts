// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as TargetsAPI from './targets';
import {
  BaseTargets,
  TargetBulkDeleteParams,
  TargetBulkDeleteV2Params,
  TargetBulkUpdateParams,
  TargetBulkUpdateResponse,
  TargetBulkUpdateResponsesSinglePage,
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

export class BaseInfrastructure extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'access', 'infrastructure'] = Object.freeze([
    'zeroTrust',
    'access',
    'infrastructure',
  ] as const);
}
export class Infrastructure extends BaseInfrastructure {
  targets: TargetsAPI.Targets = new TargetsAPI.Targets(this._client);
}

Infrastructure.Targets = Targets;
Infrastructure.BaseTargets = BaseTargets;

export declare namespace Infrastructure {
  export {
    Targets as Targets,
    BaseTargets as BaseTargets,
    type TargetCreateResponse as TargetCreateResponse,
    type TargetUpdateResponse as TargetUpdateResponse,
    type TargetListResponse as TargetListResponse,
    type TargetBulkUpdateResponse as TargetBulkUpdateResponse,
    type TargetGetResponse as TargetGetResponse,
    type TargetListResponsesV4PagePaginationArray as TargetListResponsesV4PagePaginationArray,
    type TargetBulkUpdateResponsesSinglePage as TargetBulkUpdateResponsesSinglePage,
    type TargetCreateParams as TargetCreateParams,
    type TargetUpdateParams as TargetUpdateParams,
    type TargetListParams as TargetListParams,
    type TargetDeleteParams as TargetDeleteParams,
    type TargetBulkDeleteParams as TargetBulkDeleteParams,
    type TargetBulkDeleteV2Params as TargetBulkDeleteV2Params,
    type TargetBulkUpdateParams as TargetBulkUpdateParams,
    type TargetGetParams as TargetGetParams,
  };
}
