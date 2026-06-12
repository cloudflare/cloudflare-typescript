// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OrganizationsAPI from '../organizations/organizations';
import { OrganizationsSinglePage } from '../organizations/organizations';
import { PagePromise, SinglePage } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';

export class BaseTenants extends APIResource {
  static override readonly _key: readonly ['user', 'tenants'] = Object.freeze(['user', 'tenants'] as const);

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
  list(options?: RequestOptions): PagePromise<OrganizationsSinglePage, OrganizationsAPI.Organization> {
    return this._client.getAPIList('/user/tenants', SinglePage<OrganizationsAPI.Organization>, options);
  }
}
export class Tenants extends BaseTenants {}

export { type OrganizationsSinglePage };
