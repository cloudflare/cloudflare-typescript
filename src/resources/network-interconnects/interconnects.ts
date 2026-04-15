// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Interconnects extends APIResource {
  /**
   * Create a new interconnect
   *
   * @example
   * ```ts
   * const interconnect =
   *   await client.networkInterconnects.interconnects.create({
   *     account_id: 'account_id',
   *     account: 'account',
   *     slot_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     type: 'type',
   *   });
   * ```
   */
  create(
    params: InterconnectCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InterconnectCreateResponse> {
    const { account_id = this._client.accountId, ...body } = params;
    return this._client.post(`/accounts/${account_id}/cni/interconnects`, { body, ...options });
  }

  /**
   * List existing interconnects
   *
   * @example
   * ```ts
   * const interconnects =
   *   await client.networkInterconnects.interconnects.list({
   *     account_id: 'account_id',
   *   });
   * ```
   */
  list(
    params?: InterconnectListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InterconnectListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<InterconnectListResponse>;
  list(
    params: InterconnectListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<InterconnectListResponse> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { account_id = this._client.accountId, ...query } = params;
    return this._client.get(`/accounts/${account_id}/cni/interconnects`, { query, ...options });
  }

  /**
   * Delete an interconnect object
   *
   * @example
   * ```ts
   * await client.networkInterconnects.interconnects.delete(
   *   'icon',
   *   { account_id: 'account_id' },
   * );
   * ```
   */
  delete(
    icon: string,
    params?: InterconnectDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void>;
  delete(icon: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  delete(
    icon: string,
    params: InterconnectDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(params)) {
      return this.delete(icon, {}, params);
    }
    const { account_id = this._client.accountId } = params;
    return this._client.delete(`/accounts/${account_id}/cni/interconnects/${icon}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Get information about an interconnect object
   *
   * @example
   * ```ts
   * const interconnect =
   *   await client.networkInterconnects.interconnects.get(
   *     'icon',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  get(
    icon: string,
    params?: InterconnectGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InterconnectGetResponse>;
  get(icon: string, options?: Core.RequestOptions): Core.APIPromise<InterconnectGetResponse>;
  get(
    icon: string,
    params: InterconnectGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<InterconnectGetResponse> {
    if (isRequestOptions(params)) {
      return this.get(icon, {}, params);
    }
    const { account_id = this._client.accountId } = params;
    return this._client.get(`/accounts/${account_id}/cni/interconnects/${icon}`, options);
  }

  /**
   * Generate the Letter of Authorization (LOA) for a given interconnect
   *
   * @example
   * ```ts
   * await client.networkInterconnects.interconnects.loa(
   *   'icon',
   *   { account_id: 'account_id' },
   * );
   * ```
   */
  loa(icon: string, params?: InterconnectLOAParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  loa(icon: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  loa(
    icon: string,
    params: InterconnectLOAParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(params)) {
      return this.loa(icon, {}, params);
    }
    const { account_id = this._client.accountId } = params;
    return this._client.get(`/accounts/${account_id}/cni/interconnects/${icon}/loa`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Get the current status of an interconnect object
   *
   * @example
   * ```ts
   * const response =
   *   await client.networkInterconnects.interconnects.status(
   *     'icon',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  status(
    icon: string,
    params?: InterconnectStatusParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InterconnectStatusResponse>;
  status(icon: string, options?: Core.RequestOptions): Core.APIPromise<InterconnectStatusResponse>;
  status(
    icon: string,
    params: InterconnectStatusParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<InterconnectStatusResponse> {
    if (isRequestOptions(params)) {
      return this.status(icon, {}, params);
    }
    const { account_id = this._client.accountId } = params;
    return this._client.get(`/accounts/${account_id}/cni/interconnects/${icon}/status`, options);
  }
}

export type InterconnectCreateResponse =
  | InterconnectCreateResponse.NscInterconnectPhysicalBody
  | InterconnectCreateResponse.NscInterconnectGcpPartnerBody;

export namespace InterconnectCreateResponse {
  export interface NscInterconnectPhysicalBody {
    account: string;

    facility: NscInterconnectPhysicalBody.Facility;

    name: string;

    /**
     * A Cloudflare site name.
     */
    site: string;

    slot_id: string;

    speed: string;

    type: string;

    owner?: string;
  }

  export namespace NscInterconnectPhysicalBody {
    export interface Facility {
      address: Array<string>;

      name: string;
    }
  }

  export interface NscInterconnectGcpPartnerBody {
    account: string;

    name: string;

    region: string;

    type: string;

    owner?: string;

    /**
     * Bandwidth structure as visible through the customer-facing API.
     */
    speed?: '50M' | '100M' | '200M' | '300M' | '400M' | '500M' | '1G' | '2G' | '5G' | '10G' | '20G' | '50G';
  }
}

export interface InterconnectListResponse {
  items: Array<
    | InterconnectListResponse.NscInterconnectPhysicalBody
    | InterconnectListResponse.NscInterconnectGcpPartnerBody
  >;

  next?: number | null;
}

export namespace InterconnectListResponse {
  export interface NscInterconnectPhysicalBody {
    account: string;

    facility: NscInterconnectPhysicalBody.Facility;

    name: string;

    /**
     * A Cloudflare site name.
     */
    site: string;

    slot_id: string;

    speed: string;

    type: string;

    owner?: string;
  }

  export namespace NscInterconnectPhysicalBody {
    export interface Facility {
      address: Array<string>;

      name: string;
    }
  }

  export interface NscInterconnectGcpPartnerBody {
    account: string;

    name: string;

    region: string;

    type: string;

    owner?: string;

    /**
     * Bandwidth structure as visible through the customer-facing API.
     */
    speed?: '50M' | '100M' | '200M' | '300M' | '400M' | '500M' | '1G' | '2G' | '5G' | '10G' | '20G' | '50G';
  }
}

export type InterconnectGetResponse =
  | InterconnectGetResponse.NscInterconnectPhysicalBody
  | InterconnectGetResponse.NscInterconnectGcpPartnerBody;

export namespace InterconnectGetResponse {
  export interface NscInterconnectPhysicalBody {
    account: string;

    facility: NscInterconnectPhysicalBody.Facility;

    name: string;

    /**
     * A Cloudflare site name.
     */
    site: string;

    slot_id: string;

    speed: string;

    type: string;

    owner?: string;
  }

  export namespace NscInterconnectPhysicalBody {
    export interface Facility {
      address: Array<string>;

      name: string;
    }
  }

  export interface NscInterconnectGcpPartnerBody {
    account: string;

    name: string;

    region: string;

    type: string;

    owner?: string;

    /**
     * Bandwidth structure as visible through the customer-facing API.
     */
    speed?: '50M' | '100M' | '200M' | '300M' | '400M' | '500M' | '1G' | '2G' | '5G' | '10G' | '20G' | '50G';
  }
}

export type InterconnectStatusResponse =
  | InterconnectStatusResponse.Pending
  | InterconnectStatusResponse.Down
  | InterconnectStatusResponse.Unhealthy
  | InterconnectStatusResponse.Healthy;

export namespace InterconnectStatusResponse {
  export interface Pending {
    state: 'Pending';
  }

  export interface Down {
    state: 'Down';

    /**
     * Diagnostic information, if available
     */
    reason?: string | null;
  }

  export interface Unhealthy {
    state: 'Unhealthy';

    /**
     * Diagnostic information, if available
     */
    reason?: string | null;
  }

  export interface Healthy {
    state: 'Healthy';
  }
}

export type InterconnectCreateParams =
  | InterconnectCreateParams.NscInterconnectCreatePhysicalBody
  | InterconnectCreateParams.NscInterconnectCreateGcpPartnerBody;

export declare namespace InterconnectCreateParams {
  export interface NscInterconnectCreatePhysicalBody {
    /**
     * Path param: Customer account tag
     */
    account_id?: string;

    /**
     * Body param
     */
    account: string;

    /**
     * Body param
     */
    slot_id: string;

    /**
     * Body param
     */
    type: string;

    /**
     * Body param
     */
    speed?: string | null;
  }

  export interface NscInterconnectCreateGcpPartnerBody {
    /**
     * Path param: Customer account tag
     */
    account_id?: string;

    /**
     * Body param
     */
    account: string;

    /**
     * Body param: Bandwidth structure as visible through the customer-facing API.
     */
    bandwidth:
      | '50M'
      | '100M'
      | '200M'
      | '300M'
      | '400M'
      | '500M'
      | '1G'
      | '2G'
      | '5G'
      | '10G'
      | '20G'
      | '50G';

    /**
     * Body param: Pairing key provided by GCP
     */
    pairing_key: string;

    /**
     * Body param
     */
    type: string;
  }
}

export interface InterconnectListParams {
  /**
   * Path param: Customer account tag
   */
  account_id?: string;

  /**
   * Query param
   */
  cursor?: number | null;

  /**
   * Query param
   */
  limit?: number | null;

  /**
   * Query param: If specified, only show interconnects located at the given site
   */
  site?: string | null;

  /**
   * Query param: If specified, only show interconnects of the given type
   */
  type?: string | null;
}

export interface InterconnectDeleteParams {
  /**
   * Customer account tag
   */
  account_id?: string;
}

export interface InterconnectGetParams {
  /**
   * Customer account tag
   */
  account_id?: string;
}

export interface InterconnectLOAParams {
  /**
   * Customer account tag
   */
  account_id?: string;
}

export interface InterconnectStatusParams {
  /**
   * Customer account tag
   */
  account_id?: string;
}

export declare namespace Interconnects {
  export {
    type InterconnectCreateResponse as InterconnectCreateResponse,
    type InterconnectListResponse as InterconnectListResponse,
    type InterconnectGetResponse as InterconnectGetResponse,
    type InterconnectStatusResponse as InterconnectStatusResponse,
    type InterconnectCreateParams as InterconnectCreateParams,
    type InterconnectListParams as InterconnectListParams,
    type InterconnectDeleteParams as InterconnectDeleteParams,
    type InterconnectGetParams as InterconnectGetParams,
    type InterconnectLOAParams as InterconnectLOAParams,
    type InterconnectStatusParams as InterconnectStatusParams,
  };
}
