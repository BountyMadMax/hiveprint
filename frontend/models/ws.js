/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const ws = $root.ws = (() => {

    /**
     * Namespace ws.
     * @exports ws
     * @namespace
     */
    const ws = {};

    ws.WebSocketRequest = (function() {

        /**
         * Properties of a WebSocketRequest.
         * @memberof ws
         * @interface IWebSocketRequest
         * @property {ws.WebSocketRequest.WebSocketChannel|null} [channel] WebSocketRequest channel
         * @property {ws.WebSocketRequest.WebSocketAction|null} [action] WebSocketRequest action
         * @property {ws.WebSocketRequest.IWebSocketRequestModelData|null} [data] WebSocketRequest data
         */

        /**
         * Constructs a new WebSocketRequest.
         * @memberof ws
         * @classdesc Represents a WebSocketRequest.
         * @implements IWebSocketRequest
         * @constructor
         * @param {ws.IWebSocketRequest=} [properties] Properties to set
         */
        function WebSocketRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WebSocketRequest channel.
         * @member {ws.WebSocketRequest.WebSocketChannel} channel
         * @memberof ws.WebSocketRequest
         * @instance
         */
        WebSocketRequest.prototype.channel = 0;

        /**
         * WebSocketRequest action.
         * @member {ws.WebSocketRequest.WebSocketAction} action
         * @memberof ws.WebSocketRequest
         * @instance
         */
        WebSocketRequest.prototype.action = 0;

        /**
         * WebSocketRequest data.
         * @member {ws.WebSocketRequest.IWebSocketRequestModelData|null|undefined} data
         * @memberof ws.WebSocketRequest
         * @instance
         */
        WebSocketRequest.prototype.data = null;

        /**
         * Creates a new WebSocketRequest instance using the specified properties.
         * @function create
         * @memberof ws.WebSocketRequest
         * @static
         * @param {ws.IWebSocketRequest=} [properties] Properties to set
         * @returns {ws.WebSocketRequest} WebSocketRequest instance
         */
        WebSocketRequest.create = function create(properties) {
            return new WebSocketRequest(properties);
        };

        /**
         * Encodes the specified WebSocketRequest message. Does not implicitly {@link ws.WebSocketRequest.verify|verify} messages.
         * @function encode
         * @memberof ws.WebSocketRequest
         * @static
         * @param {ws.IWebSocketRequest} message WebSocketRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebSocketRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.channel != null && Object.hasOwnProperty.call(message, "channel"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.channel);
            if (message.action != null && Object.hasOwnProperty.call(message, "action"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.action);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                $root.ws.WebSocketRequest.WebSocketRequestModelData.encode(message.data, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified WebSocketRequest message, length delimited. Does not implicitly {@link ws.WebSocketRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ws.WebSocketRequest
         * @static
         * @param {ws.IWebSocketRequest} message WebSocketRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebSocketRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WebSocketRequest message from the specified reader or buffer.
         * @function decode
         * @memberof ws.WebSocketRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ws.WebSocketRequest} WebSocketRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebSocketRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ws.WebSocketRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.channel = reader.int32();
                        break;
                    }
                case 2: {
                        message.action = reader.int32();
                        break;
                    }
                case 3: {
                        message.data = $root.ws.WebSocketRequest.WebSocketRequestModelData.decode(reader, reader.uint32());
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
         * Decodes a WebSocketRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ws.WebSocketRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ws.WebSocketRequest} WebSocketRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebSocketRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WebSocketRequest message.
         * @function verify
         * @memberof ws.WebSocketRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WebSocketRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.channel != null && message.hasOwnProperty("channel"))
                switch (message.channel) {
                default:
                    return "channel: enum value expected";
                case 0:
                    break;
                }
            if (message.action != null && message.hasOwnProperty("action"))
                switch (message.action) {
                default:
                    return "action: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.data != null && message.hasOwnProperty("data")) {
                let error = $root.ws.WebSocketRequest.WebSocketRequestModelData.verify(message.data);
                if (error)
                    return "data." + error;
            }
            return null;
        };

        /**
         * Creates a WebSocketRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ws.WebSocketRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ws.WebSocketRequest} WebSocketRequest
         */
        WebSocketRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.ws.WebSocketRequest)
                return object;
            let message = new $root.ws.WebSocketRequest();
            switch (object.channel) {
            default:
                if (typeof object.channel === "number") {
                    message.channel = object.channel;
                    break;
                }
                break;
            case "WEB_SOCKET_CHANNEL_STORAGE":
            case 0:
                message.channel = 0;
                break;
            }
            switch (object.action) {
            default:
                if (typeof object.action === "number") {
                    message.action = object.action;
                    break;
                }
                break;
            case "WEB_SOCKET_ACTION_SYNC":
            case 0:
                message.action = 0;
                break;
            case "WEB_SOCKET_ACTION_VALIDATE":
            case 1:
                message.action = 1;
                break;
            }
            if (object.data != null) {
                if (typeof object.data !== "object")
                    throw TypeError(".ws.WebSocketRequest.data: object expected");
                message.data = $root.ws.WebSocketRequest.WebSocketRequestModelData.fromObject(object.data);
            }
            return message;
        };

        /**
         * Creates a plain object from a WebSocketRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ws.WebSocketRequest
         * @static
         * @param {ws.WebSocketRequest} message WebSocketRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WebSocketRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.channel = options.enums === String ? "WEB_SOCKET_CHANNEL_STORAGE" : 0;
                object.action = options.enums === String ? "WEB_SOCKET_ACTION_SYNC" : 0;
                object.data = null;
            }
            if (message.channel != null && message.hasOwnProperty("channel"))
                object.channel = options.enums === String ? $root.ws.WebSocketRequest.WebSocketChannel[message.channel] === undefined ? message.channel : $root.ws.WebSocketRequest.WebSocketChannel[message.channel] : message.channel;
            if (message.action != null && message.hasOwnProperty("action"))
                object.action = options.enums === String ? $root.ws.WebSocketRequest.WebSocketAction[message.action] === undefined ? message.action : $root.ws.WebSocketRequest.WebSocketAction[message.action] : message.action;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = $root.ws.WebSocketRequest.WebSocketRequestModelData.toObject(message.data, options);
            return object;
        };

        /**
         * Converts this WebSocketRequest to JSON.
         * @function toJSON
         * @memberof ws.WebSocketRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WebSocketRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WebSocketRequest
         * @function getTypeUrl
         * @memberof ws.WebSocketRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WebSocketRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ws.WebSocketRequest";
        };

        /**
         * The cannel used to stream the data from.
         * Used to define the model type.
         * @name ws.WebSocketRequest.WebSocketChannel
         * @enum {number}
         * @property {number} WEB_SOCKET_CHANNEL_STORAGE=0 WEB_SOCKET_CHANNEL_STORAGE value
         */
        WebSocketRequest.WebSocketChannel = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "WEB_SOCKET_CHANNEL_STORAGE"] = 0;
            return values;
        })();

        /**
         * WebSocketAction enum.
         * @name ws.WebSocketRequest.WebSocketAction
         * @enum {number}
         * @property {number} WEB_SOCKET_ACTION_SYNC=0 WEB_SOCKET_ACTION_SYNC value
         * @property {number} WEB_SOCKET_ACTION_VALIDATE=1 WEB_SOCKET_ACTION_VALIDATE value
         */
        WebSocketRequest.WebSocketAction = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "WEB_SOCKET_ACTION_SYNC"] = 0;
            values[valuesById[1] = "WEB_SOCKET_ACTION_VALIDATE"] = 1;
            return values;
        })();

        WebSocketRequest.WebSocketRequestModelData = (function() {

            /**
             * Properties of a WebSocketRequestModelData.
             * @memberof ws.WebSocketRequest
             * @interface IWebSocketRequestModelData
             * @property {number|null} [id] WebSocketRequestModelData id
             * @property {boolean|null} ["new"] WebSocketRequestModelData new
             */

            /**
             * Constructs a new WebSocketRequestModelData.
             * @memberof ws.WebSocketRequest
             * @classdesc Represents a WebSocketRequestModelData.
             * @implements IWebSocketRequestModelData
             * @constructor
             * @param {ws.WebSocketRequest.IWebSocketRequestModelData=} [properties] Properties to set
             */
            function WebSocketRequestModelData(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * WebSocketRequestModelData id.
             * @member {number|null|undefined} id
             * @memberof ws.WebSocketRequest.WebSocketRequestModelData
             * @instance
             */
            WebSocketRequestModelData.prototype.id = null;

            /**
             * WebSocketRequestModelData new.
             * @member {boolean|null|undefined} new
             * @memberof ws.WebSocketRequest.WebSocketRequestModelData
             * @instance
             */
            WebSocketRequestModelData.prototype["new"] = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * WebSocketRequestModelData _id.
             * @member {"id"|undefined} _id
             * @memberof ws.WebSocketRequest.WebSocketRequestModelData
             * @instance
             */
            Object.defineProperty(WebSocketRequestModelData.prototype, "_id", {
                get: $util.oneOfGetter($oneOfFields = ["id"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * WebSocketRequestModelData _new.
             * @member {"new"|undefined} _new
             * @memberof ws.WebSocketRequest.WebSocketRequestModelData
             * @instance
             */
            Object.defineProperty(WebSocketRequestModelData.prototype, "_new", {
                get: $util.oneOfGetter($oneOfFields = ["new"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new WebSocketRequestModelData instance using the specified properties.
             * @function create
             * @memberof ws.WebSocketRequest.WebSocketRequestModelData
             * @static
             * @param {ws.WebSocketRequest.IWebSocketRequestModelData=} [properties] Properties to set
             * @returns {ws.WebSocketRequest.WebSocketRequestModelData} WebSocketRequestModelData instance
             */
            WebSocketRequestModelData.create = function create(properties) {
                return new WebSocketRequestModelData(properties);
            };

            /**
             * Encodes the specified WebSocketRequestModelData message. Does not implicitly {@link ws.WebSocketRequest.WebSocketRequestModelData.verify|verify} messages.
             * @function encode
             * @memberof ws.WebSocketRequest.WebSocketRequestModelData
             * @static
             * @param {ws.WebSocketRequest.IWebSocketRequestModelData} message WebSocketRequestModelData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WebSocketRequestModelData.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
                if (message["new"] != null && Object.hasOwnProperty.call(message, "new"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message["new"]);
                return writer;
            };

            /**
             * Encodes the specified WebSocketRequestModelData message, length delimited. Does not implicitly {@link ws.WebSocketRequest.WebSocketRequestModelData.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ws.WebSocketRequest.WebSocketRequestModelData
             * @static
             * @param {ws.WebSocketRequest.IWebSocketRequestModelData} message WebSocketRequestModelData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WebSocketRequestModelData.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a WebSocketRequestModelData message from the specified reader or buffer.
             * @function decode
             * @memberof ws.WebSocketRequest.WebSocketRequestModelData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ws.WebSocketRequest.WebSocketRequestModelData} WebSocketRequestModelData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WebSocketRequestModelData.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ws.WebSocketRequest.WebSocketRequestModelData();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.id = reader.int32();
                            break;
                        }
                    case 2: {
                            message["new"] = reader.bool();
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
             * Decodes a WebSocketRequestModelData message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ws.WebSocketRequest.WebSocketRequestModelData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ws.WebSocketRequest.WebSocketRequestModelData} WebSocketRequestModelData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WebSocketRequestModelData.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a WebSocketRequestModelData message.
             * @function verify
             * @memberof ws.WebSocketRequest.WebSocketRequestModelData
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            WebSocketRequestModelData.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                let properties = {};
                if (message.id != null && message.hasOwnProperty("id")) {
                    properties._id = 1;
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                }
                if (message["new"] != null && message.hasOwnProperty("new")) {
                    properties._new = 1;
                    if (typeof message["new"] !== "boolean")
                        return "new: boolean expected";
                }
                return null;
            };

            /**
             * Creates a WebSocketRequestModelData message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ws.WebSocketRequest.WebSocketRequestModelData
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ws.WebSocketRequest.WebSocketRequestModelData} WebSocketRequestModelData
             */
            WebSocketRequestModelData.fromObject = function fromObject(object) {
                if (object instanceof $root.ws.WebSocketRequest.WebSocketRequestModelData)
                    return object;
                let message = new $root.ws.WebSocketRequest.WebSocketRequestModelData();
                if (object.id != null)
                    message.id = object.id | 0;
                if (object["new"] != null)
                    message["new"] = Boolean(object["new"]);
                return message;
            };

            /**
             * Creates a plain object from a WebSocketRequestModelData message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ws.WebSocketRequest.WebSocketRequestModelData
             * @static
             * @param {ws.WebSocketRequest.WebSocketRequestModelData} message WebSocketRequestModelData
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            WebSocketRequestModelData.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (message.id != null && message.hasOwnProperty("id")) {
                    object.id = message.id;
                    if (options.oneofs)
                        object._id = "id";
                }
                if (message["new"] != null && message.hasOwnProperty("new")) {
                    object["new"] = message["new"];
                    if (options.oneofs)
                        object._new = "new";
                }
                return object;
            };

            /**
             * Converts this WebSocketRequestModelData to JSON.
             * @function toJSON
             * @memberof ws.WebSocketRequest.WebSocketRequestModelData
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            WebSocketRequestModelData.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for WebSocketRequestModelData
             * @function getTypeUrl
             * @memberof ws.WebSocketRequest.WebSocketRequestModelData
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            WebSocketRequestModelData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/ws.WebSocketRequest.WebSocketRequestModelData";
            };

            return WebSocketRequestModelData;
        })();

        return WebSocketRequest;
    })();

    return ws;
})();

export { $root as default };
