// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ConnectionsAPI from 'cloudflare/resources/tunnels/connections';

export class Connections extends APIResource {
  /**
   * Removes connections that are in a disconnected or pending reconnect state. We
   * recommend running this command after shutting down a tunnel.
   */
  delete(
    accountId: string,
    tunnelId: string,
    body: ConnectionDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectionDeleteResponse> {
    return (
      this._client.delete(`/accounts/${accountId}/tunnels/${tunnelId}/connections`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ConnectionDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type ConnectionDeleteResponse = unknown | Array<unknown> | string;

export type ConnectionDeleteParams = unknown;

export namespace Connections {
  export import ConnectionDeleteResponse = ConnectionsAPI.ConnectionDeleteResponse;
  export import ConnectionDeleteParams = ConnectionsAPI.ConnectionDeleteParams;
}
