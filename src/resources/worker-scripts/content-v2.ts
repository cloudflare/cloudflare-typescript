// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { type Response } from 'cloudflare/_shims/index';

export class ContentV2 extends APIResource {
  /**
   * Fetch script content only
   */
  retrieve(accountId: string, scriptName: string, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.get(`/accounts/${accountId}/workers/scripts/${scriptName}/content/v2`, {
      ...options,
      __binaryResponse: true,
    });
  }
}
