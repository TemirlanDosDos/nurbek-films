# CutMedia — Content studio
Live: https://temirlandosdos.github.io/nurbek-films/

Independent local WebStorm project. The AITU project is unchanged.

## Development
Run `npm run dev` in WebStorm. Local address: http://127.0.0.1:4175
No dependencies are required; Node.js is sufficient.
`npm run check` checks JavaScript syntax. GitHub Pages builds and deploys dist/ on each push to main. Styles, scripts, translations and the catalogue use content-versioned filenames so returning visitors receive matching updates.
`npm run build` creates dist/ for other static hosting; vercel.json is retained as an alternative deployment configuration.

## Design
Distinct section colours, numbered headings and sticky navigation:
- Hero: lime.
- Portfolio: violet.
- Services: warm orange.
- Team: blue.
- Contact: coral.

English is the default. The language switch preserves the preference locally.
Copy and translations live in index.html and i18n.js. Page interactions live in app.js.
WhatsApp links open a draft for +7 705 499 6852; no message is sent automatically.

## Videos
19 user-supplied videos are web-encoded H.264/AAC MP4s, with fast-start metadata.
The originals in C:\NurbekVideo are unchanged.
- 1234.mp4 → media/videos/hero.mp4, the featured first-screen video.
- дом1.mp4 … дом10.mp4 → property-01.mp4 … property-10.mp4, category property / Real estate / Недвижимость.
- Видео 3.1.mp4 and Видео3.2.mp4 → content-01.mp4 and content-02.mp4.
- The six AQ*.mp4 files, sorted by original filename, → content-03.mp4 … content-08.mp4.

public/projects.json is the media catalogue (relative paths, category, duration, orientation, size).
Posters were extracted from the actual supplied videos.
Gallery displays six videos initially, with category filters and Show more.
Gallery video data is loaded only when a viewer starts a video.
Hero playback is muted, pauses outside the viewport/when the tab is hidden, and respects reduced motion.
Click Watch with sound or a portfolio card for native controls, sound, seeking and fullscreen.
Closing the player stops playback. Portrait and landscape videos retain their aspect ratio in the player.

## Team
Nurbek — content producer.
Malik-Ibn-Anas — cinematographer.
Islam — video editor.
Portraits remain represented by initials until supplied.
Base: Astana. Work locations: Kazakhstan, Russia and Dubai.

