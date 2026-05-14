// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AdvancedTCPProtectionAPI from './advanced-tcp-protection/advanced-tcp-protection';
import { AdvancedTCPProtection } from './advanced-tcp-protection/advanced-tcp-protection';

export class DDoSProtection extends APIResource {
  advancedTCPProtection: AdvancedTCPProtectionAPI.AdvancedTCPProtection =
    new AdvancedTCPProtectionAPI.AdvancedTCPProtection(this._client);
}

DDoSProtection.AdvancedTCPProtection = AdvancedTCPProtection;

export declare namespace DDoSProtection {
  export { AdvancedTCPProtection as AdvancedTCPProtection };
}
