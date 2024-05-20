import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace storage. */
export namespace storage {

    /** Properties of a Storage. */
    interface IStorage {

        /** Storage id */
        id?: (number|null);

        /** Storage name */
        name?: (string|null);

        /** Storage description */
        description?: (string|null);

        /** Storage hostname */
        hostname?: (string|null);

        /** Storage ip */
        ip?: (string|null);

        /** Storage path */
        path?: (string|null);

        /** Storage user */
        user?: (string|null);

        /** Storage password */
        password?: (string|null);

        /** Storage protocol */
        protocol?: (storage.Protocol|null);

        /** Storage protocolVersion */
        protocolVersion?: (storage.ProtocolVersion|null);
    }

    /** Represents a Storage. */
    class Storage implements IStorage {

        /**
         * Constructs a new Storage.
         * @param [properties] Properties to set
         */
        constructor(properties?: storage.IStorage);

        /** Storage id. */
        public id: number;

        /** Storage name. */
        public name: string;

        /** Storage description. */
        public description?: (string|null);

        /** Storage hostname. */
        public hostname?: (string|null);

        /** Storage ip. */
        public ip?: (string|null);

        /** Storage path. */
        public path?: (string|null);

        /** Storage user. */
        public user?: (string|null);

        /** Storage password. */
        public password?: (string|null);

        /** Storage protocol. */
        public protocol?: (storage.Protocol|null);

        /** Storage protocolVersion. */
        public protocolVersion?: (storage.ProtocolVersion|null);

        /** Storage _description. */
        public _description?: "description";

        /** Storage _hostname. */
        public _hostname?: "hostname";

        /** Storage _ip. */
        public _ip?: "ip";

        /** Storage _path. */
        public _path?: "path";

        /** Storage _user. */
        public _user?: "user";

        /** Storage _password. */
        public _password?: "password";

        /** Storage _protocol. */
        public _protocol?: "protocol";

        /** Storage _protocolVersion. */
        public _protocolVersion?: "protocolVersion";

        /**
         * Creates a new Storage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Storage instance
         */
        public static create(properties?: storage.IStorage): storage.Storage;

        /**
         * Encodes the specified Storage message. Does not implicitly {@link storage.Storage.verify|verify} messages.
         * @param message Storage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: storage.IStorage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Storage message, length delimited. Does not implicitly {@link storage.Storage.verify|verify} messages.
         * @param message Storage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: storage.IStorage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Storage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Storage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): storage.Storage;

        /**
         * Decodes a Storage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Storage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): storage.Storage;

        /**
         * Verifies a Storage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Storage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Storage
         */
        public static fromObject(object: { [k: string]: any }): storage.Storage;

        /**
         * Creates a plain object from a Storage message. Also converts values to other types if specified.
         * @param message Storage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: storage.Storage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Storage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Storage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Protocol enum. */
    enum Protocol {
        PROTOCOL_LOCALE = 0,
        PROTOCOL_NFS = 1,
        PROTOCOL_SMB = 2
    }

    /** ProtocolVersion enum. */
    enum ProtocolVersion {
        PROTOCOL_VERSION_1 = 0,
        PROTOCOL_VERSION_2 = 1,
        PROTOCOL_VERSION_3 = 2,
        PROTOCOL_VERSION_4 = 3,
        PROTOCOL_VERSION_5 = 4
    }

    /** Properties of a StorageList. */
    interface IStorageList {

        /** StorageList storages */
        storages?: (storage.IStorage[]|null);
    }

    /** Represents a StorageList. */
    class StorageList implements IStorageList {

        /**
         * Constructs a new StorageList.
         * @param [properties] Properties to set
         */
        constructor(properties?: storage.IStorageList);

        /** StorageList storages. */
        public storages: storage.IStorage[];

        /**
         * Creates a new StorageList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StorageList instance
         */
        public static create(properties?: storage.IStorageList): storage.StorageList;

        /**
         * Encodes the specified StorageList message. Does not implicitly {@link storage.StorageList.verify|verify} messages.
         * @param message StorageList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: storage.IStorageList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StorageList message, length delimited. Does not implicitly {@link storage.StorageList.verify|verify} messages.
         * @param message StorageList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: storage.IStorageList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StorageList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StorageList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): storage.StorageList;

        /**
         * Decodes a StorageList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StorageList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): storage.StorageList;

        /**
         * Verifies a StorageList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StorageList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StorageList
         */
        public static fromObject(object: { [k: string]: any }): storage.StorageList;

        /**
         * Creates a plain object from a StorageList message. Also converts values to other types if specified.
         * @param message StorageList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: storage.StorageList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StorageList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for StorageList
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a StorageQueryResponse. */
    interface IStorageQueryResponse {

        /** StorageQueryResponse results */
        results?: (storage.IStorage[]|null);
    }

    /** Represents a StorageQueryResponse. */
    class StorageQueryResponse implements IStorageQueryResponse {

        /**
         * Constructs a new StorageQueryResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: storage.IStorageQueryResponse);

        /** StorageQueryResponse results. */
        public results: storage.IStorage[];

        /**
         * Creates a new StorageQueryResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StorageQueryResponse instance
         */
        public static create(properties?: storage.IStorageQueryResponse): storage.StorageQueryResponse;

