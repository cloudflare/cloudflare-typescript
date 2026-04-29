// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as TablesAPI from './tables/tables';
import { Tables } from './tables/tables';

export class Namespaces extends APIResource {
  tables: TablesAPI.Tables = new TablesAPI.Tables(this._client);
}

Namespaces.Tables = Tables;

export declare namespace Namespaces {
  export { Tables as Tables };
}
