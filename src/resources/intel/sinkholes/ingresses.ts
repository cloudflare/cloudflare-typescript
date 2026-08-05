// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseIngresses extends APIResource {
  static override readonly _key: readonly ['intel', 'sinkholes', 'ingresses'] = Object.freeze([
    'intel',
    'sinkholes',
    'ingresses',
  ] as const);

  /**
   * Create a new ingress rule for the specified sinkhole. The CIDR block must be a
   * Cloudflare BYOIP associated with your account. The zone_id must be a zone with
   * the ability to create Spectrum Apps. The sinkhole must belong to the same
   * account as the zone.
   *
   * @example
   * ```ts
   * const ingress =
   *   await client.intel.sinkholes.ingresses.create(
   *     '93defa6e909e464e8c89a85859f36d3c',
   *     {
   *       zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       cidr: 'cidr',
   *     },
   *   );
   * ```
   */
  create(
    sinkholeID: string,
    params: IngressCreateParams,
    options?: RequestOptions,
  ): APIPromise<IngressCreateResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.post(path`/zones/${zone_id}/intel/sinkholes/${sinkholeID}/ingresses`, {
        body,
        ...options,
      }) as APIPromise<{ result: IngressCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update the specified ingress rule. The sinkhole must belong to the same account
   * as the zone.
   *
   * @example
   * ```ts
   * const ingress =
   *   await client.intel.sinkholes.ingresses.update(
   *     'de32ae5203724ed08dcc26e971a4d22f',
   *     {
   *       zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       sinkhole_id: '93defa6e909e464e8c89a85859f36d3c',
   *       cidr: 'cidr',
   *     },
   *   );
   * ```
   */
  update(
    ingressID: string,
    params: IngressUpdateParams,
    options?: RequestOptions,
  ): APIPromise<IngressUpdateResponse> {
    const { zone_id, sinkhole_id, ...body } = params;
    return (
      this._client.put(path`/zones/${zone_id}/intel/sinkholes/${sinkhole_id}/ingresses/${ingressID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: IngressUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete the specified ingress rule. The sinkhole must belong to the same account
   * as the zone.
   *
   * @example
   * ```ts
   * const ingress =
   *   await client.intel.sinkholes.ingresses.delete(
   *     'de32ae5203724ed08dcc26e971a4d22f',
   *     {
   *       zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       sinkhole_id: '93defa6e909e464e8c89a85859f36d3c',
   *     },
   *   );
   * ```
   */
  delete(
    ingressID: string,
    params: IngressDeleteParams,
    options?: RequestOptions,
  ): APIPromise<IngressDeleteResponse> {
    const { zone_id, sinkhole_id } = params;
    return (
      this._client.delete(
        path`/zones/${zone_id}/intel/sinkholes/${sinkhole_id}/ingresses/${ingressID}`,
        options,
      ) as APIPromise<{ result: IngressDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get the specified ingress rule associated with a sinkhole. The sinkhole must
   * belong to the same account as the zone.
   *
   * @example
   * ```ts
   * const ingress = await client.intel.sinkholes.ingresses.get(
   *   'de32ae5203724ed08dcc26e971a4d22f',
   *   {
   *     zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     sinkhole_id: '93defa6e909e464e8c89a85859f36d3c',
   *   },
   * );
   * ```
   */
  get(ingressID: string, params: IngressGetParams, options?: RequestOptions): APIPromise<IngressGetResponse> {
    const { zone_id, sinkhole_id } = params;
    return (
      this._client.get(
        path`/zones/${zone_id}/intel/sinkholes/${sinkhole_id}/ingresses/${ingressID}`,
        options,
      ) as APIPromise<{ result: IngressGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Ingresses extends BaseIngresses {}

export interface IngressCreateResponse {
  /**
   * The unique identifier for the ingress rule.
   */
  id?: string;

  /**
   * The CIDR block for the ingress rule.
   */
  cidr?: string;

  /**
   * The date and time when the ingress rule was created.
   */
  created_on?: string;

  /**
   * The date and time when the ingress rule was last modified.
   */
  modified_on?: string;

  /**
   * The sinkhole this ingress rule belongs to.
   */
  sinkhole_id?: string;

  /**
   * The zone tag associated with this ingress rule.
   */
  zone_tag?: string;
}

export type IngressUpdateResponse = unknown;

export type IngressDeleteResponse = unknown;

export interface IngressGetResponse {
  /**
   * The unique identifier for the ingress rule.
   */
  id?: string;

  /**
   * The CIDR block for the ingress rule.
   */
  cidr?: string;

  /**
   * The date and time when the ingress rule was created.
   */
  created_on?: string;

  /**
   * The date and time when the ingress rule was last modified.
   */
  modified_on?: string;

  /**
   * The sinkhole this ingress rule belongs to.
   */
  sinkhole_id?: string;

  /**
   * The zone tag associated with this ingress rule.
   */
  zone_tag?: string;
}

export interface IngressCreateParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Body param: The CIDR block for the ingress rule in IPv4 or IPv6 notation (e.g.,
   * 192.0.2.0/24). Must be a Cloudflare BYOIP associated with your account.
   */
  cidr: string;
}

export interface IngressUpdateParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Path param: The unique identifier for the sinkhole.
   */
  sinkhole_id: string;

  /**
   * Body param: The CIDR block for the ingress rule in IPv4 or IPv6 notation (e.g.,
   * 192.0.2.0/24). Must be a Cloudflare BYOIP associated with your account.
   */
  cidr: string;
}

export interface IngressDeleteParams {
  /**
   * Identifier.
   */
  zone_id: string;

  /**
   * The unique identifier for the sinkhole.
   */
  sinkhole_id: string;
}

export interface IngressGetParams {
  /**
   * Identifier.
   */
  zone_id: string;

  /**
   * The unique identifier for the sinkhole.
   */
  sinkhole_id: string;
}

export declare namespace Ingresses {
  export {
    type IngressCreateResponse as IngressCreateResponse,
    type IngressUpdateResponse as IngressUpdateResponse,
    type IngressDeleteResponse as IngressDeleteResponse,
    type IngressGetResponse as IngressGetResponse,
    type IngressCreateParams as IngressCreateParams,
    type IngressUpdateParams as IngressUpdateParams,
    type IngressDeleteParams as IngressDeleteParams,
    type IngressGetParams as IngressGetParams,
  };
}
