import React from "react";
import './sidebar.css'
import HomeWorkIcon from '@mui/icons-material/HomeWork'

import Person2SharpIcon from '@mui/icons-material/Person2Sharp';
import SettingsIcon from '@mui/icons-material/Settings';

import {Link} from 'react-router-dom'


  
export default function Sidebar() {
    return (
        
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                
                <Link to ={"/info"}>
                    <h3 className="sidebarTitle"> <HomeWorkIcon /> 기준정보관리</h3>                                      
                </Link>

                <ul className="sidebarList"> 

                    <Link to="/info/Staff" >                  
                    <li className="sidebarListItem">                        
                        사원정보 관리                        
                    </li>
                    </Link>


                    <Link to ="/info/Client">
                    <li className="sidebarListItem">
                        고객정보 관리                    
                    </li>
                    </Link>


                    <Link to ="/info/Material">
                    <li className="sidebarListItem">
                        원자재정보관리
                    </li>
                    </Link>


                    <Link to ="/info/Item">
                    <li className="sidebarListItem">
                        제품정보 관리
                    </li>
                    </Link>


                    <Link to ="/info/Process">
                    <li className="sidebarListItem">
                        공정정보 관리
                    </li>
                    </Link>


                    <Link to ="/info/Machine">

                    <li className="sidebarListItem">
                        설비정보 관리
                    </li>
                    </Link>
                </ul>

            </div>


            <div className="sidebarMenu">
                
                <h3 className="sidebarTitle"> <Person2SharpIcon />생산관리</h3>
                
                <ul className="sidebarList">
                    <Link to='/users'>
                    <li className="sidebarListItem">                        
                        생산계획 관리
                    </li>
                    </Link>
                    
                    <Link to='/monitoring'>
                    <li className="sidebarListItem">                       
                        생산 모니터링
                    </li>
                    </Link>
                    
                    <li className="sidebarListItem">                       
                        생산보고서
                    </li>
                </ul>
            </div>           
            <div className="sidebarMenu">
                <h3 className="sidebarTitle"> <SettingsIcon />시스템관리</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">                        
                        환경변수 관리
                    </li>
                    <li className="sidebarListItem">                        
                        사용자그룹 관리
                    </li>
                    <li className="sidebarListItem">                       
                        메뉴권한 관리
                    </li>
                    <li className="sidebarListItem">                       
                        공지사항 관리
                    </li>
                    <li className="sidebarListItem">                       
                        접속이력 현황
                    </li>
                    <li className="sidebarListItem">                       
                        일일접속건수
                    </li>
                </ul>
            </div>
        </div>
    </div>
    )           
}