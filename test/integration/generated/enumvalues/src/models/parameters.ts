/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { OperationParameter, OperationURLParameter } from "@azure/core-client";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/xml",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const url: OperationURLParameter = {
  parameterPath: "url",
  mapper: {
    serializedName: "url",
    required: true,
    xmlName: "url",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const encryptionAlgorith2: OperationParameter = {
  parameterPath: ["options", "cpkInfo", "encryptionAlgorith2"],
  mapper: {
    defaultValue: "AES256",
    isConstant: true,
    serializedName: "x-ms-encryption-algorithm",
    type: {
      name: "String"
    }
  }
};

export const encryptionAlgorithmWithTwoValues: OperationParameter = {
  parameterPath: ["options", "cpkInfo", "encryptionAlgorithmWithTwoValues"],
  mapper: {
    serializedName: "x-ms-encryption-algorithm",
    xmlName: "x-ms-encryption-algorithm",
    type: {
      name: "Enum",
      allowedValues: ["AES256", "AES257"]
    }
  }
};
