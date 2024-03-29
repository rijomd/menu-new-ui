import { CircularProgress, Button, Tooltip } from "@mui/material";
import { OverridableStringUnion } from '@mui/types';

export interface TextFieldPropsColorOverrides { }

export type TypesFormButtonField = {
  fullWidth?: boolean;
  children: any;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  label?: string;
  color?: OverridableStringUnion<'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning', TextFieldPropsColorOverrides>;
  variant?: 'contained' | 'outlined' | 'text';
  [others: string]: any;
};

export const FormButtonField: React.FC<TypesFormButtonField> = (props) => {
  const { fullWidth = true, children, onClick = () => { }, disabled, color, label, variant = 'contained', ...others } = props;

  return (
    <Tooltip title={label}>
      <Button
        variant={variant}
        size="small"
        color={color || "secondary"}
        endIcon={disabled && <CircularProgress />}
        fullWidth={fullWidth}
        onClick={onClick}
        disabled={disabled}
        {...others}
      >
        {children}
      </Button>
    </Tooltip>
  );
};
