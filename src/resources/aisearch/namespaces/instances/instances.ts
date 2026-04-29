// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ItemsAPI from './items';
import { BaseItems, Items } from './items';
import * as JobsAPI from './jobs';
import { BaseJobs, Jobs } from './jobs';

export class BaseInstances extends APIResource {
  static override readonly _key: readonly ['aiSearch', 'namespaces', 'instances'] = Object.freeze([
    'aiSearch',
    'namespaces',
    'instances',
  ] as const);
}
export class Instances extends BaseInstances {
  jobs: JobsAPI.Jobs = new JobsAPI.Jobs(this._client);
  items: ItemsAPI.Items = new ItemsAPI.Items(this._client);
}

Instances.Jobs = Jobs;
Instances.BaseJobs = BaseJobs;
Instances.Items = Items;
Instances.BaseItems = BaseItems;

export declare namespace Instances {
  export { Jobs as Jobs, BaseJobs as BaseJobs };

  export { Items as Items, BaseItems as BaseItems };
}
