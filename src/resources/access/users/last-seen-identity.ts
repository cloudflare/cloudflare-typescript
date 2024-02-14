// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as LastSeenIdentityAPI from 'cloudflare/resources/access/users/last-seen-identity';

export class LastSeenIdentity extends APIResource {
  /**
   * Get last seen identity for a single user.
   */
  retrieve(
    identifier: string,
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LastSeenIdentityRetrieveResponse> {
    return (
      this._client.get(
        `/accounts/${identifier}/access/users/${id}/last_seen_identity`,
        options,
      ) as Core.APIPromise<{ result: LastSeenIdentityRetrieveResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface LastSeenIdentityRetrieveResponse {
  account_id?: string;

  auth_status?: string;

  common_name?: string;

  device_id?: string;

  device_sessions?: Record<string, LastSeenIdentityRetrieveResponse.DeviceSessions>;

  devicePosture?: Record<string, LastSeenIdentityRetrieveResponse.DevicePosture>;

  email?: string;

  geo?: LastSeenIdentityRetrieveResponse.Geo;

  iat?: number;

  idp?: LastSeenIdentityRetrieveResponse.Idp;

  ip?: string;

  is_gateway?: boolean;

  is_warp?: boolean;

  mtls_auth?: LastSeenIdentityRetrieveResponse.MtlsAuth;

  service_token_id?: string;

  service_token_status?: boolean;

  user_uuid?: string;

  version?: number;
}

export namespace LastSeenIdentityRetrieveResponse {
  export interface DeviceSessions {
    last_authenticated?: number;
  }

  export interface DevicePosture {
    id?: string;

    check?: DevicePosture.Check;

    data?: unknown;

    description?: string;

    error?: string;

    rule_name?: string;

    success?: boolean;

    timestamp?: string;

    type?: string;
  }

  export namespace DevicePosture {
    export interface Check {
      exists?: boolean;

      path?: string;
    }
  }

  export interface Geo {
    country?: string;
  }

  export interface Idp {
    id?: string;

    type?: string;
  }

  export interface MtlsAuth {
    auth_status?: string;

    cert_issuer_dn?: string;

    cert_issuer_ski?: string;

    cert_presented?: boolean;

    cert_serial?: string;
  }
}

export namespace LastSeenIdentity {
  export import LastSeenIdentityRetrieveResponse = LastSeenIdentityAPI.LastSeenIdentityRetrieveResponse;
}
