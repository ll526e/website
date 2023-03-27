import { useTheme } from "./useTheme"

const mapColors = ['red', 'pink', 'green', 'yellow', 'orange']
export const useOther = () => {
    const theme = useTheme()
    const useIdx = Math.floor(Math.random() * mapColors.length)
    theme.value.color = mapColors[useIdx]
}