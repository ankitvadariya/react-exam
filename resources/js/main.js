import React, { Component } from "react";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import DocumentList from "./components/documents/list";
import DocumentPreview from "./components/documents/preview";
import { compose } from "redux";
import { connect } from "react-redux";
import { getAllDocuments, uploadDocument } from "./actions";

const drawerWidth = 300;

const styles = theme => ({
    root: {
        display: "flex"
    },
    toolbar: {
        paddingRight: 24 // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "0 8px",
        ...theme.mixins.toolbar
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    menuButton: {
        marginRight: 36
    },
    menuButtonHidden: {
        display: "none"
    },
    title: {
        flexGrow: 1,
        fontWeight: "bold",
        fontSize: "20px"
    },
    titleFiles: {
        flexGrow: 1,
        fontWeight: "bold",
        letterSpacing: "2px",
        color: "#394166",
        textTransform: "uppercase"
    },
    titleUpload: {
        fontSize: "18px",
        color: "#9CA0B2"
    },
    drawerPaper: {
        position: "relative",
        whiteSpace: "nowrap",
        background: "#F3F3F3",
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    drawerPaperClose: {
        overflowX: "hidden",
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing(9)
        }
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: "100vh",
        overflow: "auto"
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4)
    },
    paper: {
        padding: theme.spacing(2),
        display: "flex",
        overflow: "auto",
        flexDirection: "column"
    },
    fixedHeight: {
        height: 240
    }
});

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: ""
        };
    }

    componentDidMount() {
        this.props.getAllDocuments();
    }

    onChangeHandler = event => {
        // console.log(event.target.files[0]);
        this.props.uploadDocument(event.target.files[0]);
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    position="absolute"
                    className={clsx(
                        classes.appBar,
                        open && classes.appBarShift
                    )}
                >
                    <Toolbar className={classes.toolbar}>
                        <Typography
                            component="h1"
                            variant="h5"
                            color="inherit"
                            noWrap
                            className={classes.title}
                        >
                            {this.props.selected_document &&
                            this.props.selected_document.file_name
                                ? this.props.selected_document.file_name
                                : "No Document selected"}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    color="secondary"
                    classes={{
                        paper: clsx(
                            classes.drawerPaper,
                            !open && classes.drawerPaperClose
                        )
                    }}
                    open={true}
                >
                    <div className={classes.toolbarIcon}>
                        <Typography
                            component="h1"
                            variant="h6"
                            noWrap
                            className={classes.titleFiles}
                        >
                            FILES
                        </Typography>
                        <div   className={classes.titleUpload}>Upload</div>
                        <div class="fileupload">
                            <IconButton>
                                <input
                                    type="file"
                                    onChange={this.onChangeHandler}
                                />
                                <img src="/images/upload.svg" />
                            </IconButton>
                        </div>
                    </div>
                    <Divider />
                    <DocumentList documents={this.props.documents} />
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    <Container className={classes.container}>
                        <DocumentPreview />
                    </Container>
                </main>
            </div>
        );
    }
}

const mapStateToProps = ({ documents, selected_document, loading }) => {
    return {
        documents,
        selected_document,
        loading
    };
};

export default compose(
    withStyles(styles),
    connect(
        mapStateToProps,
        {
            getAllDocuments,
            uploadDocument
        }
    )
)(App);
