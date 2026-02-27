import mongoose from "mongoose";
export interface ITask extends Document {
    name: string;
    email: string;
    password: string;
    userImage: string;
    fullImageUrl?: string;
}
export declare const User: mongoose.Model<ITask, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, ITask, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<ITask & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<ITask, mongoose.Model<ITask, any, any, any, (mongoose.Document<unknown, any, ITask, any, mongoose.DefaultSchemaOptions> & ITask & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (mongoose.Document<unknown, any, ITask, any, mongoose.DefaultSchemaOptions> & ITask & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}), any, ITask>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ITask, mongoose.Document<unknown, {}, ITask, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<ITask & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    name?: mongoose.SchemaDefinitionProperty<string, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    email?: mongoose.SchemaDefinitionProperty<string, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    password?: mongoose.SchemaDefinitionProperty<string, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    userImage?: mongoose.SchemaDefinitionProperty<string, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    fullImageUrl?: mongoose.SchemaDefinitionProperty<string | undefined, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly URL?: mongoose.SchemaDefinitionProperty<string, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    alinkColor?: mongoose.SchemaDefinitionProperty<string, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly all?: mongoose.SchemaDefinitionProperty<HTMLAllCollection, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly anchors?: mongoose.SchemaDefinitionProperty<HTMLCollectionOf<HTMLAnchorElement>, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly applets?: mongoose.SchemaDefinitionProperty<HTMLCollection, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    bgColor?: mongoose.SchemaDefinitionProperty<string, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    body?: mongoose.SchemaDefinitionProperty<HTMLElement, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly characterSet?: mongoose.SchemaDefinitionProperty<string, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly charset?: mongoose.SchemaDefinitionProperty<string, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly compatMode?: mongoose.SchemaDefinitionProperty<string, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly contentType?: mongoose.SchemaDefinitionProperty<string, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    cookie?: mongoose.SchemaDefinitionProperty<string, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly currentScript?: mongoose.SchemaDefinitionProperty<HTMLOrSVGScriptElement | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly defaultView?: mongoose.SchemaDefinitionProperty<(Window & typeof globalThis) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    designMode?: mongoose.SchemaDefinitionProperty<string, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    dir?: mongoose.SchemaDefinitionProperty<string, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly doctype?: mongoose.SchemaDefinitionProperty<DocumentType | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly documentElement?: mongoose.SchemaDefinitionProperty<HTMLElement, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly documentURI?: mongoose.SchemaDefinitionProperty<string, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    domain?: mongoose.SchemaDefinitionProperty<string, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly embeds?: mongoose.SchemaDefinitionProperty<HTMLCollectionOf<HTMLEmbedElement>, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    fgColor?: mongoose.SchemaDefinitionProperty<string, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly forms?: mongoose.SchemaDefinitionProperty<HTMLCollectionOf<HTMLFormElement>, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly fragmentDirective?: mongoose.SchemaDefinitionProperty<FragmentDirective, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly fullscreen?: mongoose.SchemaDefinitionProperty<boolean, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly fullscreenEnabled?: mongoose.SchemaDefinitionProperty<boolean, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly head?: mongoose.SchemaDefinitionProperty<HTMLHeadElement, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly hidden?: mongoose.SchemaDefinitionProperty<boolean, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly images?: mongoose.SchemaDefinitionProperty<HTMLCollectionOf<HTMLImageElement>, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly implementation?: mongoose.SchemaDefinitionProperty<DOMImplementation, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly inputEncoding?: mongoose.SchemaDefinitionProperty<string, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly lastModified?: mongoose.SchemaDefinitionProperty<string, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    linkColor?: mongoose.SchemaDefinitionProperty<string, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly links?: mongoose.SchemaDefinitionProperty<HTMLCollectionOf<HTMLAnchorElement | HTMLAreaElement>, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    location?: mongoose.SchemaDefinitionProperty<Location, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onfullscreenchange?: mongoose.SchemaDefinitionProperty<((this: Document, ev: Event) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onfullscreenerror?: mongoose.SchemaDefinitionProperty<((this: Document, ev: Event) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onpointerlockchange?: mongoose.SchemaDefinitionProperty<((this: Document, ev: Event) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onpointerlockerror?: mongoose.SchemaDefinitionProperty<((this: Document, ev: Event) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onreadystatechange?: mongoose.SchemaDefinitionProperty<((this: Document, ev: Event) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onvisibilitychange?: mongoose.SchemaDefinitionProperty<((this: Document, ev: Event) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly ownerDocument?: mongoose.SchemaDefinitionProperty<null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly pictureInPictureEnabled?: mongoose.SchemaDefinitionProperty<boolean, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly plugins?: mongoose.SchemaDefinitionProperty<HTMLCollectionOf<HTMLEmbedElement>, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly readyState?: mongoose.SchemaDefinitionProperty<DocumentReadyState, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly referrer?: mongoose.SchemaDefinitionProperty<string, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly rootElement?: mongoose.SchemaDefinitionProperty<SVGSVGElement | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly scripts?: mongoose.SchemaDefinitionProperty<HTMLCollectionOf<HTMLScriptElement>, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly scrollingElement?: mongoose.SchemaDefinitionProperty<Element | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly timeline?: mongoose.SchemaDefinitionProperty<DocumentTimeline, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    title?: mongoose.SchemaDefinitionProperty<string, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly visibilityState?: mongoose.SchemaDefinitionProperty<DocumentVisibilityState, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    vlinkColor?: mongoose.SchemaDefinitionProperty<string, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    adoptNode?: mongoose.SchemaDefinitionProperty<(<T extends Node>(node: T) => T), ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    captureEvents?: mongoose.SchemaDefinitionProperty<() => void, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    caretPositionFromPoint?: mongoose.SchemaDefinitionProperty<(x: number, y: number, options?: CaretPositionFromPointOptions) => CaretPosition | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    caretRangeFromPoint?: mongoose.SchemaDefinitionProperty<(x: number, y: number) => Range | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    clear?: mongoose.SchemaDefinitionProperty<() => void, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    close?: mongoose.SchemaDefinitionProperty<() => void, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    createAttribute?: mongoose.SchemaDefinitionProperty<(localName: string) => Attr, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    createAttributeNS?: mongoose.SchemaDefinitionProperty<(namespace: string | null, qualifiedName: string) => Attr, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    createCDATASection?: mongoose.SchemaDefinitionProperty<(data: string) => CDATASection, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    createComment?: mongoose.SchemaDefinitionProperty<(data: string) => Comment, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    createDocumentFragment?: mongoose.SchemaDefinitionProperty<() => DocumentFragment, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    createElement?: mongoose.SchemaDefinitionProperty<{
        <K extends keyof HTMLElementTagNameMap>(tagName: K, options?: ElementCreationOptions): HTMLElementTagNameMap[K];
        <K extends keyof HTMLElementDeprecatedTagNameMap>(tagName: K, options?: ElementCreationOptions): HTMLElementDeprecatedTagNameMap[K];
        (tagName: string, options?: ElementCreationOptions): HTMLElement;
    }, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    createElementNS?: mongoose.SchemaDefinitionProperty<{
        (namespaceURI: "http://www.w3.org/1999/xhtml", qualifiedName: string): HTMLElement;
        <K extends keyof SVGElementTagNameMap>(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: K): SVGElementTagNameMap[K];
        (namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: string): SVGElement;
        <K extends keyof MathMLElementTagNameMap>(namespaceURI: "http://www.w3.org/1998/Math/MathML", qualifiedName: K): MathMLElementTagNameMap[K];
        (namespaceURI: "http://www.w3.org/1998/Math/MathML", qualifiedName: string): MathMLElement;
        (namespaceURI: string | null, qualifiedName: string, options?: ElementCreationOptions): Element;
        (namespace: string | null, qualifiedName: string, options?: string | ElementCreationOptions): Element;
    }, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    createEvent?: mongoose.SchemaDefinitionProperty<{
        (eventInterface: "AnimationEvent"): AnimationEvent;
        (eventInterface: "AnimationPlaybackEvent"): AnimationPlaybackEvent;
        (eventInterface: "AudioProcessingEvent"): AudioProcessingEvent;
        (eventInterface: "BeforeUnloadEvent"): BeforeUnloadEvent;
        (eventInterface: "BlobEvent"): BlobEvent;
        (eventInterface: "ClipboardEvent"): ClipboardEvent;
        (eventInterface: "CloseEvent"): CloseEvent;
        (eventInterface: "CompositionEvent"): CompositionEvent;
        (eventInterface: "ContentVisibilityAutoStateChangeEvent"): ContentVisibilityAutoStateChangeEvent;
        (eventInterface: "CookieChangeEvent"): CookieChangeEvent;
        (eventInterface: "CustomEvent"): CustomEvent;
        (eventInterface: "DeviceMotionEvent"): DeviceMotionEvent;
        (eventInterface: "DeviceOrientationEvent"): DeviceOrientationEvent;
        (eventInterface: "DragEvent"): DragEvent;
        (eventInterface: "ErrorEvent"): ErrorEvent;
        (eventInterface: "Event"): Event;
        (eventInterface: "Events"): Event;
        (eventInterface: "FocusEvent"): FocusEvent;
        (eventInterface: "FontFaceSetLoadEvent"): FontFaceSetLoadEvent;
        (eventInterface: "FormDataEvent"): FormDataEvent;
        (eventInterface: "GamepadEvent"): GamepadEvent;
        (eventInterface: "HashChangeEvent"): HashChangeEvent;
        (eventInterface: "IDBVersionChangeEvent"): IDBVersionChangeEvent;
        (eventInterface: "InputEvent"): InputEvent;
        (eventInterface: "KeyboardEvent"): KeyboardEvent;
        (eventInterface: "MIDIConnectionEvent"): MIDIConnectionEvent;
        (eventInterface: "MIDIMessageEvent"): MIDIMessageEvent;
        (eventInterface: "MediaEncryptedEvent"): MediaEncryptedEvent;
        (eventInterface: "MediaKeyMessageEvent"): MediaKeyMessageEvent;
        (eventInterface: "MediaQueryListEvent"): MediaQueryListEvent;
        (eventInterface: "MediaStreamTrackEvent"): MediaStreamTrackEvent;
        (eventInterface: "MessageEvent"): MessageEvent;
        (eventInterface: "MouseEvent"): MouseEvent;
        (eventInterface: "MouseEvents"): MouseEvent;
        (eventInterface: "OfflineAudioCompletionEvent"): OfflineAudioCompletionEvent;
        (eventInterface: "PageRevealEvent"): PageRevealEvent;
        (eventInterface: "PageSwapEvent"): PageSwapEvent;
        (eventInterface: "PageTransitionEvent"): PageTransitionEvent;
        (eventInterface: "PaymentMethodChangeEvent"): PaymentMethodChangeEvent;
        (eventInterface: "PaymentRequestUpdateEvent"): PaymentRequestUpdateEvent;
        (eventInterface: "PictureInPictureEvent"): PictureInPictureEvent;
        (eventInterface: "PointerEvent"): PointerEvent;
        (eventInterface: "PopStateEvent"): PopStateEvent;
        (eventInterface: "ProgressEvent"): ProgressEvent;
        (eventInterface: "PromiseRejectionEvent"): PromiseRejectionEvent;
        (eventInterface: "RTCDTMFToneChangeEvent"): RTCDTMFToneChangeEvent;
        (eventInterface: "RTCDataChannelEvent"): RTCDataChannelEvent;
        (eventInterface: "RTCErrorEvent"): RTCErrorEvent;
        (eventInterface: "RTCPeerConnectionIceErrorEvent"): RTCPeerConnectionIceErrorEvent;
        (eventInterface: "RTCPeerConnectionIceEvent"): RTCPeerConnectionIceEvent;
        (eventInterface: "RTCTrackEvent"): RTCTrackEvent;
        (eventInterface: "SecurityPolicyViolationEvent"): SecurityPolicyViolationEvent;
        (eventInterface: "SpeechSynthesisErrorEvent"): SpeechSynthesisErrorEvent;
        (eventInterface: "SpeechSynthesisEvent"): SpeechSynthesisEvent;
        (eventInterface: "StorageEvent"): StorageEvent;
        (eventInterface: "SubmitEvent"): SubmitEvent;
        (eventInterface: "TextEvent"): TextEvent;
        (eventInterface: "ToggleEvent"): ToggleEvent;
        (eventInterface: "TouchEvent"): TouchEvent;
        (eventInterface: "TrackEvent"): TrackEvent;
        (eventInterface: "TransitionEvent"): TransitionEvent;
        (eventInterface: "UIEvent"): UIEvent;
        (eventInterface: "UIEvents"): UIEvent;
        (eventInterface: "WebGLContextEvent"): WebGLContextEvent;
        (eventInterface: "WheelEvent"): WheelEvent;
        (eventInterface: string): Event;
    }, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    createNodeIterator?: mongoose.SchemaDefinitionProperty<(root: Node, whatToShow?: number, filter?: NodeFilter | null) => NodeIterator, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    createProcessingInstruction?: mongoose.SchemaDefinitionProperty<(target: string, data: string) => ProcessingInstruction, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    createRange?: mongoose.SchemaDefinitionProperty<() => Range, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    createTextNode?: mongoose.SchemaDefinitionProperty<(data: string) => Text, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    createTreeWalker?: mongoose.SchemaDefinitionProperty<(root: Node, whatToShow?: number, filter?: NodeFilter | null) => TreeWalker, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    execCommand?: mongoose.SchemaDefinitionProperty<(commandId: string, showUI?: boolean, value?: string) => boolean, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    exitFullscreen?: mongoose.SchemaDefinitionProperty<() => Promise<void>, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    exitPictureInPicture?: mongoose.SchemaDefinitionProperty<() => Promise<void>, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    exitPointerLock?: mongoose.SchemaDefinitionProperty<() => void, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    getElementById?: mongoose.SchemaDefinitionProperty<(elementId: string) => HTMLElement | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    getElementsByClassName?: mongoose.SchemaDefinitionProperty<(classNames: string) => HTMLCollectionOf<Element>, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    getElementsByName?: mongoose.SchemaDefinitionProperty<(elementName: string) => NodeListOf<HTMLElement>, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    getElementsByTagName?: mongoose.SchemaDefinitionProperty<{
        <K extends keyof HTMLElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<HTMLElementTagNameMap[K]>;
        <K extends keyof SVGElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<SVGElementTagNameMap[K]>;
        <K extends keyof MathMLElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<MathMLElementTagNameMap[K]>;
        <K extends keyof HTMLElementDeprecatedTagNameMap>(qualifiedName: K): HTMLCollectionOf<HTMLElementDeprecatedTagNameMap[K]>;
        (qualifiedName: string): HTMLCollectionOf<Element>;
    }, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    getElementsByTagNameNS?: mongoose.SchemaDefinitionProperty<{
        (namespaceURI: "http://www.w3.org/1999/xhtml", localName: string): HTMLCollectionOf<HTMLElement>;
        (namespaceURI: "http://www.w3.org/2000/svg", localName: string): HTMLCollectionOf<SVGElement>;
        (namespaceURI: "http://www.w3.org/1998/Math/MathML", localName: string): HTMLCollectionOf<MathMLElement>;
        (namespace: string | null, localName: string): HTMLCollectionOf<Element>;
    }, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    getSelection?: mongoose.SchemaDefinitionProperty<() => Selection | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    hasFocus?: mongoose.SchemaDefinitionProperty<() => boolean, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    hasStorageAccess?: mongoose.SchemaDefinitionProperty<() => Promise<boolean>, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    importNode?: mongoose.SchemaDefinitionProperty<(<T extends Node>(node: T, options?: boolean | ImportNodeOptions) => T), ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    open?: mongoose.SchemaDefinitionProperty<{
        (unused1?: string, unused2?: string): Document;
        (url: string | URL, name: string, features: string): WindowProxy | null;
    }, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    queryCommandEnabled?: mongoose.SchemaDefinitionProperty<(commandId: string) => boolean, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    queryCommandIndeterm?: mongoose.SchemaDefinitionProperty<(commandId: string) => boolean, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    queryCommandState?: mongoose.SchemaDefinitionProperty<(commandId: string) => boolean, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    queryCommandSupported?: mongoose.SchemaDefinitionProperty<(commandId: string) => boolean, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    queryCommandValue?: mongoose.SchemaDefinitionProperty<(commandId: string) => string, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    releaseEvents?: mongoose.SchemaDefinitionProperty<() => void, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    requestStorageAccess?: mongoose.SchemaDefinitionProperty<() => Promise<void>, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    startViewTransition?: mongoose.SchemaDefinitionProperty<(callbackOptions?: ViewTransitionUpdateCallback | StartViewTransitionOptions) => ViewTransition, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    write?: mongoose.SchemaDefinitionProperty<(...text: string[]) => void, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    writeln?: mongoose.SchemaDefinitionProperty<(...text: string[]) => void, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly textContent?: mongoose.SchemaDefinitionProperty<null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    addEventListener?: mongoose.SchemaDefinitionProperty<{
        <K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        (type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    }, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    removeEventListener?: mongoose.SchemaDefinitionProperty<{
        <K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        (type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly baseURI?: mongoose.SchemaDefinitionProperty<string, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly childNodes?: mongoose.SchemaDefinitionProperty<NodeListOf<ChildNode>, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly firstChild?: mongoose.SchemaDefinitionProperty<ChildNode | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly isConnected?: mongoose.SchemaDefinitionProperty<boolean, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly lastChild?: mongoose.SchemaDefinitionProperty<ChildNode | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly nextSibling?: mongoose.SchemaDefinitionProperty<ChildNode | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly nodeName?: mongoose.SchemaDefinitionProperty<string, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly nodeType?: mongoose.SchemaDefinitionProperty<number, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    nodeValue?: mongoose.SchemaDefinitionProperty<string | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly parentElement?: mongoose.SchemaDefinitionProperty<HTMLElement | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly parentNode?: mongoose.SchemaDefinitionProperty<ParentNode | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly previousSibling?: mongoose.SchemaDefinitionProperty<ChildNode | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    appendChild?: mongoose.SchemaDefinitionProperty<(<T extends Node>(node: T) => T), ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    cloneNode?: mongoose.SchemaDefinitionProperty<(subtree?: boolean) => Node, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    compareDocumentPosition?: mongoose.SchemaDefinitionProperty<(other: Node) => number, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    contains?: mongoose.SchemaDefinitionProperty<(other: Node | null) => boolean, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    getRootNode?: mongoose.SchemaDefinitionProperty<(options?: GetRootNodeOptions) => Node, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    hasChildNodes?: mongoose.SchemaDefinitionProperty<() => boolean, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    insertBefore?: mongoose.SchemaDefinitionProperty<(<T extends Node>(node: T, child: Node | null) => T), ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    isDefaultNamespace?: mongoose.SchemaDefinitionProperty<(namespace: string | null) => boolean, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    isEqualNode?: mongoose.SchemaDefinitionProperty<(otherNode: Node | null) => boolean, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    isSameNode?: mongoose.SchemaDefinitionProperty<(otherNode: Node | null) => boolean, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    lookupNamespaceURI?: mongoose.SchemaDefinitionProperty<(prefix: string | null) => string | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    lookupPrefix?: mongoose.SchemaDefinitionProperty<(namespace: string | null) => string | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    normalize?: mongoose.SchemaDefinitionProperty<() => void, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    removeChild?: mongoose.SchemaDefinitionProperty<(<T extends Node>(child: T) => T), ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    replaceChild?: mongoose.SchemaDefinitionProperty<(<T extends Node>(node: Node, child: T) => T), ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly ELEMENT_NODE?: mongoose.SchemaDefinitionProperty<1, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly ATTRIBUTE_NODE?: mongoose.SchemaDefinitionProperty<2, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly TEXT_NODE?: mongoose.SchemaDefinitionProperty<3, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly CDATA_SECTION_NODE?: mongoose.SchemaDefinitionProperty<4, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly ENTITY_REFERENCE_NODE?: mongoose.SchemaDefinitionProperty<5, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly ENTITY_NODE?: mongoose.SchemaDefinitionProperty<6, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly PROCESSING_INSTRUCTION_NODE?: mongoose.SchemaDefinitionProperty<7, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly COMMENT_NODE?: mongoose.SchemaDefinitionProperty<8, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly DOCUMENT_NODE?: mongoose.SchemaDefinitionProperty<9, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly DOCUMENT_TYPE_NODE?: mongoose.SchemaDefinitionProperty<10, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly DOCUMENT_FRAGMENT_NODE?: mongoose.SchemaDefinitionProperty<11, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly NOTATION_NODE?: mongoose.SchemaDefinitionProperty<12, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly DOCUMENT_POSITION_DISCONNECTED?: mongoose.SchemaDefinitionProperty<1, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly DOCUMENT_POSITION_PRECEDING?: mongoose.SchemaDefinitionProperty<2, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly DOCUMENT_POSITION_FOLLOWING?: mongoose.SchemaDefinitionProperty<4, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly DOCUMENT_POSITION_CONTAINS?: mongoose.SchemaDefinitionProperty<8, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly DOCUMENT_POSITION_CONTAINED_BY?: mongoose.SchemaDefinitionProperty<16, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC?: mongoose.SchemaDefinitionProperty<32, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    dispatchEvent?: mongoose.SchemaDefinitionProperty<(event: Event) => boolean, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly activeElement?: mongoose.SchemaDefinitionProperty<Element | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    adoptedStyleSheets?: mongoose.SchemaDefinitionProperty<CSSStyleSheet[], ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly fullscreenElement?: mongoose.SchemaDefinitionProperty<Element | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly pictureInPictureElement?: mongoose.SchemaDefinitionProperty<Element | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly pointerLockElement?: mongoose.SchemaDefinitionProperty<Element | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly styleSheets?: mongoose.SchemaDefinitionProperty<StyleSheetList, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    elementFromPoint?: mongoose.SchemaDefinitionProperty<(x: number, y: number) => Element | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    elementsFromPoint?: mongoose.SchemaDefinitionProperty<(x: number, y: number) => Element[], ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    getAnimations?: mongoose.SchemaDefinitionProperty<() => Animation[], ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly fonts?: mongoose.SchemaDefinitionProperty<FontFaceSet, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onabort?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: UIEvent) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onanimationcancel?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onanimationend?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onanimationiteration?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onanimationstart?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onauxclick?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: PointerEvent) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onbeforeinput?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: InputEvent) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onbeforematch?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: Event) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onbeforetoggle?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: ToggleEvent) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onblur?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: FocusEvent) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    oncancel?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: Event) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    oncanplay?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: Event) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    oncanplaythrough?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: Event) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onchange?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: Event) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onclick?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: PointerEvent) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onclose?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: Event) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    oncontextlost?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: Event) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    oncontextmenu?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: PointerEvent) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    oncontextrestored?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: Event) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    oncopy?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: ClipboardEvent) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    oncuechange?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: Event) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    oncut?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: ClipboardEvent) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    ondblclick?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: MouseEvent) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    ondrag?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: DragEvent) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    ondragend?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: DragEvent) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    ondragenter?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: DragEvent) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    ondragleave?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: DragEvent) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    ondragover?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: DragEvent) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    ondragstart?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: DragEvent) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    ondrop?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: DragEvent) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    ondurationchange?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: Event) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onemptied?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: Event) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onended?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: Event) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onerror?: mongoose.SchemaDefinitionProperty<OnErrorEventHandler, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onfocus?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: FocusEvent) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onformdata?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: FormDataEvent) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    ongotpointercapture?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: PointerEvent) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    oninput?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: Event) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    oninvalid?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: Event) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onkeydown?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onkeypress?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onkeyup?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onload?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: Event) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onloadeddata?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: Event) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onloadedmetadata?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: Event) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onloadstart?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: Event) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onlostpointercapture?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: PointerEvent) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onmousedown?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: MouseEvent) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onmouseenter?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: MouseEvent) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onmouseleave?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: MouseEvent) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onmousemove?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: MouseEvent) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onmouseout?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: MouseEvent) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onmouseover?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: MouseEvent) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onmouseup?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: MouseEvent) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onpaste?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: ClipboardEvent) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onpause?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: Event) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onplay?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: Event) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onplaying?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: Event) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onpointercancel?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: PointerEvent) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onpointerdown?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: PointerEvent) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onpointerenter?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: PointerEvent) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onpointerleave?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: PointerEvent) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onpointermove?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: PointerEvent) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onpointerout?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: PointerEvent) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onpointerover?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: PointerEvent) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onpointerrawupdate?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: Event) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onpointerup?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: PointerEvent) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onprogress?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: ProgressEvent) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onratechange?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: Event) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onreset?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: Event) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onresize?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: UIEvent) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onscroll?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: Event) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onscrollend?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: Event) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onsecuritypolicyviolation?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: SecurityPolicyViolationEvent) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onseeked?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: Event) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onseeking?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: Event) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onselect?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: Event) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onselectionchange?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: Event) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onselectstart?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: Event) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onslotchange?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: Event) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onstalled?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: Event) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onsubmit?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: SubmitEvent) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onsuspend?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: Event) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    ontimeupdate?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: Event) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    ontoggle?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: ToggleEvent) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    ontouchcancel?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: TouchEvent) => any) | null | undefined, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    ontouchend?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: TouchEvent) => any) | null | undefined, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    ontouchmove?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: TouchEvent) => any) | null | undefined, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    ontouchstart?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: TouchEvent) => any) | null | undefined, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    ontransitioncancel?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    ontransitionend?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    ontransitionrun?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    ontransitionstart?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onvolumechange?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: Event) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onwaiting?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: Event) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onwebkitanimationend?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: Event) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onwebkitanimationiteration?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: Event) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onwebkitanimationstart?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: Event) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onwebkittransitionend?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: Event) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    onwheel?: mongoose.SchemaDefinitionProperty<((this: GlobalEventHandlers, ev: WheelEvent) => any) | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly childElementCount?: mongoose.SchemaDefinitionProperty<number, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly children?: mongoose.SchemaDefinitionProperty<HTMLCollection, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly firstElementChild?: mongoose.SchemaDefinitionProperty<Element | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    readonly lastElementChild?: mongoose.SchemaDefinitionProperty<Element | null, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    append?: mongoose.SchemaDefinitionProperty<(...nodes: (Node | string)[]) => void, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    prepend?: mongoose.SchemaDefinitionProperty<(...nodes: (Node | string)[]) => void, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    querySelector?: mongoose.SchemaDefinitionProperty<{
        <K extends keyof HTMLElementTagNameMap>(selectors: K): HTMLElementTagNameMap[K] | null;
        <K extends keyof SVGElementTagNameMap>(selectors: K): SVGElementTagNameMap[K] | null;
        <K extends keyof MathMLElementTagNameMap>(selectors: K): MathMLElementTagNameMap[K] | null;
        <K extends keyof HTMLElementDeprecatedTagNameMap>(selectors: K): HTMLElementDeprecatedTagNameMap[K] | null;
        <E extends Element = Element>(selectors: string): E | null;
    }, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    querySelectorAll?: mongoose.SchemaDefinitionProperty<{
        <K extends keyof HTMLElementTagNameMap>(selectors: K): NodeListOf<HTMLElementTagNameMap[K]>;
        <K extends keyof SVGElementTagNameMap>(selectors: K): NodeListOf<SVGElementTagNameMap[K]>;
        <K extends keyof MathMLElementTagNameMap>(selectors: K): NodeListOf<MathMLElementTagNameMap[K]>;
        <K extends keyof HTMLElementDeprecatedTagNameMap>(selectors: K): NodeListOf<HTMLElementDeprecatedTagNameMap[K]>;
        <E extends Element = Element>(selectors: string): NodeListOf<E>;
    }, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    replaceChildren?: mongoose.SchemaDefinitionProperty<(...nodes: (Node | string)[]) => void, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    createExpression?: mongoose.SchemaDefinitionProperty<(expression: string, resolver?: XPathNSResolver | null) => XPathExpression, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    createNSResolver?: mongoose.SchemaDefinitionProperty<(nodeResolver: Node) => Node, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    evaluate?: mongoose.SchemaDefinitionProperty<(expression: string, contextNode: Node, resolver?: XPathNSResolver | null, type?: number, result?: XPathResult | null) => XPathResult, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<ITask & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
}, ITask>, ITask>;
//# sourceMappingURL=user.model.d.ts.map