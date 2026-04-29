// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as DatabaseAPI from './database/database';
import { Database } from './database/database';

export class D1 extends APIResource {
  database: DatabaseAPI.Database = new DatabaseAPI.Database(this._client);
}

D1.Database = Database;

export declare namespace D1 {
  export { Database as Database };
}
