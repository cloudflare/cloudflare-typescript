// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class ManagedTransforms extends APIResource {
  /**
   * Fetches a list of all Managed Transforms.
   */
  list(
    params: ManagedTransformListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ManagedTransformListResponse> {
    const { zone_id } = params;
    return this._client.get(`/zones/${zone_id}/managed_headers`, options);
  }

  /**
   * Updates the status of one or more Managed Transforms.
   */
  edit(
    params: ManagedTransformEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ManagedTransformEditResponse> {
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

export interface ManagedTransformListResponse {
  managed_request_headers?: Array<RequestModel>;

  managed_response_headers?: Array<RequestModel>;
}

export interface ManagedTransformEditResponse {
  managed_request_headers?: Array<ManagedTransformEditResponse.ManagedRequestHeader>;

  managed_response_headers?: Array<ManagedTransformEditResponse.ManagedResponseHeader>;
}

export namespace ManagedTransformEditResponse {
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

export interface ManagedTransformListParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export interface ManagedTransformEditParams {
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
