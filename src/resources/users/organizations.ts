// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as OrganizationsAPI from 'cloudflare/resources/users/organizations';

export class Organizations extends APIResource {
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

  /**
   * Lists organizations the user is associated with.
   */
  userSOrganizationsListOrganizations(
    query?: OrganizationUserSOrganizationsListOrganizationsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OrganizationUserSOrganizationsListOrganizationsResponse | null>;
  userSOrganizationsListOrganizations(
    options?: Core.RequestOptions,
  ): Core.APIPromise<OrganizationUserSOrganizationsListOrganizationsResponse | null>;
  userSOrganizationsListOrganizations(
    query: OrganizationUserSOrganizationsListOrganizationsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<OrganizationUserSOrganizationsListOrganizationsResponse | null> {
    if (isRequestOptions(query)) {
      return this.userSOrganizationsListOrganizations({}, query);
    }
    return (
      this._client.get('/user/organizations', { query, ...options }) as Core.APIPromise<{
        result: OrganizationUserSOrganizationsListOrganizationsResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface OrganizationDeleteResponse {
  /**
   * Identifier
   */
  id?: string;
}

export type OrganizationGetResponse = unknown | string | null;

export type OrganizationUserSOrganizationsListOrganizationsResponse =
  Array<OrganizationUserSOrganizationsListOrganizationsResponse.OrganizationUserSOrganizationsListOrganizationsResponseItem>;

export namespace OrganizationUserSOrganizationsListOrganizationsResponse {
  export interface OrganizationUserSOrganizationsListOrganizationsResponseItem {
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
}

export interface OrganizationUserSOrganizationsListOrganizationsParams {
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
   * Page number of paginated results.
   */
  page?: number;

  /**
   * Number of organizations per page.
   */
  per_page?: number;

  /**
   * Whether the user is a member of the organization or has an inivitation pending.
   */
  status?: 'member' | 'invited';
}

export namespace Organizations {
  export import OrganizationDeleteResponse = OrganizationsAPI.OrganizationDeleteResponse;
  export import OrganizationGetResponse = OrganizationsAPI.OrganizationGetResponse;
  export import OrganizationUserSOrganizationsListOrganizationsResponse = OrganizationsAPI.OrganizationUserSOrganizationsListOrganizationsResponse;
  export import OrganizationUserSOrganizationsListOrganizationsParams = OrganizationsAPI.OrganizationUserSOrganizationsListOrganizationsParams;
}
