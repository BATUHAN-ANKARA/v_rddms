"use client";
import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
  Switch,
  TextField, // Yeni eklenen import
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";

function createData(
  id,
  projeadi,
  hibealinankurum,
  acilistarih,
  kapanistarihi,
  ongorulenbutce
) {
  return {
    id,
    projeadi,
    hibealinankurum,
    acilistarih,
    kapanistarihi,
    ongorulenbutce,
  };
}

const rows = [
  createData(1, "Proje 1", "Hibe Kurumu A", "2023-01-01", "2023-12-31", 50000),
  createData(2, "Proje 2", "Hibe Kurumu B", "2023-02-15", "2023-11-30", 75000),
  createData(3, "Proje 3", "Hibe Kurumu C", "2023-03-10", "2023-10-15", 60000),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export default function EnhancedTable() {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState(" ");
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchText, setSearchText] = useState(""); // Yeni eklenen state

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = [...selected, id];
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = useMemo(() => {
    const filteredRows = rows.filter(
      (row) =>
        row.projeadi.toLowerCase().includes(searchText.toLowerCase()) ||
        row.hibealinankurum.toLowerCase().includes(searchText.toLowerCase()) ||
        row.acilistarih.toLowerCase().includes(searchText.toLowerCase()) ||
        row.kapanistarihi.toLowerCase().includes(searchText.toLowerCase()) ||
        row.ongorulenbutce.toString().includes(searchText.toLowerCase())
    );

    return stableSort(filteredRows, getComparator(order, orderBy)).slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage
    );
  }, [order, orderBy, page, rowsPerPage, searchText]);
  return (
    <Box sx={{ width: "100%" }} className="tables">
      <Paper sx={{ width: "100%", mb: 2 }}>
        <div className="flextbls">
          <Toolbar
            style={{ paddingLeft: "0px", marginLeft: "0px", float: "left" }}
          >
            <h2 className="titlefirst">Güncel Tablo</h2>
          </Toolbar>
          <Toolbar className="tablesearch">
            <TextField
              label="Tabloda Ara.."
              variant="outlined"
              size="small"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </Toolbar>
        </div>

        <TableContainer>
          <Table
            className="tables"
            sx={{ minWidth: 750 }}
            size={dense ? "small" : "medium"}
          >
        <TableHead>
  <TableRow>
    <TableCell
      align="left"
      padding="none"
      sortDirection={orderBy === "#" ? order : false}
    >
      <TableSortLabel
        active={orderBy === "#"}
        direction={orderBy === "#" ? order : "asc"}
        onClick={() => handleRequestSort("#")}
      >
        #
      </TableSortLabel>
    </TableCell>
    <TableCell align="right">
      <TableSortLabel
        active={orderBy === "Ad"}
        direction={orderBy === "Ad" ? order : "asc"}
        onClick={() => handleRequestSort("Ad")}
      >
        Ad
      </TableSortLabel>
    </TableCell>
    <TableCell align="right">
      <TableSortLabel
        active={orderBy === "Soyad"}
        direction={orderBy === "Soyad" ? order : "asc"}
        onClick={() => handleRequestSort("Soyad")}
      >
        Soyad
      </TableSortLabel>
    </TableCell>
    <TableCell align="right">
      <TableSortLabel
        active={orderBy === "Mezuniyet"}
        direction={orderBy === "Mezuniyet" ? order : "asc"}
        onClick={() => handleRequestSort("Mezuniyet")}
      >
        Mezuniyet
      </TableSortLabel>
    </TableCell>
    <TableCell align="right">
      <TableSortLabel
        active={orderBy === "Okul"}
        direction={orderBy === "Okul" ? order : "asc"}
        onClick={() => handleRequestSort("Okul")}
      >
        Okul
      </TableSortLabel>
    </TableCell>
    <TableCell align="right">
      <TableSortLabel
        active={orderBy === "Bölüm"}
        direction={orderBy === "Bölüm" ? order : "asc"}
        onClick={() => handleRequestSort("Bölüm")}
      >
        Bölüm
      </TableSortLabel>
    </TableCell>
    <TableCell align="right">
      <TableSortLabel
        active={orderBy === "Mezunyet Tarihi"}
        direction={orderBy === "Mezunyet Tarihi" ? order : "asc"}
        onClick={() => handleRequestSort("Mezunyet Tarihi")}
      >
        Mezuniyet Tarihi
      </TableSortLabel>
    </TableCell>
    <TableCell align="right">
      <TableSortLabel
        active={orderBy === "Firma Giriş Tarihi"}
        direction={orderBy === "Firma Giriş Tarihi" ? order : "asc"}
        onClick={() => handleRequestSort("Firma Giriş Tarihi")}
      >
        Firma Giriş Tarihi
      </TableSortLabel>
    </TableCell>
    <TableCell align="right">
      <TableSortLabel
        active={orderBy === "Firma Çıkış Tarihi"}
        direction={orderBy === "Firma Çıkış Tarihi" ? order : "asc"}
        onClick={() => handleRequestSort("Firma Çıkış Tarihi")}
      >
        Firma Çıkış Tarihi
      </TableSortLabel>
    </TableCell>
    <TableCell align="right">
      <TableSortLabel
        active={orderBy === "Arge Giriş Tarihi"}
        direction={orderBy === "Arge Giriş Tarihi" ? order : "asc"}
        onClick={() => handleRequestSort("Arge Giriş Tarihi")}
      >
        Arge Giriş Tarihi
      </TableSortLabel>
    </TableCell>
    <TableCell align="right">
      <TableSortLabel
        active={orderBy === "Arge Çıkış Tarihi"}
        direction={orderBy === "Arge Çıkış Tarihi" ? order : "asc"}
        onClick={() => handleRequestSort("Arge Çıkış Tarihi")}
      >
        Arge Çıkış Tarihi
      </TableSortLabel>
    </TableCell>
    <TableCell align="right">
      <TableSortLabel
        active={orderBy === "Arge Merkezindeki Pozisyonu"}
        direction={orderBy === "Arge Merkezindeki Pozisyonu" ? order : "asc"}
        onClick={() => handleRequestSort("Arge Merkezindeki Pozisyonu")}
      >
        Arge Merkezindeki Pozisyonu
      </TableSortLabel>
    </TableCell>
    <TableCell align="right">
      <TableSortLabel
        active={orderBy === "Arge Merkezindeki Kategorisi"}
        direction={orderBy === "Arge Merkezindeki Kategorisi" ? order : "asc"}
        onClick={() => handleRequestSort("Arge Merkezindeki Kategorisi")}
      >
        Arge Merkezindeki Kategorisi
      </TableSortLabel>
    </TableCell>
    <TableCell align="right">
      <TableSortLabel
        active={orderBy === "Arge Merkezinde Bağlı Olduğu Kişi"}
        direction={orderBy === "Arge Merkezinde Bağlı Olduğu Kişi" ? order : "asc"}
        onClick={() => handleRequestSort("Arge Merkezinde Bağlı Olduğu Kişi")}
      >
        Arge Merkezinde Bağlı Olduğu Kişi
      </TableSortLabel>
    </TableCell>
    <TableCell align="right">
      <TableSortLabel
        active={orderBy === "Günlük Çalışma Sistemi"}
        direction={orderBy === "Günlük Çalışma Sistemi" ? order : "asc"}
        onClick={() => handleRequestSort("Günlük Çalışma Sistemi")}
      >
        Günlük Çalışma Sistemi
      </TableSortLabel>
    </TableCell>
    <TableCell align="right">
      <TableSortLabel
        active={orderBy === "Personel Kategorisi"}
        direction={orderBy === "Personel Kategorisi" ? order : "asc"}
        onClick={() => handleRequestSort("Personel Kategorisi")}
      >
        Personel Kategorisi
      </TableSortLabel>
    </TableCell>
    <TableCell align="right">
      <TableSortLabel
        active={orderBy === "Personel Çalışma Sistemi"}
        direction={orderBy === "Personel Çalışma Sistemi" ? order : "asc"}
        onClick={() => handleRequestSort("Personel Çalışma Sistemi")}
      >
        Personel Çalışma Sistemi
      </TableSortLabel>
    </TableCell>
    <TableCell align="right">
      <TableSortLabel
        active={orderBy === "Cinsiyet"}
        direction={orderBy === "Cinsiyet" ? order : "asc"}
        onClick={() => handleRequestSort("Cinsiyet")}
      >
        Cinsiyet
      </TableSortLabel>
    </TableCell>
    <TableCell align="right">
      <TableSortLabel
        active={orderBy === "Doğum Tarihi"}
        direction={orderBy === "Doğum Tarihi" ? order : "asc"}
        onClick={() => handleRequestSort("Doğum Tarihi")}
      >
        Doğum Tarihi
      </TableSortLabel>
    </TableCell>
  </TableRow>
</TableHead>
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: "pointer" }}
                  >
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      {row.etkinlikadi}
                    </TableCell>
                    <TableCell align="right">{row.projeno}</TableCell>

                    <TableCell align="right">{row.projeadi}</TableCell>
                    <TableCell align="right">{row.projeadi}</TableCell>
                    <TableCell align="right">{row.baslangictarihi}</TableCell>
                    <TableCell align="right">{row.bitistarihi}</TableCell>
                    <TableCell align="right">{row.etkinlikyeri}</TableCell>
                    <TableCell align="right">
                      {row.etkinlikkurulusadi}
                    </TableCell>
                    <TableCell align="right">{row.katilimsekli}</TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={9} />
                </TableRow>
              )}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      </Paper>
      <Box>
        <Switch
          checked={dense}
          onChange={(event) => handleChangeDense(event)}
        />
        <Typography>Sıkı Doldurma</Typography>
      </Box>
    </Box>
  );
}
