// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Trace extends APIResource {
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
  get(
    investigateId: string,
    params: TraceGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TraceGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/email-security/investigate/${investigateId}/trace`,
        options,
      ) as Core.APIPromise<{ result: TraceGetResponse }>
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
      /**
       * Line number in the trace log
       */
      lineno?: number;

      logged_at?: string | null;

      message?: string;

      /**
       * @deprecated Deprecated, use `logged_at` instead. End of life: November 1, 2026.
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
       * @deprecated Deprecated, use `logged_at` instead. End of life: November 1, 2026.
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
