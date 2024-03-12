// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as LastSeenIdentityAPI from 'cloudflare/resources/zero-trust/access/users/last-seen-identity';

export class LastSeenIdentity extends APIResource {
  /**
   * Get last seen identity for a single user.
   */
  get(identifier: string, id: string, options?: Core.RequestOptions): Core.APIPromise<AccessIdentity> {
    return (
      this._client.get(
        `/accounts/${identifier}/access/users/${id}/last_seen_identity`,
        options,
      ) as Core.APIPromise<{ result: AccessIdentity }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface AccessIdentity {
  account_id?: string;

  auth_status?: string;

  common_name?: string;

  device_id?: string;

  device_sessions?: Record<string, AccessIdentity.DeviceSessions>;

  devicePosture?: Record<string, AccessIdentity.DevicePosture>;

  email?: string;

  geo?: AccessIdentity.Geo;

  iat?: number;

  idp?: AccessIdentity.Idp;

  ip?: string;

  is_gateway?: boolean;

  is_warp?: boolean;

  mtls_auth?: AccessIdentity.MTLSAuth;

  service_token_id?: string;

  service_token_status?: boolean;

  user_uuid?: string;

  version?: number;
}

export namespace AccessIdentity {
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

  export interface MTLSAuth {
    auth_status?: string;

    cert_issuer_dn?: string;

    cert_issuer_ski?: string;

    cert_presented?: boolean;

    cert_serial?: string;
  }
}

export namespace LastSeenIdentity {
  export import AccessIdentity = LastSeenIdentityAPI.AccessIdentity;
}
