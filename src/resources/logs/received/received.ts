// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import { Fields } from './fields';
import * as ReceivedAPI from './received';
import * as FieldsAPI from './fields';

export class Received extends APIResource {
  fields: FieldsAPI.Fields = new FieldsAPI.Fields(this._client);

  /**
   * The `/received` api route allows customers to retrieve their edge HTTP logs. The
   * basic access pattern is "give me all the logs for zone Z for minute M", where
   * the minute M refers to the time records were received at Cloudflare's central
   * data center. `start` is inclusive, and `end` is exclusive. Because of that, to
   * get all data, at minutely cadence, starting at 10AM, the proper values are:
   * `start=2018-05-20T10:00:00Z&end=2018-05-20T10:01:00Z`, then
   * `start=2018-05-20T10:01:00Z&end=2018-05-20T10:02:00Z` and so on; the overlap
   * will be handled properly.
   */
  get(params: ReceivedGetParams, options?: Core.RequestOptions): Core.APIPromise<ReceivedGetResponse> {
    const { zone_id, ...query } = params;
    return this._client.get(`/zones/${zone_id}/logs/received`, { query, ...options });
  }
}

export type ReceivedGetResponse = string | unknown

export interface ReceivedGetParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Query param: Sets the (exclusive) end of the requested time frame. This can be a
   * unix timestamp (in seconds or nanoseconds), or an absolute timestamp that
   * conforms to RFC 3339. `end` must be at least five minutes earlier than now and
   * must be later than `start`. Difference between `start` and `end` must be not
   * greater than one hour.
   */
  end: string | number;

  /**
   * Query param: When `?count=` is provided, the response will contain up to `count`
   * results. Since results are not sorted, you are likely to get different data for
   * repeated requests. `count` must be an integer > 0.
   */
  count?: number;

  /**
   * Query param: The `/received` route by default returns a limited set of fields,
   * and allows customers to override the default field set by specifying individual
   * fields. The reasons for this are: 1. Most customers require only a small subset
   * of fields, but that subset varies from customer to customer; 2. Flat schema is
   * much easier to work with downstream (importing into BigTable etc); 3.
   * Performance (time to process, file size). If `?fields=` is not specified,
   * default field set is returned. This default field set may change at any time.
   * When `?fields=` is provided, each record is returned with the specified fields.
   * `fields` must be specified as a comma separated list without any whitespaces,
   * and all fields must exist. The order in which fields are specified does not
   * matter, and the order of fields in the response is not specified.
   */
  fields?: string;

  /**
   * Query param: When `?sample=` is provided, a sample of matching records is
   * returned. If `sample=0.1` then 10% of records will be returned. Sampling is
   * random: repeated calls will not only return different records, but likely will
   * also vary slightly in number of returned records. When `?count=` is also
   * specified, `count` is applied to the number of returned records, not the sampled
   * records. So, with `sample=0.05` and `count=7`, when there is a total of 100
   * records available, approximately five will be returned. When there are 1000
   * records, seven will be returned. When there are 10,000 records, seven will be
   * returned.
   */
  sample?: number;

  /**
   * Query param: Sets the (inclusive) beginning of the requested time frame. This
   * can be a unix timestamp (in seconds or nanoseconds), or an absolute timestamp
   * that conforms to RFC 3339. At this point in time, it cannot exceed a time in the
   * past greater than seven days.
   */
  start?: string | number;

  /**
   * Query param: By default, timestamps in responses are returned as Unix nanosecond
   * integers. The `?timestamps=` argument can be set to change the format in which
   * response timestamps are returned. Possible values are: `unix`, `unixnano`,
   * `rfc3339`. Note that `unix` and `unixnano` return timestamps as integers;
   * `rfc3339` returns timestamps as strings.
   */
  timestamps?: 'unix' | 'unixnano' | 'rfc3339';
}

export namespace Received {
  export import ReceivedGetResponse = ReceivedAPI.ReceivedGetResponse;
  export import ReceivedGetParams = ReceivedAPI.ReceivedGetParams;
  export import Fields = FieldsAPI.Fields;
  export import FieldGetResponse = FieldsAPI.FieldGetResponse;
  export import FieldGetParams = FieldsAPI.FieldGetParams;
}
