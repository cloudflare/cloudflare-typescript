// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';

export class Edge extends APIResource {}

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

export declare namespace Edge {
  export { type InstantLogpushJob as InstantLogpushJob };
}
