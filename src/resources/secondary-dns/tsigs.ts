// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as TsigsAPI from 'cloudflare/resources/secondary-dns/tsigs';

export class Tsigs extends APIResource {
  /**
   * Create TSIG.
   */
  create(
    accountId: unknown,
    body: TsigCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TsigCreateResponse> {
    return (
      this._client.post(`/accounts/${accountId}/secondary_dns/tsigs`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: TsigCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Modify TSIG.
   */
  update(
    accountId: unknown,
    tsigId: unknown,
    body: TsigUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TsigUpdateResponse> {
    return (
      this._client.put(`/accounts/${accountId}/secondary_dns/tsigs/${tsigId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: TsigUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List TSIGs.
   */
  list(accountId: unknown, options?: Core.RequestOptions): Core.APIPromise<TsigListResponse | null> {
    return (
      this._client.get(`/accounts/${accountId}/secondary_dns/tsigs`, options) as Core.APIPromise<{
        result: TsigListResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete TSIG.
   */
  delete(
    accountId: unknown,
    tsigId: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TsigDeleteResponse> {
    return (
      this._client.delete(
        `/accounts/${accountId}/secondary_dns/tsigs/${tsigId}`,
        options,
      ) as Core.APIPromise<{ result: TsigDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get TSIG.
   */
  get(accountId: unknown, tsigId: unknown, options?: Core.RequestOptions): Core.APIPromise<TsigGetResponse> {
    return (
      this._client.get(`/accounts/${accountId}/secondary_dns/tsigs/${tsigId}`, options) as Core.APIPromise<{
        result: TsigGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface TsigCreateResponse {
  id: unknown;

  /**
   * TSIG algorithm.
   */
  algo: string;

  /**
   * TSIG key name.
   */
  name: string;

  /**
   * TSIG secret.
   */
  secret: string;
}

export interface TsigUpdateResponse {
  id: unknown;

  /**
   * TSIG algorithm.
   */
  algo: string;

  /**
   * TSIG key name.
   */
  name: string;

  /**
   * TSIG secret.
   */
  secret: string;
}

export type TsigListResponse = Array<TsigListResponse.TsigListResponseItem>;

export namespace TsigListResponse {
  export interface TsigListResponseItem {
    id: unknown;

    /**
     * TSIG algorithm.
     */
    algo: string;

    /**
     * TSIG key name.
     */
    name: string;

    /**
     * TSIG secret.
     */
    secret: string;
  }
}

export interface TsigDeleteResponse {
  id?: unknown;
}

export interface TsigGetResponse {
  id: unknown;

  /**
   * TSIG algorithm.
   */
  algo: string;

  /**
   * TSIG key name.
   */
  name: string;

  /**
   * TSIG secret.
   */
  secret: string;
}

export interface TsigCreateParams {
  /**
   * TSIG algorithm.
   */
  algo: string;

  /**
   * TSIG key name.
   */
  name: string;

  /**
   * TSIG secret.
   */
  secret: string;
}

export interface TsigUpdateParams {
  /**
   * TSIG algorithm.
   */
  algo: string;

  /**
   * TSIG key name.
   */
  name: string;

  /**
   * TSIG secret.
   */
  secret: string;
}

export namespace Tsigs {
  export import TsigCreateResponse = TsigsAPI.TsigCreateResponse;
  export import TsigUpdateResponse = TsigsAPI.TsigUpdateResponse;
  export import TsigListResponse = TsigsAPI.TsigListResponse;
  export import TsigDeleteResponse = TsigsAPI.TsigDeleteResponse;
  export import TsigGetResponse = TsigsAPI.TsigGetResponse;
  export import TsigCreateParams = TsigsAPI.TsigCreateParams;
  export import TsigUpdateParams = TsigsAPI.TsigUpdateParams;
}
