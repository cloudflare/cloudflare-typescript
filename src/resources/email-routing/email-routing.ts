// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AddressesAPI from './addresses';
import { Addresses, BaseAddresses } from './addresses';
import * as DNSAPI from './dns';
import { BaseDNS, DNS } from './dns';
import * as RulesAPI from './rules/rules';
import { BaseRules, Rules } from './rules/rules';

export class BaseEmailRouting extends APIResource {
  static override readonly _key: readonly ['emailRouting'] = Object.freeze(['emailRouting'] as const);
}
export class EmailRouting extends BaseEmailRouting {
  dns: DNSAPI.DNS = new DNSAPI.DNS(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
  addresses: AddressesAPI.Addresses = new AddressesAPI.Addresses(this._client);
}

EmailRouting.DNS = DNS;
EmailRouting.BaseDNS = BaseDNS;
EmailRouting.Rules = Rules;
EmailRouting.BaseRules = BaseRules;
EmailRouting.Addresses = Addresses;
EmailRouting.BaseAddresses = BaseAddresses;

export declare namespace EmailRouting {
  export { DNS as DNS, BaseDNS as BaseDNS };

  export { Rules as Rules, BaseRules as BaseRules };

  export { Addresses as Addresses, BaseAddresses as BaseAddresses };
}
