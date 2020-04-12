export const types = {
  START_CLOCK: 'START_CLOCK',
  TICK_CLOCK: 'TICK_CLOCK',
}

export function startClock() {
  return { type: types.START_CLOCK }
}

export function tickClock(isServer) {
  return {
    type: types.TICK_CLOCK,
    light: !isServer,
    ts: Date.now(),
  }
}
