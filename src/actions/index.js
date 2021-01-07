export const incremet = (payload) => {
  return {
    type: 'INCREMENT',
    payload,
  }
}

export const decremet = (payload) => {
  return {
    type: 'DECREMENT',
    payload
  }
}

export const login = () => {
  return {
    type: 'LOG_IN'
  }
}

export const logout = () => {
  return {
    type: 'LOG_OUT',
  }
}