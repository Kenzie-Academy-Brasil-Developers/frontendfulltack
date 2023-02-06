import { RowStyled } from "./style"

interface IPropsRow {
    name:string
    value:string
}

const Row = ( { name, value }:IPropsRow ) => {

    return (
        <RowStyled>
            <div className="row__name">
                { name }
            </div>
            <div className="row__value">
                { value }
            </div>
        </RowStyled>
    )
}

export default Row