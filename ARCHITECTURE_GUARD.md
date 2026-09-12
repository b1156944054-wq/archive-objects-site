# Architecture Guard

Mandatory pre-change entrypoint for GPT / Claude / Codex.

Read existing project truth first: `state.json -> Contracts/architecture rules -> ADR -> latest Ledger -> README -> code/tests`. Project-specific Contracts override this file.

`ARCH-GUARD:LOCAL_TASK_NEVER_OVERRIDES_ARCHITECTURE`

Do not complete a local task by silently bypassing modules/governance, duplicating responsibility/truth, creating parallel execution paths, changing interface semantics/state ownership/schema/startup/safety boundaries, weakening accepted invariants, or adding production-only test hacks.

`ARCH-GUARD:ARCHITECTURE_CHANGE_REQUIRES_EXPLICIT_AUTHORIZATION`

If architecture must change, document conflict, impact, preserve-vs-change options and rollback path; core changes require explicit owner authorization.

Distinguish documented, machine-enforced, behavior-verified and local-verified invariants. CI proves only its actual checks.

Global reference: `b1156944054-wq/gpt-engineering-workflow/ARCHITECTURE_FITNESS_FUNCTION.md`
