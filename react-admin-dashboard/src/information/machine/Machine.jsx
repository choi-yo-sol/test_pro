import './machine.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom"


const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 50,
    align: "center",
    headerAlign: 'center',
  },
  {
    field: 'clientname',
    headerName: '설비 코드',
    width: 150,
    align: "center",
    headerAlign: 'center',
    editable: true,
  },
  {
    field: 'clientcode',
    headerName: '설비 명',
    width: 150,
    align: "center",
    headerAlign: 'center',
    editable: true,
  },
  {
    field: 'phone',
    headerName: '라인 명',
    type: 'number',
    width: 110,
    align: "center",
    headerAlign: 'center',
    editable: true,
  },
  {
    field: 'manager',
    headerName: '관리 담당(장)',
    sortable: false,
    width: 160,
    align: "center",
    headerAlign: 'center',

  },
  {
    field: 'managerphone',
    headerName: '관리 담당(부)',
    width: 150,
    editable: true,
    align: "center",
    headerAlign: 'center',
  },

];

const rows = [

];
export default function Machine() {
  return (
    <div className="machine">
      <div className="machineTitleContainer">
        <h3 className="machineTitle">설비정보 관리</h3>
      </div>
      <div className="machineContainer">
        <div className="machinecode">
          <label>설비코드  </label>
          <input
            type="text"
            placeholder="설비코드를 입력해주세요"
            className="machinecode1"
          />
        </div>
        <div className="machinename">
          <label>설비명  </label>
          <input
            type="text"
            placeholder="설비명을 입력해주세요"
            className="machinename1"
          />
        </div>

        <div className="machinedate">
          <label>등록일시  </label>
          <input
            type="date"
            className="search"
            aria-label="생산완료예정일 검색 시작기간"
            value
          />
          <span className="control"> ~ </span>
          <input
            type="date"
            className="search"
            aria-label="생산완료예정일 검색 종료 기간"
            value
          />

        </div>
        <Link>
          <button className="machineAddButton">검색</button>

        </Link>
        <button className="machineAddButton1">검색 초기화</button>


      </div>

      <Box sx={{ height: 490, width: "89%", marginLeft: "30px" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={7}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </div>
  )
}