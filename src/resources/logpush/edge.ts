// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import { PagePromise, SinglePage } from '../../pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Edge extends APIResource {
  /**
   * Creates a new Instant Logs job for a zone.
   */
  create(params: EdgeCreateParams, options?: RequestOptions): APIPromise<InstantLogpushJob | null> {
    const { zone_id, ...body } = params;
    return (
      this._client.post(path`/zones/${zone_id}/logpush/edge`, { body, ...options }) as APIPromise<{
        result: InstantLogpushJob | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists Instant Logs jobs for a zone.
   */
  get(
    params: EdgeGetParams,
    options?: RequestOptions,
  ): PagePromise<InstantLogpushJobsSinglePage, InstantLogpushJob | null> {
    const { zone_id } = params;
    return this._client.getAPIList(
      path`/zones/${zone_id}/logpush/edge`,
      SinglePage<InstantLogpushJob | null>,
      options,
    );
  }
}

export type InstantLogpushJobsSinglePage = SinglePage<InstantLogpushJob | null>;

export interface InstantLogpushJob {
  /**
   * Unique WebSocket address that will receive messages from Cloudflare’s edge.
   */
  destination_conf?: string;

  /**
   * Comma-separated list of fields.
   */
  fields?: string;

  /**
   * Filters to drill down into specific events.
   */
  filter?: string;

  /**
   * The sample parameter is the sample rate of the records set by the client:
   * "sample": 1 is 100% of records "sample": 10 is 10% and so on.
   */
  sample?: number;

  /**
   * Unique session id of the job.
   */
  session_id?: string;
}

export interface EdgeCreateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Comma-separated list of fields.
   */
  fields?: string;

  /**
   * Body param: Filters to drill down into specific events.
   */
  filter?: string;

  /**
   * Body param: The sample parameter is the sample rate of the records set by the
   * client: "sample": 1 is 100% of records "sample": 10 is 10% and so on.
   */
  sample?: number;
}

export interface EdgeGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export declare namespace Edge {
  export {
    type InstantLogpushJob as InstantLogpushJob,
    type InstantLogpushJobsSinglePage as InstantLogpushJobsSinglePage,
    type EdgeCreateParams as EdgeCreateParams,
    type EdgeGetParams as EdgeGetParams,
  };
}
