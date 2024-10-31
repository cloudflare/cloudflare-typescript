// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as AllowPatternsAPI from './allow-patterns';
import {
  AllowPatternCreateParams,
  AllowPatternCreateResponse,
  AllowPatternDeleteParams,
  AllowPatternDeleteResponse,
  AllowPatternEditParams,
  AllowPatternEditResponse,
  AllowPatternGetParams,
  AllowPatternGetResponse,
  AllowPatternListParams,
  AllowPatternListResponse,
  AllowPatternListResponsesV4PagePaginationArray,
  AllowPatterns,
} from './allow-patterns';
import * as BlockSendersAPI from './block-senders';
import {
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
import * as DomainsAPI from './domains';
import {
  DomainDeleteParams,
  DomainDeleteResponse,
  DomainEditParams,
  DomainEditResponse,
  DomainListParams,
  DomainListResponse,
  DomainListResponsesV4PagePaginationArray,
  Domains,
} from './domains';
import * as ImpersonationRegistryAPI from './impersonation-registry';
import {
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
import * as TrustedDomainsAPI from './trusted-domains';
import {
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

export class Settings extends APIResource {
  allowPatterns: AllowPatternsAPI.AllowPatterns = new AllowPatternsAPI.AllowPatterns(this._client);
  blockSenders: BlockSendersAPI.BlockSenders = new BlockSendersAPI.BlockSenders(this._client);
  domains: DomainsAPI.Domains = new DomainsAPI.Domains(this._client);
  impersonationRegistry: ImpersonationRegistryAPI.ImpersonationRegistry =
    new ImpersonationRegistryAPI.ImpersonationRegistry(this._client);
  trustedDomains: TrustedDomainsAPI.TrustedDomains = new TrustedDomainsAPI.TrustedDomains(this._client);
}

Settings.AllowPatterns = AllowPatterns;
Settings.AllowPatternListResponsesV4PagePaginationArray = AllowPatternListResponsesV4PagePaginationArray;
Settings.BlockSenders = BlockSenders;
Settings.BlockSenderListResponsesV4PagePaginationArray = BlockSenderListResponsesV4PagePaginationArray;
Settings.Domains = Domains;
Settings.DomainListResponsesV4PagePaginationArray = DomainListResponsesV4PagePaginationArray;
Settings.ImpersonationRegistry = ImpersonationRegistry;
Settings.ImpersonationRegistryListResponsesV4PagePaginationArray =
  ImpersonationRegistryListResponsesV4PagePaginationArray;
Settings.TrustedDomains = TrustedDomains;
Settings.TrustedDomainListResponsesV4PagePaginationArray = TrustedDomainListResponsesV4PagePaginationArray;

export declare namespace Settings {
  export {
    AllowPatterns as AllowPatterns,
    type AllowPatternCreateResponse as AllowPatternCreateResponse,
    type AllowPatternListResponse as AllowPatternListResponse,
    type AllowPatternDeleteResponse as AllowPatternDeleteResponse,
    type AllowPatternEditResponse as AllowPatternEditResponse,
    type AllowPatternGetResponse as AllowPatternGetResponse,
    AllowPatternListResponsesV4PagePaginationArray as AllowPatternListResponsesV4PagePaginationArray,
    type AllowPatternCreateParams as AllowPatternCreateParams,
    type AllowPatternListParams as AllowPatternListParams,
    type AllowPatternDeleteParams as AllowPatternDeleteParams,
    type AllowPatternEditParams as AllowPatternEditParams,
    type AllowPatternGetParams as AllowPatternGetParams,
  };

  export {
    BlockSenders as BlockSenders,
    type BlockSenderCreateResponse as BlockSenderCreateResponse,
    type BlockSenderListResponse as BlockSenderListResponse,
    type BlockSenderDeleteResponse as BlockSenderDeleteResponse,
    type BlockSenderEditResponse as BlockSenderEditResponse,
    type BlockSenderGetResponse as BlockSenderGetResponse,
    BlockSenderListResponsesV4PagePaginationArray as BlockSenderListResponsesV4PagePaginationArray,
    type BlockSenderCreateParams as BlockSenderCreateParams,
    type BlockSenderListParams as BlockSenderListParams,
    type BlockSenderDeleteParams as BlockSenderDeleteParams,
    type BlockSenderEditParams as BlockSenderEditParams,
    type BlockSenderGetParams as BlockSenderGetParams,
  };

  export {
    Domains as Domains,
    type DomainListResponse as DomainListResponse,
    type DomainDeleteResponse as DomainDeleteResponse,
    type DomainEditResponse as DomainEditResponse,
    DomainListResponsesV4PagePaginationArray as DomainListResponsesV4PagePaginationArray,
    type DomainListParams as DomainListParams,
    type DomainDeleteParams as DomainDeleteParams,
    type DomainEditParams as DomainEditParams,
  };

  export {
    ImpersonationRegistry as ImpersonationRegistry,
    type ImpersonationRegistryCreateResponse as ImpersonationRegistryCreateResponse,
    type ImpersonationRegistryListResponse as ImpersonationRegistryListResponse,
    type ImpersonationRegistryDeleteResponse as ImpersonationRegistryDeleteResponse,
    type ImpersonationRegistryEditResponse as ImpersonationRegistryEditResponse,
    type ImpersonationRegistryGetResponse as ImpersonationRegistryGetResponse,
    ImpersonationRegistryListResponsesV4PagePaginationArray as ImpersonationRegistryListResponsesV4PagePaginationArray,
    type ImpersonationRegistryCreateParams as ImpersonationRegistryCreateParams,
    type ImpersonationRegistryListParams as ImpersonationRegistryListParams,
    type ImpersonationRegistryDeleteParams as ImpersonationRegistryDeleteParams,
    type ImpersonationRegistryEditParams as ImpersonationRegistryEditParams,
    type ImpersonationRegistryGetParams as ImpersonationRegistryGetParams,
  };

  export {
    TrustedDomains as TrustedDomains,
    type TrustedDomainCreateResponse as TrustedDomainCreateResponse,
    type TrustedDomainListResponse as TrustedDomainListResponse,
    type TrustedDomainDeleteResponse as TrustedDomainDeleteResponse,
    type TrustedDomainEditResponse as TrustedDomainEditResponse,
    type TrustedDomainGetResponse as TrustedDomainGetResponse,
    TrustedDomainListResponsesV4PagePaginationArray as TrustedDomainListResponsesV4PagePaginationArray,
    type TrustedDomainCreateParams as TrustedDomainCreateParams,
    type TrustedDomainListParams as TrustedDomainListParams,
    type TrustedDomainDeleteParams as TrustedDomainDeleteParams,
    type TrustedDomainEditParams as TrustedDomainEditParams,
    type TrustedDomainGetParams as TrustedDomainGetParams,
  };
}
