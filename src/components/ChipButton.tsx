import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function ChipButton() {
  return (
    <Stack spacing={1} >
      <Stack direction="row" spacing={1}>
        <Chip label="80% off" color="primary" />
      </Stack>
      
    </Stack>
  );
}
