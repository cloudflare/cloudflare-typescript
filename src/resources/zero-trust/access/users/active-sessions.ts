// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ActiveSessionsAPI from 'cloudflare/resources/zero-trust/access/users/active-sessions';

export class ActiveSessions extends APIResource {
  /**
   * Get active sessions for a single user.
   */
  list(
    identifier: string,
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ActiveSessionListResponse | null> {
    return (
      this._client.get(
        `/accounts/${identifier}/access/users/${id}/active_sessions`,
        options,
      ) as Core.APIPromise<{ result: ActiveSessionListResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get an active session for a single user.
   */
  get(
    identifier: string,
    id: string,
    nonce: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ActiveSessionGetResponse> {
    return (
      this._client.get(
        `/accounts/${identifier}/access/users/${id}/active_sessions/${nonce}`,
        options,
      ) as Core.APIPromise<{ result: ActiveSessionGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type ActiveSessionListResponse = Array<ActiveSessionListResponse.ActiveSessionListResponseItem>;

export namespace ActiveSessionListResponse {
  export interface ActiveSessionListResponseItem {
    expiration?: number;

    metadata?: ActiveSessionListResponseItem.Metadata;

    name?: string;
  }

  export namespace ActiveSessionListResponseItem {
    export interface Metadata {
      apps?: Record<string, Metadata.Apps>;

      expires?: number;

      iat?: number;

      nonce?: string;

      ttl?: number;
    }

    export namespace Metadata {
      export interface Apps {
        hostname?: string;

        name?: string;

        type?: string;

        uid?: string;
      }
    }
  }
}

export interface ActiveSessionGetResponse {
  account_id?: string;

  auth_status?: string;

  common_name?: string;

  device_id?: string;

  device_sessions?: Record<string, ActiveSessionGetResponse.DeviceSessions>;

  devicePosture?: Record<string, ActiveSessionGetResponse.DevicePosture>;

  email?: string;

  geo?: ActiveSessionGetResponse.Geo;

  iat?: number;

  idp?: ActiveSessionGetResponse.IDP;

  ip?: string;

  is_gateway?: boolean;

  is_warp?: boolean;

  isActive?: boolean;

  mtls_auth?: ActiveSessionGetResponse.MTLSAuth;

  service_token_id?: string;

  service_token_status?: boolean;

  user_uuid?: string;

  version?: number;
}

export namespace ActiveSessionGetResponse {
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

export namespace ActiveSessions {
  export import ActiveSessionListResponse = ActiveSessionsAPI.ActiveSessionListResponse;
  export import ActiveSessionGetResponse = ActiveSessionsAPI.ActiveSessionGetResponse;
}
