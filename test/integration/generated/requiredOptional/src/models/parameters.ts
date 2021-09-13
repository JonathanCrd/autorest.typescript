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
import {
  IntWrapper as IntWrapperMapper,
  IntOptionalWrapper as IntOptionalWrapperMapper,
  StringWrapper as StringWrapperMapper,
  StringOptionalWrapper as StringOptionalWrapperMapper,
  Product as ProductMapper,
  ClassWrapper as ClassWrapperMapper,
  ClassOptionalWrapper as ClassOptionalWrapperMapper,
  ArrayWrapper as ArrayWrapperMapper,
  ArrayOptionalWrapper as ArrayOptionalWrapperMapper
} from "../models/mappers";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
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

export const pathParameter: OperationURLParameter = {
  parameterPath: "pathParameter",
  mapper: {
    serializedName: "pathParameter",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const queryParameter: OperationQueryParameter = {
  parameterPath: ["options", "queryParameter"],
  mapper: {
    serializedName: "queryParameter",
    type: {
      name: "String"
    }
  }
};

export const queryParameter1: OperationParameter = {
  parameterPath: ["options", "queryParameter"],
  mapper: {
    serializedName: "queryParameter",
    type: {
      name: "String"
    }
  }
};

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

export const bodyParameter: OperationParameter = {
  parameterPath: ["options", "bodyParameter"],
  mapper: {
    serializedName: "bodyParameter",
    type: {
      name: "String"
    }
  }
};

export const contentType1: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/octet-stream",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const bodyParameter1: OperationParameter = {
  parameterPath: ["options", "bodyParameter"],
  mapper: {
    serializedName: "bodyParameter",
    type: {
      name: "Stream"
    }
  }
};

export const accept1: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const requiredGlobalPath: OperationURLParameter = {
  parameterPath: "requiredGlobalPath",
  mapper: {
    serializedName: "required-global-path",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const requiredGlobalQuery: OperationQueryParameter = {
  parameterPath: "requiredGlobalQuery",
  mapper: {
    serializedName: "required-global-query",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const optionalGlobalQuery: OperationQueryParameter = {
  parameterPath: "optionalGlobalQuery",
  mapper: {
    serializedName: "optional-global-query",
    type: {
      name: "Number"
    }
  }
};

export const bodyParameter2: OperationParameter = {
  parameterPath: ["options", "bodyParameter"],
  mapper: {
    serializedName: "bodyParameter",
    type: {
      name: "Stream"
    }
  }
};

export const bodyParameter3: OperationParameter = {
  parameterPath: "bodyParameter",
  mapper: {
    serializedName: "bodyParameter",
    required: true,
    type: {
      name: "Stream"
    }
  }
};

export const bodyParameter4: OperationParameter = {
  parameterPath: "bodyParameter",
  mapper: {
    serializedName: "bodyParameter",
    required: true,
    type: {
      name: "Number"
    }
  }
};

export const bodyParameter5: OperationParameter = {
  parameterPath: ["options", "bodyParameter"],
  mapper: {
    serializedName: "bodyParameter",
    type: {
      name: "Number"
    }
  }
};

export const bodyParameter6: OperationParameter = {
  parameterPath: "bodyParameter",
  mapper: IntWrapperMapper
};

export const bodyParameter7: OperationParameter = {
  parameterPath: ["options", "bodyParameter"],
  mapper: IntOptionalWrapperMapper
};

export const headerParameter: OperationParameter = {
  parameterPath: "headerParameter",
  mapper: {
    serializedName: "headerParameter",
    required: true,
    type: {
      name: "Number"
    }
  }
};

export const headerParameter1: OperationParameter = {
  parameterPath: ["options", "headerParameter"],
  mapper: {
    serializedName: "headerParameter",
    type: {
      name: "Number"
    }
  }
};

export const bodyParameter8: OperationParameter = {
  parameterPath: "bodyParameter",
  mapper: {
    serializedName: "bodyParameter",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const bodyParameter9: OperationParameter = {
  parameterPath: "bodyParameter",
  mapper: StringWrapperMapper
};

export const bodyParameter10: OperationParameter = {
  parameterPath: ["options", "bodyParameter"],
  mapper: StringOptionalWrapperMapper
};

export const headerParameter2: OperationParameter = {
  parameterPath: "headerParameter",
  mapper: {
    serializedName: "headerParameter",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const bodyParameter11: OperationParameter = {
  parameterPath: ["options", "bodyParameter"],
  mapper: {
    serializedName: "bodyParameter",
    type: {
      name: "String"
    }
  }
};

export const bodyParameter12: OperationParameter = {
  parameterPath: "bodyParameter",
  mapper: ProductMapper
};

export const bodyParameter13: OperationParameter = {
  parameterPath: ["options", "bodyParameter"],
  mapper: ProductMapper
};

export const bodyParameter14: OperationParameter = {
  parameterPath: "bodyParameter",
  mapper: ClassWrapperMapper
};

export const bodyParameter15: OperationParameter = {
  parameterPath: ["options", "bodyParameter"],
  mapper: ClassOptionalWrapperMapper
};

export const bodyParameter16: OperationParameter = {
  parameterPath: "bodyParameter",
  mapper: {
    serializedName: "bodyParameter",
    required: true,
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

export const bodyParameter17: OperationParameter = {
  parameterPath: ["options", "bodyParameter"],
  mapper: {
    serializedName: "bodyParameter",
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

export const bodyParameter18: OperationParameter = {
  parameterPath: "bodyParameter",
  mapper: ArrayWrapperMapper
};

export const bodyParameter19: OperationParameter = {
  parameterPath: ["options", "bodyParameter"],
  mapper: ArrayOptionalWrapperMapper
};

export const headerParameter3: OperationParameter = {
  parameterPath: "headerParameter",
  mapper: {
    serializedName: "headerParameter",
    required: true,
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

export const headerParameter4: OperationParameter = {
  parameterPath: ["options", "headerParameter"],
  mapper: {
    serializedName: "headerParameter",
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
