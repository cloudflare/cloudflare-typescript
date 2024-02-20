// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ManagedHeadersAPI from 'cloudflare/resources/managed-headers';

export class ManagedHeaders extends APIResource {
  /**
   * Updates the status of one or more Managed Transforms.
   */
  update(
    zoneId: string,
    body: ManagedHeaderUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ManagedHeaderUpdateResponse> {
    return this._client.patch(`/zones/${zoneId}/managed_headers`, { body, ...options });
  }

  /**
   * Fetches a list of all Managed Transforms.
   */
  list(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<ManagedHeaderListResponse> {
    return this._client.get(`/zones/${zoneId}/managed_headers`, options);
  }
}

export interface ManagedHeaderUpdateResponse {
  managed_request_headers?: Array<ManagedHeaderUpdateResponse.ManagedRequestHeader>;

  managed_response_headers?: Array<ManagedHeaderUpdateResponse.ManagedResponseHeader>;
}

export namespace ManagedHeaderUpdateResponse {
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

export interface ManagedHeaderUpdateParams {
  managed_request_headers: Array<ManagedHeaderUpdateParams.ManagedRequestHeader>;

  managed_response_headers: Array<ManagedHeaderUpdateParams.ManagedResponseHeader>;
}

export namespace ManagedHeaderUpdateParams {
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
  export import ManagedHeaderUpdateResponse = ManagedHeadersAPI.ManagedHeaderUpdateResponse;
  export import ManagedHeaderListResponse = ManagedHeadersAPI.ManagedHeaderListResponse;
  export import ManagedHeaderUpdateParams = ManagedHeadersAPI.ManagedHeaderUpdateParams;
}
