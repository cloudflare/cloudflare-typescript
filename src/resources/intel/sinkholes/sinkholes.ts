// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as IngressesAPI from './ingresses';
import {
  BaseIngresses,
  IngressCreateParams,
  IngressCreateResponse,
  IngressDeleteParams,
  IngressDeleteResponse,
  IngressGetParams,
  IngressGetResponse,
  IngressUpdateParams,
  IngressUpdateResponse,
  Ingresses,
} from './ingresses';
import { APIPromise } from '../../../core/api-promise';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseSinkholes extends APIResource {
  static override readonly _key: readonly ['intel', 'sinkholes'] = Object.freeze([
    'intel',
    'sinkholes',
  ] as const);

  /**
   * Create a new sinkhole. Logs of large request bodies will be truncated, but the
   * full request body can be recorded in R2. If you wish to record large request
   * bodies in R2, include the R2 key ID, key secret, and bucket name in the request
   * body.
   *
   * @example
   * ```ts
   * const sinkhole = await client.intel.sinkholes.create({
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   name: 'name',
   * });
   * ```
   */
  create(params: SinkholeCreateParams, options?: RequestOptions): APIPromise<Sinkhole> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/intel/sinkholes`, { body, ...options }) as APIPromise<{
        result: Sinkhole;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update the name or R2 configuration of the specified sinkhole.
   *
   * @example
   * ```ts
   * const sinkhole = await client.intel.sinkholes.update(
   *   '93defa6e909e464e8c89a85859f36d3c',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     name: 'name',
   *   },
   * );
   * ```
   */
  update(
    sinkholeID: string,
    params: SinkholeUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SinkholeUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/intel/sinkholes/${sinkholeID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: SinkholeUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists sinkholes owned by the account for redirecting malicious traffic.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const sinkhole of client.intel.sinkholes.list({
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * })) {
   *   // ...
   * }
   * ```
   */
  list(params: SinkholeListParams, options?: RequestOptions): PagePromise<SinkholesSinglePage, Sinkhole> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/intel/sinkholes`,
      SinglePage<Sinkhole>,
      options,
    );
  }

  /**
   * Delete the specified sinkhole. The sinkhole must not have any active ingress
   * rules defined. A 409 response code indicates that this condition is not met.
   *
   * @example
   * ```ts
   * const sinkhole = await client.intel.sinkholes.delete(
   *   '93defa6e909e464e8c89a85859f36d3c',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  delete(
    sinkholeID: string,
    params: SinkholeDeleteParams,
    options?: RequestOptions,
  ): APIPromise<SinkholeDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/intel/sinkholes/${sinkholeID}`,
        options,
      ) as APIPromise<{ result: SinkholeDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get the specified sinkhole by its unique identifier.
   *
   * @example
   * ```ts
   * const sinkhole = await client.intel.sinkholes.get(
   *   '93defa6e909e464e8c89a85859f36d3c',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  get(sinkholeID: string, params: SinkholeGetParams, options?: RequestOptions): APIPromise<Sinkhole> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/intel/sinkholes/${sinkholeID}`, options) as APIPromise<{
        result: Sinkhole;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Sinkholes extends BaseSinkholes {
  ingresses: IngressesAPI.Ingresses = new IngressesAPI.Ingresses(this._client);
}

export type SinkholesSinglePage = SinglePage<Sinkhole>;

export interface Sinkhole {
  /**
   * The unique identifier for the sinkhole.
   */
  id?: string;

  /**
   * The account tag that owns this sinkhole.
   */
  account_tag?: string;

  /**
   * The date and time when the sinkhole was created.
   */
  created_on?: string;

  /**
   * The date and time when the sinkhole was last modified.
   */
  modified_on?: string;

  /**
   * The name of the sinkhole.
   */
  name?: string;

  /**
   * The name of the R2 bucket to store results.
   */
  r2_bucket?: string;

  /**
   * The id of the R2 instance.
   */
  r2_id?: string;
}

export type SinkholeUpdateResponse = unknown;

export type SinkholeDeleteResponse = unknown;

export interface SinkholeCreateParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param: The name of the sinkhole.
   */
  name: string;

  /**
   * Body param: The name of the R2 bucket to store results. Required if you want to
   * store large request bodies in R2.
   */
  r2_bucket?: string;

  /**
   * Body param: The id of the R2 instance. Required if you want to store large
   * request bodies in R2.
   */
  r2_id?: string;

  /**
   * Body param: The secret key for the R2 API token. Required if you want to store
   * large request bodies in R2.
   */
  r2_secret?: string;
}

export interface SinkholeUpdateParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param: The name of the sinkhole.
   */
  name: string;

  /**
   * Body param: The name of the R2 bucket to store results. Required if you want to
   * store large request bodies in R2.
   */
  r2_bucket?: string;

  /**
   * Body param: The id of the R2 instance. Required if you want to store large
   * request bodies in R2.
   */
  r2_id?: string;

  /**
   * Body param: The secret key for the R2 API token. Required if you want to store
   * large request bodies in R2.
   */
  r2_secret?: string;
}

export interface SinkholeListParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export interface SinkholeDeleteParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export interface SinkholeGetParams {
  /**
   * Identifier.
   */
  account_id: string;
}

Sinkholes.Ingresses = Ingresses;
Sinkholes.BaseIngresses = BaseIngresses;

export declare namespace Sinkholes {
  export {
    type Sinkhole as Sinkhole,
    type SinkholeUpdateResponse as SinkholeUpdateResponse,
    type SinkholeDeleteResponse as SinkholeDeleteResponse,
    type SinkholesSinglePage as SinkholesSinglePage,
    type SinkholeCreateParams as SinkholeCreateParams,
    type SinkholeUpdateParams as SinkholeUpdateParams,
    type SinkholeListParams as SinkholeListParams,
    type SinkholeDeleteParams as SinkholeDeleteParams,
    type SinkholeGetParams as SinkholeGetParams,
  };

  export {
    Ingresses as Ingresses,
    BaseIngresses as BaseIngresses,
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
