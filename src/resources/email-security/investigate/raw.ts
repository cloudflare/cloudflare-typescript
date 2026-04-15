// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseRaw extends APIResource {
  static override readonly _key: readonly ['emailSecurity', 'investigate', 'raw'] = Object.freeze([
    'emailSecurity',
    'investigate',
    'raw',
  ] as const);

  /**
   * Returns the raw eml of any non-benign message.
   *
   * @example
   * ```ts
   * const raw = await client.emailSecurity.investigate.raw.get(
   *   '4Njp3P0STMz2c02Q',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  get(
    postfixID: string,
    params: RawGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RawGetResponse> {
    const { account_id = this._client.accountID } = params ?? {};
    return (
      this._client.get(
        path`/accounts/${account_id}/email-security/investigate/${postfixID}/raw`,
        options,
      ) as APIPromise<{ result: RawGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Raw extends BaseRaw {}

export interface RawGetResponse {
  /**
   * A UTF-8 encoded eml file of the email.
   */
  raw: string;
}

export interface RawGetParams {
  /**
   * Account Identifier
   */
  account_id?: string;
}

export declare namespace Raw {
  export { type RawGetResponse as RawGetResponse, type RawGetParams as RawGetParams };
}
