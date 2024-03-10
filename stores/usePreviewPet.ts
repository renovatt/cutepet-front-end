import { defineStore } from 'pinia'

type DateType = 'edit' | 'create'

export const usePreviewPetStore = defineStore('usePreviewPetStore', () => {
  const updatedDate = ref('')
  const createdDate = ref('')

  const handleSaveDatePicker = (date: Date, type: DateType = 'create') => {
    type = type || 'create'
    type === 'edit' ? (updatedDate.value = new Date(date).toISOString()) : (createdDate.value = new Date(date).toISOString())
  }

  const handleCreateDate = (date: Date) => {
    createdDate.value = new Date(date).toISOString()
  }

  const handleUpdateDate = (date: Date) => {
    updatedDate.value = new Date(date).toISOString()
  }

  watch(updatedDate, (newVal) => {
    console.log('updatedDate mudou:', newVal)
  })

  watch(createdDate, (newVal) => {
    console.log('createdDate mudou:', newVal)
  })

  return {
    updatedDate,
    createdDate,
    handleSaveDatePicker,
    handleCreateDate,
    handleUpdateDate
  }
})
