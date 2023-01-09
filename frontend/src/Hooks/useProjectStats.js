import { useEffect } from "react";
import { useState } from "react"

export const useProjectStats = (project, tasks) => {
    let [{ completedTasks, hoursCompleted, completedPercent }, setData] = useState({
        completedTasks: 0,
        hoursCompleted: "", completedPercent: 0
    });

    useEffect(() => {
        let task = tasks.filter((ele) => ele.status === true);
        let hours = project.duration < 60 ?
            project.duration + "s" :
            Math.floor(project.duration / 3600) + "h:" + Math.floor((project.duration % 3600) / 60) + 'm';
        let percent = Math.floor((project.duration / (project.estimatedTime * 3600)) * 100);
        setData({ completedTasks: task, completedPercent: percent, hoursCompleted: hours })
    }, [project, tasks]);

    return {
        completedTasks, hoursCompleted, completedPercent
    }
}