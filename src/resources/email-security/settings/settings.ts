// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AllowPoliciesAPI from './allow-policies';
import {
  AllowPolicies,
  AllowPolicyBatchParams,
  AllowPolicyBatchResponse,
  AllowPolicyCreateParams,
  AllowPolicyCreateResponse,
  AllowPolicyDeleteParams,
  AllowPolicyDeleteResponse,
  AllowPolicyEditParams,
  AllowPolicyEditResponse,
  AllowPolicyGetParams,
  AllowPolicyGetResponse,
  AllowPolicyListParams,
  AllowPolicyListResponse,
  AllowPolicyListResponsesV4PagePaginationArray,
  BaseAllowPolicies,
} from './allow-policies';
import * as BlockSendersAPI from './block-senders';
import {
  BaseBlockSenders,
  BlockSenderBatchParams,
  BlockSenderBatchResponse,
  BlockSenderCreateParams,
  BlockSenderCreateResponse,
  BlockSenderDeleteParams,
  BlockSenderDeleteResponse,
  BlockSenderEditParams,
  BlockSenderEditResponse,
  BlockSenderGetParams,
  BlockSenderGetResponse,
  BlockSenderListParams,
  BlockSenderListResponse,
  BlockSenderListResponsesV4PagePaginationArray,
  BlockSenders,
} from './block-senders';
import * as ContentPoliciesAPI from './content-policies';
import {
  BaseContentPolicies,
  ContentPolicies,
  ContentPolicyBatchParams,
  ContentPolicyBatchResponse,
  ContentPolicyCreateParams,
  ContentPolicyCreateResponse,
  ContentPolicyDeleteParams,
  ContentPolicyDeleteResponse,
  ContentPolicyEditParams,
  ContentPolicyEditResponse,
  ContentPolicyGetParams,
  ContentPolicyGetResponse,
  ContentPolicyListParams,
  ContentPolicyListResponse,
  ContentPolicyListResponsesV4PagePaginationArray,
} from './content-policies';
import * as DomainsAPI from './domains';
import {
  BaseDomains,
  DomainBatchParams,
  DomainBatchResponse,
  DomainBulkDeleteParams,
  DomainBulkDeleteResponse,
  DomainBulkDeleteResponsesSinglePage,
  DomainCreateParams,
  DomainCreateResponse,
  DomainDeleteParams,
  DomainDeleteResponse,
  DomainEditParams,
  DomainEditResponse,
  DomainGetParams,
  DomainGetResponse,
  DomainListParams,
  DomainListResponse,
  DomainListResponsesV4PagePaginationArray,
  DomainUpdateParams,
  DomainUpdateResponse,
  Domains,
} from './domains';
import * as ImpersonationRegistryAPI from './impersonation-registry';
import {
  BaseImpersonationRegistry,
  ImpersonationRegistry,
  ImpersonationRegistryCreateParams,
  ImpersonationRegistryCreateResponse,
  ImpersonationRegistryDeleteParams,
  ImpersonationRegistryDeleteResponse,
  ImpersonationRegistryEditParams,
  ImpersonationRegistryEditResponse,
  ImpersonationRegistryGetParams,
  ImpersonationRegistryGetResponse,
  ImpersonationRegistryListParams,
  ImpersonationRegistryListResponse,
  ImpersonationRegistryListResponsesV4PagePaginationArray,
} from './impersonation-registry';
import * as SendingDomainRestrictionsAPI from './sending-domain-restrictions';
import {
  BaseSendingDomainRestrictions,
  SendingDomainRestrictionCreateParams,
  SendingDomainRestrictionCreateResponse,
  SendingDomainRestrictionDeleteParams,
  SendingDomainRestrictionDeleteResponse,
  SendingDomainRestrictionEditParams,
  SendingDomainRestrictionEditResponse,
  SendingDomainRestrictionGetParams,
  SendingDomainRestrictionGetResponse,
  SendingDomainRestrictionListParams,
  SendingDomainRestrictionListResponse,
  SendingDomainRestrictionListResponsesV4PagePaginationArray,
  SendingDomainRestrictions,
} from './sending-domain-restrictions';
import * as TrustedDomainsAPI from './trusted-domains';
import {
  BaseTrustedDomains,
  TrustedDomainBatchParams,
  TrustedDomainBatchResponse,
  TrustedDomainCreateParams,
  TrustedDomainCreateResponse,
  TrustedDomainDeleteParams,
  TrustedDomainDeleteResponse,
  TrustedDomainEditParams,
  TrustedDomainEditResponse,
  TrustedDomainGetParams,
  TrustedDomainGetResponse,
  TrustedDomainListParams,
  TrustedDomainListResponse,
  TrustedDomainListResponsesV4PagePaginationArray,
  TrustedDomains,
} from './trusted-domains';
import * as URLIgnorePatternsAPI from './url-ignore-patterns';
import {
  BaseURLIgnorePatterns,
  URLIgnorePatternCreateParams,
  URLIgnorePatternCreateResponse,
  URLIgnorePatternDeleteParams,
  URLIgnorePatternDeleteResponse,
  URLIgnorePatternEditParams,
  URLIgnorePatternEditResponse,
  URLIgnorePatternGetParams,
  URLIgnorePatternGetResponse,
  URLIgnorePatternListParams,
  URLIgnorePatternListResponse,
  URLIgnorePatternListResponsesV4PagePaginationArray,
  URLIgnorePatterns,
} from './url-ignore-patterns';

