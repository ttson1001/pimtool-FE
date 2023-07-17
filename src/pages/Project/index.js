import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Button, Container, MenuItem, TextField } from "@mui/material";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function Project() {
  return (
    <>
      <Container fixed>
        <h2>New Project</h2>
        <hr />
        <Grid container style={{ padding: "20px" }} spacing={2}>
          <Grid
            xs={2}
            container
            justify="center"
            alignItems="center"
            style={{ padding: "20px" }}
          >
            <label>Project number *</label>
          </Grid>
          <Grid xs={3.2}>
            <TextField size="small" fullWidth id="fullWidth" />
          </Grid>
          <Grid xs={6}></Grid>
          <Grid
            xs={2}
            container
            justify="center"
            alignItems="center"
            style={{ padding: "20px" }}
          >
            <label>Project name *</label>
          </Grid>
          <Grid xs={9}>
            <TextField size="small" fullWidth id="fullWidth" />
          </Grid>
          <Grid
            xs={2}
            container
            justify="center"
            alignItems="center"
            style={{ padding: "20px" }}
          >
            <label>Customer *</label>
          </Grid>
          <Grid xs={9}>
            <TextField size="small" fullWidth id="fullWidth" />
          </Grid>
          <Grid
            xs={2}
            container
            justify="center"
            alignItems="center"
            style={{ padding: "20px" }}
          >
            <label>Group *</label>
          </Grid>
          <Grid xs={3.2}>
            <TextField size="small" id="select" value="20" select fullWidth>
              <MenuItem value="10">Ten</MenuItem>
              <MenuItem value="20">Twenty</MenuItem>
            </TextField>
          </Grid>
          <Grid xs={6}></Grid>
          <Grid
            xs={2}
            container
            justify="center"
            alignItems="center"
            style={{ padding: "20px" }}
          >
            <label>Members </label>
          </Grid>
          <Grid xs={9}>
            <TextField size="small" fullWidth id="fullWidth" />
          </Grid>
          <Grid
            xs={2}
            container
            justify="center"
            alignItems="center"
            style={{ padding: "20px" }}
          >
            <label>Status *</label>
          </Grid>
          <Grid xs={3.2}>
            <TextField size="small" id="select" value="20" select fullWidth>
              <MenuItem value="10">Ten</MenuItem>
              <MenuItem value="20">Twenty</MenuItem>
            </TextField>
          </Grid>
          <Grid xs={6}></Grid>
          <Grid
            xs={2}
            container
            justify="center"
            alignItems="center"
            style={{ padding: "20px" }}
          >
            <label>Start date *</label>
          </Grid>
          <Grid xs={4}>
            <BasicDatePicker />
          </Grid>
          <Grid
            xs={2}
            container
            justify="center"
            alignItems="center"
            style={{ padding: "20px" }}
          >
            <label>End date</label>
          </Grid>
          <Grid xs={4}>
            <BasicDatePicker />
          </Grid>
        </Grid>
        <hr />
        <Grid container style={{ padding: "20px" }} spacing={2}>
          <Grid xs={2}></Grid>
          <Grid xs={3}></Grid>
          <Grid xs={3}><Button fullWidth variant="outlined">Outlined</Button></Grid>
          <Grid xs={3}><Button fullWidth variant="contained">Contained</Button></Grid>
        </Grid>
      </Container>
    </>
  );
}

export function BasicDatePicker() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker />
      </DemoContainer>
    </LocalizationProvider>
  );
}

export default Project;
