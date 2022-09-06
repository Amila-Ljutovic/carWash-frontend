import ActionCell from "../../../components/actionCell/actionCell"
import { format } from "date-fns"

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
        accessor: 'created_at',
        Cell: ({value}) => { return format(new Date(value), 'dd.MM.yyyy hh:mm') }
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