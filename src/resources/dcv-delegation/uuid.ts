// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as UuidAPI from 'cloudflare/resources/dcv-delegation/uuid';

export class Uuid extends APIResource {
  /**
   * Retrieve the account and zone specific unique identifier used as part of the
   * CNAME target for DCV Delegation.
   */
  retrieve(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<UuidRetrieveResponse> {
    return (
      this._client.get(`/zones/${zoneIdentifier}/dcv_delegation/uuid`, options) as Core.APIPromise<{
        result: UuidRetrieveResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface UuidRetrieveResponse {
  /**
   * The DCV Delegation unique identifier.
   */
  uuid?: string;
}

export namespace Uuid {
  export import UuidRetrieveResponse = UuidAPI.UuidRetrieveResponse;
}
