import { Alert } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useCallback, useState } from 'react';
import { GetOperations } from '../helpers/GetOperations';

export const GridOperations = (props) => {

  //Llamo a la BD para las operaciones
  const { operations: rows } = GetOperations();
  
  const [editRowsModel, setEditRowsModel] = useState({});

  const handleEditRowsModelChange = useCallback((model) => {
    setEditRowsModel(model);
  }, []);
 
  const columns = [
    { field: 'description', headerName: 'Description', width: 200, editable:true },
    { field: 'amount', headerName: 'Amount', type: 'number', width: 100, editable: true },
    { field: 'date', headerName: 'Date', type: "date", width: 150, editable: true },
    { field: 'type', headerName: 'Type Operation', width: 150 },
  ]

  return (
    <div style={{ height: 500, width: '100%' }}>
      <Alert severity="info" style={{ marginBottom: 8 }}>
        <code>editRowsModel: {JSON.stringify(editRowsModel)}</code>
      </Alert>

      <DataGrid
        id={rows}
        getRowId={(row) => row._id}
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        editRowsModel={editRowsModel}
        onEditRowsModelChange={handleEditRowsModelChange}
      />
    </div>
  );
};






// import { DataGrid } from '@mui/x-data-grid';
// import { GetOperations } from '../helpers/GetOperations';

// export const GridOperations = (props) => {

//   //Llamo a la BD para las operaciones
//   const { operations: rows } = GetOperations();
 
//   const columns = [
//     { field: 'description', headerName: 'Description', width: 200 },
//     { field: 'amount', headerName: 'Amount', type: 'number', width: 100, editable: true },
//     { field: 'date', headerName: 'Date', type: "date", width: 150, editable: true },
//     { field: 'type', headerName: 'Type Operation', width: 150 },
//   ]

//   return (
//     <div style={{ height: 500, width: '100%' }}>
//       <DataGrid
//         id={rows}
//         getRowId={(row) => row._id}
//         rows={rows}
//         columns={columns}
//         pageSize={10}
//         rowsPerPageOptions={[10]}
//       />
//     </div>
//   );
// };

