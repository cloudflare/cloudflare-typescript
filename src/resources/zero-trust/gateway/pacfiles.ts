// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import { SinglePage } from '../../../pagination';

export class Pacfiles extends APIResource {
  /**
   * Create a new Zero Trust Gateway PAC file.
   *
   * @example
   * ```ts
   * const pacfile =
   *   await client.zeroTrust.gateway.pacfiles.create({
   *     account_id: '699d98642c564d2e855e9661899b7252',
   *     contents:
   *       'function FindProxyForURL(url, host) { return "DIRECT"; }',
   *     name: 'Devops team',
   *   });
   * ```
   */
  create(params: PacfileCreateParams, options?: Core.RequestOptions): Core.APIPromise<PacfileCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/gateway/pacfiles`, { body, ...options }) as Core.APIPromise<{
        result: PacfileCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update a configured Zero Trust Gateway PAC file.
   *
   * @example
   * ```ts
   * const pacfile =
   *   await client.zeroTrust.gateway.pacfiles.update(
   *     'ed35569b41ce4d1facfe683550f54086',
   *     {
   *       account_id: '699d98642c564d2e855e9661899b7252',
   *       contents:
   *         'function FindProxyForURL(url, host) { return "DIRECT"; }',
   *       description: 'PAC file for Devops team',
   *       name: 'Devops team',
   *     },
   *   );
   * ```
   */
  update(
    pacfileId: string,
    params: PacfileUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PacfileUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/gateway/pacfiles/${pacfileId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: PacfileUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List all Zero Trust Gateway PAC files for an account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const pacfileListResponse of client.zeroTrust.gateway.pacfiles.list(
   *   { account_id: '699d98642c564d2e855e9661899b7252' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: PacfileListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PacfileListResponsesSinglePage, PacfileListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/gateway/pacfiles`,
      PacfileListResponsesSinglePage,
      options,
    );
  }

  /**
   * Delete a configured Zero Trust Gateway PAC file.
   *
   * @example
   * ```ts
   * const pacfile =
   *   await client.zeroTrust.gateway.pacfiles.delete(
   *     'ed35569b41ce4d1facfe683550f54086',
   *     { account_id: '699d98642c564d2e855e9661899b7252' },
   *   );
   * ```
   */
  delete(
    pacfileId: string,
    params: PacfileDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PacfileDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/gateway/pacfiles/${pacfileId}`,
        options,
      ) as Core.APIPromise<{ result: PacfileDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a single Zero Trust Gateway PAC file.
   *
   * @example
   * ```ts
   * const pacfile = await client.zeroTrust.gateway.pacfiles.get(
   *   'ed35569b41ce4d1facfe683550f54086',
   *   { account_id: '699d98642c564d2e855e9661899b7252' },
   * );
   * ```
   */
  get(
    pacfileId: string,
    params: PacfileGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PacfileGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/gateway/pacfiles/${pacfileId}`, options) as Core.APIPromise<{
        result: PacfileGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class PacfileListResponsesSinglePage extends SinglePage<PacfileListResponse> {}

export interface PacfileCreateResponse {
  id?: string;

  /**
   * Actual contents of the PAC file
   */
  contents?: string;

  created_at?: string;

  /**
   * Detailed description of the PAC file.
   */
  description?: string;

  /**
   * Name of the PAC file.
   */
  name?: string;

  /**
   * URL-friendly version of the PAC file name.
   */
  slug?: string;

  updated_at?: string;

  /**
   * Unique URL to download the PAC file.
   */
  url?: string;
}

export interface PacfileUpdateResponse {
  id?: string;

  /**
   * Actual contents of the PAC file
   */
  contents?: string;

  created_at?: string;

  /**
   * Detailed description of the PAC file.
   */
  description?: string;

  /**
   * Name of the PAC file.
   */
  name?: string;

  /**
   * URL-friendly version of the PAC file name.
   */
  slug?: string;

  updated_at?: string;

  /**
   * Unique URL to download the PAC file.
   */
  url?: string;
}

export interface PacfileListResponse {
  id?: string;

  created_at?: string;

  /**
   * Detailed description of the PAC file.
   */
  description?: string;

  /**
   * Name of the PAC file.
   */
  name?: string;

  /**
   * URL-friendly version of the PAC file name.
   */
  slug?: string;

  updated_at?: string;

  /**
   * Unique URL to download the PAC file.
   */
  url?: string;
}

export type PacfileDeleteResponse = unknown;

export interface PacfileGetResponse {
  id?: string;

  /**
   * Actual contents of the PAC file
   */
  contents?: string;

  created_at?: string;

  /**
   * Detailed description of the PAC file.
   */
  description?: string;

  /**
   * Name of the PAC file.
   */
  name?: string;

  /**
   * URL-friendly version of the PAC file name.
   */
  slug?: string;

  updated_at?: string;

  /**
   * Unique URL to download the PAC file.
   */
  url?: string;
}

export interface PacfileCreateParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param: Actual contents of the PAC file
   */
  contents: string;

  /**
   * Body param: Name of the PAC file.
   */
  name: string;

  /**
   * Body param: Detailed description of the PAC file.
   */
  description?: string;

  /**
   * Body param: URL-friendly version of the PAC file name. If not provided, it will
   * be auto-generated
   */
  slug?: string;
}

export interface PacfileUpdateParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param: Actual contents of the PAC file
   */
  contents: string;

  /**
   * Body param: Detailed description of the PAC file.
   */
  description: string;

  /**
   * Body param: Name of the PAC file.
   */
  name: string;
}

export interface PacfileListParams {
  account_id: string;
}

export interface PacfileDeleteParams {
  account_id: string;
}

export interface PacfileGetParams {
  account_id: string;
}

Pacfiles.PacfileListResponsesSinglePage = PacfileListResponsesSinglePage;

export declare namespace Pacfiles {
  export {
    type PacfileCreateResponse as PacfileCreateResponse,
    type PacfileUpdateResponse as PacfileUpdateResponse,
    type PacfileListResponse as PacfileListResponse,
    type PacfileDeleteResponse as PacfileDeleteResponse,
    type PacfileGetResponse as PacfileGetResponse,
    PacfileListResponsesSinglePage as PacfileListResponsesSinglePage,
    type PacfileCreateParams as PacfileCreateParams,
    type PacfileUpdateParams as PacfileUpdateParams,
    type PacfileListParams as PacfileListParams,
    type PacfileDeleteParams as PacfileDeleteParams,
    type PacfileGetParams as PacfileGetParams,
  };
}
