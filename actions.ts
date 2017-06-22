export const INCREMENT_COUNT = 'INCREMENT_COUNT'
export type INCREMENT_COUNT = typeof INCREMENT_COUNT
export const DECREMENT_COUNT: string = 'DECREMENT_COUNT'
export type DECREMENT_COUNT = typeof DECREMENT_COUNT

export interface IncrementCount {
  type: INCREMENT_COUNT
}

export interface DecrementCount {
  type: DECREMENT_COUNT
}

export function incrementCount (): IncrementCount {
  return {
    type: INCREMENT_COUNT
  }
}

export function decrementCount (): DecrementCount {
  return {
    type: DECREMENT_COUNT
  }
}

export type CountAction = IncrementCount | DecrementCount
