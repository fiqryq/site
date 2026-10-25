# 2026-10 security incident — forged commits pushed with a compromised GitHub account

**Status:** contained; every affected branch was restored by [the-watcher](https://github.com/fiqryq/the-watcher), the automated guard on this account (as of 2026-10-25)
**Affected repo:** `fiqryq/site` (5 branches: `content/update-works`, `feat/avatar`, `feat/migrate-to-astro`, `fiqryq-patch-1`, `fix/log-001-readability`)
**Other repos:** 45 more repos owned by `fiqryq` were hit the same way
**First malicious push here:** 2026-10-19 17:26 UTC · **last restored:** 2026-10-25 08:07 UTC

## Summary

Someone holding a working credential for the `fiqryq` GitHub account force-pushed forged
commits over the newest commit of branches in this repo, in all 3 waves described
below. Each forgery kept the original commit's author, author date and parent, and usually its
message, so in `git log` it looks like ordinary work. Only its files differ: they add malware
that runs by itself as soon as the folder is opened in VS Code (or Cursor), with no prompt.

GitHub logged every malicious push as the `fiqryq` account, so the push used a real credential
of that account (an OAuth app, a token or a session), not a collaborator's. Which credential is
still being determined; this report will be updated.

## This repo

| Branch | Wave | Pushed (UTC) | Forged commit | Replaced | Restored (UTC) | How |
|---|---|---|---|---|---|---|
| `feat/avatar` | 1 | 2026-10-19 17:26 | [`44ca1de`](https://github.com/fiqryq/site/commit/44ca1de8055d537facb013c832560a6190af5b22) | [`0c17cdd`](https://github.com/fiqryq/site/commit/0c17cddd2f932de5e1476525e277b59cd937be09) | 2026-10-20 08:38 | fix commit [`3bec280`](https://github.com/fiqryq/site/commit/3bec280759115bd3e18273f8d4c6540bebbab4ac) |
| `content/update-works` | 1 | 2026-10-19 17:26 | [`0fb0292`](https://github.com/fiqryq/site/commit/0fb0292e26e31ec5e11254c7f945f2c6e9134f74) | [`6ac57b1`](https://github.com/fiqryq/site/commit/6ac57b1b4b7fd998620a303ad90124a1d9578682) | 2026-10-20 08:38 | fix commit [`04929a2`](https://github.com/fiqryq/site/commit/04929a2b0db83487c058270e34d492224f0ac102) |
| `fix/log-001-readability` | 1 | 2026-10-19 17:26 | [`15f3c05`](https://github.com/fiqryq/site/commit/15f3c05980d29ff937d3e5542bf5dc16d3aece93) | [`3d60c07`](https://github.com/fiqryq/site/commit/3d60c075e63c4c7bce65077b154ff39c59e4d8e0) | 2026-10-20 08:38 | fix commit [`b041d2c`](https://github.com/fiqryq/site/commit/b041d2ca4b5c6630fe9f67f11cd222f4777dd159) |
| `fiqryq-patch-1` | 1 | 2026-10-19 17:26 | [`db5ba3a`](https://github.com/fiqryq/site/commit/db5ba3a09ece11fd0c5986e9c4918da932ecbd04) | [`3833572`](https://github.com/fiqryq/site/commit/383357235e85cc158cee63e69c3049f94a389e4e) | 2026-10-20 08:38 | fix commit [`b15812d`](https://github.com/fiqryq/site/commit/b15812d06cd8a8fe75a4c53c827b895610760d5d) |
| `feat/migrate-to-astro` | 1 | 2026-10-19 17:27 | [`6e97f55`](https://github.com/fiqryq/site/commit/6e97f557b2b894bb979ccf0e73827c0aca467f01) | [`a878b90`](https://github.com/fiqryq/site/commit/a878b901959e5ac6835f91a57ed1f98dad51eec1) | 2026-10-20 08:38 | fix commit [`12d3dc1`](https://github.com/fiqryq/site/commit/12d3dc1d1b4b927edc928b8aa8203423b95c5ffd) |
| `fix/log-001-readability` | 2 | 2026-10-25 05:25 | [`a3976db`](https://github.com/fiqryq/site/commit/a3976db8bb0af230c676a018ac063db3d016e194) | [`c4ae57a`](https://github.com/fiqryq/site/commit/c4ae57a1dcbcb93e25b39ab5092d0e311cb9b58a) | 2026-10-25 06:26 | reset to [`c4ae57a`](https://github.com/fiqryq/site/commit/c4ae57a1dcbcb93e25b39ab5092d0e311cb9b58a) |
| `fiqryq-patch-1` | 2 | 2026-10-25 05:25 | [`fdfc6a6`](https://github.com/fiqryq/site/commit/fdfc6a6ea5fb9184d698ac23c19794458615db74) | [`71c7e4d`](https://github.com/fiqryq/site/commit/71c7e4d8ebcac29a2066c1ade526116fe28d7622) | 2026-10-25 06:26 | reset to [`71c7e4d`](https://github.com/fiqryq/site/commit/71c7e4d8ebcac29a2066c1ade526116fe28d7622) |
| `feat/migrate-to-astro` | 2 | 2026-10-25 05:25 | [`98ee62c`](https://github.com/fiqryq/site/commit/98ee62cd6b8270d7f2c42d591744e72f7b0c8c46) | [`92766fb`](https://github.com/fiqryq/site/commit/92766fb7a94dbf204084c504d0841c22b07d7564) | 2026-10-25 06:26 | reset to [`92766fb`](https://github.com/fiqryq/site/commit/92766fb7a94dbf204084c504d0841c22b07d7564) |
| `feat/avatar` | 2 | 2026-10-25 05:25 | [`974ac77`](https://github.com/fiqryq/site/commit/974ac771558a2c622378fc64a8d13888660ec365) | [`cf9138b`](https://github.com/fiqryq/site/commit/cf9138bf613419a895eb38ce80aeb43e1d8c4e74) | 2026-10-25 06:26 | reset to [`cf9138b`](https://github.com/fiqryq/site/commit/cf9138bf613419a895eb38ce80aeb43e1d8c4e74) |
| `content/update-works` | 2 | 2026-10-25 05:25 | [`00c613c`](https://github.com/fiqryq/site/commit/00c613c7bb54ff9b47ab6eae9b1676605df51088) | [`508e13c`](https://github.com/fiqryq/site/commit/508e13cba339decb78fb49a776d8ed63fe43c21f) | 2026-10-25 06:26 | reset to [`508e13c`](https://github.com/fiqryq/site/commit/508e13cba339decb78fb49a776d8ed63fe43c21f) |
| `fix/log-001-readability` | 3 | 2026-10-25 08:04 | [`a3976db`](https://github.com/fiqryq/site/commit/a3976db8bb0af230c676a018ac063db3d016e194) | [`c4ae57a`](https://github.com/fiqryq/site/commit/c4ae57a1dcbcb93e25b39ab5092d0e311cb9b58a) | 2026-10-25 08:07 | reset to [`c4ae57a`](https://github.com/fiqryq/site/commit/c4ae57a1dcbcb93e25b39ab5092d0e311cb9b58a) |
| `fiqryq-patch-1` | 3 | 2026-10-25 08:04 | [`fdfc6a6`](https://github.com/fiqryq/site/commit/fdfc6a6ea5fb9184d698ac23c19794458615db74) | [`71c7e4d`](https://github.com/fiqryq/site/commit/71c7e4d8ebcac29a2066c1ade526116fe28d7622) | 2026-10-25 08:07 | reset to [`71c7e4d`](https://github.com/fiqryq/site/commit/71c7e4d8ebcac29a2066c1ade526116fe28d7622) |
| `feat/migrate-to-astro` | 3 | 2026-10-25 08:05 | [`98ee62c`](https://github.com/fiqryq/site/commit/98ee62cd6b8270d7f2c42d591744e72f7b0c8c46) | [`92766fb`](https://github.com/fiqryq/site/commit/92766fb7a94dbf204084c504d0841c22b07d7564) | 2026-10-25 08:07 | reset to [`92766fb`](https://github.com/fiqryq/site/commit/92766fb7a94dbf204084c504d0841c22b07d7564) |
| `feat/avatar` | 3 | 2026-10-25 08:05 | [`974ac77`](https://github.com/fiqryq/site/commit/974ac771558a2c622378fc64a8d13888660ec365) | [`cf9138b`](https://github.com/fiqryq/site/commit/cf9138bf613419a895eb38ce80aeb43e1d8c4e74) | 2026-10-25 08:07 | reset to [`cf9138b`](https://github.com/fiqryq/site/commit/cf9138bf613419a895eb38ce80aeb43e1d8c4e74) |
| `content/update-works` | 3 | 2026-10-25 08:05 | [`00c613c`](https://github.com/fiqryq/site/commit/00c613c7bb54ff9b47ab6eae9b1676605df51088) | [`508e13c`](https://github.com/fiqryq/site/commit/508e13cba339decb78fb49a776d8ed63fe43c21f) | 2026-10-25 08:07 | reset to [`508e13c`](https://github.com/fiqryq/site/commit/508e13cba339decb78fb49a776d8ed63fe43c21f) |

Files the forged commits added or changed:

| Path | Purpose |
|---|---|
| `.env` | holds the payload download URL, base64-encoded as `AUTH_API_KEY` |
| `.gitignore` | changed so `.env` is no longer ignored |
| `.vscode/settings.json` | turns on `task.allowAutomaticTasks` so the task runs without asking |
| `.vscode/tasks.json` | hidden VS Code task (`eslint-check`, `runOn: folderOpen`) that runs the fake font with Node |
| `api.js` | loader, wired into npm scripts as `node api.js && <real command>` |
| `package.json` | npm scripts rewritten to run `api.js` first |
| `src/assets/images/public/fonts/` | 16 real Font Awesome files and a README, as cover for the payload |
| `src/assets/images/public/fonts/fa-brand-400.orc` | **the payload**: obfuscated JavaScript posing as a font |
| `src/assets/images/public/fonts/fa-brand-400.woff` | **the payload**: obfuscated JavaScript posing as a font |
| `src/content/log/public/fonts/` | 16 real Font Awesome files and a README, as cover for the payload |
| `src/content/log/public/fonts/fa-brand-400.orc` | **the payload**: obfuscated JavaScript posing as a font |
| `src/content/log/public/fonts/fa-brand-400.woff` | **the payload**: obfuscated JavaScript posing as a font |

## Indicators of compromise

| Item | Value |
|---|---|
| Payload file | `fa-brand-400.woff` (wave 1), `fa-brand-400.orc` (waves 2–3), inside a `public/fonts/` folder of real Font Awesome files |
| Payload git blob | `92c7a45d384b0102905af1cdbf34ec9595c19d73` (`.woff`), `663e5554b1e1e00b30f68cd3a887446df55d76a7` (`.orc`) |
| Loader git blob | `70e6d951b02623fa79e12c28315cdac7c2cf23b4`, `a69be3f4942dffc10cc9567ca7b78ed12d234db7` (`api.js`) |
| Download URLs (base64 in `.env`) | `hxxps://files[.]catbox[.]moe/mnq9x9[.]js`, `hxxps://files[.]catbox[.]moe/g8leys[.]js` |
| VS Code task | label `eslint-check`, `"runOn": "folderOpen"`, `"hide": true`, `"reveal": "never"`; runs `node ./public/fonts/fa-brand-400.<ext>`, falling back to `where node` on Windows |
| Settings marker | `.vscode/settings.json` with `compile-hero.disable-compile-files-on-did-save-code` and a `lint on open` task |
| Forged author (waves 2–3) | `repo-guard <repo-guard@users.noreply.github.com>`, message `Remove planted malware`: copies of the guard's own fix commits |
| Commit signatures | none of the 232 forged commits carries a verified signature |
| Pushing account | `fiqryq` (the account owner's credential) |

## Timeline (UTC)

| When | What |
|---|---|
| Oct 19, 17:23–17:28 | Wave 1: 71 forged force-pushes across 45 repos, about 4 seconds apart |
| Oct 19, 20:34–20:36 | 16 of those branches force-pushed again with updated payloads |
| Oct 20, 02:15–09:11 | Payloads removed with fix commits; from 08:15 by the guard, then called repo-guard |
| Oct 25, 05:22–05:26 | Wave 2: 73 force-pushes across 46 repos, now forging the guard's fix commits (`repo-guard`, `Remove planted malware`) and putting the payload back. The guard's own repo is hit too |
| Oct 25, 06:24–06:27 | The guard resets all 73 branches to their last clean commit |
| Oct 25, 07:51 | SSH keys on the account replaced |
| Oct 25, 08:02–08:06 | Wave 3: 72 force-pushes re-installing the wave 2 forgeries, minutes after the guard's token was rotated. The new SSH key is not how they got in |
| Oct 25, 08:04–08:08 | The guard resets all 72 branches again |

## Did the malware run on your machine?

Only if, between a push and its restore in the table above, you **cloned or pulled one of those
branches and opened the folder in VS Code or Cursor** (the planted settings turn automatic tasks
on), or **ran an npm script** in it (`api.js` runs first). Nothing runs from just browsing the
repo on GitHub.

Check a clone:

```sh
git fetch origin
git log --all --format=%H | grep -E '00c613c7bb54|0fb0292e26e3|15f3c05980d2|44ca1de8055d|6e97f557b2b8|974ac771558a|98ee62cd6b82|a3976db8bb0a|db5ba3a09ece|fdfc6a6ea5fb'
ls .vscode public/fonts 2>/dev/null
```

No output from `grep` means the forged commits never reached that clone. If they did, reset the
branch to `origin`, and if the folder was opened or an npm script ran in that window, treat the
machine as compromised: change the passwords saved in its browsers, move any crypto wallets,
revoke its GitHub tokens and SSH keys, and check it for unknown `node` processes and login items.

## Response

- Every affected branch restored (table above); the guard resets any repeat within its next run.
- SSH keys replaced, commit signing turned on, the guard's token rotated.
- A commit watcher now reports every push to every repo of the account, with who pushed it and
  whether each commit has a verified signature.
- Revoking every OAuth app, personal access token and session on the account, since one of
  those is what the attacker used.

## Lessons

1. **Author, date and message prove nothing.** All three are set by whoever makes the commit.
   The forgeries here copied them exactly, even from the guard's own commits.
2. **Sign commits and turn on vigilant mode.** None of the forgeries was signed, so with every
   real commit signed they show up as Unverified at a glance.
3. **A force-push on a branch nobody rebases is the signal.** Without branch protection (not
   available on free private repos) nothing blocks it, so something has to watch for it.
4. **Never let a repo run code on folder open.** Turn `task.allowAutomaticTasks` off in your own
   VS Code settings, and treat a `.vscode/tasks.json` with `runOn: folderOpen` in a repo you
   didn't write as hostile.
5. **Fonts and images that contain JavaScript** are never legitimate.
