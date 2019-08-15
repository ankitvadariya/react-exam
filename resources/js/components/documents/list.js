import React, { Component } from "react";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { compose } from "redux";
import { connect } from "react-redux";
import { selectDocument } from "../../actions";

const styles = theme => ({
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)"
    },
    title: {
        fontSize: 14
    },
    sidebar: {
        padding: "10px"
    },
    activeCard: {
        borderLeft: "5px solid #4077E4",
        background: "#fff !important",
        boxShadow:
            "0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12) !important"
    },
    card: {
        borderRadius: "2px",
        marginBottom: "5px",
        cursor: "pointer",
        background: "none",
        boxShadow: "none "
    },
    cardTitle: {
        fontSize: "18px",
        lineHeight: "17px",
        fontWeight: "bold",
        color: "#394166"
    },
    cardBody: {
        fontSize: "14px",
        lineHeight: "17px",
        color: "#394166",
        marginTop: "14px"
    }
});

class DocumentList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: ""
        };
    }
    loadDocument(document) {
        this.props.selectDocument(document);
    }

    render() {
        const { classes, documents } = this.props;

        console.log();
        return (
            <div className={classes.sidebar}>
                {documents.map((document, i) => {
                    return (
                        <Card
                            onClick={() => {
                                this.loadDocument(document);
                            }}
                            key={i}
                            className={clsx(
                                classes.card,
                                this.props.selected_document &&
                                    this.props.selected_document.id ==
                                        document.id &&
                                    classes.activeCard
                            )}
                        >
                            <CardContent>
                                <Typography
                                    component="h1"
                                    variant="h6"
                                    noWrap
                                    className={classes.cardTitle}
                                >
                                    {document.file_name}
                                </Typography>
                                <Typography className={classes.cardBody}>
                                    {document.users}
                                </Typography>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
        );
    }
}

const mapStateToProps = ({ documents, loading, selected_document }) => {
    return {
        documents,
        loading,
        selected_document
    };
};

export default compose(
    withStyles(styles),
    connect(
        mapStateToProps,
        {
            selectDocument
        }
    )
)(DocumentList);
