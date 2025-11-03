// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../../../pagination';

export class Services extends APIResource {
  /**
   * Create connectivity service
   *
   * @example
   * ```ts
   * const service =
   *   await client.zeroTrust.connectivity.directory.services.create(
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       host: {
   *         hostname: 'api.example.com',
   *         resolver_network: {
   *           tunnel_id: '0191dce4-9ab4-7fce-b660-8e5dec5172da',
   *         },
   *       },
   *       name: 'web-server',
   *       type: 'http',
   *     },
   *   );
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
   * Update connectivity service
   *
   * @example
   * ```ts
   * const service =
   *   await client.zeroTrust.connectivity.directory.services.update(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       account_id: 'account_id',
   *       host: {
   *         ipv4: '10.0.0.1',
   *         network: {
   *           tunnel_id: '0191dce4-9ab4-7fce-b660-8e5dec5172da',
   *         },
   *       },
   *       name: 'web-app',
   *       type: 'http',
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
   * List connectivity services
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const serviceListResponse of client.zeroTrust.connectivity.directory.services.list(
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
   * Delete connectivity service
   *
   * @example
   * ```ts
   * await client.zeroTrust.connectivity.directory.services.delete(
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
   * Get connectivity service
   *
   * @example
   * ```ts
   * const service =
   *   await client.zeroTrust.connectivity.directory.services.get(
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

export interface ServiceCreateResponse {
  host:
    | ServiceCreateResponse.InfraIPv4Host
    | ServiceCreateResponse.InfraIPv6Host
    | ServiceCreateResponse.InfraDualStackHost
    | ServiceCreateResponse.InfraHostnameHost;

  name: string;

  type: 'http';

  created_at?: string;

  http_port?: number | null;

  https_port?: number | null;

  service_id?: string;

  updated_at?: string;
}

export namespace ServiceCreateResponse {
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
}

export interface ServiceUpdateResponse {
  host:
    | ServiceUpdateResponse.InfraIPv4Host
    | ServiceUpdateResponse.InfraIPv6Host
    | ServiceUpdateResponse.InfraDualStackHost
    | ServiceUpdateResponse.InfraHostnameHost;

  name: string;

  type: 'http';

  created_at?: string;

  http_port?: number | null;

  https_port?: number | null;

  service_id?: string;

  updated_at?: string;
}

export namespace ServiceUpdateResponse {
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
}

export interface ServiceListResponse {
  host:
    | ServiceListResponse.InfraIPv4Host
    | ServiceListResponse.InfraIPv6Host
    | ServiceListResponse.InfraDualStackHost
    | ServiceListResponse.InfraHostnameHost;

  name: string;

  type: 'http';

  created_at?: string;

  http_port?: number | null;

  https_port?: number | null;

  service_id?: string;

  updated_at?: string;
}

export namespace ServiceListResponse {
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
}

export interface ServiceGetResponse {
  host:
    | ServiceGetResponse.InfraIPv4Host
    | ServiceGetResponse.InfraIPv6Host
    | ServiceGetResponse.InfraDualStackHost
    | ServiceGetResponse.InfraHostnameHost;

  name: string;

  type: 'http';

  created_at?: string;

  http_port?: number | null;

  https_port?: number | null;

  service_id?: string;

  updated_at?: string;
}

export namespace ServiceGetResponse {
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
}

export interface ServiceCreateParams {
  /**
   * Path param: Account identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  host:
    | ServiceCreateParams.InfraIPv4Host
    | ServiceCreateParams.InfraIPv6Host
    | ServiceCreateParams.InfraDualStackHost
    | ServiceCreateParams.InfraHostnameHost;

  /**
   * Body param:
   */
  name: string;

  /**
   * Body param:
   */
  type: 'http';

  /**
   * Body param:
   */
  http_port?: number | null;

  /**
   * Body param:
   */
  https_port?: number | null;
}

export namespace ServiceCreateParams {
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
}

export interface ServiceUpdateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param:
   */
  host:
    | ServiceUpdateParams.InfraIPv4Host
    | ServiceUpdateParams.InfraIPv6Host
    | ServiceUpdateParams.InfraDualStackHost
    | ServiceUpdateParams.InfraHostnameHost;

  /**
   * Body param:
   */
  name: string;

  /**
   * Body param:
   */
  type: 'http';

  /**
   * Body param:
   */
  http_port?: number | null;

  /**
   * Body param:
   */
  https_port?: number | null;
}

export namespace ServiceUpdateParams {
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
}

export interface ServiceListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Account identifier
   */
  account_id: string;

  /**
   * Query param:
   */
  type?: 'http' | null;
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
