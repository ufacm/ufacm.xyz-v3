import React from 'react';
import {Button, Form, Header, Input, List, Modal, Segment} from 'semantic-ui-react';

const ERR_TIMEOUT = 2000;
const SUCCESS_TIMEOUT = 750;

export default class UserInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            uploadModalOpen: false,
            removeModalOpen: false,
            loadingResume: false,
            finishedLoadingResume: false,
            failedLoadingResume: false,
            removingResume: false,
            finishedRemovingResume: false,
            failedRemovingResume: false,
            formData: {
                resume: null,
            },
        };

        this.openRemoveModal = this.openRemoveModal.bind(this);
        this.closeRemoveModal = this.closeRemoveModal.bind(this);
        this.openUploadModal= this.openUploadModal.bind(this);
        this.closeUploadModal = this.closeUploadModal.bind(this);
        this.removeResume = this.removeResume.bind(this);
        this.onResumeFormSubmit = this.onResumeFormSubmit.bind(this);
        this.onResumeChange = this.onResumeChange.bind(this);
    }

    onResumeChange(e) {
        this.setState({formData: {resume: e.target.files[0]}});
    }

    onResumeFormSubmit(e) {
        e.preventDefault();

        if (!this.state.formData.resume) return;

        this.setState({loadingResume: true, 
            failedLoadingResume: false, 
            finishedLoadingResume: false
        });
        
        this.props.onResumeFormSubmit(this.state.formData.resume)
        .then((success) => {
            this.setState({loadingResume: false, 
                finishedLoadingResume: true, 
                failedLoadingResume: false,
                formData: {
                    resume: null,
                },
            });
            window.setTimeout(this.closeUploadModal, SUCCESS_TIMEOUT);
        }, (error) => {
            this.setState({loadingResume: false, 
                finishedLoadingResume: false,
                failedLoadingResume: true,
            });

            window.setTimeout(() => {
                this.setState({
                    failedLoadingResume: false,
                });
            }, ERR_TIMEOUT);
        });
    }

    removeResume() {
        this.setState({removingResume: true,
            failedRemovingResume: false,
            finishedRemovingResume: false
        });
        this.props.onResumeRemove().then(
            (success) => {
                this.setState({removingResume: false,
                    failedRemovingResume: false,
                    finishedRemovingResume: true,
                });
                window.setTimeout(this.closeRemoveModal, SUCCESS_TIMEOUT);
        }, (error) => {
            this.setState({removingResume: false,
                failedRemovingResume: true,
                finishedRemovingResume: false,
            });

            window.setTimeout(() => {
                this.setState({
                    failedRemovingResume: false,
                });
            }, ERR_TIMEOUT);
        }
        );
    }
    
    openRemoveModal() {
        this.setState({removeModalOpen: true});
    }

    openUploadModal() {
        this.setState({uploadModalOpen: true});
    }

    closeRemoveModal() {
        this.setState({removeModalOpen: false, 
            finishedRemovingResume: false,
            failedRemovingResume: false,
        });
    }

    closeUploadModal() {
        this.setState({uploadModalOpen: false, 
            finishedLoadingResume: false, 
            failedLoadingResume: false,
        });
    }
    render() {
        
        let removeModalText = this.state.finishedRemovingResume? "Removed!" : "Remove It";
        let removeModalIcon = this.state.finishedRemovingResume? "check" : "trash"
        if (this.state.failedRemovingResume) {
            removeModalText = "Failed!";
            removeModalIcon = "exclamation circle";
        }
        
        let removeResumeButton = '';
        if (this.props.data.resume) {
            removeResumeButton = (
                <Button onClick={this.openRemoveModal} 
                    content="Remove Resume" 
                    icon="trash" 
                labelPosition="left" />
            );
        }

        let uploadModalText = this.state.finishedLoadingResume? "Got It!" : "Upload";
        let uploadModalIcon = this.state.finishedLoadingResume? "check" : "arrow circle up";
        if (this.state.failedLoadingResume) {
            uploadModalText = "Failed!";
            uploadModalIcon = "exclamation circle";
        }



        return (
            <div>
            <List relaxed='very'>
                <List.Item>
                    <List.Icon name='user' />
                    <List.Content >{this.props.data.name}</List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name='mail' />
                    <List.Content >{this.props.data.email}</List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name='file text' />
                    <List.Content>{this.props.data.resume}</List.Content>
                </List.Item>
            </List>
            <br/>
            <Modal size="tiny" trigger={<Button onClick={this.openUploadModal} content="Upload Resume" icon="file text" labelPosition="left" />}
                open={this.state.uploadModalOpen}
                onClose={this.closeUploadModal} >
                <Segment padded>
                    <Header>Upload Resume</Header>
                    <Form onSubmit={this.onResumeFormSubmit} id="resume-form">
                        <Form.Input onChange={this.onResumeChange} type="file" 
                            name="resume" icon="file text" iconPosition="left" 
                        fluid />
                        <Button positive={this.state.finishedLoadingResume} 
                            loading={this.state.loadingResume} 
                            content={uploadModalText}
                            primary={!this.state.failedLoadingResume} 
                        icon={uploadModalIcon} />
                    </Form>
                </Segment>
            </Modal>
            <Modal size="tiny" basic 
                    trigger={removeResumeButton}
                    open={this.state.removeModalOpen}
                    onClose={this.closeRemoveModal} >
                    <Modal.Content>Do you really want to remove your resume?</Modal.Content>
                    <Modal.Actions>
                        <Button onClick={this.closeRemoveModal}
                            inverted content="No" icon="left arrow" 
                        basic />
                        <Button onClick={this.removeResume}
                            negative={!this.state.failedRemovingResume}
                            loading={this.state.removingResume}
                            content={removeModalText}
                        icon={removeModalIcon} />
                    </Modal.Actions>
                </Modal>
            </div>
        );
    }
}
