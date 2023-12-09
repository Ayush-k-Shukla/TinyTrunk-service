import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import { formatCustomDate } from '../../core/date-time.helper';
import { getShortLinkUrl } from '../../core/helper';
import { IShortenedUrl } from '../../core/interface';

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#181E29',
    color: '#C9CED6',
    fontWeight: '700',
    fontSize: 15,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    backgroundColor: '#181e2938',
    color: '#C9CED6',
    fontWeight: '300',
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  '&:nth-of-type(odd)': {
    backgroundColor: 'rgba(24, 30, 41, 0.22)',
    color: '#C9CED6',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function LinkTable({ data }: { data: IShortenedUrl[] }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label='customized table'>
        <TableHead>
          <TableRow style={{ background: '#181E29 !important' }}>
            <StyledTableCell>Short Link</StyledTableCell>
            <StyledTableCell>Original Link</StyledTableCell>
            <StyledTableCell>Clicks</StyledTableCell>
            <StyledTableCell>Date</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <StyledTableRow>
              <StyledTableCell component='th' scope='row'>
                {getShortLinkUrl(row.shortId)}
              </StyledTableCell>
              <StyledTableCell>{row.originalUrl}</StyledTableCell>
              <StyledTableCell>{row.count}</StyledTableCell>
              <StyledTableCell sx={{ whiteSpace: 'nowrap' }}>
                {formatCustomDate(
                  row?.createdAt ?? '2023-12-06T09:04:00.000+00:00'
                )}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
