// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as PrebuiltPoliciesAPI from './prebuilt-policies';
import { PrebuiltPolicies } from './prebuilt-policies';

export class CatalogSyncs extends APIResource {
  prebuiltPolicies: PrebuiltPoliciesAPI.PrebuiltPolicies = new PrebuiltPoliciesAPI.PrebuiltPolicies(
    this._client,
  );
}

CatalogSyncs.PrebuiltPolicies = PrebuiltPolicies;

export declare namespace CatalogSyncs {
  export { PrebuiltPolicies as PrebuiltPolicies };
}
