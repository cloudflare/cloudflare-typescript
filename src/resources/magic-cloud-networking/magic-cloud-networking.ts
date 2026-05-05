// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CloudIntegrationsAPI from './cloud-integrations';
import {
  BaseCloudIntegrations,
  CloudIntegrationCreateParams,
  CloudIntegrationCreateResponse,
  CloudIntegrationDeleteParams,
  CloudIntegrationDeleteResponse,
  CloudIntegrationDiscoverAllParams,
  CloudIntegrationDiscoverAllResponse,
  CloudIntegrationDiscoverParams,
  CloudIntegrationDiscoverResponse,
  CloudIntegrationEditParams,
  CloudIntegrationEditResponse,
  CloudIntegrationGetParams,
  CloudIntegrationGetResponse,
  CloudIntegrationInitialSetupParams,
  CloudIntegrationInitialSetupResponse,
  CloudIntegrationListParams,
  CloudIntegrationListResponse,
  CloudIntegrationListResponsesSinglePage,
  CloudIntegrationUpdateParams,
  CloudIntegrationUpdateResponse,
  CloudIntegrations,
} from './cloud-integrations';
import * as ResourcesAPI from './resources';
import {
  BaseResources,
  ResourceExportParams,
  ResourceGetParams,
  ResourceGetResponse,
  ResourceListParams,
  ResourceListResponse,
  ResourceListResponsesV4PagePaginationArray,
  ResourcePolicyPreviewParams,
  ResourcePolicyPreviewResponse,
  Resources,
} from './resources';
import * as CatalogSyncsAPI from './catalog-syncs/catalog-syncs';
import {
  BaseCatalogSyncs,
  CatalogSyncCreateParams,
  CatalogSyncCreateResponse,
  CatalogSyncDeleteParams,
  CatalogSyncDeleteResponse,
  CatalogSyncEditParams,
  CatalogSyncEditResponse,
  CatalogSyncGetParams,
  CatalogSyncGetResponse,
  CatalogSyncListParams,
  CatalogSyncListResponse,
  CatalogSyncListResponsesSinglePage,
  CatalogSyncRefreshParams,
  CatalogSyncRefreshResponse,
  CatalogSyncUpdateParams,
  CatalogSyncUpdateResponse,
  CatalogSyncs,
} from './catalog-syncs/catalog-syncs';
import * as OnRampsAPI from './on-ramps/on-ramps';
import {
  BaseOnRamps,
  OnRampApplyParams,
  OnRampApplyResponse,
  OnRampCreateParams,
  OnRampCreateResponse,
  OnRampDeleteParams,
  OnRampDeleteResponse,
  OnRampEditParams,
  OnRampEditResponse,
  OnRampExportParams,
  OnRampGetParams,
  OnRampGetResponse,
  OnRampListParams,
  OnRampListResponse,
  OnRampListResponsesSinglePage,
  OnRampPlanParams,
  OnRampPlanResponse,
  OnRampUpdateParams,
  OnRampUpdateResponse,
  OnRamps,
} from './on-ramps/on-ramps';

export class BaseMagicCloudNetworking extends APIResource {
  static override readonly _key: readonly ['magicCloudNetworking'] = Object.freeze([
    'magicCloudNetworking',
  ] as const);
}
export class MagicCloudNetworking extends BaseMagicCloudNetworking {
  catalogSyncs: CatalogSyncsAPI.CatalogSyncs = new CatalogSyncsAPI.CatalogSyncs(this._client);
  onRamps: OnRampsAPI.OnRamps = new OnRampsAPI.OnRamps(this._client);
  cloudIntegrations: CloudIntegrationsAPI.CloudIntegrations = new CloudIntegrationsAPI.CloudIntegrations(
    this._client,
  );
  resources: ResourcesAPI.Resources = new ResourcesAPI.Resources(this._client);
}

MagicCloudNetworking.CatalogSyncs = CatalogSyncs;
MagicCloudNetworking.BaseCatalogSyncs = BaseCatalogSyncs;
MagicCloudNetworking.OnRamps = OnRamps;
MagicCloudNetworking.BaseOnRamps = BaseOnRamps;
MagicCloudNetworking.CloudIntegrations = CloudIntegrations;
MagicCloudNetworking.BaseCloudIntegrations = BaseCloudIntegrations;
MagicCloudNetworking.Resources = Resources;
MagicCloudNetworking.BaseResources = BaseResources;

