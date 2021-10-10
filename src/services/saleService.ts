import api, { EndPoints } from 'api/axios';

export async function getSalesAxios() {
  return await api.get<SaleType[]>(EndPoints.sales);
}
