import type IRepository from '~/types/repository'

interface IMessage {
    text: string
    repo?: number
}

const message = ref<IMessage>({ text: 'Clique para pegar dados' })
const repos = ref<IRepository[]>()
const { data, refresh } = await useFetch<IRepository[]>('/api/repositories')

async function getData() {
    if (data.value) {
        repos.value = data.value

        message.value = { text: repos.value[0].name, repo: 0 }
    }
}

async function handleClick() {
    if (repos.value && message.value.repo != undefined) {
        if (repos.value.length-1 !== message.value.repo) {
            message.value = { text: repos.value[message.value.repo+1].name, repo: message.value.repo+1 }
        } else {
            message.value.text = 'Reiniciando dados...'

            await refresh()

            message.value = { text: repos.value[0].name, repo: 0 }
        }
    } else {
        message.value.text = 'Pegando dados...'

        await getData()
    }
}

export {
    message,
    handleClick
}