import { useRecoilValue } from "recoil"
import { eventosFiltradosState } from "../selectors"

const useListaDeEventos = () => {
  return useRecoilValue(eventosFiltradosState)
}

export default useListaDeEventos