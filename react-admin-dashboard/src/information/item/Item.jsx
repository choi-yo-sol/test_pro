import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid} from '@mui/x-data-grid';
import { Link } from "react-router-dom"
import "./item.css"
const columns = [
    { field: 'id', headerName: 'No', width: 90 },
    {
      field: 'clientname',
      headerName: '제품코드',
      width: 150,
      editable: true,
    },
    {
      field: 'clientcode',
      headerName: '제품명',
      width: 150,
      editable: true,
    },
    {
      field: 'phone',
      headerName: '분류',
      width: 110,
      editable: true,
    },
    {
      field: 'manager',
      headerName: '사양',    
      sortable: false,
      width: 160,
     
    },
]
  const rows = [
   
  ];

export default function Item() {
    return (
        <div className="item">
            <div className= "itemTitleContainer">
                <h3 className="itemTitle">제품정보 관리</h3>                
            </div>
            <div className="itemContainer">                
                <div className="itemcode">
                    <label>제품코드  </label>
                    <input 
                        type="text"
                        placeholder="제품코드를 입력해주세요"
                        className="itemcode1"
                    />    
                </div>
                <div className="itemname">
                    <label>제품명  </label>
                    <input 
                        type="text"
                        placeholder="제품명을 입력해주세요"
                        className="itemname1"
                    />    
                </div>
    
                <div className="itemdate">
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
                    <button className="itemAddButton">검색</button>
                    
                    </Link>
                    <button className="itemAddButton1">검색 초기화</button>    
                
            
            </div>
            <Box sx={{ height: 700, width: '103%',  margin:0, }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
        </div>
    )
}