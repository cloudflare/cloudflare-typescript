// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import { APIPromise } from '../core';
import * as Core from '../core';
import * as ManagedHeadersAPI from './managed-headers';

export class ManagedHeaders extends APIResource {
  /**
   * Fetches a list of all Managed Transforms.
   */
  list(params: ManagedHeaderListParams, options?: Core.RequestOptions): Core.APIPromise<ManagedHeaderListResponse> {
    const { zone_id } = params;
    return this._client.get(`/zones/${zone_id}/managed_headers`, options);
  }

  /**
   * Updates the status of one or more Managed Transforms.
   */
  edit(params: ManagedHeaderEditParams, options?: Core.RequestOptions): Core.APIPromise<ManagedHeaderEditResponse> {
    const { zone_id, ...body } = params;
    return this._client.patch(`/zones/${zone_id}/managed_headers`, { body, ...options });
  }
}

export interface RequestModel {
  /**
   * Human-readable identifier of the Managed Transform.
   */
  id?: string;

  /**
   * When true, the Managed Transform is enabled.
   */
  enabled?: boolean;
}

export interface RequestModelParam {
  /**
   * Human-readable identifier of the Managed Transform.
   */
  id?: string;

  /**
   * When true, the Managed Transform is enabled.
   */
  enabled?: boolean;
}

export interface ManagedHeaderListResponse {
  managed_request_headers?: Array<RequestModel>;

  managed_response_headers?: Array<RequestModel>;
}

export interface ManagedHeaderEditResponse {
  managed_request_headers?: Array<ManagedHeaderEditResponse.ManagedRequestHeader>;

  managed_response_headers?: Array<ManagedHeaderEditResponse.ManagedResponseHeader>;
}

export namespace ManagedHeaderEditResponse {
  export interface ManagedRequestHeader {
    /**
     * Human-readable identifier of the Managed Transform.
     */
    id?: string;

    /**
     * When true, the Managed Transform is available in the current Cloudflare plan.
     */
    available?: boolean;

    /**
     * When true, the Managed Transform is enabled.
     */
    enabled?: boolean;
  }

  export interface ManagedResponseHeader {
    /**
     * Human-readable identifier of the Managed Transform.
     */
    id?: string;

    /**
     * When true, the Managed Transform is available in the current Cloudflare plan.
     */
    available?: boolean;

    /**
     * When true, the Managed Transform is enabled.
     */
    enabled?: boolean;
  }
}

export interface ManagedHeaderListParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export interface ManagedHeaderEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param:
   */
  managed_request_headers: Array<RequestModelParam>;

  /**
   * Body param:
   */
  managed_response_headers: Array<RequestModelParam>;
}
