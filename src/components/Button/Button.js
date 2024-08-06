import Button from '@mui/material/Button';

export const CustomButton = ({ children, ...props }) => {
  return (
    <Button variant="contained" color="primary" {...props}>
      {children}
    </Button>
  );
};