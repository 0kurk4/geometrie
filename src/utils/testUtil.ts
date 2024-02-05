// Disable console errors (emitted by errorLoggerUtil.ts) in tests
const disableConsoleErrors = () => {
    let spy: jest.SpyInstance;
    beforeEach(() => {
        spy = jest.spyOn(console, 'error').mockImplementation(() => null);
    });
    afterEach(() => {
        spy.mockRestore();
    });
}

export default disableConsoleErrors;