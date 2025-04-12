import { Typography } from '@mui/material';
import './style.scss'
import DrawerAppBar from '../Nav';

interface MainStructureProps{
    children:React.ReactNode;
    title?:string;
}


export default function MainStructure({children,title}:MainStructureProps){
   return(
    <DrawerAppBar title={title}>
        <div className="Container">
           <div>{children}</div>
        </div>
    </DrawerAppBar>
   );
}