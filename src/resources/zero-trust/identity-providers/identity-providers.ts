// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SCIMAPI from './scim/scim';
import { BaseSCIM, SCIM } from './scim/scim';

export class BaseIdentityProviders extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'identityProviders'] = Object.freeze([
    'zeroTrust',
    'identityProviders',
  ] as const);
}
export class IdentityProviders extends BaseIdentityProviders {
  scim: SCIMAPI.SCIM = new SCIMAPI.SCIM(this._client);
}

IdentityProviders.SCIM = SCIM;
IdentityProviders.BaseSCIM = BaseSCIM;

export declare namespace IdentityProviders {
  export { SCIM as SCIM, BaseSCIM as BaseSCIM };
}
