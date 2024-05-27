// testing things out
import  Button from "@mui/material/Button";
import  Card  from "@mui/material/Card";
import Stack from '@mui/material/Stack'
import  Typography  from "@mui/material/Typography";


// icons
import AddIcon from '@mui/icons-material/Add'

import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';

export default function Dashboard() {
    return (
        <Card sx={{padding:'1.5rem'}}>
            <Stack direction={'column'} gap={'2rem'}>
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
               <Stack 
               gap={'2rem'}
               direction={'row'} width={'100%'}
               >
               <CustomizedCard Icon={PlayArrowOutlinedIcon} heading="Heading 1" subheading="subheading"/>
               <CustomizedCard Icon={TextSnippetOutlinedIcon} heading="Heading 2" subheading="subheading 2"/>
               </Stack>
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

type CustomizedCardProps = {
    heading: string;
    subheading: string;
    Icon: typeof AddIcon;
}

function CustomizedCard({heading, subheading, Icon}:CustomizedCardProps){
    return (
        <Card sx={{
            flex:'1',
            padding:'1.5rem'
        }}>
            <Stack direction={'row'}  gap={'2rem'} alignItems={'flex-start'}>
                <Icon
                sx={{
                    background:'#e4f3fe',
                    color: '#0f7edd',
                    fontSize:'1.7rem',
                    borderRadius:'50%',
                    padding: '.2rem'
                }}/>
                <Stack direction={'column'}>
                    <Typography variant="body1" color={'#0f7edd'} fontWeight={'bold'} fontSize={'1.4rem'}>{heading}</Typography>
                    <Typography variant="body1">{subheading}</Typography>
                </Stack>
            </Stack>
        </Card>
    )
}