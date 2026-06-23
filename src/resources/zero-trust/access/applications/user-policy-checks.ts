// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ApplicationsAPI from './applications';
import { APIPromise } from '../../../../core/api-promise';
import { CloudflareError } from '../../../../core/error';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseUserPolicyChecks extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'access', 'applications', 'userPolicyChecks'] =
    Object.freeze(['zeroTrust', 'access', 'applications', 'userPolicyChecks'] as const);

  /**
   * Tests if a specific user has permission to access an application.
   *
   * @example
   * ```ts
   * const userPolicyChecks =
   *   await client.zeroTrust.access.applications.userPolicyChecks.list(
   *     '023e105f4ecef8ad9ca31a8372d0c353',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  list(
    appID: ApplicationsAPI.AppIDParam,
    params: UserPolicyCheckListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UserPolicyCheckListResponse> {
    const { account_id, zone_id } = params ?? {};
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
        path`/${accountOrZone}/${accountOrZoneId}/access/apps/${appID}/user_policy_checks`,
        options,
      ) as APIPromise<{ result: UserPolicyCheckListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class UserPolicyChecks extends BaseUserPolicyChecks {}

export interface UserPolicyCheckListResponse {
  app_state?: UserPolicyCheckListResponse.AppState;

  user_identity?: UserPolicyCheckListResponse.UserIdentity;
}

export namespace UserPolicyCheckListResponse {
  export interface AppState {
    /**
     * UUID.
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
     * UUID.
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

export declare namespace UserPolicyChecks {
  export {
    type UserPolicyCheckListResponse as UserPolicyCheckListResponse,
    type UserPolicyCheckListParams as UserPolicyCheckListParams,
  };
}
