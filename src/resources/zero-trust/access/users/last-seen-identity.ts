// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as LastSeenIdentityAPI from 'cloudflare/resources/zero-trust/access/users/last-seen-identity';
import * as UserPolicyChecksAPI from 'cloudflare/resources/zero-trust/access/applications/user-policy-checks';

export class LastSeenIdentity extends APIResource {
  /**
   * Get last seen identity for a single user.
   */
  get(identifier: string, id: string, options?: Core.RequestOptions): Core.APIPromise<ZeroTrustIdentity> {
    return (
      this._client.get(
        `/accounts/${identifier}/access/users/${id}/last_seen_identity`,
        options,
      ) as Core.APIPromise<{ result: ZeroTrustIdentity }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ZeroTrustIdentity {
  account_id?: string;

  auth_status?: string;

  common_name?: string;

  device_id?: string;

  device_sessions?: Record<string, ZeroTrustIdentity.DeviceSessions>;

  devicePosture?: Record<string, ZeroTrustIdentity.DevicePosture>;

  email?: string;

  geo?: UserPolicyChecksAPI.UnnamedSchemaRef6a02fe18089d53b52b2cd3949b717919;

  iat?: number;

  idp?: ZeroTrustIdentity.IDP;

  ip?: string;

  is_gateway?: boolean;

  is_warp?: boolean;

  mtls_auth?: ZeroTrustIdentity.MTLSAuth;

  service_token_id?: string;

  service_token_status?: boolean;

  user_uuid?: string;

  version?: number;
}

export namespace ZeroTrustIdentity {
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

  export interface IDP {
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
  export import ZeroTrustIdentity = LastSeenIdentityAPI.ZeroTrustIdentity;
}
