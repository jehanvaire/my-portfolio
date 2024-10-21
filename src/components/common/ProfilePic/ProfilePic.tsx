import React from 'react';
import { motion } from 'framer-motion';
import moi from '../../../assets/moi.jpg';
import './ProfilePic.css'

const ProfilePic: React.FC = () => {
    return (
        <motion.div
        className="profile-pic-container"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.15 }}
      >
        <img
          src={moi}
          alt="Adrien BONY"
          className="profile-pic"
        />
      </motion.div>
    )
}

export default ProfilePic;