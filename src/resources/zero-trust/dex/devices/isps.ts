// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import { V4PagePagination, type V4PagePaginationParams } from '../../../../pagination';

export class ISPs extends APIResource {
  /**
   * List ISP information observed for a specific device during traceroute tests.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const isps of client.zeroTrust.dex.devices.isps.list(
   *   'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *   {
   *     account_id: '01a7362d577a6c3019a474fd6f485823',
   *     per_page: 10,
   *   },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    deviceId: string,
    params: ISPListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ISPsV4PagePagination, ISPs> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/dex/devices/${deviceId}/isps`,
      ISPsV4PagePagination,
      { query, ...options },
    );
  }
}

export class ISPsV4PagePagination extends V4PagePagination<ISPs> {}

export interface ISPs {
  isps: Array<ISPs.ISP>;
}

export namespace ISPs {
  export interface ISP {
    /**
     * The test that generated this result.
     */
    test_id: string;

    /**
     * The specific test result.
     */
    test_result_id: string;

    /**
     * Timestamp of when the ISP was observed.
     */
    time_start: string;

    /**
     * IP address information for the ISP hop. Fields marked as PII-gated (`name`,
     * `address`, `netmask`, and all `location` sub-fields) will be returned as the
     * literal string `"REDACTED"` for callers that do not have the PII permission.
     * `asn`, `aso`, and `version` are always returned regardless of PII access.
     */
    ip?: ISP.IP;
  }

  export namespace ISP {
    /**
     * IP address information for the ISP hop. Fields marked as PII-gated (`name`,
     * `address`, `netmask`, and all `location` sub-fields) will be returned as the
     * literal string `"REDACTED"` for callers that do not have the PII permission.
     * `asn`, `aso`, and `version` are always returned regardless of PII access.
     */
    export interface IP {
      /**
       * IP address. Returned as `"REDACTED"` without PII permission.
       */
      address?: string;

      /**
       * Autonomous System Number.
       */
      asn?: number;

      /**
       * Autonomous System Organization name.
       */
      aso?: string;

      /**
       * Geographic location information. All fields are returned as the literal string
       * `"REDACTED"` for callers that do not have the PII permission.
       */
      location?: IP.Location;

      /**
       * Named IP address (reverse DNS hostname when available). Returned as `"REDACTED"`
       * without PII permission.
       */
      name?: string;

      /**
       * Network mask. Returned as `"REDACTED"` without PII permission.
       */
      netmask?: string;

      /**
       * IP version (`1` for IPv4, `2` for IPv6, `0` if unknown).
       */
      version?: number;
    }

    export namespace IP {
      /**
       * Geographic location information. All fields are returned as the literal string
       * `"REDACTED"` for callers that do not have the PII permission.
       */
      export interface Location {
        /**
         * City name. Returned as `"REDACTED"` without PII permission.
         */
        city?: string;

        /**
         * Country ISO code. Returned as `"REDACTED"` without PII permission.
         */
        country_iso?: string;

        /**
         * State/province ISO code. Returned as `"REDACTED"` without PII permission.
         */
        state_iso?: string;

        /**
         * ZIP/postal code. Returned as `"REDACTED"` without PII permission.
         */
        zip?: string;
      }
    }
  }
}

export interface ISPListParams extends V4PagePaginationParams {
  /**
   * Path param: Unique identifier linked to an account.
   */
  account_id: string;

  /**
   * Query param: Cursor for cursor-based pagination. Mutually exclusive with page.
   */
  cursor?: string;

  /**
   * Query param: Start time for the query in ISO 8601 format.
   */
  from?: string;

  /**
   * Query param: The field to sort results by.
   */
  sort_by?: 'time_start';

  /**
   * Query param: The order to sort results.
   */
  sort_order?: 'ASC' | 'DESC';

  /**
   * Query param: End time for the query in ISO 8601 format.
   */
  to?: string;
}

ISPs.ISPsV4PagePagination = ISPsV4PagePagination;

export declare namespace ISPs {
  export {
    type ISPs as ISPs,
    ISPsV4PagePagination as ISPsV4PagePagination,
    type ISPListParams as ISPListParams,
  };
}
