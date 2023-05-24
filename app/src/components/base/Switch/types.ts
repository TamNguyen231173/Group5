export interface SwitchProps {
    value: boolean;
    onValueChange: (value: boolean) => void;
    trackColor?: string | { active: string; inActive: string };
    thumbColor?: string | { active: string; inActive: string };
    trackWidth?: number;
    thumbWidth?: number;
    disabled?: boolean;
}
