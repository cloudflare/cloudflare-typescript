// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import { CloudflareError } from 'cloudflare/error';
import * as UserPolicyChecksAPI from 'cloudflare/resources/zero-trust/access/applications/user-policy-checks';

export class UserPolicyChecks extends APIResource {
  /**
   * Tests if a specific user has permission to access an application.
   */
  list(
    appId: string | string,
    params?: UserPolicyCheckListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserPolicyCheckListResponse>;
  list(appId: string | string, options?: Core.RequestOptions): Core.APIPromise<UserPolicyCheckListResponse>;
  list(
    appId: string | string,
    params: UserPolicyCheckListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserPolicyCheckListResponse> {
    if (isRequestOptions(params)) {
      return this.list(appId, {}, params);
    }
    const { account_id, zone_id } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return (
      this._client.get(
        `/${accountOrZone}/${accountOrZoneId}/access/apps/${appId}/user_policy_checks`,
        options,
      ) as Core.APIPromise<{ result: UserPolicyCheckListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface UserPolicyCheckListResponse {
  app_state?: UserPolicyCheckListResponse.AppState;

  user_identity?: UserPolicyCheckListResponse.UserIdentity;
}

export namespace UserPolicyCheckListResponse {
  export interface AppState {
    /**
     * UUID
     */
    app_uid?: string;

    aud?: string;

    hostname?: string;

    name?: string;

    policies?: Array<unknown>;

    status?: string;
  }

  export interface UserIdentity {
    id?: string;

    account_id?: string;

    device_sessions?: unknown;

    email?: string;

    geo?: UserIdentity.Geo;

    iat?: number;

    is_gateway?: boolean;

    is_warp?: boolean;

    name?: string;

    /**
     * UUID
     */
    user_uuid?: string;

    version?: number;
  }

  export namespace UserIdentity {
    export interface Geo {
      country?: string;
    }
  }
}

export interface UserPolicyCheckListParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

export namespace UserPolicyChecks {
  export import UserPolicyCheckListResponse = UserPolicyChecksAPI.UserPolicyCheckListResponse;
  export import UserPolicyCheckListParams = UserPolicyChecksAPI.UserPolicyCheckListParams;
}
