// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class DCVDelegation extends APIResource {
  /**
   * Retrieve the account and zone specific unique identifier used as part of the
   * CNAME target for DCV Delegation.
   */
  get(params?: DCVDelegationGetParams, options?: Core.RequestOptions): Core.APIPromise<DCVDelegationUUID>;
  get(options?: Core.RequestOptions): Core.APIPromise<DCVDelegationUUID>;
  get(
    params: DCVDelegationGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DCVDelegationUUID> {
    if (isRequestOptions(params)) {
      return this.get({}, params);
    }
    const { zone_id = this._client.zoneId } = params;
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

export interface DCVDelegationGetParams {
  /**
   * Identifier.
   */
  zone_id?: string;
}

export declare namespace DCVDelegation {
  export {
    type DCVDelegationUUID as DCVDelegationUUID,
    type DCVDelegationGetParams as DCVDelegationGetParams,
  };
}
