// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class ASN extends APIResource {
  /**
   * Delete an ASN from botnet threat feed for a given user.
   */
  delete(asnID: number, params: ASNDeleteParams, options?: RequestOptions): APIPromise<ASNDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/botnet_feed/configs/asn/${asnID}`,
        options,
      ) as APIPromise<{ result: ASNDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets a list of all ASNs registered for a user for the DDoS Botnet Feed API.
   */
  get(params: ASNGetParams, options?: RequestOptions): APIPromise<ASNGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/botnet_feed/configs/asn`, options) as APIPromise<{
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

export declare namespace ASN {
  export {
    type ASNDeleteResponse as ASNDeleteResponse,
    type ASNGetResponse as ASNGetResponse,
    type ASNDeleteParams as ASNDeleteParams,
    type ASNGetParams as ASNGetParams,
  };
}
