import React from 'react';
import { Modal } from 'carbon-components-react';

function ModalComponent(props) {
    return (
        <Modal
            modalHeading={'My heading'}
            onRequestClose={props.onRequestClose}
            onRequestSubmit={props.onRequestSubmit}
            open={props.open}
            primaryButtonText={'Ready'}
            secondaryButtonText={'Cancel'}
            aria-label={'my label'}
            shouldSubmitOnEnter={false}>
            <p>
                This is my test modal to show the problem with Jest and mount.
            </p>
        </Modal>
    );
}

export default ModalComponent;
