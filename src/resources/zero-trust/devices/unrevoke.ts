// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as UnrevokeAPI from 'cloudflare/resources/zero-trust/devices/unrevoke';
import * as Shared from 'cloudflare/resources/shared';

export class Unrevoke extends APIResource {
  /**
   * Unrevokes a list of devices.
   */
  create(
    params: UnrevokeCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a> {
    const { account_id, body } = params;
    return (
      this._client.post(`/accounts/${account_id}/devices/unrevoke`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface UnrevokeCreateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param: A list of device ids to unrevoke.
   */
  body: Array<string>;
}

export namespace Unrevoke {
  export import UnrevokeCreateParams = UnrevokeAPI.UnrevokeCreateParams;
}
