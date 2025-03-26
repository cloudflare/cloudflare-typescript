// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Trace extends APIResource {
  /**
   * Get email trace
   */
  get(postfixID: string, params: TraceGetParams, options?: RequestOptions): APIPromise<TraceGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/email-security/investigate/${postfixID}/trace`,
        options,
      ) as APIPromise<{ result: TraceGetResponse }>
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
   * Account Identifier
   */
  account_id: string;
}

export declare namespace Trace {
  export { type TraceGetResponse as TraceGetResponse, type TraceGetParams as TraceGetParams };
}
