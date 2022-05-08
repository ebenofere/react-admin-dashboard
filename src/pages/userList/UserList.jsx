import './userList.css'
import { DataGrid } from '@mui/x-data-grid'
import { userRows } from '../../dummyData'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function UserList() {
    const [data, setData] = useState(userRows)

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'username', headerName: 'User', width: 200, renderCell: (params) => {
                return (
                    <div className='userListUser'>
                        <img className='userListImg' src={params.row.avatar} alt="" />
                        {params.row.username}
                    </div>
                )
            }
        },
        { field: 'email', headerName: 'Email', width: 200 },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
        },
        {
            field: 'transaction',
            headerName: 'Transaction Volume',
            width: 160,
        }, {
            field: 'action',
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={`/user/${params.row.id}`}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutlineIcon className='userListDelete' onClick={() => handleDelete(params.row.id)} />
                    </>
                )
            }
        }
    ];

    return (
        <div className='userList' style={{ height: 600, width: '100%' }}>
            <DataGrid
                rows={data}
                columns={columns}
                disableSelectionOnClick
                pageSize={10}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
} 