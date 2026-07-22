import React from 'react';
import { HiOutlineArrowSmRight } from "react-icons/hi";

const ProjectItems = ({item}) => {
  return (
    <a href={item.URL} target="_blank" rel="noreferrer">
        <div className="project__card" key={item.id}>
            <img className="project__img" src={item.image} alt="" />
            <h3 className="project__title">{item.title}</h3>
            <a href={item.URL} target="_blank" className="project__button">
                Check the Web Out <HiOutlineArrowSmRight className="project__button-icon" />
            </a>
        </div>
        </a>
    );
}

export default ProjectItems;