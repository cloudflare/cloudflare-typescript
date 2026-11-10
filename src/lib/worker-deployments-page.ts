import { AbstractPage, type PageRequestOptions, type V4PagePaginationParams } from '../core/pagination';
import { type BaseCloudflare } from '../client';
import { type FinalRequestOptions } from '../internal/request-options';
import { maybeObj } from '../internal/utils/values';

export interface WorkerDeploymentsPageResponse<Item> {
  result: { deployments: Array<Item> };
  result_info: { page?: number; per_page?: number };
}

export class WorkerDeploymentsPage<Item>
  extends AbstractPage<Item>
  implements WorkerDeploymentsPageResponse<Item>
{
  result: WorkerDeploymentsPageResponse<Item>['result'];
  result_info: WorkerDeploymentsPageResponse<Item>['result_info'];

  constructor(
    client: BaseCloudflare,
    response: Response,
    body: WorkerDeploymentsPageResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.result = body.result || { deployments: [] };
    this.result_info = body.result_info || {};
  }

  getPaginatedItems(): Item[] {
    return this.result.deployments;
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const query = this.options.query as V4PagePaginationParams;
    const currentPage = query?.page ?? 1;

    return {
      ...this.options,
      query: {
        ...maybeObj(this.options.query),
        page: currentPage + 1,
      },
    };
  }
}
