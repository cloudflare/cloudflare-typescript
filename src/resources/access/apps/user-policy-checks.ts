// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as UserPolicyChecksAPI from 'cloudflare/resources/access/apps/user-policy-checks';

export class UserPolicyChecks extends APIResource {
  /**
   * Tests if a specific user has permission to access an application.
   */
  accessApplicationsTestAccessPolicies(
    accountOrZone: string,
    accountOrZoneId: string,
    appId: string | string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserPolicyCheckAccessApplicationsTestAccessPoliciesResponse> {
    return (
      this._client.get(
        `/${accountOrZone}/${accountOrZoneId}/access/apps/${appId}/user_policy_checks`,
        options,
      ) as Core.APIPromise<{ result: UserPolicyCheckAccessApplicationsTestAccessPoliciesResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface UserPolicyCheckAccessApplicationsTestAccessPoliciesResponse {
  app_state?: UserPolicyCheckAccessApplicationsTestAccessPoliciesResponse.AppState;

  user_identity?: UserPolicyCheckAccessApplicationsTestAccessPoliciesResponse.UserIdentity;
}

export namespace UserPolicyCheckAccessApplicationsTestAccessPoliciesResponse {
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
  export import UserPolicyCheckAccessApplicationsTestAccessPoliciesResponse = UserPolicyChecksAPI.UserPolicyCheckAccessApplicationsTestAccessPoliciesResponse;
}
