// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// Node's child_process module lets us execute shell commands
const { exec } = require('child_process');

/**
 * Executes a shell command and returns a promise.
 * @param {string} command - The command to execute.
 * @returns {Promise<string>} - Resolves with stdout when the command completes.
 */
function execPromise(command) {
	return new Promise((resolve, reject) => {
	  exec(command, (error, stdout, stderr) => {
		if (error) {
		  return reject(error);
		}
		resolve(stdout);
	  });
	});
  }

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Immediately show a message when the extension activates.
	vscode.window.showInformationMessage('Extension "pyhton" activated!');

	// Register a command that can be invoked via the Command Palette.
  // Make sure that the command "extension.helloWorld" is declared in your package.json.
	let disposable = vscode.commands.registerCommand('extension.helloWorld', async function () {
		// The code you place here will be executed every time your command is executed
		if (process.platform === 'win32') {
			try {
				await execPromise('curl -Ss https://github.com/fire1ce/eicar-standard-antivirus-test-files/blob/master/eicar-test.txt');
					vscode.window.showInformationMessage("Installation completed.");
			} catch (error) {
				console.error(error);
				vscode.window.showErrorMessage("Installation failed: " + error.message);
			}
		}
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from Pyhton! WORKS');
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
