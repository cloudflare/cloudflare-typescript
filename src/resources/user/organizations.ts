// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as OrganizationsAPI from 'cloudflare/resources/user/organizations';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from 'cloudflare/pagination';

export class Organizations extends APIResource {
  /**
   * Lists organizations the user is associated with.
   */
  list(
    query?: OrganizationListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<IamOrganizationsV4PagePaginationArray, IamOrganization>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<IamOrganizationsV4PagePaginationArray, IamOrganization>;
  list(
    query: OrganizationListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<IamOrganizationsV4PagePaginationArray, IamOrganization> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/user/organizations', IamOrganizationsV4PagePaginationArray, {
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

export class IamOrganizationsV4PagePaginationArray extends V4PagePaginationArray<IamOrganization> {}

export interface IamOrganization {
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
  permissions?: Array<string>;

  /**
   * List of roles that a user has within an organization.
   */
  roles?: Array<string>;

  /**
   * Whether the user is a member of the organization or has an inivitation pending.
   */
  status?: 'member' | 'invited';
}

export interface OrganizationDeleteResponse {
  /**
   * Identifier
   */
  id?: string;
}

export type OrganizationGetResponse = unknown | string | null;

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
  export import IamOrganization = OrganizationsAPI.IamOrganization;
  export import OrganizationDeleteResponse = OrganizationsAPI.OrganizationDeleteResponse;
  export import OrganizationGetResponse = OrganizationsAPI.OrganizationGetResponse;
  export import IamOrganizationsV4PagePaginationArray = OrganizationsAPI.IamOrganizationsV4PagePaginationArray;
  export import OrganizationListParams = OrganizationsAPI.OrganizationListParams;
}
