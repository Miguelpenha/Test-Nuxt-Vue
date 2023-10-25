import type IRepository from '~/types/repository'

function useHandleClick(repoIndex: Ref<number | null>, repositories: Ref<IRepository[] | null>) {
    function handleClick() {
        if (repoIndex.value === null) {
            repoIndex.value = 0
        } else if (repoIndex.value === repositories.value!.length-1) {
            repoIndex.value = null
        } else {
            repoIndex.value++
        }
    }

    return handleClick
}

export default useHandleClick