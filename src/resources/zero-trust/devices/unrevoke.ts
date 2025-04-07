// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Unrevoke extends APIResource {
  /**
   * Unrevokes a list of registrations.
   *
   * **Deprecated**: please use POST
   * /accounts/{account_id}/devices/registrations/unrevoke instead.
   */
  create(params: UnrevokeCreateParams, options?: RequestOptions): APIPromise<UnrevokeCreateResponse | null> {
    const { account_id, body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/devices/unrevoke`, {
        body: body,
        ...options,
      }) as APIPromise<{ result: UnrevokeCreateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type UnrevokeCreateResponse = unknown | string;

export interface UnrevokeCreateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param: A list of Registration IDs to unrevoke.
   */
  body: Array<string>;
}

export declare namespace Unrevoke {
  export {
    type UnrevokeCreateResponse as UnrevokeCreateResponse,
    type UnrevokeCreateParams as UnrevokeCreateParams,
  };
}
