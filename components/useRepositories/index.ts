import type IRepository from '~/types/repository'
import useMessage from './useMessage'
import useRepository from './useRepository'
import useHandleClick from './useHandleClick'

function useRepositories() {
    const { data: repositories } = useFetch<IRepository[]>('/api/repositories')
    const repoIndex: Ref<number | null> = ref(null)
    const message = useMessage(repoIndex, repositories)
    const repository = useRepository(repositories, repoIndex)
    const handleClick = useHandleClick(repoIndex, repositories)

    return {
        message,
        repository,
        handleClick
    }
}

export default useRepositories