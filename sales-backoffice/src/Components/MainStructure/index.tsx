import { Typography } from '@mui/material';
import './style.scss'
import DrawerAppBar from '../Nav';
import { useAuthContext } from '../../context/AuthContext/inde';
import { Navigate } from 'react-router-dom';

interface MainStructureProps{
    children:React.ReactNode;
    title?:string;
}


export default function MainStructure({children,title}:MainStructureProps){
    const { authenticated } = useAuthContext();

    if (!authenticated) {
      return <Navigate to="/" />;
    }
   return(
    <DrawerAppBar title={title}>
        <div className="Container">
           <div>{children}</div>
        </div>
    </DrawerAppBar>
   );
}