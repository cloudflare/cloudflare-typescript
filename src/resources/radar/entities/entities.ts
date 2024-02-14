// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as EntitiesAPI from 'cloudflare/resources/radar/entities/entities';
import * as AsnsAPI from 'cloudflare/resources/radar/entities/asns';

export class Entities extends APIResource {
  asns: AsnsAPI.Asns = new AsnsAPI.Asns(this._client);

  /**
   * Get IP address information.
   */
  ips(query: EntityIPsParams, options?: Core.RequestOptions): Core.APIPromise<EntityIPsResponse> {
    return (
      this._client.get('/radar/entities/ip', { query, ...options }) as Core.APIPromise<{
        result: EntityIPsResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface EntityIPsResponse {
  ip: EntityIPsResponse.IP;
}

export namespace EntityIPsResponse {
  export interface IP {
    asn: string;

    asnLocation: string;

    asnName: string;

    asnOrgName: string;

    ip: string;

    ipVersion: string;

    location: string;

    locationName: string;
  }
}

export interface EntityIPsParams {
  /**
   * IP address.
   */
  ip: string;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';
}

export namespace Entities {
  export import EntityIPsResponse = EntitiesAPI.EntityIPsResponse;
  export import EntityIPsParams = EntitiesAPI.EntityIPsParams;
  export import Asns = AsnsAPI.Asns;
  export import AsnRelResponse = AsnsAPI.AsnRelResponse;
  export import AsnRelParams = AsnsAPI.AsnRelParams;
}
