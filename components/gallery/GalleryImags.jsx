import { useEffect, useState } from "react";
import { gallery } from "../../pages/api/server";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { FaGreaterThan, FaLessThan } from "react-icons/fa";

const GalleryImags = () => {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '80%',
    '&:focus': {
      outline: 'none',
    },
    bgcolor: 'background.paper',
    overflowY: 'auto',
    boxShadow: 24,
  };

  const [data, setData] = useState([]);
  const [transitioning, setTransitioning] = useState(false);
  const [modal, setModal] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);
  const path = 'https://server.altitudesports.in/storage';

  const handleImgClick = (index) => {
    setImgIndex(index);
    setModal(true);
  };

  const handleNext = () => {
    setTransitioning(true);
    setTimeout(() => {
      setTransitioning(false);
      setImgIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 300); // Adjust timing as needed for the transition duration
  };

  const handlePrev = () => {
    setTransitioning(true);
    setTimeout(() => {
      setTransitioning(false);
      setImgIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    }, 300);
  };


  useEffect(() => {
    const fetchData = async () => {
      const result = await gallery();
      if (result.gallery) {
        setData(result.gallery.find((item) => item.title === 'first').images.map((image) => image.img));
      }
    };
    fetchData();
  }, []);

  return (
    <div className="section gallery wow fadeInUp" data-wow-duration="0.4s">
      <div className="container">
        <div className="grid md-grid-cols-2 lg-grid-cols-3 gap-5">
          {data.map((image, index) => (
            <div key={index} onClick={() => handleImgClick(index)} className="d-flex justify-content-center align-items-center mx-auto gallery__thumb-single h-100">
              <img src={`${path}/${image}`} className="d-flex justify-content-center align-items-center mx-auto p-2" style={{ height: '300px', width: 'auto' }} alt={`Image ${index}`} />
            </div>
          ))}
        </div>
      </div>
      <Modal
        open={modal}
        onClose={() => setModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <FaGreaterThan onClick={handleNext} className="p-2 fs-1 rounded-3" style={{ cursor: 'pointer', backgroundColor: '#0e7a31', color: 'white', position: 'absolute', top: '50%', right: '10px' }} />
          <FaLessThan onClick={handlePrev} className="p-2 fs-1 rounded-3" style={{ cursor: 'pointer', backgroundColor: '#0e7a31', color: 'white', position: 'absolute', top: '50%', left: '10px' }} />
          <Box sx={{
              ...style,
              transition: transitioning ? 'transform 0.3s ease-out' : 'none',
              transform: `translate(-50%, -50%) ${transitioning ? 'scale(0.9)' : 'scale(1)'}`,
            }}>
            <img src={`${path}/${data[imgIndex]}`} style={{ maxHeight: '90vh', width: 'auto' }} alt={`Image ${imgIndex}`} />
          </Box>
        </div>
      </Modal>
    </div>
  );
};

export default GalleryImags;
