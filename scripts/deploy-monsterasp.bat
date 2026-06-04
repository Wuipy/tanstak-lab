@echo off
REM Deploy carpeta dist\ al hosting MonsterASP (sitio estatico o wwwroot)
REM Rellena las variables con los datos del panel Web Deploy de tu sitio FRONTEND.

setlocal

set SOURCE_PATH=%~dp0..\dist\
set DEST_SITE=siteXXXXX
set DEST_URL=https://siteXXXXX.siteasp.net:8172/msdeploy.axd?site=siteXXXXX
set USERNAME=siteXXXXX
set PASSWORD=TU_PASSWORD

if not exist "%SOURCE_PATH%index.html" (
  echo Error: primero ejecuta "npm run build" en la raiz del proyecto.
  exit /b 1
)

"C:\Program Files (x86)\IIS\Microsoft Web Deploy V3\msdeploy.exe" ^
  -verb:sync ^
  -source:contentPath="%SOURCE_PATH%" ^
  -dest:contentPath="%DEST_SITE%",computerName="%DEST_URL%",userName="%USERNAME%",password="%PASSWORD%",authtype="Basic",includeAcls="False" ^
  -allowUntrusted ^
  -disableLink:AppPoolExtension ^
  -disableLink:ContentExtension ^
  -disableLink:CertificateExtension ^
  -verbose

endlocal
pause
