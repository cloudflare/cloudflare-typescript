// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as McpAPI from './mcp/mcp';
import { BaseMcp, Mcp } from './mcp/mcp';

export class BaseAIControls extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'access', 'aiControls'] = Object.freeze([
    'zeroTrust',
    'access',
    'aiControls',
  ] as const);
}
export class AIControls extends BaseAIControls {
  mcp: McpAPI.Mcp = new McpAPI.Mcp(this._client);
}

AIControls.Mcp = Mcp;
AIControls.BaseMcp = BaseMcp;

export declare namespace AIControls {
  export { Mcp as Mcp, BaseMcp as BaseMcp };
}
