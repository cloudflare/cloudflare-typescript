// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RecordsAPI from './records';
import {
  RecordListParams,
  RecordListResponse,
  RecordListResponsesV4PagePaginationArray,
  Records,
} from './records';

export class DNS extends APIResource {
  records: RecordsAPI.Records = new RecordsAPI.Records(this._client);
}

DNS.Records = Records;

export declare namespace DNS {
  export {
    Records as Records,
    type RecordListResponse as RecordListResponse,
    type RecordListResponsesV4PagePaginationArray as RecordListResponsesV4PagePaginationArray,
    type RecordListParams as RecordListParams,
  };
}
