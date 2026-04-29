// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseOriginCloudRegions extends APIResource {
  static override readonly _key: readonly ['cache', 'originCloudRegions'] = Object.freeze([
    'cache',
    'originCloudRegions',
  ] as const);

  /**
   * Adds a single IP-to-cloud-region mapping for the zone. The IP must be a valid
   * IPv4 or IPv6 address and is normalized to canonical form before storage (RFC
   * 5952 for IPv6). Returns 400 (code 1145) if a mapping for that IP already exists
   * — use PATCH to update an existing entry. The vendor and region are validated
   * against the list from
   * `GET /zones/{zone_id}/cache/origin_cloud_regions/supported_regions`.
   *
   * @deprecated Use `PUT /zones/{zone_id}/origin/cloud_regions/{origin_ip}` instead.
   */
  create(
    params: OriginCloudRegionCreateParams,
    options?: RequestOptions,
  ): APIPromise<OriginCloudRegionCreateResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.post(path`/zones/${zone_id}/cache/origin_cloud_regions`, {
        body,
        ...options,
      }) as APIPromise<{ result: OriginCloudRegionCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns all IP-to-cloud-region mappings configured for the zone. Each mapping
   * tells Cloudflare which cloud vendor and region hosts the origin at that IP,
   * enabling the edge to route via the nearest Tiered Cache upper-tier co-located
   * with that cloud provider. Returns an empty array when no mappings exist.
   *
   * @deprecated Use `GET /zones/{zone_id}/origin/cloud_regions` instead.
   */
  list(
    params: OriginCloudRegionListParams,
    options?: RequestOptions,
  ): APIPromise<OriginCloudRegionListResponse> {
    const { zone_id } = params;
    return (
      this._client.get(path`/zones/${zone_id}/cache/origin_cloud_regions`, options) as APIPromise<{
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
   * @deprecated Use `DELETE /zones/{zone_id}/origin/cloud_regions/{origin_ip}` instead.
   */
  delete(
    originIP: string,
    params: OriginCloudRegionDeleteParams,
    options?: RequestOptions,
  ): APIPromise<OriginCloudRegionDeleteResponse> {
    const { zone_id } = params;
    return (
      this._client.delete(
        path`/zones/${zone_id}/cache/origin_cloud_regions/${originIP}`,
        options,
      ) as APIPromise<{ result: OriginCloudRegionDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Removes up to 100 IP-to-cloud-region mappings in a single request. Each IP is
   * validated independently — successfully deleted items are returned in the
   * `succeeded` array and IPs that could not be found or are invalid are returned in
   * the `failed` array.
   *
   * @deprecated Use `DELETE /zones/{zone_id}/origin/cloud_regions/batch` instead.
   */
  bulkDelete(
    params: OriginCloudRegionBulkDeleteParams,
    options?: RequestOptions,
  ): APIPromise<OriginCloudRegionBulkDeleteResponse> {
    const { zone_id } = params;
    return (
      this._client.delete(path`/zones/${zone_id}/cache/origin_cloud_regions/batch`, options) as APIPromise<{
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
   * @deprecated Use `PUT /zones/{zone_id}/origin/cloud_regions/batch` instead.
   */
  bulkEdit(
    params: OriginCloudRegionBulkEditParams,
    options?: RequestOptions,
  ): APIPromise<OriginCloudRegionBulkEditResponse> {
    const { zone_id, body } = params;
    return (
      this._client.patch(path`/zones/${zone_id}/cache/origin_cloud_regions/batch`, {
        body: body,
        ...options,
      }) as APIPromise<{ result: OriginCloudRegionBulkEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Adds or updates a single IP-to-cloud-region mapping for the zone. Unlike POST,
   * this operation is idempotent — if a mapping for the IP already exists it is
   * overwritten. Returns the complete updated list of all mappings for the zone.
   * Returns 403 (code 1164) when the zone has reached the limit of 3,500 IP
   * mappings.
   *
   * @deprecated Use `PUT /zones/{zone_id}/origin/cloud_regions/{origin_ip}` instead.
   */
  edit(
    params: OriginCloudRegionEditParams,
    options?: RequestOptions,
  ): APIPromise<OriginCloudRegionEditResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(path`/zones/${zone_id}/cache/origin_cloud_regions`, {
        body,
        ...options,
      }) as APIPromise<{ result: OriginCloudRegionEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns the cloud region mapping for a single origin IP address. The IP path
   * parameter is normalized before lookup (RFC 5952 for IPv6). Returns 404
   * (code 1142) if the zone has no mappings or if the specified IP has no mapping.
   *
   * @deprecated Use `GET /zones/{zone_id}/origin/cloud_regions/{origin_ip}` instead.
   */
  get(
    originIP: string,
    params: OriginCloudRegionGetParams,
    options?: RequestOptions,
  ): APIPromise<OriginCloudRegionGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(
        path`/zones/${zone_id}/cache/origin_cloud_regions/${originIP}`,
        options,
      ) as APIPromise<{ result: OriginCloudRegionGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns the cloud vendors and regions that are valid values for origin cloud
   * region mappings. Each region includes the Tiered Cache upper-tier colocation
   * codes that will be used for cache routing when a mapping targeting that region
   * is active. Requires the zone to have Tiered Cache enabled.
   *
   * @deprecated Use `GET /zones/{zone_id}/origin/cloud_regions/supported_regions` instead.
   */
  supportedRegions(
    params: OriginCloudRegionSupportedRegionsParams,
    options?: RequestOptions,
  ): APIPromise<OriginCloudRegionSupportedRegionsResponse> {
    const { zone_id } = params;
    return (
      this._client.get(
        path`/zones/${zone_id}/cache/origin_cloud_regions/supported_regions`,
        options,
      ) as APIPromise<{ result: OriginCloudRegionSupportedRegionsResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class OriginCloudRegions extends BaseOriginCloudRegions {}

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
  value: OriginCloudRegionCreateResponse.Value;

  /**
   * Time the mapping was last modified.
   */
  modified_on?: string;
}

export namespace OriginCloudRegionCreateResponse {
  /**
   * A single origin IP-to-cloud-region mapping.
   */
  export interface Value {
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

  value: Array<OriginCloudRegionListResponse.Value>;

  /**
   * Time the mapping set was last modified. Null when no mappings exist.
   */
  modified_on?: string | null;
}

export namespace OriginCloudRegionListResponse {
  /**
   * A single origin IP-to-cloud-region mapping.
   */
  export interface Value {
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
  value: OriginCloudRegionDeleteResponse.Value;

  /**
   * Time the mapping was last modified.
   */
  modified_on?: string;
}

export namespace OriginCloudRegionDeleteResponse {
  /**
   * A single origin IP-to-cloud-region mapping.
   */
  export interface Value {
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

  value: Array<OriginCloudRegionEditResponse.Value>;

  /**
   * Time the mapping set was last modified. Null when no mappings exist.
   */
  modified_on?: string | null;
}

export namespace OriginCloudRegionEditResponse {
  /**
   * A single origin IP-to-cloud-region mapping.
   */
  export interface Value {
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
  value: OriginCloudRegionGetResponse.Value;

  /**
   * Time the mapping was last modified.
   */
  modified_on?: string;
}

export namespace OriginCloudRegionGetResponse {
  /**
   * A single origin IP-to-cloud-region mapping.
   */
  export interface Value {
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
  zone_id: Shared.IdentifierParam;

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
  zone_id: Shared.IdentifierParam;
}

export interface OriginCloudRegionDeleteParams {
  /**
   * Identifier.
   */
  zone_id: Shared.IdentifierParam;
}

export interface OriginCloudRegionBulkDeleteParams {
  /**
   * Identifier.
   */
  zone_id: Shared.IdentifierParam;
}

export interface OriginCloudRegionBulkEditParams {
  /**
   * Path param: Identifier.
   */
  zone_id: Shared.IdentifierParam;

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
  zone_id: Shared.IdentifierParam;

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
  zone_id: Shared.IdentifierParam;
}

export interface OriginCloudRegionSupportedRegionsParams {
  /**
   * Identifier.
   */
  zone_id: Shared.IdentifierParam;
}

export declare namespace OriginCloudRegions {
  export {
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
