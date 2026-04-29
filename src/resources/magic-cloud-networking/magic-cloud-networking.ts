// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as CloudIntegrationsAPI from './cloud-integrations';
import { CloudIntegrations } from './cloud-integrations';
import * as ResourcesAPI from './resources';
import { Resources } from './resources';
import * as CatalogSyncsAPI from './catalog-syncs/catalog-syncs';
import { CatalogSyncs } from './catalog-syncs/catalog-syncs';
import * as OnRampsAPI from './on-ramps/on-ramps';
import { OnRamps } from './on-ramps/on-ramps';

export class MagicCloudNetworking extends APIResource {
  catalogSyncs: CatalogSyncsAPI.CatalogSyncs = new CatalogSyncsAPI.CatalogSyncs(this._client);
  onRamps: OnRampsAPI.OnRamps = new OnRampsAPI.OnRamps(this._client);
  cloudIntegrations: CloudIntegrationsAPI.CloudIntegrations = new CloudIntegrationsAPI.CloudIntegrations(
    this._client,
  );
  resources: ResourcesAPI.Resources = new ResourcesAPI.Resources(this._client);
}

MagicCloudNetworking.CatalogSyncs = CatalogSyncs;
MagicCloudNetworking.OnRamps = OnRamps;
MagicCloudNetworking.CloudIntegrations = CloudIntegrations;
MagicCloudNetworking.Resources = Resources;

export declare namespace MagicCloudNetworking {
  export { CatalogSyncs as CatalogSyncs };

  export { OnRamps as OnRamps };

  export { CloudIntegrations as CloudIntegrations };

  export { Resources as Resources };
}
