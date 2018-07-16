/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/flattencomplexMappers";
import { AzureCompositeModelContext } from "../azureCompositeModelContext";

/** Class representing a Flattencomplex. */
export class Flattencomplex {
  private readonly client: AzureCompositeModelContext;

  /**
   * Create a Flattencomplex.
   * @param {AzureCompositeModelContext} client Reference to the service client.
   */
  constructor(client: AzureCompositeModelContext) {
    this.client = client;
  }

  /**
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  async getValidWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.MyBaseTypeUnion>> {

    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await this.client.sendOperationRequest(msRest.createOperationArguments({}, options), getValidOperationSpec);
    } catch (err) {
      return Promise.reject(err);
    }
    return Promise.resolve(operationRes);
  }

  /**
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.MyBaseTypeUnion} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.MyBaseTypeUnion} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  getValid(): Promise<Models.MyBaseTypeUnion>;
  getValid(options: msRest.RequestOptionsBase): Promise<Models.MyBaseTypeUnion>;
  getValid(callback: msRest.ServiceCallback<Models.MyBaseTypeUnion>): void;
  getValid(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.MyBaseTypeUnion>): void;
  getValid(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.MyBaseTypeUnion>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<Models.MyBaseTypeUnion>;
    if (!callback) {
      return this.getValidWithHttpOperationResponse(options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as Models.MyBaseTypeUnion);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.getValidWithHttpOperationResponse(options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as Models.MyBaseTypeUnion;
        return cb(err, result, data.request, data);
      });
    }
  }

}

// Operation Specifications
const getValidOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "complex/flatten/valid",
  headerParameters: [
    {
      parameterPath: "acceptLanguage",
      mapper: {
        serializedName: "accept-language",
        defaultValue: 'en-US',
        type: {
          name: "String"
        }
      }
    }
  ],
  responses: {
    200: {
      bodyMapper: Mappers.MyBaseType
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer: new msRest.Serializer(Mappers)
};
