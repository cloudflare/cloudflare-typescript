// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../pagination';

export class OriginCloudRegions extends APIResource {
  /**
   * Creates a new IP-to-cloud-region mapping or replaces the existing mapping for
   * the specified IP. PUT is idempotent — calling it repeatedly with the same body
   * produces the same result. The IP path parameter is normalized to canonical form
   * (RFC 5952 for IPv6) before storage. The vendor and region are validated against
   * the list from `GET /zones/{zone_id}/origin/cloud_regions/supported_regions`.
   * Returns 400 if the `origin_ip` in the body does not match the URL path
   * parameter. Returns 403 (code 1164) when the zone has reached the limit of 3,500
   * IP mappings.
   *
   * @example
   * ```ts
   * const originCloudRegion =
   *   await client.cache.originCloudRegions.update(
   *     '192.0.2.1',
   *     {
   *       zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       origin_ip: '192.0.2.1',
   *       region: 'us-east-1',
   *       vendor: 'aws',
   *     },
   *   );
   * ```
   */
  update(
    originIP: string,
    params: OriginCloudRegionUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OriginCloudRegion> {
    const { zone_id, ...body } = params;
    return (
      this._client.put(`/zones/${zone_id}/origin/cloud_regions/${originIP}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: OriginCloudRegion }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns all IP-to-cloud-region mappings configured for the zone with pagination
   * support. Each mapping tells Cloudflare which cloud vendor and region hosts the
   * origin at that IP, enabling the edge to route via the nearest Tiered Cache
   * upper-tier co-located with that cloud provider. Returns an empty array when no
   * mappings exist.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const originCloudRegion of client.cache.originCloudRegions.list(
   *   { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: OriginCloudRegionListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<OriginCloudRegionsV4PagePaginationArray, OriginCloudRegion> {
    const { zone_id, ...query } = params;
    return this._client.getAPIList(
      `/zones/${zone_id}/origin/cloud_regions`,
      OriginCloudRegionsV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Removes the cloud region mapping for a single origin IP address. The IP path
   * parameter is normalized before lookup. Returns the deleted IP on success.
   * Returns 404 if no mapping exists for the specified IP. When the last mapping for
   * the zone is removed the underlying rule record is also deleted.
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
      this._client.delete(`/zones/${zone_id}/origin/cloud_regions/${originIP}`, options) as Core.APIPromise<{
        result: OriginCloudRegionDeleteResponse;
      }>
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
      this._client.delete(`/zones/${zone_id}/origin/cloud_regions/batch`, options) as Core.APIPromise<{
        result: OriginCloudRegionBulkDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Upserts up to 100 IP-to-cloud-region mappings in a single request. Items in the
   * request body are created or replaced; mappings not included in the request body
   * are preserved unchanged (this is a merge operation, not a full collection
   * replacement). Each item is validated independently — valid items are applied and
   * invalid items are returned in the `failed` array. The vendor and region for
   * every item are validated against the list from
   * `GET /zones/{zone_id}/origin/cloud_regions/supported_regions`.
   *
   * @example
   * ```ts
   * const response =
   *   await client.cache.originCloudRegions.bulkUpdate({
   *     zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     body: [
   *       {
   *         origin_ip: '192.0.2.1',
   *         region: 'us-east-1',
   *         vendor: 'aws',
   *       },
   *       {
   *         origin_ip: '2001:db8::1',
   *         region: 'us-central1',
   *         vendor: 'gcp',
   *       },
   *     ],
   *   });
   * ```
   */
  bulkUpdate(
    params: OriginCloudRegionBulkUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OriginCloudRegionBulkUpdateResponse> {
    const { zone_id, body } = params;
    return (
      this._client.put(`/zones/${zone_id}/origin/cloud_regions/batch`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: OriginCloudRegionBulkUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns the cloud region mapping for a single origin IP address. The IP path
   * parameter is normalized before lookup (RFC 5952 for IPv6). Returns 404 if the
   * zone has no mappings or if the specified IP has no mapping.
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
  ): Core.APIPromise<OriginCloudRegion> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/origin/cloud_regions/${originIP}`, options) as Core.APIPromise<{
        result: OriginCloudRegion;
      }>
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
        `/zones/${zone_id}/origin/cloud_regions/supported_regions`,
        options,
      ) as Core.APIPromise<{ result: OriginCloudRegionSupportedRegionsResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class OriginCloudRegionsV4PagePaginationArray extends V4PagePaginationArray<OriginCloudRegion> {}

/**
 * A single origin IP-to-cloud-region mapping.
 */
export interface OriginCloudRegion {
  /**
   * The origin IP address (IPv4 or IPv6). Normalized to canonical form (RFC 5952 for
   * IPv6).
   */
  origin_ip: string;

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
 * Response result for a delete operation. Identifies the deleted mapping.
 */
export interface OriginCloudRegionDeleteResponse {
  /**
   * The origin IP address whose mapping was deleted.
   */
  origin_ip: string;
}

/**
 * Response result for a batch origin cloud region operation.
 */
export interface OriginCloudRegionBulkDeleteResponse {
  /**
   * Items that could not be applied, with error details.
   */
  failed: Array<OriginCloudRegionBulkDeleteResponse.Failed>;

  /**
   * Items that were successfully applied.
   */
  succeeded: Array<OriginCloudRegionBulkDeleteResponse.Succeeded>;
}

export namespace OriginCloudRegionBulkDeleteResponse {
  /**
   * Result for a single item in a batch operation.
   */
  export interface Failed {
    /**
     * The origin IP address for this item.
     */
    origin_ip: string;

    /**
     * Error message explaining why the item failed. Present only on failed items.
     */
    error?: string;

    /**
     * Cloud vendor region identifier. Present on succeeded items (the new value for
     * upsert, the deleted value for delete).
     */
    region?: string;

    /**
     * Cloud vendor identifier. Present on succeeded items (the new value for upsert,
     * the deleted value for delete).
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
    origin_ip: string;

    /**
     * Error message explaining why the item failed. Present only on failed items.
     */
    error?: string;

    /**
     * Cloud vendor region identifier. Present on succeeded items (the new value for
     * upsert, the deleted value for delete).
     */
    region?: string;

    /**
     * Cloud vendor identifier. Present on succeeded items (the new value for upsert,
     * the deleted value for delete).
     */
    vendor?: string;
  }
}

/**
 * Response result for a batch origin cloud region operation.
 */
export interface OriginCloudRegionBulkUpdateResponse {
  /**
   * Items that could not be applied, with error details.
   */
  failed: Array<OriginCloudRegionBulkUpdateResponse.Failed>;

  /**
   * Items that were successfully applied.
   */
  succeeded: Array<OriginCloudRegionBulkUpdateResponse.Succeeded>;
}

export namespace OriginCloudRegionBulkUpdateResponse {
  /**
   * Result for a single item in a batch operation.
   */
  export interface Failed {
    /**
     * The origin IP address for this item.
     */
    origin_ip: string;

    /**
     * Error message explaining why the item failed. Present only on failed items.
     */
    error?: string;

    /**
     * Cloud vendor region identifier. Present on succeeded items (the new value for
     * upsert, the deleted value for delete).
     */
    region?: string;

    /**
     * Cloud vendor identifier. Present on succeeded items (the new value for upsert,
     * the deleted value for delete).
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
    origin_ip: string;

    /**
     * Error message explaining why the item failed. Present only on failed items.
     */
    error?: string;

    /**
     * Cloud vendor region identifier. Present on succeeded items (the new value for
     * upsert, the deleted value for delete).
     */
    region?: string;

    /**
     * Cloud vendor identifier. Present on succeeded items (the new value for upsert,
     * the deleted value for delete).
     */
    vendor?: string;
  }
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

export interface OriginCloudRegionUpdateParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Body param: Origin IP address (IPv4 or IPv6). For the single PUT endpoint
   * (`PUT /origin/cloud_regions/{origin_ip}`), this field must match the path
   * parameter or the request will be rejected with a 400 error. For the batch PUT
   * endpoint, this field identifies which mapping to upsert.
   */
  origin_ip: string;

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

export interface OriginCloudRegionListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Identifier.
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

export interface OriginCloudRegionBulkUpdateParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Body param
   */
  body: Array<OriginCloudRegionBulkUpdateParams.Body>;
}

export namespace OriginCloudRegionBulkUpdateParams {
  /**
   * Request body for creating or replacing an origin cloud region mapping.
   */
  export interface Body {
    /**
     * Origin IP address (IPv4 or IPv6). For the single PUT endpoint
     * (`PUT /origin/cloud_regions/{origin_ip}`), this field must match the path
     * parameter or the request will be rejected with a 400 error. For the batch PUT
     * endpoint, this field identifies which mapping to upsert.
     */
    origin_ip: string;

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

OriginCloudRegions.OriginCloudRegionsV4PagePaginationArray = OriginCloudRegionsV4PagePaginationArray;

export declare namespace OriginCloudRegions {
  export {
    type OriginCloudRegion as OriginCloudRegion,
    type OriginCloudRegionDeleteResponse as OriginCloudRegionDeleteResponse,
    type OriginCloudRegionBulkDeleteResponse as OriginCloudRegionBulkDeleteResponse,
    type OriginCloudRegionBulkUpdateResponse as OriginCloudRegionBulkUpdateResponse,
    type OriginCloudRegionSupportedRegionsResponse as OriginCloudRegionSupportedRegionsResponse,
    OriginCloudRegionsV4PagePaginationArray as OriginCloudRegionsV4PagePaginationArray,
    type OriginCloudRegionUpdateParams as OriginCloudRegionUpdateParams,
    type OriginCloudRegionListParams as OriginCloudRegionListParams,
    type OriginCloudRegionDeleteParams as OriginCloudRegionDeleteParams,
    type OriginCloudRegionBulkDeleteParams as OriginCloudRegionBulkDeleteParams,
    type OriginCloudRegionBulkUpdateParams as OriginCloudRegionBulkUpdateParams,
    type OriginCloudRegionGetParams as OriginCloudRegionGetParams,
    type OriginCloudRegionSupportedRegionsParams as OriginCloudRegionSupportedRegionsParams,
  };
}
