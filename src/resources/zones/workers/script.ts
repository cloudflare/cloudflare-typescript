// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { type Response } from 'cloudflare/_shims/index';
import * as ScriptAPI from 'cloudflare/resources/zones/workers/script';

export class Script extends APIResource {
  /**
   * Upload a worker, or a new version of a worker.
   */
  update(params: ScriptUpdateParams, options?: Core.RequestOptions): Core.APIPromise<ScriptUpdateResponse> {
    const { zone_id } = params;
    return (
      this._client.put(`/zones/${zone_id}/workers/script`, options) as Core.APIPromise<{
        result: ScriptUpdateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete your Worker. This call has no response body on a successful delete.
   */
  delete(params: ScriptDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { zone_id } = params;
    return this._client.delete(`/zones/${zone_id}/workers/script`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Fetch raw script content for your worker. Note this is the original script
   * content, not JSON encoded.
   */
  get(params: ScriptGetParams, options?: Core.RequestOptions): Core.APIPromise<Response> {
    const { zone_id } = params;
    return this._client.get(`/zones/${zone_id}/workers/script`, { ...options, __binaryResponse: true });
  }
}

export type ScriptUpdateResponse = unknown | string;

export interface ScriptUpdateParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export interface ScriptDeleteParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export interface ScriptGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace Script {
  export import ScriptUpdateResponse = ScriptAPI.ScriptUpdateResponse;
  export import ScriptUpdateParams = ScriptAPI.ScriptUpdateParams;
  export import ScriptDeleteParams = ScriptAPI.ScriptDeleteParams;
  export import ScriptGetParams = ScriptAPI.ScriptGetParams;
}
