// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class OriginCloudRegions extends APIResource {
  /**
   * Adds a single IP-to-cloud-region mapping for the zone. The IP must be a valid
   * IPv4 or IPv6 address and is normalized to canonical form before storage (RFC
   * 5952 for IPv6). Returns 400 (code 1145) if a mapping for that IP already exists
   * — use PATCH to update an existing entry. The vendor and region are validated
   * against the list from
   * `GET /zones/{zone_id}/cache/origin_cloud_regions/supported_regions`.
   *
   * @example
   * ```ts
   * const originCloudRegion =
   *   await client.cache.originCloudRegions.create({
   *     zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     ip: '192.0.2.1',
   *     region: 'us-east-1',
   *     vendor: 'aws',
   *   });
   * ```
   */
  create(
    params: OriginCloudRegionCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OriginCloudRegionCreateResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.post(`/zones/${zone_id}/cache/origin_cloud_regions`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: OriginCloudRegionCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns all IP-to-cloud-region mappings configured for the zone. Each mapping
   * tells Cloudflare which cloud vendor and region hosts the origin at that IP,
   * enabling the edge to route via the nearest Tiered Cache upper-tier co-located
   * with that cloud provider. Returns an empty array when no mappings exist.
   *
   * @example
   * ```ts
   * const originCloudRegions =
   *   await client.cache.originCloudRegions.list({
   *     zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   });
   * ```
   */
  list(
    params: OriginCloudRegionListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OriginCloudRegionListResponse> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/cache/origin_cloud_regions`, options) as Core.APIPromise<{
        result: OriginCloudRegionListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Removes the cloud region mapping for a single origin IP address. The IP path
   * parameter is normalized before lookup. Returns the deleted entry on success.
   * Returns 404 (code 1163) if no mapping exists for the specified IP. When the last
   * mapping for the zone is removed the underlying rule record is also deleted.
   *
   * @example
   * ```ts
   * const originCloudRegion =
   *   await client.cache.originCloudRegions.delete(
   *     '192.0.2.1',
   *     { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  delete(
    originIP: string,
    params: OriginCloudRegionDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OriginCloudRegionDeleteResponse> {
    const { zone_id } = params;
    return (
      this._client.delete(
        `/zones/${zone_id}/cache/origin_cloud_regions/${originIP}`,
        options,
      ) as Core.APIPromise<{ result: OriginCloudRegionDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Removes up to 100 IP-to-cloud-region mappings in a single request. Each IP is
   * validated independently — successfully deleted items are returned in the
   * `succeeded` array and IPs that could not be found or are invalid are returned in
   * the `failed` array.
   *
   * @example
   * ```ts
   * const response =
   *   await client.cache.originCloudRegions.bulkDelete({
   *     zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   });
   * ```
   */
  bulkDelete(
    params: OriginCloudRegionBulkDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OriginCloudRegionBulkDeleteResponse> {
    const { zone_id } = params;
    return (
      this._client.delete(`/zones/${zone_id}/cache/origin_cloud_regions/batch`, options) as Core.APIPromise<{
        result: OriginCloudRegionBulkDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Adds or updates up to 100 IP-to-cloud-region mappings in a single request. Each
   * item is validated independently — valid items are applied and invalid items are
   * returned in the `failed` array. The vendor and region for every item are
   * validated against the list from
   * `GET /zones/{zone_id}/cache/origin_cloud_regions/supported_regions`.
   *
   * @example
   * ```ts
   * const response =
   *   await client.cache.originCloudRegions.bulkEdit({
   *     zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     body: [
   *       {
   *         ip: '192.0.2.1',
   *         region: 'us-east-1',
   *         vendor: 'aws',
   *       },
   *       {
   *         ip: '2001:db8::1',
   *         region: 'us-central1',
   *         vendor: 'gcp',
   *       },
   *     ],
   *   });
   * ```
   */
  bulkEdit(
    params: OriginCloudRegionBulkEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OriginCloudRegionBulkEditResponse> {
    const { zone_id, body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/cache/origin_cloud_regions/batch`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: OriginCloudRegionBulkEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Adds or updates a single IP-to-cloud-region mapping for the zone. Unlike POST,
   * this operation is idempotent — if a mapping for the IP already exists it is
   * overwritten. Returns the complete updated list of all mappings for the zone.
   * Returns 403 (code 1164) when the zone has reached the limit of 3,500 IP
   * mappings.
   *
   * @example
   * ```ts
   * const response = await client.cache.originCloudRegions.edit(
   *   {
   *     zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     ip: '2001:db8::1',
   *     region: 'us-central1',
   *     vendor: 'gcp',
   *   },
   * );
   * ```
   */
  edit(
    params: OriginCloudRegionEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OriginCloudRegionEditResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/cache/origin_cloud_regions`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: OriginCloudRegionEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns the cloud region mapping for a single origin IP address. The IP path
   * parameter is normalized before lookup (RFC 5952 for IPv6). Returns 404
   * (code 1142) if the zone has no mappings or if the specified IP has no mapping.
   *
   * @example
   * ```ts
   * const originCloudRegion =
   *   await client.cache.originCloudRegions.get('192.0.2.1', {
   *     zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   });
   * ```
   */
  get(
    originIP: string,
    params: OriginCloudRegionGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OriginCloudRegionGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(
        `/zones/${zone_id}/cache/origin_cloud_regions/${originIP}`,
        options,
      ) as Core.APIPromise<{ result: OriginCloudRegionGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns the cloud vendors and regions that are valid values for origin cloud
   * region mappings. Each region includes the Tiered Cache upper-tier colocation
   * codes that will be used for cache routing when a mapping targeting that region
   * is active. Requires the zone to have Tiered Cache enabled.
   *
   * @example
   * ```ts
   * const response =
   *   await client.cache.originCloudRegions.supportedRegions({
   *     zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   });
   * ```
   */
  supportedRegions(
    params: OriginCloudRegionSupportedRegionsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OriginCloudRegionSupportedRegionsResponse> {
    const { zone_id } = params;
    return (
      this._client.get(
        `/zones/${zone_id}/cache/origin_cloud_regions/supported_regions`,
        options,
      ) as Core.APIPromise<{ result: OriginCloudRegionSupportedRegionsResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * A single origin IP-to-cloud-region mapping.
 */
export interface OriginCloudRegion {
  /**
   * The origin IP address (IPv4 or IPv6, canonicalized).
   */
  'origin-ip': string;

  /**
   * Cloud vendor region identifier.
   */
  region: string;

  /**
   * Cloud vendor hosting the origin.
   */
  vendor: 'aws' | 'azure' | 'gcp' | 'oci';

  /**
   * Time this mapping was last modified.
   */
  modified_on?: string;
}

/**
 * Response result for a single origin cloud region mapping.
 */
export interface OriginCloudRegionCreateResponse {
  id: 'origin_public_cloud_region';

  /**
   * Whether the setting can be modified by the current user.
   */
  editable: boolean;

  /**
   * A single origin IP-to-cloud-region mapping.
   */
  value: OriginCloudRegion;

  /**
   * Time the mapping was last modified.
   */
  modified_on?: string;
}

/**
 * Response result for a list of origin cloud region mappings.
 */
export interface OriginCloudRegionListResponse {
  id: 'origin_public_cloud_region';

  /**
   * Whether the setting can be modified by the current user.
   */
  editable: boolean;

  value: Array<OriginCloudRegion>;

  /**
   * Time the mapping set was last modified. Null when no mappings exist.
   */
  modified_on?: string | null;
}

/**
 * Response result for a single origin cloud region mapping.
 */
export interface OriginCloudRegionDeleteResponse {
  id: 'origin_public_cloud_region';

  /**
   * Whether the setting can be modified by the current user.
   */
  editable: boolean;

  /**
   * A single origin IP-to-cloud-region mapping.
   */
  value: OriginCloudRegion;

  /**
   * Time the mapping was last modified.
   */
  modified_on?: string;
}

/**
 * Response result for a batch origin cloud region operation.
 */
export interface OriginCloudRegionBulkDeleteResponse {
  id: 'origin_public_cloud_region';

  /**
   * Whether the setting can be modified by the current user.
   */
  editable: boolean;

  value: OriginCloudRegionBulkDeleteResponse.Value;

  /**
   * Time the mapping set was last modified. Null when no items were successfully
   * applied.
   */
  modified_on?: string | null;
}

export namespace OriginCloudRegionBulkDeleteResponse {
  export interface Value {
    /**
     * Items that could not be applied, with error details.
     */
    failed: Array<Value.Failed>;

    /**
     * Items that were successfully applied.
     */
    succeeded: Array<Value.Succeeded>;
  }

  export namespace Value {
    /**
     * Result for a single item in a batch operation.
     */
    export interface Failed {
      /**
       * The origin IP address for this item.
       */
      'origin-ip': string;

      /**
       * Error message explaining why the item failed. Present only on failed items.
       */
      error?: string;

      /**
       * Cloud vendor region identifier. Present on succeeded items for patch operations.
       */
      region?: string;

      /**
       * Cloud vendor identifier. Present on succeeded items for patch operations.
       */
      vendor?: string;
    }

    /**
     * Result for a single item in a batch operation.
     */
    export interface Succeeded {
      /**
       * The origin IP address for this item.
       */
      'origin-ip': string;

      /**
       * Error message explaining why the item failed. Present only on failed items.
       */
      error?: string;

      /**
       * Cloud vendor region identifier. Present on succeeded items for patch operations.
       */
      region?: string;

      /**
       * Cloud vendor identifier. Present on succeeded items for patch operations.
       */
      vendor?: string;
    }
  }
}

/**
 * Response result for a batch origin cloud region operation.
 */
export interface OriginCloudRegionBulkEditResponse {
  id: 'origin_public_cloud_region';

  /**
   * Whether the setting can be modified by the current user.
   */
  editable: boolean;

  value: OriginCloudRegionBulkEditResponse.Value;

  /**
   * Time the mapping set was last modified. Null when no items were successfully
   * applied.
   */
  modified_on?: string | null;
}

export namespace OriginCloudRegionBulkEditResponse {
  export interface Value {
    /**
     * Items that could not be applied, with error details.
     */
    failed: Array<Value.Failed>;

    /**
     * Items that were successfully applied.
     */
    succeeded: Array<Value.Succeeded>;
  }

  export namespace Value {
    /**
     * Result for a single item in a batch operation.
     */
    export interface Failed {
      /**
       * The origin IP address for this item.
       */
      'origin-ip': string;

      /**
       * Error message explaining why the item failed. Present only on failed items.
       */
      error?: string;

      /**
       * Cloud vendor region identifier. Present on succeeded items for patch operations.
       */
      region?: string;

      /**
       * Cloud vendor identifier. Present on succeeded items for patch operations.
       */
      vendor?: string;
    }

    /**
     * Result for a single item in a batch operation.
     */
    export interface Succeeded {
      /**
       * The origin IP address for this item.
       */
      'origin-ip': string;

      /**
       * Error message explaining why the item failed. Present only on failed items.
       */
      error?: string;

      /**
       * Cloud vendor region identifier. Present on succeeded items for patch operations.
       */
      region?: string;

      /**
       * Cloud vendor identifier. Present on succeeded items for patch operations.
       */
      vendor?: string;
    }
  }
}

/**
 * Response result for a list of origin cloud region mappings.
 */
export interface OriginCloudRegionEditResponse {
  id: 'origin_public_cloud_region';

  /**
   * Whether the setting can be modified by the current user.
   */
  editable: boolean;

  value: Array<OriginCloudRegion>;

  /**
   * Time the mapping set was last modified. Null when no mappings exist.
   */
  modified_on?: string | null;
}

/**
 * Response result for a single origin cloud region mapping.
 */
export interface OriginCloudRegionGetResponse {
  id: 'origin_public_cloud_region';

  /**
   * Whether the setting can be modified by the current user.
   */
  editable: boolean;

  /**
   * A single origin IP-to-cloud-region mapping.
   */
  value: OriginCloudRegion;

  /**
   * Time the mapping was last modified.
   */
  modified_on?: string;
}

/**
 * Cloud vendors and their supported regions for origin cloud region mappings.
 */
export interface OriginCloudRegionSupportedRegionsResponse {
  /**
   * Whether Cloudflare airport codes (IATA colo identifiers) were successfully
   * resolved for the `upper_tier_colos` field on each region. When `false`, the
   * `upper_tier_colos` arrays may be empty or incomplete.
   */
  obtained_codes: boolean;

  /**
   * Map of vendor name to list of supported regions.
   */
  vendors: { [key: string]: Array<OriginCloudRegionSupportedRegionsResponse.Vendor> };
}

export namespace OriginCloudRegionSupportedRegionsResponse {
  /**
   * A single supported cloud region with associated Tiered Cache upper-tier
   * colocations.
   */
  export interface Vendor {
    /**
     * Cloud vendor region identifier.
     */
    name: string;

    /**
     * Cloudflare Tiered Cache upper-tier colocation codes co-located with this cloud
     * region. Requests from zones with a matching origin mapping will be routed
     * through these colos.
     */
    upper_tier_colos: Array<string>;
  }
}

export interface OriginCloudRegionCreateParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Body param: Origin IP address (IPv4 or IPv6). Normalized to canonical form
   * before storage (RFC 5952 for IPv6).
   */
  ip: string;

  /**
   * Body param: Cloud vendor region identifier. Must be a valid region for the
   * specified vendor as returned by the supported_regions endpoint.
   */
  region: string;

  /**
   * Body param: Cloud vendor hosting the origin. Must be one of the supported
   * vendors.
   */
  vendor: 'aws' | 'azure' | 'gcp' | 'oci';
}

export interface OriginCloudRegionListParams {
  /**
   * Identifier.
   */
  zone_id: string;
}

export interface OriginCloudRegionDeleteParams {
  /**
   * Identifier.
   */
  zone_id: string;
}

export interface OriginCloudRegionBulkDeleteParams {
  /**
   * Identifier.
   */
  zone_id: string;
}

export interface OriginCloudRegionBulkEditParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Body param
   */
  body: Array<OriginCloudRegionBulkEditParams.Body>;
}

export namespace OriginCloudRegionBulkEditParams {
  /**
   * Request body for creating or updating an origin cloud region mapping.
   */
  export interface Body {
    /**
     * Origin IP address (IPv4 or IPv6). Normalized to canonical form before storage
     * (RFC 5952 for IPv6).
     */
    ip: string;

    /**
     * Cloud vendor region identifier. Must be a valid region for the specified vendor
     * as returned by the supported_regions endpoint.
     */
    region: string;

    /**
     * Cloud vendor hosting the origin. Must be one of the supported vendors.
     */
    vendor: 'aws' | 'azure' | 'gcp' | 'oci';
  }
}

export interface OriginCloudRegionEditParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Body param: Origin IP address (IPv4 or IPv6). Normalized to canonical form
   * before storage (RFC 5952 for IPv6).
   */
  ip: string;

  /**
   * Body param: Cloud vendor region identifier. Must be a valid region for the
   * specified vendor as returned by the supported_regions endpoint.
   */
  region: string;

  /**
   * Body param: Cloud vendor hosting the origin. Must be one of the supported
   * vendors.
   */
  vendor: 'aws' | 'azure' | 'gcp' | 'oci';
}

export interface OriginCloudRegionGetParams {
  /**
   * Identifier.
   */
  zone_id: string;
}

export interface OriginCloudRegionSupportedRegionsParams {
  /**
   * Identifier.
   */
  zone_id: string;
}

export declare namespace OriginCloudRegions {
  export {
    type OriginCloudRegion as OriginCloudRegion,
    type OriginCloudRegionCreateResponse as OriginCloudRegionCreateResponse,
    type OriginCloudRegionListResponse as OriginCloudRegionListResponse,
    type OriginCloudRegionDeleteResponse as OriginCloudRegionDeleteResponse,
    type OriginCloudRegionBulkDeleteResponse as OriginCloudRegionBulkDeleteResponse,
    type OriginCloudRegionBulkEditResponse as OriginCloudRegionBulkEditResponse,
    type OriginCloudRegionEditResponse as OriginCloudRegionEditResponse,
    type OriginCloudRegionGetResponse as OriginCloudRegionGetResponse,
    type OriginCloudRegionSupportedRegionsResponse as OriginCloudRegionSupportedRegionsResponse,
    type OriginCloudRegionCreateParams as OriginCloudRegionCreateParams,
    type OriginCloudRegionListParams as OriginCloudRegionListParams,
    type OriginCloudRegionDeleteParams as OriginCloudRegionDeleteParams,
    type OriginCloudRegionBulkDeleteParams as OriginCloudRegionBulkDeleteParams,
    type OriginCloudRegionBulkEditParams as OriginCloudRegionBulkEditParams,
    type OriginCloudRegionEditParams as OriginCloudRegionEditParams,
    type OriginCloudRegionGetParams as OriginCloudRegionGetParams,
    type OriginCloudRegionSupportedRegionsParams as OriginCloudRegionSupportedRegionsParams,
  };
}
