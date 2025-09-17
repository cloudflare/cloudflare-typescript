// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import { SinglePage } from '../../../pagination';

export class Locations extends APIResource {
  /**
   * Create a new Zero Trust Gateway location.
   *
   * @example
   * ```ts
   * const location =
   *   await client.zeroTrust.gateway.locations.create({
   *     account_id: '699d98642c564d2e855e9661899b7252',
   *     name: 'Austin Office Location',
   *   });
   * ```
   */
  create(params: LocationCreateParams, options?: Core.RequestOptions): Core.APIPromise<Location> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/gateway/locations`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: Location }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update a configured Zero Trust Gateway location.
   *
   * @example
   * ```ts
   * const location =
   *   await client.zeroTrust.gateway.locations.update(
   *     'ed35569b41ce4d1facfe683550f54086',
   *     {
   *       account_id: '699d98642c564d2e855e9661899b7252',
   *       name: 'Austin Office Location',
   *     },
   *   );
   * ```
   */
  update(
    locationId: string,
    params: LocationUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Location> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/gateway/locations/${locationId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: Location }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List Zero Trust Gateway locations for an account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const location of client.zeroTrust.gateway.locations.list(
   *   { account_id: '699d98642c564d2e855e9661899b7252' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: LocationListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<LocationsSinglePage, Location> {
    const { account_id } = params;
    return this._client.getAPIList(`/accounts/${account_id}/gateway/locations`, LocationsSinglePage, options);
  }

  /**
   * Delete a configured Zero Trust Gateway location.
   *
   * @example
   * ```ts
   * const location =
   *   await client.zeroTrust.gateway.locations.delete(
   *     'ed35569b41ce4d1facfe683550f54086',
   *     { account_id: '699d98642c564d2e855e9661899b7252' },
   *   );
   * ```
   */
  delete(
    locationId: string,
    params: LocationDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LocationDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/gateway/locations/${locationId}`,
        options,
      ) as Core.APIPromise<{ result: LocationDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a single Zero Trust Gateway location.
   *
   * @example
   * ```ts
   * const location =
   *   await client.zeroTrust.gateway.locations.get(
   *     'ed35569b41ce4d1facfe683550f54086',
   *     { account_id: '699d98642c564d2e855e9661899b7252' },
   *   );
   * ```
   */
  get(
    locationId: string,
    params: LocationGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Location> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/gateway/locations/${locationId}`,
        options,
      ) as Core.APIPromise<{ result: Location }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class LocationsSinglePage extends SinglePage<Location> {}

export interface DOHEndpoint {
  /**
   * Indicate whether the DOH endpoint is enabled for this location.
   */
  enabled?: boolean;

  /**
   * Specify the list of allowed source IP network ranges for this endpoint. When the
   * list is empty, the endpoint allows all source IPs. The list takes effect only if
   * the endpoint is enabled for this location.
   */
  networks?: Array<IPNetwork> | null;

  /**
   * Specify whether the DOH endpoint requires user identity authentication.
   */
  require_token?: boolean;
}

export interface DOHEndpointParam {
  /**
   * Indicate whether the DOH endpoint is enabled for this location.
   */
  enabled?: boolean;

  /**
   * Specify the list of allowed source IP network ranges for this endpoint. When the
   * list is empty, the endpoint allows all source IPs. The list takes effect only if
   * the endpoint is enabled for this location.
   */
  networks?: Array<IPNetworkParam> | null;

  /**
   * Specify whether the DOH endpoint requires user identity authentication.
   */
  require_token?: boolean;
}

export interface DOTEndpoint {
  /**
   * Indicate whether the DOT endpoint is enabled for this location.
   */
  enabled?: boolean;

  /**
   * Specify the list of allowed source IP network ranges for this endpoint. When the
   * list is empty, the endpoint allows all source IPs. The list takes effect only if
   * the endpoint is enabled for this location.
   */
  networks?: Array<IPNetwork> | null;
}

export interface DOTEndpointParam {
  /**
   * Indicate whether the DOT endpoint is enabled for this location.
   */
  enabled?: boolean;

  /**
   * Specify the list of allowed source IP network ranges for this endpoint. When the
   * list is empty, the endpoint allows all source IPs. The list takes effect only if
   * the endpoint is enabled for this location.
   */
  networks?: Array<IPNetworkParam> | null;
}

/**
 * Configure the destination endpoints for this location.
 */
export interface Endpoint {
  doh: DOHEndpoint;

  dot: DOTEndpoint;

  ipv4: IPV4Endpoint;

  ipv6: IPV6Endpoint;
}

/**
 * Configure the destination endpoints for this location.
 */
export interface EndpointParam {
  doh: DOHEndpointParam;

  dot: DOTEndpointParam;

  ipv4: IPV4EndpointParam;

  ipv6: IPV6EndpointParam;
}

export interface IPNetwork {
  /**
   * Specify the IP address or IP CIDR.
   */
  network: string;
}

export interface IPNetworkParam {
  /**
   * Specify the IP address or IP CIDR.
   */
  network: string;
}

export interface IPV4Endpoint {
  /**
   * Indicate whether the IPv4 endpoint is enabled for this location.
   */
  enabled?: boolean;
}

export interface IPV4EndpointParam {
  /**
   * Indicate whether the IPv4 endpoint is enabled for this location.
   */
  enabled?: boolean;
}

export interface IPV6Endpoint {
  /**
   * Indicate whether the IPV6 endpoint is enabled for this location.
   */
  enabled?: boolean;

  /**
   * Specify the list of allowed source IPv6 network ranges for this endpoint. When
   * the list is empty, the endpoint allows all source IPs. The list takes effect
   * only if the endpoint is enabled for this location.
   */
  networks?: Array<IPV6Network> | null;
}

export interface IPV6EndpointParam {
  /**
   * Indicate whether the IPV6 endpoint is enabled for this location.
   */
  enabled?: boolean;

  /**
   * Specify the list of allowed source IPv6 network ranges for this endpoint. When
   * the list is empty, the endpoint allows all source IPs. The list takes effect
   * only if the endpoint is enabled for this location.
   */
  networks?: Array<IPV6NetworkParam> | null;
}

export interface IPV6Network {
  /**
   * Specify the IPv6 address or IPv6 CIDR.
   */
  network: string;
}

export interface IPV6NetworkParam {
  /**
   * Specify the IPv6 address or IPv6 CIDR.
   */
  network: string;
}

export interface Location {
  id?: string;

  /**
   * Indicate whether this location is the default location.
   */
  client_default?: boolean;

  created_at?: string;

  /**
   * Indicate the identifier of the pair of IPv4 addresses assigned to this location.
   */
  dns_destination_ips_id?: string;

  /**
   * Specify the UUID of the IPv6 block brought to the gateway so that this
   * location's IPv6 address is allocated from the Bring Your Own IPv6 (BYOIPv6)
   * block rather than the standard Cloudflare IPv6 block.
   */
  dns_destination_ipv6_block_id?: string | null;

  /**
   * Specify the DNS over HTTPS domain that receives DNS requests. Gateway
   * automatically generates this value.
   */
  doh_subdomain?: string;

  /**
   * Indicate whether the location must resolve EDNS queries.
   */
  ecs_support?: boolean;

  /**
   * Configure the destination endpoints for this location.
   */
  endpoints?: Endpoint | null;

  /**
   * Defines the automatically generated IPv6 destination IP assigned to this
   * location. Gateway counts all DNS requests sent to this IP as requests under this
   * location.
   */
  ip?: string;

  /**
   * Show the primary destination IPv4 address from the pair identified
   * dns_destination_ips_id. This field read-only.
   */
  ipv4_destination?: string;

  /**
   * Show the backup destination IPv4 address from the pair identified
   * dns_destination_ips_id. This field read-only.
   */
  ipv4_destination_backup?: string;

  /**
   * Specify the location name.
   */
  name?: string;

  /**
   * Specify the list of network ranges from which requests at this location
   * originate. The list takes effect only if it is non-empty and the IPv4 endpoint
   * is enabled for this location.
   */
  networks?: Array<Location.Network> | null;

  updated_at?: string;
}

export namespace Location {
  export interface Network {
    /**
     * Specify the IPv4 address or IPv4 CIDR. Limit IPv4 CIDRs to a maximum of /24.
     */
    network: string;
  }
}

export type LocationDeleteResponse = unknown;

export interface LocationCreateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param: Specify the location name.
   */
  name: string;

  /**
   * Body param: Indicate whether this location is the default location.
   */
  client_default?: boolean;

  /**
   * Body param: Specify the identifier of the pair of IPv4 addresses assigned to
   * this location. When creating a location, if this field is absent or set to null,
   * the pair of shared IPv4 addresses (0e4a32c6-6fb8-4858-9296-98f51631e8e6) is
   * auto-assigned. When updating a location, if this field is absent or set to null,
   * the pre-assigned pair remains unchanged.
   */
  dns_destination_ips_id?: string;

  /**
   * Body param: Indicate whether the location must resolve EDNS queries.
   */
  ecs_support?: boolean;

  /**
   * Body param: Configure the destination endpoints for this location.
   */
  endpoints?: EndpointParam | null;

  /**
   * Body param: Specify the list of network ranges from which requests at this
   * location originate. The list takes effect only if it is non-empty and the IPv4
   * endpoint is enabled for this location.
   */
  networks?: Array<LocationCreateParams.Network> | null;
}

export namespace LocationCreateParams {
  export interface Network {
    /**
     * Specify the IPv4 address or IPv4 CIDR. Limit IPv4 CIDRs to a maximum of /24.
     */
    network: string;
  }
}

export interface LocationUpdateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param: Specify the location name.
   */
  name: string;

  /**
   * Body param: Indicate whether this location is the default location.
   */
  client_default?: boolean;

  /**
   * Body param: Specify the identifier of the pair of IPv4 addresses assigned to
   * this location. When creating a location, if this field is absent or set to null,
   * the pair of shared IPv4 addresses (0e4a32c6-6fb8-4858-9296-98f51631e8e6) is
   * auto-assigned. When updating a location, if this field is absent or set to null,
   * the pre-assigned pair remains unchanged.
   */
  dns_destination_ips_id?: string;

  /**
   * Body param: Indicate whether the location must resolve EDNS queries.
   */
  ecs_support?: boolean;

  /**
   * Body param: Configure the destination endpoints for this location.
   */
  endpoints?: EndpointParam | null;

  /**
   * Body param: Specify the list of network ranges from which requests at this
   * location originate. The list takes effect only if it is non-empty and the IPv4
   * endpoint is enabled for this location.
   */
  networks?: Array<LocationUpdateParams.Network> | null;
}

export namespace LocationUpdateParams {
  export interface Network {
    /**
     * Specify the IPv4 address or IPv4 CIDR. Limit IPv4 CIDRs to a maximum of /24.
     */
    network: string;
  }
}

export interface LocationListParams {
  account_id: string;
}

export interface LocationDeleteParams {
  account_id: string;
}

export interface LocationGetParams {
  account_id: string;
}

Locations.LocationsSinglePage = LocationsSinglePage;

export declare namespace Locations {
  export {
    type DOHEndpoint as DOHEndpoint,
    type DOTEndpoint as DOTEndpoint,
    type Endpoint as Endpoint,
    type IPNetwork as IPNetwork,
    type IPV4Endpoint as IPV4Endpoint,
    type IPV6Endpoint as IPV6Endpoint,
    type IPV6Network as IPV6Network,
    type Location as Location,
    type LocationDeleteResponse as LocationDeleteResponse,
    LocationsSinglePage as LocationsSinglePage,
    type LocationCreateParams as LocationCreateParams,
    type LocationUpdateParams as LocationUpdateParams,
    type LocationListParams as LocationListParams,
    type LocationDeleteParams as LocationDeleteParams,
    type LocationGetParams as LocationGetParams,
  };
}
