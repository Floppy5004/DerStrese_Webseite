# Screenshots

Dieser Ordner enthält Screenshots der Website für die Dokumentation.

## Benötigte Screenshots:

1. **hero.png** - Hero-Sektion mit Logo und Hauptpinguin
2. **about.png** - About-Sektion
3. **streamplan.png** - Streamplan-Übersicht
4. **social.png** - Social Media Links
5. **twitch-embed.png** - Twitch Live-Embed
6. **community.png** - Community-Sektion
7. **support.png** - Ko-fi Support-Sektion
8. **mobile-view.png** - Mobile Ansicht
9. **header-navigation.png** - Sticky Header mit Navigation
10. **404-page.png** - Custom 404 Error Page

## Screenshots erstellen:

### Manuell:
1. Website starten: `npm run dev`
2. Browser öffnen: `http://localhost:4321`
3. Screenshots mit Browser-Tools machen (F12 → Device Toolbar für Mobile)
4. Screenshots in diesem Ordner speichern

### Automatisch mit Playwright:

```bash
npm install -D @playwright/test
npx playwright install
```

Dann `take-screenshots.js` Script ausführen (siehe Root-Verzeichnis).

## Empfohlene Auflösungen:

- **Desktop**: 1920x1080
- **Mobile**: 375x812 (iPhone)
- **Tablet**: 768x1024 (iPad)
