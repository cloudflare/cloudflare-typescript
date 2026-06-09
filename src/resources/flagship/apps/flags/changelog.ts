// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import { CursorPaginationAfter, type CursorPaginationAfterParams } from '../../../../pagination';

export class Changelog extends APIResource {
  /**
   * Returns the audit history for a flag, newest first. Each entry includes the
   * event type and full flag state after the change; `update` entries include a
   * field-level diff. Capped at 200 entries per flag.
   */
  list(
    appId: string,
    flagKey: string,
    params: ChangelogListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ChangelogListResponsesCursorPaginationAfter, ChangelogListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/flagship/apps/${appId}/flags/${flagKey}/changelog`,
      ChangelogListResponsesCursorPaginationAfter,
      { query, ...options },
    );
  }
}

export class ChangelogListResponsesCursorPaginationAfter extends CursorPaginationAfter<ChangelogListResponse> {}

export type ChangelogListResponse =
  | ChangelogListResponse.UnionMember0
  | ChangelogListResponse.UnionMember1
  | ChangelogListResponse.UnionMember2;

export namespace ChangelogListResponse {
  export interface UnionMember0 {
    after: UnionMember0.After;

    event: 'create';

    flag_key: string;
  }

  export namespace UnionMember0 {
    export interface After {
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
      rules: Array<After.Rule>;

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

    export namespace After {
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
  }

  export interface UnionMember1 {
    after: UnionMember1.After;

    event: 'delete';

    flag_key: string;
  }

  export namespace UnionMember1 {
    export interface After {
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
      rules: Array<After.Rule>;

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

    export namespace After {
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
  }

  export interface UnionMember2 {
    after: UnionMember2.After;

    diff: { [key: string]: UnionMember2.Diff };

    event: 'update';

    flag_key: string;
  }

  export namespace UnionMember2 {
    export interface After {
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
      rules: Array<After.Rule>;

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

    export namespace After {
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

    export interface Diff {
      from?: string | null | number | boolean | { [key: string]: unknown } | Array<unknown>;

      to?: string | null | number | boolean | { [key: string]: unknown } | Array<unknown>;
    }
  }
}

export interface ChangelogListParams extends CursorPaginationAfterParams {
  /**
   * Path param: Cloudflare account ID.
   */
  account_id: string;

  /**
   * Query param: Max items to return (1–200).
   */
  limit?: string;
}

Changelog.ChangelogListResponsesCursorPaginationAfter = ChangelogListResponsesCursorPaginationAfter;

export declare namespace Changelog {
  export {
    type ChangelogListResponse as ChangelogListResponse,
    ChangelogListResponsesCursorPaginationAfter as ChangelogListResponsesCursorPaginationAfter,
    type ChangelogListParams as ChangelogListParams,
  };
}
