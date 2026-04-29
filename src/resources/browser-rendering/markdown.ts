// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseMarkdown extends APIResource {
  static override readonly _key: readonly ['browserRendering', 'markdown'] = Object.freeze([
    'browserRendering',
    'markdown',
  ] as const);
}
export class Markdown extends BaseMarkdown {}
