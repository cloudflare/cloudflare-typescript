// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseDCVDelegation extends APIResource {
  static override readonly _key: readonly ['dcvDelegation'] = Object.freeze(['dcvDelegation'] as const);

  /**
   * Retrieve the account and zone specific unique identifier used as part of the
   * CNAME target for DCV Delegation.
   */
  get(params: DCVDelegationGetParams, options?: RequestOptions): APIPromise<DCVDelegationUUID> {
    const { zone_id } = params;
    return (
      this._client.get(path`/zones/${zone_id}/dcv_delegation/uuid`, options) as APIPromise<{
        result: DCVDelegationUUID;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class DCVDelegation extends BaseDCVDelegation {}

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
  zone_id: string;
}

export declare namespace DCVDelegation {
  export {
    type DCVDelegationUUID as DCVDelegationUUID,
    type DCVDelegationGetParams as DCVDelegationGetParams,
  };
}
