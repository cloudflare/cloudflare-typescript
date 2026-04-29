// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as AllowPoliciesAPI from './allow-policies';
import { AllowPolicies } from './allow-policies';
import * as BlockSendersAPI from './block-senders';
import { BlockSenders } from './block-senders';
import * as DomainsAPI from './domains';
import { Domains } from './domains';
import * as ImpersonationRegistryAPI from './impersonation-registry';
import { ImpersonationRegistry } from './impersonation-registry';
import * as TrustedDomainsAPI from './trusted-domains';
import { TrustedDomains } from './trusted-domains';

export class Settings extends APIResource {
  allowPolicies: AllowPoliciesAPI.AllowPolicies = new AllowPoliciesAPI.AllowPolicies(this._client);
  blockSenders: BlockSendersAPI.BlockSenders = new BlockSendersAPI.BlockSenders(this._client);
  domains: DomainsAPI.Domains = new DomainsAPI.Domains(this._client);
  impersonationRegistry: ImpersonationRegistryAPI.ImpersonationRegistry =
    new ImpersonationRegistryAPI.ImpersonationRegistry(this._client);
  trustedDomains: TrustedDomainsAPI.TrustedDomains = new TrustedDomainsAPI.TrustedDomains(this._client);
}

Settings.AllowPolicies = AllowPolicies;
Settings.BlockSenders = BlockSenders;
Settings.Domains = Domains;
Settings.ImpersonationRegistry = ImpersonationRegistry;
Settings.TrustedDomains = TrustedDomains;

export declare namespace Settings {
  export { AllowPolicies as AllowPolicies };

  export { BlockSenders as BlockSenders };

  export { Domains as Domains };

  export { ImpersonationRegistry as ImpersonationRegistry };

  export { TrustedDomains as TrustedDomains };
}
