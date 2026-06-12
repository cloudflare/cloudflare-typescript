// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as OrganizationsAPI from '../organizations/organizations';
import { OrganizationsSinglePage } from '../organizations/organizations';

export class Tenants extends APIResource {
  /**
   * Retrieves list of tenants the authenticated user / method has access to.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const organization of client.user.tenants.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<OrganizationsSinglePage, OrganizationsAPI.Organization> {
    return this._client.getAPIList('/user/tenants', OrganizationsSinglePage, options);
  }
}

export { OrganizationsSinglePage };
