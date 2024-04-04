// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as LocationsAPI from 'cloudflare/resources/zero-trust/gateway/locations';
import * as Shared from 'cloudflare/resources/shared';
import { SinglePage } from 'cloudflare/pagination';

export class Locations extends APIResource {
  /**
   * Creates a new Zero Trust Gateway location.
   */
  create(
    params: LocationCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ZeroTrustGatewayLocations> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/gateway/locations`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ZeroTrustGatewayLocations }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a configured Zero Trust Gateway location.
   */
  update(
    locationId: string,
    params: LocationUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ZeroTrustGatewayLocations> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/gateway/locations/${locationId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ZeroTrustGatewayLocations }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches Zero Trust Gateway locations for an account.
   */
  list(
    params: LocationListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ZeroTrustGatewayLocationsSinglePage, ZeroTrustGatewayLocations> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/gateway/locations`,
      ZeroTrustGatewayLocationsSinglePage,
      options,
    );
  }

  /**
   * Deletes a configured Zero Trust Gateway location.
   */
  delete(
    locationId: string,
    params: LocationDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a> {
    const { account_id, body } = params;
    return (
      this._client.delete(`/accounts/${account_id}/gateway/locations/${locationId}`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a single Zero Trust Gateway location.
   */
  get(
    locationId: string,
    params: LocationGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ZeroTrustGatewayLocations> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/gateway/locations/${locationId}`,
        options,
      ) as Core.APIPromise<{ result: ZeroTrustGatewayLocations }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class ZeroTrustGatewayLocationsSinglePage extends SinglePage<ZeroTrustGatewayLocations> {}

export interface UnnamedSchemaRef1b37523fdb0ae5806cd8e062492aab66 {
  id?: string;

  /**
   * True if the location is the default location.
   */
  client_default?: boolean;

  created_at?: string;

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
   * IPV6 destination ip assigned to this location. DNS requests sent to this IP will
   * counted as the request under this location. This field is auto-generated by
   * Gateway.
   */
  ip?: string;

  /**
   * The name of the location.
   */
  name?: string;

  /**
   * A list of network ranges that requests from this location would originate from.
   */
  networks?: Array<UnnamedSchemaRef1b37523fdb0ae5806cd8e062492aab66.Network>;

  updated_at?: string;
}

export namespace UnnamedSchemaRef1b37523fdb0ae5806cd8e062492aab66 {
  export interface Network {
    /**
     * The IPv4 address or IPv4 CIDR. IPv4 CIDRs are limited to a maximum of /24.
     */
    network: string;
  }
}

export interface ZeroTrustGatewayLocations {
  id?: string;

  /**
   * True if the location is the default location.
   */
  client_default?: boolean;

  created_at?: string;

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
   * IPV6 destination ip assigned to this location. DNS requests sent to this IP will
   * counted as the request under this location. This field is auto-generated by
   * Gateway.
   */
  ip?: string;

  /**
   * The name of the location.
   */
  name?: string;

  /**
   * A list of network ranges that requests from this location would originate from.
   */
  networks?: Array<ZeroTrustGatewayLocations.Network>;

  updated_at?: string;
}

export namespace ZeroTrustGatewayLocations {
  export interface Network {
    /**
     * The IPv4 address or IPv4 CIDR. IPv4 CIDRs are limited to a maximum of /24.
     */
    network: string;
  }
}

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
   * Body param: True if the location needs to resolve EDNS queries.
   */
  ecs_support?: boolean;

  /**
   * Body param: A list of network ranges that requests from this location would
   * originate from.
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
   * Body param: True if the location needs to resolve EDNS queries.
   */
  ecs_support?: boolean;

  /**
   * Body param: A list of network ranges that requests from this location would
   * originate from.
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
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface LocationGetParams {
  account_id: string;
}

export namespace Locations {
  export import UnnamedSchemaRef1b37523fdb0ae5806cd8e062492aab66 = LocationsAPI.UnnamedSchemaRef1b37523fdb0ae5806cd8e062492aab66;
  export import ZeroTrustGatewayLocations = LocationsAPI.ZeroTrustGatewayLocations;
  export import ZeroTrustGatewayLocationsSinglePage = LocationsAPI.ZeroTrustGatewayLocationsSinglePage;
  export import LocationCreateParams = LocationsAPI.LocationCreateParams;
  export import LocationUpdateParams = LocationsAPI.LocationUpdateParams;
  export import LocationListParams = LocationsAPI.LocationListParams;
  export import LocationDeleteParams = LocationsAPI.LocationDeleteParams;
  export import LocationGetParams = LocationsAPI.LocationGetParams;
}
