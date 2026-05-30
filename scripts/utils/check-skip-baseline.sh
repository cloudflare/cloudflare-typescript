#!/usr/bin/env bash
#
# Fail if the count of `(test|it|describe).skip` invocations under tests/
# grows beyond the recorded baseline. The baseline is intentionally
# stored as a tracked file so that ratcheting it down (preferred) or up
# (only with reviewer sign-off) shows up as a normal diff.

set -euo pipefail

cd "$(dirname "$0")/../.."

BASELINE_FILE="tests/.skip-baseline"

if [ ! -f "$BASELINE_FILE" ]; then
  echo "ERROR: baseline file '$BASELINE_FILE' not found" >&2
  exit 2
fi

BASELINE=$(cat "$BASELINE_FILE")

if ! [[ "$BASELINE" =~ ^[0-9]+$ ]]; then
  echo "ERROR: baseline file '$BASELINE_FILE' must contain a single integer (got: $BASELINE)" >&2
  exit 2
fi

ACTUAL=$(grep -rE --include='*.ts' '\b(test|it|describe)\.skip\b' tests/ | wc -l | tr -d ' ')

if [ "$ACTUAL" -gt "$BASELINE" ]; then
  echo "ERROR: skipped-test count regressed: $ACTUAL > baseline $BASELINE" >&2
  echo "" >&2
  echo "Either un-skip the new tests, or, if a new skip is genuinely required," >&2
  echo "raise the baseline in $BASELINE_FILE in the same PR with a justification." >&2
  echo "" >&2
  echo "To see what changed locally, run:" >&2
  echo "  git diff origin/main -- tests/ | grep -E '^\\+.*\\.skip\\b'" >&2
  exit 1
fi

if [ "$ACTUAL" -lt "$BASELINE" ]; then
  echo "skipped-test count is below baseline ($ACTUAL < $BASELINE)." >&2
  echo "Please ratchet $BASELINE_FILE down to $ACTUAL in this PR" >&2
  echo "so that the baseline stays accurate." >&2
  exit 1
fi

echo "skipped-test count matches baseline ($ACTUAL)."