export class BaseSettings extends APIResource {
  static override readonly _key: readonly ['emailSecurity', 'settings'] = Object.freeze([
    'emailSecurity',
    'settings',
  ] as const);
}
export class Settings extends BaseSettings {
  allowPolicies: AllowPoliciesAPI.AllowPolicies = new AllowPoliciesAPI.AllowPolicies(this._client);
  blockSenders: BlockSendersAPI.BlockSenders = new BlockSendersAPI.BlockSenders(this._client);
  contentPolicies: ContentPoliciesAPI.ContentPolicies = new ContentPoliciesAPI.ContentPolicies(this._client);
  domains: DomainsAPI.Domains = new DomainsAPI.Domains(this._client);
  impersonationRegistry: ImpersonationRegistryAPI.ImpersonationRegistry =
    new ImpersonationRegistryAPI.ImpersonationRegistry(this._client);
  sendingDomainRestrictions: SendingDomainRestrictionsAPI.SendingDomainRestrictions =
    new SendingDomainRestrictionsAPI.SendingDomainRestrictions(this._client);
  trustedDomains: TrustedDomainsAPI.TrustedDomains = new TrustedDomainsAPI.TrustedDomains(this._client);
  urlIgnorePatterns: URLIgnorePatternsAPI.URLIgnorePatterns = new URLIgnorePatternsAPI.URLIgnorePatterns(
    this._client,
  );
}

Settings.AllowPolicies = AllowPolicies;
Settings.BaseAllowPolicies = BaseAllowPolicies;
Settings.BlockSenders = BlockSenders;
Settings.BaseBlockSenders = BaseBlockSenders;
Settings.ContentPolicies = ContentPolicies;
Settings.BaseContentPolicies = BaseContentPolicies;
Settings.Domains = Domains;
Settings.BaseDomains = BaseDomains;
Settings.ImpersonationRegistry = ImpersonationRegistry;
Settings.BaseImpersonationRegistry = BaseImpersonationRegistry;
Settings.SendingDomainRestrictions = SendingDomainRestrictions;
Settings.BaseSendingDomainRestrictions = BaseSendingDomainRestrictions;
Settings.TrustedDomains = TrustedDomains;
Settings.BaseTrustedDomains = BaseTrustedDomains;
Settings.URLIgnorePatterns = URLIgnorePatterns;
Settings.BaseURLIgnorePatterns = BaseURLIgnorePatterns;

export declare namespace Settings {
  export {
    AllowPolicies as AllowPolicies,
    BaseAllowPolicies as BaseAllowPolicies,
    type AllowPolicyCreateResponse as AllowPolicyCreateResponse,
    type AllowPolicyListResponse as AllowPolicyListResponse,
    type AllowPolicyDeleteResponse as AllowPolicyDeleteResponse,
    type AllowPolicyBatchResponse as AllowPolicyBatchResponse,
    type AllowPolicyEditResponse as AllowPolicyEditResponse,
    type AllowPolicyGetResponse as AllowPolicyGetResponse,
    type AllowPolicyListResponsesV4PagePaginationArray as AllowPolicyListResponsesV4PagePaginationArray,
    type AllowPolicyCreateParams as AllowPolicyCreateParams,
    type AllowPolicyListParams as AllowPolicyListParams,
    type AllowPolicyDeleteParams as AllowPolicyDeleteParams,
    type AllowPolicyBatchParams as AllowPolicyBatchParams,
    type AllowPolicyEditParams as AllowPolicyEditParams,
    type AllowPolicyGetParams as AllowPolicyGetParams,
  };

