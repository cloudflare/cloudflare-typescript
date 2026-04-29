// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseEventTags extends APIResource {
  static override readonly _key: readonly ['cloudforceOne', 'threatEvents', 'eventTags'] = Object.freeze([
    'cloudforceOne',
    'threatEvents',
    'eventTags',
  ] as const);
}
export class EventTags extends BaseEventTags {}
