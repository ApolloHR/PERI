export function login(data) {
  return {
    type: 'USER_LOGIN', payload: data
  };
}