  export {
    BlockSenders as BlockSenders,
    BaseBlockSenders as BaseBlockSenders,
    type BlockSenderCreateResponse as BlockSenderCreateResponse,
    type BlockSenderListResponse as BlockSenderListResponse,
    type BlockSenderDeleteResponse as BlockSenderDeleteResponse,
    type BlockSenderBatchResponse as BlockSenderBatchResponse,
    type BlockSenderEditResponse as BlockSenderEditResponse,
    type BlockSenderGetResponse as BlockSenderGetResponse,
    type BlockSenderListResponsesV4PagePaginationArray as BlockSenderListResponsesV4PagePaginationArray,
    type BlockSenderCreateParams as BlockSenderCreateParams,
    type BlockSenderListParams as BlockSenderListParams,
    type BlockSenderDeleteParams as BlockSenderDeleteParams,
    type BlockSenderBatchParams as BlockSenderBatchParams,
    type BlockSenderEditParams as BlockSenderEditParams,
    type BlockSenderGetParams as BlockSenderGetParams,
  };

  export {
    ContentPolicies as ContentPolicies,
    BaseContentPolicies as BaseContentPolicies,
    type ContentPolicyCreateResponse as ContentPolicyCreateResponse,
    type ContentPolicyListResponse as ContentPolicyListResponse,
    type ContentPolicyDeleteResponse as ContentPolicyDeleteResponse,
    type ContentPolicyBatchResponse as ContentPolicyBatchResponse,
    type ContentPolicyEditResponse as ContentPolicyEditResponse,
    type ContentPolicyGetResponse as ContentPolicyGetResponse,
    type ContentPolicyListResponsesV4PagePaginationArray as ContentPolicyListResponsesV4PagePaginationArray,
    type ContentPolicyCreateParams as ContentPolicyCreateParams,
    type ContentPolicyListParams as ContentPolicyListParams,
    type ContentPolicyDeleteParams as ContentPolicyDeleteParams,
    type ContentPolicyBatchParams as ContentPolicyBatchParams,
    type ContentPolicyEditParams as ContentPolicyEditParams,
    type ContentPolicyGetParams as ContentPolicyGetParams,
  };

  export {
    Domains as Domains,
    BaseDomains as BaseDomains,
    type DomainCreateResponse as DomainCreateResponse,
    type DomainUpdateResponse as DomainUpdateResponse,
    type DomainListResponse as DomainListResponse,
    type DomainDeleteResponse as DomainDeleteResponse,
    type DomainBatchResponse as DomainBatchResponse,
    type DomainBulkDeleteResponse as DomainBulkDeleteResponse,
    type DomainEditResponse as DomainEditResponse,
    type DomainGetResponse as DomainGetResponse,
    type DomainListResponsesV4PagePaginationArray as DomainListResponsesV4PagePaginationArray,
    type DomainBulkDeleteResponsesSinglePage as DomainBulkDeleteResponsesSinglePage,
    type DomainCreateParams as DomainCreateParams,
    type DomainUpdateParams as DomainUpdateParams,
    type DomainListParams as DomainListParams,
    type DomainDeleteParams as DomainDeleteParams,
    type DomainBatchParams as DomainBatchParams,
    type DomainBulkDeleteParams as DomainBulkDeleteParams,
    type DomainEditParams as DomainEditParams,
    type DomainGetParams as DomainGetParams,
  };

