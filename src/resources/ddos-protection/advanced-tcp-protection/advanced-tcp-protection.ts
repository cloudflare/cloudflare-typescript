// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as StatusAPI from './status';
import {
  BaseStatus,
  Status,
  StatusEditParams,
  StatusEditResponse,
  StatusGetParams,
  StatusGetResponse,
} from './status';
import * as AllowlistAPI from './allowlist/allowlist';
import {
  Allowlist,
  AllowlistBulkDeleteParams,
  AllowlistBulkDeleteResponse,
  AllowlistCreateParams,
  AllowlistCreateResponse,
  AllowlistListParams,
  AllowlistListResponse,
  AllowlistListResponsesV4PagePaginationArray,
  BaseAllowlist,
} from './allowlist/allowlist';
import * as PrefixesAPI from './prefixes/prefixes';
import {
  BasePrefixes,
  PrefixBulkCreateParams,
  PrefixBulkCreateResponse,
  PrefixBulkCreateResponsesSinglePage,
  PrefixBulkDeleteParams,
  PrefixBulkDeleteResponse,
  PrefixCreateParams,
  PrefixCreateResponse,
  PrefixListParams,
  PrefixListResponse,
  PrefixListResponsesV4PagePaginationArray,
  Prefixes,
} from './prefixes/prefixes';
import * as SynProtectionAPI from './syn-protection/syn-protection';
import { BaseSynProtection, SynProtection } from './syn-protection/syn-protection';
import * as TCPFlowProtectionAPI from './tcp-flow-protection/tcp-flow-protection';
import { BaseTCPFlowProtection, TCPFlowProtection } from './tcp-flow-protection/tcp-flow-protection';

export class BaseAdvancedTCPProtection extends APIResource {
  static override readonly _key: readonly ['DDoSProtection', 'advancedTCPProtection'] = Object.freeze([
    'DDoSProtection',
    'advancedTCPProtection',
  ] as const);
}
export class AdvancedTCPProtection extends BaseAdvancedTCPProtection {
  allowlist: AllowlistAPI.Allowlist = new AllowlistAPI.Allowlist(this._client);
  prefixes: PrefixesAPI.Prefixes = new PrefixesAPI.Prefixes(this._client);
  synProtection: SynProtectionAPI.SynProtection = new SynProtectionAPI.SynProtection(this._client);
  tcpFlowProtection: TCPFlowProtectionAPI.TCPFlowProtection = new TCPFlowProtectionAPI.TCPFlowProtection(
    this._client,
  );
  status: StatusAPI.Status = new StatusAPI.Status(this._client);
}

AdvancedTCPProtection.Allowlist = Allowlist;
AdvancedTCPProtection.BaseAllowlist = BaseAllowlist;
AdvancedTCPProtection.Prefixes = Prefixes;
AdvancedTCPProtection.BasePrefixes = BasePrefixes;
AdvancedTCPProtection.SynProtection = SynProtection;
AdvancedTCPProtection.BaseSynProtection = BaseSynProtection;
AdvancedTCPProtection.TCPFlowProtection = TCPFlowProtection;
AdvancedTCPProtection.BaseTCPFlowProtection = BaseTCPFlowProtection;
AdvancedTCPProtection.Status = Status;
AdvancedTCPProtection.BaseStatus = BaseStatus;

export declare namespace AdvancedTCPProtection {
  export {
    Allowlist as Allowlist,
    BaseAllowlist as BaseAllowlist,
    type AllowlistCreateResponse as AllowlistCreateResponse,
    type AllowlistListResponse as AllowlistListResponse,
    type AllowlistBulkDeleteResponse as AllowlistBulkDeleteResponse,
    type AllowlistListResponsesV4PagePaginationArray as AllowlistListResponsesV4PagePaginationArray,
    type AllowlistCreateParams as AllowlistCreateParams,
    type AllowlistListParams as AllowlistListParams,
    type AllowlistBulkDeleteParams as AllowlistBulkDeleteParams,
  };

  export {
    Prefixes as Prefixes,
    BasePrefixes as BasePrefixes,
    type PrefixCreateResponse as PrefixCreateResponse,
    type PrefixListResponse as PrefixListResponse,
    type PrefixBulkCreateResponse as PrefixBulkCreateResponse,
    type PrefixBulkDeleteResponse as PrefixBulkDeleteResponse,
    type PrefixListResponsesV4PagePaginationArray as PrefixListResponsesV4PagePaginationArray,
    type PrefixBulkCreateResponsesSinglePage as PrefixBulkCreateResponsesSinglePage,
    type PrefixCreateParams as PrefixCreateParams,
    type PrefixListParams as PrefixListParams,
    type PrefixBulkCreateParams as PrefixBulkCreateParams,
    type PrefixBulkDeleteParams as PrefixBulkDeleteParams,
  };

  export { SynProtection as SynProtection, BaseSynProtection as BaseSynProtection };

  export { TCPFlowProtection as TCPFlowProtection, BaseTCPFlowProtection as BaseTCPFlowProtection };

  export {
    Status as Status,
    BaseStatus as BaseStatus,
    type StatusEditResponse as StatusEditResponse,
    type StatusGetResponse as StatusGetResponse,
    type StatusEditParams as StatusEditParams,
    type StatusGetParams as StatusGetParams,
  };
}
