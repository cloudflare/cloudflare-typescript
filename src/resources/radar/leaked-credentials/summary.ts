// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Summary extends APIResource {
  /**
   * Retrieves the distribution of HTTP authentication requests by bot class.
   */
  botClass(
    query: SummaryBotClassParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SummaryBotClassResponse> {
    return (
      this._client.get('/radar/leaked_credential_checks/summary/bot_class', {
        query,
        ...options,
      }) as APIPromise<{ result: SummaryBotClassResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the distribution of HTTP authentication requests by compromised
   * credential status.
   */
  compromised(
    query: SummaryCompromisedParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SummaryCompromisedResponse> {
    return (
      this._client.get('/radar/leaked_credential_checks/summary/compromised', {
        query,
        ...options,
      }) as APIPromise<{ result: SummaryCompromisedResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface SummaryBotClassResponse {
  meta: SummaryBotClassResponse.Meta;

  summary_0: SummaryBotClassResponse.Summary0;
}

export namespace SummaryBotClassResponse {
  export interface Meta {
    dateRange: Array<unknown>;

    lastUpdated: string;

    normalization: string;

    confidenceInfo?: Meta.ConfidenceInfo;
  }

  export namespace Meta {
    export interface ConfidenceInfo {
      annotations?: Array<unknown>;

      level?: number;
    }
  }

  export interface Summary0 {
    bot: string;

    human: string;
  }
}

export interface SummaryCompromisedResponse {
  meta: SummaryCompromisedResponse.Meta;

  summary_0: SummaryCompromisedResponse.Summary0;
}

export namespace SummaryCompromisedResponse {
  export interface Meta {
    dateRange: Array<unknown>;

    lastUpdated: string;

    normalization: string;

    confidenceInfo?: Meta.ConfidenceInfo;
  }

  export namespace Meta {
    export interface ConfidenceInfo {
      annotations?: Array<unknown>;

      level?: number;
    }
  }

  export interface Summary0 {
    CLEAN: string;

    COMPROMISED: string;
  }
}

export interface SummaryBotClassParams {
  /**
   * Filters results by compromised credential status (clean vs. compromised).
   */
  compromised?: Array<'CLEAN' | 'COMPROMISED'>;

  /**
   * End of the date range (inclusive).
   */
  dateEnd?: Array<string>;

  /**
   * Filters results by the specified date range. For example, use `7d` and
   * `7dcontrol` to compare this week with the previous week. Use this parameter or
   * set specific start and end dates (`dateStart` and `dateEnd` parameters).
   */
  dateRange?: Array<string>;

  /**
   * Start of the date range.
   */
  dateStart?: Array<string>;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;
}

export interface SummaryCompromisedParams {
  /**
   * Filters results by bot class. Refer to
   * [Bot classes](https://developers.cloudflare.com/radar/concepts/bot-classes/).
   */
  botClass?: Array<'LIKELY_AUTOMATED' | 'LIKELY_HUMAN'>;

  /**
   * End of the date range (inclusive).
   */
  dateEnd?: Array<string>;

  /**
   * Filters results by the specified date range. For example, use `7d` and
   * `7dcontrol` to compare this week with the previous week. Use this parameter or
   * set specific start and end dates (`dateStart` and `dateEnd` parameters).
   */
  dateRange?: Array<string>;

  /**
   * Start of the date range.
   */
  dateStart?: Array<string>;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;
}

export declare namespace Summary {
  export {
    type SummaryBotClassResponse as SummaryBotClassResponse,
    type SummaryCompromisedResponse as SummaryCompromisedResponse,
    type SummaryBotClassParams as SummaryBotClassParams,
    type SummaryCompromisedParams as SummaryCompromisedParams,
  };
}
