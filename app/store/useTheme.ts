interface Themes {
    font: string
    color: string
    position: string[]
}

export const useTheme = () => useState<Themes>('theme', () => {
    return {
        font: '12px',
        color: 'pink',
        position: []
    }
})