// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseVersions extends APIResource {
  static override readonly _key: readonly ['workflows', 'versions'] = Object.freeze([
    'workflows',
    'versions',
  ] as const);

  /**
   * Lists all deployed versions of a workflow.
   */
  list(
    workflowName: string,
    params: VersionListParams,
    options?: RequestOptions,
  ): PagePromise<VersionListResponsesV4PagePaginationArray, VersionListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/workflows/${workflowName}/versions`,
      V4PagePaginationArray<VersionListResponse>,
      { query, ...options },
    );
  }

  /**
   * Retrieves details for a specific deployed workflow version.
   */
  get(versionID: string, params: VersionGetParams, options?: RequestOptions): APIPromise<VersionGetResponse> {
    const { account_id, workflow_name } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/workflows/${workflow_name}/versions/${versionID}`,
        options,
      ) as APIPromise<{ result: VersionGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the graph visualization of a workflow version.
   */
  graph(
    versionID: string,
    params: VersionGraphParams,
    options?: RequestOptions,
  ): APIPromise<VersionGraphResponse> {
    const { account_id, workflow_name } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/workflows/${workflow_name}/versions/${versionID}/graph`,
        options,
      ) as APIPromise<{ result: VersionGraphResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Versions extends BaseVersions {}

export type VersionListResponsesV4PagePaginationArray = V4PagePaginationArray<VersionListResponse>;

export interface VersionListResponse {
  id: string;

  class_name: string;

  created_on: string;

  has_dag: boolean;

  /**
   * The programming language of the workflow implementation
   */
  language: 'javascript' | 'python';

  modified_on: string;

  workflow_id: string;

  limits?: VersionListResponse.Limits;
}

export namespace VersionListResponse {
  export interface Limits {
    steps?: number;
  }
}

export interface VersionGetResponse {
  id: string;

  class_name: string;

  created_on: string;

  has_dag: boolean;

  /**
   * The programming language of the workflow implementation
   */
  language: 'javascript' | 'python';

  modified_on: string;

  workflow_id: string;

  limits?: VersionGetResponse.Limits;
}

export namespace VersionGetResponse {
  export interface Limits {
    steps?: number;
  }
}

export interface VersionGraphResponse {
  id: string;

  class_name: string;

  created_on: string;

  /**
   * Versioned workflow graph payload.
   */
  graph: VersionGraphResponse.Graph | null;

  modified_on: string;

  workflow_id: string;
}

export namespace VersionGraphResponse {
  /**
   * Versioned workflow graph payload.
   */
  export interface Graph {
    version: number;

    /**
     * A parsed workflow entrypoint with its step graph.
     */
    workflow: Graph.Workflow;
  }

  export namespace Graph {
    /**
     * A parsed workflow entrypoint with its step graph.
     */
    export interface Workflow {
      class_name: string;

      functions: { [key: string]: Workflow.Functions };

      nodes: Array<
        | Workflow.UnionMember0
        | Workflow.UnionMember1
        | Workflow.UnionMember2
        | Workflow.UnionMember3
        | Workflow.UnionMember4
        | Workflow.UnionMember5
        | Workflow.UnionMember6
        | Workflow.UnionMember7
        | Workflow.UnionMember8
        | Workflow.UnionMember9
        | Workflow.UnionMember10
        | Workflow.UnionMember11
        | Workflow.UnionMember12
        | Workflow.UnionMember13
      >;

      /**
       * Shape descriptor for JSON payloads.
       */
      payload?: Workflow.Type | Workflow.UnionMember1;
    }

    export namespace Workflow {
      export interface Functions {
        name: string;

        /**
         * Child nodes (recursive).
         */
        nodes: Array<unknown>;

        type: 'function_def';
      }

      export interface UnionMember0 {
        /**
         * Duration as milliseconds (number) or human-readable string.
         */
        duration: number | string;

        name: string;

        type: 'step_sleep';

        resolves?: number;

        starts?: number;
      }

      export interface UnionMember1 {
        /**
         * Configuration for a step (retries and timeout).
         */
        config: UnionMember1.Config;

        name: string;

        /**
         * Child nodes (recursive).
         */
        nodes: Array<unknown>;

        type: 'step_do';

        resolves?: number;

        starts?: number;
      }

      export namespace UnionMember1 {
        /**
         * Configuration for a step (retries and timeout).
         */
        export interface Config {
          /**
           * Retry policy for a step.
           */
          retries: Config.Retries;

          /**
           * Duration as milliseconds (number) or human-readable string.
           */
          timeout: number | string;
        }

        export namespace Config {
          /**
           * Retry policy for a step.
           */
          export interface Retries {
            /**
             * Backoff strategy for step retries.
             */
            backoff: 'constant' | 'linear' | 'exponential';

            /**
             * Duration as milliseconds (number) or human-readable string.
             */
            delay: number | string;

            limit: number;
          }
        }
      }

      export interface UnionMember2 {
        name: string;

        /**
         * Options for a waitForEvent step.
         */
        options: UnionMember2.Options | null;

        type: 'step_wait_for_event';

        /**
         * Shape descriptor for JSON payloads.
         */
        payload?: UnionMember2.Type | UnionMember2.UnionMember1;

        resolves?: number;

        starts?: number;
      }

      export namespace UnionMember2 {
        /**
         * Options for a waitForEvent step.
         */
        export interface Options {
          event_type: string;

          /**
           * Duration as milliseconds (number) or human-readable string.
           */
          timeout: number | string;
        }

        export interface Type {
          type: 'unknown';
        }

        export interface UnionMember1 {
          /**
           * Nested JsonShape fields (recursive structure).
           */
          fields: { [key: string]: unknown };

          type: 'object';
        }
      }

      export interface UnionMember3 {
        name: string;

        timestamp: string;

        type: 'step_sleep_until';

        resolves?: number;

        starts?: number;
      }

      export interface UnionMember4 {
        /**
         * Child nodes (recursive).
         */
        nodes: Array<unknown>;

        type: 'loop';
      }

      export interface UnionMember5 {
        /**
         * Parallel execution strategy.
         */
        kind: 'all' | 'any' | 'all_settled' | 'race';

        /**
         * Child nodes (recursive).
         */
        nodes: Array<unknown>;

        type: 'parallel';
      }

      export interface UnionMember6 {
        catch_block: UnionMember6.CatchBlock | null;

        finally_block: UnionMember6.FinallyBlock | null;

        try_block: UnionMember6.TryBlock | null;

        type: 'try';
      }

      export namespace UnionMember6 {
        export interface CatchBlock {
          /**
           * Child nodes (recursive).
           */
          nodes: Array<unknown>;

          type: 'block';
        }

        export interface FinallyBlock {
          /**
           * Child nodes (recursive).
           */
          nodes: Array<unknown>;

          type: 'block';
        }

        export interface TryBlock {
          /**
           * Child nodes (recursive).
           */
          nodes: Array<unknown>;

          type: 'block';
        }
      }

      export interface UnionMember7 {
        /**
         * Child nodes (recursive).
         */
        nodes: Array<unknown>;

        type: 'block';
      }

      export interface UnionMember8 {
        branches: Array<UnionMember8.Branch>;

        type: 'if';
      }

      export namespace UnionMember8 {
        export interface Branch {
          condition: string | null;

          /**
           * Child nodes (recursive).
           */
          nodes: Array<unknown>;
        }
      }

      export interface UnionMember9 {
        branches: Array<UnionMember9.Branch>;

        discriminant: string;

        type: 'switch';
      }

      export namespace UnionMember9 {
        export interface Branch {
          condition: string | null;

          /**
           * Child nodes (recursive).
           */
          nodes: Array<unknown>;
        }
      }

      export interface UnionMember10 {
        class_name: string;

        functions: { [key: string]: UnionMember10.Functions };

        /**
         * Child nodes (recursive).
         */
        nodes: Array<unknown>;

        type: 'start';

        /**
         * Shape descriptor for JSON payloads.
         */
        payload?: UnionMember10.Type | UnionMember10.UnionMember1;
      }

      export namespace UnionMember10 {
        export interface Functions {
          name: string;

          /**
           * Child nodes (recursive).
           */
          nodes: Array<unknown>;

          type: 'function_def';
        }

        export interface Type {
          type: 'unknown';
        }

        export interface UnionMember1 {
          /**
           * Nested JsonShape fields (recursive structure).
           */
          fields: { [key: string]: unknown };

          type: 'object';
        }
      }

      export interface UnionMember11 {
        name: string;

        type: 'function_call';

        resolves?: number;

        starts?: number;
      }

      export interface UnionMember12 {
        name: string;

        /**
         * Child nodes (recursive).
         */
        nodes: Array<unknown>;

        type: 'function_def';
      }

      export interface UnionMember13 {
        /**
         * Break or return from a loop.
         */
        kind: 'break' | 'return';

        type: 'break';
      }

      export interface Type {
        type: 'unknown';
      }

      export interface UnionMember1 {
        /**
         * Nested JsonShape fields (recursive structure).
         */
        fields: { [key: string]: unknown };

        type: 'object';
      }
    }
  }
}

export interface VersionListParams extends V4PagePaginationArrayParams {
  /**
   * Path param
   */
  account_id: string;
}

export interface VersionGetParams {
  account_id: string;

  workflow_name: string;
}

export interface VersionGraphParams {
  account_id: string;

  workflow_name: string;
}

export declare namespace Versions {
  export {
    type VersionListResponse as VersionListResponse,
    type VersionGetResponse as VersionGetResponse,
    type VersionGraphResponse as VersionGraphResponse,
    type VersionListResponsesV4PagePaginationArray as VersionListResponsesV4PagePaginationArray,
    type VersionListParams as VersionListParams,
    type VersionGetParams as VersionGetParams,
    type VersionGraphParams as VersionGraphParams,
  };
}
