// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Management extends APIResource {
  /**
   * Gets a management token used to access the management resources (i.e. Streaming
   * Logs) of a tunnel.
   */
  create(
    tunnelId: string,
    params: ManagementCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ManagementCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/cfd_tunnel/${tunnelId}/management`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ManagementCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type ManagementCreateResponse = string;

export interface ManagementCreateParams {
  /**
   * Path param: Cloudflare account ID
   */
  account_id: string;

  /**
   * Body param:
   */
  resources: Array<'logs'>;
}

export declare namespace Management {
  export {
    type ManagementCreateResponse as ManagementCreateResponse,
    type ManagementCreateParams as ManagementCreateParams,
  };
}
