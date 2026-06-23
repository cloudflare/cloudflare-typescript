// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import { CloudflareError } from '../../../error';
import { SinglePage } from '../../../pagination';

export class Query extends APIResource {
  /**
   * Run a SQL query against account or zone-level datasets.
   *
   * Timestamp fields are RFC3339 strings. Filter with: WHERE {timestamp_field} >=
   * now() - INTERVAL '30' DAY WHERE {timestamp_field} >= '2026-04-01T00:00:00Z'
   * WHERE {timestamp_field} BETWEEN '2026-04-01T00:00:00Z' AND
   * '2026-04-30T23:59:59Z'
   *
   * Check /account or zones/{account or zone_id}/logs/explorer/datasets to see
   * enabled account or zone level datasets. Zone-level datasets will not appear
   * here. Check /account or zones/{account or
   * zone_id}/logs/explorer/datasets/available for the schemas, and the name of the
   * timestamp fields.
   *
   * For zone-level datasets use the zone-scoped endpoint: POST
   * /zones/{zone_id}/logs/explorer/query/sql
   *
   * For more information about the datasets, and the meaning of each field, check
   * out https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const querySqlResponse of client.logs.logExplorer.query.sql(
   *   fs.createReadStream('path/to/file'),
   *   { account_id: 'account_id' },
   * )) {
   *   // ...
   * }
   * ```
   */
  sql(
    body: Core.Uploadable,
    params: QuerySqlParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<QuerySqlResponsesSinglePage, QuerySqlResponse> {
    const { account_id, zone_id } = params;
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
    return this._client.getAPIList(
      `/${accountOrZone}/${accountOrZoneId}/logs/explorer/query/sql`,
      QuerySqlResponsesSinglePage,
      {
        body: body,
        method: 'post',
        ...options,
        headers: { 'Content-Type': 'text/plain', ...options?.headers },
        __binaryRequest: true,
      },
    );
  }
}

export class QuerySqlResponsesSinglePage extends SinglePage<QuerySqlResponse> {}

export type QuerySqlResponse = { [key: string]: unknown };

export interface QuerySqlParams {
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
}

Query.QuerySqlResponsesSinglePage = QuerySqlResponsesSinglePage;

export declare namespace Query {
  export {
    type QuerySqlResponse as QuerySqlResponse,
    QuerySqlResponsesSinglePage as QuerySqlResponsesSinglePage,
    type QuerySqlParams as QuerySqlParams,
  };
}
