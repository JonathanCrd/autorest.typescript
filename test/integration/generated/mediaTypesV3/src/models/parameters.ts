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

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const data: OperationParameter = {
  parameterPath: "data",
  mapper: {
    serializedName: "data",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "text/plain",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const $host: OperationURLParameter = {
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

export const excluded: OperationQueryParameter = {
  parameterPath: ["options", "excluded"],
  mapper: {
    serializedName: "excluded",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String"
        }
      }
    }
  }
};

export const contentType1: OperationParameter = {
  parameterPath: "contentType",
  mapper: {
    defaultValue: "application/octet-stream",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const data1: OperationParameter = {
  parameterPath: "data",
  mapper: {
    serializedName: "data",
    required: true,
    type: {
      name: "Stream"
    }
  }
};

export const accept1: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "text/plain",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const contentType2: OperationParameter = {
  parameterPath: "contentType",
  mapper: {
    defaultValue: "text/plain",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const thing: OperationURLParameter = {
  parameterPath: "thing",
  mapper: {
    serializedName: "thing",
    required: true,
    type: {
      name: "String"
    }
  }
};