        /**
         * Encodes the specified StorageQueryResponse message. Does not implicitly {@link storage.StorageQueryResponse.verify|verify} messages.
         * @param message StorageQueryResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: storage.IStorageQueryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StorageQueryResponse message, length delimited. Does not implicitly {@link storage.StorageQueryResponse.verify|verify} messages.
         * @param message StorageQueryResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: storage.IStorageQueryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StorageQueryResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StorageQueryResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): storage.StorageQueryResponse;

        /**
         * Decodes a StorageQueryResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StorageQueryResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): storage.StorageQueryResponse;

        /**
         * Verifies a StorageQueryResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StorageQueryResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StorageQueryResponse
         */
        public static fromObject(object: { [k: string]: any }): storage.StorageQueryResponse;

        /**
         * Creates a plain object from a StorageQueryResponse message. Also converts values to other types if specified.
         * @param message StorageQueryResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: storage.StorageQueryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StorageQueryResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for StorageQueryResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a WebSocketStorage. */
    interface IWebSocketStorage {

        /** WebSocketStorage new */
        "new"?: (boolean|null);

        /** WebSocketStorage storage */
        storage?: (storage.IStorage|null);
    }

    /** Represents a WebSocketStorage. */
    class WebSocketStorage implements IWebSocketStorage {

        /**
         * Constructs a new WebSocketStorage.
         * @param [properties] Properties to set
         */
        constructor(properties?: storage.IWebSocketStorage);

        /** WebSocketStorage new. */
        public new: boolean;

        /** WebSocketStorage storage. */
        public storage?: (storage.IStorage|null);

        /** WebSocketStorage _storage. */
        public _storage?: "storage";

        /**
         * Creates a new WebSocketStorage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WebSocketStorage instance
         */
        public static create(properties?: storage.IWebSocketStorage): storage.WebSocketStorage;

        /**
         * Encodes the specified WebSocketStorage message. Does not implicitly {@link storage.WebSocketStorage.verify|verify} messages.
         * @param message WebSocketStorage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: storage.IWebSocketStorage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WebSocketStorage message, length delimited. Does not implicitly {@link storage.WebSocketStorage.verify|verify} messages.
         * @param message WebSocketStorage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: storage.IWebSocketStorage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WebSocketStorage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WebSocketStorage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): storage.WebSocketStorage;

        /**
         * Decodes a WebSocketStorage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WebSocketStorage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): storage.WebSocketStorage;

        /**
         * Verifies a WebSocketStorage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WebSocketStorage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WebSocketStorage
         */
        public static fromObject(object: { [k: string]: any }): storage.WebSocketStorage;

        /**
         * Creates a plain object from a WebSocketStorage message. Also converts values to other types if specified.
         * @param message WebSocketStorage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: storage.WebSocketStorage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WebSocketStorage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for WebSocketStorage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a NewStorage. */
    interface INewStorage {

        /** NewStorage id */
        id?: (number|null);

        /** NewStorage name */
        name?: (string|null);

        /** NewStorage description */
        description?: (string|null);

        /** NewStorage hostname */
        hostname?: (string|null);

        /** NewStorage ip */
        ip?: (string|null);

        /** NewStorage path */
        path?: (string|null);

        /** NewStorage user */
        user?: (string|null);

        /** NewStorage password */
        password?: (string|null);

        /** NewStorage protocol */
        protocol?: (storage.Protocol|null);

        /** NewStorage protocolVersion */
        protocolVersion?: (storage.ProtocolVersion|null);
    }

    /** Represents a NewStorage. */
    class NewStorage implements INewStorage {

        /**
         * Constructs a new NewStorage.
         * @param [properties] Properties to set
         */
        constructor(properties?: storage.INewStorage);

        /** NewStorage id. */
        public id?: (number|null);

        /** NewStorage name. */
        public name?: (string|null);

        /** NewStorage description. */
        public description?: (string|null);

        /** NewStorage hostname. */
        public hostname?: (string|null);

        /** NewStorage ip. */
        public ip?: (string|null);

        /** NewStorage path. */
        public path?: (string|null);

        /** NewStorage user. */
        public user?: (string|null);

        /** NewStorage password. */
        public password?: (string|null);

        /** NewStorage protocol. */
        public protocol?: (storage.Protocol|null);

        /** NewStorage protocolVersion. */
        public protocolVersion?: (storage.ProtocolVersion|null);

        /** NewStorage _id. */
        public _id?: "id";

        /** NewStorage _name. */
        public _name?: "name";

        /** NewStorage _description. */
        public _description?: "description";

        /** NewStorage _hostname. */
        public _hostname?: "hostname";

        /** NewStorage _ip. */
        public _ip?: "ip";

        /** NewStorage _path. */
        public _path?: "path";

        /** NewStorage _user. */
        public _user?: "user";

        /** NewStorage _password. */
        public _password?: "password";

        /** NewStorage _protocol. */
        public _protocol?: "protocol";

        /** NewStorage _protocolVersion. */
        public _protocolVersion?: "protocolVersion";

        /**
         * Creates a new NewStorage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NewStorage instance
         */
        public static create(properties?: storage.INewStorage): storage.NewStorage;

        /**
         * Encodes the specified NewStorage message. Does not implicitly {@link storage.NewStorage.verify|verify} messages.
         * @param message NewStorage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: storage.INewStorage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NewStorage message, length delimited. Does not implicitly {@link storage.NewStorage.verify|verify} messages.
         * @param message NewStorage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: storage.INewStorage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NewStorage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NewStorage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): storage.NewStorage;

        /**
         * Decodes a NewStorage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NewStorage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): storage.NewStorage;

        /**
         * Verifies a NewStorage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NewStorage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NewStorage
         */
        public static fromObject(object: { [k: string]: any }): storage.NewStorage;

        /**
         * Creates a plain object from a NewStorage message. Also converts values to other types if specified.
         * @param message NewStorage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: storage.NewStorage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NewStorage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for NewStorage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
