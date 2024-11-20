// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Raw extends APIResource {
  /**
   * Returns the raw eml of any non-benign message.
   */
  get(
    postfixId: string,
    params: RawGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RawGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/email-security/investigate/${postfixId}/raw`,
        options,
      ) as Core.APIPromise<{ result: RawGetResponse }>
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
