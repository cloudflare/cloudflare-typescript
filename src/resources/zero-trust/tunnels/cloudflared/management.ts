// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { APIPromise } from '../../../../api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Management extends APIResource {
  /**
   * Gets a management token used to access the management resources (i.e. Streaming
   * Logs) of a tunnel.
   */
  create(
    tunnelID: string,
    params: ManagementCreateParams,
    options?: RequestOptions,
  ): APIPromise<ManagementCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/cfd_tunnel/${tunnelID}/management`, {
        body,
        ...options,
      }) as APIPromise<{ result: ManagementCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * The Tunnel Token is used as a mechanism to authenticate the operation of a
 * tunnel.
 */
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
