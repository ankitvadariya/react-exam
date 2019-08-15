import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { compose } from "redux";
import { connect } from "react-redux";
import { Document, Page } from "react-pdf";
import { selectDocument } from "../../actions";

const styles = theme => ({
    pdfPreview: {
        width: "100%",
        textAlign: "center"
    }
});
class DocumentPreview extends Component {
    constructor(props) {
        super(props);

        this.state = {
            numPages: null,
            pageNumber: 1
        };
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    };

    render() {
        const { classes } = this.props;

        if (this.props.selected_document) {
            return (
                <Grid
                    direction="column"
                    alignItems="center"
                    justify="center"
                    className={classes.pdfPreview}
                >
                    <Document
                        file={this.props.selected_document.file_url}
                        onLoadSuccess={this.onDocumentLoadSuccess}
                    >
                        <p>
                            {Array.from(
                                new Array(this.state.numPages),
                                (el, index) => (
                                    <Page
                                        width={800}
                                        key={`page_${index + 1}`}
                                        pageNumber={index + 1}
                                    />
                                )
                            )}
                        </p>
                    </Document>
                </Grid>
            );
        } else {
            return (
                <Grid
                    direction="column"
                    alignItems="center"
                    justify="center"
                    className={classes.pdfPreview}
                >
                    <div>Select or Upload</div>
                </Grid>
            );
        }
    }
}

const mapStateToProps = ({ selected_document }) => {
    return {
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
)(DocumentPreview);
