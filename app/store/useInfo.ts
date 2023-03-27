interface Info {
    name: string
}

export const useInfo = () => useState<Info>('info', () => {
    return {
        name: 'Hello world',
    }
})