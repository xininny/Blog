import { useQuery, useQueryClient } from "@tanstack/react-query"
import { getCookie, setCookie } from "cookies-next"
import { useEffect, useCallback } from "react"
import { queryKey } from "src/constants/queryKey"

type Scheme = "light" | "dark"

const useScheme = (): [Scheme, (scheme: Scheme) => void] => {
  const queryClient = useQueryClient()

  // 쿠키값을 클라이언트에서 읽어 initialData를 유지
  const { data } = useQuery<string>({
    queryKey: queryKey.scheme(),
    // 굳이 요청 안 하므로 queryFn 없이 사용
    initialData: "light",
    staleTime: Infinity,
  })

  const scheme: Scheme = data === "dark" ? "dark" : "light"

  const setScheme = useCallback(
    (next: Scheme) => {
      setCookie("scheme", next)
      queryClient.setQueryData(queryKey.scheme(), next)
      // (선택) HTML에 다크 모드 클래스 반영
      if (typeof document !== "undefined") {
        document.documentElement.classList.toggle("dark", next === "dark")
      }
    },
    [queryClient]
  )

  useEffect(() => {
    if (typeof window === "undefined") return
    const c = getCookie("scheme")
    if (c === "dark" || c === "light") {
      setScheme(c as Scheme)
    } else {
      setScheme("light")
    }
  }, [setScheme])

  return [scheme, setScheme]
}

export default useScheme
