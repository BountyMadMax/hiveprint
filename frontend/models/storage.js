/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const storage = $root.storage = (() => {

    /**
     * Namespace storage.
     * @exports storage
     * @namespace
     */
    const storage = {};

    storage.Storage = (function() {

        /**
         * Properties of a Storage.
         * @memberof storage
         * @interface IStorage
         * @property {number|null} [id] Storage id
         * @property {string|null} [name] Storage name
         * @property {string|null} [description] Storage description
         * @property {string|null} [hostname] Storage hostname
         * @property {string|null} [ip] Storage ip
         * @property {string|null} [path] Storage path
         * @property {string|null} [user] Storage user
         * @property {string|null} [password] Storage password
         * @property {storage.Protocol|null} [protocol] Storage protocol
         * @property {storage.ProtocolVersion|null} [protocolVersion] Storage protocolVersion
         */

        /**
         * Constructs a new Storage.
         * @memberof storage
         * @classdesc Represents a Storage.
         * @implements IStorage
         * @constructor
         * @param {storage.IStorage=} [properties] Properties to set
         */
        function Storage(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Storage id.
         * @member {number} id
         * @memberof storage.Storage
         * @instance
         */
        Storage.prototype.id = 0;

        /**
         * Storage name.
         * @member {string} name
         * @memberof storage.Storage
         * @instance
         */
        Storage.prototype.name = "";

        /**
         * Storage description.
         * @member {string|null|undefined} description
         * @memberof storage.Storage
         * @instance
         */
        Storage.prototype.description = null;

        /**
         * Storage hostname.
         * @member {string|null|undefined} hostname
         * @memberof storage.Storage
         * @instance
         */
        Storage.prototype.hostname = null;

        /**
         * Storage ip.
         * @member {string|null|undefined} ip
         * @memberof storage.Storage
         * @instance
         */
        Storage.prototype.ip = null;

        /**
         * Storage path.
         * @member {string|null|undefined} path
         * @memberof storage.Storage
         * @instance
         */
        Storage.prototype.path = null;

        /**
         * Storage user.
         * @member {string|null|undefined} user
         * @memberof storage.Storage
         * @instance
         */
        Storage.prototype.user = null;

        /**
         * Storage password.
         * @member {string|null|undefined} password
         * @memberof storage.Storage
         * @instance
         */
        Storage.prototype.password = null;

        /**
         * Storage protocol.
         * @member {storage.Protocol|null|undefined} protocol
         * @memberof storage.Storage
         * @instance
         */
        Storage.prototype.protocol = null;

        /**
         * Storage protocolVersion.
         * @member {storage.ProtocolVersion|null|undefined} protocolVersion
         * @memberof storage.Storage
         * @instance
         */
        Storage.prototype.protocolVersion = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * Storage _description.
         * @member {"description"|undefined} _description
         * @memberof storage.Storage
         * @instance
         */
        Object.defineProperty(Storage.prototype, "_description", {
            get: $util.oneOfGetter($oneOfFields = ["description"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Storage _hostname.
         * @member {"hostname"|undefined} _hostname
         * @memberof storage.Storage
         * @instance
         */
        Object.defineProperty(Storage.prototype, "_hostname", {
            get: $util.oneOfGetter($oneOfFields = ["hostname"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Storage _ip.
         * @member {"ip"|undefined} _ip
         * @memberof storage.Storage
         * @instance
         */
        Object.defineProperty(Storage.prototype, "_ip", {
            get: $util.oneOfGetter($oneOfFields = ["ip"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Storage _path.
         * @member {"path"|undefined} _path
         * @memberof storage.Storage
         * @instance
         */
        Object.defineProperty(Storage.prototype, "_path", {
            get: $util.oneOfGetter($oneOfFields = ["path"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Storage _user.
         * @member {"user"|undefined} _user
         * @memberof storage.Storage
         * @instance
         */
        Object.defineProperty(Storage.prototype, "_user", {
            get: $util.oneOfGetter($oneOfFields = ["user"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Storage _password.
         * @member {"password"|undefined} _password
         * @memberof storage.Storage
         * @instance
         */
        Object.defineProperty(Storage.prototype, "_password", {
            get: $util.oneOfGetter($oneOfFields = ["password"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Storage _protocol.
         * @member {"protocol"|undefined} _protocol
         * @memberof storage.Storage
         * @instance
         */
        Object.defineProperty(Storage.prototype, "_protocol", {
            get: $util.oneOfGetter($oneOfFields = ["protocol"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Storage _protocolVersion.
         * @member {"protocolVersion"|undefined} _protocolVersion
         * @memberof storage.Storage
         * @instance
         */
        Object.defineProperty(Storage.prototype, "_protocolVersion", {
            get: $util.oneOfGetter($oneOfFields = ["protocolVersion"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Storage instance using the specified properties.
         * @function create
         * @memberof storage.Storage
         * @static
         * @param {storage.IStorage=} [properties] Properties to set
         * @returns {storage.Storage} Storage instance
         */
        Storage.create = function create(properties) {
            return new Storage(properties);
        };

        /**
         * Encodes the specified Storage message. Does not implicitly {@link storage.Storage.verify|verify} messages.
         * @function encode
         * @memberof storage.Storage
         * @static
         * @param {storage.IStorage} message Storage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Storage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.description);
            if (message.hostname != null && Object.hasOwnProperty.call(message, "hostname"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.hostname);
            if (message.ip != null && Object.hasOwnProperty.call(message, "ip"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.ip);
            if (message.path != null && Object.hasOwnProperty.call(message, "path"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.path);
            if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.user);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.password);
            if (message.protocol != null && Object.hasOwnProperty.call(message, "protocol"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.protocol);
            if (message.protocolVersion != null && Object.hasOwnProperty.call(message, "protocolVersion"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.protocolVersion);
            return writer;
        };

        /**
         * Encodes the specified Storage message, length delimited. Does not implicitly {@link storage.Storage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof storage.Storage
         * @static
         * @param {storage.IStorage} message Storage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Storage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Storage message from the specified reader or buffer.
         * @function decode
         * @memberof storage.Storage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {storage.Storage} Storage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Storage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.storage.Storage();
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
                        message.hostname = reader.string();
                        break;
                    }
                case 5: {
                        message.ip = reader.string();
                        break;
                    }
                case 6: {
                        message.path = reader.string();
                        break;
                    }
                case 7: {
                        message.user = reader.string();
                        break;
                    }
                case 8: {
                        message.password = reader.string();
                        break;
                    }
                case 9: {
                        message.protocol = reader.int32();
                        break;
                    }
                case 10: {
                        message.protocolVersion = reader.int32();
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
         * Decodes a Storage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof storage.Storage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {storage.Storage} Storage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Storage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Storage message.
         * @function verify
         * @memberof storage.Storage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Storage.verify = function verify(message) {
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
            if (message.hostname != null && message.hasOwnProperty("hostname")) {
                properties._hostname = 1;
                if (!$util.isString(message.hostname))
                    return "hostname: string expected";
            }
            if (message.ip != null && message.hasOwnProperty("ip")) {
                properties._ip = 1;
                if (!$util.isString(message.ip))
                    return "ip: string expected";
            }
            if (message.path != null && message.hasOwnProperty("path")) {
                properties._path = 1;
                if (!$util.isString(message.path))
                    return "path: string expected";
            }
            if (message.user != null && message.hasOwnProperty("user")) {
                properties._user = 1;
                if (!$util.isString(message.user))
                    return "user: string expected";
            }
            if (message.password != null && message.hasOwnProperty("password")) {
                properties._password = 1;
                if (!$util.isString(message.password))
                    return "password: string expected";
            }
            if (message.protocol != null && message.hasOwnProperty("protocol")) {
                properties._protocol = 1;
                switch (message.protocol) {
                default:
                    return "protocol: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            }
            if (message.protocolVersion != null && message.hasOwnProperty("protocolVersion")) {
                properties._protocolVersion = 1;
                switch (message.protocolVersion) {
                default:
                    return "protocolVersion: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            }
            return null;
        };

        /**
         * Creates a Storage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof storage.Storage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {storage.Storage} Storage
         */
        Storage.fromObject = function fromObject(object) {
            if (object instanceof $root.storage.Storage)
                return object;
            let message = new $root.storage.Storage();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.name != null)
                message.name = String(object.name);
            if (object.description != null)
                message.description = String(object.description);
            if (object.hostname != null)
                message.hostname = String(object.hostname);
            if (object.ip != null)
                message.ip = String(object.ip);
            if (object.path != null)
                message.path = String(object.path);
            if (object.user != null)
                message.user = String(object.user);
            if (object.password != null)
                message.password = String(object.password);
            switch (object.protocol) {
            default:
                if (typeof object.protocol === "number") {
                    message.protocol = object.protocol;
                    break;
                }
                break;
            case "PROTOCOL_LOCALE":
            case 0:
                message.protocol = 0;
                break;
            case "PROTOCOL_NFS":
            case 1:
                message.protocol = 1;
                break;
            case "PROTOCOL_SMB":
            case 2:
                message.protocol = 2;
                break;
            }
            switch (object.protocolVersion) {
            default:
                if (typeof object.protocolVersion === "number") {
                    message.protocolVersion = object.protocolVersion;
                    break;
                }
                break;
            case "PROTOCOL_VERSION_1":
            case 0:
                message.protocolVersion = 0;
                break;
            case "PROTOCOL_VERSION_2":
            case 1:
                message.protocolVersion = 1;
                break;
            case "PROTOCOL_VERSION_3":
            case 2:
                message.protocolVersion = 2;
                break;
            case "PROTOCOL_VERSION_4":
            case 3:
                message.protocolVersion = 3;
                break;
            case "PROTOCOL_VERSION_5":
            case 4:
                message.protocolVersion = 4;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a Storage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof storage.Storage
         * @static
         * @param {storage.Storage} message Storage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Storage.toObject = function toObject(message, options) {
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
            if (message.hostname != null && message.hasOwnProperty("hostname")) {
                object.hostname = message.hostname;
                if (options.oneofs)
                    object._hostname = "hostname";
            }
            if (message.ip != null && message.hasOwnProperty("ip")) {
                object.ip = message.ip;
                if (options.oneofs)
                    object._ip = "ip";
            }
            if (message.path != null && message.hasOwnProperty("path")) {
                object.path = message.path;
                if (options.oneofs)
                    object._path = "path";
            }
            if (message.user != null && message.hasOwnProperty("user")) {
                object.user = message.user;
                if (options.oneofs)
                    object._user = "user";
            }
            if (message.password != null && message.hasOwnProperty("password")) {
                object.password = message.password;
                if (options.oneofs)
                    object._password = "password";
            }
            if (message.protocol != null && message.hasOwnProperty("protocol")) {
                object.protocol = options.enums === String ? $root.storage.Protocol[message.protocol] === undefined ? message.protocol : $root.storage.Protocol[message.protocol] : message.protocol;
                if (options.oneofs)
                    object._protocol = "protocol";
            }
            if (message.protocolVersion != null && message.hasOwnProperty("protocolVersion")) {
                object.protocolVersion = options.enums === String ? $root.storage.ProtocolVersion[message.protocolVersion] === undefined ? message.protocolVersion : $root.storage.ProtocolVersion[message.protocolVersion] : message.protocolVersion;
                if (options.oneofs)
                    object._protocolVersion = "protocolVersion";
            }
            return object;
        };

        /**
         * Converts this Storage to JSON.
         * @function toJSON
         * @memberof storage.Storage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Storage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Storage
         * @function getTypeUrl
         * @memberof storage.Storage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Storage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/storage.Storage";
        };

        return Storage;
    })();

    /**
     * Protocol enum.
     * @name storage.Protocol
     * @enum {number}
     * @property {number} PROTOCOL_LOCALE=0 PROTOCOL_LOCALE value
     * @property {number} PROTOCOL_NFS=1 PROTOCOL_NFS value
     * @property {number} PROTOCOL_SMB=2 PROTOCOL_SMB value
     */
    storage.Protocol = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PROTOCOL_LOCALE"] = 0;
        values[valuesById[1] = "PROTOCOL_NFS"] = 1;
        values[valuesById[2] = "PROTOCOL_SMB"] = 2;
        return values;
    })();

    /**
     * ProtocolVersion enum.
     * @name storage.ProtocolVersion
     * @enum {number}
     * @property {number} PROTOCOL_VERSION_1=0 PROTOCOL_VERSION_1 value
     * @property {number} PROTOCOL_VERSION_2=1 PROTOCOL_VERSION_2 value
     * @property {number} PROTOCOL_VERSION_3=2 PROTOCOL_VERSION_3 value
     * @property {number} PROTOCOL_VERSION_4=3 PROTOCOL_VERSION_4 value
     * @property {number} PROTOCOL_VERSION_5=4 PROTOCOL_VERSION_5 value
     */
    storage.ProtocolVersion = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PROTOCOL_VERSION_1"] = 0;
        values[valuesById[1] = "PROTOCOL_VERSION_2"] = 1;
        values[valuesById[2] = "PROTOCOL_VERSION_3"] = 2;
        values[valuesById[3] = "PROTOCOL_VERSION_4"] = 3;
        values[valuesById[4] = "PROTOCOL_VERSION_5"] = 4;
        return values;
    })();

    storage.StorageList = (function() {

        /**
         * Properties of a StorageList.
         * @memberof storage
         * @interface IStorageList
         * @property {Array.<storage.IStorage>|null} [storages] StorageList storages
         */

        /**
         * Constructs a new StorageList.
         * @memberof storage
         * @classdesc Represents a StorageList.
         * @implements IStorageList
         * @constructor
         * @param {storage.IStorageList=} [properties] Properties to set
         */
        function StorageList(properties) {
            this.storages = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StorageList storages.
         * @member {Array.<storage.IStorage>} storages
         * @memberof storage.StorageList
         * @instance
         */
        StorageList.prototype.storages = $util.emptyArray;

        /**
         * Creates a new StorageList instance using the specified properties.
         * @function create
         * @memberof storage.StorageList
         * @static
         * @param {storage.IStorageList=} [properties] Properties to set
         * @returns {storage.StorageList} StorageList instance
         */
        StorageList.create = function create(properties) {
            return new StorageList(properties);
        };

        /**
         * Encodes the specified StorageList message. Does not implicitly {@link storage.StorageList.verify|verify} messages.
         * @function encode
         * @memberof storage.StorageList
         * @static
         * @param {storage.IStorageList} message StorageList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StorageList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.storages != null && message.storages.length)
                for (let i = 0; i < message.storages.length; ++i)
                    $root.storage.Storage.encode(message.storages[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified StorageList message, length delimited. Does not implicitly {@link storage.StorageList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof storage.StorageList
         * @static
         * @param {storage.IStorageList} message StorageList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StorageList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StorageList message from the specified reader or buffer.
         * @function decode
         * @memberof storage.StorageList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {storage.StorageList} StorageList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StorageList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.storage.StorageList();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.storages && message.storages.length))
                            message.storages = [];
                        message.storages.push($root.storage.Storage.decode(reader, reader.uint32()));
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
         * Decodes a StorageList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof storage.StorageList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {storage.StorageList} StorageList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StorageList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StorageList message.
         * @function verify
         * @memberof storage.StorageList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StorageList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.storages != null && message.hasOwnProperty("storages")) {
                if (!Array.isArray(message.storages))
                    return "storages: array expected";
                for (let i = 0; i < message.storages.length; ++i) {
                    let error = $root.storage.Storage.verify(message.storages[i]);
                    if (error)
                        return "storages." + error;
                }
            }
            return null;
        };

        /**
         * Creates a StorageList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof storage.StorageList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {storage.StorageList} StorageList
         */
        StorageList.fromObject = function fromObject(object) {
            if (object instanceof $root.storage.StorageList)
                return object;
            let message = new $root.storage.StorageList();
            if (object.storages) {
                if (!Array.isArray(object.storages))
                    throw TypeError(".storage.StorageList.storages: array expected");
                message.storages = [];
                for (let i = 0; i < object.storages.length; ++i) {
                    if (typeof object.storages[i] !== "object")
                        throw TypeError(".storage.StorageList.storages: object expected");
                    message.storages[i] = $root.storage.Storage.fromObject(object.storages[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a StorageList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof storage.StorageList
         * @static
         * @param {storage.StorageList} message StorageList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StorageList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.storages = [];
            if (message.storages && message.storages.length) {
                object.storages = [];
                for (let j = 0; j < message.storages.length; ++j)
                    object.storages[j] = $root.storage.Storage.toObject(message.storages[j], options);
            }
            return object;
        };

        /**
         * Converts this StorageList to JSON.
         * @function toJSON
         * @memberof storage.StorageList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StorageList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for StorageList
         * @function getTypeUrl
         * @memberof storage.StorageList
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        StorageList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/storage.StorageList";
        };

        return StorageList;
    })();

    storage.StorageQueryResponse = (function() {

        /**
         * Properties of a StorageQueryResponse.
         * @memberof storage
         * @interface IStorageQueryResponse
         * @property {Array.<storage.IStorage>|null} [results] StorageQueryResponse results
         */

        /**
         * Constructs a new StorageQueryResponse.
         * @memberof storage
         * @classdesc Represents a StorageQueryResponse.
         * @implements IStorageQueryResponse
         * @constructor
         * @param {storage.IStorageQueryResponse=} [properties] Properties to set
         */
        function StorageQueryResponse(properties) {
            this.results = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StorageQueryResponse results.
         * @member {Array.<storage.IStorage>} results
         * @memberof storage.StorageQueryResponse
         * @instance
         */
        StorageQueryResponse.prototype.results = $util.emptyArray;

        /**
         * Creates a new StorageQueryResponse instance using the specified properties.
         * @function create
         * @memberof storage.StorageQueryResponse
         * @static
         * @param {storage.IStorageQueryResponse=} [properties] Properties to set
         * @returns {storage.StorageQueryResponse} StorageQueryResponse instance
         */
        StorageQueryResponse.create = function create(properties) {
            return new StorageQueryResponse(properties);
        };

        /**
         * Encodes the specified StorageQueryResponse message. Does not implicitly {@link storage.StorageQueryResponse.verify|verify} messages.
         * @function encode
         * @memberof storage.StorageQueryResponse
         * @static
         * @param {storage.IStorageQueryResponse} message StorageQueryResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StorageQueryResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.results != null && message.results.length)
                for (let i = 0; i < message.results.length; ++i)
                    $root.storage.Storage.encode(message.results[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified StorageQueryResponse message, length delimited. Does not implicitly {@link storage.StorageQueryResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof storage.StorageQueryResponse
         * @static
         * @param {storage.IStorageQueryResponse} message StorageQueryResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StorageQueryResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StorageQueryResponse message from the specified reader or buffer.
         * @function decode
         * @memberof storage.StorageQueryResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {storage.StorageQueryResponse} StorageQueryResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StorageQueryResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.storage.StorageQueryResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.results && message.results.length))
                            message.results = [];
                        message.results.push($root.storage.Storage.decode(reader, reader.uint32()));
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
         * Decodes a StorageQueryResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof storage.StorageQueryResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {storage.StorageQueryResponse} StorageQueryResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StorageQueryResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StorageQueryResponse message.
         * @function verify
         * @memberof storage.StorageQueryResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StorageQueryResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.results != null && message.hasOwnProperty("results")) {
                if (!Array.isArray(message.results))
                    return "results: array expected";
                for (let i = 0; i < message.results.length; ++i) {
                    let error = $root.storage.Storage.verify(message.results[i]);
                    if (error)
                        return "results." + error;
                }
            }
            return null;
        };

        /**
         * Creates a StorageQueryResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof storage.StorageQueryResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {storage.StorageQueryResponse} StorageQueryResponse
         */
        StorageQueryResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.storage.StorageQueryResponse)
                return object;
            let message = new $root.storage.StorageQueryResponse();
            if (object.results) {
                if (!Array.isArray(object.results))
                    throw TypeError(".storage.StorageQueryResponse.results: array expected");
                message.results = [];
                for (let i = 0; i < object.results.length; ++i) {
                    if (typeof object.results[i] !== "object")
                        throw TypeError(".storage.StorageQueryResponse.results: object expected");
                    message.results[i] = $root.storage.Storage.fromObject(object.results[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a StorageQueryResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof storage.StorageQueryResponse
         * @static
         * @param {storage.StorageQueryResponse} message StorageQueryResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StorageQueryResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.results = [];
            if (message.results && message.results.length) {
                object.results = [];
                for (let j = 0; j < message.results.length; ++j)
                    object.results[j] = $root.storage.Storage.toObject(message.results[j], options);
            }
            return object;
        };

        /**
         * Converts this StorageQueryResponse to JSON.
         * @function toJSON
         * @memberof storage.StorageQueryResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StorageQueryResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for StorageQueryResponse
         * @function getTypeUrl
         * @memberof storage.StorageQueryResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        StorageQueryResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/storage.StorageQueryResponse";
        };

        return StorageQueryResponse;
    })();

    storage.WebSocketStorage = (function() {

        /**
         * Properties of a WebSocketStorage.
         * @memberof storage
         * @interface IWebSocketStorage
         * @property {boolean|null} ["new"] WebSocketStorage new
         * @property {storage.IStorage|null} [storage] WebSocketStorage storage
         */

        /**
         * Constructs a new WebSocketStorage.
         * @memberof storage
         * @classdesc Represents a WebSocketStorage.
         * @implements IWebSocketStorage
         * @constructor
         * @param {storage.IWebSocketStorage=} [properties] Properties to set
         */
        function WebSocketStorage(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WebSocketStorage new.
         * @member {boolean} new
         * @memberof storage.WebSocketStorage
         * @instance
         */
        WebSocketStorage.prototype["new"] = false;

        /**
         * WebSocketStorage storage.
         * @member {storage.IStorage|null|undefined} storage
         * @memberof storage.WebSocketStorage
         * @instance
         */
        WebSocketStorage.prototype.storage = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * WebSocketStorage _storage.
         * @member {"storage"|undefined} _storage
         * @memberof storage.WebSocketStorage
         * @instance
         */
        Object.defineProperty(WebSocketStorage.prototype, "_storage", {
            get: $util.oneOfGetter($oneOfFields = ["storage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new WebSocketStorage instance using the specified properties.
         * @function create
         * @memberof storage.WebSocketStorage
         * @static
         * @param {storage.IWebSocketStorage=} [properties] Properties to set
         * @returns {storage.WebSocketStorage} WebSocketStorage instance
         */
        WebSocketStorage.create = function create(properties) {
            return new WebSocketStorage(properties);
        };

        /**
         * Encodes the specified WebSocketStorage message. Does not implicitly {@link storage.WebSocketStorage.verify|verify} messages.
         * @function encode
         * @memberof storage.WebSocketStorage
         * @static
         * @param {storage.IWebSocketStorage} message WebSocketStorage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebSocketStorage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message["new"] != null && Object.hasOwnProperty.call(message, "new"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message["new"]);
            if (message.storage != null && Object.hasOwnProperty.call(message, "storage"))
                $root.storage.Storage.encode(message.storage, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified WebSocketStorage message, length delimited. Does not implicitly {@link storage.WebSocketStorage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof storage.WebSocketStorage
         * @static
         * @param {storage.IWebSocketStorage} message WebSocketStorage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebSocketStorage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WebSocketStorage message from the specified reader or buffer.
         * @function decode
         * @memberof storage.WebSocketStorage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {storage.WebSocketStorage} WebSocketStorage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebSocketStorage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.storage.WebSocketStorage();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message["new"] = reader.bool();
                        break;
                    }
                case 2: {
                        message.storage = $root.storage.Storage.decode(reader, reader.uint32());
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
         * Decodes a WebSocketStorage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof storage.WebSocketStorage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {storage.WebSocketStorage} WebSocketStorage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebSocketStorage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WebSocketStorage message.
         * @function verify
         * @memberof storage.WebSocketStorage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WebSocketStorage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message["new"] != null && message.hasOwnProperty("new"))
                if (typeof message["new"] !== "boolean")
                    return "new: boolean expected";
            if (message.storage != null && message.hasOwnProperty("storage")) {
                properties._storage = 1;
                {
                    let error = $root.storage.Storage.verify(message.storage);
                    if (error)
                        return "storage." + error;
                }
            }
            return null;
        };

        /**
         * Creates a WebSocketStorage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof storage.WebSocketStorage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {storage.WebSocketStorage} WebSocketStorage
         */
        WebSocketStorage.fromObject = function fromObject(object) {
            if (object instanceof $root.storage.WebSocketStorage)
                return object;
            let message = new $root.storage.WebSocketStorage();
            if (object["new"] != null)
                message["new"] = Boolean(object["new"]);
            if (object.storage != null) {
                if (typeof object.storage !== "object")
                    throw TypeError(".storage.WebSocketStorage.storage: object expected");
                message.storage = $root.storage.Storage.fromObject(object.storage);
            }
            return message;
        };

        /**
         * Creates a plain object from a WebSocketStorage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof storage.WebSocketStorage
         * @static
         * @param {storage.WebSocketStorage} message WebSocketStorage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WebSocketStorage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object["new"] = false;
            if (message["new"] != null && message.hasOwnProperty("new"))
                object["new"] = message["new"];
            if (message.storage != null && message.hasOwnProperty("storage")) {
                object.storage = $root.storage.Storage.toObject(message.storage, options);
                if (options.oneofs)
                    object._storage = "storage";
            }
            return object;
        };

        /**
         * Converts this WebSocketStorage to JSON.
         * @function toJSON
         * @memberof storage.WebSocketStorage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WebSocketStorage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WebSocketStorage
         * @function getTypeUrl
         * @memberof storage.WebSocketStorage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WebSocketStorage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/storage.WebSocketStorage";
        };

        return WebSocketStorage;
    })();

    storage.NewStorage = (function() {

        /**
         * Properties of a NewStorage.
         * @memberof storage
         * @interface INewStorage
         * @property {number|null} [id] NewStorage id
         * @property {string|null} [name] NewStorage name
         * @property {string|null} [description] NewStorage description
         * @property {string|null} [hostname] NewStorage hostname
         * @property {string|null} [ip] NewStorage ip
         * @property {string|null} [path] NewStorage path
         * @property {string|null} [user] NewStorage user
         * @property {string|null} [password] NewStorage password
         * @property {storage.Protocol|null} [protocol] NewStorage protocol
         * @property {storage.ProtocolVersion|null} [protocolVersion] NewStorage protocolVersion
         */

        /**
         * Constructs a new NewStorage.
         * @memberof storage
         * @classdesc Represents a NewStorage.
         * @implements INewStorage
         * @constructor
         * @param {storage.INewStorage=} [properties] Properties to set
         */
        function NewStorage(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NewStorage id.
         * @member {number|null|undefined} id
         * @memberof storage.NewStorage
         * @instance
         */
        NewStorage.prototype.id = null;

        /**
         * NewStorage name.
         * @member {string|null|undefined} name
         * @memberof storage.NewStorage
         * @instance
         */
        NewStorage.prototype.name = null;

        /**
         * NewStorage description.
         * @member {string|null|undefined} description
         * @memberof storage.NewStorage
         * @instance
         */
        NewStorage.prototype.description = null;

        /**
         * NewStorage hostname.
         * @member {string|null|undefined} hostname
         * @memberof storage.NewStorage
         * @instance
         */
        NewStorage.prototype.hostname = null;

        /**
         * NewStorage ip.
         * @member {string|null|undefined} ip
         * @memberof storage.NewStorage
         * @instance
         */
        NewStorage.prototype.ip = null;

        /**
         * NewStorage path.
         * @member {string|null|undefined} path
         * @memberof storage.NewStorage
         * @instance
         */
        NewStorage.prototype.path = null;

        /**
         * NewStorage user.
         * @member {string|null|undefined} user
         * @memberof storage.NewStorage
         * @instance
         */
        NewStorage.prototype.user = null;

        /**
         * NewStorage password.
         * @member {string|null|undefined} password
         * @memberof storage.NewStorage
         * @instance
         */
        NewStorage.prototype.password = null;

        /**
         * NewStorage protocol.
         * @member {storage.Protocol|null|undefined} protocol
         * @memberof storage.NewStorage
         * @instance
         */
        NewStorage.prototype.protocol = null;

        /**
         * NewStorage protocolVersion.
         * @member {storage.ProtocolVersion|null|undefined} protocolVersion
         * @memberof storage.NewStorage
         * @instance
         */
        NewStorage.prototype.protocolVersion = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * NewStorage _id.
         * @member {"id"|undefined} _id
         * @memberof storage.NewStorage
         * @instance
         */
        Object.defineProperty(NewStorage.prototype, "_id", {
            get: $util.oneOfGetter($oneOfFields = ["id"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * NewStorage _name.
         * @member {"name"|undefined} _name
         * @memberof storage.NewStorage
         * @instance
         */
        Object.defineProperty(NewStorage.prototype, "_name", {
            get: $util.oneOfGetter($oneOfFields = ["name"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * NewStorage _description.
         * @member {"description"|undefined} _description
         * @memberof storage.NewStorage
         * @instance
         */
        Object.defineProperty(NewStorage.prototype, "_description", {
            get: $util.oneOfGetter($oneOfFields = ["description"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * NewStorage _hostname.
         * @member {"hostname"|undefined} _hostname
         * @memberof storage.NewStorage
         * @instance
         */
        Object.defineProperty(NewStorage.prototype, "_hostname", {
            get: $util.oneOfGetter($oneOfFields = ["hostname"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * NewStorage _ip.
         * @member {"ip"|undefined} _ip
         * @memberof storage.NewStorage
         * @instance
         */
        Object.defineProperty(NewStorage.prototype, "_ip", {
            get: $util.oneOfGetter($oneOfFields = ["ip"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * NewStorage _path.
         * @member {"path"|undefined} _path
         * @memberof storage.NewStorage
         * @instance
         */
        Object.defineProperty(NewStorage.prototype, "_path", {
            get: $util.oneOfGetter($oneOfFields = ["path"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * NewStorage _user.
         * @member {"user"|undefined} _user
         * @memberof storage.NewStorage
         * @instance
         */
        Object.defineProperty(NewStorage.prototype, "_user", {
            get: $util.oneOfGetter($oneOfFields = ["user"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * NewStorage _password.
         * @member {"password"|undefined} _password
         * @memberof storage.NewStorage
         * @instance
         */
        Object.defineProperty(NewStorage.prototype, "_password", {
            get: $util.oneOfGetter($oneOfFields = ["password"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * NewStorage _protocol.
         * @member {"protocol"|undefined} _protocol
         * @memberof storage.NewStorage
         * @instance
         */
        Object.defineProperty(NewStorage.prototype, "_protocol", {
            get: $util.oneOfGetter($oneOfFields = ["protocol"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * NewStorage _protocolVersion.
         * @member {"protocolVersion"|undefined} _protocolVersion
         * @memberof storage.NewStorage
         * @instance
         */
        Object.defineProperty(NewStorage.prototype, "_protocolVersion", {
            get: $util.oneOfGetter($oneOfFields = ["protocolVersion"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new NewStorage instance using the specified properties.
         * @function create
         * @memberof storage.NewStorage
         * @static
         * @param {storage.INewStorage=} [properties] Properties to set
         * @returns {storage.NewStorage} NewStorage instance
         */
        NewStorage.create = function create(properties) {
            return new NewStorage(properties);
        };

        /**
         * Encodes the specified NewStorage message. Does not implicitly {@link storage.NewStorage.verify|verify} messages.
         * @function encode
         * @memberof storage.NewStorage
         * @static
         * @param {storage.INewStorage} message NewStorage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NewStorage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.description);
            if (message.hostname != null && Object.hasOwnProperty.call(message, "hostname"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.hostname);
            if (message.ip != null && Object.hasOwnProperty.call(message, "ip"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.ip);
            if (message.path != null && Object.hasOwnProperty.call(message, "path"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.path);
            if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.user);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.password);
            if (message.protocol != null && Object.hasOwnProperty.call(message, "protocol"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.protocol);
            if (message.protocolVersion != null && Object.hasOwnProperty.call(message, "protocolVersion"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.protocolVersion);
            return writer;
        };

        /**
         * Encodes the specified NewStorage message, length delimited. Does not implicitly {@link storage.NewStorage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof storage.NewStorage
         * @static
         * @param {storage.INewStorage} message NewStorage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NewStorage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NewStorage message from the specified reader or buffer.
         * @function decode
         * @memberof storage.NewStorage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {storage.NewStorage} NewStorage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NewStorage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.storage.NewStorage();
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
                        message.hostname = reader.string();
                        break;
                    }
                case 5: {
                        message.ip = reader.string();
                        break;
                    }
                case 6: {
                        message.path = reader.string();
                        break;
                    }
                case 7: {
                        message.user = reader.string();
                        break;
                    }
                case 8: {
                        message.password = reader.string();
                        break;
                    }
                case 9: {
                        message.protocol = reader.int32();
                        break;
                    }
                case 10: {
                        message.protocolVersion = reader.int32();
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
         * Decodes a NewStorage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof storage.NewStorage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {storage.NewStorage} NewStorage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NewStorage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NewStorage message.
         * @function verify
         * @memberof storage.NewStorage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NewStorage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.id != null && message.hasOwnProperty("id")) {
                properties._id = 1;
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            }
            if (message.name != null && message.hasOwnProperty("name")) {
                properties._name = 1;
                if (!$util.isString(message.name))
                    return "name: string expected";
            }
            if (message.description != null && message.hasOwnProperty("description")) {
                properties._description = 1;
                if (!$util.isString(message.description))
                    return "description: string expected";
            }
            if (message.hostname != null && message.hasOwnProperty("hostname")) {
                properties._hostname = 1;
                if (!$util.isString(message.hostname))
                    return "hostname: string expected";
            }
            if (message.ip != null && message.hasOwnProperty("ip")) {
                properties._ip = 1;
                if (!$util.isString(message.ip))
                    return "ip: string expected";
            }
            if (message.path != null && message.hasOwnProperty("path")) {
                properties._path = 1;
                if (!$util.isString(message.path))
                    return "path: string expected";
            }
            if (message.user != null && message.hasOwnProperty("user")) {
                properties._user = 1;
                if (!$util.isString(message.user))
                    return "user: string expected";
            }
            if (message.password != null && message.hasOwnProperty("password")) {
                properties._password = 1;
                if (!$util.isString(message.password))
                    return "password: string expected";
            }
            if (message.protocol != null && message.hasOwnProperty("protocol")) {
                properties._protocol = 1;
                switch (message.protocol) {
                default:
                    return "protocol: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            }
            if (message.protocolVersion != null && message.hasOwnProperty("protocolVersion")) {
                properties._protocolVersion = 1;
                switch (message.protocolVersion) {
                default:
                    return "protocolVersion: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            }
            return null;
        };

        /**
         * Creates a NewStorage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof storage.NewStorage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {storage.NewStorage} NewStorage
         */
        NewStorage.fromObject = function fromObject(object) {
            if (object instanceof $root.storage.NewStorage)
                return object;
            let message = new $root.storage.NewStorage();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.name != null)
                message.name = String(object.name);
            if (object.description != null)
                message.description = String(object.description);
            if (object.hostname != null)
                message.hostname = String(object.hostname);
            if (object.ip != null)
                message.ip = String(object.ip);
            if (object.path != null)
                message.path = String(object.path);
            if (object.user != null)
                message.user = String(object.user);
            if (object.password != null)
                message.password = String(object.password);
            switch (object.protocol) {
            default:
                if (typeof object.protocol === "number") {
                    message.protocol = object.protocol;
                    break;
                }
                break;
            case "PROTOCOL_LOCALE":
            case 0:
                message.protocol = 0;
                break;
            case "PROTOCOL_NFS":
            case 1:
                message.protocol = 1;
                break;
            case "PROTOCOL_SMB":
            case 2:
                message.protocol = 2;
                break;
            }
            switch (object.protocolVersion) {
            default:
                if (typeof object.protocolVersion === "number") {
                    message.protocolVersion = object.protocolVersion;
                    break;
                }
                break;
            case "PROTOCOL_VERSION_1":
            case 0:
                message.protocolVersion = 0;
                break;
            case "PROTOCOL_VERSION_2":
            case 1:
                message.protocolVersion = 1;
                break;
            case "PROTOCOL_VERSION_3":
            case 2:
                message.protocolVersion = 2;
                break;
            case "PROTOCOL_VERSION_4":
            case 3:
                message.protocolVersion = 3;
                break;
            case "PROTOCOL_VERSION_5":
            case 4:
                message.protocolVersion = 4;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a NewStorage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof storage.NewStorage
         * @static
         * @param {storage.NewStorage} message NewStorage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NewStorage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (message.id != null && message.hasOwnProperty("id")) {
                object.id = message.id;
                if (options.oneofs)
                    object._id = "id";
            }
            if (message.name != null && message.hasOwnProperty("name")) {
                object.name = message.name;
                if (options.oneofs)
                    object._name = "name";
            }
            if (message.description != null && message.hasOwnProperty("description")) {
                object.description = message.description;
                if (options.oneofs)
                    object._description = "description";
            }
            if (message.hostname != null && message.hasOwnProperty("hostname")) {
                object.hostname = message.hostname;
                if (options.oneofs)
                    object._hostname = "hostname";
            }
            if (message.ip != null && message.hasOwnProperty("ip")) {
                object.ip = message.ip;
                if (options.oneofs)
                    object._ip = "ip";
            }
            if (message.path != null && message.hasOwnProperty("path")) {
                object.path = message.path;
                if (options.oneofs)
                    object._path = "path";
            }
            if (message.user != null && message.hasOwnProperty("user")) {
                object.user = message.user;
                if (options.oneofs)
                    object._user = "user";
            }
            if (message.password != null && message.hasOwnProperty("password")) {
                object.password = message.password;
                if (options.oneofs)
                    object._password = "password";
            }
            if (message.protocol != null && message.hasOwnProperty("protocol")) {
                object.protocol = options.enums === String ? $root.storage.Protocol[message.protocol] === undefined ? message.protocol : $root.storage.Protocol[message.protocol] : message.protocol;
                if (options.oneofs)
                    object._protocol = "protocol";
            }
            if (message.protocolVersion != null && message.hasOwnProperty("protocolVersion")) {
                object.protocolVersion = options.enums === String ? $root.storage.ProtocolVersion[message.protocolVersion] === undefined ? message.protocolVersion : $root.storage.ProtocolVersion[message.protocolVersion] : message.protocolVersion;
                if (options.oneofs)
                    object._protocolVersion = "protocolVersion";
            }
            return object;
        };

        /**
         * Converts this NewStorage to JSON.
         * @function toJSON
         * @memberof storage.NewStorage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NewStorage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for NewStorage
         * @function getTypeUrl
         * @memberof storage.NewStorage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        NewStorage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/storage.NewStorage";
        };

        return NewStorage;
    })();

    return storage;
})();

export { $root as default };
