export const useToggle = () => {
  const isOpen = ref(false)

  const setToggle = () => {
    isOpen.value = !isOpen.value
  }
  return { isOpen, setToggle }
}
