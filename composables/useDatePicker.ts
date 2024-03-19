export const useDatePickerStore = () => {
  const selectedDate = ref('')

  const handleSaveDate = (date: Date) => {
    selectedDate.value = new Date(date).toISOString().split('T')[0]
  }

  return {
    selectedDate,
    handleSaveDatePicker: handleSaveDate,
  }
}

export const useDatePicker = useDatePickerStore()
