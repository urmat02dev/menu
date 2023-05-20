import React from 'react';

const Loader = () => {
    return (
        <>


            <svg  style={{
                margin: "auto",
                display: "block",
                shapeRendering: "auto",
                width: "80px",
                height: "84px",
                viewBox: "0 0 100 100",
                preserveAspectRatio: "xMidYMid"
            }}>
                <g>
                    <circle cx="60" cy="50" r="4" fill="#e76a24">
                        <animate attributeName="cx" repeatCount="indefinite" dur="0.78125s" values="95;35" keyTimes="0;1" begin="-0.8576s"></animate>
                        <animate attributeName="fill-opacity" repeatCount="indefinite" dur="0.78125s" values="0;1;1" keyTimes="0;0.2;1" begin="-0.8576s"></animate>
                    </circle>
                    <circle cx="60" cy="50" r="4" fill="#e76a24">
                        <animate attributeName="cx" repeatCount="indefinite" dur="0.78125s" values="95;35" keyTimes="0;1" begin="-0.42240000000000005s"></animate>
                        <animate attributeName="fill-opacity" repeatCount="indefinite" dur="0.78125s" values="0;1;1" keyTimes="0;0.2;1" begin="-0.42240000000000005s"></animate>
                    </circle>
                    <circle cx="60" cy="50" r="4" fill="#e76a24">
                        <animate attributeName="cx" repeatCount="indefinite" dur="0.78125s" values="95;35" keyTimes="0;1" begin="0s"></animate>
                        <animate attributeName="fill-opacity" repeatCount="indefinite" dur="0.78125s" values="0;1;1" keyTimes="0;0.2;1" begin="0s"></animate>
                    </circle>
                </g><g transform="translate(-15 0)">
                <path d="M50 50L20 50A30 30 0 0 0 80 50Z" fill="#1c4595" transform="rotate(90 50 50)"></path>
                <path d="M50 50L20 50A30 30 0 0 0 80 50Z" fill="#1c4595">
                    <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="0.78125s" values="0 50 50;45 50 50;0 50 50" keyTimes="0;0.5;1"></animateTransform>
                </path>
                <path d="M50 50L20 50A30 30 0 0 1 80 50Z" fill="#1c4595">
                    <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="0.78125s" values="0 50 50;-45 50 50;0 50 50" keyTimes="0;0.5;1"></animateTransform>
                </path>
            </g>
            </svg>
        </>
    );
};

export default Loader;