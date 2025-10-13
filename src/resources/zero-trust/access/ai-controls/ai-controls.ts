// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as McpAPI from './mcp';
import { Mcp } from './mcp';

export class AIControls extends APIResource {
  mcp: McpAPI.Mcp = new McpAPI.Mcp(this._client);
}

AIControls.Mcp = Mcp;

export declare namespace AIControls {
  export { Mcp as Mcp };
}
