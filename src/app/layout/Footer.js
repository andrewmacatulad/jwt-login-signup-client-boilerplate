// // import React, { Component } from "react";
// // import { Paper, withStyles } from "@material-ui/core";

// // const styles = theme => ({
// //   footerPaper: {
// //     // display: "flex",
// //     // minHeight: "100vh",
// //     // flexDirection: "column",
// //     position: "absolute",
// //     left: 0,
// //     bottom: 0,
// //     right: 0
// //   }
// // });

// // class Footer extends Component {
// //   render() {
// //     const { classes } = this.props;
// //     return (
// //       <div className={classes.footerPaper}>
// //         <Paper>
// //           <h1>Footer Ako</h1>
// //         </Paper>
// //       </div>
// //     );
// //   }
// // }

// // export default withStyles(styles)(Footer);

// import React from "react";

// import { makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import Toolbar from "@material-ui/core/Toolbar";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
// import SearchIcon from "@material-ui/icons/Search";
// import MoreIcon from "@material-ui/icons/MoreVert";

// const useStyles = makeStyles(theme => ({
//   appBar: {
//     top: "auto",
//     bottom: 0
//   },
//   grow: {
//     flexGrow: 1
//   },
//   fabButton: {
//     position: "absolute",
//     zIndex: 1,
//     top: -30,
//     left: 0,
//     right: 0,
//     margin: "0 auto"
//   }
// }));

// function Footer() {
//   const classes = useStyles();
//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <AppBar position="fixed" color="primary" className={classes.appBar}>
//         <Toolbar>
//           <IconButton edge="start" color="inherit" aria-label="Open drawer">
//             <MenuIcon />
//           </IconButton>
//           {/* <Fab color="secondary" aria-label="Add" className={classes.fabButton}>
//             <AddIcon />
//           </Fab> */}
//           <div className={classes.grow} />
//           <IconButton color="inherit">
//             <SearchIcon />
//           </IconButton>
//           <IconButton edge="end" color="inherit">
//             <MoreIcon />
//           </IconButton>
//         </Toolbar>
//       </AppBar>
//     </React.Fragment>
//   );
// }

// export default Footer;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const useStyles = makeStyles({
  stickToBottom: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#42a5f5"
  }
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.stickToBottom}
    >
      <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
}
