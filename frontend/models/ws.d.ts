import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace ws. */
export namespace ws {

    /** Properties of a WebSocketRequest. */
    interface IWebSocketRequest {

        /** WebSocketRequest channel */
        channel?: (ws.WebSocketRequest.WebSocketChannel|null);

        /** WebSocketRequest action */
        action?: (ws.WebSocketRequest.WebSocketAction|null);

        /** WebSocketRequest data */
        data?: (ws.WebSocketRequest.IWebSocketRequestModelData|null);
    }

    /** Represents a WebSocketRequest. */
    class WebSocketRequest implements IWebSocketRequest {

        /**
         * Constructs a new WebSocketRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: ws.IWebSocketRequest);

        /** WebSocketRequest channel. */
        public channel: ws.WebSocketRequest.WebSocketChannel;

        /** WebSocketRequest action. */
        public action: ws.WebSocketRequest.WebSocketAction;

        /** WebSocketRequest data. */
        public data?: (ws.WebSocketRequest.IWebSocketRequestModelData|null);

        /**
         * Creates a new WebSocketRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WebSocketRequest instance
         */
        public static create(properties?: ws.IWebSocketRequest): ws.WebSocketRequest;

        /**
         * Encodes the specified WebSocketRequest message. Does not implicitly {@link ws.WebSocketRequest.verify|verify} messages.
         * @param message WebSocketRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ws.IWebSocketRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WebSocketRequest message, length delimited. Does not implicitly {@link ws.WebSocketRequest.verify|verify} messages.
         * @param message WebSocketRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ws.IWebSocketRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WebSocketRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WebSocketRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ws.WebSocketRequest;

        /**
         * Decodes a WebSocketRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WebSocketRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ws.WebSocketRequest;

        /**
         * Verifies a WebSocketRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WebSocketRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WebSocketRequest
         */
        public static fromObject(object: { [k: string]: any }): ws.WebSocketRequest;

        /**
         * Creates a plain object from a WebSocketRequest message. Also converts values to other types if specified.
         * @param message WebSocketRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ws.WebSocketRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WebSocketRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for WebSocketRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace WebSocketRequest {

        /**
         * The cannel used to stream the data from.
         * Used to define the model type.
         */
        enum WebSocketChannel {
            WEB_SOCKET_CHANNEL_STORAGE = 0
        }

        /** WebSocketAction enum. */
        enum WebSocketAction {
            WEB_SOCKET_ACTION_SYNC = 0,
            WEB_SOCKET_ACTION_VALIDATE = 1
        }

        /** Properties of a WebSocketRequestModelData. */
        interface IWebSocketRequestModelData {

            /** WebSocketRequestModelData id */
            id?: (number|null);

            /** WebSocketRequestModelData new */
            "new"?: (boolean|null);
        }

        /** Represents a WebSocketRequestModelData. */
        class WebSocketRequestModelData implements IWebSocketRequestModelData {

            /**
             * Constructs a new WebSocketRequestModelData.
             * @param [properties] Properties to set
             */
            constructor(properties?: ws.WebSocketRequest.IWebSocketRequestModelData);

            /** WebSocketRequestModelData id. */
            public id?: (number|null);

            /** WebSocketRequestModelData new. */
            public new?: (boolean|null);

            /** WebSocketRequestModelData _id. */
            public _id?: "id";

            /** WebSocketRequestModelData _new. */
            public _new?: "new";

            /**
             * Creates a new WebSocketRequestModelData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WebSocketRequestModelData instance
             */
            public static create(properties?: ws.WebSocketRequest.IWebSocketRequestModelData): ws.WebSocketRequest.WebSocketRequestModelData;

            /**
             * Encodes the specified WebSocketRequestModelData message. Does not implicitly {@link ws.WebSocketRequest.WebSocketRequestModelData.verify|verify} messages.
             * @param message WebSocketRequestModelData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ws.WebSocketRequest.IWebSocketRequestModelData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WebSocketRequestModelData message, length delimited. Does not implicitly {@link ws.WebSocketRequest.WebSocketRequestModelData.verify|verify} messages.
             * @param message WebSocketRequestModelData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ws.WebSocketRequest.IWebSocketRequestModelData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WebSocketRequestModelData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WebSocketRequestModelData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ws.WebSocketRequest.WebSocketRequestModelData;

            /**
             * Decodes a WebSocketRequestModelData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WebSocketRequestModelData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ws.WebSocketRequest.WebSocketRequestModelData;

            /**
             * Verifies a WebSocketRequestModelData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WebSocketRequestModelData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WebSocketRequestModelData
             */
            public static fromObject(object: { [k: string]: any }): ws.WebSocketRequest.WebSocketRequestModelData;

            /**
             * Creates a plain object from a WebSocketRequestModelData message. Also converts values to other types if specified.
             * @param message WebSocketRequestModelData
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ws.WebSocketRequest.WebSocketRequestModelData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WebSocketRequestModelData to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for WebSocketRequestModelData
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
