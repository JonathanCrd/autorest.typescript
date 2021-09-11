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

export const url: OperationURLParameter = {
  parameterPath: "url",
  mapper: {
    serializedName: "url",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const fileSystem: OperationURLParameter = {
  parameterPath: "fileSystem",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[$a-z0-9](?!.*--)[-a-z0-9]{1,61}[a-z0-9]$"),
      MaxLength: 63,
      MinLength: 3
    },
    serializedName: "filesystem",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const path: OperationURLParameter = {
  parameterPath: "path",
  mapper: {
    serializedName: "path",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const requestId: OperationParameter = {
  parameterPath: ["options", "requestId"],
  mapper: {
    serializedName: "x-ms-client-request-id",
    type: {
      name: "String"
    }
  }
};

export const timeout: OperationQueryParameter = {
  parameterPath: ["options", "timeout"],
  mapper: {
    constraints: {
      InclusiveMinimum: 0
    },
    serializedName: "timeout",
    type: {
      name: "Number"
    }
  }
};

export const version: OperationParameter = {
  parameterPath: "version",
  mapper: {
    defaultValue: "2020-06-12",
    isConstant: true,
    serializedName: "x-ms-version",
    type: {
      name: "String"
    }
  }
};

export const resource: OperationQueryParameter = {
  parameterPath: ["options", "resource"],
  mapper: {
    serializedName: "resource",
    type: {
      name: "Enum",
      allowedValues: ["directory", "file"]
    }
  }
};

export const continuation: OperationQueryParameter = {
  parameterPath: ["options", "continuation"],
  mapper: {
    serializedName: "continuation",
    type: {
      name: "String"
    }
  }
};

export const mode: OperationQueryParameter = {
  parameterPath: ["options", "mode"],
  mapper: {
    serializedName: "mode",
    type: {
      name: "Enum",
      allowedValues: ["legacy", "posix"]
    }
  }
};

export const cacheControl: OperationParameter = {
  parameterPath: ["options", "pathHttpHeaders", "cacheControl"],
  mapper: {
    serializedName: "x-ms-cache-control",
    type: {
      name: "String"
    }
  }
};

export const contentEncoding: OperationParameter = {
  parameterPath: ["options", "pathHttpHeaders", "contentEncoding"],
  mapper: {
    serializedName: "x-ms-content-encoding",
    type: {
      name: "String"
    }
  }
};

export const contentLanguage: OperationParameter = {
  parameterPath: ["options", "pathHttpHeaders", "contentLanguage"],
  mapper: {
    serializedName: "x-ms-content-language",
    type: {
      name: "String"
    }
  }
};

export const contentDisposition: OperationParameter = {
  parameterPath: ["options", "pathHttpHeaders", "contentDisposition"],
  mapper: {
    serializedName: "x-ms-content-disposition",
    type: {
      name: "String"
    }
  }
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "pathHttpHeaders", "contentType"],
  mapper: {
    serializedName: "x-ms-content-type",
    type: {
      name: "String"
    }
  }
};

export const renameSource: OperationParameter = {
  parameterPath: ["options", "renameSource"],
  mapper: {
    serializedName: "x-ms-rename-source",
    type: {
      name: "String"
    }
  }
};

export const leaseId: OperationParameter = {
  parameterPath: ["options", "leaseAccessConditions", "leaseId"],
  mapper: {
    serializedName: "x-ms-lease-id",
    type: {
      name: "String"
    }
  }
};

export const sourceLeaseId: OperationParameter = {
  parameterPath: ["options", "sourceLeaseId"],
  mapper: {
    serializedName: "x-ms-source-lease-id",
    type: {
      name: "String"
    }
  }
};

export const properties: OperationParameter = {
  parameterPath: ["options", "properties"],
  mapper: {
    serializedName: "x-ms-properties",
    type: {
      name: "String"
    }
  }
};

export const permissions: OperationParameter = {
  parameterPath: ["options", "permissions"],
  mapper: {
    serializedName: "x-ms-permissions",
    type: {
      name: "String"
    }
  }
};

export const umask: OperationParameter = {
  parameterPath: ["options", "umask"],
  mapper: {
    serializedName: "x-ms-umask",
    type: {
      name: "String"
    }
  }
};

export const ifMatch: OperationParameter = {
  parameterPath: ["options", "modifiedAccessConditions", "ifMatch"],
  mapper: {
    serializedName: "If-Match",
    type: {
      name: "String"
    }
  }
};

export const ifNoneMatch: OperationParameter = {
  parameterPath: ["options", "modifiedAccessConditions", "ifNoneMatch"],
  mapper: {
    serializedName: "If-None-Match",
    type: {
      name: "String"
    }
  }
};

export const ifModifiedSince: OperationParameter = {
  parameterPath: ["options", "modifiedAccessConditions", "ifModifiedSince"],
  mapper: {
    serializedName: "If-Modified-Since",
    type: {
      name: "DateTimeRfc1123"
    }
  }
};

export const ifUnmodifiedSince: OperationParameter = {
  parameterPath: ["options", "modifiedAccessConditions", "ifUnmodifiedSince"],
  mapper: {
    serializedName: "If-Unmodified-Since",
    type: {
      name: "DateTimeRfc1123"
    }
  }
};

export const sourceIfMatch: OperationParameter = {
  parameterPath: ["options", "sourceModifiedAccessConditions", "sourceIfMatch"],
  mapper: {
    serializedName: "x-ms-source-if-match",
    type: {
      name: "String"
    }
  }
};

export const sourceIfNoneMatch: OperationParameter = {
  parameterPath: [
    "options",
    "sourceModifiedAccessConditions",
    "sourceIfNoneMatch"
  ],
  mapper: {
    serializedName: "x-ms-source-if-none-match",
    type: {
      name: "String"
    }
  }
};

export const sourceIfModifiedSince: OperationParameter = {
  parameterPath: [
    "options",
    "sourceModifiedAccessConditions",
    "sourceIfModifiedSince"
  ],
  mapper: {
    serializedName: "x-ms-source-if-modified-since",
    type: {
      name: "DateTimeRfc1123"
    }
  }
};

export const sourceIfUnmodifiedSince: OperationParameter = {
  parameterPath: [
    "options",
    "sourceModifiedAccessConditions",
    "sourceIfUnmodifiedSince"
  ],
  mapper: {
    serializedName: "x-ms-source-if-unmodified-since",
    type: {
      name: "DateTimeRfc1123"
    }
  }
};

export const contentType1: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const body: OperationParameter = {
  parameterPath: "body",
  mapper: {
    serializedName: "body",
    required: true,
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

export const action: OperationQueryParameter = {
  parameterPath: "action",
  mapper: {
    serializedName: "action",
    required: true,
    type: {
      name: "Enum",
      allowedValues: [
        "append",
        "flush",
        "setProperties",
        "setAccessControl",
        "setAccessControlRecursive"
      ]
    }
  }
};

export const maxRecords: OperationQueryParameter = {
  parameterPath: ["options", "maxRecords"],
  mapper: {
    constraints: {
      InclusiveMinimum: 1
    },
    serializedName: "maxRecords",
    type: {
      name: "Number"
    }
  }
};

export const mode1: OperationQueryParameter = {
  parameterPath: "mode",
  mapper: {
    serializedName: "mode",
    required: true,
    type: {
      name: "Enum",
      allowedValues: ["set", "modify", "remove"]
    }
  }
};

export const forceFlag: OperationQueryParameter = {
  parameterPath: ["options", "forceFlag"],
  mapper: {
    serializedName: "forceFlag",
    type: {
      name: "Boolean"
    }
  }
};

export const position: OperationQueryParameter = {
  parameterPath: ["options", "position"],
  mapper: {
    serializedName: "position",
    type: {
      name: "Number"
    }
  }
};

export const retainUncommittedData: OperationQueryParameter = {
  parameterPath: ["options", "retainUncommittedData"],
  mapper: {
    serializedName: "retainUncommittedData",
    type: {
      name: "Boolean"
    }
  }
};

export const close: OperationQueryParameter = {
  parameterPath: ["options", "close"],
  mapper: {
    serializedName: "close",
    type: {
      name: "Boolean"
    }
  }
};

export const contentLength: OperationParameter = {
  parameterPath: ["options", "contentLength"],
  mapper: {
    constraints: {
      InclusiveMinimum: 0
    },
    serializedName: "Content-Length",
    type: {
      name: "Number"
    }
  }
};

export const contentMD5: OperationParameter = {
  parameterPath: ["options", "pathHttpHeaders", "contentMD5"],
  mapper: {
    serializedName: "x-ms-content-md5",
    type: {
      name: "ByteArray"
    }
  }
};

export const owner: OperationParameter = {
  parameterPath: ["options", "owner"],
  mapper: {
    serializedName: "x-ms-owner",
    type: {
      name: "String"
    }
  }
};

export const group: OperationParameter = {
  parameterPath: ["options", "group"],
  mapper: {
    serializedName: "x-ms-group",
    type: {
      name: "String"
    }
  }
};

export const acl: OperationParameter = {
  parameterPath: ["options", "acl"],
  mapper: {
    serializedName: "x-ms-acl",
    type: {
      name: "String"
    }
  }
};

export const xMsLeaseAction: OperationParameter = {
  parameterPath: "xMsLeaseAction",
  mapper: {
    serializedName: "x-ms-lease-action",
    required: true,
    type: {
      name: "Enum",
      allowedValues: ["acquire", "break", "change", "renew", "release"]
    }
  }
};

export const xMsLeaseDuration: OperationParameter = {
  parameterPath: ["options", "xMsLeaseDuration"],
  mapper: {
    serializedName: "x-ms-lease-duration",
    type: {
      name: "Number"
    }
  }
};

export const xMsLeaseBreakPeriod: OperationParameter = {
  parameterPath: ["options", "xMsLeaseBreakPeriod"],
  mapper: {
    serializedName: "x-ms-lease-break-period",
    type: {
      name: "Number"
    }
  }
};

export const proposedLeaseId: OperationParameter = {
  parameterPath: ["options", "proposedLeaseId"],
  mapper: {
    serializedName: "x-ms-proposed-lease-id",
    type: {
      name: "String"
    }
  }
};

export const range: OperationParameter = {
  parameterPath: ["options", "range"],
  mapper: {
    serializedName: "Range",
    type: {
      name: "String"
    }
  }
};

export const xMsRangeGetContentMd5: OperationParameter = {
  parameterPath: ["options", "xMsRangeGetContentMd5"],
  mapper: {
    serializedName: "x-ms-range-get-content-md5",
    type: {
      name: "Boolean"
    }
  }
};

export const action1: OperationQueryParameter = {
  parameterPath: ["options", "action"],
  mapper: {
    serializedName: "action",
    type: {
      name: "Enum",
      allowedValues: ["getAccessControl", "getStatus"]
    }
  }
};

export const upn: OperationQueryParameter = {
  parameterPath: ["options", "upn"],
  mapper: {
    serializedName: "upn",
    type: {
      name: "Boolean"
    }
  }
};

export const recursive: OperationQueryParameter = {
  parameterPath: ["options", "recursive"],
  mapper: {
    serializedName: "recursive",
    type: {
      name: "Boolean"
    }
  }
};