export declare namespace MagicCloudNetworking {
  export {
    CatalogSyncs as CatalogSyncs,
    BaseCatalogSyncs as BaseCatalogSyncs,
    type CatalogSyncCreateResponse as CatalogSyncCreateResponse,
    type CatalogSyncUpdateResponse as CatalogSyncUpdateResponse,
    type CatalogSyncListResponse as CatalogSyncListResponse,
    type CatalogSyncDeleteResponse as CatalogSyncDeleteResponse,
    type CatalogSyncEditResponse as CatalogSyncEditResponse,
    type CatalogSyncGetResponse as CatalogSyncGetResponse,
    type CatalogSyncRefreshResponse as CatalogSyncRefreshResponse,
    type CatalogSyncListResponsesSinglePage as CatalogSyncListResponsesSinglePage,
    type CatalogSyncCreateParams as CatalogSyncCreateParams,
    type CatalogSyncUpdateParams as CatalogSyncUpdateParams,
    type CatalogSyncListParams as CatalogSyncListParams,
    type CatalogSyncDeleteParams as CatalogSyncDeleteParams,
    type CatalogSyncEditParams as CatalogSyncEditParams,
    type CatalogSyncGetParams as CatalogSyncGetParams,
    type CatalogSyncRefreshParams as CatalogSyncRefreshParams,
  };

  export {
    OnRamps as OnRamps,
    BaseOnRamps as BaseOnRamps,
    type OnRampCreateResponse as OnRampCreateResponse,
    type OnRampUpdateResponse as OnRampUpdateResponse,
    type OnRampListResponse as OnRampListResponse,
    type OnRampDeleteResponse as OnRampDeleteResponse,
    type OnRampApplyResponse as OnRampApplyResponse,
    type OnRampEditResponse as OnRampEditResponse,
    type OnRampGetResponse as OnRampGetResponse,
    type OnRampPlanResponse as OnRampPlanResponse,
    type OnRampListResponsesSinglePage as OnRampListResponsesSinglePage,
    type OnRampCreateParams as OnRampCreateParams,
    type OnRampUpdateParams as OnRampUpdateParams,
    type OnRampListParams as OnRampListParams,
    type OnRampDeleteParams as OnRampDeleteParams,
    type OnRampApplyParams as OnRampApplyParams,
    type OnRampEditParams as OnRampEditParams,
    type OnRampExportParams as OnRampExportParams,
    type OnRampGetParams as OnRampGetParams,
    type OnRampPlanParams as OnRampPlanParams,
  };

  export {
    CloudIntegrations as CloudIntegrations,
    BaseCloudIntegrations as BaseCloudIntegrations,
    type CloudIntegrationCreateResponse as CloudIntegrationCreateResponse,
    type CloudIntegrationUpdateResponse as CloudIntegrationUpdateResponse,
    type CloudIntegrationListResponse as CloudIntegrationListResponse,
    type CloudIntegrationDeleteResponse as CloudIntegrationDeleteResponse,
    type CloudIntegrationDiscoverResponse as CloudIntegrationDiscoverResponse,
    type CloudIntegrationDiscoverAllResponse as CloudIntegrationDiscoverAllResponse,
    type CloudIntegrationEditResponse as CloudIntegrationEditResponse,
    type CloudIntegrationGetResponse as CloudIntegrationGetResponse,
    type CloudIntegrationInitialSetupResponse as CloudIntegrationInitialSetupResponse,
    type CloudIntegrationListResponsesSinglePage as CloudIntegrationListResponsesSinglePage,
    type CloudIntegrationCreateParams as CloudIntegrationCreateParams,
    type CloudIntegrationUpdateParams as CloudIntegrationUpdateParams,
    type CloudIntegrationListParams as CloudIntegrationListParams,
    type CloudIntegrationDeleteParams as CloudIntegrationDeleteParams,
    type CloudIntegrationDiscoverParams as CloudIntegrationDiscoverParams,
    type CloudIntegrationDiscoverAllParams as CloudIntegrationDiscoverAllParams,
    type CloudIntegrationEditParams as CloudIntegrationEditParams,
    type CloudIntegrationGetParams as CloudIntegrationGetParams,
    type CloudIntegrationInitialSetupParams as CloudIntegrationInitialSetupParams,
  };

  export {
    Resources as Resources,
    BaseResources as BaseResources,
    type ResourceListResponse as ResourceListResponse,
    type ResourceGetResponse as ResourceGetResponse,
    type ResourcePolicyPreviewResponse as ResourcePolicyPreviewResponse,
    type ResourceListResponsesV4PagePaginationArray as ResourceListResponsesV4PagePaginationArray,
    type ResourceListParams as ResourceListParams,
    type ResourceExportParams as ResourceExportParams,
    type ResourceGetParams as ResourceGetParams,
    type ResourcePolicyPreviewParams as ResourcePolicyPreviewParams,
  };
}
