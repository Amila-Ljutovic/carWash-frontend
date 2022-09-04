import ActionCell from "../../../components/actionCell/actionCell"

export const COLUMNS = [
    {
        Header: 'Id',
        accessor: 'id'
    },
    {
        Header: 'First name',
        accessor: 'first_name'
    },
    {
        Header: 'Last name',
        accessor: 'last_name'
    },
    {
        Header: 'Phone number',
        accessor: 'phone_number'
    },
    {
        Header: 'Gender',
        accessor: 'gender'
    },
    {
        Header: 'Washing numbers',
        accessor: 'washing_number'
    },
    {
        Header: 'Actions',
        accessor: (value) => value,
        Cell:  ( {value}) => {
           return <ActionCell 
                path={'customers'}
                value={value}
            />
        }
    }
]