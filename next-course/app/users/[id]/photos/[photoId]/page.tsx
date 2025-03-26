import React from "react";

interface Props {
  params: { photoId: number };
}

const PhotosDetailPage = ({ params: { photoId } }: Props) => {
  return <div>PhotosDetailPage {photoId}</div>;
};

export default PhotosDetailPage;
