# Voice Pass — Articles Section (2026-07-09)

Changes are in the working tree, **uncommitted**, for your review. `git diff` shows every edit; `npm run dev` renders them. Nothing was committed or pushed. Revert any page with `git checkout -- <file>`.

## Untouched — already passes the voice check

- **ezekiel38.mdx / ezekiel39.mdx** — reference-quality; no edits at all.
- **james-assignment1.mdx / james-assignment2.mdx** — left as CDI assignment records. They're sermon skeletons with a distinct assignment format (Big Idea / Road Map / numbered movements), and reshaping them into articles would erase what they are. If you ever want "The Evidence of Life" expanded into a full manuscript in your voice, that's a separate interactive session.

## Edited

### ezekiel37.mdx (1 fix)

"Where We Stand in the Text" said *"That is the voice of a people..."* but the voice it referred to had been cut — a dangling reference, plus "the story was over" appeared twice in a row. Fixed by quoting v.11 ("Our bones are dried up...") where the reference expects it. No other changes; the page is reference quality.

### brood-vipers.mdx (4 fixes)

1. Title punctuation: "Brood of Vipers: The Hypocrisy of Prevenient Grace".
2. Tag typo: Irresistable → Irresistible.
3. "This post" → "This article" (blog register).
4. "Conclusion: Examine Your Heart" was trapped inside the bullet list as a list item — now a real `##` heading; also "Psalms 51" → "Psalm 51".

**Flagged, not changed:** the title says "Brood of Vipers" but the quoted verse is Matthew 23:15, which doesn't contain the phrase — Matthew 23:33 does ("You serpents, you brood of vipers, how will you escape the sentence of hell?"). Consider adding 23:33 or adjusting the title reference. Left for your call since adding a quote requires your approval + verification.

**Also flagged:** the prophetic heat is your call and I preserved all of it, but "spiritual abortionists" is the strongest phrase on the site. If a pastor-reader is the audience, it lands; if a wavering Arminian is the audience, it may close the door before the argument opens. Your piece, your temperature.

### brood-vipers.mdx — FULL REBUILD (Dave requested, 2026-07-14; supersedes the notes below)

Dave flagged redundancy and flow problems. Rebuilt on the structure the strongest published critiques use (cf. Schreiner, "Does Scripture Teach Prevenient Grace in the Wesleyan Sense?"): spiritual-abortion hook stated once up front → Galatians frame → definitions from primary sources → common-ground concession (Wesleyans confess depravity too; Article X) → "Dead Means Dead" (adds 1 Cor 2:14) → NEW "Their Strongest Texts, Examined" answering the three main Arminian proof texts (John 12:32 via John 6:44; Titus 2:11 via context; Rom 2:4 via 2 Tim 2:25) → "Brood of Vipers" section now earns the title (adds Matt 23:33; zeal-vs-gospel argument; my-body/my-will parallel appears exactly once, here) → true gospel (adds John 6:63-65 and John 1:12-13 "not of the will of man") → examine-your-heart close landing on Ezekiel's dry bones. All new quotes verified NASB1995 via Bible Gateway. The three duplicate abortion passages and the three thin ### subsections are gone.

### brood-vipers.mdx — earlier addition (2026-07-14, now folded into the rebuild)

New "## Defining the Terms" section after the intro, defining both doctrines from primary sources: prevenient grace via Articles of Religion, Article X "Of Free-Will" (1571 text, verified against Anglicans Online — the source of the term "preventing us"), plus a descriptive reference to Wesley's sermon "On Working Out Our Own Salvation" (referenced, not quoted — unverified verbatim); irresistible grace via Canons of Dort, First Head, Article 6 (verified against CCEL), plus a paraphrase-with-citation of Third/Fourth Heads Articles 11–12 (primary text was unfetchable; paraphrased, not quoted). Landing: "prevenient grace makes salvation possible; effectual grace saves."

### gospel-message.mdx (formatting only)

- "Jesus question example" → "The Question Jesus Asked".
- Fixed the Matthew 16 quote: stray asterisk mid-sentence ("He *said"), missing "And" before "they said".
- Headings standardized: "1. Who Is Jesus?" / "2. Why Do We Need Him?" / "3. What Did Jesus Do?" / "4. How Do We Respond?" (2 was missing its question mark; 3 had one that didn't belong grammatically).
- Removed doubled quote mark in the 1 Cor 15:3-4 block; colon after "So to summarize what the Bible teaches".
- Kept the fill-in-the-blank ("Jesus is not just a _____") — it reads as a deliberate script device. Confirm that's intentional.

### Five landing pages (ezekiel, james, ephesians, topical, scripture-index)

All five had empty bodies and identical copy-paste tags (`[wisdom, humility, peace, righteousness]` — even on the Ezekiel series). Each now has: a series-appropriate description, matching tags, and a one-line intro in the body (same pattern as the devotion landing you approved). Examples:

- Ezekiel: "A study through Ezekiel — the glory that departed, the promises that stand, and the Lord who will dwell among His people forever."
- Ephesians: "A series through Ephesians — the riches of God's grace, and the walk worthy of the calling."

The tag changes are the one edit that could affect anything beyond display — if any component filters by those tags, check the rendering in dev.

## Diff summary

8 files changed, 36 insertions(+), 25 deletions(-). All content/frontmatter only — no layout, config, or component changes.
