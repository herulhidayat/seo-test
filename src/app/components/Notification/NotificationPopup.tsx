import React from 'react';
import { connect } from 'react-redux';
import { Alert, Toast } from 'react-bootstrap';
import { removeNotification } from '@app/store/notification/notification.action';
import { isArray, reverse } from 'lodash';

import { timeFormat } from '@app/helper/time.helper';

/**
 * NOTIFIACTION USING REDUX
 * @param prop
 * @returns
 */

export const NotificationPopup = ({
  notifications,
  removeNotification,
}: any) => {
  const stateIcon: any = {
    success: 'text-success fas fa-check-circle',
    warning: 'text-warning far fa-exclamation-triangle',
    error: 'text-danger fal fa-times-circle',
    danger: 'text-danger fal fa-times-circle',
  }; 
  return (
    <>
      <div
        aria-live='polite'
        aria-atomic='true'
        style={{
          display: notifications?.length ? 'block' : 'none',
          position: 'fixed',
          // minHeight: '100px',
          right: '23px',
          top: '70px',
          width: '350px',
          zIndex: 9999,
        }}
      >
        {reverse(notifications)?.map((notif: any, index: number) => (
          <Toast
            className='mb-2'
            onClose={() => removeNotification(notif.id)}
            show={!notif.read}
            delay={11500}
            key={index}
            style={{
              position: 'relative',
            }}
            autohide
          >
            <Toast.Header className='justify-content-between py-2'>
              <div>
                {notif.state ? (
                  <i
                    className={`${stateIcon[notif.state]} text-${
                      notif.state
                    } me-0`}
                  ></i>
                ) : (
                  <i className='fad fa-info-circle me-2'></i>
                )}
                <strong className='mr-auto ms-1'>{notif?.title}</strong>
                <small className='ms-2'>{timeFormat(notif?.time)}</small>
              </div>
            </Toast.Header>
            <Toast.Body style={{ background: 'var(--white)' }}>
              {isArray(notif?.message) ? (
                <>
                  {notif?.message.map((msg: any, index: number) => (
                    <Alert className='mb-1 text-capitalize px-2' variant={notif?.type} key={index}>
                      {msg}
                    </Alert>
                  ))}
                </>
              ) : (
                <Alert className='mb-0' variant={notif?.type}>
                  {notif?.message}
                </Alert>
              )}
            </Toast.Body>
          </Toast>
        ))}
      </div>
    </>
  );
};

const mapStateToProps = (state: any) => ({
  notifications: state.notifications,
});

const mapDispatchToProps = (dispatch: (arg0: any) => any) => ({
  removeNotification: (payload: any) => dispatch(removeNotification(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NotificationPopup);
