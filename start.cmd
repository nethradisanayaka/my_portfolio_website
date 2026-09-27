@echo off
rem ================================================================
rem  Add PDFs to the education-pdfs folder, then double-click this file to rebuild and open the portfolio.
rem  The website folder contains the generated portfolio output.
rem ================================================================
cd /d "%~dp0"
where npm >nul 2>nul
if errorlevel 1 (
  echo npm was not found. Install Node.js and try again.
  pause
  exit /b 1
)
call npm run build
if errorlevel 1 (
  echo Build failed. The portfolio was not opened.
  pause
  exit /b 1
)
xcopy "%~dp0dist\*" "%~dp0website\" /E /I /H /K /Y >nul
if errorlevel 1 (
  echo Could not update the website output.
  pause
  exit /b 1
)
start "" "%~dp0website\index.html"