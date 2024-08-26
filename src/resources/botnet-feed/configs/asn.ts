// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as ASNAPI from './asn';

export class ASN extends APIResource {
  /**
   * Delete an ASN from botnet threat feed for a given user.
   */
  delete(
    asnId: number,
    params: ASNDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ASNDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/botnet_feed/configs/asn/${asnId}`,
        options,
      ) as Core.APIPromise<{ result: ASNDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets a list of all ASNs registered for a user for the DDoS Botnet Feed API.
   */
  get(params: ASNGetParams, options?: Core.RequestOptions): Core.APIPromise<ASNGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/botnet_feed/configs/asn`, options) as Core.APIPromise<{
        result: ASNGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ASNDeleteResponse {
  asn?: number;
}

export interface ASNGetResponse {
  asn?: number;
}

export interface ASNDeleteParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface ASNGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace ASN {
  export import ASNDeleteResponse = ASNAPI.ASNDeleteResponse;
  export import ASNGetResponse = ASNAPI.ASNGetResponse;
  export import ASNDeleteParams = ASNAPI.ASNDeleteParams;
  export import ASNGetParams = ASNAPI.ASNGetParams;
}
