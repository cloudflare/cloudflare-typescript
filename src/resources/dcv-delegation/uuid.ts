// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as UUIDAPI from './uuid';

export class UUID extends APIResource {
  /**
   * Retrieve the account and zone specific unique identifier used as part of the
   * CNAME target for DCV Delegation.
   */
  get(params: UUIDGetParams, options?: Core.RequestOptions): Core.APIPromise<DCVDelegationUUID> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/dcv_delegation/uuid`, options) as Core.APIPromise<{
        result: DCVDelegationUUID;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface DCVDelegationUUID {
  /**
   * The DCV Delegation unique identifier.
   */
  uuid?: string;
}

export interface UUIDGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace UUID {
  export import DCVDelegationUUID = UUIDAPI.DCVDelegationUUID;
  export import UUIDGetParams = UUIDAPI.UUIDGetParams;
}
