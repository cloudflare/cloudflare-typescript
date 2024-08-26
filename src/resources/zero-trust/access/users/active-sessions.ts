// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import { APIPromise } from '../../../../core';
import * as Core from '../../../../core';
import * as ActiveSessionsAPI from './active-sessions';
import * as UserPolicyChecksAPI from '../applications/user-policy-checks';
import { SinglePage } from '../../../../pagination';

export class ActiveSessions extends APIResource {
  /**
   * Get active sessions for a single user.
   */
  list(userId: string, params: ActiveSessionListParams, options?: Core.RequestOptions): Core.PagePromise<ActiveSessionListResponsesSinglePage, ActiveSessionListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(`/accounts/${account_id}/access/users/${userId}/active_sessions`, ActiveSessionListResponsesSinglePage, options);
  }

  /**
   * Get an active session for a single user.
   */
  get(userId: string, nonce: string, params: ActiveSessionGetParams, options?: Core.RequestOptions): Core.APIPromise<ActiveSessionGetResponse> {
    const { account_id } = params;
    return (this._client.get(`/accounts/${account_id}/access/users/${userId}/active_sessions/${nonce}`, options) as Core.APIPromise<{ result: ActiveSessionGetResponse }>)._thenUnwrap((obj) => obj.result);
  }
}

export class ActiveSessionListResponsesSinglePage extends SinglePage<ActiveSessionListResponse> {
}

export interface ActiveSessionListResponse {
  expiration?: number;

  metadata?: ActiveSessionListResponse.Metadata;

  name?: string;
}

export namespace ActiveSessionListResponse {
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

export interface ActiveSessionGetResponse {
  account_id?: string;

  auth_status?: string;

  common_name?: string;

  device_id?: string;

  device_sessions?: Record<string, ActiveSessionGetResponse.DeviceSessions>;

  devicePosture?: Record<string, ActiveSessionGetResponse.DevicePosture>;

  email?: string;

  geo?: UserPolicyChecksAPI.UserPolicyCheckGeo;

  iat?: number;

  idp?: ActiveSessionGetResponse.IdP;

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

  export interface IdP {
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

export interface ActiveSessionListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface ActiveSessionGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace ActiveSessions {
  export import ActiveSessionListResponse = ActiveSessionsAPI.ActiveSessionListResponse;
  export import ActiveSessionGetResponse = ActiveSessionsAPI.ActiveSessionGetResponse;
  export import ActiveSessionListResponsesSinglePage = ActiveSessionsAPI.ActiveSessionListResponsesSinglePage;
  export import ActiveSessionListParams = ActiveSessionsAPI.ActiveSessionListParams;
  export import ActiveSessionGetParams = ActiveSessionsAPI.ActiveSessionGetParams;
}
