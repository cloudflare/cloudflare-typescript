// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Revoke extends APIResource {
  /**
   * Revokes a list of registrations.
   *
   * **Deprecated**: please use POST
   * /accounts/{account_id}/devices/registrations/revoke instead.
   */
  create(params: RevokeCreateParams, options?: RequestOptions): APIPromise<RevokeCreateResponse | null> {
    const { account_id, body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/devices/revoke`, {
        body: body,
        ...options,
      }) as APIPromise<{ result: RevokeCreateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type RevokeCreateResponse = unknown | string;

export interface RevokeCreateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param: A list of Registration IDs to revoke.
   */
  body: Array<string>;
}

export declare namespace Revoke {
  export { type RevokeCreateResponse as RevokeCreateResponse, type RevokeCreateParams as RevokeCreateParams };
}
