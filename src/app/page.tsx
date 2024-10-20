import HomePage from "@/components/HomePage";
import BrandsList from "@/components/brands/BrandsList";
import ScrollBarPage from "@/components/ScrollBarPage";
import { SeekSolutionApi } from "@/utils/SeekSolutionApi";

export default async function Page() {

  const api = new SeekSolutionApi()

  const brands = await api.Brands.get()
  const introductions = await api.Introductions.list()
 
  
  return (
    <>
      <HomePage />
      <BrandsList brands={brands}/>
      <ScrollBarPage introductions={introductions}/>

    </>
  )
}
