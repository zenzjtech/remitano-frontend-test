export function formError(error, message) {
  return error === '' ? message
    : typeof error === 'object' ? error.message : error;
}
