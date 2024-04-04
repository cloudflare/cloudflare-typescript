// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as OrganizationsAPI from 'cloudflare/resources/user/organizations';
import * as Shared from 'cloudflare/resources/shared';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from 'cloudflare/pagination';

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
  delete(
    organizationId: string,
    body: OrganizationDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OrganizationDeleteResponse> {
    return this._client.delete(`/user/organizations/${organizationId}`, { body, ...options });
  }

  /**
   * Gets a specific organization the user is associated with.
   */
  get(
    organizationId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a> {
    return (
      this._client.get(`/user/organizations/${organizationId}`, options) as Core.APIPromise<{
        result: Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a;
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

export type OrganizationDeleteParams = unknown;

export namespace Organizations {
  export import Organization = OrganizationsAPI.Organization;
  export import OrganizationDeleteResponse = OrganizationsAPI.OrganizationDeleteResponse;
  export import OrganizationsV4PagePaginationArray = OrganizationsAPI.OrganizationsV4PagePaginationArray;
  export import OrganizationListParams = OrganizationsAPI.OrganizationListParams;
  export import OrganizationDeleteParams = OrganizationsAPI.OrganizationDeleteParams;
}
