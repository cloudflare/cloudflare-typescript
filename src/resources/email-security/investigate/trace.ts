// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseTrace extends APIResource {
  static override readonly _key: readonly ['emailSecurity', 'investigate', 'trace'] = Object.freeze([
    'emailSecurity',
    'investigate',
    'trace',
  ] as const);

  /**
   * Retrieves delivery and processing trace information for an email message. Shows
   * the delivery path, retraction history, and move operations performed on the
   * message. Useful for debugging delivery issues.
   *
   * @example
   * ```ts
   * const trace =
   *   await client.emailSecurity.investigate.trace.get(
   *     '4Njp3P0STMz2c02Q-2024-01-05T10:00:00-12345678',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  get(investigateID: string, params: TraceGetParams, options?: RequestOptions): APIPromise<TraceGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/email-security/investigate/${investigateID}/trace`,
        options,
      ) as APIPromise<{ result: TraceGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Trace extends BaseTrace {}

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
      /**
       * Line number in the trace log
       */
      lineno?: number;

      logged_at?: string | null;

      message?: string;

      /**
       * @deprecated Use `logged_at` instead.
       */
      ts?: string;
    }
  }

  export interface Outbound {
    lines?: Array<Outbound.Line> | null;

    pending?: boolean | null;
  }

  export namespace Outbound {
    export interface Line {
      /**
       * Line number in the trace log
       */
      lineno?: number;

      logged_at?: string | null;

      message?: string;

      /**
       * @deprecated Use `logged_at` instead.
       */
      ts?: string;
    }
  }
}

export interface TraceGetParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export declare namespace Trace {
  export { type TraceGetResponse as TraceGetResponse, type TraceGetParams as TraceGetParams };
}
