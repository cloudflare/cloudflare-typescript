// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CloudIntegrationsAPI from './cloud-integrations';
import { BaseCloudIntegrations, CloudIntegrations } from './cloud-integrations';
import * as ResourcesAPI from './resources';
import { BaseResources, Resources } from './resources';
import * as CatalogSyncsAPI from './catalog-syncs/catalog-syncs';
import { BaseCatalogSyncs, CatalogSyncs } from './catalog-syncs/catalog-syncs';
import * as OnRampsAPI from './on-ramps/on-ramps';
import { BaseOnRamps, OnRamps } from './on-ramps/on-ramps';

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
  export { CatalogSyncs as CatalogSyncs, BaseCatalogSyncs as BaseCatalogSyncs };

  export { OnRamps as OnRamps, BaseOnRamps as BaseOnRamps };

  export { CloudIntegrations as CloudIntegrations, BaseCloudIntegrations as BaseCloudIntegrations };

  export { Resources as Resources, BaseResources as BaseResources };
}
