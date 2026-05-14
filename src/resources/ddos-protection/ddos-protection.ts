// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AdvancedTCPProtectionAPI from './advanced-tcp-protection/advanced-tcp-protection';
import {
  AdvancedTCPProtection,
  BaseAdvancedTCPProtection,
} from './advanced-tcp-protection/advanced-tcp-protection';

export class BaseDDoSProtection extends APIResource {
  static override readonly _key: readonly ['DDoSProtection'] = Object.freeze(['DDoSProtection'] as const);
}
export class DDoSProtection extends BaseDDoSProtection {
  advancedTCPProtection: AdvancedTCPProtectionAPI.AdvancedTCPProtection =
    new AdvancedTCPProtectionAPI.AdvancedTCPProtection(this._client);
}

DDoSProtection.AdvancedTCPProtection = AdvancedTCPProtection;
DDoSProtection.BaseAdvancedTCPProtection = BaseAdvancedTCPProtection;

export declare namespace DDoSProtection {
  export {
    AdvancedTCPProtection as AdvancedTCPProtection,
    BaseAdvancedTCPProtection as BaseAdvancedTCPProtection,
  };
}
