export type NaverShopSort =
   | 'sim' // default 정확도순 내림차순
   | 'date' // 날짜순 내림차순
   | 'asc' // 가격순 내림차순
   | 'dsc' // 가격순 내림차순

export type NaverShopExclude = [
   { used: '중고' },
   { reantal: '렌탈' },
   { cbshop: '해외직구, 구매대행' }
]

export interface BaseShopResponse {
   lastBuildDate: string
   total: number
   start: number
   display: number
}

export interface NaverShopItems {
   title: string
   link: string
   image: string
   lprice: string
   hprice: string
   mallName: string
   productId: string
   productType: string
   brand: string
   maker: string
   category1: string
   category2: string
   category3: string
   category4: string
}

export interface GetNaverShopRequest {
   query: string // 검색어 (UTF-8)
   display?: number // 표시할 검색 개수 (최대 : 100)
   start?: number // 검색 시작 위치 (최대 : 100)
   sort?: NaverShopSort // 검색 결과 정렬 방법
   filter?: string // naverpay (네이버 페이 연동 상품)
   exclude?: string // 검색 결과에서 제외할 상품 유형
}

export interface GetNaverShopResponse extends BaseShopResponse {
   items: NaverShopItems[]
}
