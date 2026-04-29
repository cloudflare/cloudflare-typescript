// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DatabaseAPI from './database/database';
import { BaseDatabase, Database } from './database/database';

export class BaseD1 extends APIResource {
  static override readonly _key: readonly ['d1'] = Object.freeze(['d1'] as const);
}
export class D1 extends BaseD1 {
  database: DatabaseAPI.Database = new DatabaseAPI.Database(this._client);
}

D1.Database = Database;
D1.BaseDatabase = BaseDatabase;

export declare namespace D1 {
  export { Database as Database, BaseDatabase as BaseDatabase };
}
