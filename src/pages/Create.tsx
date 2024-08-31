import { Container } from "react-bootstrap"
import CustomForm from "../components/Form"
import { NoteData, Tag } from "../types"

export type CreateProps = {
    handleSubmit: (NoteData: NoteData) => void
    createTag: (Tag: Tag) => void
    availableTags: Tag[]
} & Partial<NoteData>

const Create = ({ handleSubmit, createTag, availableTags }: CreateProps) => {
    return (
        <Container className="py-5">
            <h2>Yeni Not Oluştur</h2>

            <CustomForm handleSubmit={handleSubmit} createTag={createTag} availableTags={availableTags} />
        </Container>
    )
}

export default Create