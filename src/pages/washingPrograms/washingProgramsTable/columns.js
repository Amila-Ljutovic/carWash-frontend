import ActionCell from "../../../components/actionCell/actionCell"
import StepsList from "../../../components/stepsList/stepsList"

export const COLUMNS = [
    {
        Header: 'Id',
        accessor: 'id'
    },
    {
        Header: 'Name',
        accessor: 'name'
    },
    {
        Header: 'Price',
        accessor: 'price'
    },
    {
        Header: 'Washing steps',
        accessor: 'washing_steps',
        Cell:  ( {value}) => {
           return <StepsList 
                list={value}
            />
        }
    },
    {
        Header: 'Actions',
        accessor: (value) => value,
        Cell:  ( {value}) => {
           return <ActionCell 
                path={'washing-programs'}
                value={value}
            />
        }
    }
]