// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ManagementAPI from 'cloudflare/resources/cfd-tunnels/management';

export class Management extends APIResource {
  /**
   * Gets a management token used to access the management resources (i.e. Streaming
   * Logs) of a tunnel.
   */
  create(
    accountId: string,
    tunnelId: string,
    body: ManagementCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ManagementCreateResponse> {
    return (
      this._client.post(`/accounts/${accountId}/cfd_tunnel/${tunnelId}/management`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ManagementCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type ManagementCreateResponse = unknown | Array<unknown> | string;

export interface ManagementCreateParams {
  resources: Array<'logs'>;
}

export namespace Management {
  export import ManagementCreateResponse = ManagementAPI.ManagementCreateResponse;
  export import ManagementCreateParams = ManagementAPI.ManagementCreateParams;
}
