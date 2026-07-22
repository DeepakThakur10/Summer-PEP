import React, { useState } from "react";
import "./qualification.css";
import {
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
  HiOutlineCalendar,
} from "react-icons/hi";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button button--flex qualification__active"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <HiOutlineAcademicCap className="qualification__icon" />
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button button--flex qualification__active"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <HiOutlineBriefcase className="qualification__icon" />
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          {/* Education */}
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">B.Tech - CSE</h3>
                <span className="qualification__subtitle">
                  Lovely Professional University
                </span>
                <div className="qualification__calendar">
                  <HiOutlineCalendar className="qualification__calendar-icon" />
                  2023 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Intermediate</h3>
                <span className="qualification__subtitle">
                  M.L.S.M College, Darbhanga
                </span>
                <div className="qualification__calendar">
                  <HiOutlineCalendar className="qualification__calendar-icon" />
                  2022 - 2023
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Matriculation</h3>
                <span className="qualification__subtitle">
                  B.M.H.S, Simri, Darbhanga
                </span>
                <div className="qualification__calendar">
                  <HiOutlineCalendar className="qualification__calendar-icon" />
                  2020 - 2021
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Android Developer Pro</h3>
                <span className="qualification__subtitle">
                  LPU - Summer Training
                </span>
                <div className="qualification__calendar">
                  <HiOutlineCalendar className="qualification__calendar-icon" />
                  Jun 2025 - Jul 2025
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Oracle Cloud Certified</h3>
                <span className="qualification__subtitle">
                  Data Science Professional
                </span>
                <div className="qualification__calendar">
                  <HiOutlineCalendar className="qualification__calendar-icon" />
                  Oct 2025
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">SQL (Advanced)</h3>
                <span className="qualification__subtitle">
                  HackerRank
                </span>
                <div className="qualification__calendar">
                  <HiOutlineCalendar className="qualification__calendar-icon" />
                  Sep 2025
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">150+ DSA Problems</h3>
                <span className="qualification__subtitle">
                  LeetCode
                </span>
                <div className="qualification__calendar">
                  <HiOutlineCalendar className="qualification__calendar-icon" />
                  Nov 2025
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
