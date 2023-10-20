let files = {};
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

function createFile() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'flex';
    const createButton = document.getElementById('create-button');
    const cancelButton = document.getElementById('cancel-button');
    const fileNameInput = document.getElementById('file-name');

    createButton.addEventListener('click', () => {
        const fileName = fileNameInput.value;
        if (fileName) {
            if (!files[fileName]) {
                files[fileName] = '';
                showMessage('File created successfully.', false);
                updateFileSelect();
                overlay.style.display = 'none';
            } else {
                showMessage('File with that name already exists.', true);
            }
        } else {
            showMessage('File creation canceled.', true);
            overlay.style.display = 'none';
        }
    });

    cancelButton.addEventListener('click', () => {
        showMessage('File creation canceled.', true);
        overlay.style.display = 'none';
    });
}

function updateFileSelect() {
    const fileSelect = document.getElementById('fileSelect');
    fileSelect.innerHTML = '<option value="" disabled selected>Select a File</option>';
    for (const fileName in files) {
        const option = document.createElement('option');
        option.value = fileName;
        option.textContent = fileName;
        fileSelect.appendChild(option);
    }
}

function loadFile() {
    const fileSelect = document.getElementById('fileSelect');
    const selectedFile = fileSelect.value;
    if (selectedFile) {
        document.getElementById('editor').value = files[selectedFile];
    }
}

function showMessage(message, isError = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = isError ? 'error-message' : 'success-message';
    messageDiv.textContent = message;
    document.body.appendChild(messageDiv);

    setTimeout(() => {
        document.body.removeChild(messageDiv);
    }, 3000);
}

function saveFile() {
    const fileSelect = document.getElementById('fileSelect');
    const selectedFile = fileSelect.value;
    if (selectedFile) {
        files[selectedFile] = document.getElementById('editor').value;
        showMessage('File saved successfully.', false);
    } else {
        showMessage('Please select a file first.', true);
    }
}
