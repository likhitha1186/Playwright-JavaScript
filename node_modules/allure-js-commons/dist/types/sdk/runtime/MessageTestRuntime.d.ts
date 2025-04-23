/// <reference types="node" />
import { type AttachmentOptions, type Label, type LabelName, type Link, type LinkType, type ParameterMode, type ParameterOptions, Status } from "../../model.js";
import type { RuntimeMessage } from "../types.js";
import type { TestRuntime } from "./types.js";
export declare abstract class MessageTestRuntime implements TestRuntime {
    label(name: LabelName | string, value: string): Promise<void>;
    labels(...labels: Label[]): Promise<void>;
    link(url: string, type?: LinkType | string, name?: string): Promise<void>;
    links(...links: Link[]): Promise<void>;
    parameter(name: string, value: string, options?: ParameterOptions): Promise<void>;
    description(markdown: string): Promise<void>;
    descriptionHtml(html: string): Promise<void>;
    displayName(name: string): Promise<void>;
    historyId(value: string): Promise<void>;
    testCaseId(value: string): Promise<void>;
    attachment(name: string, content: Buffer | string, options: AttachmentOptions): Promise<void>;
    attachmentFromPath(name: string, path: string, options: AttachmentOptions): Promise<void>;
    logStep(name: string, status?: Status, error?: Error): Promise<void>;
    step<T = void>(name: string, body: () => T | PromiseLike<T>): Promise<T>;
    stepDisplayName(name: string): Promise<void>;
    stepParameter(name: string, value: string, mode?: ParameterMode): Promise<void>;
    abstract sendMessage(message: RuntimeMessage): Promise<void>;
}
