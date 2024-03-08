type DateType = 'edit' | 'create'

export const useDatePickerStore = () => {
  const createdDate = ref('')
  const updatedDate = ref('')

  const handleSaveDatePicker = (date: Date, type?: DateType) => {
    type = type || 'create'
    type === 'edit' ? handleUpdateDate(date) : handleCreateDate(date)
  }

  const handleCreateDate = (date: Date) => {
    createdDate.value = new Date(date).toISOString()
  }

  const handleUpdateDate = (date: Date) => {
    updatedDate.value = new Date(date).toISOString()
  }

  return {
    updatedDate,
    createdDate,
    handleCreateDate,
    handleUpdateDate,
    handleSaveDatePicker
  }
}

export const useDatePicker = useDatePickerStore()
