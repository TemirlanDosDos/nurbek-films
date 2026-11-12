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
- Services: muted olive with sage accents.
- Contact: dark plum with mauve accents.

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

## Service packages
- Monthly content: 15 videos, up to 3 shooting days in Dubai, AED 15,000/month. Visually highlighted as the core package.
- Extended content: 20 videos, up to 4 shooting days in Dubai, AED 20,000/month.
- Scale: 25 videos, up to 5 shooting days in Dubai, from AED 25,000/month.
International shoots and travel costs are quoted separately.
Planning and scripts are included but are not counted as finished videos.
Shared terms cover estimated first edits in 2–3 days after a shooting day, up to 3 revision rounds per video, and shoot hours/video scope agreed in advance.
Package-specific WhatsApp drafts match the current language, price and video count.
The team section is not displayed; contact follows the packages and terms.

## Location
Base: Astana. Work locations: Kazakhstan, Russia and Dubai.

