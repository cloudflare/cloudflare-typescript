// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as WidgetsAPI from 'cloudflare/resources/challenges/widgets';

export class Challenges extends APIResource {
  widgets: WidgetsAPI.Widgets = new WidgetsAPI.Widgets(this._client);
}

export namespace Challenges {
  export import Widgets = WidgetsAPI.Widgets;
  export import WidgetCreateResponse = WidgetsAPI.WidgetCreateResponse;
  export import WidgetListResponse = WidgetsAPI.WidgetListResponse;
  export import WidgetDeleteResponse = WidgetsAPI.WidgetDeleteResponse;
  export import WidgetGetResponse = WidgetsAPI.WidgetGetResponse;
  export import WidgetReplaceResponse = WidgetsAPI.WidgetReplaceResponse;
  export import WidgetRotateSecretResponse = WidgetsAPI.WidgetRotateSecretResponse;
  export import WidgetListResponsesV4PagePaginationArray = WidgetsAPI.WidgetListResponsesV4PagePaginationArray;
  export import WidgetCreateParams = WidgetsAPI.WidgetCreateParams;
  export import WidgetListParams = WidgetsAPI.WidgetListParams;
  export import WidgetReplaceParams = WidgetsAPI.WidgetReplaceParams;
  export import WidgetRotateSecretParams = WidgetsAPI.WidgetRotateSecretParams;
}
