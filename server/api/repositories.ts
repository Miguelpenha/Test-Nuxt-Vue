import apiGithub from '~/services/apiGithub'
import type IRepository from '~/types/repository'

export default defineEventHandler(async () => {
    const config = useRuntimeConfig()
    const { data } = await apiGithub.get<IRepository[]>(`/users/${config.githubUsername}/repos`)

    return data
})