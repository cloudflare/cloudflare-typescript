// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as UserPolicyChecksAPI from '../applications/user-policy-checks';
import { APIPromise } from '../../../../api-promise';
import { PagePromise, SinglePage } from '../../../../pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class ActiveSessions extends APIResource {
  /**
   * Get active sessions for a single user.
   */
  list(
    userID: string,
    params: ActiveSessionListParams,
    options?: RequestOptions,
  ): PagePromise<ActiveSessionListResponsesSinglePage, ActiveSessionListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/access/users/${userID}/active_sessions`,
      SinglePage<ActiveSessionListResponse>,
      options,
    );
  }

  /**
   * Get an active session for a single user.
   */
  get(
    nonce: string,
    params: ActiveSessionGetParams,
    options?: RequestOptions,
  ): APIPromise<ActiveSessionGetResponse> {
    const { account_id, user_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/access/users/${user_id}/active_sessions/${nonce}`,
        options,
      ) as APIPromise<{ result: ActiveSessionGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type ActiveSessionListResponsesSinglePage = SinglePage<ActiveSessionListResponse>;

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

  /**
   * UUID
   */
  user_id: string;
}

export declare namespace ActiveSessions {
  export {
    type ActiveSessionListResponse as ActiveSessionListResponse,
    type ActiveSessionGetResponse as ActiveSessionGetResponse,
    type ActiveSessionListResponsesSinglePage as ActiveSessionListResponsesSinglePage,
    type ActiveSessionListParams as ActiveSessionListParams,
    type ActiveSessionGetParams as ActiveSessionGetParams,
  };
}
