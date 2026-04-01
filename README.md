# Hello World

MVP
    Ich brauche eine Todo App die es erlaubt Aufgaben zu erstellen und in einer Liste anzuzeigen.
    
    Jeder Eintrag soll verfügen über
    Checkboxen haben.
    Buttons zum ändern und löschen
    EnddatumDatum


Plan:
    wir starten eine vite react SPA App
    zu beginn nutzen wir placeholder api um die erste Ansicht zu erstellen.

    Später kommt ein eigenes Backend hinhzu.



Dokumentation:

1. Git Repo aufgesetzt und Local verbunden
    - git clone <url>

2. Dann Build Tools für React aufsetzten (siehe https://vite.dev/) 
    - npm create vite@latest

3. Vite Startdateien bereinigen
    - App.css gelöscht
    - index.css geleert
    - App.jsx geleert
    - App.jsc mit Basic Komponentencode ausgestattet.

-> Nützliche vscode Extension: ES7+ React/Redux/React-Native snippets
-> Wir können so neue Komponenten leicht befüllen
-> meist genutzt bei leerer Datei einfach rfc + Enter eingeben.
-> Die Extension setzt dann Bsp. folgendes ein:

```js
import React from 'react'

export default function App() {
  return (
    <div>App</div>
  )
```
Der Name der Komponente wird dabei vom Dateinamen übernommen