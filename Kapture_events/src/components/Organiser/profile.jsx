import React from 'react';

const ProfilePics = ({ profiles }) => {
  return (
    <div className="flex items-center">
     
      {profiles.slice(0, 5).map((profile, index) => (
        <img
          key={index}
          src={profile.picUrl}
          alt=""
          className="w-12 h-12 rounded-full border-2 border-white -ml-3"
        />
      ))}
      {profiles.length > 5 && (
        <div className="w-12 h-12 rounded-full bg-pink-500 text-white text-center flex items-center justify-center -ml-3">
          +{profiles.length - 5}
        </div>
      )}
    </div>
  );
};

export default ProfilePics;