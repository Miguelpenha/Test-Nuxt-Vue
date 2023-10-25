import type IRepository from '~/types/repository'

function useMessage(repoIndex: Ref<number | null>, repositories: Ref<IRepository[] | null>) {
    const message = computed(() => {
        if (repoIndex.value === null) {
            return 'Começar'
        } else if (repoIndex.value != repositories.value!.length-1) {
            return 'Proximo'
        } else {
            return 'Recomeçar'
        }
    })

    return message
}

export default useMessage