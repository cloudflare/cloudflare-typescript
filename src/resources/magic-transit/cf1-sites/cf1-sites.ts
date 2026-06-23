// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as RampsAPI from './ramps';
import {
  Ramp,
  RampCreateParams,
  RampDeleteParams,
  RampGetParams,
  RampListParams,
  RampType,
  Ramps,
  RampsSinglePage,
} from './ramps';
import { SinglePage } from '../../../pagination';

export class Cf1Sites extends APIResource {
  ramps: RampsAPI.Ramps = new RampsAPI.Ramps(this._client);

  /**
   * Creates new CF1 Sites for an account. Each site must have a unique name within
   * the account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const cf1Site of client.magicTransit.cf1Sites.create(
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     body: [{ name: 'Pad 34' }],
   *   },
   * )) {
   *   // ...
   * }
   * ```
   */
  create(
    params: Cf1SiteCreateParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<Cf1SitesSinglePage, Cf1Site> {
    const { account_id, body } = params;
    return this._client.getAPIList(`/accounts/${account_id}/magic/cf1_sites`, Cf1SitesSinglePage, {
      body: body,
      method: 'post',
      ...options,
    });
  }

  /**
   * Partially updates a specific CF1 Site for an account. Only the fields included
   * in the request body are modified; omitted fields retain their existing values.
   *
   * @example
   * ```ts
   * const cf1Site = await client.magicTransit.cf1Sites.update(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  update(
    cf1SiteId: string,
    params: Cf1SiteUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Cf1Site> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/magic/cf1_sites/${cf1SiteId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: Cf1Site }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists CF1 Sites associated with an account. A CF1 Site represents a physical
   * customer network location with optional geographic coordinates.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const cf1Site of client.magicTransit.cf1Sites.list(
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: Cf1SiteListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<Cf1SitesSinglePage, Cf1Site> {
    const { account_id } = params;
    return this._client.getAPIList(`/accounts/${account_id}/magic/cf1_sites`, Cf1SitesSinglePage, options);
  }

  /**
   * Deletes a specific CF1 Site for an account.
   *
   * @example
   * ```ts
   * const cf1Site = await client.magicTransit.cf1Sites.delete(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  delete(
    cf1SiteId: string,
    params: Cf1SiteDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Cf1Site> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/magic/cf1_sites/${cf1SiteId}`,
        options,
      ) as Core.APIPromise<{ result: Cf1Site }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets a specific CF1 Site for an account.
   *
   * @example
   * ```ts
   * const cf1Site = await client.magicTransit.cf1Sites.get(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  get(cf1SiteId: string, params: Cf1SiteGetParams, options?: Core.RequestOptions): Core.APIPromise<Cf1Site> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/magic/cf1_sites/${cf1SiteId}`, options) as Core.APIPromise<{
        result: Cf1Site;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class Cf1SitesSinglePage extends SinglePage<Cf1Site> {}

export interface Cf1Site {
  /**
   * A human-provided name describing the CF1 Site that should be unique within the
   * account.
   */
  name: string;

  /**
   * Identifier
   */
  id?: string;

  created_on?: string;

  /**
   * A human-provided description of the CF1 Site.
   */
  description?: string;

  location?: Cf1SiteLocation;

  modified_on?: string;
}

export interface Cf1SiteParam {
  /**
   * A human-provided name describing the CF1 Site that should be unique within the
   * account.
   */
  name: string;

  /**
   * A human-provided description of the CF1 Site.
   */
  description?: string;

  location?: Cf1SiteLocationParam;
}

export interface Cf1SiteLocation {
  /**
   * Latitude of the CF1 Site.
   */
  lat?: number;

  /**
   * Longitude of the CF1 Site.
   */
  long?: number;

  /**
   * Name of nearest town, city, or village.
   */
  name?: string;
}

export interface Cf1SiteLocationParam {
  /**
   * Latitude of the CF1 Site.
   */
  lat?: number;

  /**
   * Longitude of the CF1 Site.
   */
  long?: number;

  /**
   * Name of nearest town, city, or village.
   */
  name?: string;
}

export interface Cf1SiteCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param
   */
  body: Array<Cf1SiteParam>;
}

export interface Cf1SiteUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: A human-provided description of the CF1 Site.
   */
  description?: string;

  /**
   * Body param
   */
  location?: Cf1SiteLocationParam;

  /**
   * Body param: A human-provided name describing the CF1 Site that should be unique
   * within the account.
   */
  name?: string;
}

export interface Cf1SiteListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface Cf1SiteDeleteParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface Cf1SiteGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

Cf1Sites.Cf1SitesSinglePage = Cf1SitesSinglePage;
Cf1Sites.Ramps = Ramps;
Cf1Sites.RampsSinglePage = RampsSinglePage;

export declare namespace Cf1Sites {
  export {
    type Cf1Site as Cf1Site,
    type Cf1SiteLocation as Cf1SiteLocation,
    Cf1SitesSinglePage as Cf1SitesSinglePage,
    type Cf1SiteCreateParams as Cf1SiteCreateParams,
    type Cf1SiteUpdateParams as Cf1SiteUpdateParams,
    type Cf1SiteListParams as Cf1SiteListParams,
    type Cf1SiteDeleteParams as Cf1SiteDeleteParams,
    type Cf1SiteGetParams as Cf1SiteGetParams,
  };

  export {
    Ramps as Ramps,
    type Ramp as Ramp,
    type RampType as RampType,
    RampsSinglePage as RampsSinglePage,
    type RampCreateParams as RampCreateParams,
    type RampListParams as RampListParams,
    type RampDeleteParams as RampDeleteParams,
    type RampGetParams as RampGetParams,
  };
}
