/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

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
