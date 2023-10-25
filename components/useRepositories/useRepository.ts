import type IRepository from '~/types/repository'

function useRepository(repositories: Ref<IRepository[] | null>, repoIndex: Ref<number | null>) {
    const repository = computed(() => {
        if (repositories.value && repoIndex.value != null) {
            return repositories.value[repoIndex.value]
        } else {
            return undefined
        }
    })

    return repository
}

export default useRepository