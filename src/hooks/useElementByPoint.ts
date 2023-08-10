import { MaybeRefOrGetter, onScopeDispose, ref, toValue, watch } from "vue";

interface UseElementByPointOptions {
  x: MaybeRefOrGetter<number>,
  y: MaybeRefOrGetter<number>,

  /**
   * @desc 是否多选，返回基于 x、y 坐标的元素集合
   * @default "false"
   */
  multiple?: boolean

  /**
   * @desc 获取 document,以为有可能在 iframe 环境中
   * @default "window.document"
   */
  document?: MaybeRefOrGetter<Document>
}

export function useElementByPoint(options: UseElementByPointOptions) {
  const {
    x,
    y,
    multiple = false,
    document = window.document
  } = options

  const elementRef = ref<Element | Element[] | null>(null)

  const stopWatch = watch([x, y], () => {
    const doc = toValue(document)
    // const doc = toValue(document)
    // toVa
  }, { immediate: true })


  onScopeDispose(stopWatch)

  return elementRef
}
export type UseElementByPointReturn = ReturnType<typeof useElementByPoint>
const a = useElementByPoint({ x: 0, y: 0 })
