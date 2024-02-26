// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as UUIDAPI from 'cloudflare/resources/dcv-delegation/uuid';

export class UUID extends APIResource {
  /**
   * Retrieve the account and zone specific unique identifier used as part of the
   * CNAME target for DCV Delegation.
   */
  get(params: UUIDGetParams, options?: Core.RequestOptions): Core.APIPromise<UUIDGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/dcv_delegation/uuid`, options) as Core.APIPromise<{
        result: UUIDGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface UUIDGetResponse {
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
  export import UUIDGetResponse = UUIDAPI.UUIDGetResponse;
  export import UUIDGetParams = UUIDAPI.UUIDGetParams;
}
