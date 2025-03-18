// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';

export class Summary extends APIResource {
  /**
   * Retrieves the distribution of HTTP authentication requests by bot class.
   */
  botClass(
    query?: SummaryBotClassParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SummaryBotClassResponse>;
  botClass(options?: Core.RequestOptions): Core.APIPromise<SummaryBotClassResponse>;
  botClass(
    query: SummaryBotClassParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SummaryBotClassResponse> {
    if (isRequestOptions(query)) {
      return this.botClass({}, query);
    }
    return (
      this._client.get('/radar/leaked_credential_checks/summary/bot_class', {
        query,
        ...options,
      }) as Core.APIPromise<{ result: SummaryBotClassResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the distribution of HTTP authentication requests by compromised
   * credential status.
   */
  compromised(
    query?: SummaryCompromisedParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SummaryCompromisedResponse>;
  compromised(options?: Core.RequestOptions): Core.APIPromise<SummaryCompromisedResponse>;
  compromised(
    query: SummaryCompromisedParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SummaryCompromisedResponse> {
    if (isRequestOptions(query)) {
      return this.compromised({}, query);
    }
    return (
      this._client.get('/radar/leaked_credential_checks/summary/compromised', {
        query,
        ...options,
      }) as Core.APIPromise<{ result: SummaryCompromisedResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface SummaryBotClassResponse {
  meta: SummaryBotClassResponse.Meta;

  summary_0: SummaryBotClassResponse.Summary0;
}

export namespace SummaryBotClassResponse {
  export interface Meta {
    dateRange: Array<Meta.DateRange>;

    lastUpdated: string;

    normalization: string;

    confidenceInfo?: Meta.ConfidenceInfo;
  }

  export namespace Meta {
    export interface DateRange {
      /**
       * Adjusted end of date range.
       */
      endTime: string;

      /**
       * Adjusted start of date range.
       */
      startTime: string;
    }

    export interface ConfidenceInfo {
      annotations?: Array<ConfidenceInfo.Annotation>;

      level?: number;
    }

    export namespace ConfidenceInfo {
      export interface Annotation {
        dataSource: string;

        description: string;

        eventType: string;

        isInstantaneous: boolean;

        endTime?: string;

        linkedUrl?: string;

        startTime?: string;
      }
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
    dateRange: Array<Meta.DateRange>;

    lastUpdated: string;

    normalization: string;

    confidenceInfo?: Meta.ConfidenceInfo;
  }

  export namespace Meta {
    export interface DateRange {
      /**
       * Adjusted end of date range.
       */
      endTime: string;

      /**
       * Adjusted start of date range.
       */
      startTime: string;
    }

    export interface ConfidenceInfo {
      annotations?: Array<ConfidenceInfo.Annotation>;

      level?: number;
    }

    export namespace ConfidenceInfo {
      export interface Annotation {
        dataSource: string;

        description: string;

        eventType: string;

        isInstantaneous: boolean;

        endTime?: string;

        linkedUrl?: string;

        startTime?: string;
      }
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
