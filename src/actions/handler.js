export const TOGGLE_OPEN = 'TOGGLE_OPEN';
export const toggleOpen = isOpen => {
  console.log('you clicked on toggle')
  return {
    type: TOGGLE_OPEN,
    isOpen
  }
}

export const OPEN_ADD_SKILL_FORM = 'OPEN_ADD_SKILL_FORM';
export const openAddSkillForm = addSkill => {
  console.log('you clicked on addSkill')
  return {
    type: OPEN_ADD_SKILL_FORM,
    addSkill
  }
}
