// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ValidatorsAPI from './validators';
import * as ProximityWordsAPI from './proximity-words';
import {
  BaseProximityWords,
  ProximityWordCreateParams,
  ProximityWordDeleteParams,
  ProximityWordDeleteResponse,
  ProximityWordGetParams,
  ProximityWordListParams,
  ProximityWordUpdateParams,
  ProximityWordValidator as ProximityWordsAPIProximityWordValidator,
  ProximityWordValidatorArray,
  ProximityWordValidatorsSinglePage,
  ProximityWords,
  Weight,
  Word,
} from './proximity-words';
import { APIPromise } from '../../../../core/api-promise';
import { PagePromise, SinglePage } from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseValidators extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'dlp', 'validators'] = Object.freeze([
    'zeroTrust',
    'dlp',
    'validators',
  ] as const);

  /**
   * Lists the validators configured for the account, of every kind.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const validator of client.zeroTrust.dlp.validators.list(
   *   { account_id: 'account_id' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(params: ValidatorListParams, options?: RequestOptions): PagePromise<ValidatorsSinglePage, Validator> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(path`/accounts/${account_id}/dlp/validators`, SinglePage<Validator>, {
      query,
      ...options,
    });
  }

  /**
   * Fetches a validator of any kind by ID.
   *
   * @example
   * ```ts
   * const validator = await client.zeroTrust.dlp.validators.get(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { account_id: 'account_id' },
   * );
   * ```
   */
  get(validatorID: string, params: ValidatorGetParams, options?: RequestOptions): APIPromise<Validator> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/dlp/validators/${validatorID}`, options) as APIPromise<{
        result: Validator;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Validators extends BaseValidators {
  proximityWords: ProximityWordsAPI.ProximityWords = new ProximityWordsAPI.ProximityWords(this._client);
}

export type ValidatorsSinglePage = SinglePage<Validator>;

/**
 * What currently uses a validator. Deleting a validator that is still in use
 * returns `409`, so check this first.
 *
 * Read-only. A validator is attached or detached by updating the detection entry
 * that uses it, not by writing this back.
 */
export interface References {
  /**
   * The detection entries using this validator, ordered by name.
   */
  entries: Array<References.Entry>;

  /**
   * Number of detection entries this validator is attached to.
   */
  entry_count: number;
}

export namespace References {
  /**
   * A detection entry that uses a validator.
   */
  export interface Entry {
    id: string;

    name: string;

    /**
     * The type of a detection entry.
     */
    type:
      | 'custom'
      | 'custom_prompt_topic'
      | 'predefined'
      | 'integration'
      | 'exact_data'
      | 'document_fingerprint'
      | 'word_list';
  }
}

/**
 * Reusable logic that a detection entry can attach to in order to refine its
 * matches. The `kind` field determines the rest of the body.
 */
export type Validator = Validator.ProximityWordValidator | Validator.WorkerValidator;

export namespace Validator {
  /**
   * A reusable list of weighted words. Attaching it to a detection entry raises the
   * confidence of that entry's matches when one of the words appears nearby, and
   * lowers it when none do.
   */
  export interface ProximityWordValidator {
    id: string;

    created_at: string;

    kind: 'proximity_words';

    /**
     * A name for this validator, at most 50 characters.
     */
    name: string;

    /**
     * What currently uses a validator. Deleting a validator that is still in use
     * returns `409`, so check this first.
     *
     * Read-only. A validator is attached or detached by updating the detection entry
     * that uses it, not by writing this back.
     */
    referenced_by: ValidatorsAPI.References;

    updated_at: string;

    /**
     * The words that raise confidence when found near a match.
     */
    words: Array<ProximityWordsAPI.Word>;
  }

  /**
   * A customer Worker registered as a validator.
   */
  export interface WorkerValidator {
    id: string;

    created_at: string;

    kind: 'worker';

    /**
     * A name for this validator, at most 50 characters.
     */
    name: string;

    /**
     * What currently uses a validator. Deleting a validator that is still in use
     * returns `409`, so check this first.
     *
     * Read-only. A validator is attached or detached by updating the detection entry
     * that uses it, not by writing this back.
     */
    referenced_by: ValidatorsAPI.References;

    /**
     * The public script tag of the customer's Worker that scores matches.
     */
    script_tag: string;

    updated_at: string;

    default?: number | 'veto';
  }
}

export type ValidatorArray = Array<Validator>;

/**
 * A customer Worker registered as a validator.
 */
export interface WorkerValidator {
  id: string;

  created_at: string;

  /**
   * A name for this validator, at most 50 characters.
   */
  name: string;

  /**
   * What currently uses a validator. Deleting a validator that is still in use
   * returns `409`, so check this first.
   *
   * Read-only. A validator is attached or detached by updating the detection entry
   * that uses it, not by writing this back.
   */
  referenced_by: References;

  /**
   * The public script tag of the customer's Worker that scores matches.
   */
  script_tag: string;

  updated_at: string;

  default?: number | 'veto';
}

export interface ValidatorListParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Query param: Only return validators of this kind. Omit to return every kind.
   */
  kind?: 'proximity_words' | 'worker' | null;
}

export interface ValidatorGetParams {
  account_id: string;
}

Validators.ProximityWords = ProximityWords;
Validators.BaseProximityWords = BaseProximityWords;

export declare namespace Validators {
  export {
    type References as References,
    type Validator as Validator,
    type ValidatorArray as ValidatorArray,
    type WorkerValidator as WorkerValidator,
    type ValidatorsSinglePage as ValidatorsSinglePage,
    type ValidatorListParams as ValidatorListParams,
    type ValidatorGetParams as ValidatorGetParams,
  };

  export {
    ProximityWords as ProximityWords,
    BaseProximityWords as BaseProximityWords,
    type ProximityWordsAPIProximityWordValidator as ProximityWordValidator,
    type ProximityWordValidatorArray as ProximityWordValidatorArray,
    type Weight as Weight,
    type Word as Word,
    type ProximityWordDeleteResponse as ProximityWordDeleteResponse,
    type ProximityWordValidatorsSinglePage as ProximityWordValidatorsSinglePage,
    type ProximityWordCreateParams as ProximityWordCreateParams,
    type ProximityWordUpdateParams as ProximityWordUpdateParams,
    type ProximityWordListParams as ProximityWordListParams,
    type ProximityWordDeleteParams as ProximityWordDeleteParams,
    type ProximityWordGetParams as ProximityWordGetParams,
  };
}
