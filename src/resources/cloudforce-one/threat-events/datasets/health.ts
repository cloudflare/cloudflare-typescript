// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';

export class Health extends APIResource {
  /**
   * Benchmark Durable Object warmup
   *
   * @example
   * ```ts
   * const health =
   *   await client.cloudforceOne.threatEvents.datasets.health.get(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  get(
    datasetId: string,
    params: HealthGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HealthGetResponse> {
    const { account_id } = params;
    return this._client.get(
      `/accounts/${account_id}/cloudforce-one/events/dataset/${datasetId}/health`,
      options,
    );
  }
}

export interface HealthGetResponse {
  properties: HealthGetResponse.Properties;

  type: string;
}

export namespace HealthGetResponse {
  export interface Properties {
    durationMs: Properties.DurationMs;

    ok: Properties.Ok;

    shards: Properties.Shards;

    totalShards: Properties.TotalShards;

    totalSizeBytes: Properties.TotalSizeBytes;

    totalSizeMB: Properties.TotalSizeMB;
  }

  export namespace Properties {
    export interface DurationMs {
      type: string;
    }

    export interface Ok {
      type: string;
    }

    export interface Shards {
      items: Shards.Items;

      type: string;
    }

    export namespace Shards {
      export interface Items {
        properties: Items.Properties;

        type: string;
      }

      export namespace Items {
        export interface Properties {
          datasetId: Properties.DatasetID;

          date: Properties.Date;

          healthCheckMs: Properties.HealthCheckMs;

          pageCount: Properties.PageCount;

          pageSize: Properties.PageSize;

          sizeBytes: Properties.SizeBytes;

          sizeMB: Properties.SizeMB;

          startupMs: Properties.StartupMs;

          tableStats: Properties.TableStats;

          timedOut: Properties.TimedOut;

          totalMs: Properties.TotalMs;
        }

        export namespace Properties {
          export interface DatasetID {
            type: string;
          }

          export interface Date {
            type: string;
          }

          export interface HealthCheckMs {
            type: string;
          }

          export interface PageCount {
            type: string;
          }

          export interface PageSize {
            type: string;
          }

          export interface SizeBytes {
            type: string;
          }

          export interface SizeMB {
            type: string;
          }

          export interface StartupMs {
            type: string;
          }

          export interface TableStats {
            additionalProperties: TableStats.AdditionalProperties;

            type: string;
          }

          export namespace TableStats {
            export interface AdditionalProperties {
              type: string;
            }
          }

          export interface TimedOut {
            type: string;
          }

          export interface TotalMs {
            type: string;
          }
        }
      }
    }

    export interface TotalShards {
      type: string;
    }

    export interface TotalSizeBytes {
      type: string;
    }

    export interface TotalSizeMB {
      type: string;
    }
  }
}

export interface HealthGetParams {
  /**
   * Account ID.
   */
  account_id: string;
}

export declare namespace Health {
  export { type HealthGetResponse as HealthGetResponse, type HealthGetParams as HealthGetParams };
}
