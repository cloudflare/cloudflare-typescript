// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as UserAgentsAPI from './user-agents';
import { BaseUserAgents, UserAgents } from './user-agents';

export class BaseTop extends APIResource {
  static override readonly _key: readonly ['radar', 'robotsTXT', 'top'] = Object.freeze([
    'radar',
    'robotsTXT',
    'top',
  ] as const);
}
export class Top extends BaseTop {
  userAgents: UserAgentsAPI.UserAgents = new UserAgentsAPI.UserAgents(this._client);
}

Top.UserAgents = UserAgents;
Top.BaseUserAgents = BaseUserAgents;

export declare namespace Top {
  export { UserAgents as UserAgents, BaseUserAgents as BaseUserAgents };
}
