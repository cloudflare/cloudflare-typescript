// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../../core/resource';
import * as MaliciousAPI from './malicious';
import { BaseMalicious, Malicious } from './malicious';
import * as SpamAPI from './spam';
import { BaseSpam, Spam } from './spam';
import * as SpoofAPI from './spoof';
import { BaseSpoof, Spoof } from './spoof';

export class BaseTLDs extends APIResource {
  static override readonly _key: readonly ['radar', 'email', 'security', 'top', 'tlds'] = Object.freeze([
    'radar',
    'email',
    'security',
    'top',
    'tlds',
  ] as const);
}
export class TLDs extends BaseTLDs {
  malicious: MaliciousAPI.Malicious = new MaliciousAPI.Malicious(this._client);
  spam: SpamAPI.Spam = new SpamAPI.Spam(this._client);
  spoof: SpoofAPI.Spoof = new SpoofAPI.Spoof(this._client);
}

TLDs.Malicious = Malicious;
TLDs.BaseMalicious = BaseMalicious;
TLDs.Spam = Spam;
TLDs.BaseSpam = BaseSpam;
TLDs.Spoof = Spoof;
TLDs.BaseSpoof = BaseSpoof;

export declare namespace TLDs {
  export { Malicious as Malicious, BaseMalicious as BaseMalicious };

  export { Spam as Spam, BaseSpam as BaseSpam };

  export { Spoof as Spoof, BaseSpoof as BaseSpoof };
}
