// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as OrganizationsAPI from './organizations';
import * as Shared from '../shared';
import * as MembersAPI from '../accounts/members';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../pagination';

export class Organizations extends APIResource {
  /**
   * Lists organizations the user is associated with.
   */
  list(
    query?: OrganizationListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<OrganizationsV4PagePaginationArray, Organization>;
  list(options?: Core.RequestOptions): Core.PagePromise<OrganizationsV4PagePaginationArray, Organization>;
  list(
    query: OrganizationListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<OrganizationsV4PagePaginationArray, Organization> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/user/organizations', OrganizationsV4PagePaginationArray, {
      query,
      ...options,
    });
  }

  /**
   * Removes association to an organization.
   */
  delete(organizationId: string, options?: Core.RequestOptions): Core.APIPromise<OrganizationDeleteResponse> {
    return this._client.delete(`/user/organizations/${organizationId}`, options);
  }

  /**
   * Gets a specific organization the user is associated with.
   */
  get(organizationId: string, options?: Core.RequestOptions): Core.APIPromise<OrganizationGetResponse> {
    return (
      this._client.get(`/user/organizations/${organizationId}`, options) as Core.APIPromise<{
        result: OrganizationGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class OrganizationsV4PagePaginationArray extends V4PagePaginationArray<Organization> {}

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

export namespace Organizations {
  export import Organization = OrganizationsAPI.Organization;
  export import OrganizationDeleteResponse = OrganizationsAPI.OrganizationDeleteResponse;
  export import OrganizationGetResponse = OrganizationsAPI.OrganizationGetResponse;
  export import OrganizationsV4PagePaginationArray = OrganizationsAPI.OrganizationsV4PagePaginationArray;
  export import OrganizationListParams = OrganizationsAPI.OrganizationListParams;
}
