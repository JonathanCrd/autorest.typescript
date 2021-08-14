/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Usages } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { StorageManagementClientContext } from "../storageManagementClientContext";
import {
  Usage,
  UsagesListByLocationOptionalParams,
  UsagesListByLocationResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Usages operations. */
export class UsagesImpl implements Usages {
  private readonly client: StorageManagementClientContext;

  /**
   * Initialize a new instance of the class Usages class.
   * @param client Reference to the service client
   */
  constructor(client: StorageManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets the current usage count and the limit for the resources of the location under the subscription.
   * @param location The location of the Azure Storage resource.
   * @param options The options parameters.
   */
  public listByLocation(
    location: string,
    options?: UsagesListByLocationOptionalParams
  ): PagedAsyncIterableIterator<Usage> {
    const iter = this.listByLocationPagingAll(location, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByLocationPagingPage(location, options);
      }
    };
  }

  private async *listByLocationPagingPage(
    location: string,
    options?: UsagesListByLocationOptionalParams
  ): AsyncIterableIterator<Usage[]> {
    let result = await this._listByLocation(location, options);
    yield result.value || [];
  }

  private async *listByLocationPagingAll(
    location: string,
    options?: UsagesListByLocationOptionalParams
  ): AsyncIterableIterator<Usage> {
    for await (const page of this.listByLocationPagingPage(location, options)) {
      yield* page;
    }
  }

  /**
   * Gets the current usage count and the limit for the resources of the location under the subscription.
   * @param location The location of the Azure Storage resource.
   * @param options The options parameters.
   */
  private _listByLocation(
    location: string,
    options?: UsagesListByLocationOptionalParams
  ): Promise<UsagesListByLocationResponse> {
    return this.client.sendOperationRequest(
      { location, options },
      listByLocationOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByLocationOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Storage/locations/{location}/usages",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.UsageListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location
  ],
  headerParameters: [Parameters.accept],
  serializer
};
