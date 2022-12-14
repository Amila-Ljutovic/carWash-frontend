import ActionCell from "../../../components/actionCell/actionCell"

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
        Header: 'Duration',
        accessor: 'duration'
    },
    {
        Header: 'Substance',
        accessor: 'substance'
    },
    {
        Header: 'Actions',
        accessor: (value) => value,
        Cell:  ( {value}) => {
           return <ActionCell 
                path={'washing-steps'}
                value={value}
            />
        }
    }
]