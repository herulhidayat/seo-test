import React, { FC, useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';

import styled from 'styled-components';
const Desc = styled.p`
  line-height: 1.5;
`;

type Props = {
  modalConfirmProps: any;
  callbackModalConfirm: any;
};

const ModalConfirm2: FC<Props> = ({
  modalConfirmProps,
  callbackModalConfirm,
}) => {
  const [clicked, setClicked] = useState<boolean>(false);
  const [modalConfirm, setModalConfirm] = useState<any>({
    show: false,
    approved: false,
    size: 'sm',
    icon: 'far fa-trash',
    description: 'Delete this data',
    subDescriotion: `This action can't be undone`,
    textApproved: 'Yes',
    classApproved: 'primary',
    textDecline: 'No',
  });

  useEffect(() => {
    if (modalConfirmProps?.show) setClicked(false);
    setModalConfirm({ ...modalConfirmProps });
  }, [modalConfirmProps]);

  const modalConfirmDecline = () => {
    setModalConfirm({ ...modalConfirm, show: false });
    callbackModalConfirm(false);
  };

  const modalConfirmAccept = () => {
    setClicked(true);
    setModalConfirm({
      ...modalConfirm,
      show: false,
      approved: true,
    });
    callbackModalConfirm(true);
  };

  return (
    <Modal
      className='confirm-delete'
      centered
      backdrop='static'
      keyboard={false}
      size={modalConfirm.size || 'sm'}
      show={modalConfirm.show}
      onHide={modalConfirmDecline}
    >
      <Modal.Body className='p-4'>
        <h4 className='mt-2 mb-3 text-center font-weight-600'>
          {modalConfirm.description}
        </h4>
        {modalConfirm.subDescriotion && (
          <Desc
            className='text-muted'
            dangerouslySetInnerHTML={{
              __html: modalConfirm.subDescriotion,
            }}
          ></Desc>
        )}
        <div className='d-flex justify-content-end mt-4'>
          <button className='btn' onClick={modalConfirmDecline}>
            {modalConfirm.textDecline || 'No'}
          </button>
          <button
            className={`btn btn-${modalConfirm.classApproved} ms-2 text-white`}
            onClick={modalConfirmAccept}
            disabled={clicked}
          >
            {modalConfirm.textApproved || 'Yes'}
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalConfirm2;
