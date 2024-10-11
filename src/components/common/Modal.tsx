import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../ThemeContext';
import '../../styles/common.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  complementaryText?: string;
}

const Modal: React.FC<ModalProps> = ({ 
  isOpen, 
  onClose, 
  title, 
  description, 
  technologies, 
  image,
  complementaryText 
}) => {
  const { theme } = useTheme();

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={`modal-overlay ${theme}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleOverlayClick}
        >
          <motion.div
            className={`modal-content ${theme}`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <motion.div 
              className="modal-image-container"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <img src={image} alt={title} className="modal-image" />
            </motion.div>
            <h2>{title}</h2>
            <p>{description}</p>
            <p className="complementary-text">{complementaryText}</p>
            <div className="modal-technologies">
              {technologies.map(tech => (
                <span key={tech} className="tech-badge">{tech}</span>
              ))}
            </div>
            <button className="modal-close" onClick={onClose}>Close</button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;