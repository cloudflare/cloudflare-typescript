// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseMarkdownForAgents extends APIResource {
  static override readonly _key: readonly ['radar', 'ai', 'markdownForAgents'] = Object.freeze([
    'radar',
    'ai',
    'markdownForAgents',
  ] as const);
}
export class MarkdownForAgents extends BaseMarkdownForAgents {}
