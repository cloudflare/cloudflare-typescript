// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as SCIMAPI from './scim/scim';
import { SCIM } from './scim/scim';

export class IdentityProviders extends APIResource {
  scim: SCIMAPI.SCIM = new SCIMAPI.SCIM(this._client);
}

IdentityProviders.SCIM = SCIM;

export declare namespace IdentityProviders {
  export { SCIM as SCIM };
}
