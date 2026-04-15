// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import { SinglePage } from '../../../pagination';

export class TSIGs extends APIResource {
  /**
   * Create TSIG.
   *
   * @example
   * ```ts
   * const tsig = await client.dns.zoneTransfers.tsigs.create({
   *   account_id: '01a7362d577a6c3019a474fd6f485823',
   *   algo: 'hmac-sha512.',
   *   name: 'tsig.customer.cf.',
   *   secret:
   *     'caf79a7804b04337c9c66ccd7bef9190a1e1679b5dd03d8aa10f7ad45e1a9dab92b417896c15d4d007c7c14194538d2a5d0feffdecc5a7f0e1c570cfa700837c',
   * });
   * ```
   */
  create(params: TSIGCreateParams, options?: Core.RequestOptions): Core.APIPromise<TSIG> {
    const { account_id = this._client.accountId, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/secondary_dns/tsigs`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: TSIG }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Modify TSIG.
   *
   * @example
   * ```ts
   * const tsig = await client.dns.zoneTransfers.tsigs.update(
   *   '69cd1e104af3e6ed3cb344f263fd0d5a',
   *   {
   *     account_id: '01a7362d577a6c3019a474fd6f485823',
   *     algo: 'hmac-sha512.',
   *     name: 'tsig.customer.cf.',
   *     secret:
   *       'caf79a7804b04337c9c66ccd7bef9190a1e1679b5dd03d8aa10f7ad45e1a9dab92b417896c15d4d007c7c14194538d2a5d0feffdecc5a7f0e1c570cfa700837c',
   *   },
   * );
   * ```
   */
  update(tsigId: string, params: TSIGUpdateParams, options?: Core.RequestOptions): Core.APIPromise<TSIG> {
    const { account_id = this._client.accountId, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/secondary_dns/tsigs/${tsigId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: TSIG }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List TSIGs.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const tsig of client.dns.zoneTransfers.tsigs.list(
   *   { account_id: '01a7362d577a6c3019a474fd6f485823' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(params?: TSIGListParams, options?: Core.RequestOptions): Core.PagePromise<TSIGsSinglePage, TSIG>;
  list(options?: Core.RequestOptions): Core.PagePromise<TSIGsSinglePage, TSIG>;
  list(
    params: TSIGListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<TSIGsSinglePage, TSIG> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { account_id = this._client.accountId } = params;
    return this._client.getAPIList(`/accounts/${account_id}/secondary_dns/tsigs`, TSIGsSinglePage, options);
  }

  /**
   * Delete TSIG.
   *
   * @example
   * ```ts
   * const tsig = await client.dns.zoneTransfers.tsigs.delete(
   *   '69cd1e104af3e6ed3cb344f263fd0d5a',
   *   { account_id: '01a7362d577a6c3019a474fd6f485823' },
   * );
   * ```
   */
  delete(
    tsigId: string,
    params?: TSIGDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TSIGDeleteResponse>;
  delete(tsigId: string, options?: Core.RequestOptions): Core.APIPromise<TSIGDeleteResponse>;
  delete(
    tsigId: string,
    params: TSIGDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TSIGDeleteResponse> {
    if (isRequestOptions(params)) {
      return this.delete(tsigId, {}, params);
    }
    const { account_id = this._client.accountId } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/secondary_dns/tsigs/${tsigId}`,
        options,
      ) as Core.APIPromise<{ result: TSIGDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get TSIG.
   *
   * @example
   * ```ts
   * const tsig = await client.dns.zoneTransfers.tsigs.get(
   *   '69cd1e104af3e6ed3cb344f263fd0d5a',
   *   { account_id: '01a7362d577a6c3019a474fd6f485823' },
   * );
   * ```
   */
  get(tsigId: string, params?: TSIGGetParams, options?: Core.RequestOptions): Core.APIPromise<TSIG>;
  get(tsigId: string, options?: Core.RequestOptions): Core.APIPromise<TSIG>;
  get(
    tsigId: string,
    params: TSIGGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TSIG> {
    if (isRequestOptions(params)) {
      return this.get(tsigId, {}, params);
    }
    const { account_id = this._client.accountId } = params;
    return (
      this._client.get(`/accounts/${account_id}/secondary_dns/tsigs/${tsigId}`, options) as Core.APIPromise<{
        result: TSIG;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class TSIGsSinglePage extends SinglePage<TSIG> {}

export interface TSIG {
  id: string;

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

export interface TSIGDeleteResponse {
  id?: string;
}

export interface TSIGCreateParams {
  /**
   * Path param
   */
  account_id?: string;

  /**
   * Body param: TSIG algorithm.
   */
  algo: string;

  /**
   * Body param: TSIG key name.
   */
  name: string;

  /**
   * Body param: TSIG secret.
   */
  secret: string;
}

export interface TSIGUpdateParams {
  /**
   * Path param
   */
  account_id?: string;

  /**
   * Body param: TSIG algorithm.
   */
  algo: string;

  /**
   * Body param: TSIG key name.
   */
  name: string;

  /**
   * Body param: TSIG secret.
   */
  secret: string;
}

export interface TSIGListParams {
  account_id?: string;
}

export interface TSIGDeleteParams {
  account_id?: string;
}

export interface TSIGGetParams {
  account_id?: string;
}

TSIGs.TSIGsSinglePage = TSIGsSinglePage;

export declare namespace TSIGs {
  export {
    type TSIG as TSIG,
    type TSIGDeleteResponse as TSIGDeleteResponse,
    TSIGsSinglePage as TSIGsSinglePage,
    type TSIGCreateParams as TSIGCreateParams,
    type TSIGUpdateParams as TSIGUpdateParams,
    type TSIGListParams as TSIGListParams,
    type TSIGDeleteParams as TSIGDeleteParams,
    type TSIGGetParams as TSIGGetParams,
  };
}
