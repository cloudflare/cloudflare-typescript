// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { type Response } from 'cloudflare/_shims/index';
import * as ContentV2API from 'cloudflare/resources/workers/scripts/content-v2';

export class ContentV2 extends APIResource {
  /**
   * Fetch script content only
   */
  get(
    scriptName: string,
    params: ContentV2GetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response> {
    const { account_id } = params;
    return this._client.get(`/accounts/${account_id}/workers/scripts/${scriptName}/content/v2`, {
      ...options,
      __binaryResponse: true,
    });
  }
}

export interface ContentV2GetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace ContentV2 {
  export import ContentV2GetParams = ContentV2API.ContentV2GetParams;
}
