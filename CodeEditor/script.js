let originalConsoleLog = console.log;

function runCode() {
    const code = document.getElementById('editor').value;
    const consoleOutput = document.getElementById('console');

    consoleOutput.textContent = '';

    try {
        console.log = function(...args) {
            consoleOutput.textContent += args.join(' ') + '\n';
            originalConsoleLog.apply(console, args);
        };
        eval(code);
    } catch (error) {
        console.error(error);
        consoleOutput.textContent += 'Error: ' + error.message + '\n';
    }
}

function resetConsole() {
    const consoleOutput = document.getElementById('console');
    consoleOutput.textContent = '';
    console.log = originalConsoleLog;
}
