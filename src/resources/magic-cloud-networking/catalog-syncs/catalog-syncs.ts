// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as PrebuiltPoliciesAPI from './prebuilt-policies';
import { BasePrebuiltPolicies, PrebuiltPolicies } from './prebuilt-policies';

export class BaseCatalogSyncs extends APIResource {
  static override readonly _key: readonly ['magicCloudNetworking', 'catalogSyncs'] = Object.freeze([
    'magicCloudNetworking',
    'catalogSyncs',
  ] as const);
}
export class CatalogSyncs extends BaseCatalogSyncs {
  prebuiltPolicies: PrebuiltPoliciesAPI.PrebuiltPolicies = new PrebuiltPoliciesAPI.PrebuiltPolicies(
    this._client,
  );
}

CatalogSyncs.PrebuiltPolicies = PrebuiltPolicies;
CatalogSyncs.BasePrebuiltPolicies = BasePrebuiltPolicies;

export declare namespace CatalogSyncs {
  export { PrebuiltPolicies as PrebuiltPolicies, BasePrebuiltPolicies as BasePrebuiltPolicies };
}
