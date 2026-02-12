@echo off
REM Streamplan Update Script für Windows
REM Lädt automatisch den aktuellen Streamplan herunter

echo 🔄 Lade aktuellen Streamplan herunter...
curl -L -o streamplan.png "https://derstre.se/images/streamplan.png"

if %errorlevel% equ 0 (
    echo ✅ Download erfolgreich!

    echo 📁 Kopiere in public\assets\...
    copy /Y streamplan.png public\assets\

    echo ✨ Streamplan aktualisiert!
    echo ⚠️  Hinweis: Bitte prüfe die Zeiten in src\pages\index.astro und passe sie manuell an, falls nötig.
) else (
    echo ❌ Fehler beim Herunterladen des Streamplans!
    exit /b 1
)

pause
