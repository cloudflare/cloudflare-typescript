// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as RoutingAPI from 'cloudflare/resources/emails/routing/routing';
import * as AddressesAPI from 'cloudflare/resources/emails/routing/addresses';
import * as DisablesAPI from 'cloudflare/resources/emails/routing/disables';
import * as DNSAPI from 'cloudflare/resources/emails/routing/dns';
import * as EnablesAPI from 'cloudflare/resources/emails/routing/enables';
import * as RulesAPI from 'cloudflare/resources/emails/routing/rules/rules';

export class Routing extends APIResource {
  disables: DisablesAPI.Disables = new DisablesAPI.Disables(this._client);
  dns: DNSAPI.DNS = new DNSAPI.DNS(this._client);
  enables: EnablesAPI.Enables = new EnablesAPI.Enables(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
  addresses: AddressesAPI.Addresses = new AddressesAPI.Addresses(this._client);

  /**
   * Get information about the settings for your Email Routing zone.
   */
  get(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<RoutingGetResponse> {
    return (
      this._client.get(`/zones/${zoneIdentifier}/email/routing`, options) as Core.APIPromise<{
        result: RoutingGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface RoutingGetResponse {
  /**
   * Email Routing settings identifier.
   */
  id?: string;

  /**
   * The date and time the settings have been created.
   */
  created?: string;

  /**
   * State of the zone settings for Email Routing.
   */
  enabled?: true | false;

  /**
   * The date and time the settings have been modified.
   */
  modified?: string;

  /**
   * Domain of your zone.
   */
  name?: string;

  /**
   * Flag to check if the user skipped the configuration wizard.
   */
  skip_wizard?: true | false;

  /**
   * Show the state of your account, and the type or configuration error.
   */
  status?: 'ready' | 'unconfigured' | 'misconfigured' | 'misconfigured/locked' | 'unlocked';

  /**
   * Email Routing settings tag. (Deprecated, replaced by Email Routing settings
   * identifier)
   */
  tag?: string;
}

export namespace Routing {
  export import RoutingGetResponse = RoutingAPI.RoutingGetResponse;
  export import Disables = DisablesAPI.Disables;
  export import DisableCreateResponse = DisablesAPI.DisableCreateResponse;
  export import DNS = DNSAPI.DNS;
  export import DNSGetResponse = DNSAPI.DNSGetResponse;
  export import Enables = EnablesAPI.Enables;
  export import EnableCreateResponse = EnablesAPI.EnableCreateResponse;
  export import Rules = RulesAPI.Rules;
  export import RuleCreateResponse = RulesAPI.RuleCreateResponse;
  export import RuleUpdateResponse = RulesAPI.RuleUpdateResponse;
  export import RuleListResponse = RulesAPI.RuleListResponse;
  export import RuleDeleteResponse = RulesAPI.RuleDeleteResponse;
  export import RuleGetResponse = RulesAPI.RuleGetResponse;
  export import RuleListResponsesV4PagePaginationArray = RulesAPI.RuleListResponsesV4PagePaginationArray;
  export import RuleCreateParams = RulesAPI.RuleCreateParams;
  export import RuleUpdateParams = RulesAPI.RuleUpdateParams;
  export import RuleListParams = RulesAPI.RuleListParams;
  export import Addresses = AddressesAPI.Addresses;
  export import AddressCreateResponse = AddressesAPI.AddressCreateResponse;
  export import AddressDeleteResponse = AddressesAPI.AddressDeleteResponse;
  export import AddressEmailRoutingDestinationAddressesListDestinationAddressesResponse = AddressesAPI.AddressEmailRoutingDestinationAddressesListDestinationAddressesResponse;
  export import AddressGetResponse = AddressesAPI.AddressGetResponse;
  export import AddressCreateParams = AddressesAPI.AddressCreateParams;
  export import AddressEmailRoutingDestinationAddressesListDestinationAddressesParams = AddressesAPI.AddressEmailRoutingDestinationAddressesListDestinationAddressesParams;
}
