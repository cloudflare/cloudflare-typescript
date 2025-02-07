// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as IssuesAPI from '../../intel/attack-surface-report/issues';
import { APIPromise } from '../../../api-promise';
import { CloudflareError } from '../../../error';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Class extends APIResource {
  /**
   * Get Security Center Insight Counts by Class
   */
  get(
    params: ClassGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ClassGetResponse> {
    const { account_id, zone_id, ...query } = params ?? {};
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
      this._client.get(path`/${accountOrZone}/${accountOrZoneId}/security-center/insights/class`, {
        query,
        ...options,
      }) as APIPromise<{ result: ClassGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type ClassGetResponse = Array<ClassGetResponse.ClassGetResponseItem>;

export namespace ClassGetResponse {
  export interface ClassGetResponseItem {
    count?: number;

    value?: string;
  }
}

export interface ClassGetParams {
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

export declare namespace Class {
  export { type ClassGetResponse as ClassGetResponse, type ClassGetParams as ClassGetParams };
}
