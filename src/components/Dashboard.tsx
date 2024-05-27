// TODO: it's just a demo
// import { ReactNode } from "react";
// import { IconButton, SvgIconTypeMap } from "@mui/material";

import  Button from "@mui/material/Button";
import  Card  from "@mui/material/Card";
import Stack from '@mui/material/Stack'
import  Typography  from "@mui/material/Typography";


// icons
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
// import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';

export default function Dashboard() {
    return (
        <Card sx={{padding:'1.5rem'}}>
            <Stack direction={'column'}>
                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'flex-start'}>
                    <Stack direction={'column'} alignItems={'flex-start'}>
                        <Typography variant="h6" fontWeight={'bold'}>
                            Welcome back Rohit, Continue learning
                        </Typography>
                        <KeyValuePair keyx="BATCH" value="JAIN-MCA-SEM-2_JULY23"/>
                        <KeyValuePair keyx="ELECTIVE" value='ARTIFICIAL INTELLIGENCE'/>
                        <KeyValuePair keyx="USN" value="231VMTR00276"/>
                    </Stack>
                    <Button sx={{fontSize:'1.1rem'}}>SEE ALL</Button>
                </Stack>
                <PlayArrowOutlinedIcon sx={{
                    background:'red',
                    color: 'blue'
                }}/>
                {/* <CustomizedCard icon={PlayArrowOutlinedIcon} heading="fuck" subheading="you"/> */}
            </Stack>
        </Card>
    )
}

type KeyValuePairProps = {
    keyx: string;
    value: string;
}

function KeyValuePair({keyx, value}:KeyValuePairProps) {
   
    return (
        <Stack gap={'.8rem'} direction={'row'}>
            <Typography variant="body1">{keyx}:</Typography>
            <Typography variant="body1" color={'slategray'}>{value}</Typography>
        </Stack>
    )
}

// type CustomizedCardProps = {
//     heading: string;
//     subheading: string;
//     icon: SvgIconTypeMap<object, 'svg'>['defaultComponent']
// }

// function CustomizedCard({heading, subheading, icon}:CustomizedCardProps){
//     return (
//         <Card>
//             <Stack direction={'row'} justifyContent={'space-between'} alignItems={'flex-start'}>
//                 <IconButton>
//                     {icon}
//                 </IconButton>
//                 <Stack direction={'column'}>
//                     <Typography variant="body1" color={'burlywood'}>{heading}</Typography>
//                     <Typography variant="body1">{subheading}</Typography>
//                 </Stack>
//             </Stack>
//         </Card>
//     )
// }