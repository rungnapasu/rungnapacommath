import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  Button,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  TextField,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { getB2s } from "../../functions";

const useStyles = makeStyles((theme) => ({
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },

  card: {
    marginLeft: theme.spacing(10),
    marginRight: theme.spacing(10),
    marginTop: theme.spacing(10),
  },
}));

export default function Page() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [bit2string, setBit2string] = useState(11011);
  const [result, setResult] = useState("");
  const generate = () => {
    getB2s(bit2string).then((res) => {
      setResult(res);
    });
  };

  const back = () => {
    navigate("/rungnapacommath");
  };

  return (
    <Typography align="center">
      <Card className={classes.card}>
        <CardHeader
          title="บทที่ 1"
          titleTypographyProps={{ align: "center" }}
          subheaderTypographyProps={{ align: "center" }}
          className={classes.cardHeader}
        />
        <CardContent>
          <Grid container spacing={3} alignItems="flex-end">
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                id="outlined-basic"
                value={bit2string}
                label="กรอกเลขฐานสอง"
                variant="outlined"
                onChange={(e) => setBit2string(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="ผลลัพธ์"
                    value={result===""?"":result}
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                />
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Grid container spacing={5} alignItems="flex-end">
            <Grid item xs={12} sm={6} md={6}>
              <Button
                onClick={generate}
                fullWidth
                variant="contained"
                color="secondary"
              >
                คำนวน
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Button
                onClick={back}
                fullWidth
                variant="outlined"
                color="secondary"
              >
                กลับ
              </Button>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </Typography>
  );
}
