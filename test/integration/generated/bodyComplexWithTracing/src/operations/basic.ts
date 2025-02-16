/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { tracingClient } from "../tracing";
import { Basic } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { BodyComplexWithTracing } from "../bodyComplexWithTracing";
import {
  BasicGetValidOptionalParams,
  BasicGetValidResponse,
  BasicDef,
  BasicPutValidOptionalParams,
  BasicGetInvalidOptionalParams,
  BasicGetInvalidResponse,
  BasicGetEmptyOptionalParams,
  BasicGetEmptyResponse,
  BasicGetNullOptionalParams,
  BasicGetNullResponse,
  BasicGetNotProvidedOptionalParams,
  BasicGetNotProvidedResponse
} from "../models";

/** Class containing Basic operations. */
export class BasicImpl implements Basic {
  private readonly client: BodyComplexWithTracing;

  /**
   * Initialize a new instance of the class Basic class.
   * @param client Reference to the service client
   */
  constructor(client: BodyComplexWithTracing) {
    this.client = client;
  }

  /**
   * Get complex type {id: 2, name: 'abc', color: 'YELLOW'}
   * @param options The options parameters.
   */
  async getValid(
    options?: BasicGetValidOptionalParams
  ): Promise<BasicGetValidResponse> {
    return tracingClient.withSpan(
      "BodyComplexWithTracing.getValid",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { options },
          getValidOperationSpec
        ) as Promise<BasicGetValidResponse>;
      }
    );
  }

  /**
   * Please put {id: 2, name: 'abc', color: 'Magenta'}
   * @param complexBody Please put {id: 2, name: 'abc', color: 'Magenta'}
   * @param options The options parameters.
   */
  async putValid(
    complexBody: BasicDef,
    options?: BasicPutValidOptionalParams
  ): Promise<void> {
    return tracingClient.withSpan(
      "BodyComplexWithTracing.putValid",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { complexBody, options },
          putValidOperationSpec
        ) as Promise<void>;
      }
    );
  }

  /**
   * Get a basic complex type that is invalid for the local strong type
   * @param options The options parameters.
   */
  async getInvalid(
    options?: BasicGetInvalidOptionalParams
  ): Promise<BasicGetInvalidResponse> {
    return tracingClient.withSpan(
      "BodyComplexWithTracing.getInvalid",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { options },
          getInvalidOperationSpec
        ) as Promise<BasicGetInvalidResponse>;
      }
    );
  }

  /**
   * Get a basic complex type that is empty
   * @param options The options parameters.
   */
  async getEmpty(
    options?: BasicGetEmptyOptionalParams
  ): Promise<BasicGetEmptyResponse> {
    return tracingClient.withSpan(
      "BodyComplexWithTracing.getEmpty",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { options },
          getEmptyOperationSpec
        ) as Promise<BasicGetEmptyResponse>;
      }
    );
  }

  /**
   * Get a basic complex type whose properties are null
   * @param options The options parameters.
   */
  async getNull(
    options?: BasicGetNullOptionalParams
  ): Promise<BasicGetNullResponse> {
    return tracingClient.withSpan(
      "BodyComplexWithTracing.getNull",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { options },
          getNullOperationSpec
        ) as Promise<BasicGetNullResponse>;
      }
    );
  }

  /**
   * Get a basic complex type while the server doesn't provide a response payload
   * @param options The options parameters.
   */
  async getNotProvided(
    options?: BasicGetNotProvidedOptionalParams
  ): Promise<BasicGetNotProvidedResponse> {
    return tracingClient.withSpan(
      "BodyComplexWithTracing.getNotProvided",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { options },
          getNotProvidedOperationSpec
        ) as Promise<BasicGetNotProvidedResponse>;
      }
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getValidOperationSpec: coreClient.OperationSpec = {
  path: "/complex/basic/valid",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BasicDef
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const putValidOperationSpec: coreClient.OperationSpec = {
  path: "/complex/basic/valid",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.complexBody,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getInvalidOperationSpec: coreClient.OperationSpec = {
  path: "/complex/basic/invalid",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BasicDef
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getEmptyOperationSpec: coreClient.OperationSpec = {
  path: "/complex/basic/empty",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BasicDef
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getNullOperationSpec: coreClient.OperationSpec = {
  path: "/complex/basic/null",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BasicDef
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getNotProvidedOperationSpec: coreClient.OperationSpec = {
  path: "/complex/basic/notprovided",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BasicDef
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
