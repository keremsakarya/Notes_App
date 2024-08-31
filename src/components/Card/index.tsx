import { Badge, Card, Stack } from "react-bootstrap"
import { Note } from "../../types"
import { Link } from "react-router-dom"

type Props = {
    note: Note
}

const CustomCard = ({ note }: Props) => {
    return (
        <Link to={`/note/${note.id}`}>
            <Card className="note_card">
                <Card.Body>
                    <Stack
                        className="align-items-center h-100 justify-content-between"
                        gap={2}
                    >
                        <span className="fw-bold text-nowrap">
                            {note.title}
                        </span>
                        <Stack
                            direction="horizontal"
                            className="justify-content-center"
                            gap={2}
                        >
                            {note.tags.map((tag, key) => (
                                <Badge key={key}>{tag.label}</Badge>
                            ))}
                        </Stack>
                    </Stack>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default CustomCard