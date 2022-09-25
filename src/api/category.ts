import httpRequest from '@/utils/request';

export interface ICategoryItem {
  id: string;
  name: string;
  col?: number;
  urlName: string;
}
export const getCategory = (): Promise<ICategoryItem[]> => new Promise((resolve, reject) => {
  httpRequest('/category', 'get').then(r => {
    const data: ICategoryItem[] = r?.categorys?.map((e: any) => ({
      id: e.id,
      name: e.name,
      col: e.col,
      urlName: e.urlname,
    }))
    resolve(data)
  }, err => {
    reject(err)
  })
})