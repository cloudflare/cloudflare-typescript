// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as RayIDAPI from './rayid';

export class RayID extends APIResource {
  /**
   * The `/rayids` api route allows lookups by specific rayid. The rayids route will
   * return zero, one, or more records (ray ids are not unique).
   */
  get(
    zoneIdentifier: string,
    rayIdentifier: string,
    query?: RayIDGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RayIDGetResponse>;
  get(
    zoneIdentifier: string,
    rayIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RayIDGetResponse>;
  get(
    zoneIdentifier: string,
    rayIdentifier: string,
    query: RayIDGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RayIDGetResponse> {
    if (isRequestOptions(query)) {
      return this.get(zoneIdentifier, rayIdentifier, {}, query);
    }
    return this._client.get(`/zones/${zoneIdentifier}/logs/rayids/${rayIdentifier}`, { query, ...options });
  }
}

export type RayIDGetResponse = string | unknown;

export interface RayIDGetParams {
  /**
   * The `/received` route by default returns a limited set of fields, and allows
   * customers to override the default field set by specifying individual fields. The
   * reasons for this are: 1. Most customers require only a small subset of fields,
   * but that subset varies from customer to customer; 2. Flat schema is much easier
   * to work with downstream (importing into BigTable etc); 3. Performance (time to
   * process, file size). If `?fields=` is not specified, default field set is
   * returned. This default field set may change at any time. When `?fields=` is
   * provided, each record is returned with the specified fields. `fields` must be
   * specified as a comma separated list without any whitespaces, and all fields must
   * exist. The order in which fields are specified does not matter, and the order of
   * fields in the response is not specified.
   */
  fields?: string;

  /**
   * By default, timestamps in responses are returned as Unix nanosecond integers.
   * The `?timestamps=` argument can be set to change the format in which response
   * timestamps are returned. Possible values are: `unix`, `unixnano`, `rfc3339`.
   * Note that `unix` and `unixnano` return timestamps as integers; `rfc3339` returns
   * timestamps as strings.
   */
  timestamps?: 'unix' | 'unixnano' | 'rfc3339';
}

export namespace RayID {
  export import RayIDGetResponse = RayIDAPI.RayIDGetResponse;
  export import RayIDGetParams = RayIDAPI.RayIDGetParams;
}
