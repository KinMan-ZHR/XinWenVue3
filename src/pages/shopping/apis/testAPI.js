import httpInstance from "@/pages/shopping/apis/utils/http"


export function getCategory () {
  return httpInstance({
    url: 'home/category/head'
  })
}