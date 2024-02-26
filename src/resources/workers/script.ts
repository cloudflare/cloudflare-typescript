// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { type Response } from 'cloudflare/_shims/index';
import * as ScriptAPI from 'cloudflare/resources/workers/script';

export class Script extends APIResource {
  /**
   * Upload a worker, or a new version of a worker.
   */
  update(
    zoneId: string,
    body: ScriptUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScriptUpdateResponse> {
    return (
      this._client.put(`/zones/${zoneId}/workers/script`, options) as Core.APIPromise<{
        result: ScriptUpdateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete your Worker. This call has no response body on a successful delete.
   */
  delete(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/zones/${zoneId}/workers/script`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Fetch raw script content for your worker. Note this is the original script
   * content, not JSON encoded.
   */
  get(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.get(`/zones/${zoneId}/workers/script`, { ...options, __binaryResponse: true });
  }
}

export type ScriptUpdateResponse = unknown | string;

export interface ScriptUpdateParams {}

export namespace Script {
  export import ScriptUpdateResponse = ScriptAPI.ScriptUpdateResponse;
  export import ScriptUpdateParams = ScriptAPI.ScriptUpdateParams;
}
