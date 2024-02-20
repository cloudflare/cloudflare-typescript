// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ManagedHeadersAPI from 'cloudflare/resources/managed-headers';

export class ManagedHeaders extends APIResource {
  /**
   * Fetches a list of all Managed Transforms.
   */
  list(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<ManagedHeaderListResponse> {
    return this._client.get(`/zones/${zoneId}/managed_headers`, options);
  }

  /**
   * Updates the status of one or more Managed Transforms.
   */
  edit(
    zoneId: string,
    body: ManagedHeaderEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ManagedHeaderEditResponse> {
    return this._client.patch(`/zones/${zoneId}/managed_headers`, { body, ...options });
  }
}

export interface ManagedHeaderListResponse {
  managed_request_headers?: Array<ManagedHeaderListResponse.ManagedRequestHeader>;

  managed_response_headers?: Array<ManagedHeaderListResponse.ManagedResponseHeader>;
}

export namespace ManagedHeaderListResponse {
  export interface ManagedRequestHeader {
    /**
     * Human-readable identifier of the Managed Transform.
     */
    id?: string;

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
     * When true, the Managed Transform is enabled.
     */
    enabled?: boolean;
  }
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

export interface ManagedHeaderEditParams {
  managed_request_headers: Array<ManagedHeaderEditParams.ManagedRequestHeader>;

  managed_response_headers: Array<ManagedHeaderEditParams.ManagedResponseHeader>;
}

export namespace ManagedHeaderEditParams {
  export interface ManagedRequestHeader {
    /**
     * Human-readable identifier of the Managed Transform.
     */
    id?: string;

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
     * When true, the Managed Transform is enabled.
     */
    enabled?: boolean;
  }
}

export namespace ManagedHeaders {
  export import ManagedHeaderListResponse = ManagedHeadersAPI.ManagedHeaderListResponse;
  export import ManagedHeaderEditResponse = ManagedHeadersAPI.ManagedHeaderEditResponse;
  export import ManagedHeaderEditParams = ManagedHeadersAPI.ManagedHeaderEditParams;
}
