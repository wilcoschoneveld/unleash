// When updating the component, we should add a few tests

// When auto-opening:
// - Never auto-open if the user has closed or completed the feedback within the last given period
// - Ensure that the `closedOrCompleted` property is set correctly on all message kinds that should set it
// - Ensure that `closedOrCompleted` is never set to false on any kind of message
// - Ensure that when given a number of user data records, the latest one is always used
// - If the latest data record is missing `closedOrCompleted`, treat it as `true` (better)
// - If there is no latest data record, allow pop up iff the current path matches one of the allowed paths

type AllowedPaths = { kind: 'all' } | { kind: 'list'; values: string[] };
