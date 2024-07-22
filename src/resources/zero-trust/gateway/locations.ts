// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as LocationsAPI from './locations';
import { SinglePage } from '../../../pagination';

export class Locations extends APIResource {
  /**
   * Creates a new Zero Trust Gateway location.
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
   * Updates a configured Zero Trust Gateway location.
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
   * Fetches Zero Trust Gateway locations for an account.
   */
  list(
    params: LocationListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<LocationsSinglePage, Location> {
    const { account_id } = params;
    return this._client.getAPIList(`/accounts/${account_id}/gateway/locations`, LocationsSinglePage, options);
  }

  /**
   * Deletes a configured Zero Trust Gateway location.
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
   * Fetches a single Zero Trust Gateway location.
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
   * True if the endpoint is enabled for this location.
   */
  enabled?: boolean;

  /**
   * A list of allowed source IP network ranges for this endpoint. When empty, all
   * source IPs are allowed. A non-empty list is only effective if the endpoint is
   * enabled for this location.
   */
  networks?: Array<IPNetwork>;

  /**
   * True if the endpoint requires
   * [user identity](https://developers.cloudflare.com/cloudflare-one/connections/connect-devices/agentless/dns/dns-over-https/#filter-doh-requests-by-user)
   * authentication.
   */
  require_token?: boolean;
}

export interface DOHEndpointParam {
  /**
   * True if the endpoint is enabled for this location.
   */
  enabled?: boolean;

  /**
   * A list of allowed source IP network ranges for this endpoint. When empty, all
   * source IPs are allowed. A non-empty list is only effective if the endpoint is
   * enabled for this location.
   */
  networks?: Array<IPNetworkParam>;

  /**
   * True if the endpoint requires
   * [user identity](https://developers.cloudflare.com/cloudflare-one/connections/connect-devices/agentless/dns/dns-over-https/#filter-doh-requests-by-user)
   * authentication.
   */
  require_token?: boolean;
}

export interface DOTEndpoint {
  /**
   * True if the endpoint is enabled for this location.
   */
  enabled?: boolean;

  /**
   * A list of allowed source IP network ranges for this endpoint. When empty, all
   * source IPs are allowed. A non-empty list is only effective if the endpoint is
   * enabled for this location.
   */
  networks?: Array<IPNetwork>;
}

export interface DOTEndpointParam {
  /**
   * True if the endpoint is enabled for this location.
   */
  enabled?: boolean;

  /**
   * A list of allowed source IP network ranges for this endpoint. When empty, all
   * source IPs are allowed. A non-empty list is only effective if the endpoint is
   * enabled for this location.
   */
  networks?: Array<IPNetworkParam>;
}

/**
 * The destination endpoints configured for this location. When updating a
 * location, if this field is absent or set with null, the endpoints configuration
 * remains unchanged.
 */
export interface Endpoint {
  doh?: DOHEndpoint;

  dot?: DOTEndpoint;

  ipv4?: IPV4Endpoint;

  ipv6?: IPV6Endpoint;
}

/**
 * The destination endpoints configured for this location. When updating a
 * location, if this field is absent or set with null, the endpoints configuration
 * remains unchanged.
 */
export interface EndpointParam {
  doh?: DOHEndpointParam;

  dot?: DOTEndpointParam;

  ipv4?: IPV4EndpointParam;

  ipv6?: IPV6EndpointParam;
}

export interface IPNetwork {
  /**
   * The IP address or IP CIDR.
   */
  network: string;
}

export interface IPNetworkParam {
  /**
   * The IP address or IP CIDR.
   */
  network: string;
}

export interface IPV4Endpoint {
  /**
   * True if the endpoint is enabled for this location.
   */
  enabled?: boolean;
}

export interface IPV4EndpointParam {
  /**
   * True if the endpoint is enabled for this location.
   */
  enabled?: boolean;
}

export interface IPV6Endpoint {
  /**
   * True if the endpoint is enabled for this location.
   */
  enabled?: boolean;

  /**
   * A list of allowed source IPv6 network ranges for this endpoint. When empty, all
   * source IPs are allowed. A non-empty list is only effective if the endpoint is
   * enabled for this location.
   */
  networks?: Array<IPV6Network>;
}

export interface IPV6EndpointParam {
  /**
   * True if the endpoint is enabled for this location.
   */
  enabled?: boolean;

  /**
   * A list of allowed source IPv6 network ranges for this endpoint. When empty, all
   * source IPs are allowed. A non-empty list is only effective if the endpoint is
   * enabled for this location.
   */
  networks?: Array<IPV6NetworkParam>;
}

export interface IPV6Network {
  /**
   * The IPv6 address or IPv6 CIDR.
   */
  network: string;
}

export interface IPV6NetworkParam {
  /**
   * The IPv6 address or IPv6 CIDR.
   */
  network: string;
}

export interface Location {
  id?: string;

  /**
   * True if the location is the default location.
   */
  client_default?: boolean;

  created_at?: string;

  /**
   * The identifier of the pair of IPv4 addresses assigned to this location.
   */
  dns_destination_ips_id?: string;

