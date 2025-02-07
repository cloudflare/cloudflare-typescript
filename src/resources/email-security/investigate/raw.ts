// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Raw extends APIResource {
  /**
   * Returns the raw eml of any non-benign message.
   */
  get(postfixID: string, params: RawGetParams, options?: RequestOptions): APIPromise<RawGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/email-security/investigate/${postfixID}/raw`,
        options,
      ) as APIPromise<{ result: RawGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

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
  account_id: string;
}

export declare namespace Raw {
  export { type RawGetResponse as RawGetResponse, type RawGetParams as RawGetParams };
}
