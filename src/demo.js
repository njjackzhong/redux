import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import GetAppIcon from "@material-ui/icons/GetApp";
import CreateNewFolderOutlinedIcon from "@material-ui/icons/CreateNewFolderOutlined";
import VideoIcon from "@material-ui/icons/VideoLibraryOutlined";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div>
      <VideoIcon />
      <Button
        variant="outlined"
        color="primary"
        className={classes.button}
        startIcon={<CloudUploadIcon />}
      >
        上传文件夹
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        className={classes.button}
        startIcon={<CreateNewFolderOutlinedIcon />}
      >
        新建文件夹
      </Button>
      <Button
        variant="outlined"
        color="default"
        className={classes.button}
        startIcon={<GetAppIcon />}
      >
        下载
      </Button>
    </div>
  );
}
