// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class ASN extends APIResource {
  /**
   * Gets all the data the botnet tracking database has for a given ASN registered to
   * user account for given date. If no date is given, it will return results for the
   * previous day.
   */
  dayReport(
    asnID: number,
    params: ASNDayReportParams,
    options?: RequestOptions,
  ): APIPromise<ASNDayReportResponse> {
    const { account_id, ...query } = params;
    return (
      this._client.get(path`/accounts/${account_id}/botnet_feed/asn/${asnID}/day_report`, {
        query,
        ...options,
      }) as APIPromise<{ result: ASNDayReportResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets all the data the botnet threat feed tracking database has for a given ASN
   * registered to user account.
   */
  fullReport(
    asnID: number,
    params: ASNFullReportParams,
    options?: RequestOptions,
  ): APIPromise<ASNFullReportResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/botnet_feed/asn/${asnID}/full_report`,
        options,
      ) as APIPromise<{ result: ASNFullReportResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ASNDayReportResponse {
  cidr?: string;

  date?: string;

  offense_count?: number;
}

export interface ASNFullReportResponse {
  cidr?: string;

  date?: string;

  offense_count?: number;
}

export interface ASNDayReportParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Query param:
   */
  date?: string;
}

export interface ASNFullReportParams {
  /**
   * Identifier
   */
  account_id: string;
}

export declare namespace ASN {
  export {
    type ASNDayReportResponse as ASNDayReportResponse,
    type ASNFullReportResponse as ASNFullReportResponse,
    type ASNDayReportParams as ASNDayReportParams,
    type ASNFullReportParams as ASNFullReportParams,
  };
}
