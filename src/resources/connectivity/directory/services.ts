// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../../pagination';

export class Services extends APIResource {
  /**
   * Create Workers VPC connectivity service
   *
   * @example
   * ```ts
   * const service =
   *   await client.connectivity.directory.services.create({
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     host: {
   *       hostname: 'api.example.com',
   *       resolver_network: {
   *         tunnel_id: '0191dce4-9ab4-7fce-b660-8e5dec5172da',
   *       },
   *     },
   *     name: 'web-server',
   *     type: 'http',
   *   });
   * ```
   */
  create(params: ServiceCreateParams, options?: Core.RequestOptions): Core.APIPromise<ServiceCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/connectivity/directory/services`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ServiceCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update Workers VPC connectivity service
   *
   * @example
   * ```ts
   * const service =
   *   await client.connectivity.directory.services.update(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       account_id: 'account_id',
   *       host: {
   *         ipv4: '10.0.0.1',
   *         network: {
   *           tunnel_id: '0191dce4-9ab4-7fce-b660-8e5dec5172da',
   *         },
   *       },
   *       name: 'postgres-db',
   *       type: 'tcp',
   *     },
   *   );
   * ```
   */
  update(
    serviceId: string,
    params: ServiceUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ServiceUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/connectivity/directory/services/${serviceId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ServiceUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List Workers VPC connectivity services
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const serviceListResponse of client.connectivity.directory.services.list(
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: ServiceListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ServiceListResponsesV4PagePaginationArray, ServiceListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/connectivity/directory/services`,
      ServiceListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Delete Workers VPC connectivity service
   *
   * @example
   * ```ts
   * await client.connectivity.directory.services.delete(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { account_id: 'account_id' },
   * );
   * ```
   */
  delete(
    serviceId: string,
    params: ServiceDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    const { account_id } = params;
    return this._client.delete(`/accounts/${account_id}/connectivity/directory/services/${serviceId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Get Workers VPC connectivity service
   *
   * @example
   * ```ts
   * const service =
   *   await client.connectivity.directory.services.get(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  get(
    serviceId: string,
    params: ServiceGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ServiceGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/connectivity/directory/services/${serviceId}`,
        options,
      ) as Core.APIPromise<{ result: ServiceGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class ServiceListResponsesV4PagePaginationArray extends V4PagePaginationArray<ServiceListResponse> {}

export type ServiceCreateResponse =
  | ServiceCreateResponse.InfraHTTPServiceConfig
  | ServiceCreateResponse.InfraTCPServiceConfig;

export namespace ServiceCreateResponse {
  export interface InfraHTTPServiceConfig {
    host:
      | InfraHTTPServiceConfig.InfraIPv4Host
      | InfraHTTPServiceConfig.InfraIPv6Host
      | InfraHTTPServiceConfig.InfraDualStackHost
      | InfraHTTPServiceConfig.InfraHostnameHost;

    name: string;

    type: 'tcp' | 'http';

    created_at?: string;

    http_port?: number | null;

    https_port?: number | null;

    service_id?: string;

    /**
     * TLS settings for a connectivity service.
     *
     * If omitted, the default mode (`verify_full`) is used.
     */
    tls_settings?: InfraHTTPServiceConfig.TLSSettings | null;

    updated_at?: string;
  }

  export namespace InfraHTTPServiceConfig {
    export interface InfraIPv4Host {
      ipv4: string;

      network: InfraIPv4Host.Network;
    }

    export namespace InfraIPv4Host {
      export interface Network {
        tunnel_id: string;
      }
    }

    export interface InfraIPv6Host {
      ipv6: string;

      network: InfraIPv6Host.Network;
    }

    export namespace InfraIPv6Host {
      export interface Network {
        tunnel_id: string;
      }
    }

    export interface InfraDualStackHost {
      ipv4: string;

      ipv6: string;

      network: InfraDualStackHost.Network;
    }

    export namespace InfraDualStackHost {
      export interface Network {
        tunnel_id: string;
      }
    }

    export interface InfraHostnameHost {
      hostname: string;

      resolver_network: InfraHostnameHost.ResolverNetwork;
    }

    export namespace InfraHostnameHost {
      export interface ResolverNetwork {
        tunnel_id: string;

        resolver_ips?: Array<string> | null;
      }
    }

    /**
     * TLS settings for a connectivity service.
     *
     * If omitted, the default mode (`verify_full`) is used.
     */
    export interface TLSSettings {
      /**
       * TLS certificate verification mode for the connection to the origin.
       *
       * - `"verify_full"` — verify certificate chain and hostname (default)
       * - `"verify_ca"` — verify certificate chain only, skip hostname check
       * - `"disabled"` — do not verify the server certificate at all
       */
      cert_verification_mode: string;
    }
  }

  export interface InfraTCPServiceConfig {
    host:
      | InfraTCPServiceConfig.InfraIPv4Host
      | InfraTCPServiceConfig.InfraIPv6Host
      | InfraTCPServiceConfig.InfraDualStackHost
      | InfraTCPServiceConfig.InfraHostnameHost;

    name: string;

    type: 'tcp' | 'http';

    app_protocol?: 'postgresql' | 'mysql' | null;

    created_at?: string;

    service_id?: string;

    tcp_port?: number | null;

    /**
     * TLS settings for a connectivity service.
     *
     * If omitted, the default mode (`verify_full`) is used.
     */
    tls_settings?: InfraTCPServiceConfig.TLSSettings | null;

    updated_at?: string;
  }

  export namespace InfraTCPServiceConfig {
    export interface InfraIPv4Host {
      ipv4: string;

      network: InfraIPv4Host.Network;
    }

    export namespace InfraIPv4Host {
      export interface Network {
        tunnel_id: string;
      }
    }

    export interface InfraIPv6Host {
      ipv6: string;

      network: InfraIPv6Host.Network;
    }

    export namespace InfraIPv6Host {
      export interface Network {
        tunnel_id: string;
      }
    }

    export interface InfraDualStackHost {
      ipv4: string;

      ipv6: string;

      network: InfraDualStackHost.Network;
    }

    export namespace InfraDualStackHost {
      export interface Network {
        tunnel_id: string;
      }
    }

    export interface InfraHostnameHost {
      hostname: string;

      resolver_network: InfraHostnameHost.ResolverNetwork;
    }

    export namespace InfraHostnameHost {
      export interface ResolverNetwork {
        tunnel_id: string;

        resolver_ips?: Array<string> | null;
      }
    }

    /**
     * TLS settings for a connectivity service.
     *
     * If omitted, the default mode (`verify_full`) is used.
     */
    export interface TLSSettings {
      /**
       * TLS certificate verification mode for the connection to the origin.
       *
       * - `"verify_full"` — verify certificate chain and hostname (default)
       * - `"verify_ca"` — verify certificate chain only, skip hostname check
       * - `"disabled"` — do not verify the server certificate at all
       */
      cert_verification_mode: string;
    }
  }
}

export type ServiceUpdateResponse =
  | ServiceUpdateResponse.InfraHTTPServiceConfig
  | ServiceUpdateResponse.InfraTCPServiceConfig;

export namespace ServiceUpdateResponse {
  export interface InfraHTTPServiceConfig {
    host:
      | InfraHTTPServiceConfig.InfraIPv4Host
      | InfraHTTPServiceConfig.InfraIPv6Host
      | InfraHTTPServiceConfig.InfraDualStackHost
      | InfraHTTPServiceConfig.InfraHostnameHost;

    name: string;

    type: 'tcp' | 'http';

    created_at?: string;

    http_port?: number | null;

    https_port?: number | null;

    service_id?: string;

    /**
     * TLS settings for a connectivity service.
     *
     * If omitted, the default mode (`verify_full`) is used.
     */
    tls_settings?: InfraHTTPServiceConfig.TLSSettings | null;

    updated_at?: string;
  }

  export namespace InfraHTTPServiceConfig {
    export interface InfraIPv4Host {
      ipv4: string;

      network: InfraIPv4Host.Network;
    }

    export namespace InfraIPv4Host {
      export interface Network {
        tunnel_id: string;
      }
    }

    export interface InfraIPv6Host {
      ipv6: string;

      network: InfraIPv6Host.Network;
    }

    export namespace InfraIPv6Host {
      export interface Network {
        tunnel_id: string;
      }
    }

    export interface InfraDualStackHost {
      ipv4: string;

      ipv6: string;

      network: InfraDualStackHost.Network;
    }

    export namespace InfraDualStackHost {
      export interface Network {
        tunnel_id: string;
      }
    }

    export interface InfraHostnameHost {
      hostname: string;

      resolver_network: InfraHostnameHost.ResolverNetwork;
    }

    export namespace InfraHostnameHost {
      export interface ResolverNetwork {
        tunnel_id: string;

        resolver_ips?: Array<string> | null;
      }
    }

    /**
     * TLS settings for a connectivity service.
     *
     * If omitted, the default mode (`verify_full`) is used.
     */
    export interface TLSSettings {
      /**
       * TLS certificate verification mode for the connection to the origin.
       *
       * - `"verify_full"` — verify certificate chain and hostname (default)
       * - `"verify_ca"` — verify certificate chain only, skip hostname check
       * - `"disabled"` — do not verify the server certificate at all
       */
      cert_verification_mode: string;
    }
  }

  export interface InfraTCPServiceConfig {
    host:
      | InfraTCPServiceConfig.InfraIPv4Host
      | InfraTCPServiceConfig.InfraIPv6Host
      | InfraTCPServiceConfig.InfraDualStackHost
      | InfraTCPServiceConfig.InfraHostnameHost;

    name: string;

    type: 'tcp' | 'http';

    app_protocol?: 'postgresql' | 'mysql' | null;

    created_at?: string;

    service_id?: string;

    tcp_port?: number | null;

    /**
     * TLS settings for a connectivity service.
     *
     * If omitted, the default mode (`verify_full`) is used.
     */
    tls_settings?: InfraTCPServiceConfig.TLSSettings | null;

    updated_at?: string;
  }

  export namespace InfraTCPServiceConfig {
    export interface InfraIPv4Host {
      ipv4: string;

      network: InfraIPv4Host.Network;
    }

    export namespace InfraIPv4Host {
      export interface Network {
        tunnel_id: string;
      }
    }

    export interface InfraIPv6Host {
      ipv6: string;

      network: InfraIPv6Host.Network;
    }

    export namespace InfraIPv6Host {
      export interface Network {
        tunnel_id: string;
      }
    }

    export interface InfraDualStackHost {
      ipv4: string;

      ipv6: string;

      network: InfraDualStackHost.Network;
    }

    export namespace InfraDualStackHost {
      export interface Network {
        tunnel_id: string;
      }
    }

    export interface InfraHostnameHost {
      hostname: string;

      resolver_network: InfraHostnameHost.ResolverNetwork;
    }

    export namespace InfraHostnameHost {
      export interface ResolverNetwork {
        tunnel_id: string;

        resolver_ips?: Array<string> | null;
      }
    }

    /**
     * TLS settings for a connectivity service.
     *
     * If omitted, the default mode (`verify_full`) is used.
     */
    export interface TLSSettings {
      /**
       * TLS certificate verification mode for the connection to the origin.
       *
       * - `"verify_full"` — verify certificate chain and hostname (default)
       * - `"verify_ca"` — verify certificate chain only, skip hostname check
       * - `"disabled"` — do not verify the server certificate at all
       */
      cert_verification_mode: string;
    }
  }
}

export type ServiceListResponse =
  | ServiceListResponse.InfraHTTPServiceConfig
  | ServiceListResponse.InfraTCPServiceConfig;

export namespace ServiceListResponse {
  export interface InfraHTTPServiceConfig {
    host:
      | InfraHTTPServiceConfig.InfraIPv4Host
      | InfraHTTPServiceConfig.InfraIPv6Host
      | InfraHTTPServiceConfig.InfraDualStackHost
      | InfraHTTPServiceConfig.InfraHostnameHost;

    name: string;

    type: 'tcp' | 'http';

    created_at?: string;

    http_port?: number | null;

    https_port?: number | null;

    service_id?: string;

    /**
     * TLS settings for a connectivity service.
     *
     * If omitted, the default mode (`verify_full`) is used.
     */
    tls_settings?: InfraHTTPServiceConfig.TLSSettings | null;

    updated_at?: string;
  }

  export namespace InfraHTTPServiceConfig {
    export interface InfraIPv4Host {
      ipv4: string;

      network: InfraIPv4Host.Network;
    }

    export namespace InfraIPv4Host {
      export interface Network {
        tunnel_id: string;
      }
    }

    export interface InfraIPv6Host {
      ipv6: string;

      network: InfraIPv6Host.Network;
    }

    export namespace InfraIPv6Host {
      export interface Network {
        tunnel_id: string;
      }
    }

    export interface InfraDualStackHost {
      ipv4: string;

      ipv6: string;

      network: InfraDualStackHost.Network;
    }

    export namespace InfraDualStackHost {
      export interface Network {
        tunnel_id: string;
      }
    }

    export interface InfraHostnameHost {
      hostname: string;

      resolver_network: InfraHostnameHost.ResolverNetwork;
    }

    export namespace InfraHostnameHost {
      export interface ResolverNetwork {
        tunnel_id: string;

        resolver_ips?: Array<string> | null;
      }
    }

    /**
     * TLS settings for a connectivity service.
     *
     * If omitted, the default mode (`verify_full`) is used.
     */
    export interface TLSSettings {
      /**
       * TLS certificate verification mode for the connection to the origin.
       *
       * - `"verify_full"` — verify certificate chain and hostname (default)
       * - `"verify_ca"` — verify certificate chain only, skip hostname check
       * - `"disabled"` — do not verify the server certificate at all
       */
      cert_verification_mode: string;
    }
  }

  export interface InfraTCPServiceConfig {
    host:
      | InfraTCPServiceConfig.InfraIPv4Host
      | InfraTCPServiceConfig.InfraIPv6Host
      | InfraTCPServiceConfig.InfraDualStackHost
      | InfraTCPServiceConfig.InfraHostnameHost;

    name: string;

    type: 'tcp' | 'http';

    app_protocol?: 'postgresql' | 'mysql' | null;

    created_at?: string;

    service_id?: string;

    tcp_port?: number | null;

    /**
     * TLS settings for a connectivity service.
     *
     * If omitted, the default mode (`verify_full`) is used.
     */
    tls_settings?: InfraTCPServiceConfig.TLSSettings | null;

    updated_at?: string;
  }

  export namespace InfraTCPServiceConfig {
    export interface InfraIPv4Host {
      ipv4: string;

      network: InfraIPv4Host.Network;
    }

    export namespace InfraIPv4Host {
      export interface Network {
        tunnel_id: string;
      }
    }

    export interface InfraIPv6Host {
      ipv6: string;

      network: InfraIPv6Host.Network;
    }

    export namespace InfraIPv6Host {
      export interface Network {
        tunnel_id: string;
      }
    }

    export interface InfraDualStackHost {
      ipv4: string;

      ipv6: string;

      network: InfraDualStackHost.Network;
    }

    export namespace InfraDualStackHost {
      export interface Network {
        tunnel_id: string;
      }
    }

    export interface InfraHostnameHost {
      hostname: string;

      resolver_network: InfraHostnameHost.ResolverNetwork;
    }

    export namespace InfraHostnameHost {
      export interface ResolverNetwork {
        tunnel_id: string;

        resolver_ips?: Array<string> | null;
      }
    }

    /**
     * TLS settings for a connectivity service.
     *
     * If omitted, the default mode (`verify_full`) is used.
     */
    export interface TLSSettings {
      /**
       * TLS certificate verification mode for the connection to the origin.
       *
       * - `"verify_full"` — verify certificate chain and hostname (default)
       * - `"verify_ca"` — verify certificate chain only, skip hostname check
       * - `"disabled"` — do not verify the server certificate at all
       */
      cert_verification_mode: string;
    }
  }
}

export type ServiceGetResponse =
  | ServiceGetResponse.InfraHTTPServiceConfig
  | ServiceGetResponse.InfraTCPServiceConfig;

export namespace ServiceGetResponse {
  export interface InfraHTTPServiceConfig {
    host:
      | InfraHTTPServiceConfig.InfraIPv4Host
      | InfraHTTPServiceConfig.InfraIPv6Host
      | InfraHTTPServiceConfig.InfraDualStackHost
      | InfraHTTPServiceConfig.InfraHostnameHost;

    name: string;

    type: 'tcp' | 'http';

    created_at?: string;

    http_port?: number | null;

    https_port?: number | null;

    service_id?: string;

    /**
     * TLS settings for a connectivity service.
     *
     * If omitted, the default mode (`verify_full`) is used.
     */
    tls_settings?: InfraHTTPServiceConfig.TLSSettings | null;

    updated_at?: string;
  }

  export namespace InfraHTTPServiceConfig {
    export interface InfraIPv4Host {
      ipv4: string;

      network: InfraIPv4Host.Network;
    }

    export namespace InfraIPv4Host {
      export interface Network {
        tunnel_id: string;
      }
    }

    export interface InfraIPv6Host {
      ipv6: string;

      network: InfraIPv6Host.Network;
    }

    export namespace InfraIPv6Host {
      export interface Network {
        tunnel_id: string;
      }
    }

    export interface InfraDualStackHost {
      ipv4: string;

      ipv6: string;

      network: InfraDualStackHost.Network;
    }

    export namespace InfraDualStackHost {
      export interface Network {
        tunnel_id: string;
      }
    }

    export interface InfraHostnameHost {
      hostname: string;

      resolver_network: InfraHostnameHost.ResolverNetwork;
    }

    export namespace InfraHostnameHost {
      export interface ResolverNetwork {
        tunnel_id: string;

        resolver_ips?: Array<string> | null;
      }
    }

    /**
     * TLS settings for a connectivity service.
     *
     * If omitted, the default mode (`verify_full`) is used.
     */
    export interface TLSSettings {
      /**
       * TLS certificate verification mode for the connection to the origin.
       *
       * - `"verify_full"` — verify certificate chain and hostname (default)
       * - `"verify_ca"` — verify certificate chain only, skip hostname check
       * - `"disabled"` — do not verify the server certificate at all
       */
      cert_verification_mode: string;
    }
  }

  export interface InfraTCPServiceConfig {
    host:
      | InfraTCPServiceConfig.InfraIPv4Host
      | InfraTCPServiceConfig.InfraIPv6Host
      | InfraTCPServiceConfig.InfraDualStackHost
      | InfraTCPServiceConfig.InfraHostnameHost;

    name: string;

    type: 'tcp' | 'http';

    app_protocol?: 'postgresql' | 'mysql' | null;

    created_at?: string;

    service_id?: string;

    tcp_port?: number | null;

    /**
     * TLS settings for a connectivity service.
     *
     * If omitted, the default mode (`verify_full`) is used.
     */
    tls_settings?: InfraTCPServiceConfig.TLSSettings | null;

    updated_at?: string;
  }

  export namespace InfraTCPServiceConfig {
    export interface InfraIPv4Host {
      ipv4: string;

      network: InfraIPv4Host.Network;
    }

    export namespace InfraIPv4Host {
      export interface Network {
        tunnel_id: string;
      }
    }

    export interface InfraIPv6Host {
      ipv6: string;

      network: InfraIPv6Host.Network;
    }

    export namespace InfraIPv6Host {
      export interface Network {
        tunnel_id: string;
      }
    }

    export interface InfraDualStackHost {
      ipv4: string;

      ipv6: string;

      network: InfraDualStackHost.Network;
    }

    export namespace InfraDualStackHost {
      export interface Network {
        tunnel_id: string;
      }
    }

    export interface InfraHostnameHost {
      hostname: string;

      resolver_network: InfraHostnameHost.ResolverNetwork;
    }

    export namespace InfraHostnameHost {
      export interface ResolverNetwork {
        tunnel_id: string;

        resolver_ips?: Array<string> | null;
      }
    }

    /**
     * TLS settings for a connectivity service.
     *
     * If omitted, the default mode (`verify_full`) is used.
     */
    export interface TLSSettings {
      /**
       * TLS certificate verification mode for the connection to the origin.
       *
       * - `"verify_full"` — verify certificate chain and hostname (default)
       * - `"verify_ca"` — verify certificate chain only, skip hostname check
       * - `"disabled"` — do not verify the server certificate at all
       */
      cert_verification_mode: string;
    }
  }
}

export type ServiceCreateParams =
  | ServiceCreateParams.InfraHTTPServiceConfig
  | ServiceCreateParams.InfraTCPServiceConfig;

export declare namespace ServiceCreateParams {
  export interface InfraHTTPServiceConfig {
    /**
     * Path param: Account identifier
     */
    account_id: string;

    /**
     * Body param
     */
    host:
      | InfraHTTPServiceConfig.InfraIPv4Host
      | InfraHTTPServiceConfig.InfraIPv6Host
      | InfraHTTPServiceConfig.InfraDualStackHost
      | InfraHTTPServiceConfig.InfraHostnameHost;

    /**
     * Body param
     */
    name: string;

    /**
     * Body param
     */
    type: 'tcp' | 'http';

    /**
     * Body param
     */
    http_port?: number | null;

    /**
     * Body param
     */
    https_port?: number | null;

    /**
     * Body param: TLS settings for a connectivity service.
     *
     * If omitted, the default mode (`verify_full`) is used.
     */
    tls_settings?: InfraHTTPServiceConfig.TLSSettings | null;
  }

  export namespace InfraHTTPServiceConfig {
    export interface InfraIPv4Host {
      ipv4: string;

      network: InfraIPv4Host.Network;
    }

    export namespace InfraIPv4Host {
      export interface Network {
        tunnel_id: string;
      }
    }

    export interface InfraIPv6Host {
      ipv6: string;

      network: InfraIPv6Host.Network;
    }

    export namespace InfraIPv6Host {
      export interface Network {
        tunnel_id: string;
      }
    }

    export interface InfraDualStackHost {
      ipv4: string;

      ipv6: string;

      network: InfraDualStackHost.Network;
    }

    export namespace InfraDualStackHost {
      export interface Network {
        tunnel_id: string;
      }
    }

    export interface InfraHostnameHost {
      hostname: string;

      resolver_network: InfraHostnameHost.ResolverNetwork;
    }

    export namespace InfraHostnameHost {
      export interface ResolverNetwork {
        tunnel_id: string;

        resolver_ips?: Array<string> | null;
      }
    }

    /**
     * TLS settings for a connectivity service.
     *
     * If omitted, the default mode (`verify_full`) is used.
     */
    export interface TLSSettings {
      /**
       * TLS certificate verification mode for the connection to the origin.
       *
       * - `"verify_full"` — verify certificate chain and hostname (default)
       * - `"verify_ca"` — verify certificate chain only, skip hostname check
       * - `"disabled"` — do not verify the server certificate at all
       */
      cert_verification_mode: string;
    }
  }

  export interface InfraTCPServiceConfig {
    /**
     * Path param: Account identifier
     */
    account_id: string;

    /**
     * Body param
     */
    host:
      | InfraTCPServiceConfig.InfraIPv4Host
      | InfraTCPServiceConfig.InfraIPv6Host
      | InfraTCPServiceConfig.InfraDualStackHost
      | InfraTCPServiceConfig.InfraHostnameHost;

    /**
     * Body param
     */
    name: string;

    /**
     * Body param
     */
    type: 'tcp' | 'http';

    /**
     * Body param
     */
    app_protocol?: 'postgresql' | 'mysql' | null;

    /**
     * Body param
     */
    tcp_port?: number | null;

    /**
     * Body param: TLS settings for a connectivity service.
     *
     * If omitted, the default mode (`verify_full`) is used.
     */
    tls_settings?: InfraTCPServiceConfig.TLSSettings | null;
  }

  export namespace InfraTCPServiceConfig {
    export interface InfraIPv4Host {
      ipv4: string;

      network: InfraIPv4Host.Network;
    }

    export namespace InfraIPv4Host {
      export interface Network {
        tunnel_id: string;
      }
    }

    export interface InfraIPv6Host {
      ipv6: string;

      network: InfraIPv6Host.Network;
    }

    export namespace InfraIPv6Host {
      export interface Network {
        tunnel_id: string;
      }
    }

    export interface InfraDualStackHost {
      ipv4: string;

      ipv6: string;

      network: InfraDualStackHost.Network;
    }

    export namespace InfraDualStackHost {
      export interface Network {
        tunnel_id: string;
      }
    }

    export interface InfraHostnameHost {
      hostname: string;

      resolver_network: InfraHostnameHost.ResolverNetwork;
    }

    export namespace InfraHostnameHost {
      export interface ResolverNetwork {
        tunnel_id: string;

        resolver_ips?: Array<string> | null;
      }
    }

    /**
     * TLS settings for a connectivity service.
     *
     * If omitted, the default mode (`verify_full`) is used.
     */
    export interface TLSSettings {
      /**
       * TLS certificate verification mode for the connection to the origin.
       *
       * - `"verify_full"` — verify certificate chain and hostname (default)
       * - `"verify_ca"` — verify certificate chain only, skip hostname check
       * - `"disabled"` — do not verify the server certificate at all
       */
      cert_verification_mode: string;
    }
  }
}

export type ServiceUpdateParams =
  | ServiceUpdateParams.InfraHTTPServiceConfig
  | ServiceUpdateParams.InfraTCPServiceConfig;

export declare namespace ServiceUpdateParams {
  export interface InfraHTTPServiceConfig {
    /**
     * Path param
     */
    account_id: string;

    /**
     * Body param
     */
    host:
      | InfraHTTPServiceConfig.InfraIPv4Host
      | InfraHTTPServiceConfig.InfraIPv6Host
      | InfraHTTPServiceConfig.InfraDualStackHost
      | InfraHTTPServiceConfig.InfraHostnameHost;

    /**
     * Body param
     */
    name: string;

    /**
     * Body param
     */
    type: 'tcp' | 'http';

    /**
     * Body param
     */
    http_port?: number | null;

    /**
     * Body param
     */
    https_port?: number | null;

    /**
     * Body param: TLS settings for a connectivity service.
     *
     * If omitted, the default mode (`verify_full`) is used.
     */
    tls_settings?: InfraHTTPServiceConfig.TLSSettings | null;
  }

  export namespace InfraHTTPServiceConfig {
    export interface InfraIPv4Host {
      ipv4: string;

      network: InfraIPv4Host.Network;
    }

    export namespace InfraIPv4Host {
      export interface Network {
        tunnel_id: string;
      }
    }

    export interface InfraIPv6Host {
      ipv6: string;

      network: InfraIPv6Host.Network;
    }

    export namespace InfraIPv6Host {
      export interface Network {
        tunnel_id: string;
      }
    }

    export interface InfraDualStackHost {
      ipv4: string;

      ipv6: string;

      network: InfraDualStackHost.Network;
    }

    export namespace InfraDualStackHost {
      export interface Network {
        tunnel_id: string;
      }
    }

    export interface InfraHostnameHost {
      hostname: string;

      resolver_network: InfraHostnameHost.ResolverNetwork;
    }

    export namespace InfraHostnameHost {
      export interface ResolverNetwork {
        tunnel_id: string;

        resolver_ips?: Array<string> | null;
      }
    }

    /**
     * TLS settings for a connectivity service.
     *
     * If omitted, the default mode (`verify_full`) is used.
     */
    export interface TLSSettings {
      /**
       * TLS certificate verification mode for the connection to the origin.
       *
       * - `"verify_full"` — verify certificate chain and hostname (default)
       * - `"verify_ca"` — verify certificate chain only, skip hostname check
       * - `"disabled"` — do not verify the server certificate at all
       */
      cert_verification_mode: string;
    }
  }

  export interface InfraTCPServiceConfig {
    /**
     * Path param
     */
    account_id: string;

    /**
     * Body param
     */
    host:
      | InfraTCPServiceConfig.InfraIPv4Host
      | InfraTCPServiceConfig.InfraIPv6Host
      | InfraTCPServiceConfig.InfraDualStackHost
      | InfraTCPServiceConfig.InfraHostnameHost;

    /**
     * Body param
     */
    name: string;

    /**
     * Body param
     */
    type: 'tcp' | 'http';

    /**
     * Body param
     */
    app_protocol?: 'postgresql' | 'mysql' | null;

    /**
     * Body param
     */
    tcp_port?: number | null;

    /**
     * Body param: TLS settings for a connectivity service.
     *
     * If omitted, the default mode (`verify_full`) is used.
     */
    tls_settings?: InfraTCPServiceConfig.TLSSettings | null;
  }

  export namespace InfraTCPServiceConfig {
    export interface InfraIPv4Host {
      ipv4: string;

      network: InfraIPv4Host.Network;
    }

    export namespace InfraIPv4Host {
      export interface Network {
        tunnel_id: string;
      }
    }

    export interface InfraIPv6Host {
      ipv6: string;

      network: InfraIPv6Host.Network;
    }

    export namespace InfraIPv6Host {
      export interface Network {
        tunnel_id: string;
      }
    }

    export interface InfraDualStackHost {
      ipv4: string;

      ipv6: string;

      network: InfraDualStackHost.Network;
    }

    export namespace InfraDualStackHost {
      export interface Network {
        tunnel_id: string;
      }
    }

    export interface InfraHostnameHost {
      hostname: string;

      resolver_network: InfraHostnameHost.ResolverNetwork;
    }

    export namespace InfraHostnameHost {
      export interface ResolverNetwork {
        tunnel_id: string;

        resolver_ips?: Array<string> | null;
      }
    }

    /**
     * TLS settings for a connectivity service.
     *
     * If omitted, the default mode (`verify_full`) is used.
     */
    export interface TLSSettings {
      /**
       * TLS certificate verification mode for the connection to the origin.
       *
       * - `"verify_full"` — verify certificate chain and hostname (default)
       * - `"verify_ca"` — verify certificate chain only, skip hostname check
       * - `"disabled"` — do not verify the server certificate at all
       */
      cert_verification_mode: string;
    }
  }
}

export interface ServiceListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Account identifier
   */
  account_id: string;

  /**
   * Query param
   */
  type?: 'tcp' | 'http' | null;
}

export interface ServiceDeleteParams {
  account_id: string;
}

export interface ServiceGetParams {
  account_id: string;
}

Services.ServiceListResponsesV4PagePaginationArray = ServiceListResponsesV4PagePaginationArray;

export declare namespace Services {
  export {
    type ServiceCreateResponse as ServiceCreateResponse,
    type ServiceUpdateResponse as ServiceUpdateResponse,
    type ServiceListResponse as ServiceListResponse,
    type ServiceGetResponse as ServiceGetResponse,
    ServiceListResponsesV4PagePaginationArray as ServiceListResponsesV4PagePaginationArray,
    type ServiceCreateParams as ServiceCreateParams,
    type ServiceUpdateParams as ServiceUpdateParams,
    type ServiceListParams as ServiceListParams,
    type ServiceDeleteParams as ServiceDeleteParams,
    type ServiceGetParams as ServiceGetParams,
  };
}
