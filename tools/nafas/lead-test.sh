#!/bin/bash
# Nafas ad page lead test: sends ONE real test lead through an ad page's form, in its own Safari window
# (never h0ney's tabs), and prints the reference the page shows (NQA-... / NID-...).
# The lead goes through the site's bot check to Make, so it adds a sheet row AND emails the whole team:
# only run it when h0ney asked for a test, and list the reference afterwards so the row can be deleted.
# Usage: tools/nafas/lead-test.sh <ad page url> [en|ar|id]
#   tools/nafas/lead-test.sh https://nafas.dev/ads/20261013ads/version-3-id id
# Then check it arrived: Make scenario 6613840 run list (status SUCCESS, 3 operations = webhook, sheet, email),
# and the email in Outlook ("New QA ads lead [...]" / "New ID ads lead [...]") or the sheet row.
# Needs Safari → Settings → Developer → "Allow JavaScript from Apple Events".
[ $# -ge 1 ] || { echo "usage: $0 <ad page url> [lang]" >&2; exit 1; }
URL="$1?lang=${2:-en}&utm_source=claude_test&utm_medium=test&utm_campaign=lead_test"
osascript - "$URL" <<'OSA'
on run argv
  tell application "Safari"
    make new document with properties {URL:(item 1 of argv)}
    set w to front window
    set t to current tab of w
    delay 6
    -- window.open is stubbed so WhatsApp doesn't open; the bot check starts on first use of the form
    do JavaScript "window.open=function(){return {}};var f=document.getElementById('leadForm');f.dispatchEvent(new PointerEvent('pointerdown',{bubbles:true}));f.querySelector('input[name=home][value=Studio]').click();f.name.value='TEST Claude - please delete';f.phone.value='0000000000';1" in t
    delay 10
    do JavaScript "document.getElementById('leadForm').requestSubmit();1" in t
    delay 6
    set r to do JavaScript "(document.getElementById('leadRef')||{}).textContent||'NO REFERENCE: form did not submit'" in t
    close w
    return r
  end tell
end run
OSA
