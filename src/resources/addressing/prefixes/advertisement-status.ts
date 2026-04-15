// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';

export class AdvertisementStatus extends APIResource {
  /**
   * Advertise or withdraw the BGP route for a prefix.
   *
   * **Deprecated:** Prefer the BGP Prefixes endpoints, which additionally allow for
   * advertising and withdrawing subnets of an IP prefix.
   *
   * @deprecated
   */
  edit(
    prefixId: string,
    params: AdvertisementStatusEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AdvertisementStatusEditResponse> {
    const { account_id = this._client.accountId, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/addressing/prefixes/${prefixId}/bgp/status`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: AdvertisementStatusEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * View the current advertisement state for a prefix.
   *
   * **Deprecated:** Prefer the BGP Prefixes endpoints, which additionally allow for
   * advertising and withdrawing subnets of an IP prefix.
   *
   * @deprecated
   */
  get(
    prefixId: string,
    params?: AdvertisementStatusGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AdvertisementStatusGetResponse>;
  get(prefixId: string, options?: Core.RequestOptions): Core.APIPromise<AdvertisementStatusGetResponse>;
  get(
    prefixId: string,
    params: AdvertisementStatusGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AdvertisementStatusGetResponse> {
    if (isRequestOptions(params)) {
      return this.get(prefixId, {}, params);
    }
    const { account_id = this._client.accountId } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/addressing/prefixes/${prefixId}/bgp/status`,
        options,
      ) as Core.APIPromise<{ result: AdvertisementStatusGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface AdvertisementStatusEditResponse {
  /**
   * Advertisement status of the prefix. If `true`, the BGP route for the prefix is
   * advertised to the Internet. If `false`, the BGP route is withdrawn.
   */
  advertised?: boolean;

  /**
   * Last time the advertisement status was changed. This field is only not 'null' if
   * on demand is enabled.
   */
  advertised_modified_at?: string | null;
}

export interface AdvertisementStatusGetResponse {
  /**
   * Advertisement status of the prefix. If `true`, the BGP route for the prefix is
   * advertised to the Internet. If `false`, the BGP route is withdrawn.
   */
  advertised?: boolean;

  /**
   * Last time the advertisement status was changed. This field is only not 'null' if
   * on demand is enabled.
   */
  advertised_modified_at?: string | null;
}

export interface AdvertisementStatusEditParams {
  /**
   * Path param: Identifier of a Cloudflare account.
   */
  account_id?: string;

  /**
   * Body param: Advertisement status of the prefix. If `true`, the BGP route for the
   * prefix is advertised to the Internet. If `false`, the BGP route is withdrawn.
   */
  advertised: boolean;
}

export interface AdvertisementStatusGetParams {
  /**
   * Identifier of a Cloudflare account.
   */
  account_id?: string;
}

export declare namespace AdvertisementStatus {
  export {
    type AdvertisementStatusEditResponse as AdvertisementStatusEditResponse,
    type AdvertisementStatusGetResponse as AdvertisementStatusGetResponse,
    type AdvertisementStatusEditParams as AdvertisementStatusEditParams,
    type AdvertisementStatusGetParams as AdvertisementStatusGetParams,
  };
}
