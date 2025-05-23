import { useNavigate } from "react-router"
import { AppRoutes } from "../routes/routes"
import "@/styles/App.css"
import { sessionApiService } from "@/services/api/telegram/session.api.service"
import { useFetch } from "@/lib/hooks/useFetch"
import { useEffect } from "react"

function App() {
  const navigate = useNavigate()
  const { data, isLoading } = useFetch(() => sessionApiService.checkAuth(), [])

  useEffect(() => {
    if (data && !data.success) navigate("/login")
  }, [data])

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {!isLoading && <AppRoutes />}
    </>
  )
}

export default App