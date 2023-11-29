import { IModalData } from '@app/interface/components/modal.interface'
import { setFormStepSurat } from '@app/store/reducers/app'
import { setShowModalBlank, setTriggerAddBlock } from '@app/store/reducers/ui'
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

const ModalBlank: FC<Props> = ({ modalProps, onHide, children }) => {
  const dispatch = useDispatch()
  const { showModalBlank, triggerAddBlock } = useSelector((state: any) => state.editor)

  let [searchParams, setSearchParams] = useSearchParams()

  const [modal, setModal] = useState<IModalData>({
    show: false,
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
    if (triggerAddBlock) {
      dispatch(setTriggerAddBlock(null))
    }
    setSearchParams(searchParams)
    setModal({ ...modal, show: false })
    dispatch(setFormStepSurat(0))
    if (onHide) onHide(false)
   
  }

  useEffect(() => {
    if (showModalBlank === false) {
      modalDecline()
      dispatch(setShowModalBlank(false))
    }
  }, [showModalBlank])

  useEffect(() => {
    if (modal?.show) {
      dispatch(setShowModalBlank(true))
    }
  }, [modal?.show])

  return (
    <Modal centered keyboard={false} size={modal?.size || 'lg'} show={modal?.show} onHide={modalDecline} scrollable={modal?.scrollable}>
      {children}
    </Modal>
  )
}

export default ModalBlank
