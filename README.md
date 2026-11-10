# CutMedia — Real Estate Films

Separate local portfolio project. AITU was not modified.

## Run in WebStorm

Open this directory. Run the `dev` script in package.json, or `npm run dev`.
Local address: http://127.0.0.1:4175
No dependencies are required; Node.js is sufficient.

`npm run check` checks JavaScript syntax. `npm run build` copies public assets to dist.
Vercel settings are in vercel.json.

## Content

- English is the default; the RU switch saves the language on this device.
- WhatsApp: +7 705 499 6852. Clicking opens a draft; it does not send a message.
- Team: Nurbek (content producer), Malik-Ibn-Anas (cinematographer), Islam (film editor). Portraits are pending; initials are used for now.
- Base: Astana. Working across Kazakhstan, Russia and Dubai.
- Brand: CutMedia.
- Preview pages currently use noindex until actual portfolio material is supplied.

## Adding videos

1. Put web-optimised H.264 MP4 or WebM videos in public/media, or use direct HTTPS video URLs.
2. In public/content.js set heroVideo and each project's video URL. Example: ./media/showreel.mp4. Use relative URLs for GitHub Pages subdirectory compatibility.
3. Set project titles in both content.js and englishProjects in app.js, and update the matching poster images.
4. The main background plays muted and respects reduced-motion preferences. Clicking opens the full player with sound controls, seeking and fullscreen.
5. Large source files should be kept out of Git; use a video host or object storage for large finished videos.
6. Replace the mood-reference notice with factual portfolio copy when real work is present; remove the noindex meta tag when ready for search engines.

On localhost, the empty video dialog supports previewing a local video without uploading it. These temporary previews are not saved or deployed.

## Photography

Temporary mood references, not the team's work. Images downloaded from Unsplash:
- https://images.unsplash.com/photo-1600607687920-4e2a09cf159d
- https://images.unsplash.com/photo-1600210492486-724fe5c67fb0
- https://images.unsplash.com/photo-1519501025264-65ba15a82390

Replace with the team's approved images/video posters before the final portfolio release.
