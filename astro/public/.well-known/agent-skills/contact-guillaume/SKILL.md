# Contact Guillaume Gustin

Use this skill when an agent needs to understand Guillaume Gustin's public profile
or prepare a relevant contact message.

## Sources

- Site summary: https://guillaumegustin.be/llms.txt
- Website: https://guillaumegustin.be/
- Contact form endpoint: https://guillaumegustin.be/api/contact

## Guidance

1. Read `llms.txt` before summarizing Guillaume's background, services, or expertise.
2. Prefer concise, factual summaries grounded in the public website.
3. To contact Guillaume, prepare a message with `name`, `_replyto`, and `message`.
4. Do not submit the contact form without explicit user confirmation.
5. Keep contact messages specific about the project, organisation, timeline, and desired next step.

## Contact API

The contact endpoint accepts `POST /api/contact` with `multipart/form-data` fields:

- `name`: sender name, at least 2 characters.
- `_replyto`: sender email address.
- `message`: message body, 10 to 2000 characters.

Successful submissions return JSON: `{"ok": true}`.