  export {
    ImpersonationRegistry as ImpersonationRegistry,
    BaseImpersonationRegistry as BaseImpersonationRegistry,
    type ImpersonationRegistryCreateResponse as ImpersonationRegistryCreateResponse,
    type ImpersonationRegistryListResponse as ImpersonationRegistryListResponse,
    type ImpersonationRegistryDeleteResponse as ImpersonationRegistryDeleteResponse,
    type ImpersonationRegistryEditResponse as ImpersonationRegistryEditResponse,
    type ImpersonationRegistryGetResponse as ImpersonationRegistryGetResponse,
    type ImpersonationRegistryListResponsesV4PagePaginationArray as ImpersonationRegistryListResponsesV4PagePaginationArray,
    type ImpersonationRegistryCreateParams as ImpersonationRegistryCreateParams,
    type ImpersonationRegistryListParams as ImpersonationRegistryListParams,
    type ImpersonationRegistryDeleteParams as ImpersonationRegistryDeleteParams,
    type ImpersonationRegistryEditParams as ImpersonationRegistryEditParams,
    type ImpersonationRegistryGetParams as ImpersonationRegistryGetParams,
  };

  export {
    SendingDomainRestrictions as SendingDomainRestrictions,
    BaseSendingDomainRestrictions as BaseSendingDomainRestrictions,
    type SendingDomainRestrictionCreateResponse as SendingDomainRestrictionCreateResponse,
    type SendingDomainRestrictionListResponse as SendingDomainRestrictionListResponse,
    type SendingDomainRestrictionDeleteResponse as SendingDomainRestrictionDeleteResponse,
    type SendingDomainRestrictionEditResponse as SendingDomainRestrictionEditResponse,
    type SendingDomainRestrictionGetResponse as SendingDomainRestrictionGetResponse,
    type SendingDomainRestrictionListResponsesV4PagePaginationArray as SendingDomainRestrictionListResponsesV4PagePaginationArray,
    type SendingDomainRestrictionCreateParams as SendingDomainRestrictionCreateParams,
    type SendingDomainRestrictionListParams as SendingDomainRestrictionListParams,
    type SendingDomainRestrictionDeleteParams as SendingDomainRestrictionDeleteParams,
    type SendingDomainRestrictionEditParams as SendingDomainRestrictionEditParams,
    type SendingDomainRestrictionGetParams as SendingDomainRestrictionGetParams,
  };

  export {
    TrustedDomains as TrustedDomains,
    BaseTrustedDomains as BaseTrustedDomains,
    type TrustedDomainCreateResponse as TrustedDomainCreateResponse,
    type TrustedDomainListResponse as TrustedDomainListResponse,
    type TrustedDomainDeleteResponse as TrustedDomainDeleteResponse,
    type TrustedDomainBatchResponse as TrustedDomainBatchResponse,
    type TrustedDomainEditResponse as TrustedDomainEditResponse,
    type TrustedDomainGetResponse as TrustedDomainGetResponse,
    type TrustedDomainListResponsesV4PagePaginationArray as TrustedDomainListResponsesV4PagePaginationArray,
    type TrustedDomainCreateParams as TrustedDomainCreateParams,
    type TrustedDomainListParams as TrustedDomainListParams,
    type TrustedDomainDeleteParams as TrustedDomainDeleteParams,
    type TrustedDomainBatchParams as TrustedDomainBatchParams,
    type TrustedDomainEditParams as TrustedDomainEditParams,
    type TrustedDomainGetParams as TrustedDomainGetParams,
  };

  export {
    URLIgnorePatterns as URLIgnorePatterns,
    BaseURLIgnorePatterns as BaseURLIgnorePatterns,
    type URLIgnorePatternCreateResponse as URLIgnorePatternCreateResponse,
    type URLIgnorePatternListResponse as URLIgnorePatternListResponse,
    type URLIgnorePatternDeleteResponse as URLIgnorePatternDeleteResponse,
    type URLIgnorePatternEditResponse as URLIgnorePatternEditResponse,
    type URLIgnorePatternGetResponse as URLIgnorePatternGetResponse,
    type URLIgnorePatternListResponsesV4PagePaginationArray as URLIgnorePatternListResponsesV4PagePaginationArray,
    type URLIgnorePatternCreateParams as URLIgnorePatternCreateParams,
    type URLIgnorePatternListParams as URLIgnorePatternListParams,
    type URLIgnorePatternDeleteParams as URLIgnorePatternDeleteParams,
    type URLIgnorePatternEditParams as URLIgnorePatternEditParams,
    type URLIgnorePatternGetParams as URLIgnorePatternGetParams,
  };
}
