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

```bash
npm create vite@latest
```
Nach dem Create darauf achten, ob zuletzt start mit ausgewählt wurde.
Bzw. grundätzlich darauf achten das man im Termin im richtign Verzeichnis ist.
Das beim ersten Mal sicher ist das die node_modules installiert sind.
ggf. muss einmal ein npm install eingegeben werden

Dannach zum starten des lokalen Dev Servers

```bash
npm run dev

```


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


Wir Planen nun das Layout der Seite bzw. die erste grobe Aufteilung der Komponenten.

Erste Struktur:

/src
|
|--/components
|----InputSection.jsx
|----TodoList.jsx
|----Todo.jsx
|----NavBar.jsx
|
|--/pages
|----TodoApp.jsx
|
|main.jsx
|App.jsx
|...

Zunächst alle Komponenten erstellen und imports durchführen.

Als nächstes nutzen wir eine Mock Data um das rendern der Liste zu bauen

```js
const mock_data = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
];
```

Die Liste kann items jetzt mit map erstellen

```jsx
      <ul>
      {mock_data.map(t => <li key={t.id}><Todo taskData={t}/></li>)}
      </ul>
```

Die Todo Komponente Rendert dann die einzelne Todo, dabei übergeben wir die Aufgabe als prop von TodoList an Todo:

```js
      <p>
          <input type="checkbox" value={taskData.completed}/>
          {taskData.title}
          <button>ändern</button>
          <button>löschen</button>
        </p>
```