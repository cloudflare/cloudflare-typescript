// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';

export class Script extends APIResource {
  /**
   * Delete your Worker. This call has no response body on a successful delete.
   */
  delete(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/zones/${zoneId}/workers/script`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}
