// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class OriginTLSComplianceModes extends APIResource {
  /**
   * Replace the entire set of TLS compliance modes for the zone with the list
   * provided in the request body. PUT performs a full replace, not a merge — any
   * modes not present in the request body are removed. The request body must be of
   * the form `{"value": ["fips", "pqh"]}`. Currently supported modes are `fips` and
   * `pqh`; an empty list clears the constraint. Future modes (e.g. `cnsa2`) may be
   * added; clients should treat unknown values as opaque strings. Invalid mode
   * values are rejected with a 4xx response.
   *
   * @example
   * ```ts
   * const originTLSComplianceMode =
   *   await client.originTLSComplianceModes.update({
   *     zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     value: ['fips', 'pqh'],
   *   });
   * ```
   */
  update(
    params: OriginTLSComplianceModeUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OriginTLSComplianceModeUpdateResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.put(`/zones/${zone_id}/settings/origin_tls_compliance_modes`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: OriginTLSComplianceModeUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete the Origin TLS Compliance Modes setting for the zone, removing any
   * configured compliance constraint. After deletion, Cloudflare's default behavior
   * applies (no compliance filtering of the key-exchange algorithm list sent to the
   * origin).
   *
   * @example
   * ```ts
   * const originTLSComplianceMode =
   *   await client.originTLSComplianceModes.delete({
   *     zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   });
   * ```
   */
  delete(
    params: OriginTLSComplianceModeDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OriginTLSComplianceModeDeleteResponse> {
    const { zone_id } = params;
    return (
      this._client.delete(
        `/zones/${zone_id}/settings/origin_tls_compliance_modes`,
        options,
      ) as Core.APIPromise<{ result: OriginTLSComplianceModeDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update the set of TLS compliance modes for the zone. PATCH performs a full
   * replace of the modes list, not a merge — the request body is treated as the
   * complete new list, and any modes not present in it are removed. (To remove a
   * single mode from an existing configuration, send the updated list without it.)
   * The request body must be of the form `{"value": ["fips", "pqh"]}`. Currently
   * supported modes are `fips` and `pqh`; an empty list clears the constraint.
   * Future modes (e.g. `cnsa2`) may be added; clients should treat unknown values as
   * opaque strings. Invalid mode values are rejected with a 4xx response.
   *
   * @example
   * ```ts
   * const response = await client.originTLSComplianceModes.edit(
   *   {
   *     zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     value: ['fips', 'pqh'],
   *   },
   * );
   * ```
   */
  edit(
    params: OriginTLSComplianceModeEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OriginTLSComplianceModeEditResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/settings/origin_tls_compliance_modes`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: OriginTLSComplianceModeEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Origin TLS Compliance Modes constrains the set of TLS key-exchange algorithms
   * Cloudflare may use when establishing the TLS connection to the zone's origin.
   * The value is a list of named compliance modes (currently `fips` and `pqh`).
   * Multiple modes are combined as the intersection of their permitted algorithm
   * lists. An empty list (or no rule configured) means no compliance constraint is
   * applied.
   *
   * @example
   * ```ts
   * const originTLSComplianceMode =
   *   await client.originTLSComplianceModes.get({
   *     zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   });
   * ```
   */
  get(
    params: OriginTLSComplianceModeGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OriginTLSComplianceModeGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/settings/origin_tls_compliance_modes`, options) as Core.APIPromise<{
        result: OriginTLSComplianceModeGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface OriginTLSComplianceModeUpdateResponse {
  /**
   * The identifier of the caching setting.
   */
  id: 'origin_tls_compliance_modes';

  /**
   * Whether the setting is editable.
   */
  editable: boolean;

  /**
   * List of TLS compliance modes that constrain the key-exchange algorithms
   * Cloudflare may use when establishing the TLS connection to the zone's origin.
   * Currently supported values are `fips` (FIPS-approved curves) and `pqh`
   * (post-quantum hybrid). Future modes (e.g. `cnsa2`) may be added; clients should
   * treat unknown values as opaque strings. Multiple modes are combined as the
   * intersection of their permitted algorithm lists; selections whose intersection
   * is empty are rejected. An empty list clears the constraint.
   */
  value: Array<string>;

  /**
   * Last time this setting was modified.
   */
  modified_on?: string | null;
}

export interface OriginTLSComplianceModeDeleteResponse {
  /**
   * The identifier of the caching setting.
   */
  id: 'origin_tls_compliance_modes';

  /**
   * Whether the setting is editable.
   */
  editable: boolean;

  /**
   * Last time this setting was modified.
   */
  modified_on?: string | null;
}

export interface OriginTLSComplianceModeEditResponse {
  /**
   * The identifier of the caching setting.
   */
  id: 'origin_tls_compliance_modes';

  /**
   * Whether the setting is editable.
   */
  editable: boolean;

  /**
   * List of TLS compliance modes that constrain the key-exchange algorithms
   * Cloudflare may use when establishing the TLS connection to the zone's origin.
   * Currently supported values are `fips` (FIPS-approved curves) and `pqh`
   * (post-quantum hybrid). Future modes (e.g. `cnsa2`) may be added; clients should
   * treat unknown values as opaque strings. Multiple modes are combined as the
   * intersection of their permitted algorithm lists; selections whose intersection
   * is empty are rejected. An empty list clears the constraint.
   */
  value: Array<string>;

  /**
   * Last time this setting was modified.
   */
  modified_on?: string | null;
}

export interface OriginTLSComplianceModeGetResponse {
  /**
   * The identifier of the caching setting.
   */
  id: 'origin_tls_compliance_modes';

  /**
   * Whether the setting is editable.
   */
  editable: boolean;

  /**
   * List of TLS compliance modes that constrain the key-exchange algorithms
   * Cloudflare may use when establishing the TLS connection to the zone's origin.
   * Currently supported values are `fips` (FIPS-approved curves) and `pqh`
   * (post-quantum hybrid). Future modes (e.g. `cnsa2`) may be added; clients should
   * treat unknown values as opaque strings. Multiple modes are combined as the
   * intersection of their permitted algorithm lists; selections whose intersection
   * is empty are rejected. An empty list clears the constraint.
   */
  value: Array<string>;

  /**
   * Last time this setting was modified.
   */
  modified_on?: string | null;
}

export interface OriginTLSComplianceModeUpdateParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Body param: List of TLS compliance modes that constrain the key-exchange
   * algorithms Cloudflare may use when establishing the TLS connection to the zone's
   * origin. Currently supported values are `fips` (FIPS-approved curves) and `pqh`
   * (post-quantum hybrid). Future modes (e.g. `cnsa2`) may be added; clients should
   * treat unknown values as opaque strings. Multiple modes are combined as the
   * intersection of their permitted algorithm lists; selections whose intersection
   * is empty are rejected. An empty list clears the constraint.
   */
  value: Array<string>;
}

export interface OriginTLSComplianceModeDeleteParams {
  /**
   * Identifier.
   */
  zone_id: string;
}

export interface OriginTLSComplianceModeEditParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Body param: List of TLS compliance modes that constrain the key-exchange
   * algorithms Cloudflare may use when establishing the TLS connection to the zone's
   * origin. Currently supported values are `fips` (FIPS-approved curves) and `pqh`
   * (post-quantum hybrid). Future modes (e.g. `cnsa2`) may be added; clients should
   * treat unknown values as opaque strings. Multiple modes are combined as the
   * intersection of their permitted algorithm lists; selections whose intersection
   * is empty are rejected. An empty list clears the constraint.
   */
  value: Array<string>;
}

export interface OriginTLSComplianceModeGetParams {
  /**
   * Identifier.
   */
  zone_id: string;
}

export declare namespace OriginTLSComplianceModes {
  export {
    type OriginTLSComplianceModeUpdateResponse as OriginTLSComplianceModeUpdateResponse,
    type OriginTLSComplianceModeDeleteResponse as OriginTLSComplianceModeDeleteResponse,
    type OriginTLSComplianceModeEditResponse as OriginTLSComplianceModeEditResponse,
    type OriginTLSComplianceModeGetResponse as OriginTLSComplianceModeGetResponse,
    type OriginTLSComplianceModeUpdateParams as OriginTLSComplianceModeUpdateParams,
    type OriginTLSComplianceModeDeleteParams as OriginTLSComplianceModeDeleteParams,
    type OriginTLSComplianceModeEditParams as OriginTLSComplianceModeEditParams,
    type OriginTLSComplianceModeGetParams as OriginTLSComplianceModeGetParams,
  };
}
