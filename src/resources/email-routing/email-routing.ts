// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AddressesAPI from './addresses';
import { Addresses } from './addresses';
import * as DNSAPI from './dns';
import { DNS } from './dns';
import * as RulesAPI from './rules/rules';
import { Rules } from './rules/rules';

export class EmailRouting extends APIResource {
  dns: DNSAPI.DNS = new DNSAPI.DNS(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
  addresses: AddressesAPI.Addresses = new AddressesAPI.Addresses(this._client);
}

EmailRouting.DNS = DNS;
EmailRouting.Rules = Rules;
EmailRouting.Addresses = Addresses;

export declare namespace EmailRouting {
  export { DNS as DNS };

  export { Rules as Rules };

  export { Addresses as Addresses };
}
