// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

export {
  Addresses,
  BaseAddresses,
  type Address,
  type AddressCreateParams,
  type AddressListParams,
  type AddressDeleteParams,
  type AddressGetParams,
  type AddressesV4PagePaginationArray,
} from './addresses';
export {
  DNS,
  BaseDNS,
  type DNSRecord,
  type DNSGetResponse,
  type DNSCreateParams,
  type DNSDeleteParams,
  type DNSEditParams,
  type DNSGetParams,
  type DNSRecordsSinglePage,
} from './dns';
export { EmailRouting, BaseEmailRouting } from './email-routing';
export {
  Rules,
  BaseRules,
  type Action,
  type EmailRoutingRule,
  type Matcher,
  type RuleCreateParams,
  type RuleUpdateParams,
  type RuleDeleteParams,
  type RuleGetParams,
} from './rules/index';
