// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as ChangelogAPI from './changelog';
import {
  Changelog,
  ChangelogListParams,
  ChangelogListResponse,
  ChangelogListResponsesCursorPaginationAfter,
} from './changelog';
import { CursorPaginationAfter, type CursorPaginationAfterParams } from '../../../../pagination';

export class Flags extends APIResource {
  changelog: ChangelogAPI.Changelog = new ChangelogAPI.Changelog(this._client);

  /**
   * Creates a flag. Returns 409 if the key already exists. `type` is inferred from
   * variation values and may be omitted.
   */
  create(
    appId: string,
    params: FlagCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FlagCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/flagship/apps/${appId}/flags`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: FlagCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Replaces the entire flag definition. Omitted fields are dropped, not preserved —
   * read before writing. Each update appends a changelog entry.
   */
  update(
    appId: string,
    flagKey: string,
    params: FlagUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FlagUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/flagship/apps/${appId}/flags/${flagKey}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: FlagUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists an app's flags ordered by key. Pass `cursor` from `result_info` to page
   * forward; a null cursor indicates the last page.
   */
  list(
    appId: string,
    params: FlagListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<FlagListResponsesCursorPaginationAfter, FlagListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/flagship/apps/${appId}/flags`,
      FlagListResponsesCursorPaginationAfter,
      { query, ...options },
    );
  }

  /**
   * Permanently deletes a flag. Subsequent evaluations fall back to the
   * caller-supplied default. Cannot be undone.
   */
  delete(
    appId: string,
    flagKey: string,
    params: FlagDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FlagDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/flagship/apps/${appId}/flags/${flagKey}`,
        options,
      ) as Core.APIPromise<{ result: FlagDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns the full flag definition including rules, variations, and audit fields.
   */
  get(
    appId: string,
    flagKey: string,
    params: FlagGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FlagGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/flagship/apps/${appId}/flags/${flagKey}`,
        options,
      ) as Core.APIPromise<{ result: FlagGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class FlagListResponsesCursorPaginationAfter extends CursorPaginationAfter<FlagListResponse> {}

export interface FlagCreateResponse {
  /**
   * Variation served when no rule matches or the flag is disabled. Must be a key in
   * `variations`.
   */
  default_variation: string;

  /**
   * When false, the flag bypasses all rules and always serves `default_variation`.
   */
  enabled: boolean;

  /**
   * Unique identifier for the flag within an app. Used in all evaluation and SDK
   * calls.
   */
  key: string;

  /**
   * Targeting rules evaluated in ascending `priority`; the first matching rule wins.
   * An empty array means the flag always serves `default_variation`.
   */
  rules: Array<FlagCreateResponse.Rule>;

  /**
   * Map of variation name to value. All values must be the same type (boolean,
   * string, number, or JSON object/array). Each serialized value must be 10KB or
   * smaller.
   */
  variations: {
    [key: string]: string | null | number | boolean | { [key: string]: unknown } | Array<unknown>;
  };

  description?: string | null;

  /**
   * Value type of the flag's variations. Inferred from the variation values on
   * write, so it may be omitted in requests.
   */
  type?: 'boolean' | 'string' | 'number' | 'json';

  updated_at?: string;

  updated_by?: string;
}

export namespace FlagCreateResponse {
  export interface Rule {
    /**
     * Conditions the context must satisfy for this rule to match. An empty array
     * matches all contexts.
     */
    conditions: Array<Rule.UnionMember0 | Rule.UnionMember1>;

    /**
     * Evaluation order; lower numbers are evaluated first. Must be unique across the
     * flag's rules.
     */
    priority: number;

    /**
     * Variation served when this rule matches. Must be a key in `variations`.
     */
    serve_variation: string;

    rollout?: Rule.Rollout;
  }

  export namespace Rule {
    export interface UnionMember0 {
      attribute: string;

      operator:
        | 'equals'
        | 'not_equals'
        | 'greater_than'
        | 'less_than'
        | 'greater_than_or_equals'
        | 'less_than_or_equals'
        | 'contains'
        | 'starts_with'
        | 'ends_with'
        | 'in'
        | 'not_in';

      /**
       * Value to compare against the context attribute. Must be an array for `in` and
       * `not_in`; numeric and ISO-8601 datetime strings are accepted by the ordering
       * operators.
       */
      value: unknown;
    }

    export interface UnionMember1 {
      clauses: Array<UnionMember1.UnionMember0 | UnionMember1.UnionMember1>;

      logical_operator: 'AND' | 'OR';
    }

    export namespace UnionMember1 {
      export interface UnionMember0 {
        attribute: string;

        operator:
          | 'equals'
          | 'not_equals'
          | 'greater_than'
          | 'less_than'
          | 'greater_than_or_equals'
          | 'less_than_or_equals'
          | 'contains'
          | 'starts_with'
          | 'ends_with'
          | 'in'
          | 'not_in';

        /**
         * Value to compare against the context attribute. Must be an array for `in` and
         * `not_in`; numeric and ISO-8601 datetime strings are accepted by the ordering
         * operators.
         */
        value: unknown;
      }

      export interface UnionMember1 {
        clauses: Array<UnionMember1.UnionMember0 | UnionMember1.UnionMember1>;

        logical_operator: 'AND' | 'OR';
      }

      export namespace UnionMember1 {
        export interface UnionMember0 {
          attribute: string;

          operator:
            | 'equals'
            | 'not_equals'
            | 'greater_than'
            | 'less_than'
            | 'greater_than_or_equals'
            | 'less_than_or_equals'
            | 'contains'
            | 'starts_with'
            | 'ends_with'
            | 'in'
            | 'not_in';

          /**
           * Value to compare against the context attribute. Must be an array for `in` and
           * `not_in`; numeric and ISO-8601 datetime strings are accepted by the ordering
           * operators.
           */
          value: unknown;
        }

        export interface UnionMember1 {
          clauses: Array<UnionMember1.UnionMember0 | UnionMember1.UnionMember1>;

          logical_operator: 'AND' | 'OR';
        }

        export namespace UnionMember1 {
          export interface UnionMember0 {
            attribute: string;

            operator:
              | 'equals'
              | 'not_equals'
              | 'greater_than'
              | 'less_than'
              | 'greater_than_or_equals'
              | 'less_than_or_equals'
              | 'contains'
              | 'starts_with'
              | 'ends_with'
              | 'in'
              | 'not_in';

            /**
             * Value to compare against the context attribute. Must be an array for `in` and
             * `not_in`; numeric and ISO-8601 datetime strings are accepted by the ordering
             * operators.
             */
            value: unknown;
          }

          export interface UnionMember1 {
            clauses: Array<UnionMember1.UnionMember0 | UnionMember1.UnionMember1>;

            logical_operator: 'AND' | 'OR';
          }

          export namespace UnionMember1 {
            export interface UnionMember0 {
              attribute: string;

              operator:
                | 'equals'
                | 'not_equals'
                | 'greater_than'
                | 'less_than'
                | 'greater_than_or_equals'
                | 'less_than_or_equals'
                | 'contains'
                | 'starts_with'
                | 'ends_with'
                | 'in'
                | 'not_in';

              /**
               * Value to compare against the context attribute. Must be an array for `in` and
               * `not_in`; numeric and ISO-8601 datetime strings are accepted by the ordering
               * operators.
               */
              value: unknown;
            }

            export interface UnionMember1 {
              clauses: Array<UnionMember1.UnionMember0 | UnionMember1.UnionMember1>;

              logical_operator: 'AND' | 'OR';
            }

            export namespace UnionMember1 {
              export interface UnionMember0 {
                attribute: string;

                operator:
                  | 'equals'
                  | 'not_equals'
                  | 'greater_than'
                  | 'less_than'
                  | 'greater_than_or_equals'
                  | 'less_than_or_equals'
                  | 'contains'
                  | 'starts_with'
                  | 'ends_with'
                  | 'in'
                  | 'not_in';

                /**
                 * Value to compare against the context attribute. Must be an array for `in` and
                 * `not_in`; numeric and ISO-8601 datetime strings are accepted by the ordering
                 * operators.
                 */
                value: unknown;
              }

              export interface UnionMember1 {
                clauses: Array<
                  string | null | number | boolean | { [key: string]: unknown } | Array<unknown>
                >;

                logical_operator: 'AND' | 'OR';
              }
            }
          }
        }
      }
    }

    export interface Rollout {
      /**
       * Percentage of matching traffic (0–100) served this variation. For multi-way
       * splits, use cumulative upper bounds across rules (e.g. 30, 70, 100).
       */
      percentage: number;

      /**
       * Context attribute used for sticky bucketing. Defaults to `targetingKey`. If
       * absent at evaluation time, bucketing is random per request.
       */
      attribute?: string;
    }
  }
}

export interface FlagUpdateResponse {
  /**
   * Variation served when no rule matches or the flag is disabled. Must be a key in
   * `variations`.
   */
  default_variation: string;

  /**
   * When false, the flag bypasses all rules and always serves `default_variation`.
   */
  enabled: boolean;

  /**
   * Unique identifier for the flag within an app. Used in all evaluation and SDK
   * calls.
   */
  key: string;

  /**
   * Targeting rules evaluated in ascending `priority`; the first matching rule wins.
   * An empty array means the flag always serves `default_variation`.
   */
  rules: Array<FlagUpdateResponse.Rule>;

  /**
   * Map of variation name to value. All values must be the same type (boolean,
   * string, number, or JSON object/array). Each serialized value must be 10KB or
   * smaller.
   */
  variations: {
    [key: string]: string | null | number | boolean | { [key: string]: unknown } | Array<unknown>;
  };

  description?: string | null;

  /**
   * Value type of the flag's variations. Inferred from the variation values on
   * write, so it may be omitted in requests.
   */
  type?: 'boolean' | 'string' | 'number' | 'json';

  updated_at?: string;

  updated_by?: string;
}

export namespace FlagUpdateResponse {
  export interface Rule {
    /**
     * Conditions the context must satisfy for this rule to match. An empty array
     * matches all contexts.
     */
    conditions: Array<Rule.UnionMember0 | Rule.UnionMember1>;

    /**
     * Evaluation order; lower numbers are evaluated first. Must be unique across the
     * flag's rules.
     */
    priority: number;

    /**
     * Variation served when this rule matches. Must be a key in `variations`.
     */
    serve_variation: string;

    rollout?: Rule.Rollout;
  }

  export namespace Rule {
    export interface UnionMember0 {
      attribute: string;

      operator:
        | 'equals'
        | 'not_equals'
        | 'greater_than'
        | 'less_than'
        | 'greater_than_or_equals'
        | 'less_than_or_equals'
        | 'contains'
        | 'starts_with'
        | 'ends_with'
        | 'in'
        | 'not_in';

      /**
       * Value to compare against the context attribute. Must be an array for `in` and
       * `not_in`; numeric and ISO-8601 datetime strings are accepted by the ordering
       * operators.
       */
      value: unknown;
    }

    export interface UnionMember1 {
      clauses: Array<UnionMember1.UnionMember0 | UnionMember1.UnionMember1>;

      logical_operator: 'AND' | 'OR';
    }

    export namespace UnionMember1 {
      export interface UnionMember0 {
        attribute: string;

        operator:
          | 'equals'
          | 'not_equals'
          | 'greater_than'
          | 'less_than'
          | 'greater_than_or_equals'
          | 'less_than_or_equals'
          | 'contains'
          | 'starts_with'
          | 'ends_with'
          | 'in'
          | 'not_in';

        /**
         * Value to compare against the context attribute. Must be an array for `in` and
         * `not_in`; numeric and ISO-8601 datetime strings are accepted by the ordering
         * operators.
         */
        value: unknown;
      }

      export interface UnionMember1 {
        clauses: Array<UnionMember1.UnionMember0 | UnionMember1.UnionMember1>;

        logical_operator: 'AND' | 'OR';
      }

      export namespace UnionMember1 {
        export interface UnionMember0 {
          attribute: string;

          operator:
            | 'equals'
            | 'not_equals'
            | 'greater_than'
            | 'less_than'
            | 'greater_than_or_equals'
            | 'less_than_or_equals'
            | 'contains'
            | 'starts_with'
            | 'ends_with'
            | 'in'
            | 'not_in';

          /**
           * Value to compare against the context attribute. Must be an array for `in` and
           * `not_in`; numeric and ISO-8601 datetime strings are accepted by the ordering
           * operators.
           */
          value: unknown;
        }

        export interface UnionMember1 {
          clauses: Array<UnionMember1.UnionMember0 | UnionMember1.UnionMember1>;

          logical_operator: 'AND' | 'OR';
        }

        export namespace UnionMember1 {
          export interface UnionMember0 {
            attribute: string;

            operator:
              | 'equals'
              | 'not_equals'
              | 'greater_than'
              | 'less_than'
              | 'greater_than_or_equals'
              | 'less_than_or_equals'
              | 'contains'
              | 'starts_with'
              | 'ends_with'
              | 'in'
              | 'not_in';

            /**
             * Value to compare against the context attribute. Must be an array for `in` and
             * `not_in`; numeric and ISO-8601 datetime strings are accepted by the ordering
             * operators.
             */
            value: unknown;
          }

          export interface UnionMember1 {
            clauses: Array<UnionMember1.UnionMember0 | UnionMember1.UnionMember1>;

            logical_operator: 'AND' | 'OR';
          }

          export namespace UnionMember1 {
            export interface UnionMember0 {
              attribute: string;

              operator:
                | 'equals'
                | 'not_equals'
                | 'greater_than'
                | 'less_than'
                | 'greater_than_or_equals'
                | 'less_than_or_equals'
                | 'contains'
                | 'starts_with'
                | 'ends_with'
                | 'in'
                | 'not_in';

              /**
               * Value to compare against the context attribute. Must be an array for `in` and
               * `not_in`; numeric and ISO-8601 datetime strings are accepted by the ordering
               * operators.
               */
              value: unknown;
            }

            export interface UnionMember1 {
              clauses: Array<UnionMember1.UnionMember0 | UnionMember1.UnionMember1>;

              logical_operator: 'AND' | 'OR';
            }

            export namespace UnionMember1 {
              export interface UnionMember0 {
                attribute: string;

                operator:
                  | 'equals'
                  | 'not_equals'
                  | 'greater_than'
                  | 'less_than'
                  | 'greater_than_or_equals'
                  | 'less_than_or_equals'
                  | 'contains'
                  | 'starts_with'
                  | 'ends_with'
                  | 'in'
                  | 'not_in';

                /**
                 * Value to compare against the context attribute. Must be an array for `in` and
                 * `not_in`; numeric and ISO-8601 datetime strings are accepted by the ordering
                 * operators.
                 */
                value: unknown;
              }

              export interface UnionMember1 {
                clauses: Array<
                  string | null | number | boolean | { [key: string]: unknown } | Array<unknown>
                >;

                logical_operator: 'AND' | 'OR';
              }
            }
          }
        }
      }
    }

    export interface Rollout {
      /**
       * Percentage of matching traffic (0–100) served this variation. For multi-way
       * splits, use cumulative upper bounds across rules (e.g. 30, 70, 100).
       */
      percentage: number;

      /**
       * Context attribute used for sticky bucketing. Defaults to `targetingKey`. If
       * absent at evaluation time, bucketing is random per request.
       */
      attribute?: string;
    }
  }
}

export interface FlagListResponse {
  /**
   * Variation served when no rule matches or the flag is disabled. Must be a key in
   * `variations`.
   */
  default_variation: string;

  /**
   * When false, the flag bypasses all rules and always serves `default_variation`.
   */
  enabled: boolean;

  /**
   * Unique identifier for the flag within an app. Used in all evaluation and SDK
   * calls.
   */
  key: string;

  /**
   * Targeting rules evaluated in ascending `priority`; the first matching rule wins.
   * An empty array means the flag always serves `default_variation`.
   */
  rules: Array<FlagListResponse.Rule>;

  /**
   * Map of variation name to value. All values must be the same type (boolean,
   * string, number, or JSON object/array). Each serialized value must be 10KB or
   * smaller.
   */
  variations: {
    [key: string]: string | null | number | boolean | { [key: string]: unknown } | Array<unknown>;
  };

  description?: string | null;

  /**
   * Value type of the flag's variations. Inferred from the variation values on
   * write, so it may be omitted in requests.
   */
  type?: 'boolean' | 'string' | 'number' | 'json';

  updated_at?: string;

  updated_by?: string;
}

export namespace FlagListResponse {
  export interface Rule {
    /**
     * Conditions the context must satisfy for this rule to match. An empty array
     * matches all contexts.
     */
    conditions: Array<Rule.UnionMember0 | Rule.UnionMember1>;

    /**
     * Evaluation order; lower numbers are evaluated first. Must be unique across the
     * flag's rules.
     */
    priority: number;

    /**
     * Variation served when this rule matches. Must be a key in `variations`.
     */
    serve_variation: string;

    rollout?: Rule.Rollout;
  }

  export namespace Rule {
    export interface UnionMember0 {
      attribute: string;

      operator:
        | 'equals'
        | 'not_equals'
        | 'greater_than'
        | 'less_than'
        | 'greater_than_or_equals'
        | 'less_than_or_equals'
        | 'contains'
        | 'starts_with'
        | 'ends_with'
        | 'in'
        | 'not_in';

      /**
       * Value to compare against the context attribute. Must be an array for `in` and
       * `not_in`; numeric and ISO-8601 datetime strings are accepted by the ordering
       * operators.
       */
      value: unknown;
    }

    export interface UnionMember1 {
      clauses: Array<UnionMember1.UnionMember0 | UnionMember1.UnionMember1>;

      logical_operator: 'AND' | 'OR';
    }

    export namespace UnionMember1 {
      export interface UnionMember0 {
        attribute: string;

        operator:
          | 'equals'
          | 'not_equals'
          | 'greater_than'
          | 'less_than'
          | 'greater_than_or_equals'
          | 'less_than_or_equals'
          | 'contains'
          | 'starts_with'
          | 'ends_with'
          | 'in'
          | 'not_in';

        /**
         * Value to compare against the context attribute. Must be an array for `in` and
         * `not_in`; numeric and ISO-8601 datetime strings are accepted by the ordering
         * operators.
         */
        value: unknown;
      }

      export interface UnionMember1 {
        clauses: Array<UnionMember1.UnionMember0 | UnionMember1.UnionMember1>;

        logical_operator: 'AND' | 'OR';
      }

      export namespace UnionMember1 {
        export interface UnionMember0 {
          attribute: string;

          operator:
            | 'equals'
            | 'not_equals'
            | 'greater_than'
            | 'less_than'
            | 'greater_than_or_equals'
            | 'less_than_or_equals'
            | 'contains'
            | 'starts_with'
            | 'ends_with'
            | 'in'
            | 'not_in';

          /**
           * Value to compare against the context attribute. Must be an array for `in` and
           * `not_in`; numeric and ISO-8601 datetime strings are accepted by the ordering
           * operators.
           */
          value: unknown;
        }

        export interface UnionMember1 {
          clauses: Array<UnionMember1.UnionMember0 | UnionMember1.UnionMember1>;

          logical_operator: 'AND' | 'OR';
        }

        export namespace UnionMember1 {
          export interface UnionMember0 {
            attribute: string;

            operator:
              | 'equals'
              | 'not_equals'
              | 'greater_than'
              | 'less_than'
              | 'greater_than_or_equals'
              | 'less_than_or_equals'
              | 'contains'
              | 'starts_with'
              | 'ends_with'
              | 'in'
              | 'not_in';

            /**
             * Value to compare against the context attribute. Must be an array for `in` and
             * `not_in`; numeric and ISO-8601 datetime strings are accepted by the ordering
             * operators.
             */
            value: unknown;
          }

          export interface UnionMember1 {
            clauses: Array<UnionMember1.UnionMember0 | UnionMember1.UnionMember1>;

            logical_operator: 'AND' | 'OR';
          }

          export namespace UnionMember1 {
            export interface UnionMember0 {
              attribute: string;

              operator:
                | 'equals'
                | 'not_equals'
                | 'greater_than'
                | 'less_than'
                | 'greater_than_or_equals'
                | 'less_than_or_equals'
                | 'contains'
                | 'starts_with'
                | 'ends_with'
                | 'in'
                | 'not_in';

              /**
               * Value to compare against the context attribute. Must be an array for `in` and
               * `not_in`; numeric and ISO-8601 datetime strings are accepted by the ordering
               * operators.
               */
              value: unknown;
            }

            export interface UnionMember1 {
              clauses: Array<UnionMember1.UnionMember0 | UnionMember1.UnionMember1>;

              logical_operator: 'AND' | 'OR';
            }

            export namespace UnionMember1 {
              export interface UnionMember0 {
                attribute: string;

                operator:
                  | 'equals'
                  | 'not_equals'
                  | 'greater_than'
                  | 'less_than'
                  | 'greater_than_or_equals'
                  | 'less_than_or_equals'
                  | 'contains'
                  | 'starts_with'
                  | 'ends_with'
                  | 'in'
                  | 'not_in';

                /**
                 * Value to compare against the context attribute. Must be an array for `in` and
                 * `not_in`; numeric and ISO-8601 datetime strings are accepted by the ordering
                 * operators.
                 */
                value: unknown;
              }

              export interface UnionMember1 {
                clauses: Array<
                  string | null | number | boolean | { [key: string]: unknown } | Array<unknown>
                >;

                logical_operator: 'AND' | 'OR';
              }
            }
          }
        }
      }
    }

    export interface Rollout {
      /**
       * Percentage of matching traffic (0–100) served this variation. For multi-way
       * splits, use cumulative upper bounds across rules (e.g. 30, 70, 100).
       */
      percentage: number;

      /**
       * Context attribute used for sticky bucketing. Defaults to `targetingKey`. If
       * absent at evaluation time, bucketing is random per request.
       */
      attribute?: string;
    }
  }
}

export interface FlagDeleteResponse {
  key: string;
}

export interface FlagGetResponse {
  /**
   * Variation served when no rule matches or the flag is disabled. Must be a key in
   * `variations`.
   */
  default_variation: string;

  /**
   * When false, the flag bypasses all rules and always serves `default_variation`.
   */
  enabled: boolean;

  /**
   * Unique identifier for the flag within an app. Used in all evaluation and SDK
   * calls.
   */
  key: string;

  /**
   * Targeting rules evaluated in ascending `priority`; the first matching rule wins.
   * An empty array means the flag always serves `default_variation`.
   */
  rules: Array<FlagGetResponse.Rule>;

  /**
   * Map of variation name to value. All values must be the same type (boolean,
   * string, number, or JSON object/array). Each serialized value must be 10KB or
   * smaller.
   */
  variations: {
    [key: string]: string | null | number | boolean | { [key: string]: unknown } | Array<unknown>;
  };

  description?: string | null;

  /**
   * Value type of the flag's variations. Inferred from the variation values on
   * write, so it may be omitted in requests.
   */
  type?: 'boolean' | 'string' | 'number' | 'json';

  updated_at?: string;

  updated_by?: string;
}

export namespace FlagGetResponse {
  export interface Rule {
    /**
     * Conditions the context must satisfy for this rule to match. An empty array
     * matches all contexts.
     */
    conditions: Array<Rule.UnionMember0 | Rule.UnionMember1>;

    /**
     * Evaluation order; lower numbers are evaluated first. Must be unique across the
     * flag's rules.
     */
    priority: number;

    /**
     * Variation served when this rule matches. Must be a key in `variations`.
     */
    serve_variation: string;

    rollout?: Rule.Rollout;
  }

  export namespace Rule {
    export interface UnionMember0 {
      attribute: string;

      operator:
        | 'equals'
        | 'not_equals'
        | 'greater_than'
        | 'less_than'
        | 'greater_than_or_equals'
        | 'less_than_or_equals'
        | 'contains'
        | 'starts_with'
        | 'ends_with'
        | 'in'
        | 'not_in';

      /**
       * Value to compare against the context attribute. Must be an array for `in` and
       * `not_in`; numeric and ISO-8601 datetime strings are accepted by the ordering
       * operators.
       */
      value: unknown;
    }

    export interface UnionMember1 {
      clauses: Array<UnionMember1.UnionMember0 | UnionMember1.UnionMember1>;

      logical_operator: 'AND' | 'OR';
    }

    export namespace UnionMember1 {
      export interface UnionMember0 {
        attribute: string;

        operator:
          | 'equals'
          | 'not_equals'
          | 'greater_than'
          | 'less_than'
          | 'greater_than_or_equals'
          | 'less_than_or_equals'
          | 'contains'
          | 'starts_with'
          | 'ends_with'
          | 'in'
          | 'not_in';

        /**
         * Value to compare against the context attribute. Must be an array for `in` and
         * `not_in`; numeric and ISO-8601 datetime strings are accepted by the ordering
         * operators.
         */
        value: unknown;
      }

      export interface UnionMember1 {
        clauses: Array<UnionMember1.UnionMember0 | UnionMember1.UnionMember1>;

        logical_operator: 'AND' | 'OR';
      }

      export namespace UnionMember1 {
        export interface UnionMember0 {
          attribute: string;

          operator:
            | 'equals'
            | 'not_equals'
            | 'greater_than'
            | 'less_than'
            | 'greater_than_or_equals'
            | 'less_than_or_equals'
            | 'contains'
            | 'starts_with'
            | 'ends_with'
            | 'in'
            | 'not_in';

          /**
           * Value to compare against the context attribute. Must be an array for `in` and
           * `not_in`; numeric and ISO-8601 datetime strings are accepted by the ordering
           * operators.
           */
          value: unknown;
        }

        export interface UnionMember1 {
          clauses: Array<UnionMember1.UnionMember0 | UnionMember1.UnionMember1>;

          logical_operator: 'AND' | 'OR';
        }

        export namespace UnionMember1 {
          export interface UnionMember0 {
            attribute: string;

            operator:
              | 'equals'
              | 'not_equals'
              | 'greater_than'
              | 'less_than'
              | 'greater_than_or_equals'
              | 'less_than_or_equals'
              | 'contains'
              | 'starts_with'
              | 'ends_with'
              | 'in'
              | 'not_in';

            /**
             * Value to compare against the context attribute. Must be an array for `in` and
             * `not_in`; numeric and ISO-8601 datetime strings are accepted by the ordering
             * operators.
             */
            value: unknown;
          }

          export interface UnionMember1 {
            clauses: Array<UnionMember1.UnionMember0 | UnionMember1.UnionMember1>;

            logical_operator: 'AND' | 'OR';
          }

          export namespace UnionMember1 {
            export interface UnionMember0 {
              attribute: string;

              operator:
                | 'equals'
                | 'not_equals'
                | 'greater_than'
                | 'less_than'
                | 'greater_than_or_equals'
                | 'less_than_or_equals'
                | 'contains'
                | 'starts_with'
                | 'ends_with'
                | 'in'
                | 'not_in';

              /**
               * Value to compare against the context attribute. Must be an array for `in` and
               * `not_in`; numeric and ISO-8601 datetime strings are accepted by the ordering
               * operators.
               */
              value: unknown;
            }

            export interface UnionMember1 {
              clauses: Array<UnionMember1.UnionMember0 | UnionMember1.UnionMember1>;

              logical_operator: 'AND' | 'OR';
            }

            export namespace UnionMember1 {
              export interface UnionMember0 {
                attribute: string;

                operator:
                  | 'equals'
                  | 'not_equals'
                  | 'greater_than'
                  | 'less_than'
                  | 'greater_than_or_equals'
                  | 'less_than_or_equals'
                  | 'contains'
                  | 'starts_with'
                  | 'ends_with'
                  | 'in'
                  | 'not_in';

                /**
                 * Value to compare against the context attribute. Must be an array for `in` and
                 * `not_in`; numeric and ISO-8601 datetime strings are accepted by the ordering
                 * operators.
                 */
                value: unknown;
              }

              export interface UnionMember1 {
                clauses: Array<
                  string | null | number | boolean | { [key: string]: unknown } | Array<unknown>
                >;

                logical_operator: 'AND' | 'OR';
              }
            }
          }
        }
      }
    }

    export interface Rollout {
      /**
       * Percentage of matching traffic (0–100) served this variation. For multi-way
       * splits, use cumulative upper bounds across rules (e.g. 30, 70, 100).
       */
      percentage: number;

      /**
       * Context attribute used for sticky bucketing. Defaults to `targetingKey`. If
       * absent at evaluation time, bucketing is random per request.
       */
      attribute?: string;
    }
  }
}

export interface FlagCreateParams {
  /**
   * Path param: Cloudflare account ID.
   */
  account_id: string;

  /**
   * Body param: Variation served when no rule matches or the flag is disabled. Must
   * be a key in `variations`.
   */
  default_variation: string;

  /**
   * Body param: When false, the flag bypasses all rules and always serves
   * `default_variation`.
   */
  enabled: boolean;

  /**
   * Body param: Unique identifier for the flag within an app. Used in all evaluation
   * and SDK calls.
   */
  key: string;

  /**
   * Body param: Targeting rules evaluated in ascending `priority`; the first
   * matching rule wins. An empty array means the flag always serves
   * `default_variation`.
   */
  rules: Array<FlagCreateParams.Rule>;

  /**
   * Body param: Map of variation name to value. All values must be the same type
   * (boolean, string, number, or JSON object/array). Each serialized value must be
   * 10KB or smaller.
   */
  variations: {
    [key: string]: string | null | number | boolean | { [key: string]: unknown } | Array<unknown>;
  };

  /**
   * Body param
   */
  description?: string | null;

  /**
   * Body param: Value type of the flag's variations. Inferred from the variation
   * values on write, so it may be omitted in requests.
   */
  type?: 'boolean' | 'string' | 'number' | 'json';
}

export namespace FlagCreateParams {
  export interface Rule {
    /**
     * Conditions the context must satisfy for this rule to match. An empty array
     * matches all contexts.
     */
    conditions: Array<Rule.UnionMember0 | Rule.UnionMember1>;

    /**
     * Evaluation order; lower numbers are evaluated first. Must be unique across the
     * flag's rules.
     */
    priority: number;

    /**
     * Variation served when this rule matches. Must be a key in `variations`.
     */
    serve_variation: string;

    rollout?: Rule.Rollout;
  }

  export namespace Rule {
    export interface UnionMember0 {
      attribute: string;

      operator:
        | 'equals'
        | 'not_equals'
        | 'greater_than'
        | 'less_than'
        | 'greater_than_or_equals'
        | 'less_than_or_equals'
        | 'contains'
        | 'starts_with'
        | 'ends_with'
        | 'in'
        | 'not_in';

      /**
       * Value to compare against the context attribute. Must be an array for `in` and
       * `not_in`; numeric and ISO-8601 datetime strings are accepted by the ordering
       * operators.
       */
      value: unknown;
    }

    export interface UnionMember1 {
      clauses: Array<UnionMember1.UnionMember0 | UnionMember1.UnionMember1>;

      logical_operator: 'AND' | 'OR';
    }

    export namespace UnionMember1 {
      export interface UnionMember0 {
        attribute: string;

        operator:
          | 'equals'
          | 'not_equals'
          | 'greater_than'
          | 'less_than'
          | 'greater_than_or_equals'
          | 'less_than_or_equals'
          | 'contains'
          | 'starts_with'
          | 'ends_with'
          | 'in'
          | 'not_in';

        /**
         * Value to compare against the context attribute. Must be an array for `in` and
         * `not_in`; numeric and ISO-8601 datetime strings are accepted by the ordering
         * operators.
         */
        value: unknown;
      }

      export interface UnionMember1 {
        clauses: Array<UnionMember1.UnionMember0 | UnionMember1.UnionMember1>;

        logical_operator: 'AND' | 'OR';
      }

      export namespace UnionMember1 {
        export interface UnionMember0 {
          attribute: string;

          operator:
            | 'equals'
            | 'not_equals'
            | 'greater_than'
            | 'less_than'
            | 'greater_than_or_equals'
            | 'less_than_or_equals'
            | 'contains'
            | 'starts_with'
            | 'ends_with'
            | 'in'
            | 'not_in';

          /**
           * Value to compare against the context attribute. Must be an array for `in` and
           * `not_in`; numeric and ISO-8601 datetime strings are accepted by the ordering
           * operators.
           */
          value: unknown;
        }

        export interface UnionMember1 {
          clauses: Array<UnionMember1.UnionMember0 | UnionMember1.UnionMember1>;

          logical_operator: 'AND' | 'OR';
        }

        export namespace UnionMember1 {
          export interface UnionMember0 {
            attribute: string;

            operator:
              | 'equals'
              | 'not_equals'
              | 'greater_than'
              | 'less_than'
              | 'greater_than_or_equals'
              | 'less_than_or_equals'
              | 'contains'
              | 'starts_with'
              | 'ends_with'
              | 'in'
              | 'not_in';

            /**
             * Value to compare against the context attribute. Must be an array for `in` and
             * `not_in`; numeric and ISO-8601 datetime strings are accepted by the ordering
             * operators.
             */
            value: unknown;
          }

          export interface UnionMember1 {
            clauses: Array<UnionMember1.UnionMember0 | UnionMember1.UnionMember1>;

            logical_operator: 'AND' | 'OR';
          }

          export namespace UnionMember1 {
            export interface UnionMember0 {
              attribute: string;

              operator:
                | 'equals'
                | 'not_equals'
                | 'greater_than'
                | 'less_than'
                | 'greater_than_or_equals'
                | 'less_than_or_equals'
                | 'contains'
                | 'starts_with'
                | 'ends_with'
                | 'in'
                | 'not_in';

              /**
               * Value to compare against the context attribute. Must be an array for `in` and
               * `not_in`; numeric and ISO-8601 datetime strings are accepted by the ordering
               * operators.
               */
              value: unknown;
            }

            export interface UnionMember1 {
              clauses: Array<UnionMember1.UnionMember0 | UnionMember1.UnionMember1>;

              logical_operator: 'AND' | 'OR';
            }

            export namespace UnionMember1 {
              export interface UnionMember0 {
                attribute: string;

                operator:
                  | 'equals'
                  | 'not_equals'
                  | 'greater_than'
                  | 'less_than'
                  | 'greater_than_or_equals'
                  | 'less_than_or_equals'
                  | 'contains'
                  | 'starts_with'
                  | 'ends_with'
                  | 'in'
                  | 'not_in';

                /**
                 * Value to compare against the context attribute. Must be an array for `in` and
                 * `not_in`; numeric and ISO-8601 datetime strings are accepted by the ordering
                 * operators.
                 */
                value: unknown;
              }

              export interface UnionMember1 {
                clauses: Array<
                  string | null | number | boolean | { [key: string]: unknown } | Array<unknown>
                >;

                logical_operator: 'AND' | 'OR';
              }
            }
          }
        }
      }
    }

    export interface Rollout {
      /**
       * Percentage of matching traffic (0–100) served this variation. For multi-way
       * splits, use cumulative upper bounds across rules (e.g. 30, 70, 100).
       */
      percentage: number;

      /**
       * Context attribute used for sticky bucketing. Defaults to `targetingKey`. If
       * absent at evaluation time, bucketing is random per request.
       */
      attribute?: string;
    }
  }
}

export interface FlagUpdateParams {
  /**
   * Path param: Cloudflare account ID.
   */
  account_id: string;

  /**
   * Body param: Variation served when no rule matches or the flag is disabled. Must
   * be a key in `variations`.
   */
  default_variation: string;

  /**
   * Body param: When false, the flag bypasses all rules and always serves
   * `default_variation`.
   */
  enabled: boolean;

  /**
   * Body param: Unique identifier for the flag within an app. Used in all evaluation
   * and SDK calls.
   */
  key: string;

  /**
   * Body param: Targeting rules evaluated in ascending `priority`; the first
   * matching rule wins. An empty array means the flag always serves
   * `default_variation`.
   */
  rules: Array<FlagUpdateParams.Rule>;

  /**
   * Body param: Map of variation name to value. All values must be the same type
   * (boolean, string, number, or JSON object/array). Each serialized value must be
   * 10KB or smaller.
   */
  variations: {
    [key: string]: string | null | number | boolean | { [key: string]: unknown } | Array<unknown>;
  };

  /**
   * Body param
   */
  description?: string | null;

  /**
   * Body param: Value type of the flag's variations. Inferred from the variation
   * values on write, so it may be omitted in requests.
   */
  type?: 'boolean' | 'string' | 'number' | 'json';
}

export namespace FlagUpdateParams {
  export interface Rule {
    /**
     * Conditions the context must satisfy for this rule to match. An empty array
     * matches all contexts.
     */
    conditions: Array<Rule.UnionMember0 | Rule.UnionMember1>;

    /**
     * Evaluation order; lower numbers are evaluated first. Must be unique across the
     * flag's rules.
     */
    priority: number;

    /**
     * Variation served when this rule matches. Must be a key in `variations`.
     */
    serve_variation: string;

    rollout?: Rule.Rollout;
  }

  export namespace Rule {
    export interface UnionMember0 {
      attribute: string;

      operator:
        | 'equals'
        | 'not_equals'
        | 'greater_than'
        | 'less_than'
        | 'greater_than_or_equals'
        | 'less_than_or_equals'
        | 'contains'
        | 'starts_with'
        | 'ends_with'
        | 'in'
        | 'not_in';

      /**
       * Value to compare against the context attribute. Must be an array for `in` and
       * `not_in`; numeric and ISO-8601 datetime strings are accepted by the ordering
       * operators.
       */
      value: unknown;
    }

    export interface UnionMember1 {
      clauses: Array<UnionMember1.UnionMember0 | UnionMember1.UnionMember1>;

      logical_operator: 'AND' | 'OR';
    }

    export namespace UnionMember1 {
      export interface UnionMember0 {
        attribute: string;

        operator:
          | 'equals'
          | 'not_equals'
          | 'greater_than'
          | 'less_than'
          | 'greater_than_or_equals'
          | 'less_than_or_equals'
          | 'contains'
          | 'starts_with'
          | 'ends_with'
          | 'in'
          | 'not_in';

        /**
         * Value to compare against the context attribute. Must be an array for `in` and
         * `not_in`; numeric and ISO-8601 datetime strings are accepted by the ordering
         * operators.
         */
        value: unknown;
      }

      export interface UnionMember1 {
        clauses: Array<UnionMember1.UnionMember0 | UnionMember1.UnionMember1>;

        logical_operator: 'AND' | 'OR';
      }

      export namespace UnionMember1 {
        export interface UnionMember0 {
          attribute: string;

          operator:
            | 'equals'
            | 'not_equals'
            | 'greater_than'
            | 'less_than'
            | 'greater_than_or_equals'
            | 'less_than_or_equals'
            | 'contains'
            | 'starts_with'
            | 'ends_with'
            | 'in'
            | 'not_in';

          /**
           * Value to compare against the context attribute. Must be an array for `in` and
           * `not_in`; numeric and ISO-8601 datetime strings are accepted by the ordering
           * operators.
           */
          value: unknown;
        }

        export interface UnionMember1 {
          clauses: Array<UnionMember1.UnionMember0 | UnionMember1.UnionMember1>;

          logical_operator: 'AND' | 'OR';
        }

        export namespace UnionMember1 {
          export interface UnionMember0 {
            attribute: string;

            operator:
              | 'equals'
              | 'not_equals'
              | 'greater_than'
              | 'less_than'
              | 'greater_than_or_equals'
              | 'less_than_or_equals'
              | 'contains'
              | 'starts_with'
              | 'ends_with'
              | 'in'
              | 'not_in';

            /**
             * Value to compare against the context attribute. Must be an array for `in` and
             * `not_in`; numeric and ISO-8601 datetime strings are accepted by the ordering
             * operators.
             */
            value: unknown;
          }

          export interface UnionMember1 {
            clauses: Array<UnionMember1.UnionMember0 | UnionMember1.UnionMember1>;

            logical_operator: 'AND' | 'OR';
          }

          export namespace UnionMember1 {
            export interface UnionMember0 {
              attribute: string;

              operator:
                | 'equals'
                | 'not_equals'
                | 'greater_than'
                | 'less_than'
                | 'greater_than_or_equals'
                | 'less_than_or_equals'
                | 'contains'
                | 'starts_with'
                | 'ends_with'
                | 'in'
                | 'not_in';

              /**
               * Value to compare against the context attribute. Must be an array for `in` and
               * `not_in`; numeric and ISO-8601 datetime strings are accepted by the ordering
               * operators.
               */
              value: unknown;
            }

            export interface UnionMember1 {
              clauses: Array<UnionMember1.UnionMember0 | UnionMember1.UnionMember1>;

              logical_operator: 'AND' | 'OR';
            }

            export namespace UnionMember1 {
              export interface UnionMember0 {
                attribute: string;

                operator:
                  | 'equals'
                  | 'not_equals'
                  | 'greater_than'
                  | 'less_than'
                  | 'greater_than_or_equals'
                  | 'less_than_or_equals'
                  | 'contains'
                  | 'starts_with'
                  | 'ends_with'
                  | 'in'
                  | 'not_in';

                /**
                 * Value to compare against the context attribute. Must be an array for `in` and
                 * `not_in`; numeric and ISO-8601 datetime strings are accepted by the ordering
                 * operators.
                 */
                value: unknown;
              }

              export interface UnionMember1 {
                clauses: Array<
                  string | null | number | boolean | { [key: string]: unknown } | Array<unknown>
                >;

                logical_operator: 'AND' | 'OR';
              }
            }
          }
        }
      }
    }

    export interface Rollout {
      /**
       * Percentage of matching traffic (0–100) served this variation. For multi-way
       * splits, use cumulative upper bounds across rules (e.g. 30, 70, 100).
       */
      percentage: number;

      /**
       * Context attribute used for sticky bucketing. Defaults to `targetingKey`. If
       * absent at evaluation time, bucketing is random per request.
       */
      attribute?: string;
    }
  }
}

export interface FlagListParams extends CursorPaginationAfterParams {
  /**
   * Path param: Cloudflare account ID.
   */
  account_id: string;

  /**
   * Query param: Max items to return (1–200).
   */
  limit?: string;
}

export interface FlagDeleteParams {
  /**
   * Cloudflare account ID.
   */
  account_id: string;
}

export interface FlagGetParams {
  /**
   * Cloudflare account ID.
   */
  account_id: string;
}

Flags.FlagListResponsesCursorPaginationAfter = FlagListResponsesCursorPaginationAfter;
Flags.Changelog = Changelog;
Flags.ChangelogListResponsesCursorPaginationAfter = ChangelogListResponsesCursorPaginationAfter;

export declare namespace Flags {
  export {
    type FlagCreateResponse as FlagCreateResponse,
    type FlagUpdateResponse as FlagUpdateResponse,
    type FlagListResponse as FlagListResponse,
    type FlagDeleteResponse as FlagDeleteResponse,
    type FlagGetResponse as FlagGetResponse,
    FlagListResponsesCursorPaginationAfter as FlagListResponsesCursorPaginationAfter,
    type FlagCreateParams as FlagCreateParams,
    type FlagUpdateParams as FlagUpdateParams,
    type FlagListParams as FlagListParams,
    type FlagDeleteParams as FlagDeleteParams,
    type FlagGetParams as FlagGetParams,
  };

  export {
    Changelog as Changelog,
    type ChangelogListResponse as ChangelogListResponse,
    ChangelogListResponsesCursorPaginationAfter as ChangelogListResponsesCursorPaginationAfter,
    type ChangelogListParams as ChangelogListParams,
  };
}
