// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as RobotsTXTAPI from './robots-txt';
import * as TopAPI from './top/top';

export class RobotsTXT extends APIResource {
  top: TopAPI.Top = new TopAPI.Top(this._client);

  /**
   * Get the top User-Agents on robots.txt files by domain.
   */
  domains(
    query?: RobotsTXTDomainsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RobotsTXTDomainsResponse>;
  domains(options?: Core.RequestOptions): Core.APIPromise<RobotsTXTDomainsResponse>;
  domains(
    query: RobotsTXTDomainsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RobotsTXTDomainsResponse> {
    if (isRequestOptions(query)) {
      return this.domains({}, query);
    }
    return (
      this._client.get('/radar/robots_txt/domains', { query, ...options }) as Core.APIPromise<{
        result: RobotsTXTDomainsResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface RobotsTXTDomainsResponse {
  date: string;

  domains: Array<RobotsTXTDomainsResponse.Domain>;

  userAgents: Array<string>;
}

export namespace RobotsTXTDomainsResponse {
  export interface Domain {
    '*': string;

    amazonbot: string;

    categories_parent: string;

    categories_sub: string;

    domain: string;
  }
}

export interface RobotsTXTDomainsParams {
  /**
   * Filter domains by category
   */
  domainCategory?: string;

  /**
   * Filter domains by name
   */
  domainName?: string;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Limit the number of objects in the response.
   */
  limit?: number;

  /**
   * Number of objects to skip before grabbing results.
   */
  offset?: number;
}

export namespace RobotsTXT {
  export import RobotsTXTDomainsResponse = RobotsTXTAPI.RobotsTXTDomainsResponse;
  export import RobotsTXTDomainsParams = RobotsTXTAPI.RobotsTXTDomainsParams;
  export import Top = TopAPI.Top;
}
