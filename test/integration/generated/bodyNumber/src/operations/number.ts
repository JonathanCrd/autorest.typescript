/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { BodyNumberClient } from "../bodyNumberClient";
import {
  NumberGetNullResponse,
  NumberGetInvalidFloatResponse,
  NumberGetInvalidDoubleResponse,
  NumberGetInvalidDecimalResponse,
  NumberGetBigFloatResponse,
  NumberGetBigDoubleResponse,
  NumberGetBigDoublePositiveDecimalResponse,
  NumberGetBigDoubleNegativeDecimalResponse,
  NumberGetBigDecimalResponse,
  NumberGetBigDecimalPositiveDecimalResponse,
  NumberGetBigDecimalNegativeDecimalResponse,
  NumberGetSmallFloatResponse,
  NumberGetSmallDoubleResponse,
  NumberGetSmallDecimalResponse
} from "../models";

/**
 * Class representing a NumberOperations.
 */
export class NumberOperations {
  private readonly client: BodyNumberClient;

  /**
   * Initialize a new instance of the class NumberOperations class.
   * @param client Reference to the service client
   */
  constructor(client: BodyNumberClient) {
    this.client = client;
  }

  /**
   * Get null Number value
   * @param options The options parameters.
   */
  getNull(options?: coreHttp.OperationOptions): Promise<NumberGetNullResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getNullOperationSpec
    ) as Promise<NumberGetNullResponse>;
  }

  /**
   * Get invalid float Number value
   * @param options The options parameters.
   */
  getInvalidFloat(
    options?: coreHttp.OperationOptions
  ): Promise<NumberGetInvalidFloatResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getInvalidFloatOperationSpec
    ) as Promise<NumberGetInvalidFloatResponse>;
  }

  /**
   * Get invalid double Number value
   * @param options The options parameters.
   */
  getInvalidDouble(
    options?: coreHttp.OperationOptions
  ): Promise<NumberGetInvalidDoubleResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getInvalidDoubleOperationSpec
    ) as Promise<NumberGetInvalidDoubleResponse>;
  }

  /**
   * Get invalid decimal Number value
   * @param options The options parameters.
   */
  getInvalidDecimal(
    options?: coreHttp.OperationOptions
  ): Promise<NumberGetInvalidDecimalResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getInvalidDecimalOperationSpec
    ) as Promise<NumberGetInvalidDecimalResponse>;
  }

  /**
   * Put big float value 3.402823e+20
   * @param numberBody number body
   * @param options The options parameters.
   */
  putBigFloat(
    numberBody: number,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { numberBody, options: operationOptions },
      putBigFloatOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get big float value 3.402823e+20
   * @param options The options parameters.
   */
  getBigFloat(
    options?: coreHttp.OperationOptions
  ): Promise<NumberGetBigFloatResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getBigFloatOperationSpec
    ) as Promise<NumberGetBigFloatResponse>;
  }

  /**
   * Put big double value 2.5976931e+101
   * @param numberBody number body
   * @param options The options parameters.
   */
  putBigDouble(
    numberBody: number,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { numberBody, options: operationOptions },
      putBigDoubleOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get big double value 2.5976931e+101
   * @param options The options parameters.
   */
  getBigDouble(
    options?: coreHttp.OperationOptions
  ): Promise<NumberGetBigDoubleResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getBigDoubleOperationSpec
    ) as Promise<NumberGetBigDoubleResponse>;
  }

  /**
   * Put big double value 99999999.99
   * @param options The options parameters.
   */
  putBigDoublePositiveDecimal(
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      putBigDoublePositiveDecimalOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get big double value 99999999.99
   * @param options The options parameters.
   */
  getBigDoublePositiveDecimal(
    options?: coreHttp.OperationOptions
  ): Promise<NumberGetBigDoublePositiveDecimalResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getBigDoublePositiveDecimalOperationSpec
    ) as Promise<NumberGetBigDoublePositiveDecimalResponse>;
  }

  /**
   * Put big double value -99999999.99
   * @param options The options parameters.
   */
  putBigDoubleNegativeDecimal(
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      putBigDoubleNegativeDecimalOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get big double value -99999999.99
   * @param options The options parameters.
   */
  getBigDoubleNegativeDecimal(
    options?: coreHttp.OperationOptions
  ): Promise<NumberGetBigDoubleNegativeDecimalResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getBigDoubleNegativeDecimalOperationSpec
    ) as Promise<NumberGetBigDoubleNegativeDecimalResponse>;
  }

  /**
   * Put big decimal value 2.5976931e+101
   * @param numberBody number body
   * @param options The options parameters.
   */
  putBigDecimal(
    numberBody: number,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { numberBody, options: operationOptions },
      putBigDecimalOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get big decimal value 2.5976931e+101
   * @param options The options parameters.
   */
  getBigDecimal(
    options?: coreHttp.OperationOptions
  ): Promise<NumberGetBigDecimalResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getBigDecimalOperationSpec
    ) as Promise<NumberGetBigDecimalResponse>;
  }

  /**
   * Put big decimal value 99999999.99
   * @param options The options parameters.
   */
  putBigDecimalPositiveDecimal(
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      putBigDecimalPositiveDecimalOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get big decimal value 99999999.99
   * @param options The options parameters.
   */
  getBigDecimalPositiveDecimal(
    options?: coreHttp.OperationOptions
  ): Promise<NumberGetBigDecimalPositiveDecimalResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getBigDecimalPositiveDecimalOperationSpec
    ) as Promise<NumberGetBigDecimalPositiveDecimalResponse>;
  }

  /**
   * Put big decimal value -99999999.99
   * @param options The options parameters.
   */
  putBigDecimalNegativeDecimal(
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      putBigDecimalNegativeDecimalOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get big decimal value -99999999.99
   * @param options The options parameters.
   */
  getBigDecimalNegativeDecimal(
    options?: coreHttp.OperationOptions
  ): Promise<NumberGetBigDecimalNegativeDecimalResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getBigDecimalNegativeDecimalOperationSpec
    ) as Promise<NumberGetBigDecimalNegativeDecimalResponse>;
  }

  /**
   * Put small float value 3.402823e-20
   * @param numberBody number body
   * @param options The options parameters.
   */
  putSmallFloat(
    numberBody: number,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { numberBody, options: operationOptions },
      putSmallFloatOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get big double value 3.402823e-20
   * @param options The options parameters.
   */
  getSmallFloat(
    options?: coreHttp.OperationOptions
  ): Promise<NumberGetSmallFloatResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getSmallFloatOperationSpec
    ) as Promise<NumberGetSmallFloatResponse>;
  }

  /**
   * Put small double value 2.5976931e-101
   * @param numberBody number body
   * @param options The options parameters.
   */
  putSmallDouble(
    numberBody: number,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { numberBody, options: operationOptions },
      putSmallDoubleOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get big double value 2.5976931e-101
   * @param options The options parameters.
   */
  getSmallDouble(
    options?: coreHttp.OperationOptions
  ): Promise<NumberGetSmallDoubleResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getSmallDoubleOperationSpec
    ) as Promise<NumberGetSmallDoubleResponse>;
  }

  /**
   * Put small decimal value 2.5976931e-101
   * @param numberBody number body
   * @param options The options parameters.
   */
  putSmallDecimal(
    numberBody: number,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { numberBody, options: operationOptions },
      putSmallDecimalOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get small decimal value 2.5976931e-101
   * @param options The options parameters.
   */
  getSmallDecimal(
    options?: coreHttp.OperationOptions
  ): Promise<NumberGetSmallDecimalResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getSmallDecimalOperationSpec
    ) as Promise<NumberGetSmallDecimalResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const getNullOperationSpec: coreHttp.OperationSpec = {
  path: "/number/null",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Number" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getInvalidFloatOperationSpec: coreHttp.OperationSpec = {
  path: "/number/invalidfloat",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Number" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getInvalidDoubleOperationSpec: coreHttp.OperationSpec = {
  path: "/number/invaliddouble",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Number" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getInvalidDecimalOperationSpec: coreHttp.OperationSpec = {
  path: "/number/invaliddecimal",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Number" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const putBigFloatOperationSpec: coreHttp.OperationSpec = {
  path: "/number/big/float/3.402823e+20",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.numberBody,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept1],
  mediaType: "json",
  serializer
};
const getBigFloatOperationSpec: coreHttp.OperationSpec = {
  path: "/number/big/float/3.402823e+20",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Number" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const putBigDoubleOperationSpec: coreHttp.OperationSpec = {
  path: "/number/big/double/2.5976931e+101",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.numberBody,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept1],
  mediaType: "json",
  serializer
};
const getBigDoubleOperationSpec: coreHttp.OperationSpec = {
  path: "/number/big/double/2.5976931e+101",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Number" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const putBigDoublePositiveDecimalOperationSpec: coreHttp.OperationSpec = {
  path: "/number/big/double/99999999.99",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.numberBody1,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept1],
  mediaType: "json",
  serializer
};
const getBigDoublePositiveDecimalOperationSpec: coreHttp.OperationSpec = {
  path: "/number/big/double/99999999.99",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Number" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const putBigDoubleNegativeDecimalOperationSpec: coreHttp.OperationSpec = {
  path: "/number/big/double/-99999999.99",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.numberBody2,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept1],
  mediaType: "json",
  serializer
};
const getBigDoubleNegativeDecimalOperationSpec: coreHttp.OperationSpec = {
  path: "/number/big/double/-99999999.99",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Number" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const putBigDecimalOperationSpec: coreHttp.OperationSpec = {
  path: "/number/big/decimal/2.5976931e+101",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.numberBody,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept1],
  mediaType: "json",
  serializer
};
const getBigDecimalOperationSpec: coreHttp.OperationSpec = {
  path: "/number/big/decimal/2.5976931e+101",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Number" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const putBigDecimalPositiveDecimalOperationSpec: coreHttp.OperationSpec = {
  path: "/number/big/decimal/99999999.99",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.numberBody1,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept1],
  mediaType: "json",
  serializer
};
const getBigDecimalPositiveDecimalOperationSpec: coreHttp.OperationSpec = {
  path: "/number/big/decimal/99999999.99",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Number" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const putBigDecimalNegativeDecimalOperationSpec: coreHttp.OperationSpec = {
  path: "/number/big/decimal/-99999999.99",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.numberBody2,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept1],
  mediaType: "json",
  serializer
};
const getBigDecimalNegativeDecimalOperationSpec: coreHttp.OperationSpec = {
  path: "/number/big/decimal/-99999999.99",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Number" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const putSmallFloatOperationSpec: coreHttp.OperationSpec = {
  path: "/number/small/float/3.402823e-20",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.numberBody,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept1],
  mediaType: "json",
  serializer
};
const getSmallFloatOperationSpec: coreHttp.OperationSpec = {
  path: "/number/small/float/3.402823e-20",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Number" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const putSmallDoubleOperationSpec: coreHttp.OperationSpec = {
  path: "/number/small/double/2.5976931e-101",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.numberBody,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept1],
  mediaType: "json",
  serializer
};
const getSmallDoubleOperationSpec: coreHttp.OperationSpec = {
  path: "/number/small/double/2.5976931e-101",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Number" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const putSmallDecimalOperationSpec: coreHttp.OperationSpec = {
  path: "/number/small/decimal/2.5976931e-101",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.numberBody,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept1],
  mediaType: "json",
  serializer
};
const getSmallDecimalOperationSpec: coreHttp.OperationSpec = {
  path: "/number/small/decimal/2.5976931e-101",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Number" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
