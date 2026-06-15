// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as RampsAPI from './ramps';
import { SinglePage } from '../../../pagination';

export class Ramps extends APIResource {
  /**
   * Creates ramps (network connections) for a CF1 Site.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const ramp of client.magicTransit.cf1Sites.ramps.create(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     body: [
   *       {
   *         source_ramp_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *         type: 'gre',
   *       },
   *     ],
   *   },
   * )) {
   *   // ...
   * }
   * ```
   */
  create(
    cf1SiteId: string,
    params: RampCreateParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<RampsSinglePage, Ramp> {
    const { account_id, body } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/magic/cf1_sites/${cf1SiteId}/ramps`,
      RampsSinglePage,
      { body: body, method: 'post', ...options },
    );
  }

  /**
   * Lists ramps (network connections) associated with a CF1 Site. Ramps represent
   * GRE tunnels, IPsec tunnels, interconnects, or MCONN links.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const ramp of client.magicTransit.cf1Sites.ramps.list(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    cf1SiteId: string,
    params: RampListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<RampsSinglePage, Ramp> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/magic/cf1_sites/${cf1SiteId}/ramps`,
      RampsSinglePage,
      options,
    );
  }

  /**
   * Deletes a specific ramp from a CF1 Site.
   *
   * @example
   * ```ts
   * const ramp =
   *   await client.magicTransit.cf1Sites.ramps.delete(
   *     '023e105f4ecef8ad9ca31a8372d0c353',
   *     '023e105f4ecef8ad9ca31a8372d0c353',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  delete(
    cf1SiteId: string,
    rampId: string,
    params: RampDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Ramp> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/magic/cf1_sites/${cf1SiteId}/ramps/${rampId}`,
        options,
      ) as Core.APIPromise<{ result: Ramp }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets a specific ramp for a CF1 Site.
   *
   * @example
   * ```ts
   * const ramp = await client.magicTransit.cf1Sites.ramps.get(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  get(
    cf1SiteId: string,
    rampId: string,
    params: RampGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Ramp> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/magic/cf1_sites/${cf1SiteId}/ramps/${rampId}`,
        options,
      ) as Core.APIPromise<{ result: Ramp }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class RampsSinglePage extends SinglePage<Ramp> {}

export interface Ramp {
  /**
   * Identifier
   */
  id: string;

  created_on: string;

  modified_on: string;

  /**
   * A human-provided name describing the ramp that should be unique within the CF1
   * Site.
   */
  name: string;

  /**
   * The type of network connection (ramp) linking a CF1 Site to Cloudflare's
   * network.
   */
  type: RampType;

  /**
   * A human-provided description of the ramp.
   */
  description?: string;

  gre?: Ramp.GRE;

  gre_interconnect?: Ramp.GREInterconnect;

  ipsec?: Ramp.IPSEC;

  mconn?: Ramp.Mconn;

  mpls_interconnect?: Ramp.MplsInterconnect;
}

export namespace Ramp {
  export interface GRE {
    /**
     * URL reference to the source network resource that this ramp is managed by.
     */
    managed_by?: string;
  }

  export interface GREInterconnect {
    /**
     * URL reference to the source network resource that this ramp is managed by.
     */
    managed_by?: string;
  }

  export interface IPSEC {
    /**
     * URL reference to the source network resource that this ramp is managed by.
     */
    managed_by?: string;
  }

  export interface Mconn {
    /**
     * URL reference to the source network resource that this ramp is managed by.
     */
    managed_by?: string;
  }

  export interface MplsInterconnect {
    /**
     * URL reference to the source network resource that this ramp is managed by.
     */
    managed_by?: string;
  }
}

/**
 * The type of network connection (ramp) linking a CF1 Site to Cloudflare's
 * network.
 */
export type RampType = 'gre' | 'gre_interconnect' | 'mpls_interconnect' | 'mconn' | 'ipsec';

/**
 * The type of network connection (ramp) linking a CF1 Site to Cloudflare's
 * network.
 */
export type RampTypeParam = 'gre' | 'gre_interconnect' | 'mpls_interconnect' | 'mconn' | 'ipsec';

export interface RampCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param
   */
  body: Array<RampCreateParams.Body>;
}

export namespace RampCreateParams {
  export interface Body {
    /**
     * Identifier of the source network resource to associate as a ramp.
     */
    source_ramp_id: string;

    /**
     * The type of network connection (ramp) linking a CF1 Site to Cloudflare's
     * network.
     */
    type: RampsAPI.RampTypeParam;
  }
}

export interface RampListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface RampDeleteParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface RampGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

Ramps.RampsSinglePage = RampsSinglePage;

export declare namespace Ramps {
  export {
    type Ramp as Ramp,
    type RampType as RampType,
    RampsSinglePage as RampsSinglePage,
    type RampCreateParams as RampCreateParams,
    type RampListParams as RampListParams,
    type RampDeleteParams as RampDeleteParams,
    type RampGetParams as RampGetParams,
  };
}
