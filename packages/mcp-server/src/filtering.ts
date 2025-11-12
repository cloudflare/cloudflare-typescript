// @ts-nocheck
import initJq from 'jq-web';

export async function maybeFilter(jqFilter: unknown | undefined, response: any): Promise<any> {
  if (jqFilter && typeof jqFilter === 'string') {
    return await jq(response, jqFilter);
  } else {
    return response;
  }
}

async function jq(json: any, jqFilter: string) {
  return (await initJq).json(json, jqFilter);
}

export function isJqError(error: any): error is Error {
  return error instanceof Error && 'stderr' in error;
}
