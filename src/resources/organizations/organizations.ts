// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OrganizationProfileAPI from './organization-profile';
import {
  OrganizationProfile,
  OrganizationProfileResource,
  OrganizationProfileUpdateParams,
} from './organization-profile';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Organizations extends APIResource {
  organizationProfile: OrganizationProfileAPI.OrganizationProfileResource =
    new OrganizationProfileAPI.OrganizationProfileResource(this._client);

  /**
   * Create a new organization for a user.
   */
  create(body: OrganizationCreateParams, options?: RequestOptions): APIPromise<Organization> {
    return (
      this._client.post('/organizations', { body, ...options }) as APIPromise<{ result: Organization }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Modify organization
   */
  update(
    organizationID: string,
    body: OrganizationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<Organization> {
    return (
      this._client.put(path`/organizations/${organizationID}`, { body, ...options }) as APIPromise<{
        result: Organization;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete an organization. The organization MUST be empty before deleting. It must
   * not contain any sub-organizations, accounts, members or users.
   */
  delete(organizationID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/organizations/${organizationID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve the details of a certain organization.
   */
  get(organizationID: string, options?: RequestOptions): APIPromise<Organization> {
    return (
      this._client.get(path`/organizations/${organizationID}`, options) as APIPromise<{
        result: Organization;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Represents an Organization in the Cloudflare data model
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
     * Organization flags for feature enablement
     */
    flags?: Meta.Flags;

    managed_by?: string;

    [k: string]: unknown;
  }

  export namespace Meta {
    /**
     * Organization flags for feature enablement
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

Organizations.OrganizationProfileResource = OrganizationProfileResource;

export declare namespace Organizations {
  export {
    type Organization as Organization,
    type OrganizationCreateParams as OrganizationCreateParams,
    type OrganizationUpdateParams as OrganizationUpdateParams,
  };

  export {
    OrganizationProfileResource as OrganizationProfileResource,
    type OrganizationProfile as OrganizationProfile,
    type OrganizationProfileUpdateParams as OrganizationProfileUpdateParams,
  };
}
