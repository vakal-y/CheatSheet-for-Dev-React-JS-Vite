import { useMemo } from 'react';

export default function useRandomContainerStyle(title) {
    const getRandomColor = () => {
        const colors = ['#6f6f6f', '#ffffff', '#f6e6cf', '#f88b50', '#b6400e', '#fea501', '#aa8946', '#a3755b', '#552706'];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    const containerStyle = useMemo(() => {
        return {
            backgroundColor: getRandomColor(),
            width: `${Math.min(300, Math.max(150, title.length * 10))}px`,
            height: 'auto',
        };
    }, [title]);

    return containerStyle;
}