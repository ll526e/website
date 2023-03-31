import type { InjectionKey } from 'vue'
interface SkeletonProvideType {
    loading: boolean
}
export const SkeletonProvide: InjectionKey<SkeletonProvideType> = Symbol('SkeletonRoot')
