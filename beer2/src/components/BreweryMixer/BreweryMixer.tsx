import React, { Fragment } from "react";
import './BreweryMixer.css';

export function BreweryMixer(props: any): JSX.Element {
  return (
    <div className='brewery'>
      <svg className="wave-svg" xmlns="http://www.w3.org/2000/svg">
        <symbol id="wave">
          <path d="M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z" />
          <path d="M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z" />
          <path d="M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z" />
          <path d="M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z" />
        </symbol>
      </svg>
      <figure className="c-boiling">
        <svg
          width="615"
          height="400"
          viewBox="0 0 615 400"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g id="boiling-bg" fill="none" fillRule="evenodd">
            <g id="Boiling_assets" transform="translate(0 7)">
              <path
                d="M59.5,265 C64.2,265 68,268.8 68,273.5 L68,307.5 C68,312.2 64.2,316 59.5,316 L59.5,316 C54.8,316 51,312.2 51,307.5 L51,273.5 C51,268.8 54.8,265 59.5,265 L59.5,265 L59.5,265 Z"
                id="Shape"
                stroke="#FFF"
                strokeWidth="6"
                fill="#FFF"
              />
              <path
                d="M555.5,265 C560.2,265 564,268.8 564,273.5 L564,307.5 C564,312.2 560.2,316 555.5,316 L555.5,316 C550.8,316 547,312.2 547,307.5 L547,273.5 C547,268.8 550.8,265 555.5,265 L555.5,265 L555.5,265 Z"
                id="Shape"
                stroke="#FFF"
                strokeWidth="6"
                fill="#FFF"
              />
              <path
                d="M54.6,286 C55.4,286 57,287.8 57,290.5 C57,293.2 55.4,295 54.6,295 L13.9,295 C13.1,295 11.5,293.2 11.5,290.5 C11.5,287.8 13.1,286 13.9,286 L55,286 L54.6,286 Z M54.6,275 L13.9,275 C6.5,275 0.5,281.9 0.5,290.5 C0.5,299.1 6.5,306 13.9,306 L54.6,306 C62,306 68,299.1 68,290.5 C68,281.9 62,275 54.6,275 L54.6,275 L54.6,275 Z"
                id="Shape"
                fill="#FFF"
              />
              <path
                d="M600.4,286 C601.9,286 603.5,287.8 603.5,290.5 C603.5,293.2 601.8,295 600.4,295 L557.5,295 C556,295 554.4,293.2 554.4,290.5 C554.4,287.8 556.1,286 557.5,286 L600,286 L600.4,286 Z M600.4,275 L557.5,275 C549.7,275 543.4,281.9 543.4,290.5 C543.4,299.1 549.7,306 557.5,306 L600.4,306 C608.2,306 614.5,299.1 614.5,290.5 C614.5,281.9 608.2,275 600.4,275 L600.4,275 L600.4,275 Z"
                id="Shape"
                fill="#FFF"
              />
              <g id="Group" transform="translate(67)">
                <path
                  d="M77,382.4 C77,388.2 72.3,393 66.4,393 L59.5,393 C53.7,393 48.9,388.3 48.9,382.4 L48.9,369.5 C48.9,363.7 53.6,358.9 59.5,358.9 L66.4,358.9 C72.2,358.9 77,363.6 77,369.5 L77,382.4 L77,382.4 Z"
                  id="Shape"
                  fill="#FFF"
                />
                <path
                  d="M433,382.4 C433,388.2 428.3,393 422.4,393 L415.5,393 C409.7,393 404.9,388.3 404.9,382.4 L404.9,369.5 C404.9,363.7 409.6,358.9 415.5,358.9 L422.4,358.9 C428.2,358.9 433,363.6 433,369.5 L433,382.4 L433,382.4 Z"
                  id="Shape"
                  fill="#FFF"
                />
                <path
                  d="M479.5,359 L478.9,184 C478.9,184 444.5,31 311.1,31 L168,31 C38.3,31 0.7,184.7 0.7,184.7 L0.9,359 L479.5,359 L479.5,359 Z"
                  id="Shape"
                  stroke="#FFF"
                  strokeWidth="14"
                />
                <path
                  d="M213.1,29.3 L218.3,0 L260.9,0 L267,30.1"
                  id="Shape"
                  stroke="#FFF"
                  strokeWidth="14"
                  fill="#FFF"
                />
              </g>
              <g id="Group" transform="translate(477 8)" stroke="#FFF">
                <circle id="Oval" strokeWidth="5" cx="26.4" cy="19.3" r="19" />
                <path d="M39.9,19.3 L45.2,19.3" id="Shape" strokeWidth="2" />
                <path d="M39.5,15.8 L44.6,14.4" id="Shape" strokeWidth="2" />
                <path d="M38.1,12.5 L42.7,9.8" id="Shape" strokeWidth="2" />
                <path d="M35.9,9.7 L39.7,5.9" id="Shape" strokeWidth="2" />
                <path d="M33.1,7.5 L35.8,2.9" id="Shape" strokeWidth="2" />
                <path d="M29.8,6.1 L31.2,1" id="Shape" strokeWidth="2" />
                <path d="M26.3,5.7 L26.3,0.4" id="Shape" strokeWidth="2" />
                <path d="M22.8,6.1 L21.4,1" id="Shape" strokeWidth="2" />
                <path d="M19.5,7.5 L16.8,2.9" id="Shape" strokeWidth="2" />
                <path d="M16.7,9.7 L12.9,5.9" id="Shape" strokeWidth="2" />
                <path d="M14.5,12.5 L9.9,9.8" id="Shape" strokeWidth="2" />
                <path d="M13.1,15.8 L8,14.4" id="Shape" strokeWidth="2" />
                <path d="M12.7,19.3 L7.3,19.3" id="Shape" strokeWidth="2" />
                <path
                  d="M26.4,41 L26.4,62.3 L0.6,62.3"
                  id="Shape"
                  strokeWidth="5"
                />
              </g>
              <ellipse
                id="Oval"
                fill="#FFF"
                transform="rotate(-33.026 172.881 62.614)"
                cx="172.881"
                cy="62.614"
                rx="32.899"
                ry="17.699"
              />
              <rect
                id="Rectangle-path"
                stroke="#FFF"
                strokeWidth="3"
                fill="#FFF"
                x="240.5"
                y="21.5"
                width="135"
                height="10"
              />
            </g>
          </g>
        </svg>
        <div className="e-steam-top">
          <svg
            width="50"
            height="142"
            viewBox="0 0 80 142"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g id="Page-1" fill="none" fillRule="evenodd">
              <g id="smoke" transform="translate(-1)" fill="#FFF">
                <g id="Page-1">
                  <g id="smoke">
                    <circle
                      id="Oval"
                      opacity="0.314"
                      cx="12.5"
                      cy="110.8"
                      r="6"
                    />
                    <path
                      d="M23.6,111.7 C15.9,108.6 12.2,99.9 15.3,92.2 C18.4,84.5 27.1,80.8 34.8,83.9 C42.5,87 46.2,95.7 43.1,103.4 C40,111 31.3,114.8 23.6,111.7 L23.6,111.7 Z"
                      id="Shape"
                      opacity="0.478"
                    />
                    <circle
                      id="Oval"
                      opacity="0.002"
                      cx="3.7"
                      cy="87.9"
                      r="2.3"
                    />
                    <path
                      d="M19.4,86.3 C14.9,84.5 12.7,79.4 14.5,74.9 C16.3,70.4 21.4,68.2 25.9,70 C30.4,71.8 32.6,76.9 30.8,81.4 C29,85.9 23.9,88.1 19.4,86.3 L19.4,86.3 Z M43.6,81.4 C42.6,81 42.1,79.8 42.5,78.8 C42.9,77.8 44.1,77.3 45.1,77.7 C46.1,78.1 46.6,79.3 46.2,80.3 C45.8,81.3 44.6,81.8 43.6,81.4 L43.6,81.4 Z M41.2,75.8 C32.8,72.4 28.7,62.9 32.1,54.5 C35.5,46.1 45,42 53.4,45.4 C61.8,48.8 65.9,58.3 62.5,66.7 C59.2,75.1 49.7,79.2 41.2,75.8 L41.2,75.8 Z"
                      id="Shape"
                      opacity="0.01"
                    />
                    <path
                      d="M56.6,83.3 C53.5,82.1 52.1,78.6 53.3,75.5 C54.5,72.4 58,71 61.1,72.2 C64.2,73.4 65.6,76.9 64.4,80 C63.2,83 59.7,84.5 56.6,83.3 L56.6,83.3 Z M13.6,107.7 C10.4,106.4 8.9,102.8 10.2,99.7 C11.5,96.5 15.1,95 18.2,96.3 C21.4,97.6 22.9,101.2 21.6,104.3 C20.3,107.4 16.7,108.9 13.6,107.7 L13.6,107.7 Z"
                      id="Shape"
                      opacity="0.024"
                    />
                    <circle
                      id="Oval"
                      opacity="0.045"
                      cx="28.8"
                      cy="73.1"
                      r="6.9"
                    />
                    <path
                      d="M56,101 C55.1,100.6 54.7,99.6 55,98.7 C55.4,97.8 56.4,97.4 57.3,97.7 C58.2,98.1 58.6,99.1 58.3,100 C57.9,101 56.9,101.4 56,101 L56,101 Z"
                      id="Shape"
                      opacity="0.073"
                    />
                    <circle
                      id="Oval"
                      opacity="0.111"
                      cx="77.8"
                      cy="34.1"
                      r="3"
                    />
                    <path
                      d="M56,30.2 C54.8,29.7 54.3,28.4 54.7,27.2 C55.2,26 56.5,25.5 57.7,25.9 C58.9,26.4 59.4,27.7 59,28.9 C58.5,30.1 57.2,30.7 56,30.2 L56,30.2 Z M68.7,7.7 C66.8,6.9 65.8,4.7 66.6,2.8 C67.4,0.9 69.6,-0.1 71.5,0.7 C73.4,1.5 74.4,3.7 73.6,5.6 C72.8,7.5 70.6,8.5 68.7,7.7 L68.7,7.7 Z M6.2,101.8 C1.9,100.1 -0.1,95.2 1.6,91 C3.3,86.7 8.2,84.7 12.4,86.4 C16.7,88.1 18.7,93 17,97.2 C15.3,101.4 10.5,103.5 6.2,101.8 L6.2,101.8 Z"
                      id="Shape"
                      opacity="0.16"
                    />
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div className="thermometer">
          <svg
            width="47"
            height="70"
            viewBox="0 0 47 70"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g id="Page-1" fill="none" fillRule="evenodd">
              <g id="thermometer" transform="translate(0 2)">
                <path
                  d="M16.9,35.5 C17.6,36.5 19,36.8 20.1,36.1 C21.1,35.4 21.4,34 20.7,32.9 C20,31.9 12.9,25.6 12.9,25.6 C12.9,25.6 16.2,34.4 16.9,35.5 L16.9,35.5 Z"
                  id="needle"
                  fill="#4E3440"
                />
              </g>
            </g>
          </svg>
        </div>
        <div className="e-boiling-tank">
          <div className="water">
            <svg viewBox="0 0 560 20" className="wave back">
              <use
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xlinkHref="#wave"
              />
            </svg>
            <svg viewBox="0 0 560 20" className="wave front">
              <use
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xlinkHref="#wave"
              />
            </svg>
            <div className="e-boiling-items-container">
              <div className="e-boil-item boil-item-1" />
              <div className="e-boil-item boil-item-2" />
              <div className="e-boil-item boil-item-3" />
              <div className="e-boil-item boil-item-4" />
              <div className="e-boil-item boil-item-5" />
              <div className="e-boil-item boil-item-6" />
              <div className="e-boil-item boil-item-7" />
            </div>
          </div>
        </div>
      </figure>
    </div>
  );
}
