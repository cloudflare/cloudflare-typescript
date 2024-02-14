// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { type Response } from 'cloudflare/_shims/index';

export class Content extends APIResource {
  /**
   * Snippet Content
   */
  retrieve(
    zoneIdentifier: string,
    snippetName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response> {
    return this._client.get(`/zones/${zoneIdentifier}/snippets/${snippetName}/content`, {
      ...options,
      __binaryResponse: true,
    });
  }
}
