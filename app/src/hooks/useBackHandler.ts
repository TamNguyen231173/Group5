import { useEffect } from 'react';
import { BackHandler } from 'react-native';

type IParams = {
    enabled?: boolean;
    callback: () => void;
};

export const useBackHandler = ({ enabled, callback }: IParams) => {
    useEffect(() => {
        const backHandler = () => {
            callback();
            return true;
        };
        if (enabled) {
            BackHandler.addEventListener('hardwareBackPress', backHandler);
        } else {
            BackHandler.removeEventListener('hardwareBackPress', backHandler);
        }
        return () => BackHandler.removeEventListener('hardwareBackPress', backHandler);
    }, [enabled, callback]);
};
