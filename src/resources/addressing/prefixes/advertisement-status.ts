// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class AdvertisementStatus extends APIResource {
  /**
   * Advertise or withdraw the BGP route for a prefix.
   *
   * **Deprecated:** Prefer the BGP Prefixes endpoints, which additionally allow for
   * advertising and withdrawing subnets of an IP prefix.
   *
   * @example
   * ```ts
   * const response =
   *   await client.addressing.prefixes.advertisementStatus.edit(
   *     '2af39739cc4e3b5910c918468bb89828',
   *     {
   *       account_id: '258def64c72dae45f3e4c8516e2111f2',
   *       advertised: true,
   *     },
   *   );
   * ```
   */
  edit(
    prefixID: string,
    params: AdvertisementStatusEditParams,
    options?: RequestOptions,
  ): APIPromise<AdvertisementStatusEditResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(path`/accounts/${account_id}/addressing/prefixes/${prefixID}/bgp/status`, {
        body,
        ...options,
      }) as APIPromise<{ result: AdvertisementStatusEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * View the current advertisement state for a prefix.
   *
   * **Deprecated:** Prefer the BGP Prefixes endpoints, which additionally allow for
   * advertising and withdrawing subnets of an IP prefix.
   *
   * @example
   * ```ts
   * const advertisementStatus =
   *   await client.addressing.prefixes.advertisementStatus.get(
   *     '2af39739cc4e3b5910c918468bb89828',
   *     { account_id: '258def64c72dae45f3e4c8516e2111f2' },
   *   );
   * ```
   */
  get(
    prefixID: string,
    params: AdvertisementStatusGetParams,
    options?: RequestOptions,
  ): APIPromise<AdvertisementStatusGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/addressing/prefixes/${prefixID}/bgp/status`,
        options,
      ) as APIPromise<{ result: AdvertisementStatusGetResponse }>
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
  account_id: string;

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
