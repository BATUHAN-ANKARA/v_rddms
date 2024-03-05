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

function createData(id, projeadi, hibealinankurum, acilistarih, kapanistarihi, ongorulenbutce) {
  return { id, projeadi, hibealinankurum, acilistarih, kapanistarihi, ongorulenbutce };
}

const rows = [
  createData(1, 'Proje 1', 'Hibe Kurumu A', '2023-01-01', '2023-12-31', 50000),
  createData(2, 'Proje 2', 'Hibe Kurumu B', '2023-02-15', '2023-11-30', 75000),
  createData(3, 'Proje 3', 'Hibe Kurumu C', '2023-03-10', '2023-10-15', 60000),
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

  const visibleRows = useMemo(
    () => {
      const filteredRows = rows.filter(row =>
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
    },
    [order, orderBy, page, rowsPerPage, searchText]
  );
  return (
    <Box sx={{ width: "100%" }} className="tables">
      <Paper sx={{ width: "100%", mb: 2 }}>
        <div className="flextbls">
        <Toolbar style={{paddingLeft:'0px', marginLeft:'0px',    float: 'left'}}>
      <h2 className="titlefirst">Son eklenen projeler</h2>
        </Toolbar>
      <Toolbar className="tablesearch"  >
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
                  sortDirection={orderBy === "projeadi" ? order : false}
                >
                  <TableSortLabel
                    active={orderBy === "projeadi"}
                    direction={orderBy === "projeadi" ? order : "asc"}
                    onClick={() => handleRequestSort("projeadi")}
                  >
                    Proje No
                  </TableSortLabel>
                </TableCell>
                <TableCell align="right">
                  <TableSortLabel
                    active={orderBy === "projeadi"}
                    direction={orderBy === "projeadi" ? order : "asc"}
                    onClick={() => handleRequestSort("projeadi")}
                  >
                    Proje Adı
                  </TableSortLabel>
                </TableCell>
                <TableCell align="right">
                  <TableSortLabel
                    active={orderBy === "hibealinankurum"}
                    direction={orderBy === "hibealinankurum" ? order : "asc"}
                    onClick={() => handleRequestSort("hibealinankurum")}
                  >
                    Hibe Alınan Kurum
                  </TableSortLabel>
                </TableCell>

                <TableCell align="right">
                  <TableSortLabel
                    active={orderBy === "acilistarih"}
                    direction={orderBy === "acilistarih" ? order : "asc"}
                    onClick={() => handleRequestSort("acilistarih")}
                  >
                    Açılış Tarihi
                  </TableSortLabel>
                </TableCell>
                <TableCell align="right">
                  <TableSortLabel
                    active={orderBy === "kapanistarihi"}
                    direction={orderBy === "kapanistarihi" ? order : "asc"}
                    onClick={() => handleRequestSort("kapanistarihi")}
                  >
                    Kapanış Tarihi
                  </TableSortLabel>
                </TableCell>
                <TableCell align="right">
                  <TableSortLabel
                    active={orderBy === "ongorulenbutce"}
                    direction={orderBy === "ongorulenbutce" ? order : "asc"}
                    onClick={() => handleRequestSort("ongorulenbutce")}
                  >
                    Öngörülen Bütçe
                  </TableSortLabel>
                </TableCell>
                <TableCell align="right">
                  <TableSortLabel> </TableSortLabel>
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
                      {row.id}
                    </TableCell>
                    <TableCell align="right">{row.projeadi}</TableCell>
                    <TableCell align="right">{row.hibealinankurum}</TableCell>
                    <TableCell align="right">{row.acilistarih}</TableCell>
                    <TableCell align="right">{row.kapanistarihi}</TableCell>
                    <TableCell align="right">{row.ongorulenbutce}</TableCell>
                    <TableCell align="right">  {/* Düzenle button */}
                      <IconButton
                      className="editButton"
                        aria-label="düzenle"
                        onClick={(event) => handleEditClick(event, row.id)}
                      >
                    
                        Düzenle
                      </IconButton>
                   
                      <IconButton
                      className="deleteButton"
                        aria-label="sil"
                        onClick={(event) => handleDeleteClick(event, row.id)}
                      >
                   
                        Sil
                      </IconButton></TableCell>

                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
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