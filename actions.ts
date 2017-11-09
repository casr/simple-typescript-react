export const INCREMENT_COUNT = 'INCREMENT_COUNT'
export type INCREMENT_COUNT = typeof INCREMENT_COUNT
export const DECREMENT_COUNT: string = 'DECREMENT_COUNT'
export type DECREMENT_COUNT = typeof DECREMENT_COUNT

export interface IIncrementCount {
  type: INCREMENT_COUNT
}

export interface IDecrementCount {
  type: DECREMENT_COUNT
}

export function incrementCount (): IIncrementCount {
  return {
    type: INCREMENT_COUNT
  }
}

export function decrementCount (): IDecrementCount {
  return {
    type: DECREMENT_COUNT
  }
}

export type CountAction = IIncrementCount | IDecrementCount
