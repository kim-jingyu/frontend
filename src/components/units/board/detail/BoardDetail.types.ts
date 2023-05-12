import { MouseEvent } from "react"

export interface IBoardDetailUIProps {
    data?: any
    onClickMoveToBoardEdit: (event: MouseEvent<HTMLButtonElement>) => void
}