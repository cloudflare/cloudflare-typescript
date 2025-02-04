// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import { CloudflareError } from 'cloudflare/error';
import * as Shared from '../../shared';
import * as IssuesAPI from '../../intel/attack-surface-report/issues';
import * as ClassAPI from './class';
import { Class, ClassGetParams, ClassGetResponse } from './class';
import * as SeverityAPI from './severity';
import { Severity, SeverityGetParams, SeverityGetResponse } from './severity';
import * as TypeAPI from './type';
import { Type, TypeGetParams, TypeGetResponse } from './type';

export class Insights extends APIResource {
  class: ClassAPI.Class = new ClassAPI.Class(this._client);
  severity: SeverityAPI.Severity = new SeverityAPI.Severity(this._client);
  type: TypeAPI.Type = new TypeAPI.Type(this._client);

  /**
   * Archive Security Center Insight
   */
  dismiss(
    issueId: string,
    params: InsightDismissParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InsightDismissResponse> {
    const { account_id, zone_id, ...body } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return this._client.put(
      `/${accountOrZone}/${accountOrZoneId}/security-center/insights/${issueId}/dismiss`,
      { body, ...options },
    );
  }

  /**
   * Get Security Center Insights
   */
  get(params?: InsightGetParams, options?: Core.RequestOptions): Core.APIPromise<InsightGetResponse>;
  get(options?: Core.RequestOptions): Core.APIPromise<InsightGetResponse>;
  get(
    params: InsightGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<InsightGetResponse> {
    if (isRequestOptions(params)) {
      return this.get({}, params);
    }
    const { account_id, zone_id, ...query } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return (
      this._client.get(`/${accountOrZone}/${accountOrZoneId}/security-center/insights`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: InsightGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface InsightDismissResponse {
  errors: Array<Shared.ResponseInfo>;

  messages: Array<Shared.ResponseInfo>;

  /**
   * Whether the API call was successful
   */
  success: true;
}

export interface InsightGetResponse {
  /**
   * Total number of results
   */
  count?: number;

  issues?: Array<InsightGetResponse.Issue>;

  /**
   * Current page within paginated list of results
   */
  page?: number;

  /**
   * Number of results per page of results
   */
  per_page?: number;
}

export namespace InsightGetResponse {
  export interface Issue {
    id?: string;

    dismissed?: boolean;

    issue_class?: string;

    issue_type?: IssuesAPI.IssueType;

    payload?: unknown;

    resolve_link?: string;

    resolve_text?: string;

    severity?: 'Low' | 'Moderate' | 'Critical';

    since?: string;

    subject?: string;

    timestamp?: string;
  }
}

export interface InsightDismissParams {
  /**
   * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
   * Zone ID.
   */
  account_id?: string;

  /**
   * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
   * Account ID.
   */
  zone_id?: string;

  /**
   * Body param:
   */
  dismiss?: boolean;
}

export interface InsightGetParams {
  /**
   * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
   * Zone ID.
   */
  account_id?: string;

  /**
   * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
   * Account ID.
   */
  zone_id?: string;

  /**
   * Query param:
   */
  dismissed?: boolean;

  /**
   * Query param:
   */
  issue_class?: Array<string>;

  /**
   * Query param:
   */
  'issue_class~neq'?: Array<string>;

  /**
   * Query param:
   */
  issue_type?: Array<IssuesAPI.IssueTypeParam>;

  /**
   * Query param:
   */
  'issue_type~neq'?: Array<IssuesAPI.IssueTypeParam>;

  /**
   * Query param: Current page within paginated list of results
   */
  page?: number;

  /**
   * Query param: Number of results per page of results
   */
  per_page?: number;

  /**
   * Query param:
   */
  product?: Array<string>;

  /**
   * Query param:
   */
  'product~neq'?: Array<string>;

  /**
   * Query param:
   */
  severity?: Array<IssuesAPI.SeverityQueryParamParam>;

  /**
   * Query param:
   */
  'severity~neq'?: Array<IssuesAPI.SeverityQueryParamParam>;

  /**
   * Query param:
   */
  subject?: Array<string>;

  /**
   * Query param:
   */
  'subject~neq'?: Array<string>;
}

Insights.Class = Class;
Insights.Severity = Severity;
Insights.Type = Type;

export declare namespace Insights {
  export {
    type InsightDismissResponse as InsightDismissResponse,
    type InsightGetResponse as InsightGetResponse,
    type InsightDismissParams as InsightDismissParams,
    type InsightGetParams as InsightGetParams,
  };

  export { Class as Class, type ClassGetResponse as ClassGetResponse, type ClassGetParams as ClassGetParams };

  export {
    Severity as Severity,
    type SeverityGetResponse as SeverityGetResponse,
    type SeverityGetParams as SeverityGetParams,
  };

  export { Type as Type, type TypeGetResponse as TypeGetResponse, type TypeGetParams as TypeGetParams };
}
