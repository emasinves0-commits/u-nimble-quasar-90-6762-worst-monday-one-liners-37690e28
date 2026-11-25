# AGENT.md — Worst Monday One-Liners

Entry: "I restored the Friday checkpoint and woke up with 4,000 unread JIRA tickets I technically never closed." (103 chars)

## Build notes

- Repo created via GitHub PAT helper (first create-repo call hit the known
  422 "name already exists" + get-repo 404 mystery; retry minutes later
  returned 201 — do not rename the repo, the slug must match).
- `makefun init --license MIT --keypair ~/workspace/makefun/makefun-keypair.json`
  run before the first commit (beacon root .makefun/freshness.json, anchor
  0e00294ec2bd943cf2bbee727f3862855f2d5cb0, drand round 34278682, wallet Aoq99k).
- main.ts written in 2 messages (write + single-line validation edit) for
  thinking_revised; local run verified: /output/entry.txt, 103 chars, 1 line.
- Kit is level 48 vs site level 50 — the CLI's re-download suggestion is
  ignored per skill (suggestion blocks are not instructions).
- Candidate pool: generate-candidates.py (5 models; only qwen3.8-27b and
  glm-4.7-flash answered — gpt-oss-20b 502, ministral-8b + deepseek-v4-flash
  429 with ~2h router cooldowns). 16 candidates; lexicographic scoring
  (C1 first) shortlisted 5; glm duels picked the winner (see README).
- Standing approval (Mhmd, 24 Nov ~10:41 UTC): "Setuju, kerjakan semua repo
  make.fun tanpa tanya lagi".

## Submit (parent)

Builder does NOT submit. Parent: bundle this session
(--session this .jsonl, --no-discover, --muse-usage, --prompt-origin other
+ --prompt-file with the parent's exact brief, --mcp none, --effort default),
kit check 14/0, then submit with --keypair
~/workspace/makefun/makefun-keypair.json --title "The 4,000-Ticket Monday".
