// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ChangelogAPI from './changelog';
import {
  BaseChangelog,
  Changelog,
  ChangelogListParams,
  ChangelogListResponse,
  ChangelogListResponsesCursorPaginationAfter,
} from './changelog';
import { APIPromise } from '../../../../core/api-promise';
import {
  CursorPaginationAfter,
  type CursorPaginationAfterParams,
  PagePromise,
} from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseFlags extends APIResource {
  static override readonly _key: readonly ['flagship', 'apps', 'flags'] = Object.freeze([
    'flagship',
    'apps',
    'flags',
  ] as const);

  /**
   * Creates a flag. Returns 409 if the key already exists. `type` is inferred from
   * variation values and may be omitted.
   */
  create(appID: string, params: FlagCreateParams, options?: RequestOptions): APIPromise<FlagCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/flagship/apps/${appID}/flags`, {
        body,
        ...options,
      }) as APIPromise<{ result: FlagCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Replaces the entire flag definition. Omitted fields are dropped, not preserved —
   * read before writing. Each update appends a changelog entry.
   */
  update(
    flagKey: string,
    params: FlagUpdateParams,
    options?: RequestOptions,
  ): APIPromise<FlagUpdateResponse> {
    const { account_id, app_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/flagship/apps/${app_id}/flags/${flagKey}`, {
        body,
        ...options,
      }) as APIPromise<{ result: FlagUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists an app's flags ordered by key. Pass `cursor` from `result_info` to page
   * forward; a null cursor indicates the last page.
   */
  list(
    appID: string,
    params: FlagListParams,
    options?: RequestOptions,
  ): PagePromise<FlagListResponsesCursorPaginationAfter, FlagListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/flagship/apps/${appID}/flags`,
      CursorPaginationAfter<FlagListResponse>,
      { query, ...options },
    );
  }

  /**
   * Deletes a flag permanently. Subsequent evaluations fall back to the
   * caller-supplied default. Cannot be undone.
   */
  delete(
    flagKey: string,
    params: FlagDeleteParams,
    options?: RequestOptions,
  ): APIPromise<FlagDeleteResponse> {
    const { account_id, app_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/flagship/apps/${app_id}/flags/${flagKey}`,
        options,
      ) as APIPromise<{ result: FlagDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns the full flag definition including rules, variations, and audit fields.
   */
  get(flagKey: string, params: FlagGetParams, options?: RequestOptions): APIPromise<FlagGetResponse> {
    const { account_id, app_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/flagship/apps/${app_id}/flags/${flagKey}`,
        options,
      ) as APIPromise<{ result: FlagGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Flags extends BaseFlags {
  changelog: ChangelogAPI.Changelog = new ChangelogAPI.Changelog(this._client);
}

export type FlagListResponsesCursorPaginationAfter = CursorPaginationAfter<FlagListResponse>;

export interface FlagCreateResponse {
  /**
   * Variation the API serves when the flag is off, or when it's on but no rule
   * matches the context. Must be a key in `variations`.
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
   * Map of variation name to value. All values share the same type (boolean, string,
   * number, or JSON object/array), and each serialized value stays within 10KB.
   */
  variations: {
    [key: string]: string | null | number | boolean | { [key: string]: unknown } | Array<unknown>;
  };

  description?: string | null;

  /**
   * Value type of the flag's variations. The API infers this from the variation
   * values on write, so you can omit it in requests.
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
     * Evaluation order: the API evaluates rules with lower numbers first. Must be
     * unique across the flag's rules.
     */
    priority: number;

    /**
     * Variation the API serves when this rule matches. Must be a key in `variations`.
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

      value: string | null | number | boolean | { [key: string]: unknown } | Array<unknown>;
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

        value: string | null | number | boolean | { [key: string]: unknown } | Array<unknown>;
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

          value: string | null | number | boolean | { [key: string]: unknown } | Array<unknown>;
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

            value: string | null | number | boolean | { [key: string]: unknown } | Array<unknown>;
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

              value: string | null | number | boolean | { [key: string]: unknown } | Array<unknown>;
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

                value: string | null | number | boolean | { [key: string]: unknown } | Array<unknown>;
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
   * Variation the API serves when the flag is off, or when it's on but no rule
   * matches the context. Must be a key in `variations`.
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
   * Map of variation name to value. All values share the same type (boolean, string,
   * number, or JSON object/array), and each serialized value stays within 10KB.
   */
  variations: {
    [key: string]: string | null | number | boolean | { [key: string]: unknown } | Array<unknown>;
  };

  description?: string | null;

  /**
   * Value type of the flag's variations. The API infers this from the variation
   * values on write, so you can omit it in requests.
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
     * Evaluation order: the API evaluates rules with lower numbers first. Must be
     * unique across the flag's rules.
     */
    priority: number;

    /**
     * Variation the API serves when this rule matches. Must be a key in `variations`.
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

      value: string | null | number | boolean | { [key: string]: unknown } | Array<unknown>;
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

        value: string | null | number | boolean | { [key: string]: unknown } | Array<unknown>;
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

          value: string | null | number | boolean | { [key: string]: unknown } | Array<unknown>;
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

            value: string | null | number | boolean | { [key: string]: unknown } | Array<unknown>;
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

              value: string | null | number | boolean | { [key: string]: unknown } | Array<unknown>;
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

                value: string | null | number | boolean | { [key: string]: unknown } | Array<unknown>;
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
   * Variation the API serves when the flag is off, or when it's on but no rule
   * matches the context. Must be a key in `variations`.
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
   * Map of variation name to value. All values share the same type (boolean, string,
   * number, or JSON object/array), and each serialized value stays within 10KB.
   */
  variations: {
    [key: string]: string | null | number | boolean | { [key: string]: unknown } | Array<unknown>;
  };

  description?: string | null;

  /**
   * Value type of the flag's variations. The API infers this from the variation
   * values on write, so you can omit it in requests.
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
     * Evaluation order: the API evaluates rules with lower numbers first. Must be
     * unique across the flag's rules.
     */
    priority: number;

    /**
     * Variation the API serves when this rule matches. Must be a key in `variations`.
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

      value: string | null | number | boolean | { [key: string]: unknown } | Array<unknown>;
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

        value: string | null | number | boolean | { [key: string]: unknown } | Array<unknown>;
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

          value: string | null | number | boolean | { [key: string]: unknown } | Array<unknown>;
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

            value: string | null | number | boolean | { [key: string]: unknown } | Array<unknown>;
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

              value: string | null | number | boolean | { [key: string]: unknown } | Array<unknown>;
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

                value: string | null | number | boolean | { [key: string]: unknown } | Array<unknown>;
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
   * Variation the API serves when the flag is off, or when it's on but no rule
   * matches the context. Must be a key in `variations`.
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
   * Map of variation name to value. All values share the same type (boolean, string,
   * number, or JSON object/array), and each serialized value stays within 10KB.
   */
  variations: {
    [key: string]: string | null | number | boolean | { [key: string]: unknown } | Array<unknown>;
  };

  description?: string | null;

  /**
   * Value type of the flag's variations. The API infers this from the variation
   * values on write, so you can omit it in requests.
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
     * Evaluation order: the API evaluates rules with lower numbers first. Must be
     * unique across the flag's rules.
     */
    priority: number;

    /**
     * Variation the API serves when this rule matches. Must be a key in `variations`.
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

      value: string | null | number | boolean | { [key: string]: unknown } | Array<unknown>;
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

        value: string | null | number | boolean | { [key: string]: unknown } | Array<unknown>;
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

          value: string | null | number | boolean | { [key: string]: unknown } | Array<unknown>;
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

            value: string | null | number | boolean | { [key: string]: unknown } | Array<unknown>;
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

              value: string | null | number | boolean | { [key: string]: unknown } | Array<unknown>;
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

                value: string | null | number | boolean | { [key: string]: unknown } | Array<unknown>;
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
   * Body param: Variation the API serves when the flag is off, or when it's on but
   * no rule matches the context. Must be a key in `variations`.
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
   * Body param: Map of variation name to value. All values share the same type
   * (boolean, string, number, or JSON object/array), and each serialized value stays
   * within 10KB.
   */
  variations: {
    [key: string]: string | null | number | boolean | { [key: string]: unknown } | Array<unknown>;
  };

  /**
   * Body param
   */
  description?: string | null;

  /**
   * Body param: Value type of the flag's variations. The API infers this from the
   * variation values on write, so you can omit it in requests.
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
     * Evaluation order: the API evaluates rules with lower numbers first. Must be
     * unique across the flag's rules.
     */
    priority: number;

    /**
     * Variation the API serves when this rule matches. Must be a key in `variations`.
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

      value: string | null | number | boolean | { [key: string]: unknown } | Array<unknown>;
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

        value: string | null | number | boolean | { [key: string]: unknown } | Array<unknown>;
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

          value: string | null | number | boolean | { [key: string]: unknown } | Array<unknown>;
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

            value: string | null | number | boolean | { [key: string]: unknown } | Array<unknown>;
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

              value: string | null | number | boolean | { [key: string]: unknown } | Array<unknown>;
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

                value: string | null | number | boolean | { [key: string]: unknown } | Array<unknown>;
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
   * Path param: App identifier.
   */
  app_id: string;

  /**
   * Body param: Variation the API serves when the flag is off, or when it's on but
   * no rule matches the context. Must be a key in `variations`.
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
   * Body param: Map of variation name to value. All values share the same type
   * (boolean, string, number, or JSON object/array), and each serialized value stays
   * within 10KB.
   */
  variations: {
    [key: string]: string | null | number | boolean | { [key: string]: unknown } | Array<unknown>;
  };

  /**
   * Body param
   */
  description?: string | null;

  /**
   * Body param: Value type of the flag's variations. The API infers this from the
   * variation values on write, so you can omit it in requests.
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
     * Evaluation order: the API evaluates rules with lower numbers first. Must be
     * unique across the flag's rules.
     */
    priority: number;

    /**
     * Variation the API serves when this rule matches. Must be a key in `variations`.
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

      value: string | null | number | boolean | { [key: string]: unknown } | Array<unknown>;
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

        value: string | null | number | boolean | { [key: string]: unknown } | Array<unknown>;
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

          value: string | null | number | boolean | { [key: string]: unknown } | Array<unknown>;
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

            value: string | null | number | boolean | { [key: string]: unknown } | Array<unknown>;
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

              value: string | null | number | boolean | { [key: string]: unknown } | Array<unknown>;
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

                value: string | null | number | boolean | { [key: string]: unknown } | Array<unknown>;
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

  /**
   * App identifier.
   */
  app_id: string;
}

export interface FlagGetParams {
  /**
   * Cloudflare account ID.
   */
  account_id: string;

  /**
   * App identifier.
   */
  app_id: string;
}

Flags.Changelog = Changelog;
Flags.BaseChangelog = BaseChangelog;

export declare namespace Flags {
  export {
    type FlagCreateResponse as FlagCreateResponse,
    type FlagUpdateResponse as FlagUpdateResponse,
    type FlagListResponse as FlagListResponse,
    type FlagDeleteResponse as FlagDeleteResponse,
    type FlagGetResponse as FlagGetResponse,
    type FlagListResponsesCursorPaginationAfter as FlagListResponsesCursorPaginationAfter,
    type FlagCreateParams as FlagCreateParams,
    type FlagUpdateParams as FlagUpdateParams,
    type FlagListParams as FlagListParams,
    type FlagDeleteParams as FlagDeleteParams,
    type FlagGetParams as FlagGetParams,
  };

  export {
    Changelog as Changelog,
    BaseChangelog as BaseChangelog,
    type ChangelogListResponse as ChangelogListResponse,
    type ChangelogListResponsesCursorPaginationAfter as ChangelogListResponsesCursorPaginationAfter,
    type ChangelogListParams as ChangelogListParams,
  };
}
