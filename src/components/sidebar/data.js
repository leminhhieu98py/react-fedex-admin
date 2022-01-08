import ListAltIcon from '@mui/icons-material/ListAlt';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';

const sideBarData =  [
    {
        "display_name": "Danh sách doanh nghiệp",
        "route": "/enterpriselist",
        "icon": <ListAltIcon fontSize="small" sx={{mr: 2}}/> 
    },
    {
        "display_name": "Quản lý tài khoản",
        "route": "/accounts",
        "icon": <SupervisorAccountIcon fontSize="small" sx={{mr: 2}}/>
    },
];

export {sideBarData};
