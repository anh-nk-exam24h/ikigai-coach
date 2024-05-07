import Modal from 'react-modal';

const ModalComponent = ({video, setIsOpen, isOpen}) => {

 

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '80%', // Responsive width
            maxWidth: 'fit-content' // Max width
          }
        }}
      >
        <video src={video} controls autoPlay />
      </Modal>
    </div>
  );
};

export default ModalComponent;
