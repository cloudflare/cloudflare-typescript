// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Trace extends APIResource {
  /**
   * Gets the delivery trace for an email message, showing its path through email
   * security processing.
   *
   * @example
   * ```ts
   * const trace =
   *   await client.emailSecurity.investigate.trace.get(
   *     '4Njp3P0STMz2c02Q',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  get(postfixID: string, params: TraceGetParams, options?: RequestOptions): APIPromise<TraceGetResponse> {
    const { account_id, ...query } = params;
    return (
      this._client.get(path`/accounts/${account_id}/email-security/investigate/${postfixID}/trace`, {
        query,
        ...options,
      }) as APIPromise<{ result: TraceGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface TraceGetResponse {
  inbound: TraceGetResponse.Inbound;

  outbound: TraceGetResponse.Outbound;
}

export namespace TraceGetResponse {
  export interface Inbound {
    lines?: Array<Inbound.Line> | null;

    pending?: boolean | null;
  }

  export namespace Inbound {
    export interface Line {
      lineno: number;

      message: string;

      ts: string;
    }
  }

  export interface Outbound {
    lines?: Array<Outbound.Line> | null;

    pending?: boolean | null;
  }

  export namespace Outbound {
    export interface Line {
      lineno: number;

      message: string;

      ts: string;
    }
  }
}

export interface TraceGetParams {
  /**
   * Path param: Account Identifier
   */
  account_id: string;

  /**
   * Query param: When true, search the submissions datastore only. When false or
   * omitted, search the regular datastore only.
   */
  submission?: boolean;
}

export declare namespace Trace {
  export { type TraceGetResponse as TraceGetResponse, type TraceGetParams as TraceGetParams };
}
