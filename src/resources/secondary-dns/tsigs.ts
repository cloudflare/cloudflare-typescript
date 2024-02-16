// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as TsigsAPI from 'cloudflare/resources/secondary-dns/tsigs';

export class Tsigs extends APIResource {
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

  /**
   * Create TSIG.
   */
  secondaryDNSTsigCreateTsig(
    accountId: unknown,
    body: TsigSecondaryDNSTsigCreateTsigParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TsigSecondaryDNSTsigCreateTsigResponse> {
    return (
      this._client.post(`/accounts/${accountId}/secondary_dns/tsigs`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: TsigSecondaryDNSTsigCreateTsigResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List TSIGs.
   */
  secondaryDNSTsigListTsiGs(
    accountId: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TsigSecondaryDNSTsigListTsiGsResponse | null> {
    return (
      this._client.get(`/accounts/${accountId}/secondary_dns/tsigs`, options) as Core.APIPromise<{
        result: TsigSecondaryDNSTsigListTsiGsResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
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

export interface TsigSecondaryDNSTsigCreateTsigResponse {
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

export type TsigSecondaryDNSTsigListTsiGsResponse =
  Array<TsigSecondaryDNSTsigListTsiGsResponse.TsigSecondaryDNSTsigListTsiGsResponseItem>;

export namespace TsigSecondaryDNSTsigListTsiGsResponse {
  export interface TsigSecondaryDNSTsigListTsiGsResponseItem {
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

export interface TsigSecondaryDNSTsigCreateTsigParams {
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
  export import TsigUpdateResponse = TsigsAPI.TsigUpdateResponse;
  export import TsigDeleteResponse = TsigsAPI.TsigDeleteResponse;
  export import TsigGetResponse = TsigsAPI.TsigGetResponse;
  export import TsigSecondaryDNSTsigCreateTsigResponse = TsigsAPI.TsigSecondaryDNSTsigCreateTsigResponse;
  export import TsigSecondaryDNSTsigListTsiGsResponse = TsigsAPI.TsigSecondaryDNSTsigListTsiGsResponse;
  export import TsigUpdateParams = TsigsAPI.TsigUpdateParams;
  export import TsigSecondaryDNSTsigCreateTsigParams = TsigsAPI.TsigSecondaryDNSTsigCreateTsigParams;
}
