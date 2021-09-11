/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const Product: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Product",
    modelProperties: {
      displayNames: {
        constraints: {
          MaxItems: 6,
          UniqueItems: true
        },
        serializedName: "display_names",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      capacity: {
        constraints: {
          ExclusiveMaximum: 100,
          ExclusiveMinimum: 0
        },
        serializedName: "capacity",
        type: {
          name: "Number"
        }
      },
      image: {
        constraints: {
          Pattern: new RegExp("http:\\/\\/\\w+")
        },
        serializedName: "image",
        type: {
          name: "String"
        }
      },
      child: {
        serializedName: "child",
        type: {
          name: "Composite",
          className: "ChildProduct"
        }
      },
      constChild: {
        serializedName: "constChild",
        type: {
          name: "Composite",
          className: "ConstantProduct"
        }
      },
      constInt: {
        defaultValue: 0,
        isConstant: true,
        serializedName: "constInt",
        type: {
          name: "Number"
        }
      },
      constString: {
        defaultValue: "constant",
        isConstant: true,
        serializedName: "constString",
        type: {
          name: "String"
        }
      },
      constStringAsEnum: {
        isConstant: true,
        serializedName: "constStringAsEnum",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ChildProduct: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ChildProduct",
    modelProperties: {
      constProperty: {
        defaultValue: "constant",
        isConstant: true,
        serializedName: "constProperty",
        type: {
          name: "String"
        }
      },
      count: {
        serializedName: "count",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ConstantProduct: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ConstantProduct",
    modelProperties: {
      constProperty: {
        defaultValue: "constant",
        isConstant: true,
        serializedName: "constProperty",
        type: {
          name: "String"
        }
      },
      constProperty2: {
        defaultValue: "constant2",
        isConstant: true,
        serializedName: "constProperty2",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ErrorModel: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorModel",
    modelProperties: {
      code: {
        serializedName: "code",
        type: {
          name: "Number"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      fields: {
        serializedName: "fields",
        type: {
          name: "String"
        }
      }
    }
  }
};
