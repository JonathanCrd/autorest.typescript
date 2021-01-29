/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import { TokenCredential } from "@azure/core-auth";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { AutoRestLongRunningOperationTestServiceContext } from "./autoRestLongRunningOperationTestServiceContext";


class AutoRestLongRunningOperationTestService extends AutoRestLongRunningOperationTestServiceContext {
  // Operation groups
  lROs: operations.LROs;
  lRORetrys: operations.LRORetrys;
  lROSADs: operations.LROSADs;
  lROsCustomHeader: operations.LROsCustomHeader;

  /**
   * Initializes a new instance of the AutoRestLongRunningOperationTestService class.
   * @param credentials Credentials needed for the client to connect to Azure. Credentials needed to
   * authenticate the client using Azure Active Directory. Credentials implementing the
   * TokenCredential interface from the @azure/identity package are recommended. Credentials
   * implementing the ServiceClientCredentials interface from the older packages
   * @azure/ms-rest-nodeauth and @azure/ms-rest-browserauth are also supported. The simplest
   * TokenCredential credential can be obtained as follows:
   * ```js
   * const { DefaultAzureCredential } = require("@azure/identity");
   * const credential = new DefaultAzureCredential();
   * ```
   * For more information about these credentials, see {@link
   * https://github.com/Azure/azure-sdk-for-js/tree/master/sdk/identity/identity#authenticating-with-the-defaultazurecredential}
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials | TokenCredential, options?: Models.AutoRestLongRunningOperationTestServiceOptions) {
    super(credentials, options);
    this.lROs = new operations.LROs(this);
    this.lRORetrys = new operations.LRORetrys(this);
    this.lROSADs = new operations.LROSADs(this);
    this.lROsCustomHeader = new operations.LROsCustomHeader(this);
  }
}

// Operation Specifications

export {
  AutoRestLongRunningOperationTestService,
  AutoRestLongRunningOperationTestServiceContext,
  Models as AutoRestLongRunningOperationTestServiceModels,
  Mappers as AutoRestLongRunningOperationTestServiceMappers
};
export * from "./operations";
