export const TOGGLE_OPEN = 'TOGGLE_OPEN';
export const toggleOpen = isOpen => {
  console.log('you clicked on toggle')
  return {
    type: TOGGLE_OPEN,
    isOpen
  }
}
