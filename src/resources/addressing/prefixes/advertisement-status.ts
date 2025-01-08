// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class AdvertisementStatus extends APIResource {
  /**
   * Advertise or withdraw BGP route for a prefix.
   */
  edit(
    prefixId: string,
    params: AdvertisementStatusEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AdvertisementStatusEditResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/addressing/prefixes/${prefixId}/bgp/status`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: AdvertisementStatusEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List the current advertisement state for a prefix.
   */
  get(
    prefixId: string,
    params: AdvertisementStatusGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AdvertisementStatusGetResponse> {
    const { account_id } = params;
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
   * Enablement of prefix advertisement to the Internet.
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
   * Enablement of prefix advertisement to the Internet.
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
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: Enablement of prefix advertisement to the Internet.
   */
  advertised: boolean;
}

export interface AdvertisementStatusGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export declare namespace AdvertisementStatus {
  export {
    type AdvertisementStatusEditResponse as AdvertisementStatusEditResponse,
    type AdvertisementStatusGetResponse as AdvertisementStatusGetResponse,
    type AdvertisementStatusEditParams as AdvertisementStatusEditParams,
    type AdvertisementStatusGetParams as AdvertisementStatusGetParams,
  };
}
