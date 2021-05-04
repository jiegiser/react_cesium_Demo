import React, { useEffect, useRef } from 'react'
// import Cesium from 'cesium'
import "cesium/Build/Cesium/Widgets/widgets.css";
const Cesium = require('cesium');

(window as any).CESIUM_BASE_URL = './assets/Cesium'
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkZWZhNGE2NS00NDE1LTQxM2YtYTEwYS1lOTFlYzNmODAyYzYiLCJpZCI6MjU5LCJpYXQiOjE2MTcyOTU3MTh9.gObU9w59kN_6DExqYPt2fikqEGIxanzUj_HS_Cw3Ets'

const Map3d = () => {

  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    mapRef && mapRef.current && new Cesium.Viewer(mapRef.current)
  }, [])

  return <div ref={mapRef}></div>
}

export default Map3d