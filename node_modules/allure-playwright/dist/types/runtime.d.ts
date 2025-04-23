/// <reference types="node" />
import type { AttachmentOptions, ParameterMode } from "allure-js-commons";
import type { RuntimeMessage } from "allure-js-commons/sdk";
import { MessageTestRuntime } from "allure-js-commons/sdk/runtime";
export declare class AllurePlaywrightTestRuntime extends MessageTestRuntime {
    constructor();
    step(stepName: string, body: () => any): Promise<any>;
    stepDisplayName(name: string): Promise<void>;
    stepParameter(name: string, value: string, mode?: ParameterMode): Promise<void>;
    attachment(name: string, content: Buffer | string, options: AttachmentOptions): Promise<void>;
    attachmentFromPath(name: string, path: string, options: AttachmentOptions): Promise<void>;
    sendMessage(message: RuntimeMessage): Promise<void>;
}
