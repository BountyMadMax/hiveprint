/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const printer = $root.printer = (() => {

    /**
     * Namespace printer.
     * @exports printer
     * @namespace
     */
    const printer = {};

    printer.Company = (function() {

        /**
         * Properties of a Company.
         * @memberof printer
         * @interface ICompany
         * @property {number|null} [id] Company id
         * @property {string|null} [name] Company name
         * @property {string|null} [description] Company description
         * @property {Array.<tag.ITag>|null} [tags] Company tags
         */

        /**
         * Constructs a new Company.
         * @memberof printer
         * @classdesc Represents a Company.
         * @implements ICompany
         * @constructor
         * @param {printer.ICompany=} [properties] Properties to set
         */
        function Company(properties) {
            this.tags = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Company id.
         * @member {number} id
         * @memberof printer.Company
         * @instance
         */
        Company.prototype.id = 0;

        /**
         * Company name.
         * @member {string} name
         * @memberof printer.Company
         * @instance
         */
        Company.prototype.name = "";

        /**
         * Company description.
         * @member {string|null|undefined} description
         * @memberof printer.Company
         * @instance
         */
        Company.prototype.description = null;

        /**
         * Company tags.
         * @member {Array.<tag.ITag>} tags
         * @memberof printer.Company
         * @instance
         */
        Company.prototype.tags = $util.emptyArray;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * Company _description.
         * @member {"description"|undefined} _description
         * @memberof printer.Company
         * @instance
         */
        Object.defineProperty(Company.prototype, "_description", {
            get: $util.oneOfGetter($oneOfFields = ["description"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Company instance using the specified properties.
         * @function create
         * @memberof printer.Company
         * @static
         * @param {printer.ICompany=} [properties] Properties to set
         * @returns {printer.Company} Company instance
         */
        Company.create = function create(properties) {
            return new Company(properties);
        };

        /**
         * Encodes the specified Company message. Does not implicitly {@link printer.Company.verify|verify} messages.
         * @function encode
         * @memberof printer.Company
         * @static
         * @param {printer.ICompany} message Company message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Company.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.description);
            if (message.tags != null && message.tags.length)
                for (let i = 0; i < message.tags.length; ++i)
                    $root.tag.Tag.encode(message.tags[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Company message, length delimited. Does not implicitly {@link printer.Company.verify|verify} messages.
         * @function encodeDelimited
         * @memberof printer.Company
         * @static
         * @param {printer.ICompany} message Company message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Company.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Company message from the specified reader or buffer.
         * @function decode
         * @memberof printer.Company
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {printer.Company} Company
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Company.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.printer.Company();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int32();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.description = reader.string();
                        break;
                    }
                case 4: {
                        if (!(message.tags && message.tags.length))
                            message.tags = [];
                        message.tags.push($root.tag.Tag.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Company message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof printer.Company
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {printer.Company} Company
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Company.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Company message.
         * @function verify
         * @memberof printer.Company
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Company.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.description != null && message.hasOwnProperty("description")) {
                properties._description = 1;
                if (!$util.isString(message.description))
                    return "description: string expected";
            }
            if (message.tags != null && message.hasOwnProperty("tags")) {
                if (!Array.isArray(message.tags))
                    return "tags: array expected";
                for (let i = 0; i < message.tags.length; ++i) {
                    let error = $root.tag.Tag.verify(message.tags[i]);
                    if (error)
                        return "tags." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Company message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof printer.Company
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {printer.Company} Company
         */
        Company.fromObject = function fromObject(object) {
            if (object instanceof $root.printer.Company)
                return object;
            let message = new $root.printer.Company();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.name != null)
                message.name = String(object.name);
            if (object.description != null)
                message.description = String(object.description);
            if (object.tags) {
                if (!Array.isArray(object.tags))
                    throw TypeError(".printer.Company.tags: array expected");
                message.tags = [];
                for (let i = 0; i < object.tags.length; ++i) {
                    if (typeof object.tags[i] !== "object")
                        throw TypeError(".printer.Company.tags: object expected");
                    message.tags[i] = $root.tag.Tag.fromObject(object.tags[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Company message. Also converts values to other types if specified.
         * @function toObject
         * @memberof printer.Company
         * @static
         * @param {printer.Company} message Company
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Company.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.tags = [];
            if (options.defaults) {
                object.id = 0;
                object.name = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.description != null && message.hasOwnProperty("description")) {
                object.description = message.description;
                if (options.oneofs)
                    object._description = "description";
            }
            if (message.tags && message.tags.length) {
                object.tags = [];
                for (let j = 0; j < message.tags.length; ++j)
                    object.tags[j] = $root.tag.Tag.toObject(message.tags[j], options);
            }
            return object;
        };

        /**
         * Converts this Company to JSON.
         * @function toJSON
         * @memberof printer.Company
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Company.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Company
         * @function getTypeUrl
         * @memberof printer.Company
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Company.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/printer.Company";
        };

        return Company;
    })();

    printer.PrinterModel = (function() {

        /**
         * Properties of a PrinterModel.
         * @memberof printer
         * @interface IPrinterModel
         * @property {number|null} [id] PrinterModel id
         * @property {string|null} [name] PrinterModel name
         * @property {string|null} [description] PrinterModel description
         * @property {printer.PrinterModelType|null} [type] PrinterModel type
         */

        /**
         * Constructs a new PrinterModel.
         * @memberof printer
         * @classdesc Represents a PrinterModel.
         * @implements IPrinterModel
         * @constructor
         * @param {printer.IPrinterModel=} [properties] Properties to set
         */
        function PrinterModel(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PrinterModel id.
         * @member {number} id
         * @memberof printer.PrinterModel
         * @instance
         */
        PrinterModel.prototype.id = 0;

        /**
         * PrinterModel name.
         * @member {string} name
         * @memberof printer.PrinterModel
         * @instance
         */
        PrinterModel.prototype.name = "";

        /**
         * PrinterModel description.
         * @member {string|null|undefined} description
         * @memberof printer.PrinterModel
         * @instance
         */
        PrinterModel.prototype.description = null;

        /**
         * PrinterModel type.
         * @member {printer.PrinterModelType} type
         * @memberof printer.PrinterModel
         * @instance
         */
        PrinterModel.prototype.type = 0;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * PrinterModel _description.
         * @member {"description"|undefined} _description
         * @memberof printer.PrinterModel
         * @instance
         */
        Object.defineProperty(PrinterModel.prototype, "_description", {
            get: $util.oneOfGetter($oneOfFields = ["description"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new PrinterModel instance using the specified properties.
         * @function create
         * @memberof printer.PrinterModel
         * @static
         * @param {printer.IPrinterModel=} [properties] Properties to set
         * @returns {printer.PrinterModel} PrinterModel instance
         */
        PrinterModel.create = function create(properties) {
            return new PrinterModel(properties);
        };

        /**
         * Encodes the specified PrinterModel message. Does not implicitly {@link printer.PrinterModel.verify|verify} messages.
         * @function encode
         * @memberof printer.PrinterModel
         * @static
         * @param {printer.IPrinterModel} message PrinterModel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PrinterModel.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.description);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.type);
            return writer;
        };

        /**
         * Encodes the specified PrinterModel message, length delimited. Does not implicitly {@link printer.PrinterModel.verify|verify} messages.
         * @function encodeDelimited
         * @memberof printer.PrinterModel
         * @static
         * @param {printer.IPrinterModel} message PrinterModel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PrinterModel.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PrinterModel message from the specified reader or buffer.
         * @function decode
         * @memberof printer.PrinterModel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {printer.PrinterModel} PrinterModel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PrinterModel.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.printer.PrinterModel();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int32();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.description = reader.string();
                        break;
                    }
                case 4: {
                        message.type = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PrinterModel message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof printer.PrinterModel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {printer.PrinterModel} PrinterModel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PrinterModel.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PrinterModel message.
         * @function verify
         * @memberof printer.PrinterModel
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PrinterModel.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.description != null && message.hasOwnProperty("description")) {
                properties._description = 1;
                if (!$util.isString(message.description))
                    return "description: string expected";
            }
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            return null;
        };

        /**
         * Creates a PrinterModel message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof printer.PrinterModel
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {printer.PrinterModel} PrinterModel
         */
        PrinterModel.fromObject = function fromObject(object) {
            if (object instanceof $root.printer.PrinterModel)
                return object;
            let message = new $root.printer.PrinterModel();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.name != null)
                message.name = String(object.name);
            if (object.description != null)
                message.description = String(object.description);
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "OTHER":
            case 0:
                message.type = 0;
                break;
            case "FDM":
            case 1:
                message.type = 1;
                break;
            case "SLA":
            case 2:
                message.type = 2;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a PrinterModel message. Also converts values to other types if specified.
         * @function toObject
         * @memberof printer.PrinterModel
         * @static
         * @param {printer.PrinterModel} message PrinterModel
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PrinterModel.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = 0;
                object.name = "";
                object.type = options.enums === String ? "OTHER" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.description != null && message.hasOwnProperty("description")) {
                object.description = message.description;
                if (options.oneofs)
                    object._description = "description";
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.printer.PrinterModelType[message.type] === undefined ? message.type : $root.printer.PrinterModelType[message.type] : message.type;
            return object;
        };

        /**
         * Converts this PrinterModel to JSON.
         * @function toJSON
         * @memberof printer.PrinterModel
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PrinterModel.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PrinterModel
         * @function getTypeUrl
         * @memberof printer.PrinterModel
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PrinterModel.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/printer.PrinterModel";
        };

        return PrinterModel;
    })();

    /**
     * PrinterModelType enum.
     * @name printer.PrinterModelType
     * @enum {number}
     * @property {number} OTHER=0 OTHER value
     * @property {number} FDM=1 FDM value
     * @property {number} SLA=2 SLA value
     */
    printer.PrinterModelType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "OTHER"] = 0;
        values[valuesById[1] = "FDM"] = 1;
        values[valuesById[2] = "SLA"] = 2;
        return values;
    })();

    /**
     * PrinterModelMetric enum.
     * @name printer.PrinterModelMetric
     * @enum {number}
     * @property {number} METRIC_SYSTEM=0 METRIC_SYSTEM value
     * @property {number} IMPERIAL_UNITS=1 IMPERIAL_UNITS value
     */
    printer.PrinterModelMetric = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "METRIC_SYSTEM"] = 0;
        values[valuesById[1] = "IMPERIAL_UNITS"] = 1;
        return values;
    })();

    /**
     * TemperatureScale enum.
     * @name printer.TemperatureScale
     * @enum {number}
     * @property {number} CELSIUS=0 CELSIUS value
     * @property {number} FAHRENHEIT=1 FAHRENHEIT value
     * @property {number} KELVIN=2 KELVIN value
     */
    printer.TemperatureScale = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "CELSIUS"] = 0;
        values[valuesById[1] = "FAHRENHEIT"] = 1;
        values[valuesById[2] = "KELVIN"] = 2;
        return values;
    })();

    printer.PrinterModelOtherData = (function() {

        /**
         * Properties of a PrinterModelOtherData.
         * @memberof printer
         * @interface IPrinterModelOtherData
         * @property {number|null} [id] PrinterModelOtherData id
         * @property {printer.IPrinterModel|null} [printerModel] PrinterModelOtherData printerModel
         * @property {printer.PrinterModelMetric|null} [metric] PrinterModelOtherData metric
         * @property {number|null} [width] PrinterModelOtherData width
         * @property {number|null} [height] PrinterModelOtherData height
         * @property {number|null} [depth] PrinterModelOtherData depth
         * @property {number|null} [weight] PrinterModelOtherData weight
         * @property {number|null} [power] PrinterModelOtherData power
         */

        /**
         * Constructs a new PrinterModelOtherData.
         * @memberof printer
         * @classdesc Represents a PrinterModelOtherData.
         * @implements IPrinterModelOtherData
         * @constructor
         * @param {printer.IPrinterModelOtherData=} [properties] Properties to set
         */
        function PrinterModelOtherData(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PrinterModelOtherData id.
         * @member {number} id
         * @memberof printer.PrinterModelOtherData
         * @instance
         */
        PrinterModelOtherData.prototype.id = 0;

        /**
         * PrinterModelOtherData printerModel.
         * @member {printer.IPrinterModel|null|undefined} printerModel
         * @memberof printer.PrinterModelOtherData
         * @instance
         */
        PrinterModelOtherData.prototype.printerModel = null;

        /**
         * PrinterModelOtherData metric.
         * @member {printer.PrinterModelMetric} metric
         * @memberof printer.PrinterModelOtherData
         * @instance
         */
        PrinterModelOtherData.prototype.metric = 0;

        /**
         * PrinterModelOtherData width.
         * @member {number|null|undefined} width
         * @memberof printer.PrinterModelOtherData
         * @instance
         */
        PrinterModelOtherData.prototype.width = null;

        /**
         * PrinterModelOtherData height.
         * @member {number|null|undefined} height
         * @memberof printer.PrinterModelOtherData
         * @instance
         */
        PrinterModelOtherData.prototype.height = null;

        /**
         * PrinterModelOtherData depth.
         * @member {number|null|undefined} depth
         * @memberof printer.PrinterModelOtherData
         * @instance
         */
        PrinterModelOtherData.prototype.depth = null;

        /**
         * PrinterModelOtherData weight.
         * @member {number|null|undefined} weight
         * @memberof printer.PrinterModelOtherData
         * @instance
         */
        PrinterModelOtherData.prototype.weight = null;

        /**
         * PrinterModelOtherData power.
         * @member {number|null|undefined} power
         * @memberof printer.PrinterModelOtherData
         * @instance
         */
        PrinterModelOtherData.prototype.power = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * PrinterModelOtherData _width.
         * @member {"width"|undefined} _width
         * @memberof printer.PrinterModelOtherData
         * @instance
         */
        Object.defineProperty(PrinterModelOtherData.prototype, "_width", {
            get: $util.oneOfGetter($oneOfFields = ["width"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * PrinterModelOtherData _height.
         * @member {"height"|undefined} _height
         * @memberof printer.PrinterModelOtherData
         * @instance
         */
        Object.defineProperty(PrinterModelOtherData.prototype, "_height", {
            get: $util.oneOfGetter($oneOfFields = ["height"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * PrinterModelOtherData _depth.
         * @member {"depth"|undefined} _depth
         * @memberof printer.PrinterModelOtherData
         * @instance
         */
        Object.defineProperty(PrinterModelOtherData.prototype, "_depth", {
            get: $util.oneOfGetter($oneOfFields = ["depth"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * PrinterModelOtherData _weight.
         * @member {"weight"|undefined} _weight
         * @memberof printer.PrinterModelOtherData
         * @instance
         */
        Object.defineProperty(PrinterModelOtherData.prototype, "_weight", {
            get: $util.oneOfGetter($oneOfFields = ["weight"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * PrinterModelOtherData _power.
         * @member {"power"|undefined} _power
         * @memberof printer.PrinterModelOtherData
         * @instance
         */
        Object.defineProperty(PrinterModelOtherData.prototype, "_power", {
            get: $util.oneOfGetter($oneOfFields = ["power"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new PrinterModelOtherData instance using the specified properties.
         * @function create
         * @memberof printer.PrinterModelOtherData
         * @static
         * @param {printer.IPrinterModelOtherData=} [properties] Properties to set
         * @returns {printer.PrinterModelOtherData} PrinterModelOtherData instance
         */
        PrinterModelOtherData.create = function create(properties) {
            return new PrinterModelOtherData(properties);
        };

        /**
         * Encodes the specified PrinterModelOtherData message. Does not implicitly {@link printer.PrinterModelOtherData.verify|verify} messages.
         * @function encode
         * @memberof printer.PrinterModelOtherData
         * @static
         * @param {printer.IPrinterModelOtherData} message PrinterModelOtherData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PrinterModelOtherData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.printerModel != null && Object.hasOwnProperty.call(message, "printerModel"))
                $root.printer.PrinterModel.encode(message.printerModel, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.metric != null && Object.hasOwnProperty.call(message, "metric"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.metric);
            if (message.width != null && Object.hasOwnProperty.call(message, "width"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.width);
            if (message.height != null && Object.hasOwnProperty.call(message, "height"))
                writer.uint32(/* id 5, wireType 5 =*/45).float(message.height);
            if (message.depth != null && Object.hasOwnProperty.call(message, "depth"))
                writer.uint32(/* id 6, wireType 5 =*/53).float(message.depth);
            if (message.weight != null && Object.hasOwnProperty.call(message, "weight"))
                writer.uint32(/* id 7, wireType 5 =*/61).float(message.weight);
            if (message.power != null && Object.hasOwnProperty.call(message, "power"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.power);
            return writer;
        };

        /**
         * Encodes the specified PrinterModelOtherData message, length delimited. Does not implicitly {@link printer.PrinterModelOtherData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof printer.PrinterModelOtherData
         * @static
         * @param {printer.IPrinterModelOtherData} message PrinterModelOtherData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PrinterModelOtherData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PrinterModelOtherData message from the specified reader or buffer.
         * @function decode
         * @memberof printer.PrinterModelOtherData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {printer.PrinterModelOtherData} PrinterModelOtherData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PrinterModelOtherData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.printer.PrinterModelOtherData();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int32();
                        break;
                    }
                case 2: {
                        message.printerModel = $root.printer.PrinterModel.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.metric = reader.int32();
                        break;
                    }
                case 4: {
                        message.width = reader.float();
                        break;
                    }
                case 5: {
                        message.height = reader.float();
                        break;
                    }
                case 6: {
                        message.depth = reader.float();
                        break;
                    }
                case 7: {
                        message.weight = reader.float();
                        break;
                    }
                case 8: {
                        message.power = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PrinterModelOtherData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof printer.PrinterModelOtherData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {printer.PrinterModelOtherData} PrinterModelOtherData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PrinterModelOtherData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PrinterModelOtherData message.
         * @function verify
         * @memberof printer.PrinterModelOtherData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PrinterModelOtherData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.printerModel != null && message.hasOwnProperty("printerModel")) {
                let error = $root.printer.PrinterModel.verify(message.printerModel);
                if (error)
                    return "printerModel." + error;
            }
            if (message.metric != null && message.hasOwnProperty("metric"))
                switch (message.metric) {
                default:
                    return "metric: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.width != null && message.hasOwnProperty("width")) {
                properties._width = 1;
                if (typeof message.width !== "number")
                    return "width: number expected";
            }
            if (message.height != null && message.hasOwnProperty("height")) {
                properties._height = 1;
                if (typeof message.height !== "number")
                    return "height: number expected";
            }
            if (message.depth != null && message.hasOwnProperty("depth")) {
                properties._depth = 1;
                if (typeof message.depth !== "number")
                    return "depth: number expected";
            }
            if (message.weight != null && message.hasOwnProperty("weight")) {
                properties._weight = 1;
                if (typeof message.weight !== "number")
                    return "weight: number expected";
            }
            if (message.power != null && message.hasOwnProperty("power")) {
                properties._power = 1;
                if (!$util.isInteger(message.power))
                    return "power: integer expected";
            }
            return null;
        };

        /**
         * Creates a PrinterModelOtherData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof printer.PrinterModelOtherData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {printer.PrinterModelOtherData} PrinterModelOtherData
         */
        PrinterModelOtherData.fromObject = function fromObject(object) {
            if (object instanceof $root.printer.PrinterModelOtherData)
                return object;
            let message = new $root.printer.PrinterModelOtherData();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.printerModel != null) {
                if (typeof object.printerModel !== "object")
                    throw TypeError(".printer.PrinterModelOtherData.printerModel: object expected");
                message.printerModel = $root.printer.PrinterModel.fromObject(object.printerModel);
            }
            switch (object.metric) {
            default:
                if (typeof object.metric === "number") {
                    message.metric = object.metric;
                    break;
                }
                break;
            case "METRIC_SYSTEM":
            case 0:
                message.metric = 0;
                break;
            case "IMPERIAL_UNITS":
            case 1:
                message.metric = 1;
                break;
            }
            if (object.width != null)
                message.width = Number(object.width);
            if (object.height != null)
                message.height = Number(object.height);
            if (object.depth != null)
                message.depth = Number(object.depth);
            if (object.weight != null)
                message.weight = Number(object.weight);
            if (object.power != null)
                message.power = object.power | 0;
            return message;
        };

        /**
         * Creates a plain object from a PrinterModelOtherData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof printer.PrinterModelOtherData
         * @static
         * @param {printer.PrinterModelOtherData} message PrinterModelOtherData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PrinterModelOtherData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = 0;
                object.printerModel = null;
                object.metric = options.enums === String ? "METRIC_SYSTEM" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.printerModel != null && message.hasOwnProperty("printerModel"))
                object.printerModel = $root.printer.PrinterModel.toObject(message.printerModel, options);
            if (message.metric != null && message.hasOwnProperty("metric"))
                object.metric = options.enums === String ? $root.printer.PrinterModelMetric[message.metric] === undefined ? message.metric : $root.printer.PrinterModelMetric[message.metric] : message.metric;
            if (message.width != null && message.hasOwnProperty("width")) {
                object.width = options.json && !isFinite(message.width) ? String(message.width) : message.width;
                if (options.oneofs)
                    object._width = "width";
            }
            if (message.height != null && message.hasOwnProperty("height")) {
                object.height = options.json && !isFinite(message.height) ? String(message.height) : message.height;
                if (options.oneofs)
                    object._height = "height";
            }
            if (message.depth != null && message.hasOwnProperty("depth")) {
                object.depth = options.json && !isFinite(message.depth) ? String(message.depth) : message.depth;
                if (options.oneofs)
                    object._depth = "depth";
            }
            if (message.weight != null && message.hasOwnProperty("weight")) {
                object.weight = options.json && !isFinite(message.weight) ? String(message.weight) : message.weight;
                if (options.oneofs)
                    object._weight = "weight";
            }
            if (message.power != null && message.hasOwnProperty("power")) {
                object.power = message.power;
                if (options.oneofs)
                    object._power = "power";
            }
            return object;
        };

        /**
         * Converts this PrinterModelOtherData to JSON.
         * @function toJSON
         * @memberof printer.PrinterModelOtherData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PrinterModelOtherData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PrinterModelOtherData
         * @function getTypeUrl
         * @memberof printer.PrinterModelOtherData
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PrinterModelOtherData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/printer.PrinterModelOtherData";
        };

        return PrinterModelOtherData;
    })();

    printer.PrinterModelFdmData = (function() {

        /**
         * Properties of a PrinterModelFdmData.
         * @memberof printer
         * @interface IPrinterModelFdmData
         * @property {number|null} [id] PrinterModelFdmData id
         * @property {printer.IPrinterModel|null} [printerModel] PrinterModelFdmData printerModel
         * @property {printer.PrinterModelMetric|null} [metric] PrinterModelFdmData metric
         * @property {number|null} [width] PrinterModelFdmData width
         * @property {number|null} [height] PrinterModelFdmData height
         * @property {number|null} [depth] PrinterModelFdmData depth
         * @property {number|null} [weight] PrinterModelFdmData weight
         * @property {number|null} [power] PrinterModelFdmData power
         * @property {number|null} [printWidth] PrinterModelFdmData printWidth
         * @property {number|null} [printHeight] PrinterModelFdmData printHeight
         * @property {number|null} [printDepth] PrinterModelFdmData printDepth
         * @property {number|null} [layerHeightMin] PrinterModelFdmData layerHeightMin
         * @property {number|null} [layerHeightMax] PrinterModelFdmData layerHeightMax
         * @property {printer.TemperatureScale|null} [temperatureScale] PrinterModelFdmData temperatureScale
         * @property {number|null} [nozzleTemperatureMax] PrinterModelFdmData nozzleTemperatureMax
         * @property {number|null} [heatbedTemperatureMax] PrinterModelFdmData heatbedTemperatureMax
         * @property {Array.<printer.IPrinterModelConnectivity>|null} [connectivities] PrinterModelFdmData connectivities
         * @property {Array.<printer.PrinterModelPrintMedium>|null} [printMediums] PrinterModelFdmData printMediums
         * @property {Array.<printer.IFdmPrintSurface>|null} [printSurfaces] PrinterModelFdmData printSurfaces
         * @property {printer.Calibration|null} [bedCalibration] PrinterModelFdmData bedCalibration
         * @property {Array.<printer.IFilamentMaterial>|null} [filamentMaterials] PrinterModelFdmData filamentMaterials
         */

        /**
         * Constructs a new PrinterModelFdmData.
         * @memberof printer
         * @classdesc Represents a PrinterModelFdmData.
         * @implements IPrinterModelFdmData
         * @constructor
         * @param {printer.IPrinterModelFdmData=} [properties] Properties to set
         */
        function PrinterModelFdmData(properties) {
            this.connectivities = [];
            this.printMediums = [];
            this.printSurfaces = [];
            this.filamentMaterials = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PrinterModelFdmData id.
         * @member {number} id
         * @memberof printer.PrinterModelFdmData
         * @instance
         */
        PrinterModelFdmData.prototype.id = 0;

        /**
         * PrinterModelFdmData printerModel.
         * @member {printer.IPrinterModel|null|undefined} printerModel
         * @memberof printer.PrinterModelFdmData
         * @instance
         */
        PrinterModelFdmData.prototype.printerModel = null;

        /**
         * PrinterModelFdmData metric.
         * @member {printer.PrinterModelMetric} metric
         * @memberof printer.PrinterModelFdmData
         * @instance
         */
        PrinterModelFdmData.prototype.metric = 0;

        /**
         * PrinterModelFdmData width.
         * @member {number|null|undefined} width
         * @memberof printer.PrinterModelFdmData
         * @instance
         */
        PrinterModelFdmData.prototype.width = null;

        /**
         * PrinterModelFdmData height.
         * @member {number|null|undefined} height
         * @memberof printer.PrinterModelFdmData
         * @instance
         */
        PrinterModelFdmData.prototype.height = null;

        /**
         * PrinterModelFdmData depth.
         * @member {number|null|undefined} depth
         * @memberof printer.PrinterModelFdmData
         * @instance
         */
        PrinterModelFdmData.prototype.depth = null;

        /**
         * PrinterModelFdmData weight.
         * @member {number|null|undefined} weight
         * @memberof printer.PrinterModelFdmData
         * @instance
         */
        PrinterModelFdmData.prototype.weight = null;

        /**
         * PrinterModelFdmData power.
         * @member {number|null|undefined} power
         * @memberof printer.PrinterModelFdmData
         * @instance
         */
        PrinterModelFdmData.prototype.power = null;

        /**
         * PrinterModelFdmData printWidth.
         * @member {number|null|undefined} printWidth
         * @memberof printer.PrinterModelFdmData
         * @instance
         */
        PrinterModelFdmData.prototype.printWidth = null;

        /**
         * PrinterModelFdmData printHeight.
         * @member {number|null|undefined} printHeight
         * @memberof printer.PrinterModelFdmData
         * @instance
         */
        PrinterModelFdmData.prototype.printHeight = null;

        /**
         * PrinterModelFdmData printDepth.
         * @member {number|null|undefined} printDepth
         * @memberof printer.PrinterModelFdmData
         * @instance
         */
        PrinterModelFdmData.prototype.printDepth = null;

        /**
         * PrinterModelFdmData layerHeightMin.
         * @member {number|null|undefined} layerHeightMin
         * @memberof printer.PrinterModelFdmData
         * @instance
         */
        PrinterModelFdmData.prototype.layerHeightMin = null;

        /**
         * PrinterModelFdmData layerHeightMax.
         * @member {number|null|undefined} layerHeightMax
         * @memberof printer.PrinterModelFdmData
         * @instance
         */
        PrinterModelFdmData.prototype.layerHeightMax = null;

        /**
         * PrinterModelFdmData temperatureScale.
         * @member {printer.TemperatureScale|null|undefined} temperatureScale
         * @memberof printer.PrinterModelFdmData
         * @instance
         */
        PrinterModelFdmData.prototype.temperatureScale = null;

        /**
         * PrinterModelFdmData nozzleTemperatureMax.
         * @member {number|null|undefined} nozzleTemperatureMax
         * @memberof printer.PrinterModelFdmData
         * @instance
         */
        PrinterModelFdmData.prototype.nozzleTemperatureMax = null;

        /**
         * PrinterModelFdmData heatbedTemperatureMax.
         * @member {number|null|undefined} heatbedTemperatureMax
         * @memberof printer.PrinterModelFdmData
         * @instance
         */
        PrinterModelFdmData.prototype.heatbedTemperatureMax = null;

        /**
         * PrinterModelFdmData connectivities.
         * @member {Array.<printer.IPrinterModelConnectivity>} connectivities
         * @memberof printer.PrinterModelFdmData
         * @instance
         */
        PrinterModelFdmData.prototype.connectivities = $util.emptyArray;

        /**
         * PrinterModelFdmData printMediums.
         * @member {Array.<printer.PrinterModelPrintMedium>} printMediums
         * @memberof printer.PrinterModelFdmData
         * @instance
         */
        PrinterModelFdmData.prototype.printMediums = $util.emptyArray;

        /**
         * PrinterModelFdmData printSurfaces.
         * @member {Array.<printer.IFdmPrintSurface>} printSurfaces
         * @memberof printer.PrinterModelFdmData
         * @instance
         */
        PrinterModelFdmData.prototype.printSurfaces = $util.emptyArray;

        /**
         * PrinterModelFdmData bedCalibration.
         * @member {printer.Calibration|null|undefined} bedCalibration
         * @memberof printer.PrinterModelFdmData
         * @instance
         */
        PrinterModelFdmData.prototype.bedCalibration = null;

        /**
         * PrinterModelFdmData filamentMaterials.
         * @member {Array.<printer.IFilamentMaterial>} filamentMaterials
         * @memberof printer.PrinterModelFdmData
         * @instance
         */
        PrinterModelFdmData.prototype.filamentMaterials = $util.emptyArray;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * PrinterModelFdmData _width.
         * @member {"width"|undefined} _width
         * @memberof printer.PrinterModelFdmData
         * @instance
         */
        Object.defineProperty(PrinterModelFdmData.prototype, "_width", {
            get: $util.oneOfGetter($oneOfFields = ["width"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * PrinterModelFdmData _height.
         * @member {"height"|undefined} _height
         * @memberof printer.PrinterModelFdmData
         * @instance
         */
        Object.defineProperty(PrinterModelFdmData.prototype, "_height", {
            get: $util.oneOfGetter($oneOfFields = ["height"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * PrinterModelFdmData _depth.
         * @member {"depth"|undefined} _depth
         * @memberof printer.PrinterModelFdmData
         * @instance
         */
        Object.defineProperty(PrinterModelFdmData.prototype, "_depth", {
            get: $util.oneOfGetter($oneOfFields = ["depth"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * PrinterModelFdmData _weight.
         * @member {"weight"|undefined} _weight
         * @memberof printer.PrinterModelFdmData
         * @instance
         */
        Object.defineProperty(PrinterModelFdmData.prototype, "_weight", {
            get: $util.oneOfGetter($oneOfFields = ["weight"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * PrinterModelFdmData _power.
         * @member {"power"|undefined} _power
         * @memberof printer.PrinterModelFdmData
         * @instance
         */
        Object.defineProperty(PrinterModelFdmData.prototype, "_power", {
            get: $util.oneOfGetter($oneOfFields = ["power"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * PrinterModelFdmData _printWidth.
         * @member {"printWidth"|undefined} _printWidth
         * @memberof printer.PrinterModelFdmData
         * @instance
         */
        Object.defineProperty(PrinterModelFdmData.prototype, "_printWidth", {
            get: $util.oneOfGetter($oneOfFields = ["printWidth"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * PrinterModelFdmData _printHeight.
         * @member {"printHeight"|undefined} _printHeight
         * @memberof printer.PrinterModelFdmData
         * @instance
         */
        Object.defineProperty(PrinterModelFdmData.prototype, "_printHeight", {
            get: $util.oneOfGetter($oneOfFields = ["printHeight"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * PrinterModelFdmData _printDepth.
         * @member {"printDepth"|undefined} _printDepth
         * @memberof printer.PrinterModelFdmData
         * @instance
         */
        Object.defineProperty(PrinterModelFdmData.prototype, "_printDepth", {
            get: $util.oneOfGetter($oneOfFields = ["printDepth"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * PrinterModelFdmData _layerHeightMin.
         * @member {"layerHeightMin"|undefined} _layerHeightMin
         * @memberof printer.PrinterModelFdmData
         * @instance
         */
        Object.defineProperty(PrinterModelFdmData.prototype, "_layerHeightMin", {
            get: $util.oneOfGetter($oneOfFields = ["layerHeightMin"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * PrinterModelFdmData _layerHeightMax.
         * @member {"layerHeightMax"|undefined} _layerHeightMax
         * @memberof printer.PrinterModelFdmData
         * @instance
         */
        Object.defineProperty(PrinterModelFdmData.prototype, "_layerHeightMax", {
            get: $util.oneOfGetter($oneOfFields = ["layerHeightMax"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * PrinterModelFdmData _temperatureScale.
         * @member {"temperatureScale"|undefined} _temperatureScale
         * @memberof printer.PrinterModelFdmData
         * @instance
         */
        Object.defineProperty(PrinterModelFdmData.prototype, "_temperatureScale", {
            get: $util.oneOfGetter($oneOfFields = ["temperatureScale"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * PrinterModelFdmData _nozzleTemperatureMax.
         * @member {"nozzleTemperatureMax"|undefined} _nozzleTemperatureMax
         * @memberof printer.PrinterModelFdmData
         * @instance
         */
        Object.defineProperty(PrinterModelFdmData.prototype, "_nozzleTemperatureMax", {
            get: $util.oneOfGetter($oneOfFields = ["nozzleTemperatureMax"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * PrinterModelFdmData _heatbedTemperatureMax.
         * @member {"heatbedTemperatureMax"|undefined} _heatbedTemperatureMax
         * @memberof printer.PrinterModelFdmData
         * @instance
         */
        Object.defineProperty(PrinterModelFdmData.prototype, "_heatbedTemperatureMax", {
            get: $util.oneOfGetter($oneOfFields = ["heatbedTemperatureMax"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * PrinterModelFdmData _bedCalibration.
         * @member {"bedCalibration"|undefined} _bedCalibration
         * @memberof printer.PrinterModelFdmData
         * @instance
         */
        Object.defineProperty(PrinterModelFdmData.prototype, "_bedCalibration", {
            get: $util.oneOfGetter($oneOfFields = ["bedCalibration"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new PrinterModelFdmData instance using the specified properties.
         * @function create
         * @memberof printer.PrinterModelFdmData
         * @static
         * @param {printer.IPrinterModelFdmData=} [properties] Properties to set
         * @returns {printer.PrinterModelFdmData} PrinterModelFdmData instance
         */
        PrinterModelFdmData.create = function create(properties) {
            return new PrinterModelFdmData(properties);
        };

        /**
         * Encodes the specified PrinterModelFdmData message. Does not implicitly {@link printer.PrinterModelFdmData.verify|verify} messages.
         * @function encode
         * @memberof printer.PrinterModelFdmData
         * @static
         * @param {printer.IPrinterModelFdmData} message PrinterModelFdmData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PrinterModelFdmData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.printerModel != null && Object.hasOwnProperty.call(message, "printerModel"))
                $root.printer.PrinterModel.encode(message.printerModel, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.metric != null && Object.hasOwnProperty.call(message, "metric"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.metric);
            if (message.width != null && Object.hasOwnProperty.call(message, "width"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.width);
            if (message.height != null && Object.hasOwnProperty.call(message, "height"))
                writer.uint32(/* id 5, wireType 5 =*/45).float(message.height);
            if (message.depth != null && Object.hasOwnProperty.call(message, "depth"))
                writer.uint32(/* id 6, wireType 5 =*/53).float(message.depth);
            if (message.weight != null && Object.hasOwnProperty.call(message, "weight"))
                writer.uint32(/* id 7, wireType 5 =*/61).float(message.weight);
            if (message.power != null && Object.hasOwnProperty.call(message, "power"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.power);
            if (message.printWidth != null && Object.hasOwnProperty.call(message, "printWidth"))
                writer.uint32(/* id 9, wireType 5 =*/77).float(message.printWidth);
            if (message.printHeight != null && Object.hasOwnProperty.call(message, "printHeight"))
                writer.uint32(/* id 10, wireType 5 =*/85).float(message.printHeight);
            if (message.printDepth != null && Object.hasOwnProperty.call(message, "printDepth"))
                writer.uint32(/* id 11, wireType 5 =*/93).float(message.printDepth);
            if (message.layerHeightMin != null && Object.hasOwnProperty.call(message, "layerHeightMin"))
                writer.uint32(/* id 12, wireType 5 =*/101).float(message.layerHeightMin);
            if (message.layerHeightMax != null && Object.hasOwnProperty.call(message, "layerHeightMax"))
                writer.uint32(/* id 13, wireType 5 =*/109).float(message.layerHeightMax);
            if (message.temperatureScale != null && Object.hasOwnProperty.call(message, "temperatureScale"))
                writer.uint32(/* id 14, wireType 0 =*/112).int32(message.temperatureScale);
            if (message.nozzleTemperatureMax != null && Object.hasOwnProperty.call(message, "nozzleTemperatureMax"))
                writer.uint32(/* id 15, wireType 0 =*/120).int32(message.nozzleTemperatureMax);
            if (message.heatbedTemperatureMax != null && Object.hasOwnProperty.call(message, "heatbedTemperatureMax"))
                writer.uint32(/* id 16, wireType 0 =*/128).int32(message.heatbedTemperatureMax);
            if (message.connectivities != null && message.connectivities.length)
                for (let i = 0; i < message.connectivities.length; ++i)
                    $root.printer.PrinterModelConnectivity.encode(message.connectivities[i], writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
            if (message.printMediums != null && message.printMediums.length) {
                writer.uint32(/* id 18, wireType 2 =*/146).fork();
                for (let i = 0; i < message.printMediums.length; ++i)
                    writer.int32(message.printMediums[i]);
                writer.ldelim();
            }
            if (message.printSurfaces != null && message.printSurfaces.length)
                for (let i = 0; i < message.printSurfaces.length; ++i)
                    $root.printer.FdmPrintSurface.encode(message.printSurfaces[i], writer.uint32(/* id 19, wireType 2 =*/154).fork()).ldelim();
            if (message.bedCalibration != null && Object.hasOwnProperty.call(message, "bedCalibration"))
                writer.uint32(/* id 20, wireType 0 =*/160).int32(message.bedCalibration);
            if (message.filamentMaterials != null && message.filamentMaterials.length)
                for (let i = 0; i < message.filamentMaterials.length; ++i)
                    $root.printer.FilamentMaterial.encode(message.filamentMaterials[i], writer.uint32(/* id 21, wireType 2 =*/170).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PrinterModelFdmData message, length delimited. Does not implicitly {@link printer.PrinterModelFdmData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof printer.PrinterModelFdmData
         * @static
         * @param {printer.IPrinterModelFdmData} message PrinterModelFdmData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PrinterModelFdmData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PrinterModelFdmData message from the specified reader or buffer.
         * @function decode
         * @memberof printer.PrinterModelFdmData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {printer.PrinterModelFdmData} PrinterModelFdmData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PrinterModelFdmData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.printer.PrinterModelFdmData();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int32();
                        break;
                    }
                case 2: {
                        message.printerModel = $root.printer.PrinterModel.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.metric = reader.int32();
                        break;
                    }
                case 4: {
                        message.width = reader.float();
                        break;
                    }
                case 5: {
                        message.height = reader.float();
                        break;
                    }
                case 6: {
                        message.depth = reader.float();
                        break;
                    }
                case 7: {
                        message.weight = reader.float();
                        break;
                    }
                case 8: {
                        message.power = reader.int32();
                        break;
                    }
                case 9: {
                        message.printWidth = reader.float();
                        break;
                    }
                case 10: {
                        message.printHeight = reader.float();
                        break;
                    }
                case 11: {
                        message.printDepth = reader.float();
                        break;
                    }
                case 12: {
                        message.layerHeightMin = reader.float();
                        break;
                    }
                case 13: {
                        message.layerHeightMax = reader.float();
                        break;
                    }
                case 14: {
                        message.temperatureScale = reader.int32();
                        break;
                    }
                case 15: {
                        message.nozzleTemperatureMax = reader.int32();
                        break;
                    }
                case 16: {
                        message.heatbedTemperatureMax = reader.int32();
                        break;
                    }
                case 17: {
                        if (!(message.connectivities && message.connectivities.length))
                            message.connectivities = [];
                        message.connectivities.push($root.printer.PrinterModelConnectivity.decode(reader, reader.uint32()));
                        break;
                    }
                case 18: {
                        if (!(message.printMediums && message.printMediums.length))
                            message.printMediums = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.printMediums.push(reader.int32());
                        } else
                            message.printMediums.push(reader.int32());
                        break;
                    }
                case 19: {
                        if (!(message.printSurfaces && message.printSurfaces.length))
                            message.printSurfaces = [];
                        message.printSurfaces.push($root.printer.FdmPrintSurface.decode(reader, reader.uint32()));
                        break;
                    }
                case 20: {
                        message.bedCalibration = reader.int32();
                        break;
                    }
                case 21: {
                        if (!(message.filamentMaterials && message.filamentMaterials.length))
                            message.filamentMaterials = [];
                        message.filamentMaterials.push($root.printer.FilamentMaterial.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PrinterModelFdmData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof printer.PrinterModelFdmData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {printer.PrinterModelFdmData} PrinterModelFdmData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PrinterModelFdmData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PrinterModelFdmData message.
         * @function verify
         * @memberof printer.PrinterModelFdmData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PrinterModelFdmData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.printerModel != null && message.hasOwnProperty("printerModel")) {
                let error = $root.printer.PrinterModel.verify(message.printerModel);
                if (error)
                    return "printerModel." + error;
            }
            if (message.metric != null && message.hasOwnProperty("metric"))
                switch (message.metric) {
                default:
                    return "metric: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.width != null && message.hasOwnProperty("width")) {
                properties._width = 1;
                if (typeof message.width !== "number")
                    return "width: number expected";
            }
            if (message.height != null && message.hasOwnProperty("height")) {
                properties._height = 1;
                if (typeof message.height !== "number")
                    return "height: number expected";
            }
            if (message.depth != null && message.hasOwnProperty("depth")) {
                properties._depth = 1;
                if (typeof message.depth !== "number")
                    return "depth: number expected";
            }
            if (message.weight != null && message.hasOwnProperty("weight")) {
                properties._weight = 1;
                if (typeof message.weight !== "number")
                    return "weight: number expected";
            }
            if (message.power != null && message.hasOwnProperty("power")) {
                properties._power = 1;
                if (!$util.isInteger(message.power))
                    return "power: integer expected";
            }
            if (message.printWidth != null && message.hasOwnProperty("printWidth")) {
                properties._printWidth = 1;
                if (typeof message.printWidth !== "number")
                    return "printWidth: number expected";
            }
            if (message.printHeight != null && message.hasOwnProperty("printHeight")) {
                properties._printHeight = 1;
                if (typeof message.printHeight !== "number")
                    return "printHeight: number expected";
            }
            if (message.printDepth != null && message.hasOwnProperty("printDepth")) {
                properties._printDepth = 1;
                if (typeof message.printDepth !== "number")
                    return "printDepth: number expected";
            }
            if (message.layerHeightMin != null && message.hasOwnProperty("layerHeightMin")) {
                properties._layerHeightMin = 1;
                if (typeof message.layerHeightMin !== "number")
                    return "layerHeightMin: number expected";
            }
            if (message.layerHeightMax != null && message.hasOwnProperty("layerHeightMax")) {
                properties._layerHeightMax = 1;
                if (typeof message.layerHeightMax !== "number")
                    return "layerHeightMax: number expected";
            }
            if (message.temperatureScale != null && message.hasOwnProperty("temperatureScale")) {
                properties._temperatureScale = 1;
                switch (message.temperatureScale) {
                default:
                    return "temperatureScale: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            }
            if (message.nozzleTemperatureMax != null && message.hasOwnProperty("nozzleTemperatureMax")) {
                properties._nozzleTemperatureMax = 1;
                if (!$util.isInteger(message.nozzleTemperatureMax))
                    return "nozzleTemperatureMax: integer expected";
            }
            if (message.heatbedTemperatureMax != null && message.hasOwnProperty("heatbedTemperatureMax")) {
                properties._heatbedTemperatureMax = 1;
                if (!$util.isInteger(message.heatbedTemperatureMax))
                    return "heatbedTemperatureMax: integer expected";
            }
            if (message.connectivities != null && message.hasOwnProperty("connectivities")) {
                if (!Array.isArray(message.connectivities))
                    return "connectivities: array expected";
                for (let i = 0; i < message.connectivities.length; ++i) {
                    let error = $root.printer.PrinterModelConnectivity.verify(message.connectivities[i]);
                    if (error)
                        return "connectivities." + error;
                }
            }
            if (message.printMediums != null && message.hasOwnProperty("printMediums")) {
                if (!Array.isArray(message.printMediums))
                    return "printMediums: array expected";
                for (let i = 0; i < message.printMediums.length; ++i)
                    switch (message.printMediums[i]) {
                    default:
                        return "printMediums: enum value[] expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
            }
            if (message.printSurfaces != null && message.hasOwnProperty("printSurfaces")) {
                if (!Array.isArray(message.printSurfaces))
                    return "printSurfaces: array expected";
                for (let i = 0; i < message.printSurfaces.length; ++i) {
                    let error = $root.printer.FdmPrintSurface.verify(message.printSurfaces[i]);
                    if (error)
                        return "printSurfaces." + error;
                }
            }
            if (message.bedCalibration != null && message.hasOwnProperty("bedCalibration")) {
                properties._bedCalibration = 1;
                switch (message.bedCalibration) {
                default:
                    return "bedCalibration: enum value expected";
                case 0:
                case 1:
                    break;
                }
            }
            if (message.filamentMaterials != null && message.hasOwnProperty("filamentMaterials")) {
                if (!Array.isArray(message.filamentMaterials))
                    return "filamentMaterials: array expected";
                for (let i = 0; i < message.filamentMaterials.length; ++i) {
                    let error = $root.printer.FilamentMaterial.verify(message.filamentMaterials[i]);
                    if (error)
                        return "filamentMaterials." + error;
                }
            }
            return null;
        };

        /**
         * Creates a PrinterModelFdmData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof printer.PrinterModelFdmData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {printer.PrinterModelFdmData} PrinterModelFdmData
         */
        PrinterModelFdmData.fromObject = function fromObject(object) {
            if (object instanceof $root.printer.PrinterModelFdmData)
                return object;
            let message = new $root.printer.PrinterModelFdmData();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.printerModel != null) {
                if (typeof object.printerModel !== "object")
                    throw TypeError(".printer.PrinterModelFdmData.printerModel: object expected");
                message.printerModel = $root.printer.PrinterModel.fromObject(object.printerModel);
            }
            switch (object.metric) {
            default:
                if (typeof object.metric === "number") {
                    message.metric = object.metric;
                    break;
                }
                break;
            case "METRIC_SYSTEM":
            case 0:
                message.metric = 0;
                break;
            case "IMPERIAL_UNITS":
            case 1:
                message.metric = 1;
                break;
            }
            if (object.width != null)
                message.width = Number(object.width);
            if (object.height != null)
                message.height = Number(object.height);
            if (object.depth != null)
                message.depth = Number(object.depth);
            if (object.weight != null)
                message.weight = Number(object.weight);
            if (object.power != null)
                message.power = object.power | 0;
            if (object.printWidth != null)
                message.printWidth = Number(object.printWidth);
            if (object.printHeight != null)
                message.printHeight = Number(object.printHeight);
            if (object.printDepth != null)
                message.printDepth = Number(object.printDepth);
            if (object.layerHeightMin != null)
                message.layerHeightMin = Number(object.layerHeightMin);
            if (object.layerHeightMax != null)
                message.layerHeightMax = Number(object.layerHeightMax);
            switch (object.temperatureScale) {
            default:
                if (typeof object.temperatureScale === "number") {
                    message.temperatureScale = object.temperatureScale;
                    break;
                }
                break;
            case "CELSIUS":
            case 0:
                message.temperatureScale = 0;
                break;
            case "FAHRENHEIT":
            case 1:
                message.temperatureScale = 1;
                break;
            case "KELVIN":
            case 2:
                message.temperatureScale = 2;
                break;
            }
            if (object.nozzleTemperatureMax != null)
                message.nozzleTemperatureMax = object.nozzleTemperatureMax | 0;
            if (object.heatbedTemperatureMax != null)
                message.heatbedTemperatureMax = object.heatbedTemperatureMax | 0;
            if (object.connectivities) {
                if (!Array.isArray(object.connectivities))
                    throw TypeError(".printer.PrinterModelFdmData.connectivities: array expected");
                message.connectivities = [];
                for (let i = 0; i < object.connectivities.length; ++i) {
                    if (typeof object.connectivities[i] !== "object")
                        throw TypeError(".printer.PrinterModelFdmData.connectivities: object expected");
                    message.connectivities[i] = $root.printer.PrinterModelConnectivity.fromObject(object.connectivities[i]);
                }
            }
            if (object.printMediums) {
                if (!Array.isArray(object.printMediums))
                    throw TypeError(".printer.PrinterModelFdmData.printMediums: array expected");
                message.printMediums = [];
                for (let i = 0; i < object.printMediums.length; ++i)
                    switch (object.printMediums[i]) {
                    default:
                        if (typeof object.printMediums[i] === "number") {
                            message.printMediums[i] = object.printMediums[i];
                            break;
                        }
                    case "USB_DRIVE":
                    case 0:
                        message.printMediums[i] = 0;
                        break;
                    case "LAN":
                    case 1:
                        message.printMediums[i] = 1;
                        break;
                    case "PRUSA_CONNECT":
                    case 2:
                        message.printMediums[i] = 2;
                        break;
                    }
            }
            if (object.printSurfaces) {
                if (!Array.isArray(object.printSurfaces))
                    throw TypeError(".printer.PrinterModelFdmData.printSurfaces: array expected");
                message.printSurfaces = [];
                for (let i = 0; i < object.printSurfaces.length; ++i) {
                    if (typeof object.printSurfaces[i] !== "object")
                        throw TypeError(".printer.PrinterModelFdmData.printSurfaces: object expected");
                    message.printSurfaces[i] = $root.printer.FdmPrintSurface.fromObject(object.printSurfaces[i]);
                }
            }
            switch (object.bedCalibration) {
            default:
                if (typeof object.bedCalibration === "number") {
                    message.bedCalibration = object.bedCalibration;
                    break;
                }
                break;
            case "MANUALLY":
            case 0:
                message.bedCalibration = 0;
                break;
            case "AUTOMATIC":
            case 1:
                message.bedCalibration = 1;
                break;
            }
            if (object.filamentMaterials) {
                if (!Array.isArray(object.filamentMaterials))
                    throw TypeError(".printer.PrinterModelFdmData.filamentMaterials: array expected");
                message.filamentMaterials = [];
                for (let i = 0; i < object.filamentMaterials.length; ++i) {
                    if (typeof object.filamentMaterials[i] !== "object")
                        throw TypeError(".printer.PrinterModelFdmData.filamentMaterials: object expected");
                    message.filamentMaterials[i] = $root.printer.FilamentMaterial.fromObject(object.filamentMaterials[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a PrinterModelFdmData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof printer.PrinterModelFdmData
         * @static
         * @param {printer.PrinterModelFdmData} message PrinterModelFdmData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PrinterModelFdmData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.connectivities = [];
                object.printMediums = [];
                object.printSurfaces = [];
                object.filamentMaterials = [];
            }
            if (options.defaults) {
                object.id = 0;
                object.printerModel = null;
                object.metric = options.enums === String ? "METRIC_SYSTEM" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.printerModel != null && message.hasOwnProperty("printerModel"))
                object.printerModel = $root.printer.PrinterModel.toObject(message.printerModel, options);
            if (message.metric != null && message.hasOwnProperty("metric"))
                object.metric = options.enums === String ? $root.printer.PrinterModelMetric[message.metric] === undefined ? message.metric : $root.printer.PrinterModelMetric[message.metric] : message.metric;
            if (message.width != null && message.hasOwnProperty("width")) {
                object.width = options.json && !isFinite(message.width) ? String(message.width) : message.width;
                if (options.oneofs)
                    object._width = "width";
            }
            if (message.height != null && message.hasOwnProperty("height")) {
                object.height = options.json && !isFinite(message.height) ? String(message.height) : message.height;
                if (options.oneofs)
                    object._height = "height";
            }
            if (message.depth != null && message.hasOwnProperty("depth")) {
                object.depth = options.json && !isFinite(message.depth) ? String(message.depth) : message.depth;
                if (options.oneofs)
                    object._depth = "depth";
            }
            if (message.weight != null && message.hasOwnProperty("weight")) {
                object.weight = options.json && !isFinite(message.weight) ? String(message.weight) : message.weight;
                if (options.oneofs)
                    object._weight = "weight";
            }
            if (message.power != null && message.hasOwnProperty("power")) {
                object.power = message.power;
                if (options.oneofs)
                    object._power = "power";
            }
            if (message.printWidth != null && message.hasOwnProperty("printWidth")) {
                object.printWidth = options.json && !isFinite(message.printWidth) ? String(message.printWidth) : message.printWidth;
                if (options.oneofs)
                    object._printWidth = "printWidth";
            }
            if (message.printHeight != null && message.hasOwnProperty("printHeight")) {
                object.printHeight = options.json && !isFinite(message.printHeight) ? String(message.printHeight) : message.printHeight;
                if (options.oneofs)
                    object._printHeight = "printHeight";
            }
            if (message.printDepth != null && message.hasOwnProperty("printDepth")) {
                object.printDepth = options.json && !isFinite(message.printDepth) ? String(message.printDepth) : message.printDepth;
                if (options.oneofs)
                    object._printDepth = "printDepth";
            }
            if (message.layerHeightMin != null && message.hasOwnProperty("layerHeightMin")) {
                object.layerHeightMin = options.json && !isFinite(message.layerHeightMin) ? String(message.layerHeightMin) : message.layerHeightMin;
                if (options.oneofs)
                    object._layerHeightMin = "layerHeightMin";
            }
            if (message.layerHeightMax != null && message.hasOwnProperty("layerHeightMax")) {
                object.layerHeightMax = options.json && !isFinite(message.layerHeightMax) ? String(message.layerHeightMax) : message.layerHeightMax;
                if (options.oneofs)
                    object._layerHeightMax = "layerHeightMax";
            }
            if (message.temperatureScale != null && message.hasOwnProperty("temperatureScale")) {
                object.temperatureScale = options.enums === String ? $root.printer.TemperatureScale[message.temperatureScale] === undefined ? message.temperatureScale : $root.printer.TemperatureScale[message.temperatureScale] : message.temperatureScale;
                if (options.oneofs)
                    object._temperatureScale = "temperatureScale";
            }
            if (message.nozzleTemperatureMax != null && message.hasOwnProperty("nozzleTemperatureMax")) {
                object.nozzleTemperatureMax = message.nozzleTemperatureMax;
                if (options.oneofs)
                    object._nozzleTemperatureMax = "nozzleTemperatureMax";
            }
            if (message.heatbedTemperatureMax != null && message.hasOwnProperty("heatbedTemperatureMax")) {
                object.heatbedTemperatureMax = message.heatbedTemperatureMax;
                if (options.oneofs)
                    object._heatbedTemperatureMax = "heatbedTemperatureMax";
            }
            if (message.connectivities && message.connectivities.length) {
                object.connectivities = [];
                for (let j = 0; j < message.connectivities.length; ++j)
                    object.connectivities[j] = $root.printer.PrinterModelConnectivity.toObject(message.connectivities[j], options);
            }
            if (message.printMediums && message.printMediums.length) {
                object.printMediums = [];
                for (let j = 0; j < message.printMediums.length; ++j)
                    object.printMediums[j] = options.enums === String ? $root.printer.PrinterModelPrintMedium[message.printMediums[j]] === undefined ? message.printMediums[j] : $root.printer.PrinterModelPrintMedium[message.printMediums[j]] : message.printMediums[j];
            }
            if (message.printSurfaces && message.printSurfaces.length) {
                object.printSurfaces = [];
                for (let j = 0; j < message.printSurfaces.length; ++j)
                    object.printSurfaces[j] = $root.printer.FdmPrintSurface.toObject(message.printSurfaces[j], options);
            }
            if (message.bedCalibration != null && message.hasOwnProperty("bedCalibration")) {
                object.bedCalibration = options.enums === String ? $root.printer.Calibration[message.bedCalibration] === undefined ? message.bedCalibration : $root.printer.Calibration[message.bedCalibration] : message.bedCalibration;
                if (options.oneofs)
                    object._bedCalibration = "bedCalibration";
            }
            if (message.filamentMaterials && message.filamentMaterials.length) {
                object.filamentMaterials = [];
                for (let j = 0; j < message.filamentMaterials.length; ++j)
                    object.filamentMaterials[j] = $root.printer.FilamentMaterial.toObject(message.filamentMaterials[j], options);
            }
            return object;
        };

        /**
         * Converts this PrinterModelFdmData to JSON.
         * @function toJSON
         * @memberof printer.PrinterModelFdmData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PrinterModelFdmData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PrinterModelFdmData
         * @function getTypeUrl
         * @memberof printer.PrinterModelFdmData
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PrinterModelFdmData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/printer.PrinterModelFdmData";
        };

        return PrinterModelFdmData;
    })();

    printer.PrinterModelSlaData = (function() {

        /**
         * Properties of a PrinterModelSlaData.
         * @memberof printer
         * @interface IPrinterModelSlaData
         * @property {number|null} [id] PrinterModelSlaData id
         * @property {printer.IPrinterModel|null} [printerModel] PrinterModelSlaData printerModel
         * @property {printer.PrinterModelMetric|null} [metric] PrinterModelSlaData metric
         * @property {number|null} [width] PrinterModelSlaData width
         * @property {number|null} [height] PrinterModelSlaData height
         * @property {number|null} [depth] PrinterModelSlaData depth
         * @property {number|null} [weight] PrinterModelSlaData weight
         * @property {number|null} [power] PrinterModelSlaData power
         * @property {number|null} [printWidth] PrinterModelSlaData printWidth
         * @property {number|null} [printHeight] PrinterModelSlaData printHeight
         * @property {number|null} [printDepth] PrinterModelSlaData printDepth
         * @property {number|null} [layerThicknessMin] PrinterModelSlaData layerThicknessMin
         * @property {number|null} [layerThicknessMax] PrinterModelSlaData layerThicknessMax
         * @property {number|null} [resolutionX] PrinterModelSlaData resolutionX
         * @property {number|null} [resolutionY] PrinterModelSlaData resolutionY
         * @property {number|null} [printSpeedPerHourMax] PrinterModelSlaData printSpeedPerHourMax
         * @property {number|null} [storage] PrinterModelSlaData storage
         * @property {Array.<printer.IPrinterModelConnectivity>|null} [connectivities] PrinterModelSlaData connectivities
         * @property {Array.<printer.PrinterModelPrintMedium>|null} [printMediums] PrinterModelSlaData printMediums
         * @property {printer.Calibration|null} [calibrationZ] PrinterModelSlaData calibrationZ
         */

        /**
         * Constructs a new PrinterModelSlaData.
         * @memberof printer
         * @classdesc Represents a PrinterModelSlaData.
         * @implements IPrinterModelSlaData
         * @constructor
         * @param {printer.IPrinterModelSlaData=} [properties] Properties to set
         */
        function PrinterModelSlaData(properties) {
            this.connectivities = [];
            this.printMediums = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PrinterModelSlaData id.
         * @member {number} id
         * @memberof printer.PrinterModelSlaData
         * @instance
         */
        PrinterModelSlaData.prototype.id = 0;

        /**
         * PrinterModelSlaData printerModel.
         * @member {printer.IPrinterModel|null|undefined} printerModel
         * @memberof printer.PrinterModelSlaData
         * @instance
         */
        PrinterModelSlaData.prototype.printerModel = null;

        /**
         * PrinterModelSlaData metric.
         * @member {printer.PrinterModelMetric} metric
         * @memberof printer.PrinterModelSlaData
         * @instance
         */
        PrinterModelSlaData.prototype.metric = 0;

        /**
         * PrinterModelSlaData width.
         * @member {number|null|undefined} width
         * @memberof printer.PrinterModelSlaData
         * @instance
         */
        PrinterModelSlaData.prototype.width = null;

        /**
         * PrinterModelSlaData height.
         * @member {number|null|undefined} height
         * @memberof printer.PrinterModelSlaData
         * @instance
         */
        PrinterModelSlaData.prototype.height = null;

        /**
         * PrinterModelSlaData depth.
         * @member {number|null|undefined} depth
         * @memberof printer.PrinterModelSlaData
         * @instance
         */
        PrinterModelSlaData.prototype.depth = null;

        /**
         * PrinterModelSlaData weight.
         * @member {number|null|undefined} weight
         * @memberof printer.PrinterModelSlaData
         * @instance
         */
        PrinterModelSlaData.prototype.weight = null;

        /**
         * PrinterModelSlaData power.
         * @member {number|null|undefined} power
         * @memberof printer.PrinterModelSlaData
         * @instance
         */
        PrinterModelSlaData.prototype.power = null;

        /**
         * PrinterModelSlaData printWidth.
         * @member {number|null|undefined} printWidth
         * @memberof printer.PrinterModelSlaData
         * @instance
         */
        PrinterModelSlaData.prototype.printWidth = null;

        /**
         * PrinterModelSlaData printHeight.
         * @member {number|null|undefined} printHeight
         * @memberof printer.PrinterModelSlaData
         * @instance
         */
        PrinterModelSlaData.prototype.printHeight = null;

        /**
         * PrinterModelSlaData printDepth.
         * @member {number|null|undefined} printDepth
         * @memberof printer.PrinterModelSlaData
         * @instance
         */
        PrinterModelSlaData.prototype.printDepth = null;

        /**
         * PrinterModelSlaData layerThicknessMin.
         * @member {number|null|undefined} layerThicknessMin
         * @memberof printer.PrinterModelSlaData
         * @instance
         */
        PrinterModelSlaData.prototype.layerThicknessMin = null;

        /**
         * PrinterModelSlaData layerThicknessMax.
         * @member {number|null|undefined} layerThicknessMax
         * @memberof printer.PrinterModelSlaData
         * @instance
         */
        PrinterModelSlaData.prototype.layerThicknessMax = null;

        /**
         * PrinterModelSlaData resolutionX.
         * @member {number|null|undefined} resolutionX
         * @memberof printer.PrinterModelSlaData
         * @instance
         */
        PrinterModelSlaData.prototype.resolutionX = null;

        /**
         * PrinterModelSlaData resolutionY.
         * @member {number|null|undefined} resolutionY
         * @memberof printer.PrinterModelSlaData
         * @instance
         */
        PrinterModelSlaData.prototype.resolutionY = null;

        /**
         * PrinterModelSlaData printSpeedPerHourMax.
         * @member {number|null|undefined} printSpeedPerHourMax
         * @memberof printer.PrinterModelSlaData
         * @instance
         */
        PrinterModelSlaData.prototype.printSpeedPerHourMax = null;

        /**
         * PrinterModelSlaData storage.
         * @member {number|null|undefined} storage
         * @memberof printer.PrinterModelSlaData
         * @instance
         */
        PrinterModelSlaData.prototype.storage = null;

        /**
         * PrinterModelSlaData connectivities.
         * @member {Array.<printer.IPrinterModelConnectivity>} connectivities
         * @memberof printer.PrinterModelSlaData
         * @instance
         */
        PrinterModelSlaData.prototype.connectivities = $util.emptyArray;

        /**
         * PrinterModelSlaData printMediums.
         * @member {Array.<printer.PrinterModelPrintMedium>} printMediums
         * @memberof printer.PrinterModelSlaData
         * @instance
         */
        PrinterModelSlaData.prototype.printMediums = $util.emptyArray;

        /**
         * PrinterModelSlaData calibrationZ.
         * @member {printer.Calibration|null|undefined} calibrationZ
         * @memberof printer.PrinterModelSlaData
         * @instance
         */
        PrinterModelSlaData.prototype.calibrationZ = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * PrinterModelSlaData _width.
         * @member {"width"|undefined} _width
         * @memberof printer.PrinterModelSlaData
         * @instance
         */
        Object.defineProperty(PrinterModelSlaData.prototype, "_width", {
            get: $util.oneOfGetter($oneOfFields = ["width"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * PrinterModelSlaData _height.
         * @member {"height"|undefined} _height
         * @memberof printer.PrinterModelSlaData
         * @instance
         */
        Object.defineProperty(PrinterModelSlaData.prototype, "_height", {
            get: $util.oneOfGetter($oneOfFields = ["height"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * PrinterModelSlaData _depth.
         * @member {"depth"|undefined} _depth
         * @memberof printer.PrinterModelSlaData
         * @instance
         */
        Object.defineProperty(PrinterModelSlaData.prototype, "_depth", {
            get: $util.oneOfGetter($oneOfFields = ["depth"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * PrinterModelSlaData _weight.
         * @member {"weight"|undefined} _weight
         * @memberof printer.PrinterModelSlaData
         * @instance
         */
        Object.defineProperty(PrinterModelSlaData.prototype, "_weight", {
            get: $util.oneOfGetter($oneOfFields = ["weight"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * PrinterModelSlaData _power.
         * @member {"power"|undefined} _power
         * @memberof printer.PrinterModelSlaData
         * @instance
         */
        Object.defineProperty(PrinterModelSlaData.prototype, "_power", {
            get: $util.oneOfGetter($oneOfFields = ["power"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * PrinterModelSlaData _printWidth.
         * @member {"printWidth"|undefined} _printWidth
         * @memberof printer.PrinterModelSlaData
         * @instance
         */
        Object.defineProperty(PrinterModelSlaData.prototype, "_printWidth", {
            get: $util.oneOfGetter($oneOfFields = ["printWidth"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * PrinterModelSlaData _printHeight.
         * @member {"printHeight"|undefined} _printHeight
         * @memberof printer.PrinterModelSlaData
         * @instance
         */
        Object.defineProperty(PrinterModelSlaData.prototype, "_printHeight", {
            get: $util.oneOfGetter($oneOfFields = ["printHeight"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * PrinterModelSlaData _printDepth.
         * @member {"printDepth"|undefined} _printDepth
         * @memberof printer.PrinterModelSlaData
         * @instance
         */
        Object.defineProperty(PrinterModelSlaData.prototype, "_printDepth", {
            get: $util.oneOfGetter($oneOfFields = ["printDepth"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * PrinterModelSlaData _layerThicknessMin.
         * @member {"layerThicknessMin"|undefined} _layerThicknessMin
         * @memberof printer.PrinterModelSlaData
         * @instance
         */
        Object.defineProperty(PrinterModelSlaData.prototype, "_layerThicknessMin", {
            get: $util.oneOfGetter($oneOfFields = ["layerThicknessMin"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * PrinterModelSlaData _layerThicknessMax.
         * @member {"layerThicknessMax"|undefined} _layerThicknessMax
         * @memberof printer.PrinterModelSlaData
         * @instance
         */
        Object.defineProperty(PrinterModelSlaData.prototype, "_layerThicknessMax", {
            get: $util.oneOfGetter($oneOfFields = ["layerThicknessMax"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * PrinterModelSlaData _resolutionX.
         * @member {"resolutionX"|undefined} _resolutionX
         * @memberof printer.PrinterModelSlaData
         * @instance
         */
        Object.defineProperty(PrinterModelSlaData.prototype, "_resolutionX", {
            get: $util.oneOfGetter($oneOfFields = ["resolutionX"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * PrinterModelSlaData _resolutionY.
         * @member {"resolutionY"|undefined} _resolutionY
         * @memberof printer.PrinterModelSlaData
         * @instance
         */
        Object.defineProperty(PrinterModelSlaData.prototype, "_resolutionY", {
            get: $util.oneOfGetter($oneOfFields = ["resolutionY"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * PrinterModelSlaData _printSpeedPerHourMax.
         * @member {"printSpeedPerHourMax"|undefined} _printSpeedPerHourMax
         * @memberof printer.PrinterModelSlaData
         * @instance
         */
        Object.defineProperty(PrinterModelSlaData.prototype, "_printSpeedPerHourMax", {
            get: $util.oneOfGetter($oneOfFields = ["printSpeedPerHourMax"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * PrinterModelSlaData _storage.
         * @member {"storage"|undefined} _storage
         * @memberof printer.PrinterModelSlaData
         * @instance
         */
        Object.defineProperty(PrinterModelSlaData.prototype, "_storage", {
            get: $util.oneOfGetter($oneOfFields = ["storage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * PrinterModelSlaData _calibrationZ.
         * @member {"calibrationZ"|undefined} _calibrationZ
         * @memberof printer.PrinterModelSlaData
         * @instance
         */
        Object.defineProperty(PrinterModelSlaData.prototype, "_calibrationZ", {
            get: $util.oneOfGetter($oneOfFields = ["calibrationZ"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new PrinterModelSlaData instance using the specified properties.
         * @function create
         * @memberof printer.PrinterModelSlaData
         * @static
         * @param {printer.IPrinterModelSlaData=} [properties] Properties to set
         * @returns {printer.PrinterModelSlaData} PrinterModelSlaData instance
         */
        PrinterModelSlaData.create = function create(properties) {
            return new PrinterModelSlaData(properties);
        };

        /**
         * Encodes the specified PrinterModelSlaData message. Does not implicitly {@link printer.PrinterModelSlaData.verify|verify} messages.
         * @function encode
         * @memberof printer.PrinterModelSlaData
         * @static
         * @param {printer.IPrinterModelSlaData} message PrinterModelSlaData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PrinterModelSlaData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.printerModel != null && Object.hasOwnProperty.call(message, "printerModel"))
                $root.printer.PrinterModel.encode(message.printerModel, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.metric != null && Object.hasOwnProperty.call(message, "metric"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.metric);
            if (message.width != null && Object.hasOwnProperty.call(message, "width"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.width);
            if (message.height != null && Object.hasOwnProperty.call(message, "height"))
                writer.uint32(/* id 5, wireType 5 =*/45).float(message.height);
            if (message.depth != null && Object.hasOwnProperty.call(message, "depth"))
                writer.uint32(/* id 6, wireType 5 =*/53).float(message.depth);
            if (message.weight != null && Object.hasOwnProperty.call(message, "weight"))
                writer.uint32(/* id 7, wireType 5 =*/61).float(message.weight);
            if (message.power != null && Object.hasOwnProperty.call(message, "power"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.power);
            if (message.printWidth != null && Object.hasOwnProperty.call(message, "printWidth"))
                writer.uint32(/* id 9, wireType 5 =*/77).float(message.printWidth);
            if (message.printHeight != null && Object.hasOwnProperty.call(message, "printHeight"))
                writer.uint32(/* id 10, wireType 5 =*/85).float(message.printHeight);
            if (message.printDepth != null && Object.hasOwnProperty.call(message, "printDepth"))
                writer.uint32(/* id 11, wireType 5 =*/93).float(message.printDepth);
            if (message.layerThicknessMin != null && Object.hasOwnProperty.call(message, "layerThicknessMin"))
                writer.uint32(/* id 12, wireType 5 =*/101).float(message.layerThicknessMin);
            if (message.layerThicknessMax != null && Object.hasOwnProperty.call(message, "layerThicknessMax"))
                writer.uint32(/* id 13, wireType 5 =*/109).float(message.layerThicknessMax);
            if (message.resolutionX != null && Object.hasOwnProperty.call(message, "resolutionX"))
                writer.uint32(/* id 14, wireType 5 =*/117).float(message.resolutionX);
            if (message.resolutionY != null && Object.hasOwnProperty.call(message, "resolutionY"))
                writer.uint32(/* id 15, wireType 5 =*/125).float(message.resolutionY);
            if (message.printSpeedPerHourMax != null && Object.hasOwnProperty.call(message, "printSpeedPerHourMax"))
                writer.uint32(/* id 16, wireType 0 =*/128).int32(message.printSpeedPerHourMax);
            if (message.storage != null && Object.hasOwnProperty.call(message, "storage"))
                writer.uint32(/* id 17, wireType 0 =*/136).int32(message.storage);
            if (message.connectivities != null && message.connectivities.length)
                for (let i = 0; i < message.connectivities.length; ++i)
                    $root.printer.PrinterModelConnectivity.encode(message.connectivities[i], writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
            if (message.printMediums != null && message.printMediums.length) {
                writer.uint32(/* id 19, wireType 2 =*/154).fork();
                for (let i = 0; i < message.printMediums.length; ++i)
                    writer.int32(message.printMediums[i]);
                writer.ldelim();
            }
            if (message.calibrationZ != null && Object.hasOwnProperty.call(message, "calibrationZ"))
                writer.uint32(/* id 20, wireType 0 =*/160).int32(message.calibrationZ);
            return writer;
        };

        /**
         * Encodes the specified PrinterModelSlaData message, length delimited. Does not implicitly {@link printer.PrinterModelSlaData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof printer.PrinterModelSlaData
         * @static
         * @param {printer.IPrinterModelSlaData} message PrinterModelSlaData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PrinterModelSlaData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PrinterModelSlaData message from the specified reader or buffer.
         * @function decode
         * @memberof printer.PrinterModelSlaData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {printer.PrinterModelSlaData} PrinterModelSlaData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PrinterModelSlaData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.printer.PrinterModelSlaData();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int32();
                        break;
                    }
                case 2: {
                        message.printerModel = $root.printer.PrinterModel.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.metric = reader.int32();
                        break;
                    }
                case 4: {
                        message.width = reader.float();
                        break;
                    }
                case 5: {
                        message.height = reader.float();
                        break;
                    }
                case 6: {
                        message.depth = reader.float();
                        break;
                    }
                case 7: {
                        message.weight = reader.float();
                        break;
                    }
                case 8: {
                        message.power = reader.int32();
                        break;
                    }
                case 9: {
                        message.printWidth = reader.float();
                        break;
                    }
                case 10: {
                        message.printHeight = reader.float();
                        break;
                    }
                case 11: {
                        message.printDepth = reader.float();
                        break;
                    }
                case 12: {
                        message.layerThicknessMin = reader.float();
                        break;
                    }
                case 13: {
                        message.layerThicknessMax = reader.float();
                        break;
                    }
                case 14: {
                        message.resolutionX = reader.float();
                        break;
                    }
                case 15: {
                        message.resolutionY = reader.float();
                        break;
                    }
                case 16: {
                        message.printSpeedPerHourMax = reader.int32();
                        break;
                    }
                case 17: {
                        message.storage = reader.int32();
                        break;
                    }
                case 18: {
                        if (!(message.connectivities && message.connectivities.length))
                            message.connectivities = [];
                        message.connectivities.push($root.printer.PrinterModelConnectivity.decode(reader, reader.uint32()));
                        break;
                    }
                case 19: {
                        if (!(message.printMediums && message.printMediums.length))
                            message.printMediums = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.printMediums.push(reader.int32());
                        } else
                            message.printMediums.push(reader.int32());
                        break;
                    }
                case 20: {
                        message.calibrationZ = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PrinterModelSlaData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof printer.PrinterModelSlaData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {printer.PrinterModelSlaData} PrinterModelSlaData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PrinterModelSlaData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PrinterModelSlaData message.
         * @function verify
         * @memberof printer.PrinterModelSlaData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PrinterModelSlaData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.printerModel != null && message.hasOwnProperty("printerModel")) {
                let error = $root.printer.PrinterModel.verify(message.printerModel);
                if (error)
                    return "printerModel." + error;
            }
            if (message.metric != null && message.hasOwnProperty("metric"))
                switch (message.metric) {
                default:
                    return "metric: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.width != null && message.hasOwnProperty("width")) {
                properties._width = 1;
                if (typeof message.width !== "number")
                    return "width: number expected";
            }
            if (message.height != null && message.hasOwnProperty("height")) {
                properties._height = 1;
                if (typeof message.height !== "number")
                    return "height: number expected";
            }
            if (message.depth != null && message.hasOwnProperty("depth")) {
                properties._depth = 1;
                if (typeof message.depth !== "number")
                    return "depth: number expected";
            }
            if (message.weight != null && message.hasOwnProperty("weight")) {
                properties._weight = 1;
                if (typeof message.weight !== "number")
                    return "weight: number expected";
            }
            if (message.power != null && message.hasOwnProperty("power")) {
                properties._power = 1;
                if (!$util.isInteger(message.power))
                    return "power: integer expected";
            }
            if (message.printWidth != null && message.hasOwnProperty("printWidth")) {
                properties._printWidth = 1;
                if (typeof message.printWidth !== "number")
                    return "printWidth: number expected";
            }
            if (message.printHeight != null && message.hasOwnProperty("printHeight")) {
                properties._printHeight = 1;
                if (typeof message.printHeight !== "number")
                    return "printHeight: number expected";
            }
            if (message.printDepth != null && message.hasOwnProperty("printDepth")) {
                properties._printDepth = 1;
                if (typeof message.printDepth !== "number")
                    return "printDepth: number expected";
            }
            if (message.layerThicknessMin != null && message.hasOwnProperty("layerThicknessMin")) {
                properties._layerThicknessMin = 1;
                if (typeof message.layerThicknessMin !== "number")
                    return "layerThicknessMin: number expected";
            }
            if (message.layerThicknessMax != null && message.hasOwnProperty("layerThicknessMax")) {
                properties._layerThicknessMax = 1;
                if (typeof message.layerThicknessMax !== "number")
                    return "layerThicknessMax: number expected";
            }
            if (message.resolutionX != null && message.hasOwnProperty("resolutionX")) {
                properties._resolutionX = 1;
                if (typeof message.resolutionX !== "number")
                    return "resolutionX: number expected";
            }
            if (message.resolutionY != null && message.hasOwnProperty("resolutionY")) {
                properties._resolutionY = 1;
                if (typeof message.resolutionY !== "number")
                    return "resolutionY: number expected";
            }
            if (message.printSpeedPerHourMax != null && message.hasOwnProperty("printSpeedPerHourMax")) {
                properties._printSpeedPerHourMax = 1;
                if (!$util.isInteger(message.printSpeedPerHourMax))
                    return "printSpeedPerHourMax: integer expected";
            }
            if (message.storage != null && message.hasOwnProperty("storage")) {
                properties._storage = 1;
                if (!$util.isInteger(message.storage))
                    return "storage: integer expected";
            }
            if (message.connectivities != null && message.hasOwnProperty("connectivities")) {
                if (!Array.isArray(message.connectivities))
                    return "connectivities: array expected";
                for (let i = 0; i < message.connectivities.length; ++i) {
                    let error = $root.printer.PrinterModelConnectivity.verify(message.connectivities[i]);
                    if (error)
                        return "connectivities." + error;
                }
            }
            if (message.printMediums != null && message.hasOwnProperty("printMediums")) {
                if (!Array.isArray(message.printMediums))
                    return "printMediums: array expected";
                for (let i = 0; i < message.printMediums.length; ++i)
                    switch (message.printMediums[i]) {
                    default:
                        return "printMediums: enum value[] expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
            }
            if (message.calibrationZ != null && message.hasOwnProperty("calibrationZ")) {
                properties._calibrationZ = 1;
                switch (message.calibrationZ) {
                default:
                    return "calibrationZ: enum value expected";
                case 0:
                case 1:
                    break;
                }
            }
            return null;
        };

        /**
         * Creates a PrinterModelSlaData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof printer.PrinterModelSlaData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {printer.PrinterModelSlaData} PrinterModelSlaData
         */
        PrinterModelSlaData.fromObject = function fromObject(object) {
            if (object instanceof $root.printer.PrinterModelSlaData)
                return object;
            let message = new $root.printer.PrinterModelSlaData();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.printerModel != null) {
                if (typeof object.printerModel !== "object")
                    throw TypeError(".printer.PrinterModelSlaData.printerModel: object expected");
                message.printerModel = $root.printer.PrinterModel.fromObject(object.printerModel);
            }
            switch (object.metric) {
            default:
                if (typeof object.metric === "number") {
                    message.metric = object.metric;
                    break;
                }
                break;
            case "METRIC_SYSTEM":
            case 0:
                message.metric = 0;
                break;
            case "IMPERIAL_UNITS":
            case 1:
                message.metric = 1;
                break;
            }
            if (object.width != null)
                message.width = Number(object.width);
            if (object.height != null)
                message.height = Number(object.height);
            if (object.depth != null)
                message.depth = Number(object.depth);
            if (object.weight != null)
                message.weight = Number(object.weight);
            if (object.power != null)
                message.power = object.power | 0;
            if (object.printWidth != null)
                message.printWidth = Number(object.printWidth);
            if (object.printHeight != null)
                message.printHeight = Number(object.printHeight);
            if (object.printDepth != null)
                message.printDepth = Number(object.printDepth);
            if (object.layerThicknessMin != null)
                message.layerThicknessMin = Number(object.layerThicknessMin);
            if (object.layerThicknessMax != null)
                message.layerThicknessMax = Number(object.layerThicknessMax);
            if (object.resolutionX != null)
                message.resolutionX = Number(object.resolutionX);
            if (object.resolutionY != null)
                message.resolutionY = Number(object.resolutionY);
            if (object.printSpeedPerHourMax != null)
                message.printSpeedPerHourMax = object.printSpeedPerHourMax | 0;
            if (object.storage != null)
                message.storage = object.storage | 0;
            if (object.connectivities) {
                if (!Array.isArray(object.connectivities))
                    throw TypeError(".printer.PrinterModelSlaData.connectivities: array expected");
                message.connectivities = [];
                for (let i = 0; i < object.connectivities.length; ++i) {
                    if (typeof object.connectivities[i] !== "object")
                        throw TypeError(".printer.PrinterModelSlaData.connectivities: object expected");
                    message.connectivities[i] = $root.printer.PrinterModelConnectivity.fromObject(object.connectivities[i]);
                }
            }
            if (object.printMediums) {
                if (!Array.isArray(object.printMediums))
                    throw TypeError(".printer.PrinterModelSlaData.printMediums: array expected");
                message.printMediums = [];
                for (let i = 0; i < object.printMediums.length; ++i)
                    switch (object.printMediums[i]) {
                    default:
                        if (typeof object.printMediums[i] === "number") {
                            message.printMediums[i] = object.printMediums[i];
                            break;
                        }
                    case "USB_DRIVE":
                    case 0:
                        message.printMediums[i] = 0;
                        break;
                    case "LAN":
                    case 1:
                        message.printMediums[i] = 1;
                        break;
                    case "PRUSA_CONNECT":
                    case 2:
                        message.printMediums[i] = 2;
                        break;
                    }
            }
            switch (object.calibrationZ) {
            default:
                if (typeof object.calibrationZ === "number") {
                    message.calibrationZ = object.calibrationZ;
                    break;
                }
                break;
            case "MANUALLY":
            case 0:
                message.calibrationZ = 0;
                break;
            case "AUTOMATIC":
            case 1:
                message.calibrationZ = 1;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a PrinterModelSlaData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof printer.PrinterModelSlaData
         * @static
         * @param {printer.PrinterModelSlaData} message PrinterModelSlaData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PrinterModelSlaData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.connectivities = [];
                object.printMediums = [];
            }
            if (options.defaults) {
                object.id = 0;
                object.printerModel = null;
                object.metric = options.enums === String ? "METRIC_SYSTEM" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.printerModel != null && message.hasOwnProperty("printerModel"))
                object.printerModel = $root.printer.PrinterModel.toObject(message.printerModel, options);
            if (message.metric != null && message.hasOwnProperty("metric"))
                object.metric = options.enums === String ? $root.printer.PrinterModelMetric[message.metric] === undefined ? message.metric : $root.printer.PrinterModelMetric[message.metric] : message.metric;
            if (message.width != null && message.hasOwnProperty("width")) {
                object.width = options.json && !isFinite(message.width) ? String(message.width) : message.width;
                if (options.oneofs)
                    object._width = "width";
            }
            if (message.height != null && message.hasOwnProperty("height")) {
                object.height = options.json && !isFinite(message.height) ? String(message.height) : message.height;
                if (options.oneofs)
                    object._height = "height";
            }
            if (message.depth != null && message.hasOwnProperty("depth")) {
                object.depth = options.json && !isFinite(message.depth) ? String(message.depth) : message.depth;
                if (options.oneofs)
                    object._depth = "depth";
            }
            if (message.weight != null && message.hasOwnProperty("weight")) {
                object.weight = options.json && !isFinite(message.weight) ? String(message.weight) : message.weight;
                if (options.oneofs)
                    object._weight = "weight";
            }
            if (message.power != null && message.hasOwnProperty("power")) {
                object.power = message.power;
                if (options.oneofs)
                    object._power = "power";
            }
            if (message.printWidth != null && message.hasOwnProperty("printWidth")) {
                object.printWidth = options.json && !isFinite(message.printWidth) ? String(message.printWidth) : message.printWidth;
                if (options.oneofs)
                    object._printWidth = "printWidth";
            }
            if (message.printHeight != null && message.hasOwnProperty("printHeight")) {
                object.printHeight = options.json && !isFinite(message.printHeight) ? String(message.printHeight) : message.printHeight;
                if (options.oneofs)
                    object._printHeight = "printHeight";
            }
            if (message.printDepth != null && message.hasOwnProperty("printDepth")) {
                object.printDepth = options.json && !isFinite(message.printDepth) ? String(message.printDepth) : message.printDepth;
                if (options.oneofs)
                    object._printDepth = "printDepth";
            }
            if (message.layerThicknessMin != null && message.hasOwnProperty("layerThicknessMin")) {
                object.layerThicknessMin = options.json && !isFinite(message.layerThicknessMin) ? String(message.layerThicknessMin) : message.layerThicknessMin;
                if (options.oneofs)
                    object._layerThicknessMin = "layerThicknessMin";
            }
            if (message.layerThicknessMax != null && message.hasOwnProperty("layerThicknessMax")) {
                object.layerThicknessMax = options.json && !isFinite(message.layerThicknessMax) ? String(message.layerThicknessMax) : message.layerThicknessMax;
                if (options.oneofs)
                    object._layerThicknessMax = "layerThicknessMax";
            }
            if (message.resolutionX != null && message.hasOwnProperty("resolutionX")) {
                object.resolutionX = options.json && !isFinite(message.resolutionX) ? String(message.resolutionX) : message.resolutionX;
                if (options.oneofs)
                    object._resolutionX = "resolutionX";
            }
            if (message.resolutionY != null && message.hasOwnProperty("resolutionY")) {
                object.resolutionY = options.json && !isFinite(message.resolutionY) ? String(message.resolutionY) : message.resolutionY;
                if (options.oneofs)
                    object._resolutionY = "resolutionY";
            }
            if (message.printSpeedPerHourMax != null && message.hasOwnProperty("printSpeedPerHourMax")) {
                object.printSpeedPerHourMax = message.printSpeedPerHourMax;
                if (options.oneofs)
                    object._printSpeedPerHourMax = "printSpeedPerHourMax";
            }
            if (message.storage != null && message.hasOwnProperty("storage")) {
                object.storage = message.storage;
                if (options.oneofs)
                    object._storage = "storage";
            }
            if (message.connectivities && message.connectivities.length) {
                object.connectivities = [];
                for (let j = 0; j < message.connectivities.length; ++j)
                    object.connectivities[j] = $root.printer.PrinterModelConnectivity.toObject(message.connectivities[j], options);
            }
            if (message.printMediums && message.printMediums.length) {
                object.printMediums = [];
                for (let j = 0; j < message.printMediums.length; ++j)
                    object.printMediums[j] = options.enums === String ? $root.printer.PrinterModelPrintMedium[message.printMediums[j]] === undefined ? message.printMediums[j] : $root.printer.PrinterModelPrintMedium[message.printMediums[j]] : message.printMediums[j];
            }
            if (message.calibrationZ != null && message.hasOwnProperty("calibrationZ")) {
                object.calibrationZ = options.enums === String ? $root.printer.Calibration[message.calibrationZ] === undefined ? message.calibrationZ : $root.printer.Calibration[message.calibrationZ] : message.calibrationZ;
                if (options.oneofs)
                    object._calibrationZ = "calibrationZ";
            }
            return object;
        };

        /**
         * Converts this PrinterModelSlaData to JSON.
         * @function toJSON
         * @memberof printer.PrinterModelSlaData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PrinterModelSlaData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PrinterModelSlaData
         * @function getTypeUrl
         * @memberof printer.PrinterModelSlaData
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PrinterModelSlaData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/printer.PrinterModelSlaData";
        };

        return PrinterModelSlaData;
    })();

    printer.FilamentDiameter = (function() {

        /**
         * Properties of a FilamentDiameter.
         * @memberof printer
         * @interface IFilamentDiameter
         * @property {number|null} [id] FilamentDiameter id
         * @property {number|null} [value] FilamentDiameter value
         * @property {printer.PrinterModelMetric|null} [metric] FilamentDiameter metric
         */

        /**
         * Constructs a new FilamentDiameter.
         * @memberof printer
         * @classdesc Represents a FilamentDiameter.
         * @implements IFilamentDiameter
         * @constructor
         * @param {printer.IFilamentDiameter=} [properties] Properties to set
         */
        function FilamentDiameter(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FilamentDiameter id.
         * @member {number} id
         * @memberof printer.FilamentDiameter
         * @instance
         */
        FilamentDiameter.prototype.id = 0;

        /**
         * FilamentDiameter value.
         * @member {number} value
         * @memberof printer.FilamentDiameter
         * @instance
         */
        FilamentDiameter.prototype.value = 0;

        /**
         * FilamentDiameter metric.
         * @member {printer.PrinterModelMetric} metric
         * @memberof printer.FilamentDiameter
         * @instance
         */
        FilamentDiameter.prototype.metric = 0;

        /**
         * Creates a new FilamentDiameter instance using the specified properties.
         * @function create
         * @memberof printer.FilamentDiameter
         * @static
         * @param {printer.IFilamentDiameter=} [properties] Properties to set
         * @returns {printer.FilamentDiameter} FilamentDiameter instance
         */
        FilamentDiameter.create = function create(properties) {
            return new FilamentDiameter(properties);
        };

        /**
         * Encodes the specified FilamentDiameter message. Does not implicitly {@link printer.FilamentDiameter.verify|verify} messages.
         * @function encode
         * @memberof printer.FilamentDiameter
         * @static
         * @param {printer.IFilamentDiameter} message FilamentDiameter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FilamentDiameter.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.value);
            if (message.metric != null && Object.hasOwnProperty.call(message, "metric"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.metric);
            return writer;
        };

        /**
         * Encodes the specified FilamentDiameter message, length delimited. Does not implicitly {@link printer.FilamentDiameter.verify|verify} messages.
         * @function encodeDelimited
         * @memberof printer.FilamentDiameter
         * @static
         * @param {printer.IFilamentDiameter} message FilamentDiameter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FilamentDiameter.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FilamentDiameter message from the specified reader or buffer.
         * @function decode
         * @memberof printer.FilamentDiameter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {printer.FilamentDiameter} FilamentDiameter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FilamentDiameter.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.printer.FilamentDiameter();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int32();
                        break;
                    }
                case 2: {
                        message.value = reader.float();
                        break;
                    }
                case 3: {
                        message.metric = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FilamentDiameter message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof printer.FilamentDiameter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {printer.FilamentDiameter} FilamentDiameter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FilamentDiameter.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FilamentDiameter message.
         * @function verify
         * @memberof printer.FilamentDiameter
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FilamentDiameter.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (typeof message.value !== "number")
                    return "value: number expected";
            if (message.metric != null && message.hasOwnProperty("metric"))
                switch (message.metric) {
                default:
                    return "metric: enum value expected";
                case 0:
                case 1:
                    break;
                }
            return null;
        };

        /**
         * Creates a FilamentDiameter message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof printer.FilamentDiameter
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {printer.FilamentDiameter} FilamentDiameter
         */
        FilamentDiameter.fromObject = function fromObject(object) {
            if (object instanceof $root.printer.FilamentDiameter)
                return object;
            let message = new $root.printer.FilamentDiameter();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.value != null)
                message.value = Number(object.value);
            switch (object.metric) {
            default:
                if (typeof object.metric === "number") {
                    message.metric = object.metric;
                    break;
                }
                break;
            case "METRIC_SYSTEM":
            case 0:
                message.metric = 0;
                break;
            case "IMPERIAL_UNITS":
            case 1:
                message.metric = 1;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a FilamentDiameter message. Also converts values to other types if specified.
         * @function toObject
         * @memberof printer.FilamentDiameter
         * @static
         * @param {printer.FilamentDiameter} message FilamentDiameter
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FilamentDiameter.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = 0;
                object.value = 0;
                object.metric = options.enums === String ? "METRIC_SYSTEM" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = options.json && !isFinite(message.value) ? String(message.value) : message.value;
            if (message.metric != null && message.hasOwnProperty("metric"))
                object.metric = options.enums === String ? $root.printer.PrinterModelMetric[message.metric] === undefined ? message.metric : $root.printer.PrinterModelMetric[message.metric] : message.metric;
            return object;
        };

        /**
         * Converts this FilamentDiameter to JSON.
         * @function toJSON
         * @memberof printer.FilamentDiameter
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FilamentDiameter.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FilamentDiameter
         * @function getTypeUrl
         * @memberof printer.FilamentDiameter
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FilamentDiameter.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/printer.FilamentDiameter";
        };

        return FilamentDiameter;
    })();

    printer.FilamentMaterial = (function() {

        /**
         * Properties of a FilamentMaterial.
         * @memberof printer
         * @interface IFilamentMaterial
         * @property {number|null} [id] FilamentMaterial id
         * @property {string|null} [name] FilamentMaterial name
         * @property {string|null} [description] FilamentMaterial description
         */

        /**
         * Constructs a new FilamentMaterial.
         * @memberof printer
         * @classdesc Represents a FilamentMaterial.
         * @implements IFilamentMaterial
         * @constructor
         * @param {printer.IFilamentMaterial=} [properties] Properties to set
         */
        function FilamentMaterial(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FilamentMaterial id.
         * @member {number} id
         * @memberof printer.FilamentMaterial
         * @instance
         */
        FilamentMaterial.prototype.id = 0;

        /**
         * FilamentMaterial name.
         * @member {string} name
         * @memberof printer.FilamentMaterial
         * @instance
         */
        FilamentMaterial.prototype.name = "";

        /**
         * FilamentMaterial description.
         * @member {string|null|undefined} description
         * @memberof printer.FilamentMaterial
         * @instance
         */
        FilamentMaterial.prototype.description = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * FilamentMaterial _description.
         * @member {"description"|undefined} _description
         * @memberof printer.FilamentMaterial
         * @instance
         */
        Object.defineProperty(FilamentMaterial.prototype, "_description", {
            get: $util.oneOfGetter($oneOfFields = ["description"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new FilamentMaterial instance using the specified properties.
         * @function create
         * @memberof printer.FilamentMaterial
         * @static
         * @param {printer.IFilamentMaterial=} [properties] Properties to set
         * @returns {printer.FilamentMaterial} FilamentMaterial instance
         */
        FilamentMaterial.create = function create(properties) {
            return new FilamentMaterial(properties);
        };

        /**
         * Encodes the specified FilamentMaterial message. Does not implicitly {@link printer.FilamentMaterial.verify|verify} messages.
         * @function encode
         * @memberof printer.FilamentMaterial
         * @static
         * @param {printer.IFilamentMaterial} message FilamentMaterial message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FilamentMaterial.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.description);
            return writer;
        };

        /**
         * Encodes the specified FilamentMaterial message, length delimited. Does not implicitly {@link printer.FilamentMaterial.verify|verify} messages.
         * @function encodeDelimited
         * @memberof printer.FilamentMaterial
         * @static
         * @param {printer.IFilamentMaterial} message FilamentMaterial message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FilamentMaterial.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FilamentMaterial message from the specified reader or buffer.
         * @function decode
         * @memberof printer.FilamentMaterial
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {printer.FilamentMaterial} FilamentMaterial
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FilamentMaterial.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.printer.FilamentMaterial();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int32();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.description = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FilamentMaterial message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof printer.FilamentMaterial
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {printer.FilamentMaterial} FilamentMaterial
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FilamentMaterial.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FilamentMaterial message.
         * @function verify
         * @memberof printer.FilamentMaterial
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FilamentMaterial.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.description != null && message.hasOwnProperty("description")) {
                properties._description = 1;
                if (!$util.isString(message.description))
                    return "description: string expected";
            }
            return null;
        };

        /**
         * Creates a FilamentMaterial message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof printer.FilamentMaterial
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {printer.FilamentMaterial} FilamentMaterial
         */
        FilamentMaterial.fromObject = function fromObject(object) {
            if (object instanceof $root.printer.FilamentMaterial)
                return object;
            let message = new $root.printer.FilamentMaterial();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.name != null)
                message.name = String(object.name);
            if (object.description != null)
                message.description = String(object.description);
            return message;
        };

        /**
         * Creates a plain object from a FilamentMaterial message. Also converts values to other types if specified.
         * @function toObject
         * @memberof printer.FilamentMaterial
         * @static
         * @param {printer.FilamentMaterial} message FilamentMaterial
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FilamentMaterial.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = 0;
                object.name = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.description != null && message.hasOwnProperty("description")) {
                object.description = message.description;
                if (options.oneofs)
                    object._description = "description";
            }
            return object;
        };

        /**
         * Converts this FilamentMaterial to JSON.
         * @function toJSON
         * @memberof printer.FilamentMaterial
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FilamentMaterial.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FilamentMaterial
         * @function getTypeUrl
         * @memberof printer.FilamentMaterial
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FilamentMaterial.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/printer.FilamentMaterial";
        };

        return FilamentMaterial;
    })();

    printer.FdmPrintSurface = (function() {

        /**
         * Properties of a FdmPrintSurface.
         * @memberof printer
         * @interface IFdmPrintSurface
         * @property {number|null} [id] FdmPrintSurface id
         * @property {string|null} [name] FdmPrintSurface name
         */

        /**
         * Constructs a new FdmPrintSurface.
         * @memberof printer
         * @classdesc Represents a FdmPrintSurface.
         * @implements IFdmPrintSurface
         * @constructor
         * @param {printer.IFdmPrintSurface=} [properties] Properties to set
         */
        function FdmPrintSurface(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FdmPrintSurface id.
         * @member {number} id
         * @memberof printer.FdmPrintSurface
         * @instance
         */
        FdmPrintSurface.prototype.id = 0;

        /**
         * FdmPrintSurface name.
         * @member {string} name
         * @memberof printer.FdmPrintSurface
         * @instance
         */
        FdmPrintSurface.prototype.name = "";

        /**
         * Creates a new FdmPrintSurface instance using the specified properties.
         * @function create
         * @memberof printer.FdmPrintSurface
         * @static
         * @param {printer.IFdmPrintSurface=} [properties] Properties to set
         * @returns {printer.FdmPrintSurface} FdmPrintSurface instance
         */
        FdmPrintSurface.create = function create(properties) {
            return new FdmPrintSurface(properties);
        };

        /**
         * Encodes the specified FdmPrintSurface message. Does not implicitly {@link printer.FdmPrintSurface.verify|verify} messages.
         * @function encode
         * @memberof printer.FdmPrintSurface
         * @static
         * @param {printer.IFdmPrintSurface} message FdmPrintSurface message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FdmPrintSurface.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified FdmPrintSurface message, length delimited. Does not implicitly {@link printer.FdmPrintSurface.verify|verify} messages.
         * @function encodeDelimited
         * @memberof printer.FdmPrintSurface
         * @static
         * @param {printer.IFdmPrintSurface} message FdmPrintSurface message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FdmPrintSurface.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FdmPrintSurface message from the specified reader or buffer.
         * @function decode
         * @memberof printer.FdmPrintSurface
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {printer.FdmPrintSurface} FdmPrintSurface
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FdmPrintSurface.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.printer.FdmPrintSurface();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int32();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FdmPrintSurface message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof printer.FdmPrintSurface
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {printer.FdmPrintSurface} FdmPrintSurface
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FdmPrintSurface.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FdmPrintSurface message.
         * @function verify
         * @memberof printer.FdmPrintSurface
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FdmPrintSurface.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates a FdmPrintSurface message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof printer.FdmPrintSurface
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {printer.FdmPrintSurface} FdmPrintSurface
         */
        FdmPrintSurface.fromObject = function fromObject(object) {
            if (object instanceof $root.printer.FdmPrintSurface)
                return object;
            let message = new $root.printer.FdmPrintSurface();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a FdmPrintSurface message. Also converts values to other types if specified.
         * @function toObject
         * @memberof printer.FdmPrintSurface
         * @static
         * @param {printer.FdmPrintSurface} message FdmPrintSurface
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FdmPrintSurface.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = 0;
                object.name = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this FdmPrintSurface to JSON.
         * @function toJSON
         * @memberof printer.FdmPrintSurface
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FdmPrintSurface.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FdmPrintSurface
         * @function getTypeUrl
         * @memberof printer.FdmPrintSurface
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FdmPrintSurface.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/printer.FdmPrintSurface";
        };

        return FdmPrintSurface;
    })();

    /**
     * Calibration enum.
     * @name printer.Calibration
     * @enum {number}
     * @property {number} MANUALLY=0 MANUALLY value
     * @property {number} AUTOMATIC=1 AUTOMATIC value
     */
    printer.Calibration = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "MANUALLY"] = 0;
        values[valuesById[1] = "AUTOMATIC"] = 1;
        return values;
    })();

    printer.PrinterModelConnectivity = (function() {

        /**
         * Properties of a PrinterModelConnectivity.
         * @memberof printer
         * @interface IPrinterModelConnectivity
         * @property {number|null} [id] PrinterModelConnectivity id
         * @property {string|null} [name] PrinterModelConnectivity name
         * @property {printer.PrinterModelConnectivityType|null} [type] PrinterModelConnectivity type
         */

        /**
         * Constructs a new PrinterModelConnectivity.
         * @memberof printer
         * @classdesc Represents a PrinterModelConnectivity.
         * @implements IPrinterModelConnectivity
         * @constructor
         * @param {printer.IPrinterModelConnectivity=} [properties] Properties to set
         */
        function PrinterModelConnectivity(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PrinterModelConnectivity id.
         * @member {number} id
         * @memberof printer.PrinterModelConnectivity
         * @instance
         */
        PrinterModelConnectivity.prototype.id = 0;

        /**
         * PrinterModelConnectivity name.
         * @member {string} name
         * @memberof printer.PrinterModelConnectivity
         * @instance
         */
        PrinterModelConnectivity.prototype.name = "";

        /**
         * PrinterModelConnectivity type.
         * @member {printer.PrinterModelConnectivityType} type
         * @memberof printer.PrinterModelConnectivity
         * @instance
         */
        PrinterModelConnectivity.prototype.type = 0;

        /**
         * Creates a new PrinterModelConnectivity instance using the specified properties.
         * @function create
         * @memberof printer.PrinterModelConnectivity
         * @static
         * @param {printer.IPrinterModelConnectivity=} [properties] Properties to set
         * @returns {printer.PrinterModelConnectivity} PrinterModelConnectivity instance
         */
        PrinterModelConnectivity.create = function create(properties) {
            return new PrinterModelConnectivity(properties);
        };

        /**
         * Encodes the specified PrinterModelConnectivity message. Does not implicitly {@link printer.PrinterModelConnectivity.verify|verify} messages.
         * @function encode
         * @memberof printer.PrinterModelConnectivity
         * @static
         * @param {printer.IPrinterModelConnectivity} message PrinterModelConnectivity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PrinterModelConnectivity.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.type);
            return writer;
        };

        /**
         * Encodes the specified PrinterModelConnectivity message, length delimited. Does not implicitly {@link printer.PrinterModelConnectivity.verify|verify} messages.
         * @function encodeDelimited
         * @memberof printer.PrinterModelConnectivity
         * @static
         * @param {printer.IPrinterModelConnectivity} message PrinterModelConnectivity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PrinterModelConnectivity.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PrinterModelConnectivity message from the specified reader or buffer.
         * @function decode
         * @memberof printer.PrinterModelConnectivity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {printer.PrinterModelConnectivity} PrinterModelConnectivity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PrinterModelConnectivity.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.printer.PrinterModelConnectivity();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int32();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.type = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PrinterModelConnectivity message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof printer.PrinterModelConnectivity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {printer.PrinterModelConnectivity} PrinterModelConnectivity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PrinterModelConnectivity.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PrinterModelConnectivity message.
         * @function verify
         * @memberof printer.PrinterModelConnectivity
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PrinterModelConnectivity.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                    break;
                }
            return null;
        };

        /**
         * Creates a PrinterModelConnectivity message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof printer.PrinterModelConnectivity
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {printer.PrinterModelConnectivity} PrinterModelConnectivity
         */
        PrinterModelConnectivity.fromObject = function fromObject(object) {
            if (object instanceof $root.printer.PrinterModelConnectivity)
                return object;
            let message = new $root.printer.PrinterModelConnectivity();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.name != null)
                message.name = String(object.name);
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "CONNECTIVITY_LAN":
            case 0:
                message.type = 0;
                break;
            case "CONNECTIVITY_WIFI":
            case 1:
                message.type = 1;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a PrinterModelConnectivity message. Also converts values to other types if specified.
         * @function toObject
         * @memberof printer.PrinterModelConnectivity
         * @static
         * @param {printer.PrinterModelConnectivity} message PrinterModelConnectivity
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PrinterModelConnectivity.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = 0;
                object.name = "";
                object.type = options.enums === String ? "CONNECTIVITY_LAN" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.printer.PrinterModelConnectivityType[message.type] === undefined ? message.type : $root.printer.PrinterModelConnectivityType[message.type] : message.type;
            return object;
        };

        /**
         * Converts this PrinterModelConnectivity to JSON.
         * @function toJSON
         * @memberof printer.PrinterModelConnectivity
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PrinterModelConnectivity.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PrinterModelConnectivity
         * @function getTypeUrl
         * @memberof printer.PrinterModelConnectivity
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PrinterModelConnectivity.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/printer.PrinterModelConnectivity";
        };

        return PrinterModelConnectivity;
    })();

    /**
     * PrinterModelConnectivityType enum.
     * @name printer.PrinterModelConnectivityType
     * @enum {number}
     * @property {number} CONNECTIVITY_LAN=0 CONNECTIVITY_LAN value
     * @property {number} CONNECTIVITY_WIFI=1 CONNECTIVITY_WIFI value
     */
    printer.PrinterModelConnectivityType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "CONNECTIVITY_LAN"] = 0;
        values[valuesById[1] = "CONNECTIVITY_WIFI"] = 1;
        return values;
    })();

    /**
     * PrinterModelPrintMedium enum.
     * @name printer.PrinterModelPrintMedium
     * @enum {number}
     * @property {number} USB_DRIVE=0 USB_DRIVE value
     * @property {number} LAN=1 LAN value
     * @property {number} PRUSA_CONNECT=2 PRUSA_CONNECT value
     */
    printer.PrinterModelPrintMedium = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "USB_DRIVE"] = 0;
        values[valuesById[1] = "LAN"] = 1;
        values[valuesById[2] = "PRUSA_CONNECT"] = 2;
        return values;
    })();

    return printer;
})();

export const gorm = $root.gorm = (() => {

    /**
     * Namespace gorm.
     * @exports gorm
     * @namespace
     */
    const gorm = {};

    gorm.GormFileOptions = (function() {

        /**
         * Properties of a GormFileOptions.
         * @memberof gorm
         * @interface IGormFileOptions
         */

        /**
         * Constructs a new GormFileOptions.
         * @memberof gorm
         * @classdesc Represents a GormFileOptions.
         * @implements IGormFileOptions
         * @constructor
         * @param {gorm.IGormFileOptions=} [properties] Properties to set
         */
        function GormFileOptions(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GormFileOptions instance using the specified properties.
         * @function create
         * @memberof gorm.GormFileOptions
         * @static
         * @param {gorm.IGormFileOptions=} [properties] Properties to set
         * @returns {gorm.GormFileOptions} GormFileOptions instance
         */
        GormFileOptions.create = function create(properties) {
            return new GormFileOptions(properties);
        };

        /**
         * Encodes the specified GormFileOptions message. Does not implicitly {@link gorm.GormFileOptions.verify|verify} messages.
         * @function encode
         * @memberof gorm.GormFileOptions
         * @static
         * @param {gorm.IGormFileOptions} message GormFileOptions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GormFileOptions.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified GormFileOptions message, length delimited. Does not implicitly {@link gorm.GormFileOptions.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gorm.GormFileOptions
         * @static
         * @param {gorm.IGormFileOptions} message GormFileOptions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GormFileOptions.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GormFileOptions message from the specified reader or buffer.
         * @function decode
         * @memberof gorm.GormFileOptions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gorm.GormFileOptions} GormFileOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GormFileOptions.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.gorm.GormFileOptions();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GormFileOptions message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gorm.GormFileOptions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gorm.GormFileOptions} GormFileOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GormFileOptions.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GormFileOptions message.
         * @function verify
         * @memberof gorm.GormFileOptions
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GormFileOptions.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a GormFileOptions message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gorm.GormFileOptions
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gorm.GormFileOptions} GormFileOptions
         */
        GormFileOptions.fromObject = function fromObject(object) {
            if (object instanceof $root.gorm.GormFileOptions)
                return object;
            return new $root.gorm.GormFileOptions();
        };

        /**
         * Creates a plain object from a GormFileOptions message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gorm.GormFileOptions
         * @static
         * @param {gorm.GormFileOptions} message GormFileOptions
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GormFileOptions.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this GormFileOptions to JSON.
         * @function toJSON
         * @memberof gorm.GormFileOptions
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GormFileOptions.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GormFileOptions
         * @function getTypeUrl
         * @memberof gorm.GormFileOptions
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GormFileOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gorm.GormFileOptions";
        };

        return GormFileOptions;
    })();

    gorm.GormMessageOptions = (function() {

        /**
         * Properties of a GormMessageOptions.
         * @memberof gorm
         * @interface IGormMessageOptions
         * @property {boolean|null} [ormable] GormMessageOptions ormable
         * @property {Array.<gorm.IExtraField>|null} [include] GormMessageOptions include
         * @property {string|null} [table] GormMessageOptions table
         * @property {boolean|null} [multiAccount] GormMessageOptions multiAccount
         * @property {boolean|null} [multiCompartment] GormMessageOptions multiCompartment
         */

        /**
         * Constructs a new GormMessageOptions.
         * @memberof gorm
         * @classdesc Represents a GormMessageOptions.
         * @implements IGormMessageOptions
         * @constructor
         * @param {gorm.IGormMessageOptions=} [properties] Properties to set
         */
        function GormMessageOptions(properties) {
            this.include = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GormMessageOptions ormable.
         * @member {boolean} ormable
         * @memberof gorm.GormMessageOptions
         * @instance
         */
        GormMessageOptions.prototype.ormable = false;

        /**
         * GormMessageOptions include.
         * @member {Array.<gorm.IExtraField>} include
         * @memberof gorm.GormMessageOptions
         * @instance
         */
        GormMessageOptions.prototype.include = $util.emptyArray;

        /**
         * GormMessageOptions table.
         * @member {string} table
         * @memberof gorm.GormMessageOptions
         * @instance
         */
        GormMessageOptions.prototype.table = "";

        /**
         * GormMessageOptions multiAccount.
         * @member {boolean} multiAccount
         * @memberof gorm.GormMessageOptions
         * @instance
         */
        GormMessageOptions.prototype.multiAccount = false;

        /**
         * GormMessageOptions multiCompartment.
         * @member {boolean} multiCompartment
         * @memberof gorm.GormMessageOptions
         * @instance
         */
        GormMessageOptions.prototype.multiCompartment = false;

        /**
         * Creates a new GormMessageOptions instance using the specified properties.
         * @function create
         * @memberof gorm.GormMessageOptions
         * @static
         * @param {gorm.IGormMessageOptions=} [properties] Properties to set
         * @returns {gorm.GormMessageOptions} GormMessageOptions instance
         */
        GormMessageOptions.create = function create(properties) {
            return new GormMessageOptions(properties);
        };

        /**
         * Encodes the specified GormMessageOptions message. Does not implicitly {@link gorm.GormMessageOptions.verify|verify} messages.
         * @function encode
         * @memberof gorm.GormMessageOptions
         * @static
         * @param {gorm.IGormMessageOptions} message GormMessageOptions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GormMessageOptions.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ormable != null && Object.hasOwnProperty.call(message, "ormable"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.ormable);
            if (message.include != null && message.include.length)
                for (let i = 0; i < message.include.length; ++i)
                    $root.gorm.ExtraField.encode(message.include[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.table != null && Object.hasOwnProperty.call(message, "table"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.table);
            if (message.multiAccount != null && Object.hasOwnProperty.call(message, "multiAccount"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.multiAccount);
            if (message.multiCompartment != null && Object.hasOwnProperty.call(message, "multiCompartment"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.multiCompartment);
            return writer;
        };

        /**
         * Encodes the specified GormMessageOptions message, length delimited. Does not implicitly {@link gorm.GormMessageOptions.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gorm.GormMessageOptions
         * @static
         * @param {gorm.IGormMessageOptions} message GormMessageOptions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GormMessageOptions.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GormMessageOptions message from the specified reader or buffer.
         * @function decode
         * @memberof gorm.GormMessageOptions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gorm.GormMessageOptions} GormMessageOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GormMessageOptions.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.gorm.GormMessageOptions();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.ormable = reader.bool();
                        break;
                    }
                case 2: {
                        if (!(message.include && message.include.length))
                            message.include = [];
                        message.include.push($root.gorm.ExtraField.decode(reader, reader.uint32()));
                        break;
                    }
                case 3: {
                        message.table = reader.string();
                        break;
                    }
                case 4: {
                        message.multiAccount = reader.bool();
                        break;
                    }
                case 5: {
                        message.multiCompartment = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GormMessageOptions message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gorm.GormMessageOptions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gorm.GormMessageOptions} GormMessageOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GormMessageOptions.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GormMessageOptions message.
         * @function verify
         * @memberof gorm.GormMessageOptions
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GormMessageOptions.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ormable != null && message.hasOwnProperty("ormable"))
                if (typeof message.ormable !== "boolean")
                    return "ormable: boolean expected";
            if (message.include != null && message.hasOwnProperty("include")) {
                if (!Array.isArray(message.include))
                    return "include: array expected";
                for (let i = 0; i < message.include.length; ++i) {
                    let error = $root.gorm.ExtraField.verify(message.include[i]);
                    if (error)
                        return "include." + error;
                }
            }
            if (message.table != null && message.hasOwnProperty("table"))
                if (!$util.isString(message.table))
                    return "table: string expected";
            if (message.multiAccount != null && message.hasOwnProperty("multiAccount"))
                if (typeof message.multiAccount !== "boolean")
                    return "multiAccount: boolean expected";
            if (message.multiCompartment != null && message.hasOwnProperty("multiCompartment"))
                if (typeof message.multiCompartment !== "boolean")
                    return "multiCompartment: boolean expected";
            return null;
        };

        /**
         * Creates a GormMessageOptions message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gorm.GormMessageOptions
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gorm.GormMessageOptions} GormMessageOptions
         */
        GormMessageOptions.fromObject = function fromObject(object) {
            if (object instanceof $root.gorm.GormMessageOptions)
                return object;
            let message = new $root.gorm.GormMessageOptions();
            if (object.ormable != null)
                message.ormable = Boolean(object.ormable);
            if (object.include) {
                if (!Array.isArray(object.include))
                    throw TypeError(".gorm.GormMessageOptions.include: array expected");
                message.include = [];
                for (let i = 0; i < object.include.length; ++i) {
                    if (typeof object.include[i] !== "object")
                        throw TypeError(".gorm.GormMessageOptions.include: object expected");
                    message.include[i] = $root.gorm.ExtraField.fromObject(object.include[i]);
                }
            }
            if (object.table != null)
                message.table = String(object.table);
            if (object.multiAccount != null)
                message.multiAccount = Boolean(object.multiAccount);
            if (object.multiCompartment != null)
                message.multiCompartment = Boolean(object.multiCompartment);
            return message;
        };

        /**
         * Creates a plain object from a GormMessageOptions message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gorm.GormMessageOptions
         * @static
         * @param {gorm.GormMessageOptions} message GormMessageOptions
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GormMessageOptions.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.include = [];
            if (options.defaults) {
                object.ormable = false;
                object.table = "";
                object.multiAccount = false;
                object.multiCompartment = false;
            }
            if (message.ormable != null && message.hasOwnProperty("ormable"))
                object.ormable = message.ormable;
            if (message.include && message.include.length) {
                object.include = [];
                for (let j = 0; j < message.include.length; ++j)
                    object.include[j] = $root.gorm.ExtraField.toObject(message.include[j], options);
            }
            if (message.table != null && message.hasOwnProperty("table"))
                object.table = message.table;
            if (message.multiAccount != null && message.hasOwnProperty("multiAccount"))
                object.multiAccount = message.multiAccount;
            if (message.multiCompartment != null && message.hasOwnProperty("multiCompartment"))
                object.multiCompartment = message.multiCompartment;
            return object;
        };

        /**
         * Converts this GormMessageOptions to JSON.
         * @function toJSON
         * @memberof gorm.GormMessageOptions
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GormMessageOptions.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GormMessageOptions
         * @function getTypeUrl
         * @memberof gorm.GormMessageOptions
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GormMessageOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gorm.GormMessageOptions";
        };

        return GormMessageOptions;
    })();

    gorm.ExtraField = (function() {

        /**
         * Properties of an ExtraField.
         * @memberof gorm
         * @interface IExtraField
         * @property {string|null} [type] ExtraField type
         * @property {string|null} [name] ExtraField name
         * @property {gorm.IGormTag|null} [tag] ExtraField tag
         * @property {string|null} ["package"] ExtraField package
         */

        /**
         * Constructs a new ExtraField.
         * @memberof gorm
         * @classdesc Represents an ExtraField.
         * @implements IExtraField
         * @constructor
         * @param {gorm.IExtraField=} [properties] Properties to set
         */
        function ExtraField(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ExtraField type.
         * @member {string} type
         * @memberof gorm.ExtraField
         * @instance
         */
        ExtraField.prototype.type = "";

        /**
         * ExtraField name.
         * @member {string} name
         * @memberof gorm.ExtraField
         * @instance
         */
        ExtraField.prototype.name = "";

        /**
         * ExtraField tag.
         * @member {gorm.IGormTag|null|undefined} tag
         * @memberof gorm.ExtraField
         * @instance
         */
        ExtraField.prototype.tag = null;

        /**
         * ExtraField package.
         * @member {string} package
         * @memberof gorm.ExtraField
         * @instance
         */
        ExtraField.prototype["package"] = "";

        /**
         * Creates a new ExtraField instance using the specified properties.
         * @function create
         * @memberof gorm.ExtraField
         * @static
         * @param {gorm.IExtraField=} [properties] Properties to set
         * @returns {gorm.ExtraField} ExtraField instance
         */
        ExtraField.create = function create(properties) {
            return new ExtraField(properties);
        };

        /**
         * Encodes the specified ExtraField message. Does not implicitly {@link gorm.ExtraField.verify|verify} messages.
         * @function encode
         * @memberof gorm.ExtraField
         * @static
         * @param {gorm.IExtraField} message ExtraField message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExtraField.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.tag != null && Object.hasOwnProperty.call(message, "tag"))
                $root.gorm.GormTag.encode(message.tag, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message["package"] != null && Object.hasOwnProperty.call(message, "package"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message["package"]);
            return writer;
        };

        /**
         * Encodes the specified ExtraField message, length delimited. Does not implicitly {@link gorm.ExtraField.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gorm.ExtraField
         * @static
         * @param {gorm.IExtraField} message ExtraField message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExtraField.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ExtraField message from the specified reader or buffer.
         * @function decode
         * @memberof gorm.ExtraField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gorm.ExtraField} ExtraField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExtraField.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.gorm.ExtraField();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.string();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.tag = $root.gorm.GormTag.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message["package"] = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ExtraField message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gorm.ExtraField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gorm.ExtraField} ExtraField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExtraField.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ExtraField message.
         * @function verify
         * @memberof gorm.ExtraField
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ExtraField.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.tag != null && message.hasOwnProperty("tag")) {
                let error = $root.gorm.GormTag.verify(message.tag);
                if (error)
                    return "tag." + error;
            }
            if (message["package"] != null && message.hasOwnProperty("package"))
                if (!$util.isString(message["package"]))
                    return "package: string expected";
            return null;
        };

        /**
         * Creates an ExtraField message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gorm.ExtraField
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gorm.ExtraField} ExtraField
         */
        ExtraField.fromObject = function fromObject(object) {
            if (object instanceof $root.gorm.ExtraField)
                return object;
            let message = new $root.gorm.ExtraField();
            if (object.type != null)
                message.type = String(object.type);
            if (object.name != null)
                message.name = String(object.name);
            if (object.tag != null) {
                if (typeof object.tag !== "object")
                    throw TypeError(".gorm.ExtraField.tag: object expected");
                message.tag = $root.gorm.GormTag.fromObject(object.tag);
            }
            if (object["package"] != null)
                message["package"] = String(object["package"]);
            return message;
        };

        /**
         * Creates a plain object from an ExtraField message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gorm.ExtraField
         * @static
         * @param {gorm.ExtraField} message ExtraField
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ExtraField.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.type = "";
                object.name = "";
                object.tag = null;
                object["package"] = "";
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.tag != null && message.hasOwnProperty("tag"))
                object.tag = $root.gorm.GormTag.toObject(message.tag, options);
            if (message["package"] != null && message.hasOwnProperty("package"))
                object["package"] = message["package"];
            return object;
        };

        /**
         * Converts this ExtraField to JSON.
         * @function toJSON
         * @memberof gorm.ExtraField
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ExtraField.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ExtraField
         * @function getTypeUrl
         * @memberof gorm.ExtraField
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ExtraField.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gorm.ExtraField";
        };

        return ExtraField;
    })();

    gorm.GormFieldOptions = (function() {

        /**
         * Properties of a GormFieldOptions.
         * @memberof gorm
         * @interface IGormFieldOptions
         * @property {gorm.IGormTag|null} [tag] GormFieldOptions tag
         * @property {boolean|null} [drop] GormFieldOptions drop
         * @property {gorm.IHasOneOptions|null} [hasOne] GormFieldOptions hasOne
         * @property {gorm.IBelongsToOptions|null} [belongsTo] GormFieldOptions belongsTo
         * @property {gorm.IHasManyOptions|null} [hasMany] GormFieldOptions hasMany
         * @property {gorm.IManyToManyOptions|null} [manyToMany] GormFieldOptions manyToMany
         * @property {string|null} [referenceOf] GormFieldOptions referenceOf
         */

        /**
         * Constructs a new GormFieldOptions.
         * @memberof gorm
         * @classdesc Represents a GormFieldOptions.
         * @implements IGormFieldOptions
         * @constructor
         * @param {gorm.IGormFieldOptions=} [properties] Properties to set
         */
        function GormFieldOptions(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GormFieldOptions tag.
         * @member {gorm.IGormTag|null|undefined} tag
         * @memberof gorm.GormFieldOptions
         * @instance
         */
        GormFieldOptions.prototype.tag = null;

        /**
         * GormFieldOptions drop.
         * @member {boolean} drop
         * @memberof gorm.GormFieldOptions
         * @instance
         */
        GormFieldOptions.prototype.drop = false;

        /**
         * GormFieldOptions hasOne.
         * @member {gorm.IHasOneOptions|null|undefined} hasOne
         * @memberof gorm.GormFieldOptions
         * @instance
         */
        GormFieldOptions.prototype.hasOne = null;

        /**
         * GormFieldOptions belongsTo.
         * @member {gorm.IBelongsToOptions|null|undefined} belongsTo
         * @memberof gorm.GormFieldOptions
         * @instance
         */
        GormFieldOptions.prototype.belongsTo = null;

        /**
         * GormFieldOptions hasMany.
         * @member {gorm.IHasManyOptions|null|undefined} hasMany
         * @memberof gorm.GormFieldOptions
         * @instance
         */
        GormFieldOptions.prototype.hasMany = null;

        /**
         * GormFieldOptions manyToMany.
         * @member {gorm.IManyToManyOptions|null|undefined} manyToMany
         * @memberof gorm.GormFieldOptions
         * @instance
         */
        GormFieldOptions.prototype.manyToMany = null;

        /**
         * GormFieldOptions referenceOf.
         * @member {string} referenceOf
         * @memberof gorm.GormFieldOptions
         * @instance
         */
        GormFieldOptions.prototype.referenceOf = "";

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * GormFieldOptions association.
         * @member {"hasOne"|"belongsTo"|"hasMany"|"manyToMany"|undefined} association
         * @memberof gorm.GormFieldOptions
         * @instance
         */
        Object.defineProperty(GormFieldOptions.prototype, "association", {
            get: $util.oneOfGetter($oneOfFields = ["hasOne", "belongsTo", "hasMany", "manyToMany"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new GormFieldOptions instance using the specified properties.
         * @function create
         * @memberof gorm.GormFieldOptions
         * @static
         * @param {gorm.IGormFieldOptions=} [properties] Properties to set
         * @returns {gorm.GormFieldOptions} GormFieldOptions instance
         */
        GormFieldOptions.create = function create(properties) {
            return new GormFieldOptions(properties);
        };

        /**
         * Encodes the specified GormFieldOptions message. Does not implicitly {@link gorm.GormFieldOptions.verify|verify} messages.
         * @function encode
         * @memberof gorm.GormFieldOptions
         * @static
         * @param {gorm.IGormFieldOptions} message GormFieldOptions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GormFieldOptions.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tag != null && Object.hasOwnProperty.call(message, "tag"))
                $root.gorm.GormTag.encode(message.tag, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.drop != null && Object.hasOwnProperty.call(message, "drop"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.drop);
            if (message.hasOne != null && Object.hasOwnProperty.call(message, "hasOne"))
                $root.gorm.HasOneOptions.encode(message.hasOne, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.belongsTo != null && Object.hasOwnProperty.call(message, "belongsTo"))
                $root.gorm.BelongsToOptions.encode(message.belongsTo, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.hasMany != null && Object.hasOwnProperty.call(message, "hasMany"))
                $root.gorm.HasManyOptions.encode(message.hasMany, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.manyToMany != null && Object.hasOwnProperty.call(message, "manyToMany"))
                $root.gorm.ManyToManyOptions.encode(message.manyToMany, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.referenceOf != null && Object.hasOwnProperty.call(message, "referenceOf"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.referenceOf);
            return writer;
        };

        /**
         * Encodes the specified GormFieldOptions message, length delimited. Does not implicitly {@link gorm.GormFieldOptions.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gorm.GormFieldOptions
         * @static
         * @param {gorm.IGormFieldOptions} message GormFieldOptions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GormFieldOptions.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GormFieldOptions message from the specified reader or buffer.
         * @function decode
         * @memberof gorm.GormFieldOptions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gorm.GormFieldOptions} GormFieldOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GormFieldOptions.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.gorm.GormFieldOptions();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.tag = $root.gorm.GormTag.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.drop = reader.bool();
                        break;
                    }
                case 3: {
                        message.hasOne = $root.gorm.HasOneOptions.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.belongsTo = $root.gorm.BelongsToOptions.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.hasMany = $root.gorm.HasManyOptions.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.manyToMany = $root.gorm.ManyToManyOptions.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.referenceOf = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GormFieldOptions message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gorm.GormFieldOptions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gorm.GormFieldOptions} GormFieldOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GormFieldOptions.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GormFieldOptions message.
         * @function verify
         * @memberof gorm.GormFieldOptions
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GormFieldOptions.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.tag != null && message.hasOwnProperty("tag")) {
                let error = $root.gorm.GormTag.verify(message.tag);
                if (error)
                    return "tag." + error;
            }
            if (message.drop != null && message.hasOwnProperty("drop"))
                if (typeof message.drop !== "boolean")
                    return "drop: boolean expected";
            if (message.hasOne != null && message.hasOwnProperty("hasOne")) {
                properties.association = 1;
                {
                    let error = $root.gorm.HasOneOptions.verify(message.hasOne);
                    if (error)
                        return "hasOne." + error;
                }
            }
            if (message.belongsTo != null && message.hasOwnProperty("belongsTo")) {
                if (properties.association === 1)
                    return "association: multiple values";
                properties.association = 1;
                {
                    let error = $root.gorm.BelongsToOptions.verify(message.belongsTo);
                    if (error)
                        return "belongsTo." + error;
                }
            }
            if (message.hasMany != null && message.hasOwnProperty("hasMany")) {
                if (properties.association === 1)
                    return "association: multiple values";
                properties.association = 1;
                {
                    let error = $root.gorm.HasManyOptions.verify(message.hasMany);
                    if (error)
                        return "hasMany." + error;
                }
            }
            if (message.manyToMany != null && message.hasOwnProperty("manyToMany")) {
                if (properties.association === 1)
                    return "association: multiple values";
                properties.association = 1;
                {
                    let error = $root.gorm.ManyToManyOptions.verify(message.manyToMany);
                    if (error)
                        return "manyToMany." + error;
                }
            }
            if (message.referenceOf != null && message.hasOwnProperty("referenceOf"))
                if (!$util.isString(message.referenceOf))
                    return "referenceOf: string expected";
            return null;
        };

        /**
         * Creates a GormFieldOptions message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gorm.GormFieldOptions
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gorm.GormFieldOptions} GormFieldOptions
         */
        GormFieldOptions.fromObject = function fromObject(object) {
            if (object instanceof $root.gorm.GormFieldOptions)
                return object;
            let message = new $root.gorm.GormFieldOptions();
            if (object.tag != null) {
                if (typeof object.tag !== "object")
                    throw TypeError(".gorm.GormFieldOptions.tag: object expected");
                message.tag = $root.gorm.GormTag.fromObject(object.tag);
            }
            if (object.drop != null)
                message.drop = Boolean(object.drop);
            if (object.hasOne != null) {
                if (typeof object.hasOne !== "object")
                    throw TypeError(".gorm.GormFieldOptions.hasOne: object expected");
                message.hasOne = $root.gorm.HasOneOptions.fromObject(object.hasOne);
            }
            if (object.belongsTo != null) {
                if (typeof object.belongsTo !== "object")
                    throw TypeError(".gorm.GormFieldOptions.belongsTo: object expected");
                message.belongsTo = $root.gorm.BelongsToOptions.fromObject(object.belongsTo);
            }
            if (object.hasMany != null) {
                if (typeof object.hasMany !== "object")
                    throw TypeError(".gorm.GormFieldOptions.hasMany: object expected");
                message.hasMany = $root.gorm.HasManyOptions.fromObject(object.hasMany);
            }
            if (object.manyToMany != null) {
                if (typeof object.manyToMany !== "object")
                    throw TypeError(".gorm.GormFieldOptions.manyToMany: object expected");
                message.manyToMany = $root.gorm.ManyToManyOptions.fromObject(object.manyToMany);
            }
            if (object.referenceOf != null)
                message.referenceOf = String(object.referenceOf);
            return message;
        };

        /**
         * Creates a plain object from a GormFieldOptions message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gorm.GormFieldOptions
         * @static
         * @param {gorm.GormFieldOptions} message GormFieldOptions
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GormFieldOptions.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.tag = null;
                object.drop = false;
                object.referenceOf = "";
            }
            if (message.tag != null && message.hasOwnProperty("tag"))
                object.tag = $root.gorm.GormTag.toObject(message.tag, options);
            if (message.drop != null && message.hasOwnProperty("drop"))
                object.drop = message.drop;
            if (message.hasOne != null && message.hasOwnProperty("hasOne")) {
                object.hasOne = $root.gorm.HasOneOptions.toObject(message.hasOne, options);
                if (options.oneofs)
                    object.association = "hasOne";
            }
            if (message.belongsTo != null && message.hasOwnProperty("belongsTo")) {
                object.belongsTo = $root.gorm.BelongsToOptions.toObject(message.belongsTo, options);
                if (options.oneofs)
                    object.association = "belongsTo";
            }
            if (message.hasMany != null && message.hasOwnProperty("hasMany")) {
                object.hasMany = $root.gorm.HasManyOptions.toObject(message.hasMany, options);
                if (options.oneofs)
                    object.association = "hasMany";
            }
            if (message.manyToMany != null && message.hasOwnProperty("manyToMany")) {
                object.manyToMany = $root.gorm.ManyToManyOptions.toObject(message.manyToMany, options);
                if (options.oneofs)
                    object.association = "manyToMany";
            }
            if (message.referenceOf != null && message.hasOwnProperty("referenceOf"))
                object.referenceOf = message.referenceOf;
            return object;
        };

        /**
         * Converts this GormFieldOptions to JSON.
         * @function toJSON
         * @memberof gorm.GormFieldOptions
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GormFieldOptions.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GormFieldOptions
         * @function getTypeUrl
         * @memberof gorm.GormFieldOptions
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GormFieldOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gorm.GormFieldOptions";
        };

        return GormFieldOptions;
    })();

    gorm.GormTag = (function() {

        /**
         * Properties of a GormTag.
         * @memberof gorm
         * @interface IGormTag
         * @property {string|null} [column] GormTag column
         * @property {string|null} [type] GormTag type
         * @property {number|null} [size] GormTag size
         * @property {number|null} [precision] GormTag precision
         * @property {boolean|null} [primaryKey] GormTag primaryKey
         * @property {boolean|null} [unique] GormTag unique
         * @property {string|null} ["default"] GormTag default
         * @property {boolean|null} [notNull] GormTag notNull
         * @property {boolean|null} [autoIncrement] GormTag autoIncrement
         * @property {string|null} [index] GormTag index
         * @property {string|null} [uniqueIndex] GormTag uniqueIndex
         * @property {boolean|null} [embedded] GormTag embedded
         * @property {string|null} [embeddedPrefix] GormTag embeddedPrefix
         * @property {boolean|null} [ignore] GormTag ignore
         * @property {string|null} [foreignkey] GormTag foreignkey
         * @property {string|null} [associationForeignkey] GormTag associationForeignkey
         * @property {string|null} [manyToMany] GormTag manyToMany
         * @property {string|null} [jointableForeignkey] GormTag jointableForeignkey
         * @property {string|null} [associationJointableForeignkey] GormTag associationJointableForeignkey
         * @property {boolean|null} [disableAssociationAutoupdate] GormTag disableAssociationAutoupdate
         * @property {boolean|null} [disableAssociationAutocreate] GormTag disableAssociationAutocreate
         * @property {boolean|null} [associationSaveReference] GormTag associationSaveReference
         * @property {boolean|null} [preload] GormTag preload
         * @property {string|null} [serializer] GormTag serializer
         */

        /**
         * Constructs a new GormTag.
         * @memberof gorm
         * @classdesc Represents a GormTag.
         * @implements IGormTag
         * @constructor
         * @param {gorm.IGormTag=} [properties] Properties to set
         */
        function GormTag(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GormTag column.
         * @member {string} column
         * @memberof gorm.GormTag
         * @instance
         */
        GormTag.prototype.column = "";

        /**
         * GormTag type.
         * @member {string} type
         * @memberof gorm.GormTag
         * @instance
         */
        GormTag.prototype.type = "";

        /**
         * GormTag size.
         * @member {number} size
         * @memberof gorm.GormTag
         * @instance
         */
        GormTag.prototype.size = 0;

        /**
         * GormTag precision.
         * @member {number} precision
         * @memberof gorm.GormTag
         * @instance
         */
        GormTag.prototype.precision = 0;

        /**
         * GormTag primaryKey.
         * @member {boolean} primaryKey
         * @memberof gorm.GormTag
         * @instance
         */
        GormTag.prototype.primaryKey = false;

        /**
         * GormTag unique.
         * @member {boolean} unique
         * @memberof gorm.GormTag
         * @instance
         */
        GormTag.prototype.unique = false;

        /**
         * GormTag default.
         * @member {string} default
         * @memberof gorm.GormTag
         * @instance
         */
        GormTag.prototype["default"] = "";

        /**
         * GormTag notNull.
         * @member {boolean} notNull
         * @memberof gorm.GormTag
         * @instance
         */
        GormTag.prototype.notNull = false;

        /**
         * GormTag autoIncrement.
         * @member {boolean} autoIncrement
         * @memberof gorm.GormTag
         * @instance
         */
        GormTag.prototype.autoIncrement = false;

        /**
         * GormTag index.
         * @member {string} index
         * @memberof gorm.GormTag
         * @instance
         */
        GormTag.prototype.index = "";

        /**
         * GormTag uniqueIndex.
         * @member {string} uniqueIndex
         * @memberof gorm.GormTag
         * @instance
         */
        GormTag.prototype.uniqueIndex = "";

        /**
         * GormTag embedded.
         * @member {boolean} embedded
         * @memberof gorm.GormTag
         * @instance
         */
        GormTag.prototype.embedded = false;

        /**
         * GormTag embeddedPrefix.
         * @member {string} embeddedPrefix
         * @memberof gorm.GormTag
         * @instance
         */
        GormTag.prototype.embeddedPrefix = "";

        /**
         * GormTag ignore.
         * @member {boolean} ignore
         * @memberof gorm.GormTag
         * @instance
         */
        GormTag.prototype.ignore = false;

        /**
         * GormTag foreignkey.
         * @member {string} foreignkey
         * @memberof gorm.GormTag
         * @instance
         */
        GormTag.prototype.foreignkey = "";

        /**
         * GormTag associationForeignkey.
         * @member {string} associationForeignkey
         * @memberof gorm.GormTag
         * @instance
         */
        GormTag.prototype.associationForeignkey = "";

        /**
         * GormTag manyToMany.
         * @member {string} manyToMany
         * @memberof gorm.GormTag
         * @instance
         */
        GormTag.prototype.manyToMany = "";

        /**
         * GormTag jointableForeignkey.
         * @member {string} jointableForeignkey
         * @memberof gorm.GormTag
         * @instance
         */
        GormTag.prototype.jointableForeignkey = "";

        /**
         * GormTag associationJointableForeignkey.
         * @member {string} associationJointableForeignkey
         * @memberof gorm.GormTag
         * @instance
         */
        GormTag.prototype.associationJointableForeignkey = "";

        /**
         * GormTag disableAssociationAutoupdate.
         * @member {boolean} disableAssociationAutoupdate
         * @memberof gorm.GormTag
         * @instance
         */
        GormTag.prototype.disableAssociationAutoupdate = false;

        /**
         * GormTag disableAssociationAutocreate.
         * @member {boolean} disableAssociationAutocreate
         * @memberof gorm.GormTag
         * @instance
         */
        GormTag.prototype.disableAssociationAutocreate = false;

        /**
         * GormTag associationSaveReference.
         * @member {boolean} associationSaveReference
         * @memberof gorm.GormTag
         * @instance
         */
        GormTag.prototype.associationSaveReference = false;

        /**
         * GormTag preload.
         * @member {boolean} preload
         * @memberof gorm.GormTag
         * @instance
         */
        GormTag.prototype.preload = false;

        /**
         * GormTag serializer.
         * @member {string} serializer
         * @memberof gorm.GormTag
         * @instance
         */
        GormTag.prototype.serializer = "";

        /**
         * Creates a new GormTag instance using the specified properties.
         * @function create
         * @memberof gorm.GormTag
         * @static
         * @param {gorm.IGormTag=} [properties] Properties to set
         * @returns {gorm.GormTag} GormTag instance
         */
        GormTag.create = function create(properties) {
            return new GormTag(properties);
        };

        /**
         * Encodes the specified GormTag message. Does not implicitly {@link gorm.GormTag.verify|verify} messages.
         * @function encode
         * @memberof gorm.GormTag
         * @static
         * @param {gorm.IGormTag} message GormTag message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GormTag.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.column != null && Object.hasOwnProperty.call(message, "column"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.column);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.type);
            if (message.size != null && Object.hasOwnProperty.call(message, "size"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.size);
            if (message.precision != null && Object.hasOwnProperty.call(message, "precision"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.precision);
            if (message.primaryKey != null && Object.hasOwnProperty.call(message, "primaryKey"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.primaryKey);
            if (message.unique != null && Object.hasOwnProperty.call(message, "unique"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.unique);
            if (message["default"] != null && Object.hasOwnProperty.call(message, "default"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message["default"]);
            if (message.notNull != null && Object.hasOwnProperty.call(message, "notNull"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.notNull);
            if (message.autoIncrement != null && Object.hasOwnProperty.call(message, "autoIncrement"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.autoIncrement);
            if (message.index != null && Object.hasOwnProperty.call(message, "index"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.index);
            if (message.uniqueIndex != null && Object.hasOwnProperty.call(message, "uniqueIndex"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.uniqueIndex);
            if (message.embedded != null && Object.hasOwnProperty.call(message, "embedded"))
                writer.uint32(/* id 12, wireType 0 =*/96).bool(message.embedded);
            if (message.embeddedPrefix != null && Object.hasOwnProperty.call(message, "embeddedPrefix"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.embeddedPrefix);
            if (message.ignore != null && Object.hasOwnProperty.call(message, "ignore"))
                writer.uint32(/* id 14, wireType 0 =*/112).bool(message.ignore);
            if (message.foreignkey != null && Object.hasOwnProperty.call(message, "foreignkey"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.foreignkey);
            if (message.associationForeignkey != null && Object.hasOwnProperty.call(message, "associationForeignkey"))
                writer.uint32(/* id 16, wireType 2 =*/130).string(message.associationForeignkey);
            if (message.manyToMany != null && Object.hasOwnProperty.call(message, "manyToMany"))
                writer.uint32(/* id 17, wireType 2 =*/138).string(message.manyToMany);
            if (message.jointableForeignkey != null && Object.hasOwnProperty.call(message, "jointableForeignkey"))
                writer.uint32(/* id 18, wireType 2 =*/146).string(message.jointableForeignkey);
            if (message.associationJointableForeignkey != null && Object.hasOwnProperty.call(message, "associationJointableForeignkey"))
                writer.uint32(/* id 19, wireType 2 =*/154).string(message.associationJointableForeignkey);
            if (message.disableAssociationAutoupdate != null && Object.hasOwnProperty.call(message, "disableAssociationAutoupdate"))
                writer.uint32(/* id 20, wireType 0 =*/160).bool(message.disableAssociationAutoupdate);
            if (message.disableAssociationAutocreate != null && Object.hasOwnProperty.call(message, "disableAssociationAutocreate"))
                writer.uint32(/* id 21, wireType 0 =*/168).bool(message.disableAssociationAutocreate);
            if (message.associationSaveReference != null && Object.hasOwnProperty.call(message, "associationSaveReference"))
                writer.uint32(/* id 22, wireType 0 =*/176).bool(message.associationSaveReference);
            if (message.preload != null && Object.hasOwnProperty.call(message, "preload"))
                writer.uint32(/* id 23, wireType 0 =*/184).bool(message.preload);
            if (message.serializer != null && Object.hasOwnProperty.call(message, "serializer"))
                writer.uint32(/* id 24, wireType 2 =*/194).string(message.serializer);
            return writer;
        };

        /**
         * Encodes the specified GormTag message, length delimited. Does not implicitly {@link gorm.GormTag.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gorm.GormTag
         * @static
         * @param {gorm.IGormTag} message GormTag message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GormTag.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GormTag message from the specified reader or buffer.
         * @function decode
         * @memberof gorm.GormTag
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gorm.GormTag} GormTag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GormTag.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.gorm.GormTag();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.column = reader.string();
                        break;
                    }
                case 2: {
                        message.type = reader.string();
                        break;
                    }
                case 3: {
                        message.size = reader.int32();
                        break;
                    }
                case 4: {
                        message.precision = reader.int32();
                        break;
                    }
                case 5: {
                        message.primaryKey = reader.bool();
                        break;
                    }
                case 6: {
                        message.unique = reader.bool();
                        break;
                    }
                case 7: {
                        message["default"] = reader.string();
                        break;
                    }
                case 8: {
                        message.notNull = reader.bool();
                        break;
                    }
                case 9: {
                        message.autoIncrement = reader.bool();
                        break;
                    }
                case 10: {
                        message.index = reader.string();
                        break;
                    }
                case 11: {
                        message.uniqueIndex = reader.string();
                        break;
                    }
                case 12: {
                        message.embedded = reader.bool();
                        break;
                    }
                case 13: {
                        message.embeddedPrefix = reader.string();
                        break;
                    }
                case 14: {
                        message.ignore = reader.bool();
                        break;
                    }
                case 15: {
                        message.foreignkey = reader.string();
                        break;
                    }
                case 16: {
                        message.associationForeignkey = reader.string();
                        break;
                    }
                case 17: {
                        message.manyToMany = reader.string();
                        break;
                    }
                case 18: {
                        message.jointableForeignkey = reader.string();
                        break;
                    }
                case 19: {
                        message.associationJointableForeignkey = reader.string();
                        break;
                    }
                case 20: {
                        message.disableAssociationAutoupdate = reader.bool();
                        break;
                    }
                case 21: {
                        message.disableAssociationAutocreate = reader.bool();
                        break;
                    }
                case 22: {
                        message.associationSaveReference = reader.bool();
                        break;
                    }
                case 23: {
                        message.preload = reader.bool();
                        break;
                    }
                case 24: {
                        message.serializer = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GormTag message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gorm.GormTag
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gorm.GormTag} GormTag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GormTag.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GormTag message.
         * @function verify
         * @memberof gorm.GormTag
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GormTag.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.column != null && message.hasOwnProperty("column"))
                if (!$util.isString(message.column))
                    return "column: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.size != null && message.hasOwnProperty("size"))
                if (!$util.isInteger(message.size))
                    return "size: integer expected";
            if (message.precision != null && message.hasOwnProperty("precision"))
                if (!$util.isInteger(message.precision))
                    return "precision: integer expected";
            if (message.primaryKey != null && message.hasOwnProperty("primaryKey"))
                if (typeof message.primaryKey !== "boolean")
                    return "primaryKey: boolean expected";
            if (message.unique != null && message.hasOwnProperty("unique"))
                if (typeof message.unique !== "boolean")
                    return "unique: boolean expected";
            if (message["default"] != null && message.hasOwnProperty("default"))
                if (!$util.isString(message["default"]))
                    return "default: string expected";
            if (message.notNull != null && message.hasOwnProperty("notNull"))
                if (typeof message.notNull !== "boolean")
                    return "notNull: boolean expected";
            if (message.autoIncrement != null && message.hasOwnProperty("autoIncrement"))
                if (typeof message.autoIncrement !== "boolean")
                    return "autoIncrement: boolean expected";
            if (message.index != null && message.hasOwnProperty("index"))
                if (!$util.isString(message.index))
                    return "index: string expected";
            if (message.uniqueIndex != null && message.hasOwnProperty("uniqueIndex"))
                if (!$util.isString(message.uniqueIndex))
                    return "uniqueIndex: string expected";
            if (message.embedded != null && message.hasOwnProperty("embedded"))
                if (typeof message.embedded !== "boolean")
                    return "embedded: boolean expected";
            if (message.embeddedPrefix != null && message.hasOwnProperty("embeddedPrefix"))
                if (!$util.isString(message.embeddedPrefix))
                    return "embeddedPrefix: string expected";
            if (message.ignore != null && message.hasOwnProperty("ignore"))
                if (typeof message.ignore !== "boolean")
                    return "ignore: boolean expected";
            if (message.foreignkey != null && message.hasOwnProperty("foreignkey"))
                if (!$util.isString(message.foreignkey))
                    return "foreignkey: string expected";
            if (message.associationForeignkey != null && message.hasOwnProperty("associationForeignkey"))
                if (!$util.isString(message.associationForeignkey))
                    return "associationForeignkey: string expected";
            if (message.manyToMany != null && message.hasOwnProperty("manyToMany"))
                if (!$util.isString(message.manyToMany))
                    return "manyToMany: string expected";
            if (message.jointableForeignkey != null && message.hasOwnProperty("jointableForeignkey"))
                if (!$util.isString(message.jointableForeignkey))
                    return "jointableForeignkey: string expected";
            if (message.associationJointableForeignkey != null && message.hasOwnProperty("associationJointableForeignkey"))
                if (!$util.isString(message.associationJointableForeignkey))
                    return "associationJointableForeignkey: string expected";
            if (message.disableAssociationAutoupdate != null && message.hasOwnProperty("disableAssociationAutoupdate"))
                if (typeof message.disableAssociationAutoupdate !== "boolean")
                    return "disableAssociationAutoupdate: boolean expected";
            if (message.disableAssociationAutocreate != null && message.hasOwnProperty("disableAssociationAutocreate"))
                if (typeof message.disableAssociationAutocreate !== "boolean")
                    return "disableAssociationAutocreate: boolean expected";
            if (message.associationSaveReference != null && message.hasOwnProperty("associationSaveReference"))
                if (typeof message.associationSaveReference !== "boolean")
                    return "associationSaveReference: boolean expected";
            if (message.preload != null && message.hasOwnProperty("preload"))
                if (typeof message.preload !== "boolean")
                    return "preload: boolean expected";
            if (message.serializer != null && message.hasOwnProperty("serializer"))
                if (!$util.isString(message.serializer))
                    return "serializer: string expected";
            return null;
        };

        /**
         * Creates a GormTag message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gorm.GormTag
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gorm.GormTag} GormTag
         */
        GormTag.fromObject = function fromObject(object) {
            if (object instanceof $root.gorm.GormTag)
                return object;
            let message = new $root.gorm.GormTag();
            if (object.column != null)
                message.column = String(object.column);
            if (object.type != null)
                message.type = String(object.type);
            if (object.size != null)
                message.size = object.size | 0;
            if (object.precision != null)
                message.precision = object.precision | 0;
            if (object.primaryKey != null)
                message.primaryKey = Boolean(object.primaryKey);
            if (object.unique != null)
                message.unique = Boolean(object.unique);
            if (object["default"] != null)
                message["default"] = String(object["default"]);
            if (object.notNull != null)
                message.notNull = Boolean(object.notNull);
            if (object.autoIncrement != null)
                message.autoIncrement = Boolean(object.autoIncrement);
            if (object.index != null)
                message.index = String(object.index);
            if (object.uniqueIndex != null)
                message.uniqueIndex = String(object.uniqueIndex);
            if (object.embedded != null)
                message.embedded = Boolean(object.embedded);
            if (object.embeddedPrefix != null)
                message.embeddedPrefix = String(object.embeddedPrefix);
            if (object.ignore != null)
                message.ignore = Boolean(object.ignore);
            if (object.foreignkey != null)
                message.foreignkey = String(object.foreignkey);
            if (object.associationForeignkey != null)
                message.associationForeignkey = String(object.associationForeignkey);
            if (object.manyToMany != null)
                message.manyToMany = String(object.manyToMany);
            if (object.jointableForeignkey != null)
                message.jointableForeignkey = String(object.jointableForeignkey);
            if (object.associationJointableForeignkey != null)
                message.associationJointableForeignkey = String(object.associationJointableForeignkey);
            if (object.disableAssociationAutoupdate != null)
                message.disableAssociationAutoupdate = Boolean(object.disableAssociationAutoupdate);
            if (object.disableAssociationAutocreate != null)
                message.disableAssociationAutocreate = Boolean(object.disableAssociationAutocreate);
            if (object.associationSaveReference != null)
                message.associationSaveReference = Boolean(object.associationSaveReference);
            if (object.preload != null)
                message.preload = Boolean(object.preload);
            if (object.serializer != null)
                message.serializer = String(object.serializer);
            return message;
        };

        /**
         * Creates a plain object from a GormTag message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gorm.GormTag
         * @static
         * @param {gorm.GormTag} message GormTag
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GormTag.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.column = "";
                object.type = "";
                object.size = 0;
                object.precision = 0;
                object.primaryKey = false;
                object.unique = false;
                object["default"] = "";
                object.notNull = false;
                object.autoIncrement = false;
                object.index = "";
                object.uniqueIndex = "";
                object.embedded = false;
                object.embeddedPrefix = "";
                object.ignore = false;
                object.foreignkey = "";
                object.associationForeignkey = "";
                object.manyToMany = "";
                object.jointableForeignkey = "";
                object.associationJointableForeignkey = "";
                object.disableAssociationAutoupdate = false;
                object.disableAssociationAutocreate = false;
                object.associationSaveReference = false;
                object.preload = false;
                object.serializer = "";
            }
            if (message.column != null && message.hasOwnProperty("column"))
                object.column = message.column;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.size != null && message.hasOwnProperty("size"))
                object.size = message.size;
            if (message.precision != null && message.hasOwnProperty("precision"))
                object.precision = message.precision;
            if (message.primaryKey != null && message.hasOwnProperty("primaryKey"))
                object.primaryKey = message.primaryKey;
            if (message.unique != null && message.hasOwnProperty("unique"))
                object.unique = message.unique;
            if (message["default"] != null && message.hasOwnProperty("default"))
                object["default"] = message["default"];
            if (message.notNull != null && message.hasOwnProperty("notNull"))
                object.notNull = message.notNull;
            if (message.autoIncrement != null && message.hasOwnProperty("autoIncrement"))
                object.autoIncrement = message.autoIncrement;
            if (message.index != null && message.hasOwnProperty("index"))
                object.index = message.index;
            if (message.uniqueIndex != null && message.hasOwnProperty("uniqueIndex"))
                object.uniqueIndex = message.uniqueIndex;
            if (message.embedded != null && message.hasOwnProperty("embedded"))
                object.embedded = message.embedded;
            if (message.embeddedPrefix != null && message.hasOwnProperty("embeddedPrefix"))
                object.embeddedPrefix = message.embeddedPrefix;
            if (message.ignore != null && message.hasOwnProperty("ignore"))
                object.ignore = message.ignore;
            if (message.foreignkey != null && message.hasOwnProperty("foreignkey"))
                object.foreignkey = message.foreignkey;
            if (message.associationForeignkey != null && message.hasOwnProperty("associationForeignkey"))
                object.associationForeignkey = message.associationForeignkey;
            if (message.manyToMany != null && message.hasOwnProperty("manyToMany"))
                object.manyToMany = message.manyToMany;
            if (message.jointableForeignkey != null && message.hasOwnProperty("jointableForeignkey"))
                object.jointableForeignkey = message.jointableForeignkey;
            if (message.associationJointableForeignkey != null && message.hasOwnProperty("associationJointableForeignkey"))
                object.associationJointableForeignkey = message.associationJointableForeignkey;
            if (message.disableAssociationAutoupdate != null && message.hasOwnProperty("disableAssociationAutoupdate"))
                object.disableAssociationAutoupdate = message.disableAssociationAutoupdate;
            if (message.disableAssociationAutocreate != null && message.hasOwnProperty("disableAssociationAutocreate"))
                object.disableAssociationAutocreate = message.disableAssociationAutocreate;
            if (message.associationSaveReference != null && message.hasOwnProperty("associationSaveReference"))
                object.associationSaveReference = message.associationSaveReference;
            if (message.preload != null && message.hasOwnProperty("preload"))
                object.preload = message.preload;
            if (message.serializer != null && message.hasOwnProperty("serializer"))
                object.serializer = message.serializer;
            return object;
        };

        /**
         * Converts this GormTag to JSON.
         * @function toJSON
         * @memberof gorm.GormTag
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GormTag.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GormTag
         * @function getTypeUrl
         * @memberof gorm.GormTag
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GormTag.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gorm.GormTag";
        };

        return GormTag;
    })();

    gorm.HasOneOptions = (function() {

        /**
         * Properties of a HasOneOptions.
         * @memberof gorm
         * @interface IHasOneOptions
         * @property {string|null} [foreignkey] HasOneOptions foreignkey
         * @property {gorm.IGormTag|null} [foreignkeyTag] HasOneOptions foreignkeyTag
         * @property {string|null} [associationForeignkey] HasOneOptions associationForeignkey
         * @property {boolean|null} [disableAssociationAutoupdate] HasOneOptions disableAssociationAutoupdate
         * @property {boolean|null} [disableAssociationAutocreate] HasOneOptions disableAssociationAutocreate
         * @property {boolean|null} [associationSaveReference] HasOneOptions associationSaveReference
         * @property {boolean|null} [preload] HasOneOptions preload
         * @property {boolean|null} [replace] HasOneOptions replace
         * @property {boolean|null} [append] HasOneOptions append
         * @property {boolean|null} [clear] HasOneOptions clear
         */

        /**
         * Constructs a new HasOneOptions.
         * @memberof gorm
         * @classdesc Represents a HasOneOptions.
         * @implements IHasOneOptions
         * @constructor
         * @param {gorm.IHasOneOptions=} [properties] Properties to set
         */
        function HasOneOptions(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HasOneOptions foreignkey.
         * @member {string} foreignkey
         * @memberof gorm.HasOneOptions
         * @instance
         */
        HasOneOptions.prototype.foreignkey = "";

        /**
         * HasOneOptions foreignkeyTag.
         * @member {gorm.IGormTag|null|undefined} foreignkeyTag
         * @memberof gorm.HasOneOptions
         * @instance
         */
        HasOneOptions.prototype.foreignkeyTag = null;

        /**
         * HasOneOptions associationForeignkey.
         * @member {string} associationForeignkey
         * @memberof gorm.HasOneOptions
         * @instance
         */
        HasOneOptions.prototype.associationForeignkey = "";

        /**
         * HasOneOptions disableAssociationAutoupdate.
         * @member {boolean} disableAssociationAutoupdate
         * @memberof gorm.HasOneOptions
         * @instance
         */
        HasOneOptions.prototype.disableAssociationAutoupdate = false;

        /**
         * HasOneOptions disableAssociationAutocreate.
         * @member {boolean} disableAssociationAutocreate
         * @memberof gorm.HasOneOptions
         * @instance
         */
        HasOneOptions.prototype.disableAssociationAutocreate = false;

        /**
         * HasOneOptions associationSaveReference.
         * @member {boolean} associationSaveReference
         * @memberof gorm.HasOneOptions
         * @instance
         */
        HasOneOptions.prototype.associationSaveReference = false;

        /**
         * HasOneOptions preload.
         * @member {boolean} preload
         * @memberof gorm.HasOneOptions
         * @instance
         */
        HasOneOptions.prototype.preload = false;

        /**
         * HasOneOptions replace.
         * @member {boolean} replace
         * @memberof gorm.HasOneOptions
         * @instance
         */
        HasOneOptions.prototype.replace = false;

        /**
         * HasOneOptions append.
         * @member {boolean} append
         * @memberof gorm.HasOneOptions
         * @instance
         */
        HasOneOptions.prototype.append = false;

        /**
         * HasOneOptions clear.
         * @member {boolean} clear
         * @memberof gorm.HasOneOptions
         * @instance
         */
        HasOneOptions.prototype.clear = false;

        /**
         * Creates a new HasOneOptions instance using the specified properties.
         * @function create
         * @memberof gorm.HasOneOptions
         * @static
         * @param {gorm.IHasOneOptions=} [properties] Properties to set
         * @returns {gorm.HasOneOptions} HasOneOptions instance
         */
        HasOneOptions.create = function create(properties) {
            return new HasOneOptions(properties);
        };

        /**
         * Encodes the specified HasOneOptions message. Does not implicitly {@link gorm.HasOneOptions.verify|verify} messages.
         * @function encode
         * @memberof gorm.HasOneOptions
         * @static
         * @param {gorm.IHasOneOptions} message HasOneOptions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HasOneOptions.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.foreignkey != null && Object.hasOwnProperty.call(message, "foreignkey"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.foreignkey);
            if (message.foreignkeyTag != null && Object.hasOwnProperty.call(message, "foreignkeyTag"))
                $root.gorm.GormTag.encode(message.foreignkeyTag, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.associationForeignkey != null && Object.hasOwnProperty.call(message, "associationForeignkey"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.associationForeignkey);
            if (message.disableAssociationAutoupdate != null && Object.hasOwnProperty.call(message, "disableAssociationAutoupdate"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.disableAssociationAutoupdate);
            if (message.disableAssociationAutocreate != null && Object.hasOwnProperty.call(message, "disableAssociationAutocreate"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.disableAssociationAutocreate);
            if (message.associationSaveReference != null && Object.hasOwnProperty.call(message, "associationSaveReference"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.associationSaveReference);
            if (message.preload != null && Object.hasOwnProperty.call(message, "preload"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.preload);
            if (message.replace != null && Object.hasOwnProperty.call(message, "replace"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.replace);
            if (message.append != null && Object.hasOwnProperty.call(message, "append"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.append);
            if (message.clear != null && Object.hasOwnProperty.call(message, "clear"))
                writer.uint32(/* id 10, wireType 0 =*/80).bool(message.clear);
            return writer;
        };

        /**
         * Encodes the specified HasOneOptions message, length delimited. Does not implicitly {@link gorm.HasOneOptions.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gorm.HasOneOptions
         * @static
         * @param {gorm.IHasOneOptions} message HasOneOptions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HasOneOptions.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HasOneOptions message from the specified reader or buffer.
         * @function decode
         * @memberof gorm.HasOneOptions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gorm.HasOneOptions} HasOneOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HasOneOptions.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.gorm.HasOneOptions();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.foreignkey = reader.string();
                        break;
                    }
                case 2: {
                        message.foreignkeyTag = $root.gorm.GormTag.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.associationForeignkey = reader.string();
                        break;
                    }
                case 4: {
                        message.disableAssociationAutoupdate = reader.bool();
                        break;
                    }
                case 5: {
                        message.disableAssociationAutocreate = reader.bool();
                        break;
                    }
                case 6: {
                        message.associationSaveReference = reader.bool();
                        break;
                    }
                case 7: {
                        message.preload = reader.bool();
                        break;
                    }
                case 8: {
                        message.replace = reader.bool();
                        break;
                    }
                case 9: {
                        message.append = reader.bool();
                        break;
                    }
                case 10: {
                        message.clear = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HasOneOptions message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gorm.HasOneOptions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gorm.HasOneOptions} HasOneOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HasOneOptions.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HasOneOptions message.
         * @function verify
         * @memberof gorm.HasOneOptions
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HasOneOptions.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.foreignkey != null && message.hasOwnProperty("foreignkey"))
                if (!$util.isString(message.foreignkey))
                    return "foreignkey: string expected";
            if (message.foreignkeyTag != null && message.hasOwnProperty("foreignkeyTag")) {
                let error = $root.gorm.GormTag.verify(message.foreignkeyTag);
                if (error)
                    return "foreignkeyTag." + error;
            }
            if (message.associationForeignkey != null && message.hasOwnProperty("associationForeignkey"))
                if (!$util.isString(message.associationForeignkey))
                    return "associationForeignkey: string expected";
            if (message.disableAssociationAutoupdate != null && message.hasOwnProperty("disableAssociationAutoupdate"))
                if (typeof message.disableAssociationAutoupdate !== "boolean")
                    return "disableAssociationAutoupdate: boolean expected";
            if (message.disableAssociationAutocreate != null && message.hasOwnProperty("disableAssociationAutocreate"))
                if (typeof message.disableAssociationAutocreate !== "boolean")
                    return "disableAssociationAutocreate: boolean expected";
            if (message.associationSaveReference != null && message.hasOwnProperty("associationSaveReference"))
                if (typeof message.associationSaveReference !== "boolean")
                    return "associationSaveReference: boolean expected";
            if (message.preload != null && message.hasOwnProperty("preload"))
                if (typeof message.preload !== "boolean")
                    return "preload: boolean expected";
            if (message.replace != null && message.hasOwnProperty("replace"))
                if (typeof message.replace !== "boolean")
                    return "replace: boolean expected";
            if (message.append != null && message.hasOwnProperty("append"))
                if (typeof message.append !== "boolean")
                    return "append: boolean expected";
            if (message.clear != null && message.hasOwnProperty("clear"))
                if (typeof message.clear !== "boolean")
                    return "clear: boolean expected";
            return null;
        };

        /**
         * Creates a HasOneOptions message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gorm.HasOneOptions
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gorm.HasOneOptions} HasOneOptions
         */
        HasOneOptions.fromObject = function fromObject(object) {
            if (object instanceof $root.gorm.HasOneOptions)
                return object;
            let message = new $root.gorm.HasOneOptions();
            if (object.foreignkey != null)
                message.foreignkey = String(object.foreignkey);
            if (object.foreignkeyTag != null) {
                if (typeof object.foreignkeyTag !== "object")
                    throw TypeError(".gorm.HasOneOptions.foreignkeyTag: object expected");
                message.foreignkeyTag = $root.gorm.GormTag.fromObject(object.foreignkeyTag);
            }
            if (object.associationForeignkey != null)
                message.associationForeignkey = String(object.associationForeignkey);
            if (object.disableAssociationAutoupdate != null)
                message.disableAssociationAutoupdate = Boolean(object.disableAssociationAutoupdate);
            if (object.disableAssociationAutocreate != null)
                message.disableAssociationAutocreate = Boolean(object.disableAssociationAutocreate);
            if (object.associationSaveReference != null)
                message.associationSaveReference = Boolean(object.associationSaveReference);
            if (object.preload != null)
                message.preload = Boolean(object.preload);
            if (object.replace != null)
                message.replace = Boolean(object.replace);
            if (object.append != null)
                message.append = Boolean(object.append);
            if (object.clear != null)
                message.clear = Boolean(object.clear);
            return message;
        };

        /**
         * Creates a plain object from a HasOneOptions message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gorm.HasOneOptions
         * @static
         * @param {gorm.HasOneOptions} message HasOneOptions
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HasOneOptions.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.foreignkey = "";
                object.foreignkeyTag = null;
                object.associationForeignkey = "";
                object.disableAssociationAutoupdate = false;
                object.disableAssociationAutocreate = false;
                object.associationSaveReference = false;
                object.preload = false;
                object.replace = false;
                object.append = false;
                object.clear = false;
            }
            if (message.foreignkey != null && message.hasOwnProperty("foreignkey"))
                object.foreignkey = message.foreignkey;
            if (message.foreignkeyTag != null && message.hasOwnProperty("foreignkeyTag"))
                object.foreignkeyTag = $root.gorm.GormTag.toObject(message.foreignkeyTag, options);
            if (message.associationForeignkey != null && message.hasOwnProperty("associationForeignkey"))
                object.associationForeignkey = message.associationForeignkey;
            if (message.disableAssociationAutoupdate != null && message.hasOwnProperty("disableAssociationAutoupdate"))
                object.disableAssociationAutoupdate = message.disableAssociationAutoupdate;
            if (message.disableAssociationAutocreate != null && message.hasOwnProperty("disableAssociationAutocreate"))
                object.disableAssociationAutocreate = message.disableAssociationAutocreate;
            if (message.associationSaveReference != null && message.hasOwnProperty("associationSaveReference"))
                object.associationSaveReference = message.associationSaveReference;
            if (message.preload != null && message.hasOwnProperty("preload"))
                object.preload = message.preload;
            if (message.replace != null && message.hasOwnProperty("replace"))
                object.replace = message.replace;
            if (message.append != null && message.hasOwnProperty("append"))
                object.append = message.append;
            if (message.clear != null && message.hasOwnProperty("clear"))
                object.clear = message.clear;
            return object;
        };

        /**
         * Converts this HasOneOptions to JSON.
         * @function toJSON
         * @memberof gorm.HasOneOptions
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HasOneOptions.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for HasOneOptions
         * @function getTypeUrl
         * @memberof gorm.HasOneOptions
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HasOneOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gorm.HasOneOptions";
        };

        return HasOneOptions;
    })();

    gorm.BelongsToOptions = (function() {

        /**
         * Properties of a BelongsToOptions.
         * @memberof gorm
         * @interface IBelongsToOptions
         * @property {string|null} [foreignkey] BelongsToOptions foreignkey
         * @property {gorm.IGormTag|null} [foreignkeyTag] BelongsToOptions foreignkeyTag
         * @property {string|null} [associationForeignkey] BelongsToOptions associationForeignkey
         * @property {boolean|null} [disableAssociationAutoupdate] BelongsToOptions disableAssociationAutoupdate
         * @property {boolean|null} [disableAssociationAutocreate] BelongsToOptions disableAssociationAutocreate
         * @property {boolean|null} [associationSaveReference] BelongsToOptions associationSaveReference
         * @property {boolean|null} [preload] BelongsToOptions preload
         */

        /**
         * Constructs a new BelongsToOptions.
         * @memberof gorm
         * @classdesc Represents a BelongsToOptions.
         * @implements IBelongsToOptions
         * @constructor
         * @param {gorm.IBelongsToOptions=} [properties] Properties to set
         */
        function BelongsToOptions(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BelongsToOptions foreignkey.
         * @member {string} foreignkey
         * @memberof gorm.BelongsToOptions
         * @instance
         */
        BelongsToOptions.prototype.foreignkey = "";

        /**
         * BelongsToOptions foreignkeyTag.
         * @member {gorm.IGormTag|null|undefined} foreignkeyTag
         * @memberof gorm.BelongsToOptions
         * @instance
         */
        BelongsToOptions.prototype.foreignkeyTag = null;

        /**
         * BelongsToOptions associationForeignkey.
         * @member {string} associationForeignkey
         * @memberof gorm.BelongsToOptions
         * @instance
         */
        BelongsToOptions.prototype.associationForeignkey = "";

        /**
         * BelongsToOptions disableAssociationAutoupdate.
         * @member {boolean} disableAssociationAutoupdate
         * @memberof gorm.BelongsToOptions
         * @instance
         */
        BelongsToOptions.prototype.disableAssociationAutoupdate = false;

        /**
         * BelongsToOptions disableAssociationAutocreate.
         * @member {boolean} disableAssociationAutocreate
         * @memberof gorm.BelongsToOptions
         * @instance
         */
        BelongsToOptions.prototype.disableAssociationAutocreate = false;

        /**
         * BelongsToOptions associationSaveReference.
         * @member {boolean} associationSaveReference
         * @memberof gorm.BelongsToOptions
         * @instance
         */
        BelongsToOptions.prototype.associationSaveReference = false;

        /**
         * BelongsToOptions preload.
         * @member {boolean} preload
         * @memberof gorm.BelongsToOptions
         * @instance
         */
        BelongsToOptions.prototype.preload = false;

        /**
         * Creates a new BelongsToOptions instance using the specified properties.
         * @function create
         * @memberof gorm.BelongsToOptions
         * @static
         * @param {gorm.IBelongsToOptions=} [properties] Properties to set
         * @returns {gorm.BelongsToOptions} BelongsToOptions instance
         */
        BelongsToOptions.create = function create(properties) {
            return new BelongsToOptions(properties);
        };

        /**
         * Encodes the specified BelongsToOptions message. Does not implicitly {@link gorm.BelongsToOptions.verify|verify} messages.
         * @function encode
         * @memberof gorm.BelongsToOptions
         * @static
         * @param {gorm.IBelongsToOptions} message BelongsToOptions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BelongsToOptions.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.foreignkey != null && Object.hasOwnProperty.call(message, "foreignkey"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.foreignkey);
            if (message.foreignkeyTag != null && Object.hasOwnProperty.call(message, "foreignkeyTag"))
                $root.gorm.GormTag.encode(message.foreignkeyTag, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.associationForeignkey != null && Object.hasOwnProperty.call(message, "associationForeignkey"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.associationForeignkey);
            if (message.disableAssociationAutoupdate != null && Object.hasOwnProperty.call(message, "disableAssociationAutoupdate"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.disableAssociationAutoupdate);
            if (message.disableAssociationAutocreate != null && Object.hasOwnProperty.call(message, "disableAssociationAutocreate"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.disableAssociationAutocreate);
            if (message.associationSaveReference != null && Object.hasOwnProperty.call(message, "associationSaveReference"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.associationSaveReference);
            if (message.preload != null && Object.hasOwnProperty.call(message, "preload"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.preload);
            return writer;
        };

        /**
         * Encodes the specified BelongsToOptions message, length delimited. Does not implicitly {@link gorm.BelongsToOptions.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gorm.BelongsToOptions
         * @static
         * @param {gorm.IBelongsToOptions} message BelongsToOptions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BelongsToOptions.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BelongsToOptions message from the specified reader or buffer.
         * @function decode
         * @memberof gorm.BelongsToOptions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gorm.BelongsToOptions} BelongsToOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BelongsToOptions.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.gorm.BelongsToOptions();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.foreignkey = reader.string();
                        break;
                    }
                case 2: {
                        message.foreignkeyTag = $root.gorm.GormTag.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.associationForeignkey = reader.string();
                        break;
                    }
                case 4: {
                        message.disableAssociationAutoupdate = reader.bool();
                        break;
                    }
                case 5: {
                        message.disableAssociationAutocreate = reader.bool();
                        break;
                    }
                case 6: {
                        message.associationSaveReference = reader.bool();
                        break;
                    }
                case 7: {
                        message.preload = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BelongsToOptions message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gorm.BelongsToOptions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gorm.BelongsToOptions} BelongsToOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BelongsToOptions.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BelongsToOptions message.
         * @function verify
         * @memberof gorm.BelongsToOptions
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BelongsToOptions.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.foreignkey != null && message.hasOwnProperty("foreignkey"))
                if (!$util.isString(message.foreignkey))
                    return "foreignkey: string expected";
            if (message.foreignkeyTag != null && message.hasOwnProperty("foreignkeyTag")) {
                let error = $root.gorm.GormTag.verify(message.foreignkeyTag);
                if (error)
                    return "foreignkeyTag." + error;
            }
            if (message.associationForeignkey != null && message.hasOwnProperty("associationForeignkey"))
                if (!$util.isString(message.associationForeignkey))
                    return "associationForeignkey: string expected";
            if (message.disableAssociationAutoupdate != null && message.hasOwnProperty("disableAssociationAutoupdate"))
                if (typeof message.disableAssociationAutoupdate !== "boolean")
                    return "disableAssociationAutoupdate: boolean expected";
            if (message.disableAssociationAutocreate != null && message.hasOwnProperty("disableAssociationAutocreate"))
                if (typeof message.disableAssociationAutocreate !== "boolean")
                    return "disableAssociationAutocreate: boolean expected";
            if (message.associationSaveReference != null && message.hasOwnProperty("associationSaveReference"))
                if (typeof message.associationSaveReference !== "boolean")
                    return "associationSaveReference: boolean expected";
            if (message.preload != null && message.hasOwnProperty("preload"))
                if (typeof message.preload !== "boolean")
                    return "preload: boolean expected";
            return null;
        };

        /**
         * Creates a BelongsToOptions message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gorm.BelongsToOptions
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gorm.BelongsToOptions} BelongsToOptions
         */
        BelongsToOptions.fromObject = function fromObject(object) {
            if (object instanceof $root.gorm.BelongsToOptions)
                return object;
            let message = new $root.gorm.BelongsToOptions();
            if (object.foreignkey != null)
                message.foreignkey = String(object.foreignkey);
            if (object.foreignkeyTag != null) {
                if (typeof object.foreignkeyTag !== "object")
                    throw TypeError(".gorm.BelongsToOptions.foreignkeyTag: object expected");
                message.foreignkeyTag = $root.gorm.GormTag.fromObject(object.foreignkeyTag);
            }
            if (object.associationForeignkey != null)
                message.associationForeignkey = String(object.associationForeignkey);
            if (object.disableAssociationAutoupdate != null)
                message.disableAssociationAutoupdate = Boolean(object.disableAssociationAutoupdate);
            if (object.disableAssociationAutocreate != null)
                message.disableAssociationAutocreate = Boolean(object.disableAssociationAutocreate);
            if (object.associationSaveReference != null)
                message.associationSaveReference = Boolean(object.associationSaveReference);
            if (object.preload != null)
                message.preload = Boolean(object.preload);
            return message;
        };

        /**
         * Creates a plain object from a BelongsToOptions message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gorm.BelongsToOptions
         * @static
         * @param {gorm.BelongsToOptions} message BelongsToOptions
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BelongsToOptions.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.foreignkey = "";
                object.foreignkeyTag = null;
                object.associationForeignkey = "";
                object.disableAssociationAutoupdate = false;
                object.disableAssociationAutocreate = false;
                object.associationSaveReference = false;
                object.preload = false;
            }
            if (message.foreignkey != null && message.hasOwnProperty("foreignkey"))
                object.foreignkey = message.foreignkey;
            if (message.foreignkeyTag != null && message.hasOwnProperty("foreignkeyTag"))
                object.foreignkeyTag = $root.gorm.GormTag.toObject(message.foreignkeyTag, options);
            if (message.associationForeignkey != null && message.hasOwnProperty("associationForeignkey"))
                object.associationForeignkey = message.associationForeignkey;
            if (message.disableAssociationAutoupdate != null && message.hasOwnProperty("disableAssociationAutoupdate"))
                object.disableAssociationAutoupdate = message.disableAssociationAutoupdate;
            if (message.disableAssociationAutocreate != null && message.hasOwnProperty("disableAssociationAutocreate"))
                object.disableAssociationAutocreate = message.disableAssociationAutocreate;
            if (message.associationSaveReference != null && message.hasOwnProperty("associationSaveReference"))
                object.associationSaveReference = message.associationSaveReference;
            if (message.preload != null && message.hasOwnProperty("preload"))
                object.preload = message.preload;
            return object;
        };

        /**
         * Converts this BelongsToOptions to JSON.
         * @function toJSON
         * @memberof gorm.BelongsToOptions
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BelongsToOptions.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BelongsToOptions
         * @function getTypeUrl
         * @memberof gorm.BelongsToOptions
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BelongsToOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gorm.BelongsToOptions";
        };

        return BelongsToOptions;
    })();

    gorm.HasManyOptions = (function() {

        /**
         * Properties of a HasManyOptions.
         * @memberof gorm
         * @interface IHasManyOptions
         * @property {string|null} [foreignkey] HasManyOptions foreignkey
         * @property {gorm.IGormTag|null} [foreignkeyTag] HasManyOptions foreignkeyTag
         * @property {string|null} [associationForeignkey] HasManyOptions associationForeignkey
         * @property {string|null} [positionField] HasManyOptions positionField
         * @property {gorm.IGormTag|null} [positionFieldTag] HasManyOptions positionFieldTag
         * @property {boolean|null} [disableAssociationAutoupdate] HasManyOptions disableAssociationAutoupdate
         * @property {boolean|null} [disableAssociationAutocreate] HasManyOptions disableAssociationAutocreate
         * @property {boolean|null} [associationSaveReference] HasManyOptions associationSaveReference
         * @property {boolean|null} [preload] HasManyOptions preload
         * @property {boolean|null} [replace] HasManyOptions replace
         * @property {boolean|null} [append] HasManyOptions append
         * @property {boolean|null} [clear] HasManyOptions clear
         */

        /**
         * Constructs a new HasManyOptions.
         * @memberof gorm
         * @classdesc Represents a HasManyOptions.
         * @implements IHasManyOptions
         * @constructor
         * @param {gorm.IHasManyOptions=} [properties] Properties to set
         */
        function HasManyOptions(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HasManyOptions foreignkey.
         * @member {string} foreignkey
         * @memberof gorm.HasManyOptions
         * @instance
         */
        HasManyOptions.prototype.foreignkey = "";

        /**
         * HasManyOptions foreignkeyTag.
         * @member {gorm.IGormTag|null|undefined} foreignkeyTag
         * @memberof gorm.HasManyOptions
         * @instance
         */
        HasManyOptions.prototype.foreignkeyTag = null;

        /**
         * HasManyOptions associationForeignkey.
         * @member {string} associationForeignkey
         * @memberof gorm.HasManyOptions
         * @instance
         */
        HasManyOptions.prototype.associationForeignkey = "";

        /**
         * HasManyOptions positionField.
         * @member {string} positionField
         * @memberof gorm.HasManyOptions
         * @instance
         */
        HasManyOptions.prototype.positionField = "";

        /**
         * HasManyOptions positionFieldTag.
         * @member {gorm.IGormTag|null|undefined} positionFieldTag
         * @memberof gorm.HasManyOptions
         * @instance
         */
        HasManyOptions.prototype.positionFieldTag = null;

        /**
         * HasManyOptions disableAssociationAutoupdate.
         * @member {boolean} disableAssociationAutoupdate
         * @memberof gorm.HasManyOptions
         * @instance
         */
        HasManyOptions.prototype.disableAssociationAutoupdate = false;

        /**
         * HasManyOptions disableAssociationAutocreate.
         * @member {boolean} disableAssociationAutocreate
         * @memberof gorm.HasManyOptions
         * @instance
         */
        HasManyOptions.prototype.disableAssociationAutocreate = false;

        /**
         * HasManyOptions associationSaveReference.
         * @member {boolean} associationSaveReference
         * @memberof gorm.HasManyOptions
         * @instance
         */
        HasManyOptions.prototype.associationSaveReference = false;

        /**
         * HasManyOptions preload.
         * @member {boolean} preload
         * @memberof gorm.HasManyOptions
         * @instance
         */
        HasManyOptions.prototype.preload = false;

        /**
         * HasManyOptions replace.
         * @member {boolean} replace
         * @memberof gorm.HasManyOptions
         * @instance
         */
        HasManyOptions.prototype.replace = false;

        /**
         * HasManyOptions append.
         * @member {boolean} append
         * @memberof gorm.HasManyOptions
         * @instance
         */
        HasManyOptions.prototype.append = false;

        /**
         * HasManyOptions clear.
         * @member {boolean} clear
         * @memberof gorm.HasManyOptions
         * @instance
         */
        HasManyOptions.prototype.clear = false;

        /**
         * Creates a new HasManyOptions instance using the specified properties.
         * @function create
         * @memberof gorm.HasManyOptions
         * @static
         * @param {gorm.IHasManyOptions=} [properties] Properties to set
         * @returns {gorm.HasManyOptions} HasManyOptions instance
         */
        HasManyOptions.create = function create(properties) {
            return new HasManyOptions(properties);
        };

        /**
         * Encodes the specified HasManyOptions message. Does not implicitly {@link gorm.HasManyOptions.verify|verify} messages.
         * @function encode
         * @memberof gorm.HasManyOptions
         * @static
         * @param {gorm.IHasManyOptions} message HasManyOptions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HasManyOptions.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.foreignkey != null && Object.hasOwnProperty.call(message, "foreignkey"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.foreignkey);
            if (message.foreignkeyTag != null && Object.hasOwnProperty.call(message, "foreignkeyTag"))
                $root.gorm.GormTag.encode(message.foreignkeyTag, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.associationForeignkey != null && Object.hasOwnProperty.call(message, "associationForeignkey"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.associationForeignkey);
            if (message.positionField != null && Object.hasOwnProperty.call(message, "positionField"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.positionField);
            if (message.positionFieldTag != null && Object.hasOwnProperty.call(message, "positionFieldTag"))
                $root.gorm.GormTag.encode(message.positionFieldTag, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.disableAssociationAutoupdate != null && Object.hasOwnProperty.call(message, "disableAssociationAutoupdate"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.disableAssociationAutoupdate);
            if (message.disableAssociationAutocreate != null && Object.hasOwnProperty.call(message, "disableAssociationAutocreate"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.disableAssociationAutocreate);
            if (message.associationSaveReference != null && Object.hasOwnProperty.call(message, "associationSaveReference"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.associationSaveReference);
            if (message.preload != null && Object.hasOwnProperty.call(message, "preload"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.preload);
            if (message.replace != null && Object.hasOwnProperty.call(message, "replace"))
                writer.uint32(/* id 10, wireType 0 =*/80).bool(message.replace);
            if (message.append != null && Object.hasOwnProperty.call(message, "append"))
                writer.uint32(/* id 11, wireType 0 =*/88).bool(message.append);
            if (message.clear != null && Object.hasOwnProperty.call(message, "clear"))
                writer.uint32(/* id 12, wireType 0 =*/96).bool(message.clear);
            return writer;
        };

        /**
         * Encodes the specified HasManyOptions message, length delimited. Does not implicitly {@link gorm.HasManyOptions.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gorm.HasManyOptions
         * @static
         * @param {gorm.IHasManyOptions} message HasManyOptions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HasManyOptions.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HasManyOptions message from the specified reader or buffer.
         * @function decode
         * @memberof gorm.HasManyOptions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gorm.HasManyOptions} HasManyOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HasManyOptions.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.gorm.HasManyOptions();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.foreignkey = reader.string();
                        break;
                    }
                case 2: {
                        message.foreignkeyTag = $root.gorm.GormTag.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.associationForeignkey = reader.string();
                        break;
                    }
                case 4: {
                        message.positionField = reader.string();
                        break;
                    }
                case 5: {
                        message.positionFieldTag = $root.gorm.GormTag.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.disableAssociationAutoupdate = reader.bool();
                        break;
                    }
                case 7: {
                        message.disableAssociationAutocreate = reader.bool();
                        break;
                    }
                case 8: {
                        message.associationSaveReference = reader.bool();
                        break;
                    }
                case 9: {
                        message.preload = reader.bool();
                        break;
                    }
                case 10: {
                        message.replace = reader.bool();
                        break;
                    }
                case 11: {
                        message.append = reader.bool();
                        break;
                    }
                case 12: {
                        message.clear = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HasManyOptions message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gorm.HasManyOptions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gorm.HasManyOptions} HasManyOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HasManyOptions.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HasManyOptions message.
         * @function verify
         * @memberof gorm.HasManyOptions
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HasManyOptions.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.foreignkey != null && message.hasOwnProperty("foreignkey"))
                if (!$util.isString(message.foreignkey))
                    return "foreignkey: string expected";
            if (message.foreignkeyTag != null && message.hasOwnProperty("foreignkeyTag")) {
                let error = $root.gorm.GormTag.verify(message.foreignkeyTag);
                if (error)
                    return "foreignkeyTag." + error;
            }
            if (message.associationForeignkey != null && message.hasOwnProperty("associationForeignkey"))
                if (!$util.isString(message.associationForeignkey))
                    return "associationForeignkey: string expected";
            if (message.positionField != null && message.hasOwnProperty("positionField"))
                if (!$util.isString(message.positionField))
                    return "positionField: string expected";
            if (message.positionFieldTag != null && message.hasOwnProperty("positionFieldTag")) {
                let error = $root.gorm.GormTag.verify(message.positionFieldTag);
                if (error)
                    return "positionFieldTag." + error;
            }
            if (message.disableAssociationAutoupdate != null && message.hasOwnProperty("disableAssociationAutoupdate"))
                if (typeof message.disableAssociationAutoupdate !== "boolean")
                    return "disableAssociationAutoupdate: boolean expected";
            if (message.disableAssociationAutocreate != null && message.hasOwnProperty("disableAssociationAutocreate"))
                if (typeof message.disableAssociationAutocreate !== "boolean")
                    return "disableAssociationAutocreate: boolean expected";
            if (message.associationSaveReference != null && message.hasOwnProperty("associationSaveReference"))
                if (typeof message.associationSaveReference !== "boolean")
                    return "associationSaveReference: boolean expected";
            if (message.preload != null && message.hasOwnProperty("preload"))
                if (typeof message.preload !== "boolean")
                    return "preload: boolean expected";
            if (message.replace != null && message.hasOwnProperty("replace"))
                if (typeof message.replace !== "boolean")
                    return "replace: boolean expected";
            if (message.append != null && message.hasOwnProperty("append"))
                if (typeof message.append !== "boolean")
                    return "append: boolean expected";
            if (message.clear != null && message.hasOwnProperty("clear"))
                if (typeof message.clear !== "boolean")
                    return "clear: boolean expected";
            return null;
        };

        /**
         * Creates a HasManyOptions message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gorm.HasManyOptions
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gorm.HasManyOptions} HasManyOptions
         */
        HasManyOptions.fromObject = function fromObject(object) {
            if (object instanceof $root.gorm.HasManyOptions)
                return object;
            let message = new $root.gorm.HasManyOptions();
            if (object.foreignkey != null)
                message.foreignkey = String(object.foreignkey);
            if (object.foreignkeyTag != null) {
                if (typeof object.foreignkeyTag !== "object")
                    throw TypeError(".gorm.HasManyOptions.foreignkeyTag: object expected");
                message.foreignkeyTag = $root.gorm.GormTag.fromObject(object.foreignkeyTag);
            }
            if (object.associationForeignkey != null)
                message.associationForeignkey = String(object.associationForeignkey);
            if (object.positionField != null)
                message.positionField = String(object.positionField);
            if (object.positionFieldTag != null) {
                if (typeof object.positionFieldTag !== "object")
                    throw TypeError(".gorm.HasManyOptions.positionFieldTag: object expected");
                message.positionFieldTag = $root.gorm.GormTag.fromObject(object.positionFieldTag);
            }
            if (object.disableAssociationAutoupdate != null)
                message.disableAssociationAutoupdate = Boolean(object.disableAssociationAutoupdate);
            if (object.disableAssociationAutocreate != null)
                message.disableAssociationAutocreate = Boolean(object.disableAssociationAutocreate);
            if (object.associationSaveReference != null)
                message.associationSaveReference = Boolean(object.associationSaveReference);
            if (object.preload != null)
                message.preload = Boolean(object.preload);
            if (object.replace != null)
                message.replace = Boolean(object.replace);
            if (object.append != null)
                message.append = Boolean(object.append);
            if (object.clear != null)
                message.clear = Boolean(object.clear);
            return message;
        };

        /**
         * Creates a plain object from a HasManyOptions message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gorm.HasManyOptions
         * @static
         * @param {gorm.HasManyOptions} message HasManyOptions
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HasManyOptions.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.foreignkey = "";
                object.foreignkeyTag = null;
                object.associationForeignkey = "";
                object.positionField = "";
                object.positionFieldTag = null;
                object.disableAssociationAutoupdate = false;
                object.disableAssociationAutocreate = false;
                object.associationSaveReference = false;
                object.preload = false;
                object.replace = false;
                object.append = false;
                object.clear = false;
            }
            if (message.foreignkey != null && message.hasOwnProperty("foreignkey"))
                object.foreignkey = message.foreignkey;
            if (message.foreignkeyTag != null && message.hasOwnProperty("foreignkeyTag"))
                object.foreignkeyTag = $root.gorm.GormTag.toObject(message.foreignkeyTag, options);
            if (message.associationForeignkey != null && message.hasOwnProperty("associationForeignkey"))
                object.associationForeignkey = message.associationForeignkey;
            if (message.positionField != null && message.hasOwnProperty("positionField"))
                object.positionField = message.positionField;
            if (message.positionFieldTag != null && message.hasOwnProperty("positionFieldTag"))
                object.positionFieldTag = $root.gorm.GormTag.toObject(message.positionFieldTag, options);
            if (message.disableAssociationAutoupdate != null && message.hasOwnProperty("disableAssociationAutoupdate"))
                object.disableAssociationAutoupdate = message.disableAssociationAutoupdate;
            if (message.disableAssociationAutocreate != null && message.hasOwnProperty("disableAssociationAutocreate"))
                object.disableAssociationAutocreate = message.disableAssociationAutocreate;
            if (message.associationSaveReference != null && message.hasOwnProperty("associationSaveReference"))
                object.associationSaveReference = message.associationSaveReference;
            if (message.preload != null && message.hasOwnProperty("preload"))
                object.preload = message.preload;
            if (message.replace != null && message.hasOwnProperty("replace"))
                object.replace = message.replace;
            if (message.append != null && message.hasOwnProperty("append"))
                object.append = message.append;
            if (message.clear != null && message.hasOwnProperty("clear"))
                object.clear = message.clear;
            return object;
        };

        /**
         * Converts this HasManyOptions to JSON.
         * @function toJSON
         * @memberof gorm.HasManyOptions
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HasManyOptions.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for HasManyOptions
         * @function getTypeUrl
         * @memberof gorm.HasManyOptions
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HasManyOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gorm.HasManyOptions";
        };

        return HasManyOptions;
    })();

    gorm.ManyToManyOptions = (function() {

        /**
         * Properties of a ManyToManyOptions.
         * @memberof gorm
         * @interface IManyToManyOptions
         * @property {string|null} [jointable] ManyToManyOptions jointable
         * @property {string|null} [foreignkey] ManyToManyOptions foreignkey
         * @property {string|null} [jointableForeignkey] ManyToManyOptions jointableForeignkey
         * @property {string|null} [associationForeignkey] ManyToManyOptions associationForeignkey
         * @property {string|null} [associationJointableForeignkey] ManyToManyOptions associationJointableForeignkey
         * @property {boolean|null} [disableAssociationAutoupdate] ManyToManyOptions disableAssociationAutoupdate
         * @property {boolean|null} [disableAssociationAutocreate] ManyToManyOptions disableAssociationAutocreate
         * @property {boolean|null} [associationSaveReference] ManyToManyOptions associationSaveReference
         * @property {boolean|null} [preload] ManyToManyOptions preload
         * @property {boolean|null} [replace] ManyToManyOptions replace
         * @property {boolean|null} [append] ManyToManyOptions append
         * @property {boolean|null} [clear] ManyToManyOptions clear
         */

        /**
         * Constructs a new ManyToManyOptions.
         * @memberof gorm
         * @classdesc Represents a ManyToManyOptions.
         * @implements IManyToManyOptions
         * @constructor
         * @param {gorm.IManyToManyOptions=} [properties] Properties to set
         */
        function ManyToManyOptions(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ManyToManyOptions jointable.
         * @member {string} jointable
         * @memberof gorm.ManyToManyOptions
         * @instance
         */
        ManyToManyOptions.prototype.jointable = "";

        /**
         * ManyToManyOptions foreignkey.
         * @member {string} foreignkey
         * @memberof gorm.ManyToManyOptions
         * @instance
         */
        ManyToManyOptions.prototype.foreignkey = "";

        /**
         * ManyToManyOptions jointableForeignkey.
         * @member {string} jointableForeignkey
         * @memberof gorm.ManyToManyOptions
         * @instance
         */
        ManyToManyOptions.prototype.jointableForeignkey = "";

        /**
         * ManyToManyOptions associationForeignkey.
         * @member {string} associationForeignkey
         * @memberof gorm.ManyToManyOptions
         * @instance
         */
        ManyToManyOptions.prototype.associationForeignkey = "";

        /**
         * ManyToManyOptions associationJointableForeignkey.
         * @member {string} associationJointableForeignkey
         * @memberof gorm.ManyToManyOptions
         * @instance
         */
        ManyToManyOptions.prototype.associationJointableForeignkey = "";

        /**
         * ManyToManyOptions disableAssociationAutoupdate.
         * @member {boolean} disableAssociationAutoupdate
         * @memberof gorm.ManyToManyOptions
         * @instance
         */
        ManyToManyOptions.prototype.disableAssociationAutoupdate = false;

        /**
         * ManyToManyOptions disableAssociationAutocreate.
         * @member {boolean} disableAssociationAutocreate
         * @memberof gorm.ManyToManyOptions
         * @instance
         */
        ManyToManyOptions.prototype.disableAssociationAutocreate = false;

        /**
         * ManyToManyOptions associationSaveReference.
         * @member {boolean} associationSaveReference
         * @memberof gorm.ManyToManyOptions
         * @instance
         */
        ManyToManyOptions.prototype.associationSaveReference = false;

        /**
         * ManyToManyOptions preload.
         * @member {boolean} preload
         * @memberof gorm.ManyToManyOptions
         * @instance
         */
        ManyToManyOptions.prototype.preload = false;

        /**
         * ManyToManyOptions replace.
         * @member {boolean} replace
         * @memberof gorm.ManyToManyOptions
         * @instance
         */
        ManyToManyOptions.prototype.replace = false;

        /**
         * ManyToManyOptions append.
         * @member {boolean} append
         * @memberof gorm.ManyToManyOptions
         * @instance
         */
        ManyToManyOptions.prototype.append = false;

        /**
         * ManyToManyOptions clear.
         * @member {boolean} clear
         * @memberof gorm.ManyToManyOptions
         * @instance
         */
        ManyToManyOptions.prototype.clear = false;

        /**
         * Creates a new ManyToManyOptions instance using the specified properties.
         * @function create
         * @memberof gorm.ManyToManyOptions
         * @static
         * @param {gorm.IManyToManyOptions=} [properties] Properties to set
         * @returns {gorm.ManyToManyOptions} ManyToManyOptions instance
         */
        ManyToManyOptions.create = function create(properties) {
            return new ManyToManyOptions(properties);
        };

        /**
         * Encodes the specified ManyToManyOptions message. Does not implicitly {@link gorm.ManyToManyOptions.verify|verify} messages.
         * @function encode
         * @memberof gorm.ManyToManyOptions
         * @static
         * @param {gorm.IManyToManyOptions} message ManyToManyOptions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ManyToManyOptions.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.jointable != null && Object.hasOwnProperty.call(message, "jointable"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.jointable);
            if (message.foreignkey != null && Object.hasOwnProperty.call(message, "foreignkey"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.foreignkey);
            if (message.jointableForeignkey != null && Object.hasOwnProperty.call(message, "jointableForeignkey"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.jointableForeignkey);
            if (message.associationForeignkey != null && Object.hasOwnProperty.call(message, "associationForeignkey"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.associationForeignkey);
            if (message.associationJointableForeignkey != null && Object.hasOwnProperty.call(message, "associationJointableForeignkey"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.associationJointableForeignkey);
            if (message.disableAssociationAutoupdate != null && Object.hasOwnProperty.call(message, "disableAssociationAutoupdate"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.disableAssociationAutoupdate);
            if (message.disableAssociationAutocreate != null && Object.hasOwnProperty.call(message, "disableAssociationAutocreate"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.disableAssociationAutocreate);
            if (message.associationSaveReference != null && Object.hasOwnProperty.call(message, "associationSaveReference"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.associationSaveReference);
            if (message.preload != null && Object.hasOwnProperty.call(message, "preload"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.preload);
            if (message.replace != null && Object.hasOwnProperty.call(message, "replace"))
                writer.uint32(/* id 10, wireType 0 =*/80).bool(message.replace);
            if (message.append != null && Object.hasOwnProperty.call(message, "append"))
                writer.uint32(/* id 11, wireType 0 =*/88).bool(message.append);
            if (message.clear != null && Object.hasOwnProperty.call(message, "clear"))
                writer.uint32(/* id 13, wireType 0 =*/104).bool(message.clear);
            return writer;
        };

        /**
         * Encodes the specified ManyToManyOptions message, length delimited. Does not implicitly {@link gorm.ManyToManyOptions.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gorm.ManyToManyOptions
         * @static
         * @param {gorm.IManyToManyOptions} message ManyToManyOptions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ManyToManyOptions.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ManyToManyOptions message from the specified reader or buffer.
         * @function decode
         * @memberof gorm.ManyToManyOptions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gorm.ManyToManyOptions} ManyToManyOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ManyToManyOptions.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.gorm.ManyToManyOptions();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.jointable = reader.string();
                        break;
                    }
                case 2: {
                        message.foreignkey = reader.string();
                        break;
                    }
                case 3: {
                        message.jointableForeignkey = reader.string();
                        break;
                    }
                case 4: {
                        message.associationForeignkey = reader.string();
                        break;
                    }
                case 5: {
                        message.associationJointableForeignkey = reader.string();
                        break;
                    }
                case 6: {
                        message.disableAssociationAutoupdate = reader.bool();
                        break;
                    }
                case 7: {
                        message.disableAssociationAutocreate = reader.bool();
                        break;
                    }
                case 8: {
                        message.associationSaveReference = reader.bool();
                        break;
                    }
                case 9: {
                        message.preload = reader.bool();
                        break;
                    }
                case 10: {
                        message.replace = reader.bool();
                        break;
                    }
                case 11: {
                        message.append = reader.bool();
                        break;
                    }
                case 13: {
                        message.clear = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ManyToManyOptions message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gorm.ManyToManyOptions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gorm.ManyToManyOptions} ManyToManyOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ManyToManyOptions.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ManyToManyOptions message.
         * @function verify
         * @memberof gorm.ManyToManyOptions
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ManyToManyOptions.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.jointable != null && message.hasOwnProperty("jointable"))
                if (!$util.isString(message.jointable))
                    return "jointable: string expected";
            if (message.foreignkey != null && message.hasOwnProperty("foreignkey"))
                if (!$util.isString(message.foreignkey))
                    return "foreignkey: string expected";
            if (message.jointableForeignkey != null && message.hasOwnProperty("jointableForeignkey"))
                if (!$util.isString(message.jointableForeignkey))
                    return "jointableForeignkey: string expected";
            if (message.associationForeignkey != null && message.hasOwnProperty("associationForeignkey"))
                if (!$util.isString(message.associationForeignkey))
                    return "associationForeignkey: string expected";
            if (message.associationJointableForeignkey != null && message.hasOwnProperty("associationJointableForeignkey"))
                if (!$util.isString(message.associationJointableForeignkey))
                    return "associationJointableForeignkey: string expected";
            if (message.disableAssociationAutoupdate != null && message.hasOwnProperty("disableAssociationAutoupdate"))
                if (typeof message.disableAssociationAutoupdate !== "boolean")
                    return "disableAssociationAutoupdate: boolean expected";
            if (message.disableAssociationAutocreate != null && message.hasOwnProperty("disableAssociationAutocreate"))
                if (typeof message.disableAssociationAutocreate !== "boolean")
                    return "disableAssociationAutocreate: boolean expected";
            if (message.associationSaveReference != null && message.hasOwnProperty("associationSaveReference"))
                if (typeof message.associationSaveReference !== "boolean")
                    return "associationSaveReference: boolean expected";
            if (message.preload != null && message.hasOwnProperty("preload"))
                if (typeof message.preload !== "boolean")
                    return "preload: boolean expected";
            if (message.replace != null && message.hasOwnProperty("replace"))
                if (typeof message.replace !== "boolean")
                    return "replace: boolean expected";
            if (message.append != null && message.hasOwnProperty("append"))
                if (typeof message.append !== "boolean")
                    return "append: boolean expected";
            if (message.clear != null && message.hasOwnProperty("clear"))
                if (typeof message.clear !== "boolean")
                    return "clear: boolean expected";
            return null;
        };

        /**
         * Creates a ManyToManyOptions message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gorm.ManyToManyOptions
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gorm.ManyToManyOptions} ManyToManyOptions
         */
        ManyToManyOptions.fromObject = function fromObject(object) {
            if (object instanceof $root.gorm.ManyToManyOptions)
                return object;
            let message = new $root.gorm.ManyToManyOptions();
            if (object.jointable != null)
                message.jointable = String(object.jointable);
            if (object.foreignkey != null)
                message.foreignkey = String(object.foreignkey);
            if (object.jointableForeignkey != null)
                message.jointableForeignkey = String(object.jointableForeignkey);
            if (object.associationForeignkey != null)
                message.associationForeignkey = String(object.associationForeignkey);
            if (object.associationJointableForeignkey != null)
                message.associationJointableForeignkey = String(object.associationJointableForeignkey);
            if (object.disableAssociationAutoupdate != null)
                message.disableAssociationAutoupdate = Boolean(object.disableAssociationAutoupdate);
            if (object.disableAssociationAutocreate != null)
                message.disableAssociationAutocreate = Boolean(object.disableAssociationAutocreate);
            if (object.associationSaveReference != null)
                message.associationSaveReference = Boolean(object.associationSaveReference);
            if (object.preload != null)
                message.preload = Boolean(object.preload);
            if (object.replace != null)
                message.replace = Boolean(object.replace);
            if (object.append != null)
                message.append = Boolean(object.append);
            if (object.clear != null)
                message.clear = Boolean(object.clear);
            return message;
        };

        /**
         * Creates a plain object from a ManyToManyOptions message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gorm.ManyToManyOptions
         * @static
         * @param {gorm.ManyToManyOptions} message ManyToManyOptions
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ManyToManyOptions.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.jointable = "";
                object.foreignkey = "";
                object.jointableForeignkey = "";
                object.associationForeignkey = "";
                object.associationJointableForeignkey = "";
                object.disableAssociationAutoupdate = false;
                object.disableAssociationAutocreate = false;
                object.associationSaveReference = false;
                object.preload = false;
                object.replace = false;
                object.append = false;
                object.clear = false;
            }
            if (message.jointable != null && message.hasOwnProperty("jointable"))
                object.jointable = message.jointable;
            if (message.foreignkey != null && message.hasOwnProperty("foreignkey"))
                object.foreignkey = message.foreignkey;
            if (message.jointableForeignkey != null && message.hasOwnProperty("jointableForeignkey"))
                object.jointableForeignkey = message.jointableForeignkey;
            if (message.associationForeignkey != null && message.hasOwnProperty("associationForeignkey"))
                object.associationForeignkey = message.associationForeignkey;
            if (message.associationJointableForeignkey != null && message.hasOwnProperty("associationJointableForeignkey"))
                object.associationJointableForeignkey = message.associationJointableForeignkey;
            if (message.disableAssociationAutoupdate != null && message.hasOwnProperty("disableAssociationAutoupdate"))
                object.disableAssociationAutoupdate = message.disableAssociationAutoupdate;
            if (message.disableAssociationAutocreate != null && message.hasOwnProperty("disableAssociationAutocreate"))
                object.disableAssociationAutocreate = message.disableAssociationAutocreate;
            if (message.associationSaveReference != null && message.hasOwnProperty("associationSaveReference"))
                object.associationSaveReference = message.associationSaveReference;
            if (message.preload != null && message.hasOwnProperty("preload"))
                object.preload = message.preload;
            if (message.replace != null && message.hasOwnProperty("replace"))
                object.replace = message.replace;
            if (message.append != null && message.hasOwnProperty("append"))
                object.append = message.append;
            if (message.clear != null && message.hasOwnProperty("clear"))
                object.clear = message.clear;
            return object;
        };

        /**
         * Converts this ManyToManyOptions to JSON.
         * @function toJSON
         * @memberof gorm.ManyToManyOptions
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ManyToManyOptions.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ManyToManyOptions
         * @function getTypeUrl
         * @memberof gorm.ManyToManyOptions
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ManyToManyOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gorm.ManyToManyOptions";
        };

        return ManyToManyOptions;
    })();

    gorm.AutoServerOptions = (function() {

        /**
         * Properties of an AutoServerOptions.
         * @memberof gorm
         * @interface IAutoServerOptions
         * @property {boolean|null} [autogen] AutoServerOptions autogen
         * @property {boolean|null} [txnMiddleware] AutoServerOptions txnMiddleware
         * @property {boolean|null} [withTracing] AutoServerOptions withTracing
         */

        /**
         * Constructs a new AutoServerOptions.
         * @memberof gorm
         * @classdesc Represents an AutoServerOptions.
         * @implements IAutoServerOptions
         * @constructor
         * @param {gorm.IAutoServerOptions=} [properties] Properties to set
         */
        function AutoServerOptions(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AutoServerOptions autogen.
         * @member {boolean} autogen
         * @memberof gorm.AutoServerOptions
         * @instance
         */
        AutoServerOptions.prototype.autogen = false;

        /**
         * AutoServerOptions txnMiddleware.
         * @member {boolean} txnMiddleware
         * @memberof gorm.AutoServerOptions
         * @instance
         */
        AutoServerOptions.prototype.txnMiddleware = false;

        /**
         * AutoServerOptions withTracing.
         * @member {boolean} withTracing
         * @memberof gorm.AutoServerOptions
         * @instance
         */
        AutoServerOptions.prototype.withTracing = false;

        /**
         * Creates a new AutoServerOptions instance using the specified properties.
         * @function create
         * @memberof gorm.AutoServerOptions
         * @static
         * @param {gorm.IAutoServerOptions=} [properties] Properties to set
         * @returns {gorm.AutoServerOptions} AutoServerOptions instance
         */
        AutoServerOptions.create = function create(properties) {
            return new AutoServerOptions(properties);
        };

        /**
         * Encodes the specified AutoServerOptions message. Does not implicitly {@link gorm.AutoServerOptions.verify|verify} messages.
         * @function encode
         * @memberof gorm.AutoServerOptions
         * @static
         * @param {gorm.IAutoServerOptions} message AutoServerOptions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AutoServerOptions.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.autogen != null && Object.hasOwnProperty.call(message, "autogen"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.autogen);
            if (message.txnMiddleware != null && Object.hasOwnProperty.call(message, "txnMiddleware"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.txnMiddleware);
            if (message.withTracing != null && Object.hasOwnProperty.call(message, "withTracing"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.withTracing);
            return writer;
        };

        /**
         * Encodes the specified AutoServerOptions message, length delimited. Does not implicitly {@link gorm.AutoServerOptions.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gorm.AutoServerOptions
         * @static
         * @param {gorm.IAutoServerOptions} message AutoServerOptions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AutoServerOptions.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AutoServerOptions message from the specified reader or buffer.
         * @function decode
         * @memberof gorm.AutoServerOptions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gorm.AutoServerOptions} AutoServerOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AutoServerOptions.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.gorm.AutoServerOptions();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.autogen = reader.bool();
                        break;
                    }
                case 2: {
                        message.txnMiddleware = reader.bool();
                        break;
                    }
                case 3: {
                        message.withTracing = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AutoServerOptions message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gorm.AutoServerOptions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gorm.AutoServerOptions} AutoServerOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AutoServerOptions.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AutoServerOptions message.
         * @function verify
         * @memberof gorm.AutoServerOptions
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AutoServerOptions.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.autogen != null && message.hasOwnProperty("autogen"))
                if (typeof message.autogen !== "boolean")
                    return "autogen: boolean expected";
            if (message.txnMiddleware != null && message.hasOwnProperty("txnMiddleware"))
                if (typeof message.txnMiddleware !== "boolean")
                    return "txnMiddleware: boolean expected";
            if (message.withTracing != null && message.hasOwnProperty("withTracing"))
                if (typeof message.withTracing !== "boolean")
                    return "withTracing: boolean expected";
            return null;
        };

        /**
         * Creates an AutoServerOptions message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gorm.AutoServerOptions
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gorm.AutoServerOptions} AutoServerOptions
         */
        AutoServerOptions.fromObject = function fromObject(object) {
            if (object instanceof $root.gorm.AutoServerOptions)
                return object;
            let message = new $root.gorm.AutoServerOptions();
            if (object.autogen != null)
                message.autogen = Boolean(object.autogen);
            if (object.txnMiddleware != null)
                message.txnMiddleware = Boolean(object.txnMiddleware);
            if (object.withTracing != null)
                message.withTracing = Boolean(object.withTracing);
            return message;
        };

        /**
         * Creates a plain object from an AutoServerOptions message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gorm.AutoServerOptions
         * @static
         * @param {gorm.AutoServerOptions} message AutoServerOptions
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AutoServerOptions.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.autogen = false;
                object.txnMiddleware = false;
                object.withTracing = false;
            }
            if (message.autogen != null && message.hasOwnProperty("autogen"))
                object.autogen = message.autogen;
            if (message.txnMiddleware != null && message.hasOwnProperty("txnMiddleware"))
                object.txnMiddleware = message.txnMiddleware;
            if (message.withTracing != null && message.hasOwnProperty("withTracing"))
                object.withTracing = message.withTracing;
            return object;
        };

        /**
         * Converts this AutoServerOptions to JSON.
         * @function toJSON
         * @memberof gorm.AutoServerOptions
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AutoServerOptions.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AutoServerOptions
         * @function getTypeUrl
         * @memberof gorm.AutoServerOptions
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AutoServerOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gorm.AutoServerOptions";
        };

        return AutoServerOptions;
    })();

    gorm.MethodOptions = (function() {

        /**
         * Properties of a MethodOptions.
         * @memberof gorm
         * @interface IMethodOptions
         * @property {string|null} [objectType] MethodOptions objectType
         */

        /**
         * Constructs a new MethodOptions.
         * @memberof gorm
         * @classdesc Represents a MethodOptions.
         * @implements IMethodOptions
         * @constructor
         * @param {gorm.IMethodOptions=} [properties] Properties to set
         */
        function MethodOptions(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MethodOptions objectType.
         * @member {string} objectType
         * @memberof gorm.MethodOptions
         * @instance
         */
        MethodOptions.prototype.objectType = "";

        /**
         * Creates a new MethodOptions instance using the specified properties.
         * @function create
         * @memberof gorm.MethodOptions
         * @static
         * @param {gorm.IMethodOptions=} [properties] Properties to set
         * @returns {gorm.MethodOptions} MethodOptions instance
         */
        MethodOptions.create = function create(properties) {
            return new MethodOptions(properties);
        };

        /**
         * Encodes the specified MethodOptions message. Does not implicitly {@link gorm.MethodOptions.verify|verify} messages.
         * @function encode
         * @memberof gorm.MethodOptions
         * @static
         * @param {gorm.IMethodOptions} message MethodOptions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MethodOptions.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.objectType != null && Object.hasOwnProperty.call(message, "objectType"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.objectType);
            return writer;
        };

        /**
         * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link gorm.MethodOptions.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gorm.MethodOptions
         * @static
         * @param {gorm.IMethodOptions} message MethodOptions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MethodOptions.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MethodOptions message from the specified reader or buffer.
         * @function decode
         * @memberof gorm.MethodOptions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gorm.MethodOptions} MethodOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MethodOptions.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.gorm.MethodOptions();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.objectType = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gorm.MethodOptions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gorm.MethodOptions} MethodOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MethodOptions.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MethodOptions message.
         * @function verify
         * @memberof gorm.MethodOptions
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MethodOptions.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.objectType != null && message.hasOwnProperty("objectType"))
                if (!$util.isString(message.objectType))
                    return "objectType: string expected";
            return null;
        };

        /**
         * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gorm.MethodOptions
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gorm.MethodOptions} MethodOptions
         */
        MethodOptions.fromObject = function fromObject(object) {
            if (object instanceof $root.gorm.MethodOptions)
                return object;
            let message = new $root.gorm.MethodOptions();
            if (object.objectType != null)
                message.objectType = String(object.objectType);
            return message;
        };

        /**
         * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gorm.MethodOptions
         * @static
         * @param {gorm.MethodOptions} message MethodOptions
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MethodOptions.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.objectType = "";
            if (message.objectType != null && message.hasOwnProperty("objectType"))
                object.objectType = message.objectType;
            return object;
        };

        /**
         * Converts this MethodOptions to JSON.
         * @function toJSON
         * @memberof gorm.MethodOptions
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MethodOptions.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MethodOptions
         * @function getTypeUrl
         * @memberof gorm.MethodOptions
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MethodOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gorm.MethodOptions";
        };

        return MethodOptions;
    })();

    return gorm;
})();

export const google = $root.google = (() => {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    const google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        const protobuf = {};

        protobuf.FileDescriptorSet = (function() {

            /**
             * Properties of a FileDescriptorSet.
             * @memberof google.protobuf
             * @interface IFileDescriptorSet
             * @property {Array.<google.protobuf.IFileDescriptorProto>|null} [file] FileDescriptorSet file
             */

            /**
             * Constructs a new FileDescriptorSet.
             * @memberof google.protobuf
             * @classdesc Represents a FileDescriptorSet.
             * @implements IFileDescriptorSet
             * @constructor
             * @param {google.protobuf.IFileDescriptorSet=} [properties] Properties to set
             */
            function FileDescriptorSet(properties) {
                this.file = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FileDescriptorSet file.
             * @member {Array.<google.protobuf.IFileDescriptorProto>} file
             * @memberof google.protobuf.FileDescriptorSet
             * @instance
             */
            FileDescriptorSet.prototype.file = $util.emptyArray;

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {google.protobuf.IFileDescriptorSet=} [properties] Properties to set
             * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet instance
             */
            FileDescriptorSet.create = function create(properties) {
                return new FileDescriptorSet(properties);
            };

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {google.protobuf.IFileDescriptorSet} message FileDescriptorSet message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileDescriptorSet.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.file != null && message.file.length)
                    for (let i = 0; i < message.file.length; ++i)
                        $root.google.protobuf.FileDescriptorProto.encode(message.file[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {google.protobuf.IFileDescriptorSet} message FileDescriptorSet message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileDescriptorSet.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileDescriptorSet.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileDescriptorSet();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.file && message.file.length))
                                message.file = [];
                            message.file.push($root.google.protobuf.FileDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileDescriptorSet.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FileDescriptorSet message.
             * @function verify
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FileDescriptorSet.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.file != null && message.hasOwnProperty("file")) {
                    if (!Array.isArray(message.file))
                        return "file: array expected";
                    for (let i = 0; i < message.file.length; ++i) {
                        let error = $root.google.protobuf.FileDescriptorProto.verify(message.file[i]);
                        if (error)
                            return "file." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
             */
            FileDescriptorSet.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FileDescriptorSet)
                    return object;
                let message = new $root.google.protobuf.FileDescriptorSet();
                if (object.file) {
                    if (!Array.isArray(object.file))
                        throw TypeError(".google.protobuf.FileDescriptorSet.file: array expected");
                    message.file = [];
                    for (let i = 0; i < object.file.length; ++i) {
                        if (typeof object.file[i] !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorSet.file: object expected");
                        message.file[i] = $root.google.protobuf.FileDescriptorProto.fromObject(object.file[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {google.protobuf.FileDescriptorSet} message FileDescriptorSet
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FileDescriptorSet.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.file = [];
                if (message.file && message.file.length) {
                    object.file = [];
                    for (let j = 0; j < message.file.length; ++j)
                        object.file[j] = $root.google.protobuf.FileDescriptorProto.toObject(message.file[j], options);
                }
                return object;
            };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @function toJSON
             * @memberof google.protobuf.FileDescriptorSet
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FileDescriptorSet.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for FileDescriptorSet
             * @function getTypeUrl
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            FileDescriptorSet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.FileDescriptorSet";
            };

            return FileDescriptorSet;
        })();

        protobuf.FileDescriptorProto = (function() {

            /**
             * Properties of a FileDescriptorProto.
             * @memberof google.protobuf
             * @interface IFileDescriptorProto
             * @property {string|null} [name] FileDescriptorProto name
             * @property {string|null} ["package"] FileDescriptorProto package
             * @property {Array.<string>|null} [dependency] FileDescriptorProto dependency
             * @property {Array.<number>|null} [publicDependency] FileDescriptorProto publicDependency
             * @property {Array.<number>|null} [weakDependency] FileDescriptorProto weakDependency
             * @property {Array.<google.protobuf.IDescriptorProto>|null} [messageType] FileDescriptorProto messageType
             * @property {Array.<google.protobuf.IEnumDescriptorProto>|null} [enumType] FileDescriptorProto enumType
             * @property {Array.<google.protobuf.IServiceDescriptorProto>|null} [service] FileDescriptorProto service
             * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [extension] FileDescriptorProto extension
             * @property {google.protobuf.IFileOptions|null} [options] FileDescriptorProto options
             * @property {google.protobuf.ISourceCodeInfo|null} [sourceCodeInfo] FileDescriptorProto sourceCodeInfo
             * @property {string|null} [syntax] FileDescriptorProto syntax
             */

            /**
             * Constructs a new FileDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a FileDescriptorProto.
             * @implements IFileDescriptorProto
             * @constructor
             * @param {google.protobuf.IFileDescriptorProto=} [properties] Properties to set
             */
            function FileDescriptorProto(properties) {
                this.dependency = [];
                this.publicDependency = [];
                this.weakDependency = [];
                this.messageType = [];
                this.enumType = [];
                this.service = [];
                this.extension = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FileDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.name = "";

            /**
             * FileDescriptorProto package.
             * @member {string} package
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype["package"] = "";

            /**
             * FileDescriptorProto dependency.
             * @member {Array.<string>} dependency
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.dependency = $util.emptyArray;

            /**
             * FileDescriptorProto publicDependency.
             * @member {Array.<number>} publicDependency
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.publicDependency = $util.emptyArray;

            /**
             * FileDescriptorProto weakDependency.
             * @member {Array.<number>} weakDependency
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.weakDependency = $util.emptyArray;

            /**
             * FileDescriptorProto messageType.
             * @member {Array.<google.protobuf.IDescriptorProto>} messageType
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.messageType = $util.emptyArray;

            /**
             * FileDescriptorProto enumType.
             * @member {Array.<google.protobuf.IEnumDescriptorProto>} enumType
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.enumType = $util.emptyArray;

            /**
             * FileDescriptorProto service.
             * @member {Array.<google.protobuf.IServiceDescriptorProto>} service
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.service = $util.emptyArray;

            /**
             * FileDescriptorProto extension.
             * @member {Array.<google.protobuf.IFieldDescriptorProto>} extension
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.extension = $util.emptyArray;

            /**
             * FileDescriptorProto options.
             * @member {google.protobuf.IFileOptions|null|undefined} options
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.options = null;

            /**
             * FileDescriptorProto sourceCodeInfo.
             * @member {google.protobuf.ISourceCodeInfo|null|undefined} sourceCodeInfo
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.sourceCodeInfo = null;

            /**
             * FileDescriptorProto syntax.
             * @member {string} syntax
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.syntax = "";

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {google.protobuf.IFileDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto instance
             */
            FileDescriptorProto.create = function create(properties) {
                return new FileDescriptorProto(properties);
            };

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {google.protobuf.IFileDescriptorProto} message FileDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message["package"] != null && Object.hasOwnProperty.call(message, "package"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message["package"]);
                if (message.dependency != null && message.dependency.length)
                    for (let i = 0; i < message.dependency.length; ++i)
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.dependency[i]);
                if (message.messageType != null && message.messageType.length)
                    for (let i = 0; i < message.messageType.length; ++i)
                        $root.google.protobuf.DescriptorProto.encode(message.messageType[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.enumType != null && message.enumType.length)
                    for (let i = 0; i < message.enumType.length; ++i)
                        $root.google.protobuf.EnumDescriptorProto.encode(message.enumType[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.service != null && message.service.length)
                    for (let i = 0; i < message.service.length; ++i)
                        $root.google.protobuf.ServiceDescriptorProto.encode(message.service[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.extension != null && message.extension.length)
                    for (let i = 0; i < message.extension.length; ++i)
                        $root.google.protobuf.FieldDescriptorProto.encode(message.extension[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.FileOptions.encode(message.options, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.sourceCodeInfo != null && Object.hasOwnProperty.call(message, "sourceCodeInfo"))
                    $root.google.protobuf.SourceCodeInfo.encode(message.sourceCodeInfo, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                if (message.publicDependency != null && message.publicDependency.length)
                    for (let i = 0; i < message.publicDependency.length; ++i)
                        writer.uint32(/* id 10, wireType 0 =*/80).int32(message.publicDependency[i]);
                if (message.weakDependency != null && message.weakDependency.length)
                    for (let i = 0; i < message.weakDependency.length; ++i)
                        writer.uint32(/* id 11, wireType 0 =*/88).int32(message.weakDependency[i]);
                if (message.syntax != null && Object.hasOwnProperty.call(message, "syntax"))
                    writer.uint32(/* id 12, wireType 2 =*/98).string(message.syntax);
                return writer;
            };

            /**
             * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {google.protobuf.IFileDescriptorProto} message FileDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileDescriptorProto();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    case 2: {
                            message["package"] = reader.string();
                            break;
                        }
                    case 3: {
                            if (!(message.dependency && message.dependency.length))
                                message.dependency = [];
                            message.dependency.push(reader.string());
                            break;
                        }
                    case 10: {
                            if (!(message.publicDependency && message.publicDependency.length))
                                message.publicDependency = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.publicDependency.push(reader.int32());
                            } else
                                message.publicDependency.push(reader.int32());
                            break;
                        }
                    case 11: {
                            if (!(message.weakDependency && message.weakDependency.length))
                                message.weakDependency = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.weakDependency.push(reader.int32());
                            } else
                                message.weakDependency.push(reader.int32());
                            break;
                        }
                    case 4: {
                            if (!(message.messageType && message.messageType.length))
                                message.messageType = [];
                            message.messageType.push($root.google.protobuf.DescriptorProto.decode(reader, reader.uint32()));
                            break;
                        }
                    case 5: {
                            if (!(message.enumType && message.enumType.length))
                                message.enumType = [];
                            message.enumType.push($root.google.protobuf.EnumDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        }
                    case 6: {
                            if (!(message.service && message.service.length))
                                message.service = [];
                            message.service.push($root.google.protobuf.ServiceDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        }
                    case 7: {
                            if (!(message.extension && message.extension.length))
                                message.extension = [];
                            message.extension.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        }
                    case 8: {
                            message.options = $root.google.protobuf.FileOptions.decode(reader, reader.uint32());
                            break;
                        }
                    case 9: {
                            message.sourceCodeInfo = $root.google.protobuf.SourceCodeInfo.decode(reader, reader.uint32());
                            break;
                        }
                    case 12: {
                            message.syntax = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FileDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FileDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message["package"] != null && message.hasOwnProperty("package"))
                    if (!$util.isString(message["package"]))
                        return "package: string expected";
                if (message.dependency != null && message.hasOwnProperty("dependency")) {
                    if (!Array.isArray(message.dependency))
                        return "dependency: array expected";
                    for (let i = 0; i < message.dependency.length; ++i)
                        if (!$util.isString(message.dependency[i]))
                            return "dependency: string[] expected";
                }
                if (message.publicDependency != null && message.hasOwnProperty("publicDependency")) {
                    if (!Array.isArray(message.publicDependency))
                        return "publicDependency: array expected";
                    for (let i = 0; i < message.publicDependency.length; ++i)
                        if (!$util.isInteger(message.publicDependency[i]))
                            return "publicDependency: integer[] expected";
                }
                if (message.weakDependency != null && message.hasOwnProperty("weakDependency")) {
                    if (!Array.isArray(message.weakDependency))
                        return "weakDependency: array expected";
                    for (let i = 0; i < message.weakDependency.length; ++i)
                        if (!$util.isInteger(message.weakDependency[i]))
                            return "weakDependency: integer[] expected";
                }
                if (message.messageType != null && message.hasOwnProperty("messageType")) {
                    if (!Array.isArray(message.messageType))
                        return "messageType: array expected";
                    for (let i = 0; i < message.messageType.length; ++i) {
                        let error = $root.google.protobuf.DescriptorProto.verify(message.messageType[i]);
                        if (error)
                            return "messageType." + error;
                    }
                }
                if (message.enumType != null && message.hasOwnProperty("enumType")) {
                    if (!Array.isArray(message.enumType))
                        return "enumType: array expected";
                    for (let i = 0; i < message.enumType.length; ++i) {
                        let error = $root.google.protobuf.EnumDescriptorProto.verify(message.enumType[i]);
                        if (error)
                            return "enumType." + error;
                    }
                }
                if (message.service != null && message.hasOwnProperty("service")) {
                    if (!Array.isArray(message.service))
                        return "service: array expected";
                    for (let i = 0; i < message.service.length; ++i) {
                        let error = $root.google.protobuf.ServiceDescriptorProto.verify(message.service[i]);
                        if (error)
                            return "service." + error;
                    }
                }
                if (message.extension != null && message.hasOwnProperty("extension")) {
                    if (!Array.isArray(message.extension))
                        return "extension: array expected";
                    for (let i = 0; i < message.extension.length; ++i) {
                        let error = $root.google.protobuf.FieldDescriptorProto.verify(message.extension[i]);
                        if (error)
                            return "extension." + error;
                    }
                }
                if (message.options != null && message.hasOwnProperty("options")) {
                    let error = $root.google.protobuf.FileOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                if (message.sourceCodeInfo != null && message.hasOwnProperty("sourceCodeInfo")) {
                    let error = $root.google.protobuf.SourceCodeInfo.verify(message.sourceCodeInfo);
                    if (error)
                        return "sourceCodeInfo." + error;
                }
                if (message.syntax != null && message.hasOwnProperty("syntax"))
                    if (!$util.isString(message.syntax))
                        return "syntax: string expected";
                return null;
            };

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
             */
            FileDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FileDescriptorProto)
                    return object;
                let message = new $root.google.protobuf.FileDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object["package"] != null)
                    message["package"] = String(object["package"]);
                if (object.dependency) {
                    if (!Array.isArray(object.dependency))
                        throw TypeError(".google.protobuf.FileDescriptorProto.dependency: array expected");
                    message.dependency = [];
                    for (let i = 0; i < object.dependency.length; ++i)
                        message.dependency[i] = String(object.dependency[i]);
                }
                if (object.publicDependency) {
                    if (!Array.isArray(object.publicDependency))
                        throw TypeError(".google.protobuf.FileDescriptorProto.publicDependency: array expected");
                    message.publicDependency = [];
                    for (let i = 0; i < object.publicDependency.length; ++i)
                        message.publicDependency[i] = object.publicDependency[i] | 0;
                }
                if (object.weakDependency) {
                    if (!Array.isArray(object.weakDependency))
                        throw TypeError(".google.protobuf.FileDescriptorProto.weakDependency: array expected");
                    message.weakDependency = [];
                    for (let i = 0; i < object.weakDependency.length; ++i)
                        message.weakDependency[i] = object.weakDependency[i] | 0;
                }
                if (object.messageType) {
                    if (!Array.isArray(object.messageType))
                        throw TypeError(".google.protobuf.FileDescriptorProto.messageType: array expected");
                    message.messageType = [];
                    for (let i = 0; i < object.messageType.length; ++i) {
                        if (typeof object.messageType[i] !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.messageType: object expected");
                        message.messageType[i] = $root.google.protobuf.DescriptorProto.fromObject(object.messageType[i]);
                    }
                }
                if (object.enumType) {
                    if (!Array.isArray(object.enumType))
                        throw TypeError(".google.protobuf.FileDescriptorProto.enumType: array expected");
                    message.enumType = [];
                    for (let i = 0; i < object.enumType.length; ++i) {
                        if (typeof object.enumType[i] !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.enumType: object expected");
                        message.enumType[i] = $root.google.protobuf.EnumDescriptorProto.fromObject(object.enumType[i]);
                    }
                }
                if (object.service) {
                    if (!Array.isArray(object.service))
                        throw TypeError(".google.protobuf.FileDescriptorProto.service: array expected");
                    message.service = [];
                    for (let i = 0; i < object.service.length; ++i) {
                        if (typeof object.service[i] !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.service: object expected");
                        message.service[i] = $root.google.protobuf.ServiceDescriptorProto.fromObject(object.service[i]);
                    }
                }
                if (object.extension) {
                    if (!Array.isArray(object.extension))
                        throw TypeError(".google.protobuf.FileDescriptorProto.extension: array expected");
                    message.extension = [];
                    for (let i = 0; i < object.extension.length; ++i) {
                        if (typeof object.extension[i] !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.extension: object expected");
                        message.extension[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.extension[i]);
                    }
                }
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.FileDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.FileOptions.fromObject(object.options);
                }
                if (object.sourceCodeInfo != null) {
                    if (typeof object.sourceCodeInfo !== "object")
                        throw TypeError(".google.protobuf.FileDescriptorProto.sourceCodeInfo: object expected");
                    message.sourceCodeInfo = $root.google.protobuf.SourceCodeInfo.fromObject(object.sourceCodeInfo);
                }
                if (object.syntax != null)
                    message.syntax = String(object.syntax);
                return message;
            };

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {google.protobuf.FileDescriptorProto} message FileDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FileDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults) {
                    object.dependency = [];
                    object.messageType = [];
                    object.enumType = [];
                    object.service = [];
                    object.extension = [];
                    object.publicDependency = [];
                    object.weakDependency = [];
                }
                if (options.defaults) {
                    object.name = "";
                    object["package"] = "";
                    object.options = null;
                    object.sourceCodeInfo = null;
                    object.syntax = "";
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message["package"] != null && message.hasOwnProperty("package"))
                    object["package"] = message["package"];
                if (message.dependency && message.dependency.length) {
                    object.dependency = [];
                    for (let j = 0; j < message.dependency.length; ++j)
                        object.dependency[j] = message.dependency[j];
                }
                if (message.messageType && message.messageType.length) {
                    object.messageType = [];
                    for (let j = 0; j < message.messageType.length; ++j)
                        object.messageType[j] = $root.google.protobuf.DescriptorProto.toObject(message.messageType[j], options);
                }
                if (message.enumType && message.enumType.length) {
                    object.enumType = [];
                    for (let j = 0; j < message.enumType.length; ++j)
                        object.enumType[j] = $root.google.protobuf.EnumDescriptorProto.toObject(message.enumType[j], options);
                }
                if (message.service && message.service.length) {
                    object.service = [];
                    for (let j = 0; j < message.service.length; ++j)
                        object.service[j] = $root.google.protobuf.ServiceDescriptorProto.toObject(message.service[j], options);
                }
                if (message.extension && message.extension.length) {
                    object.extension = [];
                    for (let j = 0; j < message.extension.length; ++j)
                        object.extension[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.extension[j], options);
                }
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.FileOptions.toObject(message.options, options);
                if (message.sourceCodeInfo != null && message.hasOwnProperty("sourceCodeInfo"))
                    object.sourceCodeInfo = $root.google.protobuf.SourceCodeInfo.toObject(message.sourceCodeInfo, options);
                if (message.publicDependency && message.publicDependency.length) {
                    object.publicDependency = [];
                    for (let j = 0; j < message.publicDependency.length; ++j)
                        object.publicDependency[j] = message.publicDependency[j];
                }
                if (message.weakDependency && message.weakDependency.length) {
                    object.weakDependency = [];
                    for (let j = 0; j < message.weakDependency.length; ++j)
                        object.weakDependency[j] = message.weakDependency[j];
                }
                if (message.syntax != null && message.hasOwnProperty("syntax"))
                    object.syntax = message.syntax;
                return object;
            };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FileDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for FileDescriptorProto
             * @function getTypeUrl
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            FileDescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.FileDescriptorProto";
            };

            return FileDescriptorProto;
        })();

        protobuf.DescriptorProto = (function() {

            /**
             * Properties of a DescriptorProto.
             * @memberof google.protobuf
             * @interface IDescriptorProto
             * @property {string|null} [name] DescriptorProto name
             * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [field] DescriptorProto field
             * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [extension] DescriptorProto extension
             * @property {Array.<google.protobuf.IDescriptorProto>|null} [nestedType] DescriptorProto nestedType
             * @property {Array.<google.protobuf.IEnumDescriptorProto>|null} [enumType] DescriptorProto enumType
             * @property {Array.<google.protobuf.DescriptorProto.IExtensionRange>|null} [extensionRange] DescriptorProto extensionRange
             * @property {Array.<google.protobuf.IOneofDescriptorProto>|null} [oneofDecl] DescriptorProto oneofDecl
             * @property {google.protobuf.IMessageOptions|null} [options] DescriptorProto options
             * @property {Array.<google.protobuf.DescriptorProto.IReservedRange>|null} [reservedRange] DescriptorProto reservedRange
             * @property {Array.<string>|null} [reservedName] DescriptorProto reservedName
             */

            /**
             * Constructs a new DescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a DescriptorProto.
             * @implements IDescriptorProto
             * @constructor
             * @param {google.protobuf.IDescriptorProto=} [properties] Properties to set
             */
            function DescriptorProto(properties) {
                this.field = [];
                this.extension = [];
                this.nestedType = [];
                this.enumType = [];
                this.extensionRange = [];
                this.oneofDecl = [];
                this.reservedRange = [];
                this.reservedName = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.name = "";

            /**
             * DescriptorProto field.
             * @member {Array.<google.protobuf.IFieldDescriptorProto>} field
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.field = $util.emptyArray;

            /**
             * DescriptorProto extension.
             * @member {Array.<google.protobuf.IFieldDescriptorProto>} extension
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.extension = $util.emptyArray;

            /**
             * DescriptorProto nestedType.
             * @member {Array.<google.protobuf.IDescriptorProto>} nestedType
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.nestedType = $util.emptyArray;

            /**
             * DescriptorProto enumType.
             * @member {Array.<google.protobuf.IEnumDescriptorProto>} enumType
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.enumType = $util.emptyArray;

            /**
             * DescriptorProto extensionRange.
             * @member {Array.<google.protobuf.DescriptorProto.IExtensionRange>} extensionRange
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.extensionRange = $util.emptyArray;

            /**
             * DescriptorProto oneofDecl.
             * @member {Array.<google.protobuf.IOneofDescriptorProto>} oneofDecl
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.oneofDecl = $util.emptyArray;

            /**
             * DescriptorProto options.
             * @member {google.protobuf.IMessageOptions|null|undefined} options
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.options = null;

            /**
             * DescriptorProto reservedRange.
             * @member {Array.<google.protobuf.DescriptorProto.IReservedRange>} reservedRange
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.reservedRange = $util.emptyArray;

            /**
             * DescriptorProto reservedName.
             * @member {Array.<string>} reservedName
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.reservedName = $util.emptyArray;

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {google.protobuf.IDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.DescriptorProto} DescriptorProto instance
             */
            DescriptorProto.create = function create(properties) {
                return new DescriptorProto(properties);
            };

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {google.protobuf.IDescriptorProto} message DescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.field != null && message.field.length)
                    for (let i = 0; i < message.field.length; ++i)
                        $root.google.protobuf.FieldDescriptorProto.encode(message.field[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.nestedType != null && message.nestedType.length)
                    for (let i = 0; i < message.nestedType.length; ++i)
                        $root.google.protobuf.DescriptorProto.encode(message.nestedType[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.enumType != null && message.enumType.length)
                    for (let i = 0; i < message.enumType.length; ++i)
                        $root.google.protobuf.EnumDescriptorProto.encode(message.enumType[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.extensionRange != null && message.extensionRange.length)
                    for (let i = 0; i < message.extensionRange.length; ++i)
                        $root.google.protobuf.DescriptorProto.ExtensionRange.encode(message.extensionRange[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.extension != null && message.extension.length)
                    for (let i = 0; i < message.extension.length; ++i)
                        $root.google.protobuf.FieldDescriptorProto.encode(message.extension[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.MessageOptions.encode(message.options, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.oneofDecl != null && message.oneofDecl.length)
                    for (let i = 0; i < message.oneofDecl.length; ++i)
                        $root.google.protobuf.OneofDescriptorProto.encode(message.oneofDecl[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.reservedRange != null && message.reservedRange.length)
                    for (let i = 0; i < message.reservedRange.length; ++i)
                        $root.google.protobuf.DescriptorProto.ReservedRange.encode(message.reservedRange[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                if (message.reservedName != null && message.reservedName.length)
                    for (let i = 0; i < message.reservedName.length; ++i)
                        writer.uint32(/* id 10, wireType 2 =*/82).string(message.reservedName[i]);
                return writer;
            };

            /**
             * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {google.protobuf.IDescriptorProto} message DescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.DescriptorProto} DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    case 2: {
                            if (!(message.field && message.field.length))
                                message.field = [];
                            message.field.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        }
                    case 6: {
                            if (!(message.extension && message.extension.length))
                                message.extension = [];
                            message.extension.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        }
                    case 3: {
                            if (!(message.nestedType && message.nestedType.length))
                                message.nestedType = [];
                            message.nestedType.push($root.google.protobuf.DescriptorProto.decode(reader, reader.uint32()));
                            break;
                        }
                    case 4: {
                            if (!(message.enumType && message.enumType.length))
                                message.enumType = [];
                            message.enumType.push($root.google.protobuf.EnumDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        }
                    case 5: {
                            if (!(message.extensionRange && message.extensionRange.length))
                                message.extensionRange = [];
                            message.extensionRange.push($root.google.protobuf.DescriptorProto.ExtensionRange.decode(reader, reader.uint32()));
                            break;
                        }
                    case 8: {
                            if (!(message.oneofDecl && message.oneofDecl.length))
                                message.oneofDecl = [];
                            message.oneofDecl.push($root.google.protobuf.OneofDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        }
                    case 7: {
                            message.options = $root.google.protobuf.MessageOptions.decode(reader, reader.uint32());
                            break;
                        }
                    case 9: {
                            if (!(message.reservedRange && message.reservedRange.length))
                                message.reservedRange = [];
                            message.reservedRange.push($root.google.protobuf.DescriptorProto.ReservedRange.decode(reader, reader.uint32()));
                            break;
                        }
                    case 10: {
                            if (!(message.reservedName && message.reservedName.length))
                                message.reservedName = [];
                            message.reservedName.push(reader.string());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.DescriptorProto} DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DescriptorProto message.
             * @function verify
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.field != null && message.hasOwnProperty("field")) {
                    if (!Array.isArray(message.field))
                        return "field: array expected";
                    for (let i = 0; i < message.field.length; ++i) {
                        let error = $root.google.protobuf.FieldDescriptorProto.verify(message.field[i]);
                        if (error)
                            return "field." + error;
                    }
                }
                if (message.extension != null && message.hasOwnProperty("extension")) {
                    if (!Array.isArray(message.extension))
                        return "extension: array expected";
                    for (let i = 0; i < message.extension.length; ++i) {
                        let error = $root.google.protobuf.FieldDescriptorProto.verify(message.extension[i]);
                        if (error)
                            return "extension." + error;
                    }
                }
                if (message.nestedType != null && message.hasOwnProperty("nestedType")) {
                    if (!Array.isArray(message.nestedType))
                        return "nestedType: array expected";
                    for (let i = 0; i < message.nestedType.length; ++i) {
                        let error = $root.google.protobuf.DescriptorProto.verify(message.nestedType[i]);
                        if (error)
                            return "nestedType." + error;
                    }
                }
                if (message.enumType != null && message.hasOwnProperty("enumType")) {
                    if (!Array.isArray(message.enumType))
                        return "enumType: array expected";
                    for (let i = 0; i < message.enumType.length; ++i) {
                        let error = $root.google.protobuf.EnumDescriptorProto.verify(message.enumType[i]);
                        if (error)
                            return "enumType." + error;
                    }
                }
                if (message.extensionRange != null && message.hasOwnProperty("extensionRange")) {
                    if (!Array.isArray(message.extensionRange))
                        return "extensionRange: array expected";
                    for (let i = 0; i < message.extensionRange.length; ++i) {
                        let error = $root.google.protobuf.DescriptorProto.ExtensionRange.verify(message.extensionRange[i]);
                        if (error)
                            return "extensionRange." + error;
                    }
                }
                if (message.oneofDecl != null && message.hasOwnProperty("oneofDecl")) {
                    if (!Array.isArray(message.oneofDecl))
                        return "oneofDecl: array expected";
                    for (let i = 0; i < message.oneofDecl.length; ++i) {
                        let error = $root.google.protobuf.OneofDescriptorProto.verify(message.oneofDecl[i]);
                        if (error)
                            return "oneofDecl." + error;
                    }
                }
                if (message.options != null && message.hasOwnProperty("options")) {
                    let error = $root.google.protobuf.MessageOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                if (message.reservedRange != null && message.hasOwnProperty("reservedRange")) {
                    if (!Array.isArray(message.reservedRange))
                        return "reservedRange: array expected";
                    for (let i = 0; i < message.reservedRange.length; ++i) {
                        let error = $root.google.protobuf.DescriptorProto.ReservedRange.verify(message.reservedRange[i]);
                        if (error)
                            return "reservedRange." + error;
                    }
                }
                if (message.reservedName != null && message.hasOwnProperty("reservedName")) {
                    if (!Array.isArray(message.reservedName))
                        return "reservedName: array expected";
                    for (let i = 0; i < message.reservedName.length; ++i)
                        if (!$util.isString(message.reservedName[i]))
                            return "reservedName: string[] expected";
                }
                return null;
            };

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.DescriptorProto} DescriptorProto
             */
            DescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.DescriptorProto)
                    return object;
                let message = new $root.google.protobuf.DescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.field) {
                    if (!Array.isArray(object.field))
                        throw TypeError(".google.protobuf.DescriptorProto.field: array expected");
                    message.field = [];
                    for (let i = 0; i < object.field.length; ++i) {
                        if (typeof object.field[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.field: object expected");
                        message.field[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.field[i]);
                    }
                }
                if (object.extension) {
                    if (!Array.isArray(object.extension))
                        throw TypeError(".google.protobuf.DescriptorProto.extension: array expected");
                    message.extension = [];
                    for (let i = 0; i < object.extension.length; ++i) {
                        if (typeof object.extension[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.extension: object expected");
                        message.extension[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.extension[i]);
                    }
                }
                if (object.nestedType) {
                    if (!Array.isArray(object.nestedType))
                        throw TypeError(".google.protobuf.DescriptorProto.nestedType: array expected");
                    message.nestedType = [];
                    for (let i = 0; i < object.nestedType.length; ++i) {
                        if (typeof object.nestedType[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.nestedType: object expected");
                        message.nestedType[i] = $root.google.protobuf.DescriptorProto.fromObject(object.nestedType[i]);
                    }
                }
                if (object.enumType) {
                    if (!Array.isArray(object.enumType))
                        throw TypeError(".google.protobuf.DescriptorProto.enumType: array expected");
                    message.enumType = [];
                    for (let i = 0; i < object.enumType.length; ++i) {
                        if (typeof object.enumType[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.enumType: object expected");
                        message.enumType[i] = $root.google.protobuf.EnumDescriptorProto.fromObject(object.enumType[i]);
                    }
                }
                if (object.extensionRange) {
                    if (!Array.isArray(object.extensionRange))
                        throw TypeError(".google.protobuf.DescriptorProto.extensionRange: array expected");
                    message.extensionRange = [];
                    for (let i = 0; i < object.extensionRange.length; ++i) {
                        if (typeof object.extensionRange[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.extensionRange: object expected");
                        message.extensionRange[i] = $root.google.protobuf.DescriptorProto.ExtensionRange.fromObject(object.extensionRange[i]);
                    }
                }
                if (object.oneofDecl) {
                    if (!Array.isArray(object.oneofDecl))
                        throw TypeError(".google.protobuf.DescriptorProto.oneofDecl: array expected");
                    message.oneofDecl = [];
                    for (let i = 0; i < object.oneofDecl.length; ++i) {
                        if (typeof object.oneofDecl[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.oneofDecl: object expected");
                        message.oneofDecl[i] = $root.google.protobuf.OneofDescriptorProto.fromObject(object.oneofDecl[i]);
                    }
                }
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.DescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.MessageOptions.fromObject(object.options);
                }
                if (object.reservedRange) {
                    if (!Array.isArray(object.reservedRange))
                        throw TypeError(".google.protobuf.DescriptorProto.reservedRange: array expected");
                    message.reservedRange = [];
                    for (let i = 0; i < object.reservedRange.length; ++i) {
                        if (typeof object.reservedRange[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.reservedRange: object expected");
                        message.reservedRange[i] = $root.google.protobuf.DescriptorProto.ReservedRange.fromObject(object.reservedRange[i]);
                    }
                }
                if (object.reservedName) {
                    if (!Array.isArray(object.reservedName))
                        throw TypeError(".google.protobuf.DescriptorProto.reservedName: array expected");
                    message.reservedName = [];
                    for (let i = 0; i < object.reservedName.length; ++i)
                        message.reservedName[i] = String(object.reservedName[i]);
                }
                return message;
            };

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {google.protobuf.DescriptorProto} message DescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults) {
                    object.field = [];
                    object.nestedType = [];
                    object.enumType = [];
                    object.extensionRange = [];
                    object.extension = [];
                    object.oneofDecl = [];
                    object.reservedRange = [];
                    object.reservedName = [];
                }
                if (options.defaults) {
                    object.name = "";
                    object.options = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.field && message.field.length) {
                    object.field = [];
                    for (let j = 0; j < message.field.length; ++j)
                        object.field[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.field[j], options);
                }
                if (message.nestedType && message.nestedType.length) {
                    object.nestedType = [];
                    for (let j = 0; j < message.nestedType.length; ++j)
                        object.nestedType[j] = $root.google.protobuf.DescriptorProto.toObject(message.nestedType[j], options);
                }
                if (message.enumType && message.enumType.length) {
                    object.enumType = [];
                    for (let j = 0; j < message.enumType.length; ++j)
                        object.enumType[j] = $root.google.protobuf.EnumDescriptorProto.toObject(message.enumType[j], options);
                }
                if (message.extensionRange && message.extensionRange.length) {
                    object.extensionRange = [];
                    for (let j = 0; j < message.extensionRange.length; ++j)
                        object.extensionRange[j] = $root.google.protobuf.DescriptorProto.ExtensionRange.toObject(message.extensionRange[j], options);
                }
                if (message.extension && message.extension.length) {
                    object.extension = [];
                    for (let j = 0; j < message.extension.length; ++j)
                        object.extension[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.extension[j], options);
                }
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.MessageOptions.toObject(message.options, options);
                if (message.oneofDecl && message.oneofDecl.length) {
                    object.oneofDecl = [];
                    for (let j = 0; j < message.oneofDecl.length; ++j)
                        object.oneofDecl[j] = $root.google.protobuf.OneofDescriptorProto.toObject(message.oneofDecl[j], options);
                }
                if (message.reservedRange && message.reservedRange.length) {
                    object.reservedRange = [];
                    for (let j = 0; j < message.reservedRange.length; ++j)
                        object.reservedRange[j] = $root.google.protobuf.DescriptorProto.ReservedRange.toObject(message.reservedRange[j], options);
                }
                if (message.reservedName && message.reservedName.length) {
                    object.reservedName = [];
                    for (let j = 0; j < message.reservedName.length; ++j)
                        object.reservedName[j] = message.reservedName[j];
                }
                return object;
            };

            /**
             * Converts this DescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.DescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for DescriptorProto
             * @function getTypeUrl
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            DescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.DescriptorProto";
            };

            DescriptorProto.ExtensionRange = (function() {

                /**
                 * Properties of an ExtensionRange.
                 * @memberof google.protobuf.DescriptorProto
                 * @interface IExtensionRange
                 * @property {number|null} [start] ExtensionRange start
                 * @property {number|null} [end] ExtensionRange end
                 */

                /**
                 * Constructs a new ExtensionRange.
                 * @memberof google.protobuf.DescriptorProto
                 * @classdesc Represents an ExtensionRange.
                 * @implements IExtensionRange
                 * @constructor
                 * @param {google.protobuf.DescriptorProto.IExtensionRange=} [properties] Properties to set
                 */
                function ExtensionRange(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ExtensionRange start.
                 * @member {number} start
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @instance
                 */
                ExtensionRange.prototype.start = 0;

                /**
                 * ExtensionRange end.
                 * @member {number} end
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @instance
                 */
                ExtensionRange.prototype.end = 0;

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.IExtensionRange=} [properties] Properties to set
                 * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange instance
                 */
                ExtensionRange.create = function create(properties) {
                    return new ExtensionRange(properties);
                };

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.IExtensionRange} message ExtensionRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ExtensionRange.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.start != null && Object.hasOwnProperty.call(message, "start"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                    if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
                    return writer;
                };

                /**
                 * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.IExtensionRange} message ExtensionRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ExtensionRange.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ExtensionRange.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto.ExtensionRange();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.start = reader.int32();
                                break;
                            }
                        case 2: {
                                message.end = reader.int32();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ExtensionRange.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an ExtensionRange message.
                 * @function verify
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ExtensionRange.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.start != null && message.hasOwnProperty("start"))
                        if (!$util.isInteger(message.start))
                            return "start: integer expected";
                    if (message.end != null && message.hasOwnProperty("end"))
                        if (!$util.isInteger(message.end))
                            return "end: integer expected";
                    return null;
                };

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                 */
                ExtensionRange.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.DescriptorProto.ExtensionRange)
                        return object;
                    let message = new $root.google.protobuf.DescriptorProto.ExtensionRange();
                    if (object.start != null)
                        message.start = object.start | 0;
                    if (object.end != null)
                        message.end = object.end | 0;
                    return message;
                };

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.ExtensionRange} message ExtensionRange
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ExtensionRange.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.start = 0;
                        object.end = 0;
                    }
                    if (message.start != null && message.hasOwnProperty("start"))
                        object.start = message.start;
                    if (message.end != null && message.hasOwnProperty("end"))
                        object.end = message.end;
                    return object;
                };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ExtensionRange.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for ExtensionRange
                 * @function getTypeUrl
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ExtensionRange.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.DescriptorProto.ExtensionRange";
                };

                return ExtensionRange;
            })();

            DescriptorProto.ReservedRange = (function() {

                /**
                 * Properties of a ReservedRange.
                 * @memberof google.protobuf.DescriptorProto
                 * @interface IReservedRange
                 * @property {number|null} [start] ReservedRange start
                 * @property {number|null} [end] ReservedRange end
                 */

                /**
                 * Constructs a new ReservedRange.
                 * @memberof google.protobuf.DescriptorProto
                 * @classdesc Represents a ReservedRange.
                 * @implements IReservedRange
                 * @constructor
                 * @param {google.protobuf.DescriptorProto.IReservedRange=} [properties] Properties to set
                 */
                function ReservedRange(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ReservedRange start.
                 * @member {number} start
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @instance
                 */
                ReservedRange.prototype.start = 0;

                /**
                 * ReservedRange end.
                 * @member {number} end
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @instance
                 */
                ReservedRange.prototype.end = 0;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.IReservedRange=} [properties] Properties to set
                 * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange instance
                 */
                ReservedRange.create = function create(properties) {
                    return new ReservedRange(properties);
                };

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.IReservedRange} message ReservedRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReservedRange.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.start != null && Object.hasOwnProperty.call(message, "start"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                    if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
                    return writer;
                };

                /**
                 * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.IReservedRange} message ReservedRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReservedRange.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReservedRange.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto.ReservedRange();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.start = reader.int32();
                                break;
                            }
                        case 2: {
                                message.end = reader.int32();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReservedRange.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ReservedRange message.
                 * @function verify
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ReservedRange.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.start != null && message.hasOwnProperty("start"))
                        if (!$util.isInteger(message.start))
                            return "start: integer expected";
                    if (message.end != null && message.hasOwnProperty("end"))
                        if (!$util.isInteger(message.end))
                            return "end: integer expected";
                    return null;
                };

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                 */
                ReservedRange.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.DescriptorProto.ReservedRange)
                        return object;
                    let message = new $root.google.protobuf.DescriptorProto.ReservedRange();
                    if (object.start != null)
                        message.start = object.start | 0;
                    if (object.end != null)
                        message.end = object.end | 0;
                    return message;
                };

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.ReservedRange} message ReservedRange
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ReservedRange.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.start = 0;
                        object.end = 0;
                    }
                    if (message.start != null && message.hasOwnProperty("start"))
                        object.start = message.start;
                    if (message.end != null && message.hasOwnProperty("end"))
                        object.end = message.end;
                    return object;
                };

                /**
                 * Converts this ReservedRange to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ReservedRange.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for ReservedRange
                 * @function getTypeUrl
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ReservedRange.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.DescriptorProto.ReservedRange";
                };

                return ReservedRange;
            })();

            return DescriptorProto;
        })();

        protobuf.FieldDescriptorProto = (function() {

            /**
             * Properties of a FieldDescriptorProto.
             * @memberof google.protobuf
             * @interface IFieldDescriptorProto
             * @property {string|null} [name] FieldDescriptorProto name
             * @property {number|null} [number] FieldDescriptorProto number
             * @property {google.protobuf.FieldDescriptorProto.Label|null} [label] FieldDescriptorProto label
             * @property {google.protobuf.FieldDescriptorProto.Type|null} [type] FieldDescriptorProto type
             * @property {string|null} [typeName] FieldDescriptorProto typeName
             * @property {string|null} [extendee] FieldDescriptorProto extendee
             * @property {string|null} [defaultValue] FieldDescriptorProto defaultValue
             * @property {number|null} [oneofIndex] FieldDescriptorProto oneofIndex
             * @property {string|null} [jsonName] FieldDescriptorProto jsonName
             * @property {google.protobuf.IFieldOptions|null} [options] FieldDescriptorProto options
             */

            /**
             * Constructs a new FieldDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a FieldDescriptorProto.
             * @implements IFieldDescriptorProto
             * @constructor
             * @param {google.protobuf.IFieldDescriptorProto=} [properties] Properties to set
             */
            function FieldDescriptorProto(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FieldDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.name = "";

            /**
             * FieldDescriptorProto number.
             * @member {number} number
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.number = 0;

            /**
             * FieldDescriptorProto label.
             * @member {google.protobuf.FieldDescriptorProto.Label} label
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.label = 1;

            /**
             * FieldDescriptorProto type.
             * @member {google.protobuf.FieldDescriptorProto.Type} type
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.type = 1;

            /**
             * FieldDescriptorProto typeName.
             * @member {string} typeName
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.typeName = "";

            /**
             * FieldDescriptorProto extendee.
             * @member {string} extendee
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.extendee = "";

            /**
             * FieldDescriptorProto defaultValue.
             * @member {string} defaultValue
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.defaultValue = "";

            /**
             * FieldDescriptorProto oneofIndex.
             * @member {number} oneofIndex
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.oneofIndex = 0;

            /**
             * FieldDescriptorProto jsonName.
             * @member {string} jsonName
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.jsonName = "";

            /**
             * FieldDescriptorProto options.
             * @member {google.protobuf.IFieldOptions|null|undefined} options
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.options = null;

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {google.protobuf.IFieldDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto instance
             */
            FieldDescriptorProto.create = function create(properties) {
                return new FieldDescriptorProto(properties);
            };

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {google.protobuf.IFieldDescriptorProto} message FieldDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FieldDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.extendee != null && Object.hasOwnProperty.call(message, "extendee"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.extendee);
                if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.number);
                if (message.label != null && Object.hasOwnProperty.call(message, "label"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.label);
                if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.type);
                if (message.typeName != null && Object.hasOwnProperty.call(message, "typeName"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.typeName);
                if (message.defaultValue != null && Object.hasOwnProperty.call(message, "defaultValue"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.defaultValue);
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.FieldOptions.encode(message.options, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.oneofIndex != null && Object.hasOwnProperty.call(message, "oneofIndex"))
                    writer.uint32(/* id 9, wireType 0 =*/72).int32(message.oneofIndex);
                if (message.jsonName != null && Object.hasOwnProperty.call(message, "jsonName"))
                    writer.uint32(/* id 10, wireType 2 =*/82).string(message.jsonName);
                return writer;
            };

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {google.protobuf.IFieldDescriptorProto} message FieldDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FieldDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FieldDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FieldDescriptorProto();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    case 3: {
                            message.number = reader.int32();
                            break;
                        }
                    case 4: {
                            message.label = reader.int32();
                            break;
                        }
                    case 5: {
                            message.type = reader.int32();
                            break;
                        }
                    case 6: {
                            message.typeName = reader.string();
                            break;
                        }
                    case 2: {
                            message.extendee = reader.string();
                            break;
                        }
                    case 7: {
                            message.defaultValue = reader.string();
                            break;
                        }
                    case 9: {
                            message.oneofIndex = reader.int32();
                            break;
                        }
                    case 10: {
                            message.jsonName = reader.string();
                            break;
                        }
                    case 8: {
                            message.options = $root.google.protobuf.FieldOptions.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FieldDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FieldDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FieldDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.number != null && message.hasOwnProperty("number"))
                    if (!$util.isInteger(message.number))
                        return "number: integer expected";
                if (message.label != null && message.hasOwnProperty("label"))
                    switch (message.label) {
                    default:
                        return "label: enum value expected";
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                if (message.type != null && message.hasOwnProperty("type"))
                    switch (message.type) {
                    default:
                        return "type: enum value expected";
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                    case 13:
                    case 14:
                    case 15:
                    case 16:
                    case 17:
                    case 18:
                        break;
                    }
                if (message.typeName != null && message.hasOwnProperty("typeName"))
                    if (!$util.isString(message.typeName))
                        return "typeName: string expected";
                if (message.extendee != null && message.hasOwnProperty("extendee"))
                    if (!$util.isString(message.extendee))
                        return "extendee: string expected";
                if (message.defaultValue != null && message.hasOwnProperty("defaultValue"))
                    if (!$util.isString(message.defaultValue))
                        return "defaultValue: string expected";
                if (message.oneofIndex != null && message.hasOwnProperty("oneofIndex"))
                    if (!$util.isInteger(message.oneofIndex))
                        return "oneofIndex: integer expected";
                if (message.jsonName != null && message.hasOwnProperty("jsonName"))
                    if (!$util.isString(message.jsonName))
                        return "jsonName: string expected";
                if (message.options != null && message.hasOwnProperty("options")) {
                    let error = $root.google.protobuf.FieldOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                return null;
            };

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
             */
            FieldDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FieldDescriptorProto)
                    return object;
                let message = new $root.google.protobuf.FieldDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.number != null)
                    message.number = object.number | 0;
                switch (object.label) {
                default:
                    if (typeof object.label === "number") {
                        message.label = object.label;
                        break;
                    }
                    break;
                case "LABEL_OPTIONAL":
                case 1:
                    message.label = 1;
                    break;
                case "LABEL_REQUIRED":
                case 2:
                    message.label = 2;
                    break;
                case "LABEL_REPEATED":
                case 3:
                    message.label = 3;
                    break;
                }
                switch (object.type) {
                default:
                    if (typeof object.type === "number") {
                        message.type = object.type;
                        break;
                    }
                    break;
                case "TYPE_DOUBLE":
                case 1:
                    message.type = 1;
                    break;
                case "TYPE_FLOAT":
                case 2:
                    message.type = 2;
                    break;
                case "TYPE_INT64":
                case 3:
                    message.type = 3;
                    break;
                case "TYPE_UINT64":
                case 4:
                    message.type = 4;
                    break;
                case "TYPE_INT32":
                case 5:
                    message.type = 5;
                    break;
                case "TYPE_FIXED64":
                case 6:
                    message.type = 6;
                    break;
                case "TYPE_FIXED32":
                case 7:
                    message.type = 7;
                    break;
                case "TYPE_BOOL":
                case 8:
                    message.type = 8;
                    break;
                case "TYPE_STRING":
                case 9:
                    message.type = 9;
                    break;
                case "TYPE_GROUP":
                case 10:
                    message.type = 10;
                    break;
                case "TYPE_MESSAGE":
                case 11:
                    message.type = 11;
                    break;
                case "TYPE_BYTES":
                case 12:
                    message.type = 12;
                    break;
                case "TYPE_UINT32":
                case 13:
                    message.type = 13;
                    break;
                case "TYPE_ENUM":
                case 14:
                    message.type = 14;
                    break;
                case "TYPE_SFIXED32":
                case 15:
                    message.type = 15;
                    break;
                case "TYPE_SFIXED64":
                case 16:
                    message.type = 16;
                    break;
                case "TYPE_SINT32":
                case 17:
                    message.type = 17;
                    break;
                case "TYPE_SINT64":
                case 18:
                    message.type = 18;
                    break;
                }
                if (object.typeName != null)
                    message.typeName = String(object.typeName);
                if (object.extendee != null)
                    message.extendee = String(object.extendee);
                if (object.defaultValue != null)
                    message.defaultValue = String(object.defaultValue);
                if (object.oneofIndex != null)
                    message.oneofIndex = object.oneofIndex | 0;
                if (object.jsonName != null)
                    message.jsonName = String(object.jsonName);
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.FieldDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.FieldOptions.fromObject(object.options);
                }
                return message;
            };

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {google.protobuf.FieldDescriptorProto} message FieldDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FieldDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.name = "";
                    object.extendee = "";
                    object.number = 0;
                    object.label = options.enums === String ? "LABEL_OPTIONAL" : 1;
                    object.type = options.enums === String ? "TYPE_DOUBLE" : 1;
                    object.typeName = "";
                    object.defaultValue = "";
                    object.options = null;
                    object.oneofIndex = 0;
                    object.jsonName = "";
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.extendee != null && message.hasOwnProperty("extendee"))
                    object.extendee = message.extendee;
                if (message.number != null && message.hasOwnProperty("number"))
                    object.number = message.number;
                if (message.label != null && message.hasOwnProperty("label"))
                    object.label = options.enums === String ? $root.google.protobuf.FieldDescriptorProto.Label[message.label] === undefined ? message.label : $root.google.protobuf.FieldDescriptorProto.Label[message.label] : message.label;
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = options.enums === String ? $root.google.protobuf.FieldDescriptorProto.Type[message.type] === undefined ? message.type : $root.google.protobuf.FieldDescriptorProto.Type[message.type] : message.type;
                if (message.typeName != null && message.hasOwnProperty("typeName"))
                    object.typeName = message.typeName;
                if (message.defaultValue != null && message.hasOwnProperty("defaultValue"))
                    object.defaultValue = message.defaultValue;
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.FieldOptions.toObject(message.options, options);
                if (message.oneofIndex != null && message.hasOwnProperty("oneofIndex"))
                    object.oneofIndex = message.oneofIndex;
                if (message.jsonName != null && message.hasOwnProperty("jsonName"))
                    object.jsonName = message.jsonName;
                return object;
            };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FieldDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for FieldDescriptorProto
             * @function getTypeUrl
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            FieldDescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.FieldDescriptorProto";
            };

            /**
             * Type enum.
             * @name google.protobuf.FieldDescriptorProto.Type
             * @enum {number}
             * @property {number} TYPE_DOUBLE=1 TYPE_DOUBLE value
             * @property {number} TYPE_FLOAT=2 TYPE_FLOAT value
             * @property {number} TYPE_INT64=3 TYPE_INT64 value
             * @property {number} TYPE_UINT64=4 TYPE_UINT64 value
             * @property {number} TYPE_INT32=5 TYPE_INT32 value
             * @property {number} TYPE_FIXED64=6 TYPE_FIXED64 value
             * @property {number} TYPE_FIXED32=7 TYPE_FIXED32 value
             * @property {number} TYPE_BOOL=8 TYPE_BOOL value
             * @property {number} TYPE_STRING=9 TYPE_STRING value
             * @property {number} TYPE_GROUP=10 TYPE_GROUP value
             * @property {number} TYPE_MESSAGE=11 TYPE_MESSAGE value
             * @property {number} TYPE_BYTES=12 TYPE_BYTES value
             * @property {number} TYPE_UINT32=13 TYPE_UINT32 value
             * @property {number} TYPE_ENUM=14 TYPE_ENUM value
             * @property {number} TYPE_SFIXED32=15 TYPE_SFIXED32 value
             * @property {number} TYPE_SFIXED64=16 TYPE_SFIXED64 value
             * @property {number} TYPE_SINT32=17 TYPE_SINT32 value
             * @property {number} TYPE_SINT64=18 TYPE_SINT64 value
             */
            FieldDescriptorProto.Type = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "TYPE_DOUBLE"] = 1;
                values[valuesById[2] = "TYPE_FLOAT"] = 2;
                values[valuesById[3] = "TYPE_INT64"] = 3;
                values[valuesById[4] = "TYPE_UINT64"] = 4;
                values[valuesById[5] = "TYPE_INT32"] = 5;
                values[valuesById[6] = "TYPE_FIXED64"] = 6;
                values[valuesById[7] = "TYPE_FIXED32"] = 7;
                values[valuesById[8] = "TYPE_BOOL"] = 8;
                values[valuesById[9] = "TYPE_STRING"] = 9;
                values[valuesById[10] = "TYPE_GROUP"] = 10;
                values[valuesById[11] = "TYPE_MESSAGE"] = 11;
                values[valuesById[12] = "TYPE_BYTES"] = 12;
                values[valuesById[13] = "TYPE_UINT32"] = 13;
                values[valuesById[14] = "TYPE_ENUM"] = 14;
                values[valuesById[15] = "TYPE_SFIXED32"] = 15;
                values[valuesById[16] = "TYPE_SFIXED64"] = 16;
                values[valuesById[17] = "TYPE_SINT32"] = 17;
                values[valuesById[18] = "TYPE_SINT64"] = 18;
                return values;
            })();

            /**
             * Label enum.
             * @name google.protobuf.FieldDescriptorProto.Label
             * @enum {number}
             * @property {number} LABEL_OPTIONAL=1 LABEL_OPTIONAL value
             * @property {number} LABEL_REQUIRED=2 LABEL_REQUIRED value
             * @property {number} LABEL_REPEATED=3 LABEL_REPEATED value
             */
            FieldDescriptorProto.Label = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "LABEL_OPTIONAL"] = 1;
                values[valuesById[2] = "LABEL_REQUIRED"] = 2;
                values[valuesById[3] = "LABEL_REPEATED"] = 3;
                return values;
            })();

            return FieldDescriptorProto;
        })();

        protobuf.OneofDescriptorProto = (function() {

            /**
             * Properties of an OneofDescriptorProto.
             * @memberof google.protobuf
             * @interface IOneofDescriptorProto
             * @property {string|null} [name] OneofDescriptorProto name
             * @property {google.protobuf.IOneofOptions|null} [options] OneofDescriptorProto options
             */

            /**
             * Constructs a new OneofDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents an OneofDescriptorProto.
             * @implements IOneofDescriptorProto
             * @constructor
             * @param {google.protobuf.IOneofDescriptorProto=} [properties] Properties to set
             */
            function OneofDescriptorProto(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OneofDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.OneofDescriptorProto
             * @instance
             */
            OneofDescriptorProto.prototype.name = "";

            /**
             * OneofDescriptorProto options.
             * @member {google.protobuf.IOneofOptions|null|undefined} options
             * @memberof google.protobuf.OneofDescriptorProto
             * @instance
             */
            OneofDescriptorProto.prototype.options = null;

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {google.protobuf.IOneofDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto instance
             */
            OneofDescriptorProto.create = function create(properties) {
                return new OneofDescriptorProto(properties);
            };

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {google.protobuf.IOneofDescriptorProto} message OneofDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OneofDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.OneofOptions.encode(message.options, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {google.protobuf.IOneofDescriptorProto} message OneofDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OneofDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OneofDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.OneofDescriptorProto();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    case 2: {
                            message.options = $root.google.protobuf.OneofOptions.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OneofDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an OneofDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OneofDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.options != null && message.hasOwnProperty("options")) {
                    let error = $root.google.protobuf.OneofOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                return null;
            };

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
             */
            OneofDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.OneofDescriptorProto)
                    return object;
                let message = new $root.google.protobuf.OneofDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.OneofDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.OneofOptions.fromObject(object.options);
                }
                return message;
            };

            /**
             * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {google.protobuf.OneofDescriptorProto} message OneofDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OneofDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.name = "";
                    object.options = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.OneofOptions.toObject(message.options, options);
                return object;
            };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.OneofDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OneofDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for OneofDescriptorProto
             * @function getTypeUrl
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            OneofDescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.OneofDescriptorProto";
            };

            return OneofDescriptorProto;
        })();

        protobuf.EnumDescriptorProto = (function() {

            /**
             * Properties of an EnumDescriptorProto.
             * @memberof google.protobuf
             * @interface IEnumDescriptorProto
             * @property {string|null} [name] EnumDescriptorProto name
             * @property {Array.<google.protobuf.IEnumValueDescriptorProto>|null} [value] EnumDescriptorProto value
             * @property {google.protobuf.IEnumOptions|null} [options] EnumDescriptorProto options
             */

            /**
             * Constructs a new EnumDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents an EnumDescriptorProto.
             * @implements IEnumDescriptorProto
             * @constructor
             * @param {google.protobuf.IEnumDescriptorProto=} [properties] Properties to set
             */
            function EnumDescriptorProto(properties) {
                this.value = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EnumDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.EnumDescriptorProto
             * @instance
             */
            EnumDescriptorProto.prototype.name = "";

            /**
             * EnumDescriptorProto value.
             * @member {Array.<google.protobuf.IEnumValueDescriptorProto>} value
             * @memberof google.protobuf.EnumDescriptorProto
             * @instance
             */
            EnumDescriptorProto.prototype.value = $util.emptyArray;

            /**
             * EnumDescriptorProto options.
             * @member {google.protobuf.IEnumOptions|null|undefined} options
             * @memberof google.protobuf.EnumDescriptorProto
             * @instance
             */
            EnumDescriptorProto.prototype.options = null;

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {google.protobuf.IEnumDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto instance
             */
            EnumDescriptorProto.create = function create(properties) {
                return new EnumDescriptorProto(properties);
            };

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {google.protobuf.IEnumDescriptorProto} message EnumDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.value != null && message.value.length)
                    for (let i = 0; i < message.value.length; ++i)
                        $root.google.protobuf.EnumValueDescriptorProto.encode(message.value[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.EnumOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {google.protobuf.IEnumDescriptorProto} message EnumDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumDescriptorProto();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    case 2: {
                            if (!(message.value && message.value.length))
                                message.value = [];
                            message.value.push($root.google.protobuf.EnumValueDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        }
                    case 3: {
                            message.options = $root.google.protobuf.EnumOptions.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EnumDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EnumDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.value != null && message.hasOwnProperty("value")) {
                    if (!Array.isArray(message.value))
                        return "value: array expected";
                    for (let i = 0; i < message.value.length; ++i) {
                        let error = $root.google.protobuf.EnumValueDescriptorProto.verify(message.value[i]);
                        if (error)
                            return "value." + error;
                    }
                }
                if (message.options != null && message.hasOwnProperty("options")) {
                    let error = $root.google.protobuf.EnumOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                return null;
            };

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
             */
            EnumDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.EnumDescriptorProto)
                    return object;
                let message = new $root.google.protobuf.EnumDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.value) {
                    if (!Array.isArray(object.value))
                        throw TypeError(".google.protobuf.EnumDescriptorProto.value: array expected");
                    message.value = [];
                    for (let i = 0; i < object.value.length; ++i) {
                        if (typeof object.value[i] !== "object")
                            throw TypeError(".google.protobuf.EnumDescriptorProto.value: object expected");
                        message.value[i] = $root.google.protobuf.EnumValueDescriptorProto.fromObject(object.value[i]);
                    }
                }
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.EnumDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.EnumOptions.fromObject(object.options);
                }
                return message;
            };

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {google.protobuf.EnumDescriptorProto} message EnumDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.value = [];
                if (options.defaults) {
                    object.name = "";
                    object.options = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.value && message.value.length) {
                    object.value = [];
                    for (let j = 0; j < message.value.length; ++j)
                        object.value[j] = $root.google.protobuf.EnumValueDescriptorProto.toObject(message.value[j], options);
                }
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.EnumOptions.toObject(message.options, options);
                return object;
            };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.EnumDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EnumDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for EnumDescriptorProto
             * @function getTypeUrl
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            EnumDescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.EnumDescriptorProto";
            };

            return EnumDescriptorProto;
        })();

        protobuf.EnumValueDescriptorProto = (function() {

            /**
             * Properties of an EnumValueDescriptorProto.
             * @memberof google.protobuf
             * @interface IEnumValueDescriptorProto
             * @property {string|null} [name] EnumValueDescriptorProto name
             * @property {number|null} [number] EnumValueDescriptorProto number
             * @property {google.protobuf.IEnumValueOptions|null} [options] EnumValueDescriptorProto options
             */

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents an EnumValueDescriptorProto.
             * @implements IEnumValueDescriptorProto
             * @constructor
             * @param {google.protobuf.IEnumValueDescriptorProto=} [properties] Properties to set
             */
            function EnumValueDescriptorProto(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EnumValueDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @instance
             */
            EnumValueDescriptorProto.prototype.name = "";

            /**
             * EnumValueDescriptorProto number.
             * @member {number} number
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @instance
             */
            EnumValueDescriptorProto.prototype.number = 0;

            /**
             * EnumValueDescriptorProto options.
             * @member {google.protobuf.IEnumValueOptions|null|undefined} options
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @instance
             */
            EnumValueDescriptorProto.prototype.options = null;

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {google.protobuf.IEnumValueDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto instance
             */
            EnumValueDescriptorProto.create = function create(properties) {
                return new EnumValueDescriptorProto(properties);
            };

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {google.protobuf.IEnumValueDescriptorProto} message EnumValueDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumValueDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.number);
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.EnumValueOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {google.protobuf.IEnumValueDescriptorProto} message EnumValueDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumValueDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumValueDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumValueDescriptorProto();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    case 2: {
                            message.number = reader.int32();
                            break;
                        }
                    case 3: {
                            message.options = $root.google.protobuf.EnumValueOptions.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumValueDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EnumValueDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.number != null && message.hasOwnProperty("number"))
                    if (!$util.isInteger(message.number))
                        return "number: integer expected";
                if (message.options != null && message.hasOwnProperty("options")) {
                    let error = $root.google.protobuf.EnumValueOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                return null;
            };

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
             */
            EnumValueDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.EnumValueDescriptorProto)
                    return object;
                let message = new $root.google.protobuf.EnumValueDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.number != null)
                    message.number = object.number | 0;
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.EnumValueDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.EnumValueOptions.fromObject(object.options);
                }
                return message;
            };

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {google.protobuf.EnumValueDescriptorProto} message EnumValueDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumValueDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.name = "";
                    object.number = 0;
                    object.options = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.number != null && message.hasOwnProperty("number"))
                    object.number = message.number;
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.EnumValueOptions.toObject(message.options, options);
                return object;
            };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EnumValueDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for EnumValueDescriptorProto
             * @function getTypeUrl
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            EnumValueDescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.EnumValueDescriptorProto";
            };

            return EnumValueDescriptorProto;
        })();

        protobuf.ServiceDescriptorProto = (function() {

            /**
             * Properties of a ServiceDescriptorProto.
             * @memberof google.protobuf
             * @interface IServiceDescriptorProto
             * @property {string|null} [name] ServiceDescriptorProto name
             * @property {Array.<google.protobuf.IMethodDescriptorProto>|null} [method] ServiceDescriptorProto method
             * @property {google.protobuf.IServiceOptions|null} [options] ServiceDescriptorProto options
             */

            /**
             * Constructs a new ServiceDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a ServiceDescriptorProto.
             * @implements IServiceDescriptorProto
             * @constructor
             * @param {google.protobuf.IServiceDescriptorProto=} [properties] Properties to set
             */
            function ServiceDescriptorProto(properties) {
                this.method = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ServiceDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.ServiceDescriptorProto
             * @instance
             */
            ServiceDescriptorProto.prototype.name = "";

            /**
             * ServiceDescriptorProto method.
             * @member {Array.<google.protobuf.IMethodDescriptorProto>} method
             * @memberof google.protobuf.ServiceDescriptorProto
             * @instance
             */
            ServiceDescriptorProto.prototype.method = $util.emptyArray;

            /**
             * ServiceDescriptorProto options.
             * @member {google.protobuf.IServiceOptions|null|undefined} options
             * @memberof google.protobuf.ServiceDescriptorProto
             * @instance
             */
            ServiceDescriptorProto.prototype.options = null;

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {google.protobuf.IServiceDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto instance
             */
            ServiceDescriptorProto.create = function create(properties) {
                return new ServiceDescriptorProto(properties);
            };

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {google.protobuf.IServiceDescriptorProto} message ServiceDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.method != null && message.method.length)
                    for (let i = 0; i < message.method.length; ++i)
                        $root.google.protobuf.MethodDescriptorProto.encode(message.method[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.ServiceOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {google.protobuf.IServiceDescriptorProto} message ServiceDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ServiceDescriptorProto();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    case 2: {
                            if (!(message.method && message.method.length))
                                message.method = [];
                            message.method.push($root.google.protobuf.MethodDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        }
                    case 3: {
                            message.options = $root.google.protobuf.ServiceOptions.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ServiceDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ServiceDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.method != null && message.hasOwnProperty("method")) {
                    if (!Array.isArray(message.method))
                        return "method: array expected";
                    for (let i = 0; i < message.method.length; ++i) {
                        let error = $root.google.protobuf.MethodDescriptorProto.verify(message.method[i]);
                        if (error)
                            return "method." + error;
                    }
                }
                if (message.options != null && message.hasOwnProperty("options")) {
                    let error = $root.google.protobuf.ServiceOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                return null;
            };

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
             */
            ServiceDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.ServiceDescriptorProto)
                    return object;
                let message = new $root.google.protobuf.ServiceDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.method) {
                    if (!Array.isArray(object.method))
                        throw TypeError(".google.protobuf.ServiceDescriptorProto.method: array expected");
                    message.method = [];
                    for (let i = 0; i < object.method.length; ++i) {
                        if (typeof object.method[i] !== "object")
                            throw TypeError(".google.protobuf.ServiceDescriptorProto.method: object expected");
                        message.method[i] = $root.google.protobuf.MethodDescriptorProto.fromObject(object.method[i]);
                    }
                }
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.ServiceDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.ServiceOptions.fromObject(object.options);
                }
                return message;
            };

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {google.protobuf.ServiceDescriptorProto} message ServiceDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ServiceDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.method = [];
                if (options.defaults) {
                    object.name = "";
                    object.options = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.method && message.method.length) {
                    object.method = [];
                    for (let j = 0; j < message.method.length; ++j)
                        object.method[j] = $root.google.protobuf.MethodDescriptorProto.toObject(message.method[j], options);
                }
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.ServiceOptions.toObject(message.options, options);
                return object;
            };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.ServiceDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ServiceDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ServiceDescriptorProto
             * @function getTypeUrl
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ServiceDescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.ServiceDescriptorProto";
            };

            return ServiceDescriptorProto;
        })();

        protobuf.MethodDescriptorProto = (function() {

            /**
             * Properties of a MethodDescriptorProto.
             * @memberof google.protobuf
             * @interface IMethodDescriptorProto
             * @property {string|null} [name] MethodDescriptorProto name
             * @property {string|null} [inputType] MethodDescriptorProto inputType
             * @property {string|null} [outputType] MethodDescriptorProto outputType
             * @property {google.protobuf.IMethodOptions|null} [options] MethodDescriptorProto options
             * @property {boolean|null} [clientStreaming] MethodDescriptorProto clientStreaming
             * @property {boolean|null} [serverStreaming] MethodDescriptorProto serverStreaming
             */

            /**
             * Constructs a new MethodDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a MethodDescriptorProto.
             * @implements IMethodDescriptorProto
             * @constructor
             * @param {google.protobuf.IMethodDescriptorProto=} [properties] Properties to set
             */
            function MethodDescriptorProto(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MethodDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.name = "";

            /**
             * MethodDescriptorProto inputType.
             * @member {string} inputType
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.inputType = "";

            /**
             * MethodDescriptorProto outputType.
             * @member {string} outputType
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.outputType = "";

            /**
             * MethodDescriptorProto options.
             * @member {google.protobuf.IMethodOptions|null|undefined} options
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.options = null;

            /**
             * MethodDescriptorProto clientStreaming.
             * @member {boolean} clientStreaming
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.clientStreaming = false;

            /**
             * MethodDescriptorProto serverStreaming.
             * @member {boolean} serverStreaming
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.serverStreaming = false;

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {google.protobuf.IMethodDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto instance
             */
            MethodDescriptorProto.create = function create(properties) {
                return new MethodDescriptorProto(properties);
            };

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {google.protobuf.IMethodDescriptorProto} message MethodDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MethodDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.inputType != null && Object.hasOwnProperty.call(message, "inputType"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.inputType);
                if (message.outputType != null && Object.hasOwnProperty.call(message, "outputType"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.outputType);
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.MethodOptions.encode(message.options, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.clientStreaming != null && Object.hasOwnProperty.call(message, "clientStreaming"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.clientStreaming);
                if (message.serverStreaming != null && Object.hasOwnProperty.call(message, "serverStreaming"))
                    writer.uint32(/* id 6, wireType 0 =*/48).bool(message.serverStreaming);
                return writer;
            };

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {google.protobuf.IMethodDescriptorProto} message MethodDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MethodDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MethodDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MethodDescriptorProto();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    case 2: {
                            message.inputType = reader.string();
                            break;
                        }
                    case 3: {
                            message.outputType = reader.string();
                            break;
                        }
                    case 4: {
                            message.options = $root.google.protobuf.MethodOptions.decode(reader, reader.uint32());
                            break;
                        }
                    case 5: {
                            message.clientStreaming = reader.bool();
                            break;
                        }
                    case 6: {
                            message.serverStreaming = reader.bool();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MethodDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MethodDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MethodDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.inputType != null && message.hasOwnProperty("inputType"))
                    if (!$util.isString(message.inputType))
                        return "inputType: string expected";
                if (message.outputType != null && message.hasOwnProperty("outputType"))
                    if (!$util.isString(message.outputType))
                        return "outputType: string expected";
                if (message.options != null && message.hasOwnProperty("options")) {
                    let error = $root.google.protobuf.MethodOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                if (message.clientStreaming != null && message.hasOwnProperty("clientStreaming"))
                    if (typeof message.clientStreaming !== "boolean")
                        return "clientStreaming: boolean expected";
                if (message.serverStreaming != null && message.hasOwnProperty("serverStreaming"))
                    if (typeof message.serverStreaming !== "boolean")
                        return "serverStreaming: boolean expected";
                return null;
            };

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
             */
            MethodDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.MethodDescriptorProto)
                    return object;
                let message = new $root.google.protobuf.MethodDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.inputType != null)
                    message.inputType = String(object.inputType);
                if (object.outputType != null)
                    message.outputType = String(object.outputType);
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.MethodDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.MethodOptions.fromObject(object.options);
                }
                if (object.clientStreaming != null)
                    message.clientStreaming = Boolean(object.clientStreaming);
                if (object.serverStreaming != null)
                    message.serverStreaming = Boolean(object.serverStreaming);
                return message;
            };

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {google.protobuf.MethodDescriptorProto} message MethodDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MethodDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.name = "";
                    object.inputType = "";
                    object.outputType = "";
                    object.options = null;
                    object.clientStreaming = false;
                    object.serverStreaming = false;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.inputType != null && message.hasOwnProperty("inputType"))
                    object.inputType = message.inputType;
                if (message.outputType != null && message.hasOwnProperty("outputType"))
                    object.outputType = message.outputType;
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.MethodOptions.toObject(message.options, options);
                if (message.clientStreaming != null && message.hasOwnProperty("clientStreaming"))
                    object.clientStreaming = message.clientStreaming;
                if (message.serverStreaming != null && message.hasOwnProperty("serverStreaming"))
                    object.serverStreaming = message.serverStreaming;
                return object;
            };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MethodDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for MethodDescriptorProto
             * @function getTypeUrl
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            MethodDescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.MethodDescriptorProto";
            };

            return MethodDescriptorProto;
        })();

        protobuf.FileOptions = (function() {

            /**
             * Properties of a FileOptions.
             * @memberof google.protobuf
             * @interface IFileOptions
             * @property {string|null} [javaPackage] FileOptions javaPackage
             * @property {string|null} [javaOuterClassname] FileOptions javaOuterClassname
             * @property {boolean|null} [javaMultipleFiles] FileOptions javaMultipleFiles
             * @property {boolean|null} [javaGenerateEqualsAndHash] FileOptions javaGenerateEqualsAndHash
             * @property {boolean|null} [javaStringCheckUtf8] FileOptions javaStringCheckUtf8
             * @property {google.protobuf.FileOptions.OptimizeMode|null} [optimizeFor] FileOptions optimizeFor
             * @property {string|null} [goPackage] FileOptions goPackage
             * @property {boolean|null} [ccGenericServices] FileOptions ccGenericServices
             * @property {boolean|null} [javaGenericServices] FileOptions javaGenericServices
             * @property {boolean|null} [pyGenericServices] FileOptions pyGenericServices
             * @property {boolean|null} [deprecated] FileOptions deprecated
             * @property {boolean|null} [ccEnableArenas] FileOptions ccEnableArenas
             * @property {string|null} [objcClassPrefix] FileOptions objcClassPrefix
             * @property {string|null} [csharpNamespace] FileOptions csharpNamespace
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] FileOptions uninterpretedOption
             * @property {gorm.IGormFileOptions|null} [".gorm.fileOpts"] FileOptions .gorm.fileOpts
             */

            /**
             * Constructs a new FileOptions.
             * @memberof google.protobuf
             * @classdesc Represents a FileOptions.
             * @implements IFileOptions
             * @constructor
             * @param {google.protobuf.IFileOptions=} [properties] Properties to set
             */
            function FileOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FileOptions javaPackage.
             * @member {string} javaPackage
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.javaPackage = "";

            /**
             * FileOptions javaOuterClassname.
             * @member {string} javaOuterClassname
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.javaOuterClassname = "";

            /**
             * FileOptions javaMultipleFiles.
             * @member {boolean} javaMultipleFiles
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.javaMultipleFiles = false;

            /**
             * FileOptions javaGenerateEqualsAndHash.
             * @member {boolean} javaGenerateEqualsAndHash
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.javaGenerateEqualsAndHash = false;

            /**
             * FileOptions javaStringCheckUtf8.
             * @member {boolean} javaStringCheckUtf8
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.javaStringCheckUtf8 = false;

            /**
             * FileOptions optimizeFor.
             * @member {google.protobuf.FileOptions.OptimizeMode} optimizeFor
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.optimizeFor = 1;

            /**
             * FileOptions goPackage.
             * @member {string} goPackage
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.goPackage = "";

            /**
             * FileOptions ccGenericServices.
             * @member {boolean} ccGenericServices
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.ccGenericServices = false;

            /**
             * FileOptions javaGenericServices.
             * @member {boolean} javaGenericServices
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.javaGenericServices = false;

            /**
             * FileOptions pyGenericServices.
             * @member {boolean} pyGenericServices
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.pyGenericServices = false;

            /**
             * FileOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.deprecated = false;

            /**
             * FileOptions ccEnableArenas.
             * @member {boolean} ccEnableArenas
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.ccEnableArenas = false;

            /**
             * FileOptions objcClassPrefix.
             * @member {string} objcClassPrefix
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.objcClassPrefix = "";

            /**
             * FileOptions csharpNamespace.
             * @member {string} csharpNamespace
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.csharpNamespace = "";

            /**
             * FileOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * FileOptions .gorm.fileOpts.
             * @member {gorm.IGormFileOptions|null|undefined} .gorm.fileOpts
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype[".gorm.fileOpts"] = null;

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {google.protobuf.IFileOptions=} [properties] Properties to set
             * @returns {google.protobuf.FileOptions} FileOptions instance
             */
            FileOptions.create = function create(properties) {
                return new FileOptions(properties);
            };

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {google.protobuf.IFileOptions} message FileOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.javaPackage != null && Object.hasOwnProperty.call(message, "javaPackage"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.javaPackage);
                if (message.javaOuterClassname != null && Object.hasOwnProperty.call(message, "javaOuterClassname"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.javaOuterClassname);
                if (message.optimizeFor != null && Object.hasOwnProperty.call(message, "optimizeFor"))
                    writer.uint32(/* id 9, wireType 0 =*/72).int32(message.optimizeFor);
                if (message.javaMultipleFiles != null && Object.hasOwnProperty.call(message, "javaMultipleFiles"))
                    writer.uint32(/* id 10, wireType 0 =*/80).bool(message.javaMultipleFiles);
                if (message.goPackage != null && Object.hasOwnProperty.call(message, "goPackage"))
                    writer.uint32(/* id 11, wireType 2 =*/90).string(message.goPackage);
                if (message.ccGenericServices != null && Object.hasOwnProperty.call(message, "ccGenericServices"))
                    writer.uint32(/* id 16, wireType 0 =*/128).bool(message.ccGenericServices);
                if (message.javaGenericServices != null && Object.hasOwnProperty.call(message, "javaGenericServices"))
                    writer.uint32(/* id 17, wireType 0 =*/136).bool(message.javaGenericServices);
                if (message.pyGenericServices != null && Object.hasOwnProperty.call(message, "pyGenericServices"))
                    writer.uint32(/* id 18, wireType 0 =*/144).bool(message.pyGenericServices);
                if (message.javaGenerateEqualsAndHash != null && Object.hasOwnProperty.call(message, "javaGenerateEqualsAndHash"))
                    writer.uint32(/* id 20, wireType 0 =*/160).bool(message.javaGenerateEqualsAndHash);
                if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(/* id 23, wireType 0 =*/184).bool(message.deprecated);
                if (message.javaStringCheckUtf8 != null && Object.hasOwnProperty.call(message, "javaStringCheckUtf8"))
                    writer.uint32(/* id 27, wireType 0 =*/216).bool(message.javaStringCheckUtf8);
                if (message.ccEnableArenas != null && Object.hasOwnProperty.call(message, "ccEnableArenas"))
                    writer.uint32(/* id 31, wireType 0 =*/248).bool(message.ccEnableArenas);
                if (message.objcClassPrefix != null && Object.hasOwnProperty.call(message, "objcClassPrefix"))
                    writer.uint32(/* id 36, wireType 2 =*/290).string(message.objcClassPrefix);
                if (message.csharpNamespace != null && Object.hasOwnProperty.call(message, "csharpNamespace"))
                    writer.uint32(/* id 37, wireType 2 =*/298).string(message.csharpNamespace);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (let i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                if (message[".gorm.fileOpts"] != null && Object.hasOwnProperty.call(message, ".gorm.fileOpts"))
                    $root.gorm.GormFileOptions.encode(message[".gorm.fileOpts"], writer.uint32(/* id 52119, wireType 2 =*/416954).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {google.protobuf.IFileOptions} message FileOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FileOptions} FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileOptions();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.javaPackage = reader.string();
                            break;
                        }
                    case 8: {
                            message.javaOuterClassname = reader.string();
                            break;
                        }
                    case 10: {
                            message.javaMultipleFiles = reader.bool();
                            break;
                        }
                    case 20: {
                            message.javaGenerateEqualsAndHash = reader.bool();
                            break;
                        }
                    case 27: {
                            message.javaStringCheckUtf8 = reader.bool();
                            break;
                        }
                    case 9: {
                            message.optimizeFor = reader.int32();
                            break;
                        }
                    case 11: {
                            message.goPackage = reader.string();
                            break;
                        }
                    case 16: {
                            message.ccGenericServices = reader.bool();
                            break;
                        }
                    case 17: {
                            message.javaGenericServices = reader.bool();
                            break;
                        }
                    case 18: {
                            message.pyGenericServices = reader.bool();
                            break;
                        }
                    case 23: {
                            message.deprecated = reader.bool();
                            break;
                        }
                    case 31: {
                            message.ccEnableArenas = reader.bool();
                            break;
                        }
                    case 36: {
                            message.objcClassPrefix = reader.string();
                            break;
                        }
                    case 37: {
                            message.csharpNamespace = reader.string();
                            break;
                        }
                    case 999: {
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        }
                    case 52119: {
                            message[".gorm.fileOpts"] = $root.gorm.GormFileOptions.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FileOptions} FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FileOptions message.
             * @function verify
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FileOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.javaPackage != null && message.hasOwnProperty("javaPackage"))
                    if (!$util.isString(message.javaPackage))
                        return "javaPackage: string expected";
                if (message.javaOuterClassname != null && message.hasOwnProperty("javaOuterClassname"))
                    if (!$util.isString(message.javaOuterClassname))
                        return "javaOuterClassname: string expected";
                if (message.javaMultipleFiles != null && message.hasOwnProperty("javaMultipleFiles"))
                    if (typeof message.javaMultipleFiles !== "boolean")
                        return "javaMultipleFiles: boolean expected";
                if (message.javaGenerateEqualsAndHash != null && message.hasOwnProperty("javaGenerateEqualsAndHash"))
                    if (typeof message.javaGenerateEqualsAndHash !== "boolean")
                        return "javaGenerateEqualsAndHash: boolean expected";
                if (message.javaStringCheckUtf8 != null && message.hasOwnProperty("javaStringCheckUtf8"))
                    if (typeof message.javaStringCheckUtf8 !== "boolean")
                        return "javaStringCheckUtf8: boolean expected";
                if (message.optimizeFor != null && message.hasOwnProperty("optimizeFor"))
                    switch (message.optimizeFor) {
                    default:
                        return "optimizeFor: enum value expected";
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                if (message.goPackage != null && message.hasOwnProperty("goPackage"))
                    if (!$util.isString(message.goPackage))
                        return "goPackage: string expected";
                if (message.ccGenericServices != null && message.hasOwnProperty("ccGenericServices"))
                    if (typeof message.ccGenericServices !== "boolean")
                        return "ccGenericServices: boolean expected";
                if (message.javaGenericServices != null && message.hasOwnProperty("javaGenericServices"))
                    if (typeof message.javaGenericServices !== "boolean")
                        return "javaGenericServices: boolean expected";
                if (message.pyGenericServices != null && message.hasOwnProperty("pyGenericServices"))
                    if (typeof message.pyGenericServices !== "boolean")
                        return "pyGenericServices: boolean expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.ccEnableArenas != null && message.hasOwnProperty("ccEnableArenas"))
                    if (typeof message.ccEnableArenas !== "boolean")
                        return "ccEnableArenas: boolean expected";
                if (message.objcClassPrefix != null && message.hasOwnProperty("objcClassPrefix"))
                    if (!$util.isString(message.objcClassPrefix))
                        return "objcClassPrefix: string expected";
                if (message.csharpNamespace != null && message.hasOwnProperty("csharpNamespace"))
                    if (!$util.isString(message.csharpNamespace))
                        return "csharpNamespace: string expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (let i = 0; i < message.uninterpretedOption.length; ++i) {
                        let error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                if (message[".gorm.fileOpts"] != null && message.hasOwnProperty(".gorm.fileOpts")) {
                    let error = $root.gorm.GormFileOptions.verify(message[".gorm.fileOpts"]);
                    if (error)
                        return ".gorm.fileOpts." + error;
                }
                return null;
            };

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FileOptions} FileOptions
             */
            FileOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FileOptions)
                    return object;
                let message = new $root.google.protobuf.FileOptions();
                if (object.javaPackage != null)
                    message.javaPackage = String(object.javaPackage);
                if (object.javaOuterClassname != null)
                    message.javaOuterClassname = String(object.javaOuterClassname);
                if (object.javaMultipleFiles != null)
                    message.javaMultipleFiles = Boolean(object.javaMultipleFiles);
                if (object.javaGenerateEqualsAndHash != null)
                    message.javaGenerateEqualsAndHash = Boolean(object.javaGenerateEqualsAndHash);
                if (object.javaStringCheckUtf8 != null)
                    message.javaStringCheckUtf8 = Boolean(object.javaStringCheckUtf8);
                switch (object.optimizeFor) {
                default:
                    if (typeof object.optimizeFor === "number") {
                        message.optimizeFor = object.optimizeFor;
                        break;
                    }
                    break;
                case "SPEED":
                case 1:
                    message.optimizeFor = 1;
                    break;
                case "CODE_SIZE":
                case 2:
                    message.optimizeFor = 2;
                    break;
                case "LITE_RUNTIME":
                case 3:
                    message.optimizeFor = 3;
                    break;
                }
                if (object.goPackage != null)
                    message.goPackage = String(object.goPackage);
                if (object.ccGenericServices != null)
                    message.ccGenericServices = Boolean(object.ccGenericServices);
                if (object.javaGenericServices != null)
                    message.javaGenericServices = Boolean(object.javaGenericServices);
                if (object.pyGenericServices != null)
                    message.pyGenericServices = Boolean(object.pyGenericServices);
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.ccEnableArenas != null)
                    message.ccEnableArenas = Boolean(object.ccEnableArenas);
                if (object.objcClassPrefix != null)
                    message.objcClassPrefix = String(object.objcClassPrefix);
                if (object.csharpNamespace != null)
                    message.csharpNamespace = String(object.csharpNamespace);
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.FileOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (let i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.FileOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                if (object[".gorm.fileOpts"] != null) {
                    if (typeof object[".gorm.fileOpts"] !== "object")
                        throw TypeError(".google.protobuf.FileOptions..gorm.fileOpts: object expected");
                    message[".gorm.fileOpts"] = $root.gorm.GormFileOptions.fromObject(object[".gorm.fileOpts"]);
                }
                return message;
            };

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {google.protobuf.FileOptions} message FileOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FileOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (options.defaults) {
                    object.javaPackage = "";
                    object.javaOuterClassname = "";
                    object.optimizeFor = options.enums === String ? "SPEED" : 1;
                    object.javaMultipleFiles = false;
                    object.goPackage = "";
                    object.ccGenericServices = false;
                    object.javaGenericServices = false;
                    object.pyGenericServices = false;
                    object.javaGenerateEqualsAndHash = false;
                    object.deprecated = false;
                    object.javaStringCheckUtf8 = false;
                    object.ccEnableArenas = false;
                    object.objcClassPrefix = "";
                    object.csharpNamespace = "";
                    object[".gorm.fileOpts"] = null;
                }
                if (message.javaPackage != null && message.hasOwnProperty("javaPackage"))
                    object.javaPackage = message.javaPackage;
                if (message.javaOuterClassname != null && message.hasOwnProperty("javaOuterClassname"))
                    object.javaOuterClassname = message.javaOuterClassname;
                if (message.optimizeFor != null && message.hasOwnProperty("optimizeFor"))
                    object.optimizeFor = options.enums === String ? $root.google.protobuf.FileOptions.OptimizeMode[message.optimizeFor] === undefined ? message.optimizeFor : $root.google.protobuf.FileOptions.OptimizeMode[message.optimizeFor] : message.optimizeFor;
                if (message.javaMultipleFiles != null && message.hasOwnProperty("javaMultipleFiles"))
                    object.javaMultipleFiles = message.javaMultipleFiles;
                if (message.goPackage != null && message.hasOwnProperty("goPackage"))
                    object.goPackage = message.goPackage;
                if (message.ccGenericServices != null && message.hasOwnProperty("ccGenericServices"))
                    object.ccGenericServices = message.ccGenericServices;
                if (message.javaGenericServices != null && message.hasOwnProperty("javaGenericServices"))
                    object.javaGenericServices = message.javaGenericServices;
                if (message.pyGenericServices != null && message.hasOwnProperty("pyGenericServices"))
                    object.pyGenericServices = message.pyGenericServices;
                if (message.javaGenerateEqualsAndHash != null && message.hasOwnProperty("javaGenerateEqualsAndHash"))
                    object.javaGenerateEqualsAndHash = message.javaGenerateEqualsAndHash;
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.javaStringCheckUtf8 != null && message.hasOwnProperty("javaStringCheckUtf8"))
                    object.javaStringCheckUtf8 = message.javaStringCheckUtf8;
                if (message.ccEnableArenas != null && message.hasOwnProperty("ccEnableArenas"))
                    object.ccEnableArenas = message.ccEnableArenas;
                if (message.objcClassPrefix != null && message.hasOwnProperty("objcClassPrefix"))
                    object.objcClassPrefix = message.objcClassPrefix;
                if (message.csharpNamespace != null && message.hasOwnProperty("csharpNamespace"))
                    object.csharpNamespace = message.csharpNamespace;
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (let j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                if (message[".gorm.fileOpts"] != null && message.hasOwnProperty(".gorm.fileOpts"))
                    object[".gorm.fileOpts"] = $root.gorm.GormFileOptions.toObject(message[".gorm.fileOpts"], options);
                return object;
            };

            /**
             * Converts this FileOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.FileOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FileOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for FileOptions
             * @function getTypeUrl
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            FileOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.FileOptions";
            };

            /**
             * OptimizeMode enum.
             * @name google.protobuf.FileOptions.OptimizeMode
             * @enum {number}
             * @property {number} SPEED=1 SPEED value
             * @property {number} CODE_SIZE=2 CODE_SIZE value
             * @property {number} LITE_RUNTIME=3 LITE_RUNTIME value
             */
            FileOptions.OptimizeMode = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "SPEED"] = 1;
                values[valuesById[2] = "CODE_SIZE"] = 2;
                values[valuesById[3] = "LITE_RUNTIME"] = 3;
                return values;
            })();

            return FileOptions;
        })();

        protobuf.MessageOptions = (function() {

            /**
             * Properties of a MessageOptions.
             * @memberof google.protobuf
             * @interface IMessageOptions
             * @property {boolean|null} [messageSetWireFormat] MessageOptions messageSetWireFormat
             * @property {boolean|null} [noStandardDescriptorAccessor] MessageOptions noStandardDescriptorAccessor
             * @property {boolean|null} [deprecated] MessageOptions deprecated
             * @property {boolean|null} [mapEntry] MessageOptions mapEntry
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] MessageOptions uninterpretedOption
             * @property {gorm.IGormMessageOptions|null} [".gorm.opts"] MessageOptions .gorm.opts
             */

            /**
             * Constructs a new MessageOptions.
             * @memberof google.protobuf
             * @classdesc Represents a MessageOptions.
             * @implements IMessageOptions
             * @constructor
             * @param {google.protobuf.IMessageOptions=} [properties] Properties to set
             */
            function MessageOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageOptions messageSetWireFormat.
             * @member {boolean} messageSetWireFormat
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.messageSetWireFormat = false;

            /**
             * MessageOptions noStandardDescriptorAccessor.
             * @member {boolean} noStandardDescriptorAccessor
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.noStandardDescriptorAccessor = false;

            /**
             * MessageOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.deprecated = false;

            /**
             * MessageOptions mapEntry.
             * @member {boolean} mapEntry
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.mapEntry = false;

            /**
             * MessageOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * MessageOptions .gorm.opts.
             * @member {gorm.IGormMessageOptions|null|undefined} .gorm.opts
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype[".gorm.opts"] = null;

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {google.protobuf.IMessageOptions=} [properties] Properties to set
             * @returns {google.protobuf.MessageOptions} MessageOptions instance
             */
            MessageOptions.create = function create(properties) {
                return new MessageOptions(properties);
            };

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {google.protobuf.IMessageOptions} message MessageOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.messageSetWireFormat != null && Object.hasOwnProperty.call(message, "messageSetWireFormat"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.messageSetWireFormat);
                if (message.noStandardDescriptorAccessor != null && Object.hasOwnProperty.call(message, "noStandardDescriptorAccessor"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.noStandardDescriptorAccessor);
                if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                if (message.mapEntry != null && Object.hasOwnProperty.call(message, "mapEntry"))
                    writer.uint32(/* id 7, wireType 0 =*/56).bool(message.mapEntry);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (let i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                if (message[".gorm.opts"] != null && Object.hasOwnProperty.call(message, ".gorm.opts"))
                    $root.gorm.GormMessageOptions.encode(message[".gorm.opts"], writer.uint32(/* id 52119, wireType 2 =*/416954).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {google.protobuf.IMessageOptions} message MessageOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.MessageOptions} MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MessageOptions();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.messageSetWireFormat = reader.bool();
                            break;
                        }
                    case 2: {
                            message.noStandardDescriptorAccessor = reader.bool();
                            break;
                        }
                    case 3: {
                            message.deprecated = reader.bool();
                            break;
                        }
                    case 7: {
                            message.mapEntry = reader.bool();
                            break;
                        }
                    case 999: {
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        }
                    case 52119: {
                            message[".gorm.opts"] = $root.gorm.GormMessageOptions.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.MessageOptions} MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageOptions message.
             * @function verify
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.messageSetWireFormat != null && message.hasOwnProperty("messageSetWireFormat"))
                    if (typeof message.messageSetWireFormat !== "boolean")
                        return "messageSetWireFormat: boolean expected";
                if (message.noStandardDescriptorAccessor != null && message.hasOwnProperty("noStandardDescriptorAccessor"))
                    if (typeof message.noStandardDescriptorAccessor !== "boolean")
                        return "noStandardDescriptorAccessor: boolean expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.mapEntry != null && message.hasOwnProperty("mapEntry"))
                    if (typeof message.mapEntry !== "boolean")
                        return "mapEntry: boolean expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (let i = 0; i < message.uninterpretedOption.length; ++i) {
                        let error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                if (message[".gorm.opts"] != null && message.hasOwnProperty(".gorm.opts")) {
                    let error = $root.gorm.GormMessageOptions.verify(message[".gorm.opts"]);
                    if (error)
                        return ".gorm.opts." + error;
                }
                return null;
            };

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.MessageOptions} MessageOptions
             */
            MessageOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.MessageOptions)
                    return object;
                let message = new $root.google.protobuf.MessageOptions();
                if (object.messageSetWireFormat != null)
                    message.messageSetWireFormat = Boolean(object.messageSetWireFormat);
                if (object.noStandardDescriptorAccessor != null)
                    message.noStandardDescriptorAccessor = Boolean(object.noStandardDescriptorAccessor);
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.mapEntry != null)
                    message.mapEntry = Boolean(object.mapEntry);
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.MessageOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (let i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.MessageOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                if (object[".gorm.opts"] != null) {
                    if (typeof object[".gorm.opts"] !== "object")
                        throw TypeError(".google.protobuf.MessageOptions..gorm.opts: object expected");
                    message[".gorm.opts"] = $root.gorm.GormMessageOptions.fromObject(object[".gorm.opts"]);
                }
                return message;
            };

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {google.protobuf.MessageOptions} message MessageOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (options.defaults) {
                    object.messageSetWireFormat = false;
                    object.noStandardDescriptorAccessor = false;
                    object.deprecated = false;
                    object.mapEntry = false;
                    object[".gorm.opts"] = null;
                }
                if (message.messageSetWireFormat != null && message.hasOwnProperty("messageSetWireFormat"))
                    object.messageSetWireFormat = message.messageSetWireFormat;
                if (message.noStandardDescriptorAccessor != null && message.hasOwnProperty("noStandardDescriptorAccessor"))
                    object.noStandardDescriptorAccessor = message.noStandardDescriptorAccessor;
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.mapEntry != null && message.hasOwnProperty("mapEntry"))
                    object.mapEntry = message.mapEntry;
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (let j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                if (message[".gorm.opts"] != null && message.hasOwnProperty(".gorm.opts"))
                    object[".gorm.opts"] = $root.gorm.GormMessageOptions.toObject(message[".gorm.opts"], options);
                return object;
            };

            /**
             * Converts this MessageOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.MessageOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for MessageOptions
             * @function getTypeUrl
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            MessageOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.MessageOptions";
            };

            return MessageOptions;
        })();

        protobuf.FieldOptions = (function() {

            /**
             * Properties of a FieldOptions.
             * @memberof google.protobuf
             * @interface IFieldOptions
             * @property {google.protobuf.FieldOptions.CType|null} [ctype] FieldOptions ctype
             * @property {boolean|null} [packed] FieldOptions packed
             * @property {google.protobuf.FieldOptions.JSType|null} [jstype] FieldOptions jstype
             * @property {boolean|null} [lazy] FieldOptions lazy
             * @property {boolean|null} [deprecated] FieldOptions deprecated
             * @property {boolean|null} [weak] FieldOptions weak
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] FieldOptions uninterpretedOption
             * @property {gorm.IGormFieldOptions|null} [".gorm.field"] FieldOptions .gorm.field
             */

            /**
             * Constructs a new FieldOptions.
             * @memberof google.protobuf
             * @classdesc Represents a FieldOptions.
             * @implements IFieldOptions
             * @constructor
             * @param {google.protobuf.IFieldOptions=} [properties] Properties to set
             */
            function FieldOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FieldOptions ctype.
             * @member {google.protobuf.FieldOptions.CType} ctype
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.ctype = 0;

            /**
             * FieldOptions packed.
             * @member {boolean} packed
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.packed = false;

            /**
             * FieldOptions jstype.
             * @member {google.protobuf.FieldOptions.JSType} jstype
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.jstype = 0;

            /**
             * FieldOptions lazy.
             * @member {boolean} lazy
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.lazy = false;

            /**
             * FieldOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.deprecated = false;

            /**
             * FieldOptions weak.
             * @member {boolean} weak
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.weak = false;

            /**
             * FieldOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * FieldOptions .gorm.field.
             * @member {gorm.IGormFieldOptions|null|undefined} .gorm.field
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype[".gorm.field"] = null;

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {google.protobuf.IFieldOptions=} [properties] Properties to set
             * @returns {google.protobuf.FieldOptions} FieldOptions instance
             */
            FieldOptions.create = function create(properties) {
                return new FieldOptions(properties);
            };

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {google.protobuf.IFieldOptions} message FieldOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FieldOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ctype != null && Object.hasOwnProperty.call(message, "ctype"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ctype);
                if (message.packed != null && Object.hasOwnProperty.call(message, "packed"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.packed);
                if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                if (message.lazy != null && Object.hasOwnProperty.call(message, "lazy"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.lazy);
                if (message.jstype != null && Object.hasOwnProperty.call(message, "jstype"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.jstype);
                if (message.weak != null && Object.hasOwnProperty.call(message, "weak"))
                    writer.uint32(/* id 10, wireType 0 =*/80).bool(message.weak);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (let i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                if (message[".gorm.field"] != null && Object.hasOwnProperty.call(message, ".gorm.field"))
                    $root.gorm.GormFieldOptions.encode(message[".gorm.field"], writer.uint32(/* id 52119, wireType 2 =*/416954).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {google.protobuf.IFieldOptions} message FieldOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FieldOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FieldOptions} FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FieldOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FieldOptions();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.ctype = reader.int32();
                            break;
                        }
                    case 2: {
                            message.packed = reader.bool();
                            break;
                        }
                    case 6: {
                            message.jstype = reader.int32();
                            break;
                        }
                    case 5: {
                            message.lazy = reader.bool();
                            break;
                        }
                    case 3: {
                            message.deprecated = reader.bool();
                            break;
                        }
                    case 10: {
                            message.weak = reader.bool();
                            break;
                        }
                    case 999: {
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        }
                    case 52119: {
                            message[".gorm.field"] = $root.gorm.GormFieldOptions.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FieldOptions} FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FieldOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FieldOptions message.
             * @function verify
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FieldOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.ctype != null && message.hasOwnProperty("ctype"))
                    switch (message.ctype) {
                    default:
                        return "ctype: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.packed != null && message.hasOwnProperty("packed"))
                    if (typeof message.packed !== "boolean")
                        return "packed: boolean expected";
                if (message.jstype != null && message.hasOwnProperty("jstype"))
                    switch (message.jstype) {
                    default:
                        return "jstype: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.lazy != null && message.hasOwnProperty("lazy"))
                    if (typeof message.lazy !== "boolean")
                        return "lazy: boolean expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.weak != null && message.hasOwnProperty("weak"))
                    if (typeof message.weak !== "boolean")
                        return "weak: boolean expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (let i = 0; i < message.uninterpretedOption.length; ++i) {
                        let error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                if (message[".gorm.field"] != null && message.hasOwnProperty(".gorm.field")) {
                    let error = $root.gorm.GormFieldOptions.verify(message[".gorm.field"]);
                    if (error)
                        return ".gorm.field." + error;
                }
                return null;
            };

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FieldOptions} FieldOptions
             */
            FieldOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FieldOptions)
                    return object;
                let message = new $root.google.protobuf.FieldOptions();
                switch (object.ctype) {
                default:
                    if (typeof object.ctype === "number") {
                        message.ctype = object.ctype;
                        break;
                    }
                    break;
                case "STRING":
                case 0:
                    message.ctype = 0;
                    break;
                case "CORD":
                case 1:
                    message.ctype = 1;
                    break;
                case "STRING_PIECE":
                case 2:
                    message.ctype = 2;
                    break;
                }
                if (object.packed != null)
                    message.packed = Boolean(object.packed);
                switch (object.jstype) {
                default:
                    if (typeof object.jstype === "number") {
                        message.jstype = object.jstype;
                        break;
                    }
                    break;
                case "JS_NORMAL":
                case 0:
                    message.jstype = 0;
                    break;
                case "JS_STRING":
                case 1:
                    message.jstype = 1;
                    break;
                case "JS_NUMBER":
                case 2:
                    message.jstype = 2;
                    break;
                }
                if (object.lazy != null)
                    message.lazy = Boolean(object.lazy);
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.weak != null)
                    message.weak = Boolean(object.weak);
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.FieldOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (let i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.FieldOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                if (object[".gorm.field"] != null) {
                    if (typeof object[".gorm.field"] !== "object")
                        throw TypeError(".google.protobuf.FieldOptions..gorm.field: object expected");
                    message[".gorm.field"] = $root.gorm.GormFieldOptions.fromObject(object[".gorm.field"]);
                }
                return message;
            };

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {google.protobuf.FieldOptions} message FieldOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FieldOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (options.defaults) {
                    object.ctype = options.enums === String ? "STRING" : 0;
                    object.packed = false;
                    object.deprecated = false;
                    object.lazy = false;
                    object.jstype = options.enums === String ? "JS_NORMAL" : 0;
                    object.weak = false;
                    object[".gorm.field"] = null;
                }
                if (message.ctype != null && message.hasOwnProperty("ctype"))
                    object.ctype = options.enums === String ? $root.google.protobuf.FieldOptions.CType[message.ctype] === undefined ? message.ctype : $root.google.protobuf.FieldOptions.CType[message.ctype] : message.ctype;
                if (message.packed != null && message.hasOwnProperty("packed"))
                    object.packed = message.packed;
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.lazy != null && message.hasOwnProperty("lazy"))
                    object.lazy = message.lazy;
                if (message.jstype != null && message.hasOwnProperty("jstype"))
                    object.jstype = options.enums === String ? $root.google.protobuf.FieldOptions.JSType[message.jstype] === undefined ? message.jstype : $root.google.protobuf.FieldOptions.JSType[message.jstype] : message.jstype;
                if (message.weak != null && message.hasOwnProperty("weak"))
                    object.weak = message.weak;
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (let j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                if (message[".gorm.field"] != null && message.hasOwnProperty(".gorm.field"))
                    object[".gorm.field"] = $root.gorm.GormFieldOptions.toObject(message[".gorm.field"], options);
                return object;
            };

            /**
             * Converts this FieldOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.FieldOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FieldOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for FieldOptions
             * @function getTypeUrl
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            FieldOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.FieldOptions";
            };

            /**
             * CType enum.
             * @name google.protobuf.FieldOptions.CType
             * @enum {number}
             * @property {number} STRING=0 STRING value
             * @property {number} CORD=1 CORD value
             * @property {number} STRING_PIECE=2 STRING_PIECE value
             */
            FieldOptions.CType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "STRING"] = 0;
                values[valuesById[1] = "CORD"] = 1;
                values[valuesById[2] = "STRING_PIECE"] = 2;
                return values;
            })();

            /**
             * JSType enum.
             * @name google.protobuf.FieldOptions.JSType
             * @enum {number}
             * @property {number} JS_NORMAL=0 JS_NORMAL value
             * @property {number} JS_STRING=1 JS_STRING value
             * @property {number} JS_NUMBER=2 JS_NUMBER value
             */
            FieldOptions.JSType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "JS_NORMAL"] = 0;
                values[valuesById[1] = "JS_STRING"] = 1;
                values[valuesById[2] = "JS_NUMBER"] = 2;
                return values;
            })();

            return FieldOptions;
        })();

        protobuf.OneofOptions = (function() {

            /**
             * Properties of an OneofOptions.
             * @memberof google.protobuf
             * @interface IOneofOptions
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] OneofOptions uninterpretedOption
             */

            /**
             * Constructs a new OneofOptions.
             * @memberof google.protobuf
             * @classdesc Represents an OneofOptions.
             * @implements IOneofOptions
             * @constructor
             * @param {google.protobuf.IOneofOptions=} [properties] Properties to set
             */
            function OneofOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OneofOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.OneofOptions
             * @instance
             */
            OneofOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {google.protobuf.IOneofOptions=} [properties] Properties to set
             * @returns {google.protobuf.OneofOptions} OneofOptions instance
             */
            OneofOptions.create = function create(properties) {
                return new OneofOptions(properties);
            };

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {google.protobuf.IOneofOptions} message OneofOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OneofOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (let i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {google.protobuf.IOneofOptions} message OneofOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OneofOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.OneofOptions} OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OneofOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.OneofOptions();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 999: {
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.OneofOptions} OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OneofOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an OneofOptions message.
             * @function verify
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OneofOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (let i = 0; i < message.uninterpretedOption.length; ++i) {
                        let error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                return null;
            };

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.OneofOptions} OneofOptions
             */
            OneofOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.OneofOptions)
                    return object;
                let message = new $root.google.protobuf.OneofOptions();
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.OneofOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (let i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.OneofOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {google.protobuf.OneofOptions} message OneofOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OneofOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (let j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                return object;
            };

            /**
             * Converts this OneofOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.OneofOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OneofOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for OneofOptions
             * @function getTypeUrl
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            OneofOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.OneofOptions";
            };

            return OneofOptions;
        })();

        protobuf.EnumOptions = (function() {

            /**
             * Properties of an EnumOptions.
             * @memberof google.protobuf
             * @interface IEnumOptions
             * @property {boolean|null} [allowAlias] EnumOptions allowAlias
             * @property {boolean|null} [deprecated] EnumOptions deprecated
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] EnumOptions uninterpretedOption
             */

            /**
             * Constructs a new EnumOptions.
             * @memberof google.protobuf
             * @classdesc Represents an EnumOptions.
             * @implements IEnumOptions
             * @constructor
             * @param {google.protobuf.IEnumOptions=} [properties] Properties to set
             */
            function EnumOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EnumOptions allowAlias.
             * @member {boolean} allowAlias
             * @memberof google.protobuf.EnumOptions
             * @instance
             */
            EnumOptions.prototype.allowAlias = false;

            /**
             * EnumOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.EnumOptions
             * @instance
             */
            EnumOptions.prototype.deprecated = false;

            /**
             * EnumOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.EnumOptions
             * @instance
             */
            EnumOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {google.protobuf.IEnumOptions=} [properties] Properties to set
             * @returns {google.protobuf.EnumOptions} EnumOptions instance
             */
            EnumOptions.create = function create(properties) {
                return new EnumOptions(properties);
            };

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {google.protobuf.IEnumOptions} message EnumOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.allowAlias != null && Object.hasOwnProperty.call(message, "allowAlias"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.allowAlias);
                if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (let i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {google.protobuf.IEnumOptions} message EnumOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumOptions} EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumOptions();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 2: {
                            message.allowAlias = reader.bool();
                            break;
                        }
                    case 3: {
                            message.deprecated = reader.bool();
                            break;
                        }
                    case 999: {
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.EnumOptions} EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EnumOptions message.
             * @function verify
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EnumOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.allowAlias != null && message.hasOwnProperty("allowAlias"))
                    if (typeof message.allowAlias !== "boolean")
                        return "allowAlias: boolean expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (let i = 0; i < message.uninterpretedOption.length; ++i) {
                        let error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                return null;
            };

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumOptions} EnumOptions
             */
            EnumOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.EnumOptions)
                    return object;
                let message = new $root.google.protobuf.EnumOptions();
                if (object.allowAlias != null)
                    message.allowAlias = Boolean(object.allowAlias);
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.EnumOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (let i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.EnumOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {google.protobuf.EnumOptions} message EnumOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (options.defaults) {
                    object.allowAlias = false;
                    object.deprecated = false;
                }
                if (message.allowAlias != null && message.hasOwnProperty("allowAlias"))
                    object.allowAlias = message.allowAlias;
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (let j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                return object;
            };

            /**
             * Converts this EnumOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.EnumOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EnumOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for EnumOptions
             * @function getTypeUrl
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            EnumOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.EnumOptions";
            };

            return EnumOptions;
        })();

        protobuf.EnumValueOptions = (function() {

            /**
             * Properties of an EnumValueOptions.
             * @memberof google.protobuf
             * @interface IEnumValueOptions
             * @property {boolean|null} [deprecated] EnumValueOptions deprecated
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] EnumValueOptions uninterpretedOption
             */

            /**
             * Constructs a new EnumValueOptions.
             * @memberof google.protobuf
             * @classdesc Represents an EnumValueOptions.
             * @implements IEnumValueOptions
             * @constructor
             * @param {google.protobuf.IEnumValueOptions=} [properties] Properties to set
             */
            function EnumValueOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EnumValueOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.EnumValueOptions
             * @instance
             */
            EnumValueOptions.prototype.deprecated = false;

            /**
             * EnumValueOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.EnumValueOptions
             * @instance
             */
            EnumValueOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {google.protobuf.IEnumValueOptions=} [properties] Properties to set
             * @returns {google.protobuf.EnumValueOptions} EnumValueOptions instance
             */
            EnumValueOptions.create = function create(properties) {
                return new EnumValueOptions(properties);
            };

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {google.protobuf.IEnumValueOptions} message EnumValueOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumValueOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.deprecated);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (let i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {google.protobuf.IEnumValueOptions} message EnumValueOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumValueOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumValueOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumValueOptions();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.deprecated = reader.bool();
                            break;
                        }
                    case 999: {
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumValueOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EnumValueOptions message.
             * @function verify
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EnumValueOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (let i = 0; i < message.uninterpretedOption.length; ++i) {
                        let error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                return null;
            };

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
             */
            EnumValueOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.EnumValueOptions)
                    return object;
                let message = new $root.google.protobuf.EnumValueOptions();
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.EnumValueOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (let i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.EnumValueOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {google.protobuf.EnumValueOptions} message EnumValueOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumValueOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (options.defaults)
                    object.deprecated = false;
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (let j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                return object;
            };

            /**
             * Converts this EnumValueOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.EnumValueOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EnumValueOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for EnumValueOptions
             * @function getTypeUrl
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            EnumValueOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.EnumValueOptions";
            };

            return EnumValueOptions;
        })();

        protobuf.ServiceOptions = (function() {

            /**
             * Properties of a ServiceOptions.
             * @memberof google.protobuf
             * @interface IServiceOptions
             * @property {boolean|null} [deprecated] ServiceOptions deprecated
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] ServiceOptions uninterpretedOption
             * @property {gorm.IAutoServerOptions|null} [".gorm.server"] ServiceOptions .gorm.server
             */

            /**
             * Constructs a new ServiceOptions.
             * @memberof google.protobuf
             * @classdesc Represents a ServiceOptions.
             * @implements IServiceOptions
             * @constructor
             * @param {google.protobuf.IServiceOptions=} [properties] Properties to set
             */
            function ServiceOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ServiceOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.ServiceOptions
             * @instance
             */
            ServiceOptions.prototype.deprecated = false;

            /**
             * ServiceOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.ServiceOptions
             * @instance
             */
            ServiceOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * ServiceOptions .gorm.server.
             * @member {gorm.IAutoServerOptions|null|undefined} .gorm.server
             * @memberof google.protobuf.ServiceOptions
             * @instance
             */
            ServiceOptions.prototype[".gorm.server"] = null;

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {google.protobuf.IServiceOptions=} [properties] Properties to set
             * @returns {google.protobuf.ServiceOptions} ServiceOptions instance
             */
            ServiceOptions.create = function create(properties) {
                return new ServiceOptions(properties);
            };

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {google.protobuf.IServiceOptions} message ServiceOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(/* id 33, wireType 0 =*/264).bool(message.deprecated);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (let i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                if (message[".gorm.server"] != null && Object.hasOwnProperty.call(message, ".gorm.server"))
                    $root.gorm.AutoServerOptions.encode(message[".gorm.server"], writer.uint32(/* id 52119, wireType 2 =*/416954).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {google.protobuf.IServiceOptions} message ServiceOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.ServiceOptions} ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ServiceOptions();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 33: {
                            message.deprecated = reader.bool();
                            break;
                        }
                    case 999: {
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        }
                    case 52119: {
                            message[".gorm.server"] = $root.gorm.AutoServerOptions.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.ServiceOptions} ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ServiceOptions message.
             * @function verify
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ServiceOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (let i = 0; i < message.uninterpretedOption.length; ++i) {
                        let error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                if (message[".gorm.server"] != null && message.hasOwnProperty(".gorm.server")) {
                    let error = $root.gorm.AutoServerOptions.verify(message[".gorm.server"]);
                    if (error)
                        return ".gorm.server." + error;
                }
                return null;
            };

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.ServiceOptions} ServiceOptions
             */
            ServiceOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.ServiceOptions)
                    return object;
                let message = new $root.google.protobuf.ServiceOptions();
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.ServiceOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (let i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.ServiceOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                if (object[".gorm.server"] != null) {
                    if (typeof object[".gorm.server"] !== "object")
                        throw TypeError(".google.protobuf.ServiceOptions..gorm.server: object expected");
                    message[".gorm.server"] = $root.gorm.AutoServerOptions.fromObject(object[".gorm.server"]);
                }
                return message;
            };

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {google.protobuf.ServiceOptions} message ServiceOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ServiceOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (options.defaults) {
                    object.deprecated = false;
                    object[".gorm.server"] = null;
                }
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (let j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                if (message[".gorm.server"] != null && message.hasOwnProperty(".gorm.server"))
                    object[".gorm.server"] = $root.gorm.AutoServerOptions.toObject(message[".gorm.server"], options);
                return object;
            };

            /**
             * Converts this ServiceOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.ServiceOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ServiceOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ServiceOptions
             * @function getTypeUrl
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ServiceOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.ServiceOptions";
            };

            return ServiceOptions;
        })();

        protobuf.MethodOptions = (function() {

            /**
             * Properties of a MethodOptions.
             * @memberof google.protobuf
             * @interface IMethodOptions
             * @property {boolean|null} [deprecated] MethodOptions deprecated
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] MethodOptions uninterpretedOption
             * @property {gorm.IMethodOptions|null} [".gorm.method"] MethodOptions .gorm.method
             */

            /**
             * Constructs a new MethodOptions.
             * @memberof google.protobuf
             * @classdesc Represents a MethodOptions.
             * @implements IMethodOptions
             * @constructor
             * @param {google.protobuf.IMethodOptions=} [properties] Properties to set
             */
            function MethodOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MethodOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.MethodOptions
             * @instance
             */
            MethodOptions.prototype.deprecated = false;

            /**
             * MethodOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.MethodOptions
             * @instance
             */
            MethodOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * MethodOptions .gorm.method.
             * @member {gorm.IMethodOptions|null|undefined} .gorm.method
             * @memberof google.protobuf.MethodOptions
             * @instance
             */
            MethodOptions.prototype[".gorm.method"] = null;

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {google.protobuf.IMethodOptions=} [properties] Properties to set
             * @returns {google.protobuf.MethodOptions} MethodOptions instance
             */
            MethodOptions.create = function create(properties) {
                return new MethodOptions(properties);
            };

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {google.protobuf.IMethodOptions} message MethodOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MethodOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(/* id 33, wireType 0 =*/264).bool(message.deprecated);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (let i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                if (message[".gorm.method"] != null && Object.hasOwnProperty.call(message, ".gorm.method"))
                    $root.gorm.MethodOptions.encode(message[".gorm.method"], writer.uint32(/* id 52119, wireType 2 =*/416954).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {google.protobuf.IMethodOptions} message MethodOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MethodOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.MethodOptions} MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MethodOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MethodOptions();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 33: {
                            message.deprecated = reader.bool();
                            break;
                        }
                    case 999: {
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        }
                    case 52119: {
                            message[".gorm.method"] = $root.gorm.MethodOptions.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.MethodOptions} MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MethodOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MethodOptions message.
             * @function verify
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MethodOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (let i = 0; i < message.uninterpretedOption.length; ++i) {
                        let error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                if (message[".gorm.method"] != null && message.hasOwnProperty(".gorm.method")) {
                    let error = $root.gorm.MethodOptions.verify(message[".gorm.method"]);
                    if (error)
                        return ".gorm.method." + error;
                }
                return null;
            };

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.MethodOptions} MethodOptions
             */
            MethodOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.MethodOptions)
                    return object;
                let message = new $root.google.protobuf.MethodOptions();
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.MethodOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (let i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.MethodOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                if (object[".gorm.method"] != null) {
                    if (typeof object[".gorm.method"] !== "object")
                        throw TypeError(".google.protobuf.MethodOptions..gorm.method: object expected");
                    message[".gorm.method"] = $root.gorm.MethodOptions.fromObject(object[".gorm.method"]);
                }
                return message;
            };

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {google.protobuf.MethodOptions} message MethodOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MethodOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (options.defaults) {
                    object.deprecated = false;
                    object[".gorm.method"] = null;
                }
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (let j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                if (message[".gorm.method"] != null && message.hasOwnProperty(".gorm.method"))
                    object[".gorm.method"] = $root.gorm.MethodOptions.toObject(message[".gorm.method"], options);
                return object;
            };

            /**
             * Converts this MethodOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.MethodOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MethodOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for MethodOptions
             * @function getTypeUrl
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            MethodOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.MethodOptions";
            };

            return MethodOptions;
        })();

        protobuf.UninterpretedOption = (function() {

            /**
             * Properties of an UninterpretedOption.
             * @memberof google.protobuf
             * @interface IUninterpretedOption
             * @property {Array.<google.protobuf.UninterpretedOption.INamePart>|null} [name] UninterpretedOption name
             * @property {string|null} [identifierValue] UninterpretedOption identifierValue
             * @property {number|Long|null} [positiveIntValue] UninterpretedOption positiveIntValue
             * @property {number|Long|null} [negativeIntValue] UninterpretedOption negativeIntValue
             * @property {number|null} [doubleValue] UninterpretedOption doubleValue
             * @property {Uint8Array|null} [stringValue] UninterpretedOption stringValue
             * @property {string|null} [aggregateValue] UninterpretedOption aggregateValue
             */

            /**
             * Constructs a new UninterpretedOption.
             * @memberof google.protobuf
             * @classdesc Represents an UninterpretedOption.
             * @implements IUninterpretedOption
             * @constructor
             * @param {google.protobuf.IUninterpretedOption=} [properties] Properties to set
             */
            function UninterpretedOption(properties) {
                this.name = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UninterpretedOption name.
             * @member {Array.<google.protobuf.UninterpretedOption.INamePart>} name
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.name = $util.emptyArray;

            /**
             * UninterpretedOption identifierValue.
             * @member {string} identifierValue
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.identifierValue = "";

            /**
             * UninterpretedOption positiveIntValue.
             * @member {number|Long} positiveIntValue
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.positiveIntValue = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * UninterpretedOption negativeIntValue.
             * @member {number|Long} negativeIntValue
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.negativeIntValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * UninterpretedOption doubleValue.
             * @member {number} doubleValue
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.doubleValue = 0;

            /**
             * UninterpretedOption stringValue.
             * @member {Uint8Array} stringValue
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.stringValue = $util.newBuffer([]);

            /**
             * UninterpretedOption aggregateValue.
             * @member {string} aggregateValue
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.aggregateValue = "";

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @function create
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {google.protobuf.IUninterpretedOption=} [properties] Properties to set
             * @returns {google.protobuf.UninterpretedOption} UninterpretedOption instance
             */
            UninterpretedOption.create = function create(properties) {
                return new UninterpretedOption(properties);
            };

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {google.protobuf.IUninterpretedOption} message UninterpretedOption message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UninterpretedOption.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.name.length)
                    for (let i = 0; i < message.name.length; ++i)
                        $root.google.protobuf.UninterpretedOption.NamePart.encode(message.name[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.identifierValue != null && Object.hasOwnProperty.call(message, "identifierValue"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.identifierValue);
                if (message.positiveIntValue != null && Object.hasOwnProperty.call(message, "positiveIntValue"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.positiveIntValue);
                if (message.negativeIntValue != null && Object.hasOwnProperty.call(message, "negativeIntValue"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int64(message.negativeIntValue);
                if (message.doubleValue != null && Object.hasOwnProperty.call(message, "doubleValue"))
                    writer.uint32(/* id 6, wireType 1 =*/49).double(message.doubleValue);
                if (message.stringValue != null && Object.hasOwnProperty.call(message, "stringValue"))
                    writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.stringValue);
                if (message.aggregateValue != null && Object.hasOwnProperty.call(message, "aggregateValue"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.aggregateValue);
                return writer;
            };

            /**
             * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {google.protobuf.IUninterpretedOption} message UninterpretedOption message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UninterpretedOption.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UninterpretedOption.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UninterpretedOption();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 2: {
                            if (!(message.name && message.name.length))
                                message.name = [];
                            message.name.push($root.google.protobuf.UninterpretedOption.NamePart.decode(reader, reader.uint32()));
                            break;
                        }
                    case 3: {
                            message.identifierValue = reader.string();
                            break;
                        }
                    case 4: {
                            message.positiveIntValue = reader.uint64();
                            break;
                        }
                    case 5: {
                            message.negativeIntValue = reader.int64();
                            break;
                        }
                    case 6: {
                            message.doubleValue = reader.double();
                            break;
                        }
                    case 7: {
                            message.stringValue = reader.bytes();
                            break;
                        }
                    case 8: {
                            message.aggregateValue = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UninterpretedOption.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an UninterpretedOption message.
             * @function verify
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UninterpretedOption.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name")) {
                    if (!Array.isArray(message.name))
                        return "name: array expected";
                    for (let i = 0; i < message.name.length; ++i) {
                        let error = $root.google.protobuf.UninterpretedOption.NamePart.verify(message.name[i]);
                        if (error)
                            return "name." + error;
                    }
                }
                if (message.identifierValue != null && message.hasOwnProperty("identifierValue"))
                    if (!$util.isString(message.identifierValue))
                        return "identifierValue: string expected";
                if (message.positiveIntValue != null && message.hasOwnProperty("positiveIntValue"))
                    if (!$util.isInteger(message.positiveIntValue) && !(message.positiveIntValue && $util.isInteger(message.positiveIntValue.low) && $util.isInteger(message.positiveIntValue.high)))
                        return "positiveIntValue: integer|Long expected";
                if (message.negativeIntValue != null && message.hasOwnProperty("negativeIntValue"))
                    if (!$util.isInteger(message.negativeIntValue) && !(message.negativeIntValue && $util.isInteger(message.negativeIntValue.low) && $util.isInteger(message.negativeIntValue.high)))
                        return "negativeIntValue: integer|Long expected";
                if (message.doubleValue != null && message.hasOwnProperty("doubleValue"))
                    if (typeof message.doubleValue !== "number")
                        return "doubleValue: number expected";
                if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                    if (!(message.stringValue && typeof message.stringValue.length === "number" || $util.isString(message.stringValue)))
                        return "stringValue: buffer expected";
                if (message.aggregateValue != null && message.hasOwnProperty("aggregateValue"))
                    if (!$util.isString(message.aggregateValue))
                        return "aggregateValue: string expected";
                return null;
            };

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
             */
            UninterpretedOption.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.UninterpretedOption)
                    return object;
                let message = new $root.google.protobuf.UninterpretedOption();
                if (object.name) {
                    if (!Array.isArray(object.name))
                        throw TypeError(".google.protobuf.UninterpretedOption.name: array expected");
                    message.name = [];
                    for (let i = 0; i < object.name.length; ++i) {
                        if (typeof object.name[i] !== "object")
                            throw TypeError(".google.protobuf.UninterpretedOption.name: object expected");
                        message.name[i] = $root.google.protobuf.UninterpretedOption.NamePart.fromObject(object.name[i]);
                    }
                }
                if (object.identifierValue != null)
                    message.identifierValue = String(object.identifierValue);
                if (object.positiveIntValue != null)
                    if ($util.Long)
                        (message.positiveIntValue = $util.Long.fromValue(object.positiveIntValue)).unsigned = true;
                    else if (typeof object.positiveIntValue === "string")
                        message.positiveIntValue = parseInt(object.positiveIntValue, 10);
                    else if (typeof object.positiveIntValue === "number")
                        message.positiveIntValue = object.positiveIntValue;
                    else if (typeof object.positiveIntValue === "object")
                        message.positiveIntValue = new $util.LongBits(object.positiveIntValue.low >>> 0, object.positiveIntValue.high >>> 0).toNumber(true);
                if (object.negativeIntValue != null)
                    if ($util.Long)
                        (message.negativeIntValue = $util.Long.fromValue(object.negativeIntValue)).unsigned = false;
                    else if (typeof object.negativeIntValue === "string")
                        message.negativeIntValue = parseInt(object.negativeIntValue, 10);
                    else if (typeof object.negativeIntValue === "number")
                        message.negativeIntValue = object.negativeIntValue;
                    else if (typeof object.negativeIntValue === "object")
                        message.negativeIntValue = new $util.LongBits(object.negativeIntValue.low >>> 0, object.negativeIntValue.high >>> 0).toNumber();
                if (object.doubleValue != null)
                    message.doubleValue = Number(object.doubleValue);
                if (object.stringValue != null)
                    if (typeof object.stringValue === "string")
                        $util.base64.decode(object.stringValue, message.stringValue = $util.newBuffer($util.base64.length(object.stringValue)), 0);
                    else if (object.stringValue.length >= 0)
                        message.stringValue = object.stringValue;
                if (object.aggregateValue != null)
                    message.aggregateValue = String(object.aggregateValue);
                return message;
            };

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {google.protobuf.UninterpretedOption} message UninterpretedOption
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UninterpretedOption.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.name = [];
                if (options.defaults) {
                    object.identifierValue = "";
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.positiveIntValue = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.positiveIntValue = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.negativeIntValue = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.negativeIntValue = options.longs === String ? "0" : 0;
                    object.doubleValue = 0;
                    if (options.bytes === String)
                        object.stringValue = "";
                    else {
                        object.stringValue = [];
                        if (options.bytes !== Array)
                            object.stringValue = $util.newBuffer(object.stringValue);
                    }
                    object.aggregateValue = "";
                }
                if (message.name && message.name.length) {
                    object.name = [];
                    for (let j = 0; j < message.name.length; ++j)
                        object.name[j] = $root.google.protobuf.UninterpretedOption.NamePart.toObject(message.name[j], options);
                }
                if (message.identifierValue != null && message.hasOwnProperty("identifierValue"))
                    object.identifierValue = message.identifierValue;
                if (message.positiveIntValue != null && message.hasOwnProperty("positiveIntValue"))
                    if (typeof message.positiveIntValue === "number")
                        object.positiveIntValue = options.longs === String ? String(message.positiveIntValue) : message.positiveIntValue;
                    else
                        object.positiveIntValue = options.longs === String ? $util.Long.prototype.toString.call(message.positiveIntValue) : options.longs === Number ? new $util.LongBits(message.positiveIntValue.low >>> 0, message.positiveIntValue.high >>> 0).toNumber(true) : message.positiveIntValue;
                if (message.negativeIntValue != null && message.hasOwnProperty("negativeIntValue"))
                    if (typeof message.negativeIntValue === "number")
                        object.negativeIntValue = options.longs === String ? String(message.negativeIntValue) : message.negativeIntValue;
                    else
                        object.negativeIntValue = options.longs === String ? $util.Long.prototype.toString.call(message.negativeIntValue) : options.longs === Number ? new $util.LongBits(message.negativeIntValue.low >>> 0, message.negativeIntValue.high >>> 0).toNumber() : message.negativeIntValue;
                if (message.doubleValue != null && message.hasOwnProperty("doubleValue"))
                    object.doubleValue = options.json && !isFinite(message.doubleValue) ? String(message.doubleValue) : message.doubleValue;
                if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                    object.stringValue = options.bytes === String ? $util.base64.encode(message.stringValue, 0, message.stringValue.length) : options.bytes === Array ? Array.prototype.slice.call(message.stringValue) : message.stringValue;
                if (message.aggregateValue != null && message.hasOwnProperty("aggregateValue"))
                    object.aggregateValue = message.aggregateValue;
                return object;
            };

            /**
             * Converts this UninterpretedOption to JSON.
             * @function toJSON
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UninterpretedOption.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for UninterpretedOption
             * @function getTypeUrl
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            UninterpretedOption.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.UninterpretedOption";
            };

            UninterpretedOption.NamePart = (function() {

                /**
                 * Properties of a NamePart.
                 * @memberof google.protobuf.UninterpretedOption
                 * @interface INamePart
                 * @property {string} namePart NamePart namePart
                 * @property {boolean} isExtension NamePart isExtension
                 */

                /**
                 * Constructs a new NamePart.
                 * @memberof google.protobuf.UninterpretedOption
                 * @classdesc Represents a NamePart.
                 * @implements INamePart
                 * @constructor
                 * @param {google.protobuf.UninterpretedOption.INamePart=} [properties] Properties to set
                 */
                function NamePart(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * NamePart namePart.
                 * @member {string} namePart
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @instance
                 */
                NamePart.prototype.namePart = "";

                /**
                 * NamePart isExtension.
                 * @member {boolean} isExtension
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @instance
                 */
                NamePart.prototype.isExtension = false;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {google.protobuf.UninterpretedOption.INamePart=} [properties] Properties to set
                 * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart instance
                 */
                NamePart.create = function create(properties) {
                    return new NamePart(properties);
                };

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {google.protobuf.UninterpretedOption.INamePart} message NamePart message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NamePart.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.namePart);
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isExtension);
                    return writer;
                };

                /**
                 * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {google.protobuf.UninterpretedOption.INamePart} message NamePart message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NamePart.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NamePart.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UninterpretedOption.NamePart();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.namePart = reader.string();
                                break;
                            }
                        case 2: {
                                message.isExtension = reader.bool();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    if (!message.hasOwnProperty("namePart"))
                        throw $util.ProtocolError("missing required 'namePart'", { instance: message });
                    if (!message.hasOwnProperty("isExtension"))
                        throw $util.ProtocolError("missing required 'isExtension'", { instance: message });
                    return message;
                };

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NamePart.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a NamePart message.
                 * @function verify
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                NamePart.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (!$util.isString(message.namePart))
                        return "namePart: string expected";
                    if (typeof message.isExtension !== "boolean")
                        return "isExtension: boolean expected";
                    return null;
                };

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                 */
                NamePart.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.UninterpretedOption.NamePart)
                        return object;
                    let message = new $root.google.protobuf.UninterpretedOption.NamePart();
                    if (object.namePart != null)
                        message.namePart = String(object.namePart);
                    if (object.isExtension != null)
                        message.isExtension = Boolean(object.isExtension);
                    return message;
                };

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {google.protobuf.UninterpretedOption.NamePart} message NamePart
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                NamePart.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.namePart = "";
                        object.isExtension = false;
                    }
                    if (message.namePart != null && message.hasOwnProperty("namePart"))
                        object.namePart = message.namePart;
                    if (message.isExtension != null && message.hasOwnProperty("isExtension"))
                        object.isExtension = message.isExtension;
                    return object;
                };

                /**
                 * Converts this NamePart to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                NamePart.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for NamePart
                 * @function getTypeUrl
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                NamePart.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.UninterpretedOption.NamePart";
                };

                return NamePart;
            })();

            return UninterpretedOption;
        })();

        protobuf.SourceCodeInfo = (function() {

            /**
             * Properties of a SourceCodeInfo.
             * @memberof google.protobuf
             * @interface ISourceCodeInfo
             * @property {Array.<google.protobuf.SourceCodeInfo.ILocation>|null} [location] SourceCodeInfo location
             */

            /**
             * Constructs a new SourceCodeInfo.
             * @memberof google.protobuf
             * @classdesc Represents a SourceCodeInfo.
             * @implements ISourceCodeInfo
             * @constructor
             * @param {google.protobuf.ISourceCodeInfo=} [properties] Properties to set
             */
            function SourceCodeInfo(properties) {
                this.location = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SourceCodeInfo location.
             * @member {Array.<google.protobuf.SourceCodeInfo.ILocation>} location
             * @memberof google.protobuf.SourceCodeInfo
             * @instance
             */
            SourceCodeInfo.prototype.location = $util.emptyArray;

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @function create
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {google.protobuf.ISourceCodeInfo=} [properties] Properties to set
             * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo instance
             */
            SourceCodeInfo.create = function create(properties) {
                return new SourceCodeInfo(properties);
            };

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {google.protobuf.ISourceCodeInfo} message SourceCodeInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SourceCodeInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.location != null && message.location.length)
                    for (let i = 0; i < message.location.length; ++i)
                        $root.google.protobuf.SourceCodeInfo.Location.encode(message.location[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {google.protobuf.ISourceCodeInfo} message SourceCodeInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SourceCodeInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SourceCodeInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.SourceCodeInfo();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.location && message.location.length))
                                message.location = [];
                            message.location.push($root.google.protobuf.SourceCodeInfo.Location.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SourceCodeInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SourceCodeInfo message.
             * @function verify
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SourceCodeInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.location != null && message.hasOwnProperty("location")) {
                    if (!Array.isArray(message.location))
                        return "location: array expected";
                    for (let i = 0; i < message.location.length; ++i) {
                        let error = $root.google.protobuf.SourceCodeInfo.Location.verify(message.location[i]);
                        if (error)
                            return "location." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
             */
            SourceCodeInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.SourceCodeInfo)
                    return object;
                let message = new $root.google.protobuf.SourceCodeInfo();
                if (object.location) {
                    if (!Array.isArray(object.location))
                        throw TypeError(".google.protobuf.SourceCodeInfo.location: array expected");
                    message.location = [];
                    for (let i = 0; i < object.location.length; ++i) {
                        if (typeof object.location[i] !== "object")
                            throw TypeError(".google.protobuf.SourceCodeInfo.location: object expected");
                        message.location[i] = $root.google.protobuf.SourceCodeInfo.Location.fromObject(object.location[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {google.protobuf.SourceCodeInfo} message SourceCodeInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SourceCodeInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.location = [];
                if (message.location && message.location.length) {
                    object.location = [];
                    for (let j = 0; j < message.location.length; ++j)
                        object.location[j] = $root.google.protobuf.SourceCodeInfo.Location.toObject(message.location[j], options);
                }
                return object;
            };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @function toJSON
             * @memberof google.protobuf.SourceCodeInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SourceCodeInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SourceCodeInfo
             * @function getTypeUrl
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SourceCodeInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.SourceCodeInfo";
            };

            SourceCodeInfo.Location = (function() {

                /**
                 * Properties of a Location.
                 * @memberof google.protobuf.SourceCodeInfo
                 * @interface ILocation
                 * @property {Array.<number>|null} [path] Location path
                 * @property {Array.<number>|null} [span] Location span
                 * @property {string|null} [leadingComments] Location leadingComments
                 * @property {string|null} [trailingComments] Location trailingComments
                 * @property {Array.<string>|null} [leadingDetachedComments] Location leadingDetachedComments
                 */

                /**
                 * Constructs a new Location.
                 * @memberof google.protobuf.SourceCodeInfo
                 * @classdesc Represents a Location.
                 * @implements ILocation
                 * @constructor
                 * @param {google.protobuf.SourceCodeInfo.ILocation=} [properties] Properties to set
                 */
                function Location(properties) {
                    this.path = [];
                    this.span = [];
                    this.leadingDetachedComments = [];
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Location path.
                 * @member {Array.<number>} path
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.path = $util.emptyArray;

                /**
                 * Location span.
                 * @member {Array.<number>} span
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.span = $util.emptyArray;

                /**
                 * Location leadingComments.
                 * @member {string} leadingComments
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.leadingComments = "";

                /**
                 * Location trailingComments.
                 * @member {string} trailingComments
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.trailingComments = "";

                /**
                 * Location leadingDetachedComments.
                 * @member {Array.<string>} leadingDetachedComments
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.leadingDetachedComments = $util.emptyArray;

                /**
                 * Creates a new Location instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {google.protobuf.SourceCodeInfo.ILocation=} [properties] Properties to set
                 * @returns {google.protobuf.SourceCodeInfo.Location} Location instance
                 */
                Location.create = function create(properties) {
                    return new Location(properties);
                };

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {google.protobuf.SourceCodeInfo.ILocation} message Location message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Location.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.path != null && message.path.length) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork();
                        for (let i = 0; i < message.path.length; ++i)
                            writer.int32(message.path[i]);
                        writer.ldelim();
                    }
                    if (message.span != null && message.span.length) {
                        writer.uint32(/* id 2, wireType 2 =*/18).fork();
                        for (let i = 0; i < message.span.length; ++i)
                            writer.int32(message.span[i]);
                        writer.ldelim();
                    }
                    if (message.leadingComments != null && Object.hasOwnProperty.call(message, "leadingComments"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.leadingComments);
                    if (message.trailingComments != null && Object.hasOwnProperty.call(message, "trailingComments"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.trailingComments);
                    if (message.leadingDetachedComments != null && message.leadingDetachedComments.length)
                        for (let i = 0; i < message.leadingDetachedComments.length; ++i)
                            writer.uint32(/* id 6, wireType 2 =*/50).string(message.leadingDetachedComments[i]);
                    return writer;
                };

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {google.protobuf.SourceCodeInfo.ILocation} message Location message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Location.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.SourceCodeInfo.Location} Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Location.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.SourceCodeInfo.Location();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                if (!(message.path && message.path.length))
                                    message.path = [];
                                if ((tag & 7) === 2) {
                                    let end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.path.push(reader.int32());
                                } else
                                    message.path.push(reader.int32());
                                break;
                            }
                        case 2: {
                                if (!(message.span && message.span.length))
                                    message.span = [];
                                if ((tag & 7) === 2) {
                                    let end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.span.push(reader.int32());
                                } else
                                    message.span.push(reader.int32());
                                break;
                            }
                        case 3: {
                                message.leadingComments = reader.string();
                                break;
                            }
                        case 4: {
                                message.trailingComments = reader.string();
                                break;
                            }
                        case 6: {
                                if (!(message.leadingDetachedComments && message.leadingDetachedComments.length))
                                    message.leadingDetachedComments = [];
                                message.leadingDetachedComments.push(reader.string());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.SourceCodeInfo.Location} Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Location.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Location message.
                 * @function verify
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Location.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.path != null && message.hasOwnProperty("path")) {
                        if (!Array.isArray(message.path))
                            return "path: array expected";
                        for (let i = 0; i < message.path.length; ++i)
                            if (!$util.isInteger(message.path[i]))
                                return "path: integer[] expected";
                    }
                    if (message.span != null && message.hasOwnProperty("span")) {
                        if (!Array.isArray(message.span))
                            return "span: array expected";
                        for (let i = 0; i < message.span.length; ++i)
                            if (!$util.isInteger(message.span[i]))
                                return "span: integer[] expected";
                    }
                    if (message.leadingComments != null && message.hasOwnProperty("leadingComments"))
                        if (!$util.isString(message.leadingComments))
                            return "leadingComments: string expected";
                    if (message.trailingComments != null && message.hasOwnProperty("trailingComments"))
                        if (!$util.isString(message.trailingComments))
                            return "trailingComments: string expected";
                    if (message.leadingDetachedComments != null && message.hasOwnProperty("leadingDetachedComments")) {
                        if (!Array.isArray(message.leadingDetachedComments))
                            return "leadingDetachedComments: array expected";
                        for (let i = 0; i < message.leadingDetachedComments.length; ++i)
                            if (!$util.isString(message.leadingDetachedComments[i]))
                                return "leadingDetachedComments: string[] expected";
                    }
                    return null;
                };

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.SourceCodeInfo.Location} Location
                 */
                Location.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.SourceCodeInfo.Location)
                        return object;
                    let message = new $root.google.protobuf.SourceCodeInfo.Location();
                    if (object.path) {
                        if (!Array.isArray(object.path))
                            throw TypeError(".google.protobuf.SourceCodeInfo.Location.path: array expected");
                        message.path = [];
                        for (let i = 0; i < object.path.length; ++i)
                            message.path[i] = object.path[i] | 0;
                    }
                    if (object.span) {
                        if (!Array.isArray(object.span))
                            throw TypeError(".google.protobuf.SourceCodeInfo.Location.span: array expected");
                        message.span = [];
                        for (let i = 0; i < object.span.length; ++i)
                            message.span[i] = object.span[i] | 0;
                    }
                    if (object.leadingComments != null)
                        message.leadingComments = String(object.leadingComments);
                    if (object.trailingComments != null)
                        message.trailingComments = String(object.trailingComments);
                    if (object.leadingDetachedComments) {
                        if (!Array.isArray(object.leadingDetachedComments))
                            throw TypeError(".google.protobuf.SourceCodeInfo.Location.leadingDetachedComments: array expected");
                        message.leadingDetachedComments = [];
                        for (let i = 0; i < object.leadingDetachedComments.length; ++i)
                            message.leadingDetachedComments[i] = String(object.leadingDetachedComments[i]);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {google.protobuf.SourceCodeInfo.Location} message Location
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Location.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults) {
                        object.path = [];
                        object.span = [];
                        object.leadingDetachedComments = [];
                    }
                    if (options.defaults) {
                        object.leadingComments = "";
                        object.trailingComments = "";
                    }
                    if (message.path && message.path.length) {
                        object.path = [];
                        for (let j = 0; j < message.path.length; ++j)
                            object.path[j] = message.path[j];
                    }
                    if (message.span && message.span.length) {
                        object.span = [];
                        for (let j = 0; j < message.span.length; ++j)
                            object.span[j] = message.span[j];
                    }
                    if (message.leadingComments != null && message.hasOwnProperty("leadingComments"))
                        object.leadingComments = message.leadingComments;
                    if (message.trailingComments != null && message.hasOwnProperty("trailingComments"))
                        object.trailingComments = message.trailingComments;
                    if (message.leadingDetachedComments && message.leadingDetachedComments.length) {
                        object.leadingDetachedComments = [];
                        for (let j = 0; j < message.leadingDetachedComments.length; ++j)
                            object.leadingDetachedComments[j] = message.leadingDetachedComments[j];
                    }
                    return object;
                };

                /**
                 * Converts this Location to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Location.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Location
                 * @function getTypeUrl
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Location.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.SourceCodeInfo.Location";
                };

                return Location;
            })();

            return SourceCodeInfo;
        })();

        protobuf.GeneratedCodeInfo = (function() {

            /**
             * Properties of a GeneratedCodeInfo.
             * @memberof google.protobuf
             * @interface IGeneratedCodeInfo
             * @property {Array.<google.protobuf.GeneratedCodeInfo.IAnnotation>|null} [annotation] GeneratedCodeInfo annotation
             */

            /**
             * Constructs a new GeneratedCodeInfo.
             * @memberof google.protobuf
             * @classdesc Represents a GeneratedCodeInfo.
             * @implements IGeneratedCodeInfo
             * @constructor
             * @param {google.protobuf.IGeneratedCodeInfo=} [properties] Properties to set
             */
            function GeneratedCodeInfo(properties) {
                this.annotation = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GeneratedCodeInfo annotation.
             * @member {Array.<google.protobuf.GeneratedCodeInfo.IAnnotation>} annotation
             * @memberof google.protobuf.GeneratedCodeInfo
             * @instance
             */
            GeneratedCodeInfo.prototype.annotation = $util.emptyArray;

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @function create
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {google.protobuf.IGeneratedCodeInfo=} [properties] Properties to set
             * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo instance
             */
            GeneratedCodeInfo.create = function create(properties) {
                return new GeneratedCodeInfo(properties);
            };

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {google.protobuf.IGeneratedCodeInfo} message GeneratedCodeInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GeneratedCodeInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.annotation != null && message.annotation.length)
                    for (let i = 0; i < message.annotation.length; ++i)
                        $root.google.protobuf.GeneratedCodeInfo.Annotation.encode(message.annotation[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {google.protobuf.IGeneratedCodeInfo} message GeneratedCodeInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GeneratedCodeInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GeneratedCodeInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.GeneratedCodeInfo();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.annotation && message.annotation.length))
                                message.annotation = [];
                            message.annotation.push($root.google.protobuf.GeneratedCodeInfo.Annotation.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GeneratedCodeInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GeneratedCodeInfo message.
             * @function verify
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GeneratedCodeInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.annotation != null && message.hasOwnProperty("annotation")) {
                    if (!Array.isArray(message.annotation))
                        return "annotation: array expected";
                    for (let i = 0; i < message.annotation.length; ++i) {
                        let error = $root.google.protobuf.GeneratedCodeInfo.Annotation.verify(message.annotation[i]);
                        if (error)
                            return "annotation." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
             */
            GeneratedCodeInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.GeneratedCodeInfo)
                    return object;
                let message = new $root.google.protobuf.GeneratedCodeInfo();
                if (object.annotation) {
                    if (!Array.isArray(object.annotation))
                        throw TypeError(".google.protobuf.GeneratedCodeInfo.annotation: array expected");
                    message.annotation = [];
                    for (let i = 0; i < object.annotation.length; ++i) {
                        if (typeof object.annotation[i] !== "object")
                            throw TypeError(".google.protobuf.GeneratedCodeInfo.annotation: object expected");
                        message.annotation[i] = $root.google.protobuf.GeneratedCodeInfo.Annotation.fromObject(object.annotation[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {google.protobuf.GeneratedCodeInfo} message GeneratedCodeInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GeneratedCodeInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.annotation = [];
                if (message.annotation && message.annotation.length) {
                    object.annotation = [];
                    for (let j = 0; j < message.annotation.length; ++j)
                        object.annotation[j] = $root.google.protobuf.GeneratedCodeInfo.Annotation.toObject(message.annotation[j], options);
                }
                return object;
            };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @function toJSON
             * @memberof google.protobuf.GeneratedCodeInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GeneratedCodeInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GeneratedCodeInfo
             * @function getTypeUrl
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GeneratedCodeInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.GeneratedCodeInfo";
            };

            GeneratedCodeInfo.Annotation = (function() {

                /**
                 * Properties of an Annotation.
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @interface IAnnotation
                 * @property {Array.<number>|null} [path] Annotation path
                 * @property {string|null} [sourceFile] Annotation sourceFile
                 * @property {number|null} [begin] Annotation begin
                 * @property {number|null} [end] Annotation end
                 */

                /**
                 * Constructs a new Annotation.
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @classdesc Represents an Annotation.
                 * @implements IAnnotation
                 * @constructor
                 * @param {google.protobuf.GeneratedCodeInfo.IAnnotation=} [properties] Properties to set
                 */
                function Annotation(properties) {
                    this.path = [];
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Annotation path.
                 * @member {Array.<number>} path
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @instance
                 */
                Annotation.prototype.path = $util.emptyArray;

                /**
                 * Annotation sourceFile.
                 * @member {string} sourceFile
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @instance
                 */
                Annotation.prototype.sourceFile = "";

                /**
                 * Annotation begin.
                 * @member {number} begin
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @instance
                 */
                Annotation.prototype.begin = 0;

                /**
                 * Annotation end.
                 * @member {number} end
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @instance
                 */
                Annotation.prototype.end = 0;

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {google.protobuf.GeneratedCodeInfo.IAnnotation=} [properties] Properties to set
                 * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation instance
                 */
                Annotation.create = function create(properties) {
                    return new Annotation(properties);
                };

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {google.protobuf.GeneratedCodeInfo.IAnnotation} message Annotation message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Annotation.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.path != null && message.path.length) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork();
                        for (let i = 0; i < message.path.length; ++i)
                            writer.int32(message.path[i]);
                        writer.ldelim();
                    }
                    if (message.sourceFile != null && Object.hasOwnProperty.call(message, "sourceFile"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.sourceFile);
                    if (message.begin != null && Object.hasOwnProperty.call(message, "begin"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.begin);
                    if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.end);
                    return writer;
                };

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {google.protobuf.GeneratedCodeInfo.IAnnotation} message Annotation message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Annotation.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Annotation.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.GeneratedCodeInfo.Annotation();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                if (!(message.path && message.path.length))
                                    message.path = [];
                                if ((tag & 7) === 2) {
                                    let end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.path.push(reader.int32());
                                } else
                                    message.path.push(reader.int32());
                                break;
                            }
                        case 2: {
                                message.sourceFile = reader.string();
                                break;
                            }
                        case 3: {
                                message.begin = reader.int32();
                                break;
                            }
                        case 4: {
                                message.end = reader.int32();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Annotation.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an Annotation message.
                 * @function verify
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Annotation.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.path != null && message.hasOwnProperty("path")) {
                        if (!Array.isArray(message.path))
                            return "path: array expected";
                        for (let i = 0; i < message.path.length; ++i)
                            if (!$util.isInteger(message.path[i]))
                                return "path: integer[] expected";
                    }
                    if (message.sourceFile != null && message.hasOwnProperty("sourceFile"))
                        if (!$util.isString(message.sourceFile))
                            return "sourceFile: string expected";
                    if (message.begin != null && message.hasOwnProperty("begin"))
                        if (!$util.isInteger(message.begin))
                            return "begin: integer expected";
                    if (message.end != null && message.hasOwnProperty("end"))
                        if (!$util.isInteger(message.end))
                            return "end: integer expected";
                    return null;
                };

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                 */
                Annotation.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.GeneratedCodeInfo.Annotation)
                        return object;
                    let message = new $root.google.protobuf.GeneratedCodeInfo.Annotation();
                    if (object.path) {
                        if (!Array.isArray(object.path))
                            throw TypeError(".google.protobuf.GeneratedCodeInfo.Annotation.path: array expected");
                        message.path = [];
                        for (let i = 0; i < object.path.length; ++i)
                            message.path[i] = object.path[i] | 0;
                    }
                    if (object.sourceFile != null)
                        message.sourceFile = String(object.sourceFile);
                    if (object.begin != null)
                        message.begin = object.begin | 0;
                    if (object.end != null)
                        message.end = object.end | 0;
                    return message;
                };

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {google.protobuf.GeneratedCodeInfo.Annotation} message Annotation
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Annotation.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults)
                        object.path = [];
                    if (options.defaults) {
                        object.sourceFile = "";
                        object.begin = 0;
                        object.end = 0;
                    }
                    if (message.path && message.path.length) {
                        object.path = [];
                        for (let j = 0; j < message.path.length; ++j)
                            object.path[j] = message.path[j];
                    }
                    if (message.sourceFile != null && message.hasOwnProperty("sourceFile"))
                        object.sourceFile = message.sourceFile;
                    if (message.begin != null && message.hasOwnProperty("begin"))
                        object.begin = message.begin;
                    if (message.end != null && message.hasOwnProperty("end"))
                        object.end = message.end;
                    return object;
                };

                /**
                 * Converts this Annotation to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Annotation.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Annotation
                 * @function getTypeUrl
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Annotation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.GeneratedCodeInfo.Annotation";
                };

                return Annotation;
            })();

            return GeneratedCodeInfo;
        })();

        return protobuf;
    })();

    return google;
})();

export const tag = $root.tag = (() => {

    /**
     * Namespace tag.
     * @exports tag
     * @namespace
     */
    const tag = {};

    tag.Tag = (function() {

        /**
         * Properties of a Tag.
         * @memberof tag
         * @interface ITag
         * @property {number|null} [id] Tag id
         * @property {string|null} [name] Tag name
         * @property {tag.TagType|null} [type] Tag type
         */

        /**
         * Constructs a new Tag.
         * @memberof tag
         * @classdesc Represents a Tag.
         * @implements ITag
         * @constructor
         * @param {tag.ITag=} [properties] Properties to set
         */
        function Tag(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Tag id.
         * @member {number} id
         * @memberof tag.Tag
         * @instance
         */
        Tag.prototype.id = 0;

        /**
         * Tag name.
         * @member {string} name
         * @memberof tag.Tag
         * @instance
         */
        Tag.prototype.name = "";

        /**
         * Tag type.
         * @member {tag.TagType} type
         * @memberof tag.Tag
         * @instance
         */
        Tag.prototype.type = 0;

        /**
         * Creates a new Tag instance using the specified properties.
         * @function create
         * @memberof tag.Tag
         * @static
         * @param {tag.ITag=} [properties] Properties to set
         * @returns {tag.Tag} Tag instance
         */
        Tag.create = function create(properties) {
            return new Tag(properties);
        };

        /**
         * Encodes the specified Tag message. Does not implicitly {@link tag.Tag.verify|verify} messages.
         * @function encode
         * @memberof tag.Tag
         * @static
         * @param {tag.ITag} message Tag message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Tag.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.type);
            return writer;
        };

        /**
         * Encodes the specified Tag message, length delimited. Does not implicitly {@link tag.Tag.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tag.Tag
         * @static
         * @param {tag.ITag} message Tag message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Tag.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Tag message from the specified reader or buffer.
         * @function decode
         * @memberof tag.Tag
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tag.Tag} Tag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Tag.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.tag.Tag();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int32();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.type = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Tag message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tag.Tag
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tag.Tag} Tag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Tag.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Tag message.
         * @function verify
         * @memberof tag.Tag
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Tag.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                    break;
                }
            return null;
        };

        /**
         * Creates a Tag message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tag.Tag
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tag.Tag} Tag
         */
        Tag.fromObject = function fromObject(object) {
            if (object instanceof $root.tag.Tag)
                return object;
            let message = new $root.tag.Tag();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.name != null)
                message.name = String(object.name);
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "SYSTEM":
            case 0:
                message.type = 0;
                break;
            case "USER":
            case 1:
                message.type = 1;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a Tag message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tag.Tag
         * @static
         * @param {tag.Tag} message Tag
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Tag.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = 0;
                object.name = "";
                object.type = options.enums === String ? "SYSTEM" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.tag.TagType[message.type] === undefined ? message.type : $root.tag.TagType[message.type] : message.type;
            return object;
        };

        /**
         * Converts this Tag to JSON.
         * @function toJSON
         * @memberof tag.Tag
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Tag.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Tag
         * @function getTypeUrl
         * @memberof tag.Tag
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Tag.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/tag.Tag";
        };

        return Tag;
    })();

    /**
     * TagType enum.
     * @name tag.TagType
     * @enum {number}
     * @property {number} SYSTEM=0 SYSTEM value
     * @property {number} USER=1 USER value
     */
    tag.TagType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "SYSTEM"] = 0;
        values[valuesById[1] = "USER"] = 1;
        return values;
    })();

    return tag;
})();

export { $root as default };
