// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as OrganizationProfileAPI from './organization-profile';
import {
  OrganizationProfile,
  OrganizationProfileResource,
  OrganizationProfileUpdateParams,
} from './organization-profile';
import { SinglePage } from '../../pagination';

export class Organizations extends APIResource {
  organizationProfile: OrganizationProfileAPI.OrganizationProfileResource =
    new OrganizationProfileAPI.OrganizationProfileResource(this._client);

  /**
   * Create a new organization for a user.
   */
  create(body: OrganizationCreateParams, options?: Core.RequestOptions): Core.APIPromise<Organization> {
    return (
      this._client.post('/organizations', { body, ...options }) as Core.APIPromise<{ result: Organization }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Modify organization
   */
  update(
    organizationId: string,
    body: OrganizationUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Organization> {
    return (
      this._client.put(`/organizations/${organizationId}`, { body, ...options }) as Core.APIPromise<{
        result: Organization;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieve a list of organizations a particular user has access to.
   */
  list(
    query?: OrganizationListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<OrganizationsSinglePage, Organization>;
  list(options?: Core.RequestOptions): Core.PagePromise<OrganizationsSinglePage, Organization>;
  list(
    query: OrganizationListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<OrganizationsSinglePage, Organization> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/organizations', OrganizationsSinglePage, { query, ...options });
  }

  /**
   * Delete an organization. The organization MUST be empty before deleting. It must
   * not contain any sub-organizations, accounts, members or users.
   */
  delete(organizationId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/organizations/${organizationId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Retrieve the details of a certain organization.
   */
  get(organizationId: string, options?: Core.RequestOptions): Core.APIPromise<Organization> {
    return (
      this._client.get(`/organizations/${organizationId}`, options) as Core.APIPromise<{
        result: Organization;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class OrganizationsSinglePage extends SinglePage<Organization> {}

/**
 * References an Organization in the Cloudflare data model.
 */
export interface Organization {
  id: string;

  create_time: string;

  meta: Organization.Meta;

  name: string;

  parent?: Organization.Parent;

  profile?: Organization.Profile;
}

export namespace Organization {
  export interface Meta {
    /**
     * Enable features for Organizations.
     */
    flags?: Meta.Flags;

    managed_by?: string;

    [k: string]: unknown;
  }

  export namespace Meta {
    /**
     * Enable features for Organizations.
     */
    export interface Flags {
      account_creation: string;

      account_deletion: string;

      account_migration: string;

      account_mobility: string;

      sub_org_creation: string;
    }
  }

  export interface Parent {
    id: string;

    name: string;
  }

  export interface Profile {
    business_address: string;

    business_email: string;

    business_name: string;

    business_phone: string;

    external_metadata: string;
  }
}

export interface OrganizationCreateParams {
  name: string;

  parent?: OrganizationCreateParams.Parent;

  profile?: OrganizationCreateParams.Profile;
}

export namespace OrganizationCreateParams {
  export interface Parent {
    id: string;
  }

  export interface Profile {
    business_address: string;

    business_email: string;

    business_name: string;

    business_phone: string;

    external_metadata: string;
  }
}

export interface OrganizationUpdateParams {
  name: string;

  parent?: OrganizationUpdateParams.Parent;

  profile?: OrganizationUpdateParams.Profile;
}

export namespace OrganizationUpdateParams {
  export interface Parent {
    id: string;
  }

  export interface Profile {
    business_address: string;

    business_email: string;

    business_name: string;

    business_phone: string;

    external_metadata: string;
  }
}

export interface OrganizationListParams {
  /**
   * Only return organizations with the specified IDs (ex. id=foo&id=bar). Send
   * multiple elements by repeating the query value.
   */
  id?: Array<string>;

  containing?: OrganizationListParams.Containing;

  name?: OrganizationListParams.Name;

  /**
   * The amount of items to return. Defaults to 10.
   */
  page_size?: number;

  /**
   * An opaque token returned from the last list response that when provided will
   * retrieve the next page.
   *
   * Parameters used to filter the retrieved list must remain in subsequent requests
   * with a page token.
   */
  page_token?: string;

  parent?: OrganizationListParams.Parent;
}

export namespace OrganizationListParams {
  export interface Containing {
    /**
     * Filter the list of organizations to the ones that contain this particular
     * account.
     */
    account?: string;

    /**
     * Filter the list of organizations to the ones that contain this particular
     * organization.
     */
    organization?: string;

    /**
     * Filter the list of organizations to the ones that contain this particular user.
     *
     * IMPORTANT: Just because an organization "contains" a user is not a
     * representation of any authorization or privilege to manage any resources
     * therein. An organization "containing" a user simply means the user is managed by
     * that organization.
     */
    user?: string;
  }

  export interface Name {
    /**
     * (case-insensitive) Filter the list of organizations to where the name contains a
     * particular string.
     */
    contains?: string;

    /**
     * (case-insensitive) Filter the list of organizations to where the name ends with
     * a particular string.
     */
    endsWith?: string;

    /**
     * (case-insensitive) Filter the list of organizations to where the name starts
     * with a particular string.
     */
    startsWith?: string;
  }

  export interface Parent {
    /**
     * Filter the list of organizations to the ones that are a sub-organization of the
     * specified organization.
     *
     * "null" is a valid value to provide for this parameter. It means "where an
     * organization has no parent (i.e. it is a 'root' organization)."
     */
    id?: (string & {}) | 'null';
  }
}

Organizations.OrganizationsSinglePage = OrganizationsSinglePage;
Organizations.OrganizationProfileResource = OrganizationProfileResource;

export declare namespace Organizations {
  export {
    type Organization as Organization,
    OrganizationsSinglePage as OrganizationsSinglePage,
    type OrganizationCreateParams as OrganizationCreateParams,
    type OrganizationUpdateParams as OrganizationUpdateParams,
    type OrganizationListParams as OrganizationListParams,
  };

  export {
    OrganizationProfileResource as OrganizationProfileResource,
    type OrganizationProfile as OrganizationProfile,
    type OrganizationProfileUpdateParams as OrganizationProfileUpdateParams,
  };
}
