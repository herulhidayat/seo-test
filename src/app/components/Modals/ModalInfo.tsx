import { IModalData } from '@app/interface/components/modal.interface'
import { setFormStepSurat } from '@app/store/reducers/app'
import { DFlex } from '@app/styled/flex.styled'
import { DescriptionInfo } from '@app/styled/typography.styled'
import React, { FC, useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

type Props = {
  modalProps: IModalData
  onHide?: any
  children?: any
  ids?: string
  declineSubmited?: boolean
}

const ModalInfo: FC<Props> = ({ modalProps, onHide, children, ids = 'id', declineSubmited = true }) => {
  const dispatch = useDispatch()
  let [searchParams, setSearchParams] = useSearchParams()
  const { callbackForm } = useSelector((state: any) => state.ui)

  const id = searchParams.get(ids)

  const [modal, setModal] = useState<IModalData>({
    show: id ? true : false,
    approved: false,
    size: modalProps?.size || 'sm',
    icon: '',
    title: '',
    textApproved: 'Yes',
    classApproved: 'primary',
    textDecline: 'No',
    scrollable: false,
  })

  useEffect(() => {
    setModal({ ...modal, ...modalProps })
  }, [modalProps])

  const modalDecline = () => {
    searchParams.delete(ids)
    setSearchParams(searchParams)
    setModal({ ...modal, show: false })
    dispatch(setFormStepSurat(0))
    if (onHide) onHide(false)
  }

  useEffect(() => {
    if (id) {
      setModal({ ...modal, show: true })
    }
    // else {
    //   setModal({ ...modal, show: false });
    // }
  }, [id])

  useEffect(() => {
    if (callbackForm && declineSubmited) {
      // || (modal?.show==false) && searchParams.get(ids)
      modalDecline()
    }
  }, [callbackForm])

  useEffect(() => {
    if (modal?.show == false && searchParams.get(ids)) {
      // || (modal?.show==false) && searchParams.get(ids)
      modalDecline()
    }
  }, [modal?.show])

  return (
    <Modal centered backdrop="static" keyboard={false} size={modal?.size || 'lg'} show={modal?.show} onHide={modalDecline} scrollable={modal?.scrollable}>
      <Modal.Header className="pb-0" closeButton>
        <Modal.Title>&nbsp;</Modal.Title>
      </Modal.Header>
      <Modal.Body className="py-0">
        <DFlex>
          <span>{modal?.icon}</span>
          <div>
            <h4 className="modal-title fw-bold lh-sm">
              {modalProps?.prefixTitle && <>{id ? 'Ubah ' : 'Tambah '}</>}
              {modal?.title}
            </h4>
            <DescriptionInfo className="text-secondary fw-light">{modal?.description}</DescriptionInfo>
          </div>
        </DFlex>
      </Modal.Body>
      {children}
    </Modal>
  )
}

export default ModalInfo
