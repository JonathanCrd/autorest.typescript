/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter
} from "@azure/core-client";
import { LanguageBatchInput as LanguageBatchInputMapper } from "../models/mappers";

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const input: OperationParameter = {
  parameterPath: "input",
  mapper: LanguageBatchInputMapper
};

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json, text/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const endpoint: OperationURLParameter = {
  parameterPath: "endpoint",
  mapper: {
    serializedName: "Endpoint",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const apiVersion: OperationURLParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "v3.1",
    isConstant: true,
    serializedName: "ApiVersion",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const modelVersion: OperationQueryParameter = {
  parameterPath: ["options", "modelVersion"],
  mapper: {
    serializedName: "model-version",
    type: {
      name: "String"
    }
  }
};

export const showStats: OperationQueryParameter = {
  parameterPath: ["options", "showStats"],
  mapper: {
    serializedName: "showStats",
    type: {
      name: "Boolean"
    }
  }
};

export const loggingOptOut: OperationQueryParameter = {
  parameterPath: ["options", "loggingOptOut"],
  mapper: {
    serializedName: "loggingOptOut",
    type: {
      name: "Boolean"
    }
  }
};
