// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as AccountMappingAPI from './account-mapping';
import { AccountMapping } from './account-mapping';
import * as RulesAPI from './rules';
import { Rules } from './rules';

export class Email extends APIResource {
  accountMapping: AccountMappingAPI.AccountMapping = new AccountMappingAPI.AccountMapping(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
}

Email.AccountMapping = AccountMapping;
Email.Rules = Rules;

export declare namespace Email {
  export { AccountMapping as AccountMapping };

  export { Rules as Rules };
}
