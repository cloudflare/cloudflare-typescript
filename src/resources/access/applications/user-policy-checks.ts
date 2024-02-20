// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as UserPolicyChecksAPI from 'cloudflare/resources/access/applications/user-policy-checks';

export class UserPolicyChecks extends APIResource {
  /**
   * Tests if a specific user has permission to access an application.
   */
  list(
    accountOrZone: string,
    accountOrZoneId: string,
    appId: string | string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserPolicyCheckListResponse> {
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

export namespace UserPolicyChecks {
  export import UserPolicyCheckListResponse = UserPolicyChecksAPI.UserPolicyCheckListResponse;
}
