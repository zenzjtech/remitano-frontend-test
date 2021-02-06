export function formError(error, message) {
  return error === '' ? message
    : typeof error === 'object' ? error.message : error;
}

export function shorten(s) {
  if (s.length > 97) return `${s.slice(0, 97)}...`
  return s;
}
