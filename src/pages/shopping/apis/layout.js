
import httpInstance from "@/pages/shopping/apis/utils/http"

export function getCategoryAPI () {
  return httpInstance({
    url: '/home/category/head'
  })
}