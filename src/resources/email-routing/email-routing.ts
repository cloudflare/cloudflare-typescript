// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as AddressesAPI from './addresses';
import {
  Address,
  AddressCreateParams,
  AddressDeleteParams,
  AddressGetParams,
  AddressListParams,
  Addresses,
  AddressesV4PagePaginationArray,
} from './addresses';
import * as DNSAPI from './dns';
import {
  DNS,
  DNSCreateParams,
  DNSCreateResponse,
  DNSDeleteParams,
  DNSEditParams,
  DNSEditResponse,
  DNSGetParams,
  DNSGetResponse,
  DNSRecord,
  DNSRecordsSinglePage,
} from './dns';
import * as RulesAPI from './rules/rules';
import {
  Action,
  EmailRoutingRule,
  EmailRoutingRulesV4PagePaginationArray,
  Matcher,
  RuleCreateParams,
  RuleCreateResponse,
  RuleDeleteParams,
  RuleDeleteResponse,
  RuleGetParams,
  RuleGetResponse,
  RuleListParams,
  RuleUpdateParams,
  RuleUpdateResponse,
  Rules,
} from './rules/rules';

export class EmailRouting extends APIResource {
  dns: DNSAPI.DNS = new DNSAPI.DNS(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
  addresses: AddressesAPI.Addresses = new AddressesAPI.Addresses(this._client);

  /**
   * Disable your Email Routing zone. Also removes additional MX records previously
   * required for Email Routing to work.
   */
  disable(
    params: EmailRoutingDisableParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EmailRoutingDisableResponse> {
    const { zone_id, body } = params;
    return (
      this._client.post(`/zones/${zone_id}/email/routing/disable`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: EmailRoutingDisableResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Enable you Email Routing zone. Add and lock the necessary MX and SPF records.
   */
  enable(
    params: EmailRoutingEnableParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EmailRoutingEnableResponse> {
    const { zone_id, body } = params;
    return (
      this._client.post(`/zones/${zone_id}/email/routing/enable`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: EmailRoutingEnableResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get information about the settings for your Email Routing zone.
   */
  get(
    params: EmailRoutingGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EmailRoutingGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/email/routing`, options) as Core.APIPromise<{
        result: EmailRoutingGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface Settings {
  /**
   * Email Routing settings identifier.
   */
  id: string;

  /**
   * State of the zone settings for Email Routing.
   */
  enabled: true | false;

  /**
   * Domain of your zone.
   */
  name: string;

  /**
   * The date and time the settings have been created.
   */
  created?: string;

  /**
   * The date and time the settings have been modified.
   */
  modified?: string;

  /**
   * Flag to check if the user skipped the configuration wizard.
   */
  skip_wizard?: true | false;

  /**
   * Show the state of your account, and the type or configuration error.
   */
  status?: 'ready' | 'unconfigured' | 'misconfigured' | 'misconfigured/locked' | 'unlocked';

  /**
   * @deprecated Email Routing settings tag. (Deprecated, replaced by Email Routing
   * settings identifier)
   */
  tag?: string;
}

export type EmailRoutingDisableResponse = unknown;

export type EmailRoutingEnableResponse = unknown;

export type EmailRoutingGetResponse = unknown;

export interface EmailRoutingDisableParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface EmailRoutingEnableParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface EmailRoutingGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

EmailRouting.DNS = DNS;
EmailRouting.DNSRecordsSinglePage = DNSRecordsSinglePage;
EmailRouting.Rules = Rules;
EmailRouting.EmailRoutingRulesV4PagePaginationArray = EmailRoutingRulesV4PagePaginationArray;
EmailRouting.Addresses = Addresses;
EmailRouting.AddressesV4PagePaginationArray = AddressesV4PagePaginationArray;

export declare namespace EmailRouting {
  export {
    DNS as DNS,
    type DNSRecord as DNSRecord,
    type DNSCreateResponse as DNSCreateResponse,
    type DNSEditResponse as DNSEditResponse,
    type DNSGetResponse as DNSGetResponse,
    DNSRecordsSinglePage as DNSRecordsSinglePage,
    type DNSCreateParams as DNSCreateParams,
    type DNSDeleteParams as DNSDeleteParams,
    type DNSEditParams as DNSEditParams,
    type DNSGetParams as DNSGetParams,
  };

  export {
    Rules as Rules,
    type Action as Action,
    type EmailRoutingRule as EmailRoutingRule,
    type Matcher as Matcher,
    type RuleCreateResponse as RuleCreateResponse,
    type RuleUpdateResponse as RuleUpdateResponse,
    type RuleDeleteResponse as RuleDeleteResponse,
    type RuleGetResponse as RuleGetResponse,
    EmailRoutingRulesV4PagePaginationArray as EmailRoutingRulesV4PagePaginationArray,
    type RuleCreateParams as RuleCreateParams,
    type RuleUpdateParams as RuleUpdateParams,
    type RuleListParams as RuleListParams,
    type RuleDeleteParams as RuleDeleteParams,
    type RuleGetParams as RuleGetParams,
  };

  export {
    Addresses as Addresses,
    type Address as Address,
    AddressesV4PagePaginationArray as AddressesV4PagePaginationArray,
    type AddressCreateParams as AddressCreateParams,
    type AddressListParams as AddressListParams,
    type AddressDeleteParams as AddressDeleteParams,
    type AddressGetParams as AddressGetParams,
  };
}
