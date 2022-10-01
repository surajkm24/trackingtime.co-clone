import { Box, Button, HStack } from '@chakra-ui/react';
import React from 'react';
import { useEffect, useState, useRef } from "react";
import { AiFillPauseCircle } from 'react-icons/ai';
import { GoPlay } from "react-icons/go";

export default function TimerNav({ play, setPlay, updateDuration }) {
    const [time, setTime] = useState(0);
    let timeRef = useRef(null)

    useEffect(() => {
        if (play) {
            timeRef.current = setInterval(() => {
                setTime(time => time + 1)
            }, 1000)
        }
        else {
            updateDuration(time||0)
            clearInterval(timeRef.current)
            setTime(0);
        }
    }, [play])

    const toggleTimer = () => {
        if (play) {
            setPlay(false);

        } else {
            setPlay(true);
        }
    }


    function strToSeconds(str) {
        str = str.split(":").map(Number);
        let seconds = (str[0] * 60 * 60) + (str[1] * 60) + str[2]
        return seconds
    }

    function converter(seconds) {
        let hr = seconds / (60 * 60);
        seconds = (hr - Math.floor(hr)) * (60 * 60);
        let min = seconds / 60
        seconds = (min - Math.floor(min)) * (60)
        return `${Math.floor(hr)}:${Math.floor(min)}:${Math.floor(seconds)}`
    }

    return (
        <HStack color='white'>
            {play ? <Box color='white' fontSize={"14px"} fontWeight={700}>{converter(time)}</Box> : null}
            {play ? <AiFillPauseCircle onClick={() => toggleTimer()} style={{ height: "25px", width: "25px" }} /> : <GoPlay onClick={() => toggleTimer()} style={{ height: "25px", width: "25px" }} />}
        </HStack>
    );
}