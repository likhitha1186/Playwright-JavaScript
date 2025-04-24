/// <reference types="node" />
import type { FullConfig } from "@playwright/test";
import type { FullResult, TestResult as PlaywrightTestResult, Suite, TestCase, TestError, TestStep } from "@playwright/test/reporter";
import type { AllurePlaywrightReporterConfig } from "./model.js";
interface ReporterV2 {
    onConfigure(config: FullConfig): void;
    onBegin(suite: Suite): void;
    onTestBegin(test: TestCase, result: PlaywrightTestResult): void;
    onStdOut(chunk: string | Buffer, test?: TestCase, result?: PlaywrightTestResult): void;
    onStdErr(chunk: string | Buffer, test?: TestCase, result?: PlaywrightTestResult): void;
    onTestEnd(test: TestCase, result: PlaywrightTestResult): void;
    onEnd(result: FullResult): Promise<{
        status?: FullResult["status"];
    } | undefined | void> | void;
    onExit(): void | Promise<void>;
    onError(error: TestError): void;
    onStepBegin(test: TestCase, result: PlaywrightTestResult, step: TestStep): void;
    onStepEnd(test: TestCase, result: PlaywrightTestResult, step: TestStep): void;
    printsToStdio(): boolean;
    version(): "v2";
}
export declare class AllureReporter implements ReporterV2 {
    #private;
    config: FullConfig;
    suite: Suite;
    options: AllurePlaywrightReporterConfig;
    private allureRuntime;
    private globalStartTime;
    private processedDiffs;
    private readonly startedTestCasesTitlesCache;
    private readonly allureResultsUuids;
    private readonly attachmentSteps;
    private beforeHooksStepsStack;
    private afterHooksStepsStack;
    constructor(config: AllurePlaywrightReporterConfig);
    onConfigure(config: FullConfig): void;
    onError(): void;
    onExit(): void;
    onStdErr(): void;
    onStdOut(): void;
    onBegin(suite: Suite): void;
    onTestBegin(test: TestCase): void;
    onStepBegin(test: TestCase, _result: PlaywrightTestResult, step: TestStep): void;
    onStepEnd(test: TestCase, _result: PlaywrightTestResult, step: TestStep): void;
    onTestEnd(test: TestCase, result: PlaywrightTestResult): Promise<void>;
    addSkippedResults(): Promise<void>;
    onEnd(): Promise<void>;
    printsToStdio(): boolean;
    private processStepMetadataMessage;
    private processAttachment;
    version(): "v2";
}
/**
 * @deprecated for removal, import functions directly from "allure-js-commons".
 */
export declare const allure: import("./legacy.js").AllurePlaywrightLegacyApi;
/**
 * @deprecated for removal, import functions directly from "@playwright/test".
 */
export { test, expect } from "@playwright/test";
export default AllureReporter;
