import React from "react";
import { makeStyles, createStyles } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles((them) => {
  return createStyles({
    bar: {
      width: "100%",
      "& > * + *": {
        marginTop: them.spacing(2),
      },
    },
  });
});

export default () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.bar}>
        <LinearProgress />
      </div>
    </div>
  );
};
