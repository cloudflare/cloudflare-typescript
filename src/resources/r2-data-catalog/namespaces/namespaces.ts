// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TablesAPI from './tables/tables';
import { BaseTables, Tables } from './tables/tables';

export class BaseNamespaces extends APIResource {
  static override readonly _key: readonly ['r2DataCatalog', 'namespaces'] = Object.freeze([
    'r2DataCatalog',
    'namespaces',
  ] as const);
}
export class Namespaces extends BaseNamespaces {
  tables: TablesAPI.Tables = new TablesAPI.Tables(this._client);
}

Namespaces.Tables = Tables;
Namespaces.BaseTables = BaseTables;

export declare namespace Namespaces {
  export { Tables as Tables, BaseTables as BaseTables };
}
