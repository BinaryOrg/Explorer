import React, { useRef, useEffect } from "react";
import "./Map.css";

export default function Map(props) {
  {
    /* useRef() can be used to create references, which  */
  }
  const mapRef = useRef();

  const { center, zoom } = props;

  {
    /* useEffect() allows us to register logic, a function that should be execute when a certain input changes */
  }
  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: center,
      zoom: zoom,
    });

    new window.google.maps.Marker({ position: props.center, map: map });

    {
      /* This map now need a dom node where it should be rendered. To solve this we use useRef() hook*/
    }
  }, [center, zoom]);

  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
    ></div>
  );
}
