// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React, { useEffect } from "react";
import * as config from "../../config";
import OvenPlayer from "ovenplayer";

// Styles
// import './VideoPlayer.css';

const CustomPlayer = (props) => {
    useEffect(() => {
        OvenPlayer.create(props.id, {
            autoStart: true,
            autoFallback: true,
            mute: true,
            controls: true,
            sources: [
                {
                    label: "label_for_webrtc",
                    type: "hls",
                    file: props.url
                    // file: "https://vod.ome-test-2.bemyvega.dev/default_app_TZP2jwRJFmxjHDGgrGzb34-ptz/2022-11-18T10:58:25+0000/llhls.m3u8"
                }
            ]
        });
    }, []);

    return (
        <div className="player-wrapper">
            <div id={props.id} className="video-elem pos-absolute full-width"></div>
            {/* <div className="aspect-169 pos-relative full-width full-height">
                <video id={props.id} className="video-elem pos-absolute full-width" playsInline muted controls></video>
            </div> */}
        </div>
    );
};

export default CustomPlayer;
