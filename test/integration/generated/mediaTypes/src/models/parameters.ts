/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";

export const contentType: coreHttp.OperationParameter = {
  parameterPath: "contentType",
  mapper: {
    serializedName: "Content-Type",
    required: true,
    type: {
      name: "Enum",
      allowedValues: [
        "application/pdf",
        "image/jpeg",
        "image/png",
        "image/tiff"
      ]
    }
  }
};

export const input: coreHttp.OperationParameter = {
  parameterPath: "input",
  mapper: {
    serializedName: "input",
    required: true,
    type: {
      name: "Stream"
    }
  }
};

export const contentType1: coreHttp.OperationParameter = {
  parameterPath: "contentType",
  mapper: {
    defaultValue: "application/json",
    serializedName: "Content-Type",
    isConstant: true,
    type: {
      name: "String"
    }
  }
};

export const input1: coreHttp.OperationParameter = {
  parameterPath: ["options", "input"],
  mapper: Mappers.SourcePath
};

export const $host: coreHttp.OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
