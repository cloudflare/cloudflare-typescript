// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as KeylessCertificatesAPI from 'cloudflare/resources/keyless-certificates';
import * as Shared from 'cloudflare/resources/shared';
import * as CustomHostnamesAPI from 'cloudflare/resources/custom-hostnames/custom-hostnames';
import { SinglePage } from 'cloudflare/pagination';

export class KeylessCertificates extends APIResource {
  /**
   * Create Keyless SSL Configuration
   */
  create(
    params: KeylessCertificateCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<KeylessCertificateHostname> {
    const { zone_id, ...body } = params;
    return (
      this._client.post(`/zones/${zone_id}/keyless_certificates`, { body, ...options }) as Core.APIPromise<{
        result: KeylessCertificateHostname;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List all Keyless SSL configurations for a given zone.
   */
  list(
    params: KeylessCertificateListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<KeylessCertificateHostnamesSinglePage, KeylessCertificateHostname> {
    const { zone_id } = params;
    return this._client.getAPIList(
      `/zones/${zone_id}/keyless_certificates`,
      KeylessCertificateHostnamesSinglePage,
      options,
    );
  }

  /**
   * Delete Keyless SSL Configuration
   */
  delete(
    keylessCertificateId: string,
    params: KeylessCertificateDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRef8900f4cb9dca9b9ed0ac41ad571e6837> {
    const { zone_id, body } = params;
    return (
      this._client.delete(`/zones/${zone_id}/keyless_certificates/${keylessCertificateId}`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: Shared.UnnamedSchemaRef8900f4cb9dca9b9ed0ac41ad571e6837 }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * This will update attributes of a Keyless SSL. Consists of one or more of the
   * following: host,name,port.
   */
  edit(
    keylessCertificateId: string,
    params: KeylessCertificateEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<KeylessCertificateHostname> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/keyless_certificates/${keylessCertificateId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: KeylessCertificateHostname }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get details for one Keyless SSL configuration.
   */
  get(
    keylessCertificateId: string,
    params: KeylessCertificateGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<KeylessCertificateHostname> {
    const { zone_id } = params;
    return (
      this._client.get(
        `/zones/${zone_id}/keyless_certificates/${keylessCertificateId}`,
        options,
      ) as Core.APIPromise<{ result: KeylessCertificateHostname }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class KeylessCertificateHostnamesSinglePage extends SinglePage<KeylessCertificateHostname> {}

export interface KeylessCertificate {
  /**
   * Keyless certificate identifier tag.
   */
  id: string;

  /**
   * When the Keyless SSL was created.
   */
  created_on: string;

  /**
   * Whether or not the Keyless SSL is on or off.
   */
  enabled: boolean;

  /**
   * The keyless SSL name.
   */
  host: string;

  /**
   * When the Keyless SSL was last modified.
   */
  modified_on: string;

  /**
   * The keyless SSL name.
   */
  name: string;

  /**
   * Available permissions for the Keyless SSL for the current user requesting the
   * item.
   */
  permissions: Array<unknown>;

  /**
   * The keyless SSL port used to communicate between Cloudflare and the client's
   * Keyless SSL server.
   */
  port: number;

  /**
   * Status of the Keyless SSL.
   */
  status: 'active' | 'deleted';

  /**
   * Configuration for using Keyless SSL through a Cloudflare Tunnel
   */
  tunnel?: KeylessCertificate.Tunnel;
}

export namespace KeylessCertificate {
  /**
   * Configuration for using Keyless SSL through a Cloudflare Tunnel
   */
  export interface Tunnel {
    /**
     * Private IP of the Key Server Host
     */
    private_ip: string;

    /**
     * Cloudflare Tunnel Virtual Network ID
     */
    vnet_id: string;
  }
}

export interface KeylessCertificateHostname {
  /**
   * Keyless certificate identifier tag.
   */
  id: string;

  /**
   * When the Keyless SSL was created.
   */
  created_on: string;

  /**
   * Whether or not the Keyless SSL is on or off.
   */
  enabled: boolean;

  /**
   * The keyless SSL name.
   */
  host: string;

  /**
   * When the Keyless SSL was last modified.
   */
  modified_on: string;

  /**
   * The keyless SSL name.
   */
  name: string;

  /**
   * Available permissions for the Keyless SSL for the current user requesting the
   * item.
   */
  permissions: Array<unknown>;

  /**
   * The keyless SSL port used to communicate between Cloudflare and the client's
   * Keyless SSL server.
   */
  port: number;

  /**
   * Status of the Keyless SSL.
   */
  status: 'active' | 'deleted';

  /**
   * Configuration for using Keyless SSL through a Cloudflare Tunnel
   */
  tunnel?: KeylessCertificateHostname.Tunnel;
}

export namespace KeylessCertificateHostname {
  /**
   * Configuration for using Keyless SSL through a Cloudflare Tunnel
   */
  export interface Tunnel {
    /**
     * Private IP of the Key Server Host
     */
    private_ip: string;

    /**
     * Cloudflare Tunnel Virtual Network ID
     */
    vnet_id: string;
  }
}

export interface UnnamedSchemaRefA91f0bd72ee433f010eecfdc94ccf298 {
  /**
   * Keyless certificate identifier tag.
   */
  id: string;

  /**
   * When the Keyless SSL was created.
   */
  created_on: string;

  /**
   * Whether or not the Keyless SSL is on or off.
   */
  enabled: boolean;

  /**
   * The keyless SSL name.
   */
  host: string;

  /**
   * When the Keyless SSL was last modified.
   */
  modified_on: string;

  /**
   * The keyless SSL name.
   */
  name: string;

  /**
   * Available permissions for the Keyless SSL for the current user requesting the
   * item.
   */
  permissions: Array<unknown>;

  /**
   * The keyless SSL port used to communicate between Cloudflare and the client's
   * Keyless SSL server.
   */
  port: number;

  /**
   * Status of the Keyless SSL.
   */
  status: 'active' | 'deleted';

  /**
   * Configuration for using Keyless SSL through a Cloudflare Tunnel
   */
  tunnel?: UnnamedSchemaRefA91f0bd72ee433f010eecfdc94ccf298.Tunnel;
}

export namespace UnnamedSchemaRefA91f0bd72ee433f010eecfdc94ccf298 {
  /**
   * Configuration for using Keyless SSL through a Cloudflare Tunnel
   */
  export interface Tunnel {
    /**
     * Private IP of the Key Server Host
     */
    private_ip: string;

    /**
     * Cloudflare Tunnel Virtual Network ID
     */
    vnet_id: string;
  }
}

export interface KeylessCertificateCreateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: The zone's SSL certificate or SSL certificate and intermediate(s).
   */
  certificate: string;

  /**
   * Body param: The keyless SSL name.
   */
  host: string;

  /**
   * Body param: The keyless SSL port used to communicate between Cloudflare and the
   * client's Keyless SSL server.
   */
  port: number;

  /**
   * Body param: A ubiquitous bundle has the highest probability of being verified
   * everywhere, even by clients using outdated or unusual trust stores. An optimal
   * bundle uses the shortest chain and newest intermediates. And the force bundle
   * verifies the chain, but does not otherwise modify it.
   */
  bundle_method?: CustomHostnamesAPI.UnnamedSchemaRef16aca57bde2963201c7e6e895436c1c1;

  /**
   * Body param: The keyless SSL name.
   */
  name?: string;

  /**
   * Body param: Configuration for using Keyless SSL through a Cloudflare Tunnel
   */
  tunnel?: KeylessCertificateCreateParams.Tunnel;
}

export namespace KeylessCertificateCreateParams {
  /**
   * Configuration for using Keyless SSL through a Cloudflare Tunnel
   */
  export interface Tunnel {
    /**
     * Private IP of the Key Server Host
     */
    private_ip: string;

    /**
     * Cloudflare Tunnel Virtual Network ID
     */
    vnet_id: string;
  }
}

export interface KeylessCertificateListParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export interface KeylessCertificateDeleteParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface KeylessCertificateEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Whether or not the Keyless SSL is on or off.
   */
  enabled?: boolean;

  /**
   * Body param: The keyless SSL name.
   */
  host?: string;

  /**
   * Body param: The keyless SSL name.
   */
  name?: string;

  /**
   * Body param: The keyless SSL port used to communicate between Cloudflare and the
   * client's Keyless SSL server.
   */
  port?: number;

  /**
   * Body param: Configuration for using Keyless SSL through a Cloudflare Tunnel
   */
  tunnel?: KeylessCertificateEditParams.Tunnel;
}

export namespace KeylessCertificateEditParams {
  /**
   * Configuration for using Keyless SSL through a Cloudflare Tunnel
   */
  export interface Tunnel {
    /**
     * Private IP of the Key Server Host
     */
    private_ip: string;

    /**
     * Cloudflare Tunnel Virtual Network ID
     */
    vnet_id: string;
  }
}

export interface KeylessCertificateGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace KeylessCertificates {
  export import KeylessCertificate = KeylessCertificatesAPI.KeylessCertificate;
  export import KeylessCertificateHostname = KeylessCertificatesAPI.KeylessCertificateHostname;
  export import UnnamedSchemaRefA91f0bd72ee433f010eecfdc94ccf298 = KeylessCertificatesAPI.UnnamedSchemaRefA91f0bd72ee433f010eecfdc94ccf298;
  export import KeylessCertificateHostnamesSinglePage = KeylessCertificatesAPI.KeylessCertificateHostnamesSinglePage;
  export import KeylessCertificateCreateParams = KeylessCertificatesAPI.KeylessCertificateCreateParams;
  export import KeylessCertificateListParams = KeylessCertificatesAPI.KeylessCertificateListParams;
  export import KeylessCertificateDeleteParams = KeylessCertificatesAPI.KeylessCertificateDeleteParams;
  export import KeylessCertificateEditParams = KeylessCertificatesAPI.KeylessCertificateEditParams;
  export import KeylessCertificateGetParams = KeylessCertificatesAPI.KeylessCertificateGetParams;
}
