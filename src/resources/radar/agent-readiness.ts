// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseAgentReadiness extends APIResource {
  static override readonly _key: readonly ['radar', 'agentReadiness'] = Object.freeze([
    'radar',
    'agentReadiness',
  ] as const);
}
export class AgentReadiness extends BaseAgentReadiness {}
