#!/bin/bash
# Run a JavaScript file in the Safari tab whose address starts with a given URL.
# Never the front tab: that is often another page, and the script would land there.
# Usage: tools/safari-tab.sh <url-start> <script.js>
#   tools/safari-tab.sh http://localhost:8103/stealth.html check.js
#   tools/safari-tab.sh https://analytics.google.com read-report.js
# Prints what the script returns (its last value), or "no tab" (exit 2).
# Needs Safari → Settings → Developer → "Allow JavaScript from Apple Events".
[ $# -eq 2 ] || { echo "usage: $0 <url-start> <script.js>" >&2; exit 1; }
[ -f "$2" ] || { echo "no such file: $2" >&2; exit 1; }
out=$(osascript - "$1" "$(cd "$(dirname "$2")" && pwd)/$(basename "$2")" <<'OSA'
on run argv
  set want to item 1 of argv
  set js to read (POSIX file (item 2 of argv)) as «class utf8»
  tell application "Safari"
    repeat with w in windows
      repeat with t in tabs of w
        if URL of t starts with want then return do JavaScript js in t
      end repeat
    end repeat
  end tell
  return "no tab"
end run
OSA
)
echo "$out"
[ "$out" = "no tab" ] && exit 2 || exit 0
