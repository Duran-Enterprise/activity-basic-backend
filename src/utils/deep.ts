import express, { Router } from "express";
import { welcome } from ".";
import lessons from "./lessons.json";

export const deep = Router();
deep.use(express.static("public"));
deep.get("/", welcome);
deep.get("/:lessonName", (req, res) => {
    const { lessonName } = req.params;

    const lesson = lessons.find(
        (lesson) => lesson.name.toLowerCase() === lessonName.toLowerCase()
    );
    const footer = `<footer>
    <a href="https://github.com/Duran-Enterprise"><picture>
<source
srcset="./assets/m-dark-full.png"
media="(prefers-color-scheme: dark)"
/>
<source
srcset="./assets/m-light-full.png"
media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
/>
<img src="./assets/m-dark-full.png" width="107px" height="60px" alt="DEEP logo" title="DEEP - Duran Enterprise"/>
</picture></a> in partner with <a href="https://github.com/daedalus-developers">Daedalus</a></footer>`;

    if (lesson) {
        const { name, content } = lesson;
        const html = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <title>${name} - DEEP Learning</title>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css">
          <link rel="icon" type="image/png" href="./assets/sm-circle.png">
        </head>
        <body>
          <h1>${name} - DEEP Learning</h1>
          ${content}
          ${footer}
        </body>
      </html>
    `;

        res.send(html);
    } else {
        const html = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <title>DEEP Learning</title>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css">
          <link rel="icon" type="image/png" href="./assets/sm-circle.png">
          </head>
        <body>
          <h1>Lesson Not Found</h1>
          <p>${lessonName} is not found on the database, is the spelling correct?</p>
          <a href="/deep">Back to Home</a>

          
          ${footer}
        </body>
      </html>
    `;
        res.status(404).send(html);
    }
});

function htmlParser(html: string) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    console.log("I was acall");
    return doc;
}