// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

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
  create(params: TSIGCreateParams, options?: RequestOptions): APIPromise<TSIG> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/secondary_dns/tsigs`, {
        body,
        ...options,
      }) as APIPromise<{ result: TSIG }>
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
  update(tsigID: string, params: TSIGUpdateParams, options?: RequestOptions): APIPromise<TSIG> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/secondary_dns/tsigs/${tsigID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: TSIG }>
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
  list(params: TSIGListParams, options?: RequestOptions): PagePromise<TSIGsSinglePage, TSIG> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/secondary_dns/tsigs`,
      SinglePage<TSIG>,
      options,
    );
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
  delete(tsigID: string, params: TSIGDeleteParams, options?: RequestOptions): APIPromise<TSIGDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/secondary_dns/tsigs/${tsigID}`,
        options,
      ) as APIPromise<{ result: TSIGDeleteResponse }>
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
  get(tsigID: string, params: TSIGGetParams, options?: RequestOptions): APIPromise<TSIG> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/secondary_dns/tsigs/${tsigID}`, options) as APIPromise<{
        result: TSIG;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type TSIGsSinglePage = SinglePage<TSIG>;

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
   * Path param:
   */
  account_id: string;

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
   * Path param:
   */
  account_id: string;

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
  account_id: string;
}

export interface TSIGDeleteParams {
  account_id: string;
}

export interface TSIGGetParams {
  account_id: string;
}

export declare namespace TSIGs {
  export {
    type TSIG as TSIG,
    type TSIGDeleteResponse as TSIGDeleteResponse,
    type TSIGsSinglePage as TSIGsSinglePage,
    type TSIGCreateParams as TSIGCreateParams,
    type TSIGUpdateParams as TSIGUpdateParams,
    type TSIGListParams as TSIGListParams,
    type TSIGDeleteParams as TSIGDeleteParams,
    type TSIGGetParams as TSIGGetParams,
  };
}
