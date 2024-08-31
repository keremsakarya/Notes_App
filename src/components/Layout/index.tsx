import { Navigate, Outlet, useParams } from "react-router-dom"
import { Note } from "../../types"

type Props = {
    notes: Note[]
}

const Layout = ({ notes }: Props) => {

    //* url deki id yi al
    const { id } = useParams()

    //* notes dizisinde elemanı ara
    const found = notes.find((i) => i.id === id)

    //* bulamazsak anasayfaya yönlendir
    if (!found) return (<Navigate to="/" replace />)

    //* parent route içerisinde alt route u render la
    //* note verisini alt route a gönder

    return (
        <Outlet context={found} />
    )
}

export default Layout