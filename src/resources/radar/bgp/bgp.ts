// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as IPsAPI from './ips';
import { BaseIPs, IPs } from './ips';
import * as RoutesAPI from './routes';
import { BaseRoutes, Routes } from './routes';
import * as HijacksAPI from './hijacks/hijacks';
import { BaseHijacks, Hijacks } from './hijacks/hijacks';
import * as LeaksAPI from './leaks/leaks';
import { BaseLeaks, Leaks } from './leaks/leaks';
import * as RPKIAPI from './rpki/rpki';
import { BaseRPKI, RPKI } from './rpki/rpki';
import * as TopAPI from './top/top';
import { BaseTop, Top } from './top/top';

export class BaseBGP extends APIResource {
  static override readonly _key: readonly ['radar', 'bgp'] = Object.freeze(['radar', 'bgp'] as const);
}
export class BGP extends BaseBGP {
  leaks: LeaksAPI.Leaks = new LeaksAPI.Leaks(this._client);
  top: TopAPI.Top = new TopAPI.Top(this._client);
  hijacks: HijacksAPI.Hijacks = new HijacksAPI.Hijacks(this._client);
  routes: RoutesAPI.Routes = new RoutesAPI.Routes(this._client);
  ips: IPsAPI.IPs = new IPsAPI.IPs(this._client);
  rpki: RPKIAPI.RPKI = new RPKIAPI.RPKI(this._client);
}

BGP.Leaks = Leaks;
BGP.BaseLeaks = BaseLeaks;
BGP.Top = Top;
BGP.BaseTop = BaseTop;
BGP.Hijacks = Hijacks;
BGP.BaseHijacks = BaseHijacks;
BGP.Routes = Routes;
BGP.BaseRoutes = BaseRoutes;
BGP.IPs = IPs;
BGP.BaseIPs = BaseIPs;
BGP.RPKI = RPKI;
BGP.BaseRPKI = BaseRPKI;

export declare namespace BGP {
  export { Leaks as Leaks, BaseLeaks as BaseLeaks };

  export { Top as Top, BaseTop as BaseTop };

  export { Hijacks as Hijacks, BaseHijacks as BaseHijacks };

  export { Routes as Routes, BaseRoutes as BaseRoutes };

  export { IPs as IPs, BaseIPs as BaseIPs };

  export { RPKI as RPKI, BaseRPKI as BaseRPKI };
}
