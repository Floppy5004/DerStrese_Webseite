#!/bin/bash

# Streamplan Update Script
# Lädt automatisch den aktuellen Streamplan herunter

echo "🔄 Lade aktuellen Streamplan herunter..."
curl -L -o streamplan.png "https://derstre.se/images/streamplan.png"

if [ $? -eq 0 ]; then
    echo "✅ Download erfolgreich!"

    echo "📁 Kopiere in public/assets/..."
    cp streamplan.png public/assets/

    echo "✨ Streamplan aktualisiert!"
    echo "⚠️  Hinweis: Bitte prüfe die Zeiten in src/pages/index.astro und passe sie manuell an, falls nötig."
else
    echo "❌ Fehler beim Herunterladen des Streamplans!"
    exit 1
fi
