import { ChangeEvent } from "react"
import { IQuery } from "../../../../commons/types/generated/types"

export interface IBoardWriteProps {
    isEdit: boolean
    data?: Pick<IQuery, "fetchBoard">
}

export interface IBoardWriteUIProps {
    errorWriter: string
    errorPw: string
    errorSubject: string
    errorContent: string
    handleChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void
    handleChangePw: (event: ChangeEvent<HTMLInputElement>) => void
    handleChangeSubject: (event: ChangeEvent<HTMLInputElement>) => void
    handleChangeContent: (event: ChangeEvent<HTMLTextAreaElement>) => void
    handleClickSubmit: () => void
    handleClickUpdate: () => void
    isActive: boolean
    isEdit: boolean
    data?: Pick<IQuery, "fetchBoard">
}

export interface ISubmitButtonProps {
    isActive: boolean
}