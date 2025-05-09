import { defineStore } from 'pinia'
import { ref } from 'vue'
import { RegisterEntityUseCase } from '@/domain/use_cases/registerAuthCase'

export const useAuthStore = defineStore('auth', () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const user = ref<{ uid: string; email: string } | null>(null)

  const registerEntity = async (entityType: 'user' | 'company', data: { email: string; password: string; [key: string]: any }) => {
    loading.value = true
    error.value = null

    try {
      const useCase = new RegisterEntityUseCase()
      const result = await useCase.execute(entityType, data)
      user.value = result
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Unexpected error occurred.'
    } finally {
      loading.value = false
    }
  }

  return { loading, error, user, registerEntity }
})
