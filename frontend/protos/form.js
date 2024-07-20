/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const form = $root.form = (() => {

    /**
     * Namespace form.
     * @exports form
     * @namespace
     */
    const form = {};

    form.FormOptions = (function() {

        /**
         * Properties of a FormOptions.
         * @memberof form
         * @interface IFormOptions
         * @property {boolean|null} [required] FormOptions required
         * @property {boolean|null} [disabled] FormOptions disabled
         * @property {boolean|null} [readOnly] FormOptions readOnly
         * @property {boolean|null} [visible] FormOptions visible
         * @property {Array.<form.IFormValidation>|null} [validations] FormOptions validations
         */

        /**
         * Constructs a new FormOptions.
         * @memberof form
         * @classdesc Represents a FormOptions.
         * @implements IFormOptions
         * @constructor
         * @param {form.IFormOptions=} [properties] Properties to set
         */
        function FormOptions(properties) {
            this.validations = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FormOptions required.
         * @member {boolean} required
         * @memberof form.FormOptions
         * @instance
         */
        FormOptions.prototype.required = false;

        /**
         * FormOptions disabled.
         * @member {boolean} disabled
         * @memberof form.FormOptions
         * @instance
         */
        FormOptions.prototype.disabled = false;

        /**
         * FormOptions readOnly.
         * @member {boolean} readOnly
         * @memberof form.FormOptions
         * @instance
         */
        FormOptions.prototype.readOnly = false;

        /**
         * FormOptions visible.
         * @member {boolean} visible
         * @memberof form.FormOptions
         * @instance
         */
        FormOptions.prototype.visible = false;

        /**
         * FormOptions validations.
         * @member {Array.<form.IFormValidation>} validations
         * @memberof form.FormOptions
         * @instance
         */
        FormOptions.prototype.validations = $util.emptyArray;

        /**
         * Creates a new FormOptions instance using the specified properties.
         * @function create
         * @memberof form.FormOptions
         * @static
         * @param {form.IFormOptions=} [properties] Properties to set
         * @returns {form.FormOptions} FormOptions instance
         */
        FormOptions.create = function create(properties) {
            return new FormOptions(properties);
        };

        /**
         * Encodes the specified FormOptions message. Does not implicitly {@link form.FormOptions.verify|verify} messages.
         * @function encode
         * @memberof form.FormOptions
         * @static
         * @param {form.IFormOptions} message FormOptions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FormOptions.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.required != null && Object.hasOwnProperty.call(message, "required"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.required);
            if (message.disabled != null && Object.hasOwnProperty.call(message, "disabled"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.disabled);
            if (message.readOnly != null && Object.hasOwnProperty.call(message, "readOnly"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.readOnly);
            if (message.visible != null && Object.hasOwnProperty.call(message, "visible"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.visible);
            if (message.validations != null && message.validations.length)
                for (let i = 0; i < message.validations.length; ++i)
                    $root.form.FormValidation.encode(message.validations[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FormOptions message, length delimited. Does not implicitly {@link form.FormOptions.verify|verify} messages.
         * @function encodeDelimited
         * @memberof form.FormOptions
         * @static
         * @param {form.IFormOptions} message FormOptions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FormOptions.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FormOptions message from the specified reader or buffer.
         * @function decode
         * @memberof form.FormOptions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {form.FormOptions} FormOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FormOptions.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.form.FormOptions();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.required = reader.bool();
                        break;
                    }
                case 2: {
                        message.disabled = reader.bool();
                        break;
                    }
                case 3: {
                        message.readOnly = reader.bool();
                        break;
                    }
                case 4: {
                        message.visible = reader.bool();
                        break;
                    }
                case 5: {
                        if (!(message.validations && message.validations.length))
                            message.validations = [];
                        message.validations.push($root.form.FormValidation.decode(reader, reader.uint32()));
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
         * Decodes a FormOptions message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof form.FormOptions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {form.FormOptions} FormOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FormOptions.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FormOptions message.
         * @function verify
         * @memberof form.FormOptions
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FormOptions.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.required != null && message.hasOwnProperty("required"))
                if (typeof message.required !== "boolean")
                    return "required: boolean expected";
            if (message.disabled != null && message.hasOwnProperty("disabled"))
                if (typeof message.disabled !== "boolean")
                    return "disabled: boolean expected";
            if (message.readOnly != null && message.hasOwnProperty("readOnly"))
                if (typeof message.readOnly !== "boolean")
                    return "readOnly: boolean expected";
            if (message.visible != null && message.hasOwnProperty("visible"))
                if (typeof message.visible !== "boolean")
                    return "visible: boolean expected";
            if (message.validations != null && message.hasOwnProperty("validations")) {
                if (!Array.isArray(message.validations))
                    return "validations: array expected";
                for (let i = 0; i < message.validations.length; ++i) {
                    let error = $root.form.FormValidation.verify(message.validations[i]);
                    if (error)
                        return "validations." + error;
                }
            }
            return null;
        };

        /**
         * Creates a FormOptions message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof form.FormOptions
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {form.FormOptions} FormOptions
         */
        FormOptions.fromObject = function fromObject(object) {
            if (object instanceof $root.form.FormOptions)
                return object;
            let message = new $root.form.FormOptions();
            if (object.required != null)
                message.required = Boolean(object.required);
            if (object.disabled != null)
                message.disabled = Boolean(object.disabled);
            if (object.readOnly != null)
                message.readOnly = Boolean(object.readOnly);
            if (object.visible != null)
                message.visible = Boolean(object.visible);
            if (object.validations) {
                if (!Array.isArray(object.validations))
                    throw TypeError(".form.FormOptions.validations: array expected");
                message.validations = [];
                for (let i = 0; i < object.validations.length; ++i) {
                    if (typeof object.validations[i] !== "object")
                        throw TypeError(".form.FormOptions.validations: object expected");
                    message.validations[i] = $root.form.FormValidation.fromObject(object.validations[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a FormOptions message. Also converts values to other types if specified.
         * @function toObject
         * @memberof form.FormOptions
         * @static
         * @param {form.FormOptions} message FormOptions
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FormOptions.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.validations = [];
            if (options.defaults) {
                object.required = false;
                object.disabled = false;
                object.readOnly = false;
                object.visible = false;
            }
            if (message.required != null && message.hasOwnProperty("required"))
                object.required = message.required;
            if (message.disabled != null && message.hasOwnProperty("disabled"))
                object.disabled = message.disabled;
            if (message.readOnly != null && message.hasOwnProperty("readOnly"))
                object.readOnly = message.readOnly;
            if (message.visible != null && message.hasOwnProperty("visible"))
                object.visible = message.visible;
            if (message.validations && message.validations.length) {
                object.validations = [];
                for (let j = 0; j < message.validations.length; ++j)
                    object.validations[j] = $root.form.FormValidation.toObject(message.validations[j], options);
            }
            return object;
        };

        /**
         * Converts this FormOptions to JSON.
         * @function toJSON
         * @memberof form.FormOptions
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FormOptions.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FormOptions
         * @function getTypeUrl
         * @memberof form.FormOptions
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FormOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/form.FormOptions";
        };

        return FormOptions;
    })();

    form.FormLengthOptions = (function() {

        /**
         * Properties of a FormLengthOptions.
         * @memberof form
         * @interface IFormLengthOptions
         * @property {number|null} [max] FormLengthOptions max
         * @property {number|null} [min] FormLengthOptions min
         */

        /**
         * Constructs a new FormLengthOptions.
         * @memberof form
         * @classdesc Represents a FormLengthOptions.
         * @implements IFormLengthOptions
         * @constructor
         * @param {form.IFormLengthOptions=} [properties] Properties to set
         */
        function FormLengthOptions(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FormLengthOptions max.
         * @member {number} max
         * @memberof form.FormLengthOptions
         * @instance
         */
        FormLengthOptions.prototype.max = 0;

        /**
         * FormLengthOptions min.
         * @member {number} min
         * @memberof form.FormLengthOptions
         * @instance
         */
        FormLengthOptions.prototype.min = 0;

        /**
         * Creates a new FormLengthOptions instance using the specified properties.
         * @function create
         * @memberof form.FormLengthOptions
         * @static
         * @param {form.IFormLengthOptions=} [properties] Properties to set
         * @returns {form.FormLengthOptions} FormLengthOptions instance
         */
        FormLengthOptions.create = function create(properties) {
            return new FormLengthOptions(properties);
        };

        /**
         * Encodes the specified FormLengthOptions message. Does not implicitly {@link form.FormLengthOptions.verify|verify} messages.
         * @function encode
         * @memberof form.FormLengthOptions
         * @static
         * @param {form.IFormLengthOptions} message FormLengthOptions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FormLengthOptions.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.max != null && Object.hasOwnProperty.call(message, "max"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.max);
            if (message.min != null && Object.hasOwnProperty.call(message, "min"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.min);
            return writer;
        };

        /**
         * Encodes the specified FormLengthOptions message, length delimited. Does not implicitly {@link form.FormLengthOptions.verify|verify} messages.
         * @function encodeDelimited
         * @memberof form.FormLengthOptions
         * @static
         * @param {form.IFormLengthOptions} message FormLengthOptions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FormLengthOptions.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FormLengthOptions message from the specified reader or buffer.
         * @function decode
         * @memberof form.FormLengthOptions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {form.FormLengthOptions} FormLengthOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FormLengthOptions.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.form.FormLengthOptions();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.max = reader.int32();
                        break;
                    }
                case 2: {
                        message.min = reader.int32();
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
         * Decodes a FormLengthOptions message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof form.FormLengthOptions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {form.FormLengthOptions} FormLengthOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FormLengthOptions.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FormLengthOptions message.
         * @function verify
         * @memberof form.FormLengthOptions
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FormLengthOptions.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.max != null && message.hasOwnProperty("max"))
                if (!$util.isInteger(message.max))
                    return "max: integer expected";
            if (message.min != null && message.hasOwnProperty("min"))
                if (!$util.isInteger(message.min))
                    return "min: integer expected";
            return null;
        };

        /**
         * Creates a FormLengthOptions message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof form.FormLengthOptions
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {form.FormLengthOptions} FormLengthOptions
         */
        FormLengthOptions.fromObject = function fromObject(object) {
            if (object instanceof $root.form.FormLengthOptions)
                return object;
            let message = new $root.form.FormLengthOptions();
            if (object.max != null)
                message.max = object.max | 0;
            if (object.min != null)
                message.min = object.min | 0;
            return message;
        };

        /**
         * Creates a plain object from a FormLengthOptions message. Also converts values to other types if specified.
         * @function toObject
         * @memberof form.FormLengthOptions
         * @static
         * @param {form.FormLengthOptions} message FormLengthOptions
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FormLengthOptions.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.max = 0;
                object.min = 0;
            }
            if (message.max != null && message.hasOwnProperty("max"))
                object.max = message.max;
            if (message.min != null && message.hasOwnProperty("min"))
                object.min = message.min;
            return object;
        };

        /**
         * Converts this FormLengthOptions to JSON.
         * @function toJSON
         * @memberof form.FormLengthOptions
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FormLengthOptions.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FormLengthOptions
         * @function getTypeUrl
         * @memberof form.FormLengthOptions
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FormLengthOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/form.FormLengthOptions";
        };

        return FormLengthOptions;
    })();

    form.FormValidation = (function() {

        /**
         * Properties of a FormValidation.
         * @memberof form
         * @interface IFormValidation
         * @property {string|null} [message] FormValidation message
         * @property {form.FormValidationType|null} [type] FormValidation type
         */

        /**
         * Constructs a new FormValidation.
         * @memberof form
         * @classdesc Represents a FormValidation.
         * @implements IFormValidation
         * @constructor
         * @param {form.IFormValidation=} [properties] Properties to set
         */
        function FormValidation(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FormValidation message.
         * @member {string} message
         * @memberof form.FormValidation
         * @instance
         */
        FormValidation.prototype.message = "";

        /**
         * FormValidation type.
         * @member {form.FormValidationType} type
         * @memberof form.FormValidation
         * @instance
         */
        FormValidation.prototype.type = 0;

        /**
         * Creates a new FormValidation instance using the specified properties.
         * @function create
         * @memberof form.FormValidation
         * @static
         * @param {form.IFormValidation=} [properties] Properties to set
         * @returns {form.FormValidation} FormValidation instance
         */
        FormValidation.create = function create(properties) {
            return new FormValidation(properties);
        };

        /**
         * Encodes the specified FormValidation message. Does not implicitly {@link form.FormValidation.verify|verify} messages.
         * @function encode
         * @memberof form.FormValidation
         * @static
         * @param {form.IFormValidation} message FormValidation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FormValidation.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
            return writer;
        };

        /**
         * Encodes the specified FormValidation message, length delimited. Does not implicitly {@link form.FormValidation.verify|verify} messages.
         * @function encodeDelimited
         * @memberof form.FormValidation
         * @static
         * @param {form.IFormValidation} message FormValidation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FormValidation.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FormValidation message from the specified reader or buffer.
         * @function decode
         * @memberof form.FormValidation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {form.FormValidation} FormValidation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FormValidation.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.form.FormValidation();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.message = reader.string();
                        break;
                    }
                case 2: {
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
         * Decodes a FormValidation message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof form.FormValidation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {form.FormValidation} FormValidation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FormValidation.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FormValidation message.
         * @function verify
         * @memberof form.FormValidation
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FormValidation.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
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
         * Creates a FormValidation message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof form.FormValidation
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {form.FormValidation} FormValidation
         */
        FormValidation.fromObject = function fromObject(object) {
            if (object instanceof $root.form.FormValidation)
                return object;
            let message = new $root.form.FormValidation();
            if (object.message != null)
                message.message = String(object.message);
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "ERROR":
            case 0:
                message.type = 0;
                break;
            case "WARNING":
            case 1:
                message.type = 1;
                break;
            case "INFO":
            case 2:
                message.type = 2;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a FormValidation message. Also converts values to other types if specified.
         * @function toObject
         * @memberof form.FormValidation
         * @static
         * @param {form.FormValidation} message FormValidation
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FormValidation.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.message = "";
                object.type = options.enums === String ? "ERROR" : 0;
            }
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.form.FormValidationType[message.type] === undefined ? message.type : $root.form.FormValidationType[message.type] : message.type;
            return object;
        };

        /**
         * Converts this FormValidation to JSON.
         * @function toJSON
         * @memberof form.FormValidation
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FormValidation.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FormValidation
         * @function getTypeUrl
         * @memberof form.FormValidation
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FormValidation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/form.FormValidation";
        };

        return FormValidation;
    })();

    /**
     * FormValidationType enum.
     * @name form.FormValidationType
     * @enum {number}
     * @property {number} ERROR=0 ERROR value
     * @property {number} WARNING=1 WARNING value
     * @property {number} INFO=2 INFO value
     */
    form.FormValidationType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ERROR"] = 0;
        values[valuesById[1] = "WARNING"] = 1;
        values[valuesById[2] = "INFO"] = 2;
        return values;
    })();

    form.FormSelectOptions = (function() {

        /**
         * Properties of a FormSelectOptions.
         * @memberof form
         * @interface IFormSelectOptions
         * @property {Array.<form.IFormSelectOption>|null} [options] FormSelectOptions options
         */

        /**
         * Constructs a new FormSelectOptions.
         * @memberof form
         * @classdesc Represents a FormSelectOptions.
         * @implements IFormSelectOptions
         * @constructor
         * @param {form.IFormSelectOptions=} [properties] Properties to set
         */
        function FormSelectOptions(properties) {
            this.options = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FormSelectOptions options.
         * @member {Array.<form.IFormSelectOption>} options
         * @memberof form.FormSelectOptions
         * @instance
         */
        FormSelectOptions.prototype.options = $util.emptyArray;

        /**
         * Creates a new FormSelectOptions instance using the specified properties.
         * @function create
         * @memberof form.FormSelectOptions
         * @static
         * @param {form.IFormSelectOptions=} [properties] Properties to set
         * @returns {form.FormSelectOptions} FormSelectOptions instance
         */
        FormSelectOptions.create = function create(properties) {
            return new FormSelectOptions(properties);
        };

        /**
         * Encodes the specified FormSelectOptions message. Does not implicitly {@link form.FormSelectOptions.verify|verify} messages.
         * @function encode
         * @memberof form.FormSelectOptions
         * @static
         * @param {form.IFormSelectOptions} message FormSelectOptions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FormSelectOptions.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.options != null && message.options.length)
                for (let i = 0; i < message.options.length; ++i)
                    $root.form.FormSelectOption.encode(message.options[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FormSelectOptions message, length delimited. Does not implicitly {@link form.FormSelectOptions.verify|verify} messages.
         * @function encodeDelimited
         * @memberof form.FormSelectOptions
         * @static
         * @param {form.IFormSelectOptions} message FormSelectOptions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FormSelectOptions.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FormSelectOptions message from the specified reader or buffer.
         * @function decode
         * @memberof form.FormSelectOptions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {form.FormSelectOptions} FormSelectOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FormSelectOptions.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.form.FormSelectOptions();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.options && message.options.length))
                            message.options = [];
                        message.options.push($root.form.FormSelectOption.decode(reader, reader.uint32()));
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
         * Decodes a FormSelectOptions message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof form.FormSelectOptions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {form.FormSelectOptions} FormSelectOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FormSelectOptions.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FormSelectOptions message.
         * @function verify
         * @memberof form.FormSelectOptions
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FormSelectOptions.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.options != null && message.hasOwnProperty("options")) {
                if (!Array.isArray(message.options))
                    return "options: array expected";
                for (let i = 0; i < message.options.length; ++i) {
                    let error = $root.form.FormSelectOption.verify(message.options[i]);
                    if (error)
                        return "options." + error;
                }
            }
            return null;
        };

        /**
         * Creates a FormSelectOptions message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof form.FormSelectOptions
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {form.FormSelectOptions} FormSelectOptions
         */
        FormSelectOptions.fromObject = function fromObject(object) {
            if (object instanceof $root.form.FormSelectOptions)
                return object;
            let message = new $root.form.FormSelectOptions();
            if (object.options) {
                if (!Array.isArray(object.options))
                    throw TypeError(".form.FormSelectOptions.options: array expected");
                message.options = [];
                for (let i = 0; i < object.options.length; ++i) {
                    if (typeof object.options[i] !== "object")
                        throw TypeError(".form.FormSelectOptions.options: object expected");
                    message.options[i] = $root.form.FormSelectOption.fromObject(object.options[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a FormSelectOptions message. Also converts values to other types if specified.
         * @function toObject
         * @memberof form.FormSelectOptions
         * @static
         * @param {form.FormSelectOptions} message FormSelectOptions
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FormSelectOptions.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.options = [];
            if (message.options && message.options.length) {
                object.options = [];
                for (let j = 0; j < message.options.length; ++j)
                    object.options[j] = $root.form.FormSelectOption.toObject(message.options[j], options);
            }
            return object;
        };

        /**
         * Converts this FormSelectOptions to JSON.
         * @function toJSON
         * @memberof form.FormSelectOptions
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FormSelectOptions.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FormSelectOptions
         * @function getTypeUrl
         * @memberof form.FormSelectOptions
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FormSelectOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/form.FormSelectOptions";
        };

        return FormSelectOptions;
    })();

    form.FormSelectOption = (function() {

        /**
         * Properties of a FormSelectOption.
         * @memberof form
         * @interface IFormSelectOption
         * @property {string|null} [value] FormSelectOption value
         * @property {string|null} [label] FormSelectOption label
         * @property {boolean|null} [disabled] FormSelectOption disabled
         */

        /**
         * Constructs a new FormSelectOption.
         * @memberof form
         * @classdesc Represents a FormSelectOption.
         * @implements IFormSelectOption
         * @constructor
         * @param {form.IFormSelectOption=} [properties] Properties to set
         */
        function FormSelectOption(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FormSelectOption value.
         * @member {string} value
         * @memberof form.FormSelectOption
         * @instance
         */
        FormSelectOption.prototype.value = "";

        /**
         * FormSelectOption label.
         * @member {string} label
         * @memberof form.FormSelectOption
         * @instance
         */
        FormSelectOption.prototype.label = "";

        /**
         * FormSelectOption disabled.
         * @member {boolean} disabled
         * @memberof form.FormSelectOption
         * @instance
         */
        FormSelectOption.prototype.disabled = false;

        /**
         * Creates a new FormSelectOption instance using the specified properties.
         * @function create
         * @memberof form.FormSelectOption
         * @static
         * @param {form.IFormSelectOption=} [properties] Properties to set
         * @returns {form.FormSelectOption} FormSelectOption instance
         */
        FormSelectOption.create = function create(properties) {
            return new FormSelectOption(properties);
        };

        /**
         * Encodes the specified FormSelectOption message. Does not implicitly {@link form.FormSelectOption.verify|verify} messages.
         * @function encode
         * @memberof form.FormSelectOption
         * @static
         * @param {form.IFormSelectOption} message FormSelectOption message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FormSelectOption.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.value);
            if (message.label != null && Object.hasOwnProperty.call(message, "label"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.label);
            if (message.disabled != null && Object.hasOwnProperty.call(message, "disabled"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.disabled);
            return writer;
        };

        /**
         * Encodes the specified FormSelectOption message, length delimited. Does not implicitly {@link form.FormSelectOption.verify|verify} messages.
         * @function encodeDelimited
         * @memberof form.FormSelectOption
         * @static
         * @param {form.IFormSelectOption} message FormSelectOption message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FormSelectOption.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FormSelectOption message from the specified reader or buffer.
         * @function decode
         * @memberof form.FormSelectOption
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {form.FormSelectOption} FormSelectOption
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FormSelectOption.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.form.FormSelectOption();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.value = reader.string();
                        break;
                    }
                case 2: {
                        message.label = reader.string();
                        break;
                    }
                case 3: {
                        message.disabled = reader.bool();
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
         * Decodes a FormSelectOption message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof form.FormSelectOption
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {form.FormSelectOption} FormSelectOption
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FormSelectOption.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FormSelectOption message.
         * @function verify
         * @memberof form.FormSelectOption
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FormSelectOption.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isString(message.value))
                    return "value: string expected";
            if (message.label != null && message.hasOwnProperty("label"))
                if (!$util.isString(message.label))
                    return "label: string expected";
            if (message.disabled != null && message.hasOwnProperty("disabled"))
                if (typeof message.disabled !== "boolean")
                    return "disabled: boolean expected";
            return null;
        };

        /**
         * Creates a FormSelectOption message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof form.FormSelectOption
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {form.FormSelectOption} FormSelectOption
         */
        FormSelectOption.fromObject = function fromObject(object) {
            if (object instanceof $root.form.FormSelectOption)
                return object;
            let message = new $root.form.FormSelectOption();
            if (object.value != null)
                message.value = String(object.value);
            if (object.label != null)
                message.label = String(object.label);
            if (object.disabled != null)
                message.disabled = Boolean(object.disabled);
            return message;
        };

        /**
         * Creates a plain object from a FormSelectOption message. Also converts values to other types if specified.
         * @function toObject
         * @memberof form.FormSelectOption
         * @static
         * @param {form.FormSelectOption} message FormSelectOption
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FormSelectOption.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.value = "";
                object.label = "";
                object.disabled = false;
            }
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            if (message.label != null && message.hasOwnProperty("label"))
                object.label = message.label;
            if (message.disabled != null && message.hasOwnProperty("disabled"))
                object.disabled = message.disabled;
            return object;
        };

        /**
         * Converts this FormSelectOption to JSON.
         * @function toJSON
         * @memberof form.FormSelectOption
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FormSelectOption.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FormSelectOption
         * @function getTypeUrl
         * @memberof form.FormSelectOption
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FormSelectOption.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/form.FormSelectOption";
        };

        return FormSelectOption;
    })();

    return form;
})();

export { $root as default };
