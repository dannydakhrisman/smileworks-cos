# Playbook: video

For any video work: a short series (portrait) or a long-form video
(landscape, YouTube). The steps are the same for every project. Each
project's characters, look, numbers and file paths live in its own
`CLAUDE.md`.

Learned on the Oyen series (short-video-challenge, Nov 2026).

## 0. Start: ask first
Ask h0ney in one pop-up before any planning:
1. Format: **portrait** (short: TikTok, Reels, Shorts; 9:16, 1080x1920)
   or **landscape** (long-form, YouTube; 16:9, 1920x1080)?
2. Premise: in one or two sentences, what is it about, who is in it, and
   what is the joke or the insight? Ask every time, for a new series and
   for each new episode.
Landscape for h0ney's own YouTube channel: also load `danny-tom-scott-style`.

## 1. Understand the reference
- One reference creator. Study 3-6 of their videos: length, pace (cuts or
  bubbles per second), where the title sits, the hook in second 1, the
  ending, and how sound is mapped (audio onsets + frame contact sheets).
- Write the findings into the project's `CLAUDE.md`.
- Learn their patterns; never copy their characters, art, music or names.

## 2. Plan (in chat, wait for h0ney's yes)
- Series bible (series only): characters (look, voice, typing style), the
  world, made-up names. No real brands or logos, no jokes about real events
  at real companies.
- Formula: length target, beats with seconds, hook in second 1, hard cut
  on the punchline, no outro, follow ask only in the caption.
- Season plan (series only): schedule, format variations, never the same
  variation two days in a row.
- Show the plan as a plain-text diagram. Build nothing before the yes.

## 3. Script (per episode)
- Lock each script with a version and a change log line ("Requested by
  h0ney"). Keep the old file for big rewrites.
- Fill the media checklist before building:
  [ ] places / groups that appear + their logos  [ ] link previews + short links
  [ ] images / posters / screenshots             [ ] stickers / GIFs
  [ ] notifications / banners                    [ ] sound cue per beat
- Check the length before any visual work. Outside the target? Tighten
  the script first.

## 4. Build
- One timeline file per episode; the look and engine are shared.
- Look: match h0ney's real reference (a screenshot of his own phone)
  exactly, in the chosen color mode. No gradients or fades. One style per
  element across every variant. Icons are our own SVGs; check them at 3x
  zoom.
- Title overlay (portrait default): Instagram Story "Classic" look, white
  bold system font on a solid black box (no transparency), rounded
  corners, one line, same on every screen. Size 50px on a 1080-wide frame
  (h0ney found 42px too small and asked for +20%). When h0ney asks for "X%
  bigger", scale the whole element (text, padding, corners) by X% and
  keep it on one line.
- Assets: our own or free-licensed. Note the source and license; credits
  go in the caption (e.g. CC BY).
- Sound: base is silence. Level every sound by loudness (LUFS of the part
  used), not by peak. Whole mix to -14 LUFS with a limiter at -1 dB. No
  single sound more than about +5 dB above the mix. Music stops right
  before a sound effect. Stings close together merge into one play.
- Back up before changing how something works, so "make it back" is one
  step.
- Never edit files while a render runs; stop it first. Run renders as
  tracked background jobs.
- A render can stop halfway and still exit cleanly. Before saying done,
  check the log shows the file was written and the check passed, and the
  video file is newer than the render's start. Stopped? Run the same
  command again; it continues from the frames already made.

## 5. Review
- Live preview in Safari first. h0ney collects all notes for the round;
  one round of fixes = one render.
- Stills of every element type the change touches, plus zoom crops.
- When opening a video for h0ney, name the version (e.g. "title 50px")
  and the file's time, so you both know you are looking at the same file.
- Done = automatic check passes, video and audio the same length, -14
  LUFS, opened in Safari, and any new rule written down (project
  `CLAUDE.md`, or here if it holds for every video).
- h0ney approves a cut: copy it to `epNN-approved-<date>.mp4` and add a
  line to the script's change log. Never overwrite an approved file; that
  is the file that gets uploaded.

## 6. Publish
- h0ney uploads on his own accounts. Never post, publish, upload, create
  accounts or short links without his yes for that exact action.
- Same clean file (no watermark) to every platform; caption adapted per
  platform.
- Caption patterns that work: relate ("kantor kamu juga gini?"), tag a
  friend, a nod to longtime viewers. Hashtags: research per platform.
- Posting time: start with a guess, rotate slots in week 1, then follow
  the data.

## 7. Learn (every week)
- Every Sunday per platform: views, average % watched, retention at 3 s,
  watch time, new followers, shares. Decide one or two changes for next
  week (length, topics, variations, time, hashtags).
- Script at most one week ahead so the changes can land.
- Targets for retention and watch time: not set yet.

## Format: fake chat (WhatsApp-style comedy, portrait)
- UI from h0ney's own phone screenshot. Status bar details can be jokes
  (battery red 5% so viewers comment "charge your phone").
- One sentence split into 2-4 bubbles, about 8 words each, 1.5-2.5 s per
  bubble.
- Sound map: the same ping for every message (quieter than music); short
  3-5 s stings on a new beat about every 7-10 s; system events get their
  own sound; a boom on a reveal (max 3 per video); a time card gets its own
  music, hard in and hard out. Pings may play over music, never over a
  sound effect.
- Real media makes the chat feel real: link previews with real-looking
  cards, cropped screenshots sent as photos, posters, stickers, GIFs,
  meeting invites, job titles next to names, side groups (the group
  without the boss).

## Format: landscape long-form
- Use `danny-tom-scott-style` for h0ney's YouTube channel.
- Add what we learn here.
