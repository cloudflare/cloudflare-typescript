// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as AccountMappingAPI from './account-mapping';
import { AccountMapping, BaseAccountMapping } from './account-mapping';
import * as RulesAPI from './rules';
import { BaseRules, Rules } from './rules';

export class BaseEmail extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'dlp', 'email'] = Object.freeze([
    'zeroTrust',
    'dlp',
    'email',
  ] as const);
}
export class Email extends BaseEmail {
  accountMapping: AccountMappingAPI.AccountMapping = new AccountMappingAPI.AccountMapping(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
}

Email.AccountMapping = AccountMapping;
Email.BaseAccountMapping = BaseAccountMapping;
Email.Rules = Rules;
Email.BaseRules = BaseRules;

export declare namespace Email {
  export { AccountMapping as AccountMapping, BaseAccountMapping as BaseAccountMapping };

  export { Rules as Rules, BaseRules as BaseRules };
}
