import ActionCell from "../../../components/actionCell/actionCell"

export const COLUMNS = [
    {
        Header: 'Id',
        accessor: 'id'
    },
    {
        Header: 'Customer',
        accessor: 'customer.first_name' 
    },
    {
        Header: 'Washing program',
        accessor: 'washing_program.name'
    },
    {
        Header: 'Date & Time',
        accessor: 'created_at'
    },
    {
        Header: 'Price',
        accessor: 'price'
    },
    {
        Header: 'Actions',
        accessor: (value) => value,
        Cell:  ( {value}) => {
           return <ActionCell 
                isReadOnly
                path={'transactions'}
                value={value}
            />
        }
    }
]