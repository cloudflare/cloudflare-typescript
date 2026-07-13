// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { PagePromise, SinglePage } from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseRules extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'dlp', 'email', 'rules'] = Object.freeze([
    'zeroTrust',
    'dlp',
    'email',
    'rules',
  ] as const);

  /**
   * Creates a new DLP email scanning rule that defines what content patterns to
   * detect in email messages and what actions to take.
   *
   * @example
   * ```ts
   * const rule = await client.zeroTrust.dlp.email.rules.create({
   *   account_id: 'account_id',
   *   action: { action: 'Block' },
   *   conditions: [
   *     {
   *       operator: 'InList',
   *       selector: 'Recipients',
   *       value: ['string'],
   *     },
   *   ],
   *   enabled: true,
   *   name: 'name',
   * });
   * ```
   */
  create(params: RuleCreateParams, options?: RequestOptions): APIPromise<RuleCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/dlp/email/rules`, { body, ...options }) as APIPromise<{
        result: RuleCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a DLP email scanning rule.
   *
   * @example
   * ```ts
   * const rule = await client.zeroTrust.dlp.email.rules.update(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   {
   *     account_id: 'account_id',
   *     action: { action: 'Block' },
   *     conditions: [
   *       {
   *         operator: 'InList',
   *         selector: 'Recipients',
   *         value: ['string'],
   *       },
   *     ],
   *     enabled: true,
   *     name: 'name',
   *   },
   * );
   * ```
   */
  update(ruleID: string, params: RuleUpdateParams, options?: RequestOptions): APIPromise<RuleUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/dlp/email/rules/${ruleID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: RuleUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all email scanner rules for an account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const ruleListResponse of client.zeroTrust.dlp.email.rules.list(
   *   { account_id: 'account_id' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: RuleListParams,
    options?: RequestOptions,
  ): PagePromise<RuleListResponsesSinglePage, RuleListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/dlp/email/rules`,
      SinglePage<RuleListResponse>,
      options,
    );
  }

  /**
   * Removes a DLP email scanning rule. The rule will no longer be applied to email
   * messages.
   *
   * @example
   * ```ts
   * const rule = await client.zeroTrust.dlp.email.rules.delete(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { account_id: 'account_id' },
   * );
   * ```
   */
  delete(ruleID: string, params: RuleDeleteParams, options?: RequestOptions): APIPromise<RuleDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(path`/accounts/${account_id}/dlp/email/rules/${ruleID}`, options) as APIPromise<{
        result: RuleDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Reorders DLP email scanning rules by updating their priority values. Higher
   * priority rules are evaluated first.
   *
   * @example
   * ```ts
   * const response =
   *   await client.zeroTrust.dlp.email.rules.bulkEdit({
   *     account_id: 'account_id',
   *     new_priorities: { foo: 0 },
   *   });
   * ```
   */
  bulkEdit(params: RuleBulkEditParams, options?: RequestOptions): APIPromise<RuleBulkEditResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(path`/accounts/${account_id}/dlp/email/rules`, { body, ...options }) as APIPromise<{
        result: RuleBulkEditResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets detailed configuration for a specific DLP email scanning rule, including
   * detection patterns and actions.
   *
   * @example
   * ```ts
   * const rule = await client.zeroTrust.dlp.email.rules.get(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { account_id: 'account_id' },
   * );
   * ```
   */
  get(ruleID: string, params: RuleGetParams, options?: RequestOptions): APIPromise<RuleGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/dlp/email/rules/${ruleID}`, options) as APIPromise<{
        result: RuleGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Rules extends BaseRules {}

export type RuleListResponsesSinglePage = SinglePage<RuleListResponse>;

export interface RuleCreateResponse {
  action: RuleCreateResponse.Action;

  /**
   * Triggered if all conditions match.
   */
  conditions: Array<RuleCreateResponse.Condition>;

  created_at: string;

  enabled: boolean;

  name: string;

  priority: number;

  rule_id: string;

  updated_at: string;

  description?: string | null;
}

export namespace RuleCreateResponse {
  export interface Action {
    action: 'Block';

    message?: string | null;
  }

  export interface Condition {
    operator: 'InList' | 'NotInList' | 'MatchRegex' | 'NotMatchRegex';

    selector: 'Recipients' | 'Sender' | 'DLPProfiles';

    value: Array<string> | string;
  }
}

export interface RuleUpdateResponse {
  action: RuleUpdateResponse.Action;

  /**
   * Triggered if all conditions match.
   */
  conditions: Array<RuleUpdateResponse.Condition>;

  created_at: string;

  enabled: boolean;

  name: string;

  priority: number;

  rule_id: string;

  updated_at: string;

  description?: string | null;
}

export namespace RuleUpdateResponse {
  export interface Action {
    action: 'Block';

    message?: string | null;
  }

  export interface Condition {
    operator: 'InList' | 'NotInList' | 'MatchRegex' | 'NotMatchRegex';

    selector: 'Recipients' | 'Sender' | 'DLPProfiles';

    value: Array<string> | string;
  }
}

export interface RuleListResponse {
  action: RuleListResponse.Action;

  /**
   * Triggered if all conditions match.
   */
  conditions: Array<RuleListResponse.Condition>;

  created_at: string;

  enabled: boolean;

  name: string;

  priority: number;

  rule_id: string;

  updated_at: string;

  description?: string | null;
}

export namespace RuleListResponse {
  export interface Action {
    action: 'Block';

    message?: string | null;
  }

  export interface Condition {
    operator: 'InList' | 'NotInList' | 'MatchRegex' | 'NotMatchRegex';

    selector: 'Recipients' | 'Sender' | 'DLPProfiles';

    value: Array<string> | string;
  }
}

export interface RuleDeleteResponse {
  action: RuleDeleteResponse.Action;

  /**
   * Triggered if all conditions match.
   */
  conditions: Array<RuleDeleteResponse.Condition>;

  created_at: string;

  enabled: boolean;

  name: string;

  priority: number;

  rule_id: string;

  updated_at: string;

  description?: string | null;
}

export namespace RuleDeleteResponse {
  export interface Action {
    action: 'Block';

    message?: string | null;
  }

  export interface Condition {
    operator: 'InList' | 'NotInList' | 'MatchRegex' | 'NotMatchRegex';

    selector: 'Recipients' | 'Sender' | 'DLPProfiles';

    value: Array<string> | string;
  }
}

export interface RuleBulkEditResponse {
  action: RuleBulkEditResponse.Action;

  /**
   * Triggered if all conditions match.
   */
  conditions: Array<RuleBulkEditResponse.Condition>;

  created_at: string;

  enabled: boolean;

  name: string;

  priority: number;

  rule_id: string;

  updated_at: string;

  description?: string | null;
}

export namespace RuleBulkEditResponse {
  export interface Action {
    action: 'Block';

    message?: string | null;
  }

  export interface Condition {
    operator: 'InList' | 'NotInList' | 'MatchRegex' | 'NotMatchRegex';

    selector: 'Recipients' | 'Sender' | 'DLPProfiles';

    value: Array<string> | string;
  }
}

export interface RuleGetResponse {
  action: RuleGetResponse.Action;

  /**
   * Triggered if all conditions match.
   */
  conditions: Array<RuleGetResponse.Condition>;

  created_at: string;

  enabled: boolean;

  name: string;

  priority: number;

  rule_id: string;

  updated_at: string;

  description?: string | null;
}

export namespace RuleGetResponse {
  export interface Action {
    action: 'Block';

    message?: string | null;
  }

  export interface Condition {
    operator: 'InList' | 'NotInList' | 'MatchRegex' | 'NotMatchRegex';

    selector: 'Recipients' | 'Sender' | 'DLPProfiles';

    value: Array<string> | string;
  }
}

export interface RuleCreateParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param
   */
  action: RuleCreateParams.Action;

  /**
   * Body param: Triggered if all conditions match.
   */
  conditions: Array<RuleCreateParams.Condition>;

  /**
   * Body param
   */
  enabled: boolean;

  /**
   * Body param
   */
  name: string;

  /**
   * Body param
   */
  description?: string | null;
}

export namespace RuleCreateParams {
  export interface Action {
    action: 'Block';

    message?: string | null;
  }

  export interface Condition {
    operator: 'InList' | 'NotInList' | 'MatchRegex' | 'NotMatchRegex';

    selector: 'Recipients' | 'Sender' | 'DLPProfiles';

    value: Array<string> | string;
  }
}

export interface RuleUpdateParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param
   */
  action: RuleUpdateParams.Action;

  /**
   * Body param: Triggered if all conditions match.
   */
  conditions: Array<RuleUpdateParams.Condition>;

  /**
   * Body param
   */
  enabled: boolean;

  /**
   * Body param
   */
  name: string;

  /**
   * Body param
   */
  description?: string | null;
}

export namespace RuleUpdateParams {
  export interface Action {
    action: 'Block';

    message?: string | null;
  }

  export interface Condition {
    operator: 'InList' | 'NotInList' | 'MatchRegex' | 'NotMatchRegex';

    selector: 'Recipients' | 'Sender' | 'DLPProfiles';

    value: Array<string> | string;
  }
}

export interface RuleListParams {
  account_id: string;
}

export interface RuleDeleteParams {
  account_id: string;
}

export interface RuleBulkEditParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param
   */
  new_priorities: { [key: string]: number };
}

export interface RuleGetParams {
  account_id: string;
}

export declare namespace Rules {
  export {
    type RuleCreateResponse as RuleCreateResponse,
    type RuleUpdateResponse as RuleUpdateResponse,
    type RuleListResponse as RuleListResponse,
    type RuleDeleteResponse as RuleDeleteResponse,
    type RuleBulkEditResponse as RuleBulkEditResponse,
    type RuleGetResponse as RuleGetResponse,
    type RuleListResponsesSinglePage as RuleListResponsesSinglePage,
    type RuleCreateParams as RuleCreateParams,
    type RuleUpdateParams as RuleUpdateParams,
    type RuleListParams as RuleListParams,
    type RuleDeleteParams as RuleDeleteParams,
    type RuleBulkEditParams as RuleBulkEditParams,
    type RuleGetParams as RuleGetParams,
  };
}