  /**
   * The DNS over HTTPS domain to send DNS requests to. This field is auto-generated
   * by Gateway.
   */
  doh_subdomain?: string;

  /**
   * True if the location needs to resolve EDNS queries.
   */
  ecs_support?: boolean;

  /**
   * The destination endpoints configured for this location. When updating a
   * location, if this field is absent or set with null, the endpoints configuration
   * remains unchanged.
   */
  endpoints?: Endpoint;

  /**
   * IPV6 destination ip assigned to this location. DNS requests sent to this IP will
   * counted as the request under this location. This field is auto-generated by
   * Gateway.
   */
  ip?: string;

  /**
   * The primary destination IPv4 address from the pair identified by the
   * dns_destination_ips_id. This field is read-only.
   */
  ipv4_destination?: string;

  /**
   * The backup destination IPv4 address from the pair identified by the
   * dns_destination_ips_id. This field is read-only.
   */
  ipv4_destination_backup?: string;

  /**
   * The name of the location.
   */
  name?: string;

  /**
   * A list of network ranges that requests from this location would originate from.
   * A non-empty list is only effective if the ipv4 endpoint is enabled for this
   * location.
   */
  networks?: Array<Location.Network>;

  updated_at?: string;
}

export namespace Location {
  export interface Network {
    /**
     * The IPv4 address or IPv4 CIDR. IPv4 CIDRs are limited to a maximum of /24.
     */
    network: string;
  }
}

export type LocationDeleteResponse = unknown | string | null;

export interface LocationCreateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param: The name of the location.
   */
  name: string;

  /**
   * Body param: True if the location is the default location.
   */
  client_default?: boolean;

  /**
   * Body param: The identifier of the pair of IPv4 addresses assigned to this
   * location. When creating a location, if this field is absent or set with null,
   * the pair of shared IPv4 addresses (0e4a32c6-6fb8-4858-9296-98f51631e8e6) is
   * auto-assigned. When updating a location, if the field is absent or set with
   * null, the pre-assigned pair remains unchanged.
   */
  dns_destination_ips_id?: string;

  /**
   * Body param: True if the location needs to resolve EDNS queries.
   */
  ecs_support?: boolean;

  /**
   * Body param: The destination endpoints configured for this location. When
   * updating a location, if this field is absent or set with null, the endpoints
   * configuration remains unchanged.
   */
  endpoints?: EndpointParam;

  /**
   * Body param: A list of network ranges that requests from this location would
   * originate from. A non-empty list is only effective if the ipv4 endpoint is
   * enabled for this location.
   */
  networks?: Array<LocationCreateParams.Network>;
}

export namespace LocationCreateParams {
  export interface Network {
    /**
     * The IPv4 address or IPv4 CIDR. IPv4 CIDRs are limited to a maximum of /24.
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
   * Body param: The name of the location.
   */
  name: string;

  /**
   * Body param: True if the location is the default location.
   */
  client_default?: boolean;

  /**
   * Body param: The identifier of the pair of IPv4 addresses assigned to this
   * location. When creating a location, if this field is absent or set with null,
   * the pair of shared IPv4 addresses (0e4a32c6-6fb8-4858-9296-98f51631e8e6) is
   * auto-assigned. When updating a location, if the field is absent or set with
   * null, the pre-assigned pair remains unchanged.
   */
  dns_destination_ips_id?: string;

  /**
   * Body param: True if the location needs to resolve EDNS queries.
   */
  ecs_support?: boolean;

  /**
   * Body param: The destination endpoints configured for this location. When
   * updating a location, if this field is absent or set with null, the endpoints
   * configuration remains unchanged.
   */
  endpoints?: EndpointParam;

  /**
   * Body param: A list of network ranges that requests from this location would
   * originate from. A non-empty list is only effective if the ipv4 endpoint is
   * enabled for this location.
   */
  networks?: Array<LocationUpdateParams.Network>;
}

export namespace LocationUpdateParams {
  export interface Network {
    /**
     * The IPv4 address or IPv4 CIDR. IPv4 CIDRs are limited to a maximum of /24.
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

export namespace Locations {
  export import DOHEndpoint = LocationsAPI.DOHEndpoint;
  export import DOTEndpoint = LocationsAPI.DOTEndpoint;
  export import Endpoint = LocationsAPI.Endpoint;
  export import IPNetwork = LocationsAPI.IPNetwork;
  export import IPV4Endpoint = LocationsAPI.IPV4Endpoint;
  export import IPV6Endpoint = LocationsAPI.IPV6Endpoint;
  export import IPV6Network = LocationsAPI.IPV6Network;
  export import Location = LocationsAPI.Location;
  export import LocationDeleteResponse = LocationsAPI.LocationDeleteResponse;
  export import LocationsSinglePage = LocationsAPI.LocationsSinglePage;
  export import LocationCreateParams = LocationsAPI.LocationCreateParams;
  export import LocationUpdateParams = LocationsAPI.LocationUpdateParams;
  export import LocationListParams = LocationsAPI.LocationListParams;
  export import LocationDeleteParams = LocationsAPI.LocationDeleteParams;
  export import LocationGetParams = LocationsAPI.LocationGetParams;
}
