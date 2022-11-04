import { Box, Button, Heading, Progress, Text } from '@chakra-ui/react';
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useState } from 'react';
import { AiOutlineCalendar, AiOutlineFileAdd, AiOutlineFileExcel, AiOutlineFilePdf, AiOutlineUpload } from 'react-icons/ai';
import { BiTime } from 'react-icons/bi';
import { FaFileCsv } from 'react-icons/fa';
import { getProject } from './Report.Actions';

export const Report = () => {
    const [projectData, setProjectData] = useState({ data: {}, completedTasks: 0, hoursCompleted: "", completedPercent: 0 });
    const { data, completedTasks, hoursCompleted, completedPercent } = projectData;
    const projectAPI = () => {
        // feedback: fw18_0042 - is this some sceret? You should use config file here
        getProject("63356355042263ed5a39461c:a@gmail.com:a", "6335d2dad368cf59fdf276bd")
            .then((res) => {
                let completedTasks = res.task.filter(({ taskId }) => { return taskId.status }).length;
                let hoursCompleted = res.duration < 60 ?
                    res.duration + "s" :
                    Math.floor(res.duration / 3600) + ":" +
                        Math.floor((res.duration % 3600) / 60) < 10 ? "0" +
                    Math.floor((res.duration % 3600) / 60) :
                        Math.floor((res.duration % 3600) / 60);

                let completedPercent = Math.floor((res.duration / (res.estimatedTime * 3600)) * 100);
                setProjectData({
                    ...projectData,
                    data: res,
                    completedTasks,
                    hoursCompleted,
                    completedPercent
                });
            })
    }
    useEffect(() => {
        projectAPI();
    }, [])
    return <div style={{ background: '#2A313C', padding: "10px 20px" }}>
        <Box display='flex' color='white' justifyContent='space-between'>
            <Button
                bg='#343D4B'
                _hover={{ background: "#343d3c" }}
                fontSize='13px'
                h='30px'
                px='10px'>
                <AiOutlineCalendar />&nbsp; All time
            </Button>
            <Box display='flex' gap='20px'>
                <Button
                    bg='#343D4B'
                    _hover={{ background: "#343d3c" }}
                    fontSize='13px'
                    h='30px'
                    px='10px'>
                    <BiTime />&nbsp;Timesheet
                </Button>
                <Popover trigger='hover'>
                    <PopoverTrigger>
                        <Button
                            bg='#343D4B'
                            _hover={{ background: "#343d3c" }}
                            fontSize='13px'
                            h='30px'
                            px='10px'>
                            <AiOutlineUpload />&nbsp;Share
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent bg='#2a313c' w='200px' borderColor='#2a313c'>
                        <PopoverBody fontWeight={600} fontSize='13px'>
                            <Box display='flex' cursor='pointer' alignItems='center' gap='7px' padding='10px' _hover={{ background: "#343d4b" }}>
                                <AiOutlineFileAdd /> Shared report
                            </Box>
                            <Box display='flex' cursor='pointer' alignItems='center' gap='7px' padding='10px' _hover={{ background: "#343d4b" }}>
                                <AiOutlineFilePdf /> Pdf
                            </Box>
                            <Box display='flex' cursor='pointer' alignItems='center' gap='7px' padding='10px' _hover={{ background: "#343d4b" }}>
                                <FaFileCsv /> Csv
                            </Box>
                            <Box display='flex' cursor='pointer' alignItems='center' gap='7px' padding='10px' _hover={{ background: "#343d4b" }}>
                                <AiOutlineFileExcel /> Excel
                            </Box>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>

            </Box>
        </Box>
        <Box pt='10px'>
            <Box w='280px' height='250px' bg='lightgray' borderRadius='5px' p='10px 15px' display='flex' flexDir={'column'} justifyContent='space-between'>
                <Heading fontSize='18px'>{data?.projectName}</Heading>
                <Box display='flex' gap='15px' alignItems={'center'}>
                    <Progress value={completedPercent} colorScheme='pink' borderRadius='5px' h='8px' w='140px'/> <Text>{completedPercent}%</Text>
                </Box>
                <Box width='fit-content' display='flex' flexDir={'column'} gap='5px'>
                    <Text>
                        <span style={{ fontSize: "11px" }}>
                            Tasks :
                        </span> {completedTasks}/<span style={{ fontWeight: '700' }}>{data.task?.length}</span>
                    </Text>
                    <Text>
                        <span style={{ fontSize: "11px" }}>
                            Hours :
                        </span> {hoursCompleted}/<span style={{ fontWeight: '700' }}>{data.estimatedTime}:00</span>
                    </Text>
                    <Text>
                        <span style={{ fontSize: "11px" }}>
                            Due :
                        </span> {data.dueDate || "No Due Date"}
                    </Text>
                </Box>
            </Box>
        </Box>

    </div>
}
