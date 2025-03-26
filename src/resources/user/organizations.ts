// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as MembersAPI from '../accounts/members';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Organizations extends APIResource {
  /**
   * Lists organizations the user is associated with.
   */
  list(
    query: OrganizationListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<OrganizationsV4PagePaginationArray, Organization> {
    return this._client.getAPIList('/user/organizations', V4PagePaginationArray<Organization>, {
      query,
      ...options,
    });
  }

  /**
   * Removes association to an organization.
   */
  delete(organizationID: string, options?: RequestOptions): APIPromise<OrganizationDeleteResponse> {
    return this._client.delete(path`/user/organizations/${organizationID}`, options);
  }

  /**
   * Gets a specific organization the user is associated with.
   */
  get(organizationID: string, options?: RequestOptions): APIPromise<OrganizationGetResponse> {
    return (
      this._client.get(path`/user/organizations/${organizationID}`, options) as APIPromise<{
        result: OrganizationGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type OrganizationsV4PagePaginationArray = V4PagePaginationArray<Organization>;

export interface Organization {
  /**
   * Identifier
   */
  id?: string;

  /**
   * Organization name.
   */
  name?: string;

  /**
   * Access permissions for this User.
   */
  permissions?: Array<Shared.Permission>;

  /**
   * List of roles that a user has within an organization.
   */
  roles?: Array<string>;

  /**
   * Whether the user is a member of the organization or has an invitation pending.
   */
  status?: MembersAPI.Status;
}

export interface OrganizationDeleteResponse {
  /**
   * Identifier
   */
  id?: string;
}

export type OrganizationGetResponse = unknown;

export interface OrganizationListParams extends V4PagePaginationArrayParams {
  /**
   * Direction to order organizations.
   */
  direction?: 'asc' | 'desc';

  /**
   * Whether to match all search requirements or at least one (any).
   */
  match?: 'any' | 'all';

  /**
   * Organization name.
   */
  name?: string;

  /**
   * Field to order organizations by.
   */
  order?: 'id' | 'name' | 'status';

  /**
   * Whether the user is a member of the organization or has an inivitation pending.
   */
  status?: 'member' | 'invited';
}

export declare namespace Organizations {
  export {
    type Organization as Organization,
    type OrganizationDeleteResponse as OrganizationDeleteResponse,
    type OrganizationGetResponse as OrganizationGetResponse,
    type OrganizationsV4PagePaginationArray as OrganizationsV4PagePaginationArray,
    type OrganizationListParams as OrganizationListParams,
  };
}